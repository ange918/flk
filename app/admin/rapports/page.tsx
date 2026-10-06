import type { Metadata } from "next";
import { Icon } from "@/components/icon";

export const metadata: Metadata = { title: "Rapports" };

const reports = [
  ["Rapport mensuel — septembre 2026", "Présences, encaissements, admissions", "PDF · 18 pages"],
  ["Pipeline admissions janv. 2027", "187 dossiers · taux d’acceptation", "CSV"],
  ["Recouvrement semaine 40", "9 retards · 1,24 M FCFA", "PDF"],
  ["Charge formateurs", "Heures planifiées vs réalisées", "CSV"],
];

export default function RapportsPage() {
  return (
    <>
      <div className="eyebrow t">Pilotage</div>
      <h1 className="h-page" style={{ marginTop: 10 }}>Rapports</h1>
      <p className="muted" style={{ marginTop: 8, marginBottom: 20 }}>Exports d’exemple. La génération PDF sera branchée plus tard.</p>
      <div className="col gap12">
        {reports.map(([t, s, m]) => (
          <div key={t} className="card row between" style={{ padding: "16px 18px", gap: 12 }}>
            <div><b>{t}</b><div className="muted" style={{ fontSize: 12.5 }}>{s}</div></div>
            <span className="btn ghost sm"><Icon name="download" size={14} /> {m}</span>
          </div>
        ))}
      </div>
    </>
  );
}
