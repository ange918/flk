"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Photo } from "@/components/ui";
import { BOOK, img } from "@/lib/data";

const FILTERS = ["Tout (12)", "Collections (5)", "Croquis (4)", "Détails & finitions (2)", "Stylisme photo (1)", "En attente (3)"];

export default function BookPage() {
  const [filter, setFilter] = useState(0);
  const [copied, setCopied] = useState(false);
  const items = BOOK.filter((b) => {
    if (filter === 2) return b.meta.toLowerCase().includes("croquis");
    if (filter === 1) return b.meta.toLowerCase().includes("collection") || b.meta.toLowerCase().includes("capsule") || b.meta.toLowerCase().includes("défilé");
    if (filter === 3) return b.meta.toLowerCase().includes("finition");
    if (filter === 4) return b.meta.toLowerCase().includes("photo");
    if (filter === 5) return false;
    return true;
  });

  return (
    <>
      <div className="row between" style={{ alignItems: "flex-end", gap: 12, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow t">Book professionnel</div>
          <h1 className="h-page" style={{ marginTop: 10 }}>Mon <em>book</em></h1>
          <p className="muted" style={{ marginTop: 8 }}>12 visuels validés par vos formateurs · 3 en attente de validation</p>
        </div>
        <div className="row gap12" style={{ flexWrap: "wrap" }}>
          <Link className="btn ghost" href="/book/nadege-akpovi"><Icon name="eye" size={15} /> Voir la page publique</Link>
          <button className="btn terra" onClick={() => { navigator.clipboard?.writeText("https://book.isdam.app/nadege-akpovi"); setCopied(true); }}>
            <Icon name="link" size={15} /> {copied ? "Lien copié" : "Partager le lien sécurisé"}
          </button>
        </div>
      </div>
      <div className="row between" style={{ marginTop: 24, paddingBottom: 14, borderBottom: "1px solid var(--ligne)", gap: 12, flexWrap: "wrap" }}>
        <div className="row gap8" style={{ flexWrap: "wrap" }}>
          {FILTERS.map((x, i) => (
            <button key={x} className={`badge ${i === filter ? "b-noir" : "b-line"}`} style={{ height: 32, padding: "0 14px" }} onClick={() => setFilter(i)}>{x}</button>
          ))}
        </div>
        <div className="row gap12 muted" style={{ fontSize: 12 }}><Icon name="grid" size={16} /> Mosaïque</div>
      </div>
      <div className="book-grid" style={{ marginTop: 24 }}>
        <div className="masonry">
          {items.map((b) => (
            <figure key={b.title} style={{ background: "#fff", border: "1px solid var(--ligne)", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ position: "relative" }}>
                <Photo src={b.src} h={b.h} pos={b.pos} radius={0} />
                <span className="badge b-noir" style={{ position: "absolute", top: 10, left: 10 }}><Icon name="check" size={11} stroke={2.6} /> Validé</span>
                {b.cover ? <span className="badge" style={{ position: "absolute", top: 10, right: 10, background: "var(--terra)", color: "#fff" }}>Couverture</span> : null}
              </div>
              <figcaption style={{ padding: "10px 12px" }}>
                <div className="serif" style={{ fontSize: 16 }}>{b.title}</div>
                <div className="muted" style={{ fontSize: 11.5 }}>{b.meta}</div>
              </figcaption>
            </figure>
          ))}
          {filter === 5 ? <p className="muted">Les pièces en attente sont listées à droite.</p> : null}
        </div>
        <div className="col" style={{ gap: 16 }}>
          <div className="card p" style={{ background: "#fff" }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Partage sécurisé</div>
            <div className="input row between" style={{ fontSize: 12.5 }}><span>book.isdam.app/nadege-akpovi?k=…7QX</span><Icon name="link" size={14} /></div>
            <div className="col gap8" style={{ marginTop: 14, fontSize: 12.5 }}>
              {[["Expiration", "6 nov. 2026"], ["Mot de passe", "Activé"], ["Téléchargement HD", "Désactivé"], ["Filigrane", "Activé"], ["Consultations", "14 · dont 3 maisons"]].map(([a, b]) => (
                <div key={a} className="row between"><span className="muted">{a}</span><b>{b}</b></div>
              ))}
            </div>
            <span className="btn" style={{ width: "100%", marginTop: 16 }}><Icon name="wa" size={14} /> Envoyer via WhatsApp</span>
          </div>
          <div className="card p" style={{ background: "#fff" }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>En attente de validation</div>
            {[[img.wax3, "Essai d’imprimé « Façades »", "E. Kpadonou"], [img.craie, "Traçage patron Look 03", "R. Agbossou"], [img.wax1, "Planche « Terre de barre »", "O. Sossa"]].map(([s, t, f]) => (
              <div key={t} className="row gap12" style={{ padding: "9px 0", borderBottom: "1px solid var(--ligne)" }}>
                <Photo src={s} w={48} h={56} pos="center 30%" radius={8} />
                <div style={{ fontSize: 12.5 }}><b>{t}</b><div className="muted" style={{ fontSize: 11.5 }}>Soumis à {f}</div></div>
              </div>
            ))}
          </div>
          <div className="card p" style={{ background: "var(--noir)", color: "var(--ivoire)", borderColor: "var(--noir)" }}>
            <div className="eyebrow" style={{ color: "var(--terra-clair)" }}>Performance</div>
            <p style={{ fontSize: 12.5, color: "#F9C2DD", marginTop: 8, lineHeight: 1.6 }}>Images servies en local dans cette démo. En production : CDN AVIF/WebP, galerie visée sous 2 s même en 3G.</p>
          </div>
        </div>
      </div>
    </>
  );
}
