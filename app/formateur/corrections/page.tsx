"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Avatar, Photo } from "@/components/ui";
import { img } from "@/lib/data";

const PINS = [
  { n: 1, x: 80, y: 50, title: "Volume de manche", text: "Le froncé est très réussi — garder ce volume, il signe la silhouette.", ok: true },
  { n: 2, x: 55, y: 35, title: "Encolure", text: "La parementure ressort : surpiquer à 2 mm et dégrader les valeurs de couture.", ok: false },
  { n: 3, x: 47, y: 83, title: "Longueur pantalon", text: "Casser 2 cm plus haut pour équilibrer avec le talon.", ok: false },
  { n: 4, x: 61, y: 57, title: "Taille", text: "Aligner le milieu devant du drapé avec la pince de taille.", ok: false },
];

const THUMBS: [string | null, string][] = [
  [img.lookOrange, "Photo 1"],
  [img.croquis2, "Croquis"],
  [img.wax3, "Matière"],
  [null, "Fiche tech."],
  [img.craie, "Atelier"],
  [img.coupe, "Coupe"],
];

export default function CorrectionPage() {
  const [scores, setScores] = useState([17, 14, 16, 15]);
  const [published, setPublished] = useState(false);
  const [allowBook, setAllowBook] = useState(true);
  const [thumb, setThumb] = useState(0);
  const note = (scores[0] * 30 + scores[1] * 30 + scores[2] * 25 + scores[3] * 15) / 100;
  const photo = THUMBS[thumb][0] ?? img.lookOrange;

  return (
    <>
      <div className="row between" style={{ gap: 12, flexWrap: "wrap" }}>
        <div className="row gap16">
          <Link href="/formateur" className="muted" aria-label="Retour"><Icon name="arrowl" size={18} /></Link>
          <Avatar src={img.nadege} size={44} />
          <div>
            <div className="serif" style={{ fontSize: 26, lineHeight: 1.1 }}>Nadège Akpovi <span className="muted" style={{ fontFamily: "var(--sans)", fontSize: 13 }}>· STY-2</span></div>
            <div className="muted" style={{ fontSize: 12.5 }}>Collection Capsule « Terre rouge » · J2 Prototype Look 03 · déposé le sam. 3 oct. 2026 à 18:42 (dans les délais)</div>
          </div>
        </div>
        <div className="row gap8">
          <span className="muted" style={{ fontSize: 12 }}>Rendu 1 / 6</span>
          <span className="btn ghost sm"><Icon name="arrowl" size={13} /></span>
          <span className="btn ghost sm"><Icon name="arrow" size={13} /></span>
        </div>
      </div>
      <div className="corr-grid" style={{ marginTop: 24 }}>
        <div className="col gap8">
          {THUMBS.map(([s, l], i) => (
            <button key={l} onClick={() => setThumb(i)} style={{ border: i === thumb ? "2px solid var(--terra)" : "1px solid var(--ligne)", background: "#fff", textAlign: "left", borderRadius: 12, overflow: "hidden" }}>
              {s ? <Photo src={s} h={88} pos="center 30%" radius={0} /> : <div className="muted" style={{ height: 88, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 4 }}><Icon name="file" size={22} /><span style={{ fontSize: 9, fontWeight: 800 }}>PDF</span></div>}
              <div className="muted" style={{ fontSize: 10.5, padding: "4px 6px" }}>{l}</div>
            </button>
          ))}
        </div>
        <div className="card" style={{ background: "var(--noir)", borderColor: "var(--noir)", overflow: "hidden" }}>
          <div className="row between" style={{ padding: "10px 16px", color: "#C8C4D8", fontSize: 12 }}>
            <span>look03-essayage-face.jpg · 6 000 × 9 000 px · 38 Mo</span>
            <span className="row gap16"><Icon name="search" size={15} /> 100 % <Icon name="grid" size={15} /> <Icon name="download" size={15} /></span>
          </div>
          <div style={{ position: "relative", height: 720 }}>
            <Photo src={photo} h="100%" pos="center 30%" radius={0} />
            {PINS.map((p) => (
              <div key={p.n} style={{ position: "absolute", left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%,-50%)" }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: p.ok ? "#16A34A" : "var(--terra)", color: "#fff", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, boxShadow: "0 4px 14px rgba(0,0,0,.35)" }}>{p.n}</div>
              </div>
            ))}
            <div style={{ position: "absolute", left: 16, bottom: 16, display: "flex", gap: 8 }}>
              <span className="btn sm light"><Icon name="pin" size={13} /> Ajouter un repère</span>
              <span className="btn sm light"><Icon name="pen" size={13} /> Dessiner</span>
            </div>
            <span className="eyebrow" style={{ position: "absolute", right: 16, bottom: 20, color: "#fff", background: "rgba(26,18,48,.6)", padding: "5px 9px" }}>Porté par mannequin cabine</span>
          </div>
        </div>
        <div className="col gap16">
          <div className="card" style={{ background: "#fff" }}>
            <div className="card-h"><h3>Annotations</h3><span className="badge b-line">4 repères</span></div>
            <div style={{ padding: "6px 22px 14px" }}>
              {PINS.map((p) => (
                <div key={p.n} className="row gap12" style={{ padding: "12px 0", borderBottom: "1px solid var(--ligne)", alignItems: "flex-start" }}>
                  <span style={{ width: 24, height: 24, borderRadius: "50%", background: p.ok ? "#16A34A" : "var(--terra)", color: "#fff", fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{p.n}</span>
                  <div style={{ fontSize: 12.5 }}><b>{p.title}</b><div className="muted" style={{ marginTop: 2, lineHeight: 1.5 }}>{p.text}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{ background: "#fff" }}>
            <div className="card-h"><h3>Évaluation</h3><span className="muted" style={{ fontSize: 12 }}>Grille du brief</span></div>
            <div style={{ padding: "14px 22px" }}>
              {[["Créativité & parti pris", 30], ["Maîtrise technique", 30], ["Cohérence de la collection", 25], ["Présentation & book", 15]].map(([c, w], idx) => (
                <div key={String(c)} className="row gap12" style={{ padding: "9px 0", fontSize: 12.5 }}>
                  <span style={{ flex: 1 }}>{c} <span className="muted">· {w} %</span></span>
                  <div className="row" style={{ border: "1px solid var(--ligne-fonce)", borderRadius: 14, overflow: "hidden" }}>
                    {[12, 13, 14, 15, 16, 17, 18].map((k) => (
                      <button key={k} onClick={() => setScores((s) => s.map((v, i) => (i === idx ? k : v)))} style={{ width: 26, height: 26, fontSize: 11, fontWeight: 700, background: scores[idx] === k ? "var(--noir)" : "transparent", color: scores[idx] === k ? "#fff" : "var(--taupe)" }}>{k}</button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="row between" style={{ marginTop: 12, paddingTop: 14, borderTop: "1px solid var(--ligne)", alignItems: "flex-end" }}>
                <span className="eyebrow">Note J2 (coef. 2)</span>
                <span className="num" style={{ fontSize: 48 }}>{note.toFixed(1).replace(".", ",")}<span className="muted" style={{ fontSize: 20 }}>/20</span></span>
              </div>
            </div>
          </div>
          <div className="card p" style={{ background: "#fff" }}>
            <label className="lb">Commentaire général</label>
            <textarea className="input area" style={{ minHeight: 120, fontSize: 13 }} defaultValue="Très beau parti pris sur les volumes, Nadège — la manche fonctionne. Concentre-toi sur les finitions d’encolure et l’équilibre des longueurs avant le rendu final du 16 octobre. Passe à la permanence de 16 h si besoin." />
            <button className="row gap8" style={{ marginTop: 12 }} onClick={() => setAllowBook((v) => !v)}>
              <span className={`check ${allowBook ? "on" : ""}`}>{allowBook ? <Icon name="check" size={11} stroke={3} /> : null}</span>
              <span style={{ fontSize: 12.5 }}>Autoriser l’élève à publier ce visuel dans son <b>book</b></span>
            </button>
            <div className="row gap8" style={{ marginTop: 16 }}>
              <button className="btn ghost" style={{ flex: 1 }}>Brouillon</button>
              <button className="btn terra" style={{ flex: 2 }} onClick={() => setPublished(true)}><Icon name="send" size={14} /> {published ? "Correction publiée" : "Publier la correction"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
