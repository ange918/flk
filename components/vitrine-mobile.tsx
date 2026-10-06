"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon, StatusGlyphs } from "@/components/icon";
import { PhoneStage } from "@/components/shell";
import { Avatar, Photo, PUBLIC_LINKS } from "@/components/ui";
import { BRAND, fcfa } from "@/lib/brand";
import { FORMATIONS, img } from "@/lib/data";

export function VitrineMobile({ framed = false }: { framed?: boolean }) {
  const [open, setOpen] = useState(false);
  const body = (
    <>
      <div className="row between" style={{ padding: "6px 20px 14px", borderBottom: "1px solid var(--ligne)", position: "relative" }}>
        <Link href="/" className="row gap8" onClick={() => setOpen(false)}>
          <span className="mono" style={{ width: 34, height: 34, fontSize: 14 }}>{BRAND.mono}</span>
          <span className="wordmark" style={{ fontSize: 16 }}>{BRAND.name}</span>
        </Link>
        <button type="button" className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} style={{ display: "inline-flex", minWidth: 44, minHeight: 44, alignItems: "center", justifyContent: "center" }}>
          <Icon name={open ? "x" : "menu"} size={22} />
        </button>
        {open ? (
          <nav style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", borderBottom: "1px solid var(--ligne)", padding: "8px 16px 16px", zIndex: 5, display: "flex", flexDirection: "column" }}>
            {PUBLIC_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ minHeight: 44, display: "flex", alignItems: "center", fontWeight: 700 }}>{l.label}</Link>
            ))}
            <Link className="btn ghost" href="/connexion" onClick={() => setOpen(false)} style={{ marginTop: 8 }}>Se connecter</Link>
            <Link className="btn terra" href="/admission" onClick={() => setOpen(false)} style={{ marginTop: 8 }}>Candidater</Link>
          </nav>
        ) : null}
      </div>
      <div style={{ padding: "22px 20px 0" }}>
        <span className="eyebrow t">Admissions ouvertes · janv. 2027</span>
        <h1 className="serif" style={{ fontSize: 52, lineHeight: 0.92, marginTop: 14, color: "var(--terra)" }}>
          L’art de couper, coudre, créer.
        </h1>
      </div>
      <div style={{ margin: "22px 20px 0", position: "relative" }}>
        <Photo src={img.runway} h={420} pos="center 30%" arch />
        <span className="eyebrow" style={{ position: "absolute", left: 12, bottom: 12, background: "rgba(26,18,48,.72)", color: "#fff", padding: "6px 10px" }}>
          Défilé 2026 · « Terre rouge »
        </span>
      </div>
      <div style={{ padding: "22px 20px" }}>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--noir-3)" }}>
          Six filières, des ateliers équipés et un book professionnel à la sortie — au cœur de Cotonou.
        </p>
        <Link className="btn terra lg" style={{ width: "100%", marginTop: 20 }} href="/admission">
          Candidater en ligne <Icon name="arrow" size={16} />
        </Link>
        <Link className="btn ghost lg" style={{ width: "100%", marginTop: 10 }} href="/formations">Voir les formations</Link>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", margin: "0 20px", borderTop: "1px solid var(--ligne)", borderBottom: "1px solid var(--ligne)", padding: "16px 0" }}>
        {[["412", "diplômés"], ["86 %", "en activité"], ["6", "ateliers"]].map(([a, b]) => (
          <div key={b} style={{ textAlign: "center" }}>
            <div className="num" style={{ fontSize: 28 }}>{a}</div>
            <div className="muted" style={{ fontSize: 11 }}>{b}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: "36px 20px 8px" }}>
        <div className="eyebrow t">Filières</div>
        <h2 className="serif" style={{ fontSize: 34, lineHeight: 1.05, marginTop: 8 }}>
          Six chemins vers la <em className="serif-i">mode</em>.
        </h2>
      </div>
      <div className="col" style={{ padding: "0 20px" }}>
        {FORMATIONS.slice(0, 4).map((f) => (
          <Link key={f.code} href="/formations" className="row gap16" style={{ padding: "14px 0", borderBottom: "1px solid var(--ligne)", minHeight: 44 }}>
            <Photo src={f.img} w={78} h={96} pos={f.pos} radius={16} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="eyebrow">{f.code} · {f.duree}</div>
              <div className="serif" style={{ fontSize: 19, lineHeight: 1.2, marginTop: 4 }}>{f.nom}</div>
              <div className="tnum" style={{ fontWeight: 700, fontSize: 13, marginTop: 6 }}>{fcfa(f.tarif)} {f.unite}</div>
            </div>
            <Icon name="arrow" size={18} />
          </Link>
        ))}
      </div>
      <div style={{ background: "var(--noir)", color: "var(--ivoire)", marginTop: 36, padding: "32px 20px" }}>
        <div className="eyebrow" style={{ color: "var(--terra-clair)" }}>Lookbook élèves</div>
        <h2 className="serif" style={{ fontSize: 32, marginTop: 8 }}>Réalisations 2026</h2>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 20 }}>
          <Photo src={img.lookOrange} h={230} pos="center 30%" radius={16} />
          <Photo src={img.lookTulle} h={230} pos="center 30%" radius={16} />
          <Photo src={img.lookKente} h={170} pos="center 30%" radius={16} />
          <Photo src={img.lookWax} h={170} pos="center 30%" radius={16} />
        </div>
      </div>
      <div style={{ padding: "32px 20px", background: "var(--sable-pale)" }}>
        <p className="serif" style={{ fontSize: 22, lineHeight: 1.35 }}>
          « J’ai développé mon premier imprimé à l’académie. Aujourd’hui il est produit en série. »
        </p>
        <div className="row gap12" style={{ marginTop: 18 }}>
          <Avatar src={img.grace} size={44} pos="center 20%" />
          <div>
            <div style={{ fontWeight: 700 }}>Grâce Tossou</div>
            <div className="muted" style={{ fontSize: 12 }}>Diplômée Design textile 2026</div>
          </div>
        </div>
      </div>
      <div style={{ padding: "28px 20px 32px" }}>
        <div className="muted" style={{ fontSize: 12 }}>Frais de dossier 15 000 FCFA · Clôture 30 nov. 2026</div>
        <Link className="btn terra lg" style={{ width: "100%", marginTop: 12 }} href="/admission">
          Candidater <Icon name="arrow" size={16} />
        </Link>
      </div>
      <div className="ex-note" style={{ padding: "16px 20px 28px", borderTop: "1px solid var(--ligne)" }}>
        Données d’exemple · {BRAND.tel}
      </div>
    </>
  );

  if (framed) {
    return (
      <PhoneStage>
        <div className="status"><span>9:41</span><StatusGlyphs /></div>
        {body}
      </PhoneStage>
    );
  }

  return <div className="m-ui only-sm">{body}</div>;
}
