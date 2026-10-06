"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { Person } from "@/components/ui";
import { NOTES, STY2, studentInitials } from "@/lib/data";

const TABS = ["Collection capsule", "Croquis de mode", "Fiches techniques", "Stylisme photo", "Histoire de la mode"];

function fmt(v: number | null) {
  if (v == null) return "";
  return v.toFixed(1).replace(".", ",").replace(",0", "");
}

export default function NotesPage() {
  const rows = STY2.slice(0, 11);
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(rows.map((s) => [s.name, fmt(NOTES[s.name]?.[1] ?? null)])),
  );
  const [published, setPublished] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="row between" style={{ alignItems: "flex-end", gap: 12, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow t">STY-2 · Semestre 3 · 2026–2027</div>
          <h1 className="h-page" style={{ marginTop: 10 }}>Saisie des <em>notes</em></h1>
        </div>
        <div className="row gap12" style={{ flexWrap: "wrap" }}>
          <span className="btn ghost"><Icon name="upload" size={15} /> Importer (CSV)</span>
          <span className="btn ghost"><Icon name="download" size={15} /> Exporter</span>
          <button className="btn" onClick={() => setPublished(true)}><Icon name="send" size={15} /> {published ? "Publié aux élèves" : "Publier aux élèves"}</button>
        </div>
      </div>
      <div className="row gap8" style={{ marginTop: 24, borderBottom: "1px solid var(--ligne)", overflowX: "auto" }}>
        {TABS.map((t, i) => (
          <button key={t} onClick={() => setTab(i)} style={{ padding: "12px 18px", fontWeight: 700, fontSize: 13, whiteSpace: "nowrap", borderBottom: i === tab ? "2px solid var(--terra)" : "2px solid transparent", color: i === tab ? "var(--noir)" : "var(--taupe)" }}>{t}</button>
        ))}
      </div>
      <div className="grid" style={{ gridTemplateColumns: "minmax(0,1fr) 290px", gap: 20, marginTop: 24, alignItems: "start" }}>
        <div className="card" style={{ background: "#fff" }}>
          <div className="table-wrap">
            <table className="t compact">
              <thead>
                <tr>
                  <th>Élève</th>
                  <th>J1<br /><span style={{ fontWeight: 600 }}>coef. 1</span></th>
                  <th>J2<br /><span style={{ fontWeight: 600 }}>coef. 2</span></th>
                  <th>J3</th>
                  <th>Oral</th>
                  <th>Moy. provisoire</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((s) => {
                  const j1 = NOTES[s.name]?.[0] ?? 0;
                  const raw = values[s.name];
                  const j2 = raw ? Number(raw.replace(",", ".")) : null;
                  const moy = j2 == null || Number.isNaN(j2) ? null : Math.round(((j1 + 2 * j2) / 3) * 10) / 10;
                  return (
                    <tr key={s.name} style={{ background: s.name === "Fifamè Dossou" ? "var(--terra-pale)" : undefined }}>
                      <td><div className="row gap12"><Person img={s.photo} ini={studentInitials(s.name)} size={32} /><b>{s.name}</b></div></td>
                      <td><div className="input tnum" style={{ height: 36, width: 76, justifyContent: "center" }}>{fmt(j1)}</div></td>
                      <td>
                        <input className={`input tnum ${s.name === "Fifamè Dossou" ? "focus" : ""}`} style={{ height: 36, width: 76, textAlign: "center" }} value={values[s.name] ?? ""} placeholder="—" onChange={(e) => setValues((v) => ({ ...v, [s.name]: e.target.value }))} />
                      </td>
                      <td><div className="input" style={{ height: 36, width: 76, justifyContent: "center", color: "#9B97AE" }}>16 oct.</div></td>
                      <td><div className="input" style={{ height: 36, width: 76, justifyContent: "center", color: "#9B97AE" }}>19 oct.</div></td>
                      <td className="num tnum" style={{ fontSize: 18 }}>{moy != null ? fmt(moy) : <span className="muted" style={{ fontSize: 13, fontFamily: "var(--sans)" }}>en attente</span>}</td>
                      <td>{j2 == null ? <span className="badge b-ocre">À corriger</span> : <span className="badge b-olive">{published ? "Publié" : "Saisi"}</span>}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="row between muted" style={{ padding: "14px 16px", borderTop: "1px solid var(--ligne)", fontSize: 12 }}>
            <span>11 sur 22 élèves · page 1/2</span>
            <span>Enregistrement local · TODO persistance</span>
          </div>
        </div>
        <div className="col gap16">
          <div className="card p" style={{ background: "#fff" }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Statistiques J2</div>
            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[["14,1", "moyenne"], ["16,8", "max"], ["11,5", "min"], ["16 / 22", "saisies"]].map(([a, b]) => (
                <div key={b}><div className="num" style={{ fontSize: 28 }}>{a}</div><div className="muted" style={{ fontSize: 11.5 }}>{b}</div></div>
              ))}
            </div>
            <div className="row" style={{ alignItems: "flex-end", gap: 6, height: 90, marginTop: 16, borderBottom: "1px solid var(--ligne)" }}>
              {[1, 2, 3, 4, 3, 2, 1].map((v, i) => <div key={i} style={{ flex: 1, height: v * 20 + 4, background: i === 4 ? "var(--terra)" : "var(--noir)" }} />)}
            </div>
          </div>
          <div className="card p" style={{ background: "#fff" }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Règles du module</div>
            {[["Formule", "(J1 + 2·J2 + 3·J3 + Oral) / 7"], ["Retard", "−1 pt / jour"], ["Validation", "≥ 10 / 20"], ["Co-évaluateur", "R. Agbossou"]].map(([a, b]) => (
              <div key={a} className="row between" style={{ fontSize: 12.5, padding: "4px 0" }}><span className="muted">{a}</span><b>{b}</b></div>
            ))}
          </div>
          <div className="card p" style={{ background: "var(--ocre-pale)", borderColor: "#e6d3a3" }}>
            <div className="row gap8" style={{ color: "var(--ocre)" }}><Icon name="clock" size={16} /><b>Romaric Adjovi</b></div>
            <p style={{ fontSize: 12.5, marginTop: 6, lineHeight: 1.6 }}>J2 déposé avec 1 jour de retard : la pénalité de −1 pt sera appliquée automatiquement à la note saisie.</p>
          </div>
        </div>
      </div>
    </>
  );
}
