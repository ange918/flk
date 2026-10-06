import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = { title: "Paramètres" };

export default function ParametresPage() {
  return (
    <>
      <div className="eyebrow t">Plateforme</div>
      <h1 className="h-page" style={{ marginTop: 10 }}>Paramètres</h1>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
        {[
          ["Année académique", "2026–2027 · session janvier 2027"],
          ["Devise", "Franc CFA (XOF) · affichage FCFA"],
          ["Relances", "J+3, J+10, J+20 · WhatsApp + e-mail"],
          ["Langue", "Français · EN et Fɔ̀ngbè prévus"],
          ["Établissement", `${BRAND.name} · ${BRAND.city}`],
          ["Contact", `${BRAND.mail} · ${BRAND.tel}`],
        ].map(([a, b]) => (
          <div key={a} className="card p"><div className="eyebrow">{a}</div><div style={{ marginTop: 8, fontWeight: 700 }}>{b}</div></div>
        ))}
      </div>
      <p className="muted" style={{ marginTop: 18 }}>
        L’identité visuelle se règle dans <Link className="link" href="/admin/marque-blanche">Marque blanche</Link>. TODO : persistance Supabase.
      </p>
    </>
  );
}
