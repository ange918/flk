import type { Metadata } from "next";
import { Avatar } from "@/components/ui";
import { TRAINERS } from "@/lib/data";

export const metadata: Metadata = { title: "Formateurs" };

export default function FormateursPage() {
  return (
    <>
      <div className="eyebrow t">Équipe pédagogique</div>
      <h1 className="h-page" style={{ marginTop: 10 }}>Formateurs</h1>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 24 }}>
        {TRAINERS.map((t) => (
          <article key={t.name} className="card p">
            <Avatar src={t.img} size={64} />
            <div className="serif" style={{ fontSize: 22, marginTop: 12 }}>{t.name}</div>
            <div className="muted">{t.role}</div>
            <div className="row between" style={{ marginTop: 14, fontSize: 13 }}><span className="muted">Promos</span><b>{t.promo}</b></div>
            <div className="row between" style={{ fontSize: 13 }}><span className="muted">Charge</span><b className="tnum">{t.hours}</b></div>
          </article>
        ))}
      </div>
    </>
  );
}
