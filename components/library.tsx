"use client";

import { useMemo, useState } from "react";
import { Icon, type IconName } from "@/components/icon";
import { Photo } from "@/components/ui";
import { RESOURCES, img } from "@/lib/data";

const CATS: [IconName, string, number][] = [
  ["grid", "Tout", 412],
  ["ruler", "Gabarits de patrons", 96],
  ["file", "Fiches techniques", 64],
  ["video", "Vidéos & masterclass", 58],
  ["book", "Livres & PDF", 71],
  ["image", "Moodboards", 43],
  ["scissors", "Techniques d’atelier", 80],
];

export function LibraryView() {
  const [cat, setCat] = useState(0);
  const [q, setQ] = useState("");
  const [saved, setSaved] = useState<string[]>(["Masterclass : monter une manche gigot"]);
  const items = useMemo(() => {
    return RESOURCES.filter((r) => {
      const okCat = cat === 0 || (cat === 1 && r.cat === "Gabarit") || (cat === 3 && r.icon === "video") || (cat === 5 && r.icon === "image") || (cat === 2 && r.cat === "Fiche") || cat === 4 || cat === 6;
      const okQ = !q || `${r.title} ${r.meta}`.toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
  }, [cat, q]);

  return (
    <>
      <div className="row between" style={{ alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow t">412 ressources · mises à jour par l’équipe pédagogique</div>
          <h1 className="h-page" style={{ marginTop: 10 }}>Bibliothèque de <em>ressources</em></h1>
        </div>
        <label className="search" style={{ width: 420, background: "#fff" }}>
          <Icon name="search" size={16} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher : « manche », « col claudine », « indigo »…" />
        </label>
      </div>
      <div className="lib-grid" style={{ marginTop: 28 }}>
        <aside className="col">
          {CATS.map(([i, l, n], idx) => (
            <button key={l} onClick={() => setCat(idx)} className="row gap12" style={{ padding: "12px 4px", borderBottom: "1px solid var(--ligne)", fontSize: 13.5, fontWeight: idx === cat ? 800 : 500, textAlign: "left" }}>
              <Icon name={i} size={17} /><span style={{ flex: 1 }}>{l}</span><span className="muted tnum" style={{ fontSize: 12 }}>{n}</span>
            </button>
          ))}
          <div className="card p" style={{ marginTop: 20 }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Hors ligne</div>
            <p className="muted" style={{ fontSize: 12, lineHeight: 1.6 }}>{saved.length} ressources marquées sur cet appareil pour l’atelier sans réseau.</p>
          </div>
        </aside>
        <div>
          <div className="card" style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "1.2fr 1fr", background: "var(--noir)", color: "var(--ivoire)", borderColor: "var(--noir)", marginBottom: 24 }}>
            <div style={{ position: "relative" }}>
              <Photo src={img.atelierTransmission} h={300} radius={0} />
              <span style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,.95)", color: "var(--noir)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="play" size={26} />
              </span>
            </div>
            <div style={{ padding: 32 }}>
              <div className="eyebrow" style={{ color: "var(--terra-clair)" }}>Recommandé pour votre brief</div>
              <div className="serif" style={{ fontSize: 32, lineHeight: 1.1, marginTop: 10 }}>Masterclass : monter une manche <em className="serif-i">gigot</em></div>
              <p style={{ color: "#B8B4C8", fontSize: 13, marginTop: 12, lineHeight: 1.6 }}>Avec Cosme Hounnou, maître tailleur invité — 24 min. Lié au brief Collection Capsule « Terre rouge ».</p>
              <div className="row gap8" style={{ marginTop: 20 }}>
                <span className="btn terra sm"><Icon name="play" size={12} /> Regarder</span>
                <button className="btn sm" style={{ background: "transparent", borderColor: "#6b625a", color: "#fff" }} onClick={() => setSaved((s) => s.includes("Masterclass : monter une manche gigot") ? s : [...s, "Masterclass : monter une manche gigot"])}><Icon name="download" size={13} /> Hors ligne</button>
              </div>
            </div>
          </div>
          <div className="row between" style={{ marginBottom: 14 }}><b style={{ fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase" }}>Récemment ajoutés</b><span className="muted" style={{ fontSize: 12 }}>{items.length} résultat{items.length > 1 ? "s" : ""}</span></div>
          <div className="res-grid">
            {items.map((r) => (
              <article key={r.title} style={{ background: "#fff", border: "1px solid var(--ligne)", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ position: "relative" }}>
                  <Photo src={r.src} h={170} radius={0} />
                  {r.icon === "video" ? <span style={{ position: "absolute", right: 10, bottom: 10, width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.95)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="play" size={14} /></span> : null}
                  <span className="badge" style={{ position: "absolute", top: 10, left: 10, background: "var(--ivoire)" }}><Icon name={r.icon} size={11} /> {r.cat}</span>
                </div>
                <div style={{ padding: "12px 14px" }}>
                  <div style={{ fontWeight: 700, fontSize: 13.5, lineHeight: 1.35 }}>{r.title}</div>
                  <div className="muted" style={{ fontSize: 11.5, marginTop: 4 }}>{r.meta}</div>
                  <div className="row between" style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid var(--ligne)" }}>
                    <button className="link" onClick={() => setSaved((s) => (s.includes(r.title) ? s : [...s, r.title]))}>{r.icon === "video" ? "Regarder" : "Télécharger"}</button>
                    <span className="muted"><Icon name="star" size={15} /></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
