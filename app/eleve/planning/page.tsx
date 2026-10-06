import type { Metadata } from "next";

export const metadata: Metadata = { title: "Planning élève" };

const items = [
  ["Lun. 5 oct.", "08:00 – 12:00", "Collection capsule", "Atelier Ganvié · O. Sossa"],
  ["Mar. 6 oct.", "08:00 – 10:00", "Croquis de mode", "Salle Croquis · O. Sossa"],
  ["Mar. 6 oct.", "16:00 – 17:00", "Permanence corrections (visio)", "Lien envoyé"],
  ["Mer. 7 oct.", "08:00 – 12:00", "Atelier assemblage", "Atelier Ganvié · R. Agbossou"],
  ["Jeu. 8 oct.", "14:00 – 17:00", "Corrections capsule", "Atelier Ganvié · O. Sossa"],
  ["Ven. 9 oct.", "13:00 – 17:00", "Fiches techniques", "Salle Croquis · R. Agbossou"],
];

export default function ElevePlanning() {
  return (
    <>
      <div className="eyebrow t">Semaine 41 · STY-2</div>
      <h1 className="h-page" style={{ marginTop: 10 }}>Planning</h1>
      <div className="col" style={{ marginTop: 24 }}>
        {items.map(([d, h, t, m]) => (
          <div key={d + h} className="row gap16" style={{ padding: "16px 0", borderBottom: "1px solid var(--ligne)" }}>
            <div style={{ width: 140 }}><b>{d}</b><div className="muted tnum">{h}</div></div>
            <div><div style={{ fontWeight: 700 }}>{t}</div><div className="muted" style={{ fontSize: 12.5 }}>{m}</div></div>
          </div>
        ))}
      </div>
    </>
  );
}
