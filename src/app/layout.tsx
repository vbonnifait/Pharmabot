import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PharmaBot – L'assistant intelligent pour les pharmacies",
  description:
    "PharmaBot est un chatbot spécialisé installé sur borne en pharmacie. Il répond aux questions sur les interactions médicamenteuses, la possibilité d'écraser les comprimés et les notices patients.",
  keywords: ["pharmacie", "chatbot", "médicaments", "borne interactive", "interactions médicamenteuses"],
  authors: [{ name: "PharmaBot SAS" }],
  openGraph: {
    title: "PharmaBot – L'assistant intelligent pour les pharmacies",
    description: "Répondez instantanément aux questions médicamenteuses de vos patients.",
    type: "website",
    locale: "fr_FR",
    siteName: "PharmaBot",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
