"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { Avatar, Bar } from "@/components/ui";
import { CAL_EVENTS, PROMOS, PROMO_COLORS, TRAINERS } from "@/lib/data";

const DAYS = ["Lun. 5", "Mar. 6", "Mer. 7", "Jeu. 8", "Ven. 9", "Sam. 10"];
const H0 = 8;
const HPX = 52;

export default function PromotionsPage() {
  const [view, setView] = useState(1);
  const [conflictFixed, setConflictFixed] = useState(false);

  return (
    <>
      <div className="row between" style={{ alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow t">Année 2026–2027 · 6 promotions · 142 élèves</div>
          <h1 className="h-page" style={{ marginTop: 10 }}>Promotions <em>&amp;</em> plannings</h1>
        </div>
        <div className="row gap12" style={{ flexWrap: "wrap" }}>
          <span className="btn ghost"><Icon name="download" size={15} /> Exporter (PDF / iCal)</span>
          <span className="btn"><Icon name="plus" size={15} /> Nouvelle séance</span>
        </div>
      </div>
      <div className="promo-grid" style={{ marginTop: 28 }}>
        {PROMOS.map((p) => (
          <div key={p.code} className="card" style={{ padding: "14px 16px", borderColor: p.on ? "var(--noir)" : undefined, boxShadow: p.on ? "inset 0 3px 0 var(--terra)" : undefined }}>
            <div className="row between"><span className="num" style={{ fontSize: 22 }}>{p.code}</span><span className="tnum" style={{ fontSize: 12, fontWeight: 700 }}>{p.eleves}/{p.cap}</span></div>
            <div className="muted" style={{ fontSize: 12 }}>{p.nom}</div>
            <div style={{ margin: "10px 0" }}><Bar value={(p.eleves / p.cap) * 100} /></div>
            <div className="col gap4" style={{ fontSize: 11.5 }}>
              <span className="row gap8"><Avatar src={p.img} size={22} /> {p.formateur}</span>
              <span className="muted row gap4"><Icon name="pin" size={12} /> {p.salle}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="card" style={{ background: "#fff", marginTop: 20 }}>
        <div className="row between" style={{ padding: "18px 22px", borderBottom: "1px solid var(--ligne)", gap: 12, flexWrap: "wrap" }}>
          <div className="row gap16">
            <Icon name="arrowl" size={16} />
            <b className="serif" style={{ fontSize: 22, fontWeight: 500 }}>5 – 10 octobre 2026</b>
            <Icon name="arrow" size={16} />
            <span className="badge b-line">Semaine 41</span>
          </div>
          <div className="row gap8">
            {["Jour", "Semaine", "Mois"].map((x, i) => (
              <button key={x} className={`badge ${i === view ? "b-noir" : "b-line"}`} style={{ height: 30, padding: "0 12px" }} onClick={() => setView(i)}>{x}</button>
            ))}
            {!conflictFixed ? <span className="badge b-rouge" style={{ height: 30, padding: "0 12px" }}>1 conflit</span> : <span className="badge b-olive" style={{ height: 30 }}>Conflit résolu</span>}
          </div>
        </div>
        {view !== 2 ? (
          <>
            <div className="cal-grid" style={{ borderBottom: "1px solid var(--ligne)" }}>
              <div />
              {DAYS.map((d, k) => (
                <div key={d} style={{ padding: "12px 10px", fontWeight: 700, fontSize: 12.5, borderLeft: "1px solid var(--ligne)", color: k === 1 ? "var(--terra)" : undefined }}>
                  {d}{k === 1 ? " · aujourd’hui" : ""}
                </div>
              ))}
            </div>
            <div className="cal-grid" style={{ position: "relative", backgroundImage: `repeating-linear-gradient(180deg, transparent 0 ${HPX - 1}px, var(--ligne) ${HPX - 1}px ${HPX}px)` }}>
              <div>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="muted tnum" style={{ height: HPX, fontSize: 10.5, padding: "4px 8px" }}>{String(H0 + i).padStart(2, "0")}:00</div>
                ))}
              </div>
              {DAYS.map((d, k) => (
                <div key={d} style={{ position: "relative", borderLeft: "1px solid var(--ligne)", height: 10 * HPX, background: k === 1 ? "rgba(224,33,138,.05)" : undefined }}>
                  {CAL_EVENTS.filter((e) => e.day === k && (view === 1 || k === 1)).map((e) => {
                    const [bg, fg] = PROMO_COLORS[e.promo];
                    const conflict = e.conflict && !conflictFixed;
                    return (
                      <div key={e.title + e.start} style={{ position: "absolute", top: (e.start - H0) * HPX + 2, height: (e.end - e.start) * HPX - 4, left: `calc(${(100 / e.lanes) * e.lane}% + 3px)`, width: `calc(${100 / e.lanes}% - 6px)`, background: bg, color: fg, borderRadius: 14, padding: "8px 9px", fontSize: 11, lineHeight: 1.35, overflow: "hidden", outline: conflict ? "2px solid var(--rouge)" : undefined }}>
                        <b style={{ display: "block", fontSize: 11.5 }}>{e.title.split(" · ")[0]}</b>
                        <span style={{ display: "block", fontWeight: 600 }}>{e.title.split(" · ")[1]}</span>
                        <span style={{ opacity: 0.85 }}>{conflictFixed && e.conflict ? "Atelier Piquage" : e.room}</span><br />
                        <span style={{ opacity: 0.85 }}>{e.teacher}</span>
                        {conflict ? <div style={{ marginTop: 4, fontWeight: 800, color: "var(--rouge)", background: "#fff", display: "inline-block", padding: "0 5px", borderRadius: 8 }}>Conflit</div> : null}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{ padding: 28 }} className="muted">Vue mois — octobre 2026 · 17 séances planifiées sur la semaine type. Revenez à Semaine pour le détail.</div>
        )}
        <div className="row gap16" style={{ padding: "14px 22px", borderTop: "1px solid var(--ligne)", fontSize: 11.5, flexWrap: "wrap" }}>
          {Object.entries({ STY: "Stylisme", MOD: "Modélisme", TEX: "Textile", CTA: "Couture", SPI: "Image de mode" }).map(([k, v]) => (
            <span key={k} className="row gap8"><i style={{ width: 12, height: 12, borderRadius: 8, background: PROMO_COLORS[k][0], border: "1px solid var(--ligne-fonce)" }} />{v}</span>
          ))}
          <span className="muted" style={{ marginLeft: "auto" }}>Détection auto. des conflits salle / formateur</span>
        </div>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 20, alignItems: "start" }}>
        <div className="card p">
          <div className="eyebrow" style={{ marginBottom: 14 }}>Occupation des salles</div>
          {[["Atelier Ganvié", 78], ["Atelier Ouidah", 72], ["Atelier Piquage", 66], ["Labo textile", 58], ["Salle Croquis", 44], ["Studio Lumière", 18]].map(([s, v]) => (
            <div key={String(s)} style={{ marginBottom: 12 }}>
              <div className="row between" style={{ fontSize: 12, marginBottom: 5 }}><span>{s}</span><b className="tnum">{v} %</b></div>
              <Bar value={Number(v)} />
            </div>
          ))}
        </div>
        <div className="card p" style={{ borderColor: conflictFixed ? "var(--olive)" : "var(--rouge)", background: "#fff" }}>
          <div className="row gap8" style={{ color: conflictFixed ? "var(--olive)" : "var(--rouge)" }}>
            <Icon name="clock" size={16} /><b>{conflictFixed ? "Suggestion appliquée" : "Conflit détecté"}</b>
          </div>
          <p style={{ fontSize: 12.5, marginTop: 8, lineHeight: 1.6 }}>
            Jeu. 8 oct., 14:00–16:00 — <b>Atelier Ganvié</b> réservé par STY-2 (O. Sossa) et CTA-26 (S. Dossa).
          </p>
          <div className="muted" style={{ fontSize: 12, marginTop: 8 }}>Suggestion : déplacer CTA-26 en <b style={{ color: "var(--noir)" }}>Atelier Piquage</b> (libre).</div>
          <button className="btn sm" style={{ marginTop: 12, width: "100%" }} disabled={conflictFixed} onClick={() => setConflictFixed(true)}>Appliquer la suggestion</button>
        </div>
        <div className="card p">
          <div className="eyebrow" style={{ marginBottom: 12 }}>Formateurs · charge semaine</div>
          {TRAINERS.slice(0, 4).map((t) => (
            <div key={t.name} className="row gap8" style={{ fontSize: 12.5, padding: "7px 0", borderBottom: "1px solid var(--ligne)" }}>
              <Avatar src={t.img} size={26} /><span style={{ flex: 1 }}>{t.name}</span><b className="tnum">{t.hours}</b>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
