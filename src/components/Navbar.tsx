"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/features", label: "Fonctionnalités" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/blog", label: "Ressources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="PharmaBot" width={160} height={40} priority />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/admin"
              className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Espace client
            </Link>
            <Link
              href="/pricing"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Demander une démo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <Link
                href="/admin"
                className="block py-2 text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setOpen(false)}
              >
                Espace client
              </Link>
              <Link
                href="/pricing"
                className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center"
                onClick={() => setOpen(false)}
              >
                Demander une démo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
