import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Avatar, AvatarIni, Bar, Person, Photo } from "@/components/ui";
import { LATE_FEES, PROMOS, RECENT_CANDIDATES, img } from "@/lib/data";

export const metadata: Metadata = { title: "Tableau de bord direction" };

const months = [
  ["Juil.–août", 38.6, 61.1],
  ["Sept.", 41.2, 44],
  ["Oct.", 18.6, 27.5],
  ["Nov.", 0, 12.4],
  ["Déc.", 0, 9.8],
  ["Janv.", 0, 31],
] as const;

const presence = [
  ["STY-1 · Stylisme 1re année", 94],
  ["STY-2 · Stylisme 2e année", 92],
  ["MOD-1 · Modélisme", 90],
  ["TEX-26 · Design textile", 96],
  ["CTA-26 · Couture", 86],
  ["SPI-26 · Image de mode (soir)", 83],
] as const;

export default function AdminDashboard() {
  return (
    <>
      <div className="row between" style={{ alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow t">Mardi 6 octobre 2026 · Semaine 41</div>
          <h1 className="h-page" style={{ marginTop: 10 }}>Bonjour, <em>Victoire</em>.</h1>
          <p className="muted" style={{ marginTop: 8 }}>142 élèves en formation · 6 promotions actives · 23 nouvelles candidatures depuis lundi dernier.</p>
        </div>
        <div className="row gap12" style={{ flexWrap: "wrap" }}>
          <Link className="btn ghost" href="/admin/rapports"><Icon name="download" size={15} /> Rapport mensuel</Link>
          <Link className="btn" href="/admin/eleves"><Icon name="plus" size={15} /> Inscrire un élève</Link>
        </div>
      </div>
      <div className="kpi-grid" style={{ marginTop: 32 }}>
        <Kpi label="Taux d’inscrits" val="88,8" unit=" %" sub="142 inscrits / 160 places ouvertes" pct={88.8} trend="+4,1 pts" />
        <Kpi label="Taux de recouvrement" val="74,2" unit=" %" sub="98,4 M encaissés / 132,6 M FCFA exigibles" pct={74.2} trend="+2,3 pts" />
        <Kpi label="Taux de présence" val="91,6" unit=" %" sub="Semaine 40 · objectif 90 %" pct={91.6} trend="−0,8 pt" down />
        <Kpi label="Candidatures janv. 2027" val="187" unit="" sub="96 places · clôture le 30 nov." trend="+23" />
      </div>
      <div className="dash-2" style={{ marginTop: 20 }}>
        <div className="card">
          <div className="card-h"><h3>Candidatures récentes</h3><Link className="link" href="/admin/candidatures">Ouvrir le pipeline →</Link></div>
          <div className="table-wrap">
            <table className="t">
              <thead><tr><th>Candidat·e</th><th>Filière</th><th>Reçue le</th><th>Frais de dossier</th><th>Statut</th><th /></tr></thead>
              <tbody>
                {RECENT_CANDIDATES.map((c) => (
                  <tr key={c.ini}>
                    <td><div className="row gap12"><AvatarIni initials={c.ini} size={34} /><b>{c.name}</b></div></td>
                    <td className="muted">{c.filiere}</td>
                    <td className="tnum">{c.date}</td>
                    <td>{c.paid ? <span className="badge b-olive"><Icon name="check" size={11} stroke={2.6} /> 15 000 F</span> : <span className="badge b-ocre">En attente</span>}</td>
                    <td><span className={`badge ${c.tone}`}><i className="dot" />{c.status}</span></td>
                    <td className="muted"><Icon name="more" size={16} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-h"><h3>Échéances en retard</h3><span className="badge b-rouge">9 élèves · 1,24 M F</span></div>
          <div style={{ padding: "6px 24px 18px" }}>
            {LATE_FEES.map((p) => (
              <div key={p.name} className="row gap12" style={{ padding: "13px 0", borderBottom: "1px solid var(--ligne)" }}>
                <Person img={"img" in p ? p.img : undefined} ini={"ini" in p ? p.ini : undefined} size={38} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700 }}>{p.name}</div>
                  <div className="muted" style={{ fontSize: 12 }}>{p.plan} · {p.detail}</div>
                </div>
                <span className="badge b-rouge">{p.delay}</span>
                <Link className="btn sm ghost" href="/admin/scolarites"><Icon name="wa" size={14} /> Relancer</Link>
              </div>
            ))}
            <div className="row between" style={{ marginTop: 14 }}>
              <span className="muted" style={{ fontSize: 12 }}>Relances automatiques : J+3, J+10, J+20</span>
              <Link className="link" href="/admin/scolarites">Tout voir</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="dash-3" style={{ marginTop: 20 }}>
        <div className="card">
          <div className="card-h"><h3>Encaissements 2026–27</h3><span className="muted" style={{ fontSize: 12 }}>M FCFA</span></div>
          <div style={{ padding: 24, display: "flex", alignItems: "flex-end", gap: 18, height: 230 }}>
            {months.map(([m, r, e]) => (
              <div key={m} className="col" style={{ flex: 1, alignItems: "center", gap: 8, height: "100%", justifyContent: "flex-end" }}>
                <span className="tnum" style={{ fontSize: 11, fontWeight: 700 }}>{r ? String(r).replace(".", ",") : ""}</span>
                <div style={{ width: "100%", height: e * 2.3, position: "relative", border: "1px dashed var(--ligne-fonce)", borderBottom: 0 }}>
                  {r ? <div style={{ position: "absolute", left: -1, right: -1, bottom: 0, height: r * 2.3, background: m === "Oct." ? "var(--terra)" : "var(--noir)" }} /> : null}
                </div>
                <span className="muted" style={{ fontSize: 11.5 }}>{m}</span>
              </div>
            ))}
          </div>
          <div className="row gap16 muted" style={{ padding: "0 24px 18px", fontSize: 11.5 }}>
            <span className="row gap8"><i style={{ width: 10, height: 10, background: "var(--noir)" }} />Encaissé</span>
            <span className="row gap8"><i style={{ width: 10, height: 10, border: "1px dashed var(--ligne-fonce)" }} />Exigible prévu</span>
          </div>
        </div>
        <div className="card">
          <div className="card-h"><h3>Présence par promotion</h3><span className="muted" style={{ fontSize: 12 }}>sem. 40</span></div>
          <div className="col gap16" style={{ padding: "18px 24px" }}>
            {presence.map(([n, v]) => (
              <div key={n}>
                <div className="row between" style={{ fontSize: 12.5, marginBottom: 6 }}><span>{n}</span><b className="tnum">{v} %</b></div>
                <Bar value={v} />
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{ overflow: "hidden", background: "var(--noir)", color: "#fff", borderColor: "var(--noir)" }}>
          <Photo src={img.atelierGroupe} h={190} radius={0} />
          <div style={{ padding: 20 }}>
            <div className="eyebrow" style={{ color: "var(--terra-clair)" }}>Agenda direction</div>
            <div className="col" style={{ marginTop: 10 }}>
              {[["Jeu. 8 oct.", "Commission d’admission #3"], ["Ven. 16 oct.", "Rendu Collection capsule STY-2"], ["Sam. 24 oct.", "Journée portes ouvertes"], ["Lun. 30 nov.", "Clôture candidatures janv."]].map(([d, t]) => (
                <div key={d} className="row gap12" style={{ padding: "8px 0", borderTop: "1px solid #2E2548", fontSize: 12.5 }}>
                  <span className="tnum" style={{ width: 84, color: "#B8B4C8" }}>{d}</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="muted" style={{ marginTop: 16, fontSize: 12 }}>{PROMOS.length} promotions suivies · photos d’atelier d’exemple.</p>
    </>
  );
}

function Kpi({ label, val, unit, sub, pct, trend, down }: { label: string; val: string; unit: string; sub: string; pct?: number; trend?: string; down?: boolean }) {
  return (
    <div className="card p" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div className="row between">
        <span className="eyebrow">{label}</span>
        {trend ? <span className={`badge ${down ? "b-rouge" : "b-olive"}`}>{trend}</span> : null}
      </div>
      <div className="num" style={{ fontSize: 48, lineHeight: 1.05 }}>{val}<span style={{ fontSize: 22 }}>{unit}</span></div>
      <div className="muted" style={{ fontSize: 12.5 }}>{sub}</div>
      {pct != null ? <Bar value={pct} /> : null}
    </div>
  );
}
