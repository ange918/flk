"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { Bar, Photo } from "@/components/ui";
import { img } from "@/lib/data";

const checks = [
  ["Planches tendance", true],
  ["3 croquis de silhouettes", true],
  ["Fiches techniques", true],
  ["Photos d’assemblage", true],
  ["3 photos studio HD", false],
  ["Justificatifs matières (≤ 45 000 F/silhouette)", false],
];

export default function DepotPage() {
  const [done, setDone] = useState<boolean[]>(checks.map((c) => c[1] as boolean));
  const [note, setNote] = useState("J’ai repris les remarques du J2 : encolure surpiquée à 2 mm et pantalon raccourci de 2 cm. Le look 01 intègre les chutes de wax de l’atelier (pièce zéro chute).");
  const [submitted, setSubmitted] = useState(false);
  const complete = done.every(Boolean);

  return (
    <>
      <div className="row between" style={{ alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow t">Collection Capsule « Terre rouge » · J3 Rendu final</div>
          <h1 className="h-page" style={{ marginTop: 10 }}>Déposer mon <em>rendu</em></h1>
        </div>
        <div className="row gap16">
          <div style={{ textAlign: "right" }}><div className="eyebrow">Date limite</div><b>ven. 16 oct. 2026 · 12:00</b></div>
          <span className="badge b-ocre" style={{ height: 34, padding: "0 14px", fontSize: 12.5 }}><Icon name="clock" size={13} /> J−10</span>
        </div>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "1fr 360px", gap: 24, marginTop: 28, alignItems: "start" }}>
        <div className="col" style={{ gap: 18 }}>
          <div className="row gap12" style={{ padding: "14px 18px", border: "1px dashed var(--noir)", background: "var(--papier)", borderRadius: 14 }}>
            <Icon name="upload" size={22} />
            <div style={{ flex: 1 }}><b>Glissez tous vos fichiers ici</b><div className="muted" style={{ fontSize: 12 }}>Classement automatique · HD jusqu’à 200 Mo · envoi reprenable. TODO : Supabase Storage.</div></div>
            <span className="btn sm">Parcourir</span>
          </div>
          <Slot title="Planches tendance" req="1 à 3 planches A3 · PDF ou JPG" badge="2 / 3" tone="b-olive">
            <File src={img.wax1} name="planche-terre-de-barre.jpg" meta="24 Mo" />
            <File src={img.croquisMur} name="planche-silhouettes.jpg" meta="18 Mo" />
            <Add />
          </Slot>
          <Slot title="Croquis de collection" req="3 silhouettes minimum" badge="3 / 3" tone="b-olive">
            <File src={img.croquis1} name="look01-croquis.jpg" meta="9 Mo" />
            <File src={img.croquis2} name="look02-croquis.jpg" meta="11 Mo" />
            <File src={img.croquis3} name="look03-croquis.jpg" meta="10 Mo" />
            <Add />
          </Slot>
          <Slot title="Fiches techniques" req="Gabarit école · 1 par pièce" badge="3 / 3" tone="b-olive">
            <File name="FT-look01-robe.pdf" meta="2,1 Mo" />
            <File name="FT-look02-ensemble.pdf" meta="1,8 Mo" />
            <File name="FT-look03-top-drape.pdf" meta="2,4 Mo" />
            <Add />
          </Slot>
          <Slot title="Photos d’assemblage & rendu" req="Étapes de fabrication + 3 photos studio HD" badge="3 / 6" tone="b-ocre">
            <File src={img.craie} name="traçage-patron.jpg" meta="31 Mo" />
            <File src={img.coupe} name="coupe-matiere.jpg" meta="28 Mo" />
            <File src={img.lookOrange} name="look03-studio-face.tif" meta="142 Mo · 58 %" uploading />
            <Add />
          </Slot>
          <div className="card p" style={{ background: "#fff" }}>
            <label className="lb">Note d’intention (facultatif)</label>
            <textarea className="input area" style={{ minHeight: 90, fontSize: 13 }} value={note} onChange={(e) => setNote(e.target.value)} />
          </div>
        </div>
        <div className="col" style={{ gap: 16 }}>
          <div className="card p" style={{ background: "#fff" }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Checklist du brief</div>
            {checks.map(([t], i) => (
              <button key={String(t)} className="row gap12" style={{ padding: "9px 0", borderBottom: "1px solid var(--ligne)", fontSize: 13, width: "100%", textAlign: "left" }} onClick={() => setDone((d) => d.map((v, idx) => (idx === i ? !v : v)))}>
                <span className={`check ${done[i] ? "on" : ""}`}>{done[i] ? <Icon name="check" size={11} stroke={3} /> : null}</span>
                <span className={done[i] ? "" : "muted"}>{t}</span>
              </button>
            ))}
          </div>
          <div className="card p" style={{ background: "#fff" }}>
            <div className="row between"><span className="eyebrow">Espace utilisé</span><b className="tnum" style={{ fontSize: 12.5 }}>412 Mo / 2 Go</b></div>
            <div style={{ marginTop: 10 }}><Bar value={20} /></div>
            <div className="muted" style={{ fontSize: 11.5, marginTop: 8 }}>Les originaux HD sont conservés ; des versions optimisées sont générées pour l’affichage.</div>
          </div>
          <div className="card p">
            <div className="eyebrow" style={{ marginBottom: 10 }}>Critères d’évaluation</div>
            {[["Créativité & parti pris", "30 %"], ["Maîtrise technique", "30 %"], ["Cohérence de la collection", "25 %"], ["Présentation & book", "15 %"]].map(([a, b]) => (
              <div key={a} className="row between" style={{ fontSize: 12.5, padding: "5px 0" }}><span>{a}</span><b>{b}</b></div>
            ))}
          </div>
          <button className="btn ghost lg" style={{ width: "100%" }}>Enregistrer le brouillon</button>
          <button className="btn terra lg" style={{ width: "100%", opacity: complete ? 1 : 0.55 }} disabled={!complete} onClick={() => setSubmitted(true)}>
            <Icon name="send" size={15} /> {submitted ? "Rendu soumis" : "Soumettre le rendu final"}
          </button>
          <p className="muted" style={{ fontSize: 11.5, textAlign: "center" }}>{complete ? "Checklist complète — modifiable jusqu’à la date limite." : "Disponible quand la checklist est complète."}</p>
        </div>
      </div>
    </>
  );
}

function Slot({ title, req, badge, tone, children }: { title: string; req: string; badge: string; tone: string; children: React.ReactNode }) {
  return (
    <div className="card" style={{ background: "#fff" }}>
      <div className="row between" style={{ padding: "16px 20px", borderBottom: "1px solid var(--ligne)" }}>
        <div><b>{title}</b><div className="muted" style={{ fontSize: 12 }}>{req}</div></div>
        <span className={`badge ${tone}`}>{badge}</span>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 12, padding: 16 }}>{children}</div>
    </div>
  );
}

function File({ src, name, meta, uploading }: { src?: string; name: string; meta: string; uploading?: boolean }) {
  return (
    <div>
      <div style={{ position: "relative" }}>
        {src ? <Photo src={src} h={140} radius={12} pos="center 30%" /> : <div className="muted" style={{ height: 140, background: "var(--papier)", border: "1px solid var(--ligne)", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}><Icon name="file" size={26} /><b style={{ fontSize: 10, letterSpacing: ".1em" }}>PDF · A3</b></div>}
        {uploading ? (
          <div style={{ position: "absolute", inset: 0, background: "rgba(26,18,48,.55)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 10, color: "#fff", borderRadius: 12 }}>
            <div className="tnum" style={{ fontSize: 12, fontWeight: 700 }}>Envoi… 58 %</div>
            <div className="bar" style={{ marginTop: 6 }}><i style={{ width: "58%" }} /></div>
          </div>
        ) : (
          <span style={{ position: "absolute", top: 8, right: 8, width: 22, height: 22, borderRadius: "50%", background: "var(--olive)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="check" size={12} stroke={3} /></span>
        )}
      </div>
      <div style={{ fontSize: 12, fontWeight: 700, marginTop: 6, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</div>
      <div className="muted" style={{ fontSize: 11 }}>{meta}</div>
    </div>
  );
}

function Add() {
  return (
    <div style={{ height: 140, border: "1px dashed var(--noir)", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, background: "var(--papier)" }}>
      <Icon name="upload" size={22} />
      <span style={{ fontSize: 12, fontWeight: 700 }}>Ajouter</span>
      <span className="muted" style={{ fontSize: 10.5 }}>JPG, PNG, TIFF, PDF</span>
    </div>
  );
}
