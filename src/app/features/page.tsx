import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  AlertTriangle, Layers, FileText, Pill,
  ShieldCheck, BarChart3, Monitor, Zap,
  Globe, Lock, RefreshCw, Headphones, ArrowRight,
} from "lucide-react";

const mainFeatures = [
  {
    icon: AlertTriangle, color: "text-orange-600", bg: "bg-orange-50",
    title: "Interactions médicamenteuses",
    desc: "Détection en temps réel des interactions entre médicaments. La base de données est mise à jour en continu depuis les sources officielles (Thériaque, ANSM). Alerte visuelle selon le niveau de gravité (modéré / majeur / contre-indication absolue).",
    points: ["Gravité codifiée (I, II, III)", "Sources ANSM et Thériaque", "Alerte visuelle immédiate", "Conseils personnalisés"],
  },
  {
    icon: Layers, color: "text-blue-600", bg: "bg-blue-50",
    title: "Broyage & écrasement de comprimés",
    desc: "Réponse immédiate et fiable sur la possibilité d'écraser, couper ou dissoudre un comprimé. Basé sur les RCP officiels et les guides pratiques pour les équipes soignantes et les aidants.",
    points: ["Résultat Oui / Non / Sous conditions", "Conseils de préparation", "Formes alternatives suggérées", "Guide pour patients sous sonde"],
  },
  {
    icon: FileText, color: "text-green-600", bg: "bg-green-50",
    title: "Notices patients simplifiées",
    desc: "Accès simplifié aux informations clés de la notice officielle. Résumé en langage clair des points essentiels : posologie, contre-indications, effets indésirables fréquents.",
    points: ["Résumé en langage patient", "Posologie & administration", "Effets indésirables fréquents", "Lien vers notice ANSM complète"],
  },
  {
    icon: Pill, color: "text-purple-600", bg: "bg-purple-50",
    title: "Formes galéniques",
    desc: "Explication claire des différentes formes médicamenteuses et de leurs implications pour l'administration. Particulièrement utile pour les patients âgés, pédiatriques ou sous PEG.",
    points: ["Comprimé LP vs comprimé simple", "Gélule vs comprimé", "Formes à éviter selon profil", "Conseils d'administration"],
  },
];

const technicalFeatures = [
  { icon: Monitor, title: "Interface borne optimisée", desc: "Écran tactile 21\", gros boutons accessibles, contraste élevé. Conçu pour tous les profils patients y compris seniors." },
  { icon: ShieldCheck, title: "Hébergement HDS", desc: "Données hébergées en France sur infrastructure certifiée Hébergeur de Données de Santé (HDS). Conformité RGPD native." },
  { icon: BarChart3, title: "Dashboard analytics", desc: "Tableau de bord temps réel avec statistiques d'utilisation, catégories les plus consultées et taux de satisfaction." },
  { icon: Zap, title: "Réponse < 2 secondes", desc: "Architecture optimisée pour une réponse instantanée. Pas de latence, expérience fluide même en heure de pointe." },
  { icon: Globe, title: "Multi-bornes & multi-sites", desc: "Gérez l'ensemble de votre parc de bornes depuis un seul tableau de bord. Vue consolidée pour les groupements." },
  { icon: Lock, title: "Anonymisation totale", desc: "Aucune donnée personnelle collectée. Seuls des logs anonymisés (catégorie, temps de réponse) sont enregistrés." },
  { icon: RefreshCw, title: "Mises à jour automatiques", desc: "Base médicamenteuse mise à jour automatiquement. Votre borne est toujours synchronisée avec les dernières données ANSM." },
  { icon: Headphones, title: "Support 6j/7", desc: "Équipe support dédiée disponible du lundi au samedi. SLA garanti selon votre plan. Hotline pharmacien prioritaire." },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Fonctionnalités
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Conçu pour les pharmaciens, utilisé par les patients
            </h1>
            <p className="text-gray-600 text-lg">
              PharmaBot couvre les 4 grandes questions médicamenteuses dans une interface pensée pour la borne en officine.
            </p>
          </div>
        </section>

        {/* Main features */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {mainFeatures.map((f, i) => (
              <div key={f.title} className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}>
                <div className="lg:w-1/2">
                  <div className={`w-12 h-12 ${f.bg} rounded-2xl flex items-center justify-center mb-5`}>
                    <f.icon className={`w-6 h-6 ${f.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{f.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{f.desc}</p>
                  <ul className="space-y-2">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className={`w-4 h-4 ${f.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${f.color.replace("text-", "bg-")}`} />
                        </div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`lg:w-1/2 ${f.bg} rounded-3xl p-12 flex items-center justify-center`}>
                  <f.icon className={`w-28 h-28 ${f.color} opacity-20`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical features */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Infrastructure & Sécurité</h2>
              <p className="text-gray-600">Une solution robuste, sécurisée et évolutive.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {technicalFeatures.map((f) => (
                <div key={f.title} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                    <f.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prêt à équiper votre pharmacie ?</h2>
            <p className="text-gray-600 mb-8">Essai gratuit 30 jours. Installation en 48h. Sans engagement.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                Voir les tarifs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/kiosk" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                Essayer la démo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
