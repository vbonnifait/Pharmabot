import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Produit: [
    { label: "Fonctionnalités", href: "/features" },
    { label: "Tarifs", href: "/pricing" },
    { label: "Kiosk démo", href: "/kiosk" },
    { label: "Intégrations", href: "/integrations" },
  ],
  Ressources: [
    { label: "Blog & Conformité", href: "/blog" },
    { label: "Documentation", href: "/docs" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/contact" },
  ],
  Légal: [
    { label: "Mentions légales", href: "/legal" },
    { label: "Politique de confidentialité", href: "/privacy" },
    { label: "CGV", href: "/cgv" },
    { label: "RGPD", href: "/rgpd" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.svg" alt="PharmaBot" width={150} height={38} className="brightness-0 invert" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              L'assistant intelligent pour les pharmacies. Répondez instantanément aux questions des patients sur les médicaments.
            </p>
            <div className="space-y-2 text-sm">
              <a href="mailto:contact@pharmabot.fr" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                contact@pharmabot.fr
              </a>
              <a href="tel:+33123456789" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +33 1 23 45 67 89
              </a>
              <span className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                Paris, France
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white text-sm mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} PharmaBot SAS. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              Conformité RGPD
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              Hébergement HDS France
            </span>
            <span>Financé par BPIfrance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
