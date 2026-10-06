"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Avatar, Bar, Photo } from "@/components/ui";
import { img } from "@/lib/data";

export default function NouveauBriefPage() {
  const [title, setTitle] = useState("Collection Capsule « Terre rouge »");
  const [scheduled, setScheduled] = useState(false);
  return (
    <>
      <div className="row between" style={{ alignItems: "flex-end", gap: 12, flexWrap: "wrap" }}>
        <div>
          <div className="row gap8"><span className="badge b-ocre"><i className="dot" />{scheduled ? "Programmé" : "Brouillon"}</span><span className="muted" style={{ fontSize: 12 }}>Enregistré le ven. 18 sept. 2026 à 17:46</span></div>
          <h1 className="h-page" style={{ marginTop: 12 }}>Nouveau brief · <em>Collection Capsule</em></h1>
        </div>
        <div className="row gap12" style={{ flexWrap: "wrap" }}>
          <Link className="btn ghost" href="/eleve/briefs"><Icon name="eye" size={15} /> Aperçu élève</Link>
          <span className="btn ghost">Enregistrer</span>
          <button className="btn terra" onClick={() => setScheduled(true)}><Icon name="send" size={15} /> {scheduled ? "Publication programmée" : "Programmer la publication"}</button>
        </div>
      </div>
      <div className="form-split" style={{ marginTop: 28 }}>
        <div className="col" style={{ gap: 20 }}>
          <div className="card" style={{ overflow: "hidden", background: "#fff" }}>
            <div className="grid" style={{ gridTemplateColumns: "1.2fr 1fr 1fr", height: 240 }}>
              <Photo src={img.wax1} h="100%" radius={0} />
              <Photo src={img.studio} h="100%" radius={0} />
              <Photo src={img.croquis1} h="100%" radius={0} />
            </div>
            <div style={{ padding: "26px 28px" }}>
              <label className="lb">Titre du brief</label>
              <input className="serif" value={title} onChange={(e) => setTitle(e.target.value)} style={{ fontSize: 34, lineHeight: 1.1, border: 0, borderBottom: "1px solid var(--ligne)", width: "100%", background: "transparent", paddingBottom: 10, color: "var(--terra)" }} />
              <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 20 }}>
                <div><label className="lb">Promotion</label><div className="input row between">STY-2 · 22 élèves <Icon name="arrow" size={13} /></div></div>
                <div><label className="lb">Module</label><div className="input row between">Collection capsule (S3) <Icon name="arrow" size={13} /></div></div>
                <div><label className="lb">Co-évaluateur</label><div className="input row gap8"><Avatar src={img.rodrigue} size={24} /> Rodrigue Agbossou</div></div>
              </div>
            </div>
          </div>
          <div className="card p" style={{ background: "#fff" }}>
            <label className="lb">Consignes</label>
            <div className="row gap16 muted" style={{ padding: "8px 12px", border: "1px solid var(--ligne)", borderBottom: 0, fontSize: 13, background: "var(--papier)" }}>
              <b style={{ color: "var(--noir)" }}>B</b><i>I</i><u>S</u><span>H2</span><span>• Liste</span><Icon name="link" size={14} /><Icon name="image" size={14} /><Icon name="video" size={14} />
            </div>
            <div style={{ border: "1px solid var(--ligne)", padding: "18px 20px", fontSize: 14, lineHeight: 1.75, borderRadius: "0 0 14px 14px" }}>
              <p>Concevez une <b>capsule de 3 silhouettes</b> prêt-à-porter inspirée de la <b>terre de barre</b> du Sud-Bénin et des architectures de Porto-Novo. La collection doit associer au moins un textile local (wax, kanvô, bogolan ou indigo) à une matière unie.</p>
              <ul style={{ margin: "12px 0 0 20px" }}>
                <li>Cible : femme urbaine 25–40 ans, Cotonou / Abidjan / Dakar.</li>
                <li>Budget matières : 45 000 FCFA maximum par silhouette (justificatifs).</li>
                <li>Une pièce au moins doit être <b>zéro chute</b> ou intégrer des chutes de l’atelier.</li>
              </ul>
            </div>
          </div>
          <div className="card p" style={{ background: "#fff" }}>
            <div className="row between"><label className="lb" style={{ margin: 0 }}>Jalons & livrables</label><span className="btn sm ghost"><Icon name="plus" size={13} /> Ajouter un jalon</span></div>
            <div className="table-wrap">
              <table className="t" style={{ marginTop: 12 }}>
                <thead><tr><th>Jalon</th><th>Livrables attendus</th><th>Date limite</th><th>Coef.</th></tr></thead>
                <tbody>
                  {[
                    ["J1 · Recherche", "Planche tendance, moodboard matières (PDF A3)", "lun. 28 sept. 2026 · 23:59", "1"],
                    ["J2 · Prototype", "Croquis, fiches techniques, photos d’essayage du Look 03", "dim. 4 oct. 2026 · 23:59", "2"],
                    ["J3 · Rendu final", "3 silhouettes réalisées, photos studio HD, book", "ven. 16 oct. 2026 · 12:00", "3"],
                    ["Oral", "Présentation 10 min devant jury", "lun. 19 oct. 2026", "1"],
                  ].map((r) => (
                    <tr key={r[0]}>{r.map((c) => <td key={c} className={c.includes("2026") ? "tnum" : undefined} style={{ fontWeight: c.startsWith("J") || c === "Oral" ? 700 : undefined }}>{c}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row gap16" style={{ marginTop: 14, fontSize: 12.5, flexWrap: "wrap" }}>
              <span className="row gap8"><span className="check on"><Icon name="check" size={11} stroke={3} /></span>Accepter les dépôts en retard (pénalité −1 pt / jour)</span>
              <span className="row gap8"><span className="check on"><Icon name="check" size={11} stroke={3} /></span>Fichiers HD jusqu’à 200 Mo</span>
            </div>
          </div>
        </div>
        <div className="col" style={{ gap: 20 }}>
          <div className="card p" style={{ background: "#fff" }}>
            <label className="lb">Critères d’évaluation</label>
            {[["Créativité & parti pris", 30], ["Maîtrise technique (coupe, assemblage)", 30], ["Cohérence de la collection", 25], ["Présentation & book", 15]].map(([c, w]) => (
              <div key={String(c)} style={{ padding: "12px 0", borderBottom: "1px solid var(--ligne)" }}>
                <div className="row between" style={{ fontSize: 13 }}><span>{c}</span><b className="tnum">{w} %</b></div>
                <div style={{ marginTop: 8 }}><Bar value={Number(w) * 2.5} /></div>
              </div>
            ))}
            <div className="row between" style={{ paddingTop: 12, fontSize: 12.5 }}><span className="muted">Barème</span><b>Note sur 20 · grille partagée aux élèves</b></div>
          </div>
          <div className="card p" style={{ background: "#fff" }}>
            <label className="lb">Ressources jointes</label>
            {([
              ["file", "Gabarit fiche technique — A3.pdf", "1,2 Mo"],
              ["file", "Croquis de base femme 9 têtes.pdf", "3,4 Mo"],
              ["video", "Masterclass : zéro chute (18 min)", "vidéo"],
              ["image", "Moodboard terre de barre — 24 images", "galerie"],
            ] as const).map(([i, n, m]) => (
              <div key={n} className="row gap12" style={{ padding: "10px 0", borderBottom: "1px solid var(--ligne)", fontSize: 13 }}>
                <Icon name={i} size={16} /><span style={{ flex: 1 }}>{n}</span><span className="muted" style={{ fontSize: 11.5 }}>{m}</span>
              </div>
            ))}
          </div>
          <div className="card p" style={{ background: "var(--noir)", color: "var(--ivoire)", borderColor: "var(--noir)" }}>
            <div className="eyebrow" style={{ color: "var(--terra-clair)" }}>Publication</div>
            <div className="col gap12" style={{ marginTop: 12, fontSize: 13 }}>
              <div className="row between"><span style={{ color: "#B8B4C8" }}>Date</span><b>lun. 21 sept. 2026 · 08:00</b></div>
              <div className="row between"><span style={{ color: "#B8B4C8" }}>Notifier</span><b>22 élèves · app + WhatsApp</b></div>
              <div className="row between"><span style={{ color: "#B8B4C8" }}>Visible par</span><b>STY-2 · direction</b></div>
            </div>
            <button className="btn terra" style={{ width: "100%", marginTop: 16 }} onClick={() => setScheduled(true)}><Icon name="send" size={14} /> Programmer la publication</button>
          </div>
        </div>
      </div>
    </>
  );
}
