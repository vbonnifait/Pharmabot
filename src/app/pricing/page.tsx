import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, X, Zap, Building2, Crown } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    icon: Zap,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    desc: "Idéal pour une pharmacie indépendante avec 1 borne.",
    kiosks: "1 borne",
    features: [
      "1 borne Acrelec incluse",
      "4 modules de questions",
      "Tableau de bord basique",
      "Support email",
      "Mises à jour automatiques",
      "Logs anonymisés RGPD",
    ],
    missing: ["Analytics avancés", "Multi-bornes", "API groupement"],
    cta: "Commencer",
    popular: false,
  },
  {
    id: "standard",
    name: "Standard",
    price: 150,
    icon: Building2,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-500",
    desc: "La solution complète pour les pharmacies actives.",
    kiosks: "1 à 3 bornes",
    features: [
      "Jusqu'à 3 bornes Acrelec",
      "4 modules de questions",
      "Tableau de bord complet",
      "Support téléphonique 6j/7",
      "Analytics & rapports mensuels",
      "Logs anonymisés RGPD",
      "Mises à jour automatiques",
    ],
    missing: ["API groupement illimitée"],
    cta: "Choisir Standard",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 250,
    icon: Crown,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    desc: "Pour les groupements et réseaux de pharmacies.",
    kiosks: "Bornes illimitées",
    features: [
      "Bornes illimitées",
      "4 modules + modules custom",
      "Tableau de bord multi-sites",
      "Support dédié + CSM",
      "Analytics avancés & BI",
      "API groupement complète",
      "SLA 99,9% garanti",
      "Formation équipe incluse",
    ],
    missing: [],
    cta: "Contacter un expert",
    popular: false,
  },
];

const faq = [
  {
    q: "La borne Acrelec est-elle incluse dans l'abonnement ?",
    a: "La borne Acrelec (800€ HT) peut être achetée directement ou incluse en location dans les plans Standard et Premium. Nous gérons tout le processus avec notre partenaire Acrelec.",
  },
  {
    q: "Puis-je changer de plan à tout moment ?",
    a: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. La facturation est proratisée au jour près.",
  },
  {
    q: "Quelle est la durée d'engagement minimum ?",
    a: "Nos abonnements sont sans engagement, résiliables à tout moment avec un préavis de 30 jours. Nous proposons également une remise de 2 mois offerts pour un engagement annuel.",
  },
  {
    q: "Les données patients sont-elles sécurisées ?",
    a: "Absolument. Aucune donnée personnelle patient n'est collectée. Seuls des logs anonymisés (catégorie de question, temps de réponse) sont enregistrés. Hébergement HDS France, conformité RGPD totale.",
  },
  {
    q: "PharmaBot est-il compatible avec mon logiciel officinal ?",
    a: "PharmaBot fonctionne de manière autonome sur la borne. Une intégration avec les LGP (Winpharma, Lgpi, Opus, etc.) est prévue pour la v2 du produit.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Tarifs transparents
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Un prix simple, sans surprises
            </h1>
            <p className="text-gray-600 text-lg">
              Abonnement mensuel tout compris. Borne, logiciel, support et mises à jour inclus.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl border-2 ${plan.border} p-6 relative ${plan.popular ? "shadow-xl" : "shadow-sm"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Le plus populaire
                    </div>
                  )}
                  <div className={`w-10 h-10 ${plan.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <plan.icon className={`w-5 h-5 ${plan.color}`} />
                  </div>
                  <div className="mb-1 font-bold text-gray-900 text-lg">{plan.name}</div>
                  <div className="text-sm text-gray-500 mb-4">{plan.desc}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}€</span>
                    <span className="text-gray-500 text-sm">/mois HT</span>
                  </div>
                  <div className={`text-xs font-semibold ${plan.color} mb-6`}>{plan.kiosks}</div>

                  <Link
                    href={plan.id === "premium" ? "/contact" : `/checkout?plan=${plan.id}`}
                    className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-colors mb-6 ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <ul className="space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                    {plan.missing.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                        <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kiosk hardware note */}
        <section className="py-12 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Borne Acrelec — Matériel certifié pharmacie
            </h2>
            <p className="text-gray-600 mb-6">
              Nos bornes sont fabriquées par Acrelec, leader mondial des bornes interactives en santé.
              Écran tactile 21&quot; anti-reflets, lecteur QR, design premium, installation clé en main.
            </p>
            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
              <span className="text-3xl font-bold text-gray-900">800€</span>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-700">Achat unique HT</div>
                <div className="text-xs text-gray-500">ou inclus en location selon plan</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Questions fréquentes</h2>
            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.q} className="border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
