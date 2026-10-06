import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";

export const metadata: Metadata = { title: "Briefs" };

export default function BriefsPage() {
  return (
    <>
      <div className="row between" style={{ alignItems: "flex-end", gap: 12, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow t">STY-2 · semestre 3</div>
          <h1 className="h-page" style={{ marginTop: 10 }}>Briefs</h1>
        </div>
        <Link className="btn terra" href="/formateur/briefs/nouveau"><Icon name="plus" size={15} /> Nouveau brief</Link>
      </div>
      <div className="col" style={{ marginTop: 24, gap: 12 }}>
        {[
          ["Collection Capsule « Terre rouge »", "Publié · 22 élèves · J2 en correction", "J3 le 16 oct."],
          ["Fiches techniques · veste tailleur", "Brouillon co-évalué avec R. Agbossou", "23 oct."],
          ["Planche 9 têtes", "Clos · notes publiées", "30 sept."],
        ].map(([t, s, d]) => (
          <Link key={t} href="/formateur/briefs/nouveau" className="card row between" style={{ padding: "18px 20px" }}>
            <div><b>{t}</b><div className="muted" style={{ fontSize: 12.5 }}>{s}</div></div>
            <span className="badge b-line">{d}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
