"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/icon";
import { AvatarIni, Bar, Photo } from "@/components/ui";
import { KANBAN, img, type KanbanCard } from "@/lib/data";

const COLS = [
  { id: "recue", title: "Reçue", tone: "", more: 80 },
  { id: "revue", title: "En revue", tone: "b-indigo", more: 38 },
  { id: "acceptee", title: "Acceptée", tone: "b-olive", more: 44 },
  { id: "refusee", title: "Refusée", tone: "b-rouge", more: 13 },
] as const;

const FILTERS = ["Toutes filières", "Stylisme", "Modélisme", "Textile", "Couture"];

export default function KanbanPage() {
  const [filter, setFilter] = useState(0);
  const [selected, setSelected] = useState("CA");
  const [moved, setMoved] = useState<Record<string, KanbanCard["column"]>>({});

  const cards = useMemo(() => {
    return KANBAN.map((c) => ({ ...c, column: moved[c.id] ?? c.column })).filter((c) => {
      if (filter === 0) return true;
      const needle = FILTERS[filter].toLowerCase();
      return c.filiere.toLowerCase().includes(needle === "textile" ? "textile" : needle === "couture" ? "couture" : needle);
    });
  }, [filter, moved]);

  const current = cards.find((c) => c.id === selected) ?? KANBAN[4];

  function move(id: string, column: KanbanCard["column"]) {
    setMoved((m) => ({ ...m, [id]: column }));
    setSelected(id);
  }

  return (
    <>
      <div className="row between" style={{ alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow t">Session janvier 2027 · 187 dossiers</div>
          <h1 className="h-page" style={{ marginTop: 10 }}>Pipeline des <em>candidatures</em></h1>
        </div>
        <div className="row gap8" style={{ flexWrap: "wrap" }}>
          {FILTERS.map((f, i) => (
            <button key={f} className={`badge ${i === filter ? "b-noir" : "b-line"}`} style={{ height: 34, padding: "0 14px" }} onClick={() => setFilter(i)}>{f}</button>
          ))}
          <span className="btn ghost sm"><Icon name="filter" size={14} /> Filtres</span>
          <span className="btn sm"><Icon name="download" size={14} /> Export CSV</span>
        </div>
      </div>
      <div className="kanban" style={{ marginTop: 28 }}>
        {COLS.map((col) => {
          const list = cards.filter((c) => c.column === col.id);
          return (
            <div key={col.id} style={{ background: "var(--sable-pale)", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="row between" style={{ padding: "2px 4px 6px", borderBottom: "1px solid var(--ligne)" }}>
                <b style={{ fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase" }}>{col.title}</b>
                <span className={`badge ${col.tone}`}>{list.length + col.more}</span>
              </div>
              {list.map((c) => (
                <button key={c.id} onClick={() => setSelected(c.id)} className="card" style={{ padding: 14, textAlign: "left", background: "#fff", borderColor: selected === c.id ? "var(--noir)" : undefined, boxShadow: selected === c.id ? "0 0 0 3px rgba(224,33,138,.18)" : undefined }}>
                  <div className="row gap12">
                    <AvatarIni initials={c.ini} size={34} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 13.5 }}>{c.name}</div>
                      <div className="muted" style={{ fontSize: 11.5 }}>{c.filiere}</div>
                    </div>
                  </div>
                  <div className="row between" style={{ marginTop: 12, fontSize: 11.5 }}>
                    <span className="muted row gap4"><Icon name="file" size={13} /> {c.docs}</span>
                    <span className="muted row gap4"><Icon name="clock" size={13} /> {c.date}</span>
                  </div>
                  {c.score ? (
                    <div className="row between" style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--ligne)", fontSize: 11.5 }}>
                      <span className="muted">Dossier artistique</span><b className="tnum">{c.score}</b>
                    </div>
                  ) : null}
                  {c.extra ? <div style={{ marginTop: 10 }}><span className="badge b-line">{c.extra}</span></div> : null}
                </button>
              ))}
              <div className="muted" style={{ textAlign: "center", fontSize: 12, padding: 6 }}>+ {col.more} autres</div>
            </div>
          );
        })}
      </div>

      <section className="card" style={{ background: "#fff", marginTop: 20, display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1.1fr) minmax(0,1fr) minmax(0,.9fr)", boxShadow: "0 0 0 3px rgba(224,33,138,.12)", borderColor: "var(--noir)" }}>
        <div style={{ padding: 22, borderRight: "1px solid var(--ligne)" }}>
          <div className="eyebrow">Dossier sélectionné · ADM-2027-{current.id}</div>
          <div className="row gap12" style={{ marginTop: 14 }}>
            <AvatarIni initials={current.ini} size={52} />
            <div>
              <div className="serif" style={{ fontSize: 24, lineHeight: 1.1 }}>{current.name}</div>
              <div className="muted" style={{ fontSize: 12 }}>{current.age ?? "—"} · {current.city ?? "Cotonou"}</div>
              <div className="muted" style={{ fontSize: 12 }}>{current.phone ?? "Téléphone au dossier"}</div>
            </div>
          </div>
          <div className="row gap8" style={{ marginTop: 14, flexWrap: "wrap" }}>
            <span className="badge b-indigo"><i className="dot" />{COLS.find((c) => c.id === current.column)?.title}</span>
            <span className="badge b-terra">{current.filiere}</span>
          </div>
          <div className="col gap8" style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--ligne)" }}>
            {[["Pièces", current.docs], ["Frais de dossier", current.paid ?? "15 000 F"], ["Motivation", current.letter ?? "À lire"], ["Évaluateurs", current.reviewers ?? "Commission"]].map(([a, b]) => (
              <div key={a} className="row between" style={{ fontSize: 12.5, gap: 8 }}><span className="muted">{a}</span><b style={{ textAlign: "right" }}>{b}</b></div>
            ))}
          </div>
        </div>
        <div style={{ padding: 22, borderRight: "1px solid var(--ligne)" }}>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Dossier artistique</div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
            {[img.croquis1, img.croquis3, img.croquis2].map((s) => <Photo key={s} src={s} h={160} radius={12} />)}
          </div>
        </div>
        <div style={{ padding: 22, borderRight: "1px solid var(--ligne)" }}>
          <div className="row between" style={{ marginBottom: 10 }}><span className="eyebrow">Grille d’évaluation</span><b className="tnum">{current.score ?? "—"}</b></div>
          {[["Regard & créativité", 17], ["Dessin", 15], ["Motivation", 18], ["Projet professionnel", 16]].map(([a, v]) => (
            <div key={String(a)} style={{ marginBottom: 8 }}>
              <div className="row between" style={{ fontSize: 12, marginBottom: 4 }}><span>{a}</span><b className="tnum">{v}/20</b></div>
              <Bar value={Number(v) * 5} />
            </div>
          ))}
        </div>
        <div className="col gap8" style={{ padding: 22 }}>
          <button className="btn terra" style={{ width: "100%" }} onClick={() => move(current.id, "acceptee")}><Icon name="check" size={15} /> Accepter</button>
          <button className="btn ghost sm" style={{ width: "100%" }} onClick={() => move(current.id, "revue")}>Planifier l’entretien</button>
          <button className="btn danger sm" style={{ width: "100%" }} onClick={() => move(current.id, "refusee")}>Refuser</button>
          <p className="muted" style={{ fontSize: 11, marginTop: 4 }}>Acceptation = demande d’acompte (simulation). Notification e-mail + WhatsApp à brancher.</p>
        </div>
      </section>
    </>
  );
}
