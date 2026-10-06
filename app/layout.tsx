import type { Metadata } from "next";
import { Lexend, Manrope } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-lexend",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ISDAM — École de mode & stylisme",
    template: "%s — ISDAM",
  },
  description:
    "ISDAM, plateforme marque blanche pour académies de mode et de stylisme. Admissions, pédagogie, scolarité et books — démonstration frontend.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${lexend.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
