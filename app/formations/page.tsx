"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PublicHeader } from "@/components/public-header";
import { Photo, SiteFooter } from "@/components/ui";
import { fcfaN } from "@/lib/brand";
import { FORMATIONS } from "@/lib/data";

const FILTERS = ["Toutes (6)", "Diplômantes", "Certifiantes", "Temps plein", "Soir & week-end"];

export default function FormationsPage() {
  const [filter, setFilter] = useState(0);
  const [open, setOpen] = useState(FORMATIONS[0].code);
  const featured = FORMATIONS.find((f) => f.code === open) ?? FORMATIONS[0];
  const rest = FORMATIONS.filter((f) => {
    if (f.code === featured.code) return false;
    if (filter === 1) return f.diplome.toLowerCase().includes("diplôme");
    if (filter === 2) return f.diplome.toLowerCase().includes("certificat") || f.diplome.toLowerCase().includes("attestation");
    if (filter === 3) return f.rythme.includes("Temps plein");
    if (filter === 4) return !f.rythme.includes("Temps plein");
    return true;
  });

  return (
    <div>
      <PublicHeader active="Formations" />
      <section className="cat-hero" style={{ padding: "64px 64px 36px", borderBottom: "1px solid var(--ligne)" }}>
        <div>
          <div className="eyebrow t">Catalogue 2027</div>
          <h1 className="serif" style={{ fontSize: 84, lineHeight: 0.95, marginTop: 14 }}>
            Les <em className="serif-i">formations</em>.
          </h1>
        </div>
        <div>
          <p className="muted" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Diplômes d’établissement, certificats professionnels et masterclass. Tarifs en FCFA, payables en 3 tranches ou mensuellement (Mobile Money, carte, virement).
          </p>
          <div className="row gap8" style={{ marginTop: 22, flexWrap: "wrap" }}>
            {FILTERS.map((x, i) => (
              <button key={x} className={`badge ${i === filter ? "b-noir" : "b-line"}`} style={{ height: 32, padding: "0 14px", fontSize: 12 }} onClick={() => setFilter(i)}>
                {x}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="cat-body" style={{ padding: "48px 64px 72px" }}>
        <article className="card" style={{ overflow: "hidden" }}>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <Photo src={featured.img} h={460} pos={featured.pos} radius={0} />
            <div style={{ padding: 32, display: "flex", flexDirection: "column" }}>
              <div className="row between">
                <span className="badge b-terra">Filière phare</span>
                <span className="eyebrow">{featured.code}</span>
              </div>
              <h2 className="serif" style={{ fontSize: 38, lineHeight: 1.05, marginTop: 18 }}>{featured.nom}</h2>
              <div className="col" style={{ marginTop: 22 }}>
                {[
                  ["Durée", `${featured.duree} · ${featured.rythme}`],
                  ["Diplôme", featured.diplome],
                  ["Rentrée", featured.rentree],
                  ["Places", `${featured.places} par promotion`],
                ].map(([a, b]) => (
                  <div key={a} className="row between" style={{ padding: "10px 0", borderTop: "1px solid var(--ligne)", fontSize: 13, gap: 12 }}>
                    <span className="muted">{a}</span>
                    <b style={{ textAlign: "right" }}>{b}</b>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "auto", paddingTop: 20, borderTop: "1px solid var(--ligne)" }}>
                <div className="eyebrow">Tarif</div>
                <div className="num" style={{ fontSize: 42 }}>{fcfaN(featured.tarif)} <span style={{ fontSize: 16, fontFamily: "var(--sans)" }}>FCFA</span></div>
                <div className="muted" style={{ fontSize: 12 }}>Dossier 15 000 FCFA · paiement par tranches</div>
              </div>
            </div>
          </div>
          <div style={{ padding: "28px 32px", borderTop: "1px solid var(--ligne)" }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Programme</div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 20, fontSize: 13 }}>
              {featured.modules.slice(0, 4).map((m, i) => (
                <div key={m} style={{ borderTop: "2px solid var(--noir)", paddingTop: 10 }}>
                  <div className="row between"><b>{m}</b><span className="eyebrow">0{i + 1}</span></div>
                </div>
              ))}
            </div>
            <div className="row gap12" style={{ marginTop: 24, flexWrap: "wrap" }}>
              <Link className="btn terra" href={`/admission?filiere=${featured.code}`}>Candidater à cette filière <Icon name="arrow" size={14} /></Link>
              <button className="btn ghost" type="button"><Icon name="download" size={14} /> Brochure PDF</button>
            </div>
          </div>
        </article>
        <div className="col">
          {rest.map((f, i) => (
            <article key={f.code} className="grid" style={{ gridTemplateColumns: "120px 1fr auto", gap: 20, padding: "18px 0", borderTop: `1px solid ${i === 0 ? "var(--noir)" : "var(--ligne)"}`, alignItems: "center" }}>
              <Photo src={f.img} h={120} pos={f.pos} radius={16} />
              <div>
                <div className="row gap8"><span className="eyebrow">{f.code}</span><span className="badge b-line">{f.duree}</span></div>
                <h3 className="serif" style={{ fontSize: 22, marginTop: 6, lineHeight: 1.15 }}>{f.nom}</h3>
                <div className="muted" style={{ fontSize: 12.5, marginTop: 4 }}>{f.rythme} · {f.diplome}</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>{f.modules.slice(0, 3).join(" · ")}…</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="num" style={{ fontSize: 24 }}>{fcfaN(f.tarif)}</div>
                <div className="eyebrow">FCFA {f.unite}</div>
                <button className="link" style={{ display: "inline-block", marginTop: 10 }} onClick={() => setOpen(f.code)}>Programme</button>
              </div>
            </article>
          ))}
          <div className="card p" style={{ marginTop: 20, background: "var(--noir)", color: "var(--ivoire)", borderColor: "var(--noir)" }}>
            <div className="eyebrow" style={{ color: "var(--terra-clair)" }}>Financement</div>
            <p style={{ marginTop: 8, lineHeight: 1.6, color: "#F9C2DD" }}>
              Bourses partielles (jusqu’à 30 %) sur dossier artistique · Paiement par tranches sans frais · Tarif fratrie −10 %.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
