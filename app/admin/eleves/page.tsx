import type { Metadata } from "next";
import Link from "next/link";
import { Person } from "@/components/ui";
import { STY2, studentInitials } from "@/lib/data";

export const metadata: Metadata = { title: "Élèves" };

export default function ElevesPage() {
  return (
    <>
      <div className="eyebrow t">Pilotage · 142 inscrits</div>
      <h1 className="h-page" style={{ marginTop: 10 }}>Élèves</h1>
      <p className="muted" style={{ marginTop: 8, marginBottom: 24 }}>Promotion STY-2 affichée · les autres promotions suivent le même registre.</p>
      <div className="card" style={{ background: "#fff" }}>
        <table className="t">
          <thead><tr><th>Élève</th><th>Promotion</th><th>Statut</th><th /></tr></thead>
          <tbody>
            {STY2.map((s) => (
              <tr key={s.name}>
                <td><div className="row gap12"><Person img={s.photo} ini={studentInitials(s.name)} size={34} /><b>{s.name}</b></div></td>
                <td className="muted">{s.promo}</td>
                <td><span className="badge b-olive"><i className="dot" />Inscrit·e</span></td>
                <td><Link className="link" href="/admin/scolarites">Scolarité</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
