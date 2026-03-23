import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fidelatoo - Carte de fidélité numérique pour les commerces",
  description: "Créez votre programme de fidélité en 3 minutes. Application de carte de fidélité numérique pour les commerces de proximité et franchises. Aucune application requise pour vos clients.",
  keywords: "carte de fidélité, programme de fidélité, fidélisation client, commerce local, QR code, points fidélité",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
