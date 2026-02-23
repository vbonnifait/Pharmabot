/**
 * PharmaBot – Moteur de réponse local (sans API externe)
 * En production, remplacer par l'intégration d'une BDD médicamenteuse
 * (ex: Thériaque, Base Claude, HAS, Vidal Open)
 */

export type QueryCategory =
  | "DRUG_INTERACTION"
  | "CRUSHABLE_TABLET"
  | "GALENIC_FORM"
  | "PATIENT_NOTICE"
  | "OTHER";

export interface PharmaBotResponse {
  category: QueryCategory;
  answer: string;
  disclaimer: string;
  sources?: string[];
  urgency?: "normal" | "warning" | "danger";
}

// ─── Données de démonstration ──────────────────────────────────────────────

const CRUSHABLE_DATA: Record<string, { crushable: boolean; note: string }> = {
  doliprane: {
    crushable: true,
    note: "Le Doliprane (paracétamol) peut être écrasé. Mélanger avec une petite quantité d'aliment ou de boisson.",
  },
  efferalgan: {
    crushable: false,
    note: "L'Efferalgan effervescent ne doit pas être écrasé. Privilégier la forme sirop si nécessaire.",
  },
  kardegic: {
    crushable: true,
    note: "Le Kardégic (aspirine) peut être écrasé ou dissous dans de l'eau.",
  },
  xarelto: {
    crushable: true,
    note: "Le Xarelto (rivaroxaban) peut être écrasé et mélangé avec de l'eau ou une compote. Administrer immédiatement.",
  },
  eliquis: {
    crushable: true,
    note: "L'Eliquis (apixaban) peut être écrasé. Mélanger avec 30 ml d'eau ou de jus de pomme.",
  },
  metformine: {
    crushable: false,
    note: "La Metformine LP ne doit JAMAIS être écrasée (libération prolongée). Utiliser la forme ordinaire à la place.",
  },
};

const INTERACTION_DATA: Record<string, { drug: string; severity: string; description: string }[]> = {
  warfarine: [
    {
      drug: "Aspirine",
      severity: "Majeur",
      description: "Risque hémorragique augmenté. Surveillance INR renforcée indispensable.",
    },
    {
      drug: "Ibuprofène",
      severity: "Majeur",
      description: "Association déconseillée. Augmentation du risque de saignement.",
    },
    {
      drug: "Paracétamol",
      severity: "Modéré",
      description: "Possible potentialisation à fortes doses. Doses ≤ 2g/j généralement tolérées.",
    },
  ],
  metformine: [
    {
      drug: "Alcool",
      severity: "Majeur",
      description: "Risque d'acidose lactique potentialisé. Éviter l'alcool.",
    },
    {
      drug: "Produits de contraste iodés",
      severity: "Majeur",
      description: "Arrêter la metformine 48h avant et 48h après l'injection.",
    },
  ],
};

// ─── Analyse de la requête ─────────────────────────────────────────────────

function detectCategory(query: string): QueryCategory {
  const q = query.toLowerCase();
  if (q.includes("écraser") || q.includes("broyer") || q.includes("couper") || q.includes("comprimé")) {
    return "CRUSHABLE_TABLET";
  }
  if (q.includes("interaction") || q.includes("associer") || q.includes("prendre avec") || q.includes("mélanger")) {
    return "DRUG_INTERACTION";
  }
  if (q.includes("notice") || q.includes("posologie") || q.includes("dosage") || q.includes("effet")) {
    return "PATIENT_NOTICE";
  }
  if (q.includes("forme") || q.includes("galénique") || q.includes("gélule") || q.includes("sirop")) {
    return "GALENIC_FORM";
  }
  return "OTHER";
}

function findDrug(query: string, data: Record<string, unknown>): string | null {
  const q = query.toLowerCase();
  for (const key of Object.keys(data)) {
    if (q.includes(key)) return key;
  }
  return null;
}

// ─── Moteur principal ──────────────────────────────────────────────────────

export function processQuery(query: string): PharmaBotResponse {
  const category = detectCategory(query);

  const disclaimer =
    "Cette information est fournie à titre indicatif. Consultez toujours votre pharmacien ou médecin avant de modifier votre traitement.";

  if (category === "CRUSHABLE_TABLET") {
    const drug = findDrug(query, CRUSHABLE_DATA);
    if (drug) {
      const data = CRUSHABLE_DATA[drug];
      return {
        category,
        answer: data.crushable
          ? `✅ ${data.note}`
          : `❌ ${data.note}`,
        disclaimer,
        urgency: data.crushable ? "normal" : "warning",
        sources: ["Base de données médicamenteuses Thériaque", "Résumé des Caractéristiques du Produit (RCP)"],
      };
    }
    return {
      category,
      answer:
        "Je n'ai pas trouvé ce médicament dans ma base de données. Votre pharmacien peut vous confirmer si ce comprimé peut être écrasé en consultant le RCP du produit.",
      disclaimer,
      urgency: "warning",
    };
  }

  if (category === "DRUG_INTERACTION") {
    const drug = findDrug(query, INTERACTION_DATA);
    if (drug) {
      const interactions = INTERACTION_DATA[drug];
      const lines = interactions
        .map((i) => `• **${i.drug}** (${i.severity}) : ${i.description}`)
        .join("\n");
      return {
        category,
        answer: `Interactions connues pour **${drug}** :\n\n${lines}`,
        disclaimer,
        urgency: interactions.some((i) => i.severity === "Majeur") ? "danger" : "warning",
        sources: ["Base Claude (HAS)", "Thériaque", "Vidal"],
      };
    }
    return {
      category,
      answer:
        "Pour vérifier les interactions de ce médicament, je vous recommande de consulter directement votre pharmacien qui dispose d'outils professionnels certifiés.",
      disclaimer,
      urgency: "warning",
    };
  }

  if (category === "PATIENT_NOTICE") {
    return {
      category,
      answer:
        "Pour accéder à la notice complète de votre médicament, rendez-vous sur **base-donnees-publique.medicaments.gouv.fr** (site officiel ANSM) ou demandez une impression à votre pharmacien.",
      disclaimer,
      sources: ["ANSM – Base de données publique des médicaments"],
    };
  }

  if (category === "GALENIC_FORM") {
    return {
      category,
      answer:
        "La forme galénique d'un médicament (comprimé, gélule, sirop, patch…) influence son mode d'administration et sa durée d'action. Votre pharmacien peut vous orienter vers la forme la plus adaptée à votre situation.",
      disclaimer,
    };
  }

  return {
    category: "OTHER",
    answer:
      "Je suis spécialisé dans les questions sur les médicaments : interactions, possibilité d'écraser les comprimés, formes galéniques et notices. Reformulez votre question ou appuyez sur l'une des catégories ci-dessus.",
    disclaimer,
  };
}
