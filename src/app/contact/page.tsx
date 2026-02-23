import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, MessageSquare, Building2 } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Parlons de votre projet</h1>
            <p className="text-gray-600 text-lg">
              Notre équipe vous accompagne de la démo à l&apos;installation. Réponse garantie sous 24h.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Demander une démo</h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                      <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400" placeholder="Marie" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400" placeholder="Dupont" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email professionnel</label>
                    <input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400" placeholder="m.dupont@pharmacie.fr" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400" placeholder="+33 1 23 45 67 89" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom de la pharmacie / groupement</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400" placeholder="Pharmacie Centrale / Groupement PHR" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de bornes envisagées</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 bg-white">
                      <option>1 borne</option>
                      <option>2–3 bornes</option>
                      <option>4–10 bornes</option>
                      <option>Plus de 10 bornes</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
                    <textarea rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 resize-none" placeholder="Décrivez votre projet ou vos questions…" />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    Envoyer ma demande
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Vos données sont traitées conformément à notre politique RGPD. Pas de démarchage non sollicité.
                  </p>
                </form>
              </div>

              {/* Contact info */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Coordonnées</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: "Email", value: "contact@pharmabot.fr" },
                      { icon: Phone, label: "Téléphone", value: "+33 1 23 45 67 89" },
                      { icon: MapPin, label: "Adresse", value: "Paris, France" },
                      { icon: Clock, label: "Horaires", value: "Lun–Ven 9h–18h" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">{item.label}</div>
                          <div className="text-sm font-medium text-gray-900">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-start gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Groupements de pharmacies</h3>
                      <p className="text-sm text-gray-600">
                        Vous gérez un réseau de pharmacies ? Contactez notre équipe grands comptes pour un devis sur mesure et un pilote gratuit.
                      </p>
                    </div>
                  </div>
                  <a href="mailto:groupements@pharmabot.fr" className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-semibold hover:underline">
                    <Mail className="w-4 h-4" />
                    groupements@pharmabot.fr
                  </a>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Support technique</h3>
                      <p className="text-sm text-gray-600">
                        Vous êtes déjà client ? Accédez au support directement depuis votre espace client ou par email.
                      </p>
                      <a href="mailto:support@pharmabot.fr" className="inline-flex items-center gap-1.5 text-sm text-green-600 font-semibold hover:underline mt-2">
                        support@pharmabot.fr
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
