import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Pill,
  AlertTriangle,
  FileText,
  Layers,
} from "lucide-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 pb-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Nouveau – Conformité RGPD & HAS garantie
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              L&apos;assistant médicamenteux{" "}
              <span className="text-blue-600">intelligent</span>{" "}
              pour votre pharmacie
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              PharmaBot répond en temps réel aux questions de vos patients sur les
              interactions médicamenteuses, la possibilité d&apos;écraser les comprimés,
              les formes galéniques et les notices — directement sur borne en pharmacie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/pricing"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Démarrer l&apos;essai gratuit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kiosk"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold text-center hover:bg-gray-50 transition-colors"
              >
                Voir la démo borne
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Sans engagement 30 jours
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Installation en 48h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Support pharmacien dédié
              </span>
            </div>
          </div>

          {/* Mock kiosk */}
          <div className="relative">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
              <div className="bg-gray-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-600 p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Pill className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">PharmaBot</div>
                    <div className="text-blue-200 text-xs">Assistant médicamenteux</div>
                  </div>
                  <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="bg-gray-50 p-4 space-y-3 min-h-48">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Pill className="w-3 h-3 text-blue-600" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm p-3 text-xs text-gray-700 shadow-sm max-w-[80%]">
                      Bonjour ! Comment puis-je vous aider aujourd&apos;hui ?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-3 text-xs text-white max-w-[80%]">
                      Puis-je écraser le Xarelto ?
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Pill className="w-3 h-3 text-blue-600" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm p-3 text-xs text-gray-700 shadow-sm max-w-[80%]">
                      ✅ Oui, le Xarelto peut être écrasé et mélangé avec 30 ml d&apos;eau.
                    </div>
                  </div>
                </div>
                <div className="bg-white border-t p-3 grid grid-cols-2 gap-2">
                  {["Interactions", "Écraser ?", "Notice", "Galénique"].map((btn) => (
                    <div key={btn} className="bg-blue-50 text-blue-700 text-xs font-medium py-2 px-3 rounded-lg text-center">
                      {btn}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mx-auto mt-4 w-8 h-8 bg-gray-700 rounded-b-full"></div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">98%</div>
              <div className="text-xs text-gray-500">satisfaction</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3 border border-gray-100">
              <div className="text-2xl font-bold text-green-600">{"<"} 2s</div>
              <div className="text-xs text-gray-500">temps de réponse</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { value: "5", label: "Pharmacies pilotes", suffix: "" },
    { value: "150", label: "Par mois / borne", suffix: "€" },
    { value: "98", label: "Satisfaction patient", suffix: "%" },
    { value: "48h", label: "Délai d'installation", suffix: "" },
  ];
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-blue-600">{s.value}{s.suffix}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ──────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      icon: AlertTriangle,
      color: "text-orange-600",
      bg: "bg-orange-50",
      title: "Interactions médicamenteuses",
      desc: "Détection instantanée des interactions dangereuses entre médicaments. Base de données mise à jour en continu.",
    },
    {
      icon: Layers,
      color: "text-blue-600",
      bg: "bg-blue-50",
      title: "Broyage / Écrasement",
      desc: "Réponse immédiate sur la possibilité d'écraser ou couper les comprimés selon le RCP officiel.",
    },
    {
      icon: FileText,
      color: "text-green-600",
      bg: "bg-green-50",
      title: "Notices patients",
      desc: "Accès simplifié aux informations clés de la notice : posologie, contre-indications, effets indésirables.",
    },
    {
      icon: Pill,
      color: "text-purple-600",
      bg: "bg-purple-50",
      title: "Formes galéniques",
      desc: "Explication claire des différentes formes (comprimé, gélule, patch, sirop…) et de leurs implications.",
    },
    {
      icon: ShieldCheck,
      color: "text-teal-600",
      bg: "bg-teal-50",
      title: "Conformité & Sécurité",
      desc: "Hébergement HDS, chiffrement bout-en-bout, logs anonymisés. Conforme RGPD et référentiels HAS.",
    },
    {
      icon: BarChart3,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      title: "Analytics & Rapports",
      desc: "Tableau de bord pour suivre les questions les plus fréquentes et optimiser l'accompagnement patient.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Fonctionnalités
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tout ce dont votre pharmacie a besoin
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PharmaBot couvre les 4 grandes catégories de questions médicamenteuses
            et s&apos;intègre parfaitement dans votre flux de conseil officinal.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow group">
              <div className={`w-10 h-10 ${f.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How it works ──────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { n: "01", title: "Commande en ligne", desc: "Souscrivez à un abonnement depuis notre espace client. Choisissez le plan adapté à votre groupement." },
    { n: "02", title: "Installation de la borne", desc: "Notre partenaire Acrelec livre et installe la borne en 48h. Zéro configuration technique de votre côté." },
    { n: "03", title: "Formation incluse", desc: "Session de prise en main d'1h pour votre équipe. Support téléphonique 6j/7 inclus dans l'abonnement." },
    { n: "04", title: "Go live & Suivi", desc: "La borne est opérationnelle. Suivez les interactions depuis votre tableau de bord en temps réel." },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Opérationnel en 48 heures</h2>
          <p className="text-gray-600">Un processus simple, de la commande à la mise en service.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.n} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center text-sm font-bold mb-4">
                {step.n}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Marie Lecomte",
      role: "Pharmacienne, Groupement PHR",
      content: "PharmaBot a réduit de 40% les questions répétitives en comptoir. Mon équipe se concentre sur le conseil à valeur ajoutée.",
      rating: 5,
    },
    {
      name: "Jean-Pierre Morel",
      role: "Directeur, Réseau Optipharm",
      content: "L'installation a été ultra-rapide. Les patients adorent pouvoir poser leurs questions en toute discrétion sur la borne.",
      rating: 5,
    },
    {
      name: "Sophie Dubois",
      role: "Pharmacienne titulaire, Paris 15e",
      content: "La conformité RGPD était ma principale inquiétude. L'hébergement HDS et les logs anonymisés m'ont convaincue.",
      rating: 5,
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que disent nos pharmaciens</h2>
          <p className="text-gray-600">5 pharmacies pilotes, 100% satisfaites.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{t.content}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Partners ──────────────────────────────────────────────────────────────
function Partners() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-gray-400 mb-8 uppercase tracking-widest font-medium">
          Partenaires & certifications
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {["Acrelec", "BPIfrance", "HAS", "ANSM", "Thériaque", "Hébergeur HDS"].map((p) => (
            <div key={p} className="bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm font-semibold text-gray-600 shadow-sm">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Users className="w-10 h-10 text-blue-200 mx-auto mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Rejoignez nos pharmacies pilotes
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Seulement 5 places disponibles en 2025. Bénéficiez d&apos;un tarif préférentiel
          et d&apos;un accompagnement personnalisé en tant que pharmacie fondatrice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pricing" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors">
            Voir les tarifs
          </Link>
          <Link href="/contact" className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
            Parler à un expert
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Partners />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
