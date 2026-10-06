import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/ui";
import { fcfa } from "@/lib/brand";
import { FORMATIONS } from "@/lib/data";

export const metadata: Metadata = { title: "Formations" };

export default function AdminFormationsPage() {
  return (
    <>
      <div className="eyebrow t">Catalogue interne · session janvier 2027</div>
      <h1 className="h-page" style={{ marginTop: 10 }}>Formations</h1>
      <div className="col" style={{ marginTop: 24 }}>
        {FORMATIONS.map((f) => (
          <article key={f.code} className="card row gap16" style={{ padding: 16, marginBottom: 12 }}>
            <Photo src={f.img} w={96} h={96} pos={f.pos} radius={16} />
            <div style={{ flex: 1 }}>
              <div className="eyebrow">{f.code} · {f.places} places</div>
              <b>{f.nom}</b>
              <div className="muted" style={{ fontSize: 12.5 }}>{f.rythme} · rentrée {f.rentree}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="num" style={{ fontSize: 22 }}>{fcfa(f.tarif)}</div>
              <Link className="link" href="/#ecole">Voir la vitrine</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
