import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Monitor,
  MessageSquare,
  TrendingUp,
  Users,
  AlertCircle,
  CheckCircle2,
  BarChart3,
  Settings,
  Bell,
  Download,
} from "lucide-react";

// ─── Mock data ─────────────────────────────────────────────────────────────
const kiosks = [
  { id: "KIOSK-001", location: "Comptoir principal", status: "ACTIVE", interactions: 342, lastPing: "Il y a 2 min" },
  { id: "KIOSK-002", location: "Espace conseil", status: "ACTIVE", interactions: 218, lastPing: "Il y a 5 min" },
  { id: "KIOSK-003", location: "Zone attente", status: "MAINTENANCE", interactions: 0, lastPing: "Il y a 2h" },
];

const stats = [
  { label: "Interactions ce mois", value: "1 247", icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50", trend: "+12%" },
  { label: "Taux satisfaction", value: "97.3%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50", trend: "+2.1%" },
  { label: "Bornes actives", value: "2 / 3", icon: Monitor, color: "text-purple-600", bg: "bg-purple-50", trend: "" },
  { label: "Questions / jour moy.", value: "41", icon: BarChart3, color: "text-orange-600", bg: "bg-orange-50", trend: "+8%" },
];

const recentCategories = [
  { label: "Écraser un comprimé", count: 487, pct: 39, color: "bg-blue-500" },
  { label: "Interactions médicamenteuses", count: 398, pct: 32, color: "bg-orange-500" },
  { label: "Notice patient", count: 237, pct: 19, color: "bg-green-500" },
  { label: "Formes galéniques", count: 125, pct: 10, color: "bg-purple-500" },
];

const alerts = [
  { type: "warning", msg: "KIOSK-003 en maintenance depuis 2h – vérifier la connexion réseau" },
  { type: "info", msg: "Mise à jour base médicamenteuse disponible (v2.4.1)" },
  { type: "success", msg: "Facture mars 2025 disponible au téléchargement" },
];

export default function AdminPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
              <p className="text-sm text-gray-500 mt-1">Pharmacie Centrale – Groupement PHR</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 rounded-xl px-4 py-2 bg-white hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Exporter
              </button>
              <button className="relative p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {alerts.length}
                </span>
              </button>
              <button className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="mb-6 space-y-2">
              {alerts.map((a, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm border ${
                    a.type === "warning"
                      ? "bg-amber-50 border-amber-200 text-amber-800"
                      : a.type === "success"
                      ? "bg-green-50 border-green-200 text-green-800"
                      : "bg-blue-50 border-blue-200 text-blue-800"
                  }`}
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {a.msg}
                </div>
              ))}
            </div>
          )}

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className={`w-9 h-9 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <s.icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                {s.trend && (
                  <div className="text-xs text-green-600 font-semibold mt-1">{s.trend} ce mois</div>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Kiosks list */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-blue-600" />
                  Parc de bornes
                </h2>
                <button className="text-xs text-blue-600 font-semibold hover:underline">
                  Gérer
                </button>
              </div>
              <div className="divide-y divide-gray-50">
                {kiosks.map((k) => (
                  <div key={k.id} className="flex items-center gap-4 px-5 py-4">
                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                      k.status === "ACTIVE" ? "bg-green-500" :
                      k.status === "MAINTENANCE" ? "bg-amber-400" : "bg-gray-300"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900">{k.id}</div>
                      <div className="text-xs text-gray-500">{k.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-700">{k.interactions} interactions</div>
                      <div className="text-xs text-gray-400">{k.lastPing}</div>
                    </div>
                    <div className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                      k.status === "ACTIVE" ? "bg-green-50 text-green-700" :
                      k.status === "MAINTENANCE" ? "bg-amber-50 text-amber-700" :
                      "bg-gray-100 text-gray-500"
                    }`}>
                      {k.status === "ACTIVE" ? "Actif" : k.status === "MAINTENANCE" ? "Maintenance" : "Inactif"}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 border-t border-gray-100">
                <button className="w-full text-sm text-blue-600 font-semibold border-2 border-dashed border-blue-200 rounded-xl py-3 hover:bg-blue-50 transition-colors">
                  + Ajouter une borne
                </button>
              </div>
            </div>

            {/* Category breakdown */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="p-5 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                  Questions par catégorie
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">Ce mois</p>
              </div>
              <div className="p-5 space-y-4">
                {recentCategories.map((cat) => (
                  <div key={cat.label}>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-gray-700 font-medium">{cat.label}</span>
                      <span className="text-gray-500">{cat.count} ({cat.pct}%)</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${cat.color} rounded-full transition-all`}
                        style={{ width: `${cat.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subscription info */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-semibold text-gray-900 mb-1">Abonnement Standard</h2>
                <p className="text-sm text-gray-500">
                  Prochain renouvellement : <strong>1er avril 2025</strong> — 150€ HT/mois
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-sm text-green-600 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Actif
                </div>
                <button className="text-sm text-blue-600 font-semibold border border-blue-200 rounded-xl px-4 py-2 hover:bg-blue-50 transition-colors">
                  Gérer l&apos;abonnement
                </button>
                <button className="text-sm text-gray-600 font-semibold border border-gray-200 rounded-xl px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5" />
                  Factures
                </button>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                Équipe
              </h2>
              <button className="text-sm text-blue-600 font-semibold hover:underline">
                + Inviter
              </button>
            </div>
            <div className="space-y-3">
              {[
                { name: "Marie Lecomte", role: "Administrateur", email: "m.lecomte@pharmacie-centrale.fr" },
                { name: "Thomas Bernard", role: "Pharmacien", email: "t.bernard@pharmacie-centrale.fr" },
              ].map((u) => (
                <div key={u.email} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                    {u.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-900">{u.name}</div>
                    <div className="text-xs text-gray-500">{u.email}</div>
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">{u.role}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
