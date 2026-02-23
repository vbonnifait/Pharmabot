import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, BookOpen, FileText, ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "rgpd-pharmacie-chatbot",
    category: "Conformité",
    icon: ShieldCheck,
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
    title: "RGPD en pharmacie : ce que vous devez savoir sur les chatbots",
    excerpt:
      "Les bornes interactives en pharmacie collectent-elles des données personnelles ? Comment garantir la conformité RGPD ? Nos réponses claires et actionables.",
    date: "15 mars 2025",
    readTime: "6 min",
  },
  {
    slug: "interactions-medicamenteuses-guide",
    category: "Guide professionnel",
    icon: BookOpen,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "Guide complet : interactions médicamenteuses à risque élevé",
    excerpt:
      "Les 20 interactions les plus fréquentes détectées par PharmaBot en pharmacie officinale. Anticoagulants, AINS, antidépresseurs : notre revue clinique.",
    date: "8 mars 2025",
    readTime: "10 min",
  },
  {
    slug: "broyer-comprime-guide-infirmiers",
    category: "Pratique clinique",
    icon: FileText,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    title: "Écraser les comprimés : guide pour les équipes soignantes",
    excerpt:
      "Quels médicaments peuvent être broyés ? Lesquels sont absolument contre-indiqués ? Un protocole pratique basé sur les RCP et les recommandations HAS.",
    date: "28 février 2025",
    readTime: "8 min",
  },
  {
    slug: "borne-pharmacie-acrelec-installation",
    category: "Matériel",
    icon: ShieldCheck,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    title: "Installation d'une borne Acrelec en pharmacie : guide étape par étape",
    excerpt:
      "De la commande à la mise en service : tout ce qu'il faut savoir sur l'installation technique d'une borne interactive PharmaBot dans votre officine.",
    date: "20 février 2025",
    readTime: "5 min",
  },
  {
    slug: "has-conformite-logiciel-pharmacie",
    category: "Réglementation",
    icon: ShieldCheck,
    iconColor: "text-teal-600",
    iconBg: "bg-teal-50",
    title: "HAS et logiciels de conseil officinal : quels référentiels appliquer ?",
    excerpt:
      "La Haute Autorité de Santé publie des référentiels pour les outils d'aide à la dispensation. Analyse des exigences applicables à PharmaBot.",
    date: "12 février 2025",
    readTime: "7 min",
  },
  {
    slug: "saas-pharmacie-modele-abonnement",
    category: "Business",
    icon: BookOpen,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50",
    title: "SaaS en pharmacie : pourquoi l'abonnement mensuel s'impose",
    excerpt:
      "Analyse du modèle économique SaaS appliqué au secteur officinal. Retour sur investissement, financement BPIfrance et perspective groupements.",
    date: "5 février 2025",
    readTime: "4 min",
  },
];

const categories = ["Tous", "Conformité", "Guide professionnel", "Pratique clinique", "Réglementation", "Matériel", "Business"];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Ressources & Conformité
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog PharmaBot
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Guides pratiques, veille réglementaire et bonnes pratiques pour les pharmaciens et leurs équipes.
            </p>
          </div>
        </section>

        {/* Category filter */}
        <section className="bg-white border-b border-gray-100 sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-xl transition-colors ${
                    i === 0
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured */}
            <div className="mb-8">
              <Link href={`/blog/${articles[0].slug}`} className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-8 h-8 ${articles[0].iconBg} rounded-lg flex items-center justify-center`}>
                        {(() => { const Icon = articles[0].icon; return <Icon className={`w-4 h-4 ${articles[0].iconColor}`} />; })()}
                      </div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{articles[0].category}</span>
                      <span className="text-xs text-gray-400">• {articles[0].readTime} de lecture</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {articles[0].title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{articles[0].excerpt}</p>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                      Lire l&apos;article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="lg:w-1/3 bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center p-8">
                    <ShieldCheck className="w-24 h-24 text-green-200" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(1).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 ${article.iconBg} rounded-lg flex items-center justify-center`}>
                      <article.icon className={`w-4 h-4 ${article.iconColor}`} />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{article.category}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 flex-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-50 mt-auto">
                    <span>{article.date}</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Restez informé des évolutions réglementaires
            </h2>
            <p className="text-gray-600 mb-6">
              Newsletter mensuelle : veille ANSM, HAS, RGPD et bonnes pratiques officinales.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@pharmacie.fr"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
                S&apos;abonner
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">Pas de spam. Désabonnement en 1 clic.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
