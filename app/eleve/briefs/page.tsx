import type { Metadata } from "next";
import Link from "next/link";
import { Bar } from "@/components/ui";

export const metadata: Metadata = { title: "Briefs & rendus" };

export default function EleveBriefs() {
  return (
    <>
      <div className="eyebrow t">STY-2</div>
      <h1 className="h-page" style={{ marginTop: 10 }}>Briefs & rendus</h1>
      <div className="col" style={{ marginTop: 24, gap: 14 }}>
        <article className="card p">
          <div className="row between"><b>Collection Capsule « Terre rouge »</b><span className="badge b-ocre">J−10</span></div>
          <p className="muted" style={{ marginTop: 8 }}>J3 rendu final · ven. 16 oct. 2026 à 12:00 · Ornella Sossa</p>
          <div style={{ marginTop: 12 }}><Bar value={66} /></div>
          <Link className="btn terra sm" style={{ marginTop: 16 }} href="/eleve/depot">Déposer le rendu</Link>
        </article>
        <article className="card p">
          <div className="row between"><b>Fiches techniques · veste tailleur</b><span className="badge b-line">ven. 23 oct.</span></div>
          <p className="muted" style={{ marginTop: 8 }}>Rodrigue Agbossou · dossier complet</p>
          <div style={{ marginTop: 12 }}><Bar value={25} /></div>
        </article>
      </div>
    </>
  );
}
