import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { FakeQR, Logo } from "@/components/ui";
import { BULLETIN } from "@/lib/data";

export const metadata: Metadata = { title: "Bulletin & certificat" };

function fmt(v: number) {
  return v.toFixed(1).replace(".", ",").replace(",0", "");
}

export default function BulletinPage() {
  const tot = BULLETIN.reduce((a, m) => a + m[1] * m[2], 0);
  const co = BULLETIN.reduce((a, m) => a + m[1], 0);
  const moy = (tot / co).toFixed(2).replace(".", ",");
  return (
    <div style={{ minHeight: "100vh", background: "#F3E8F0", padding: "40px 48px 64px" }}>
      <div className="row between" style={{ marginBottom: 28, gap: 12, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow t">Documents officiels</div>
          <h1 className="h-page" style={{ marginTop: 8 }}>Bulletin de notes <em>&amp;</em> certificat</h1>
        </div>
        <div className="row gap12">
          <Link className="btn ghost" href="/eleve"><Icon name="arrowl" size={15} /> Espace élève</Link>
          <span className="btn ghost"><Icon name="download" size={15} /> PDF signé</span>
          <span className="btn"><Icon name="shield" size={15} /> Vérifier un document</span>
        </div>
      </div>
      <div className="doc-grid">
        <div style={{ background: "#fff", padding: "48px 40px 40px", boxShadow: "0 30px 80px rgba(26,18,48,.2)" }}>
          <div className="row between" style={{ alignItems: "flex-start", paddingBottom: 20, borderBottom: "2px solid var(--noir)" }}>
            <Logo size={42} />
            <div style={{ textAlign: "right" }}>
              <div className="eyebrow t">Bulletin annuel</div>
              <div className="serif" style={{ fontSize: 20, marginTop: 4 }}>Année 2025–2026</div>
            </div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20, fontSize: 12.5 }}>
            <div><div className="eyebrow">Élève</div><div className="serif" style={{ fontSize: 20, marginTop: 4 }}>Nadège Akpovi</div><div className="muted">Matricule ISD-STY-2025-031</div></div>
            <div><div className="eyebrow">Formation</div><div style={{ fontWeight: 700, marginTop: 4 }}>Stylisme & Création de mode</div><div className="muted">1re année · promotion STY-1 2025–26</div></div>
          </div>
          <table className="t" style={{ marginTop: 20, fontSize: 12.5 }}>
            <thead><tr><th>Module</th><th style={{ textAlign: "center" }}>Coef.</th><th style={{ textAlign: "right" }}>Note /20</th></tr></thead>
            <tbody>
              {BULLETIN.map(([m, c, n]) => (
                <tr key={m}><td style={{ padding: "9px 12px" }}>{m}</td><td className="tnum" style={{ textAlign: "center" }}>{c}</td><td className="tnum" style={{ textAlign: "right", fontWeight: 700 }}>{fmt(n)}</td></tr>
              ))}
            </tbody>
          </table>
          <div className="grid" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginTop: 4, padding: "16px 0", borderTop: "2px solid var(--noir)", borderBottom: "1px solid var(--ligne)" }}>
            {[["Moyenne", moy], ["Mention", "Bien"], ["Rang", "4 / 24"], ["Présence", "95 %"]].map(([a, b], i) => (
              <div key={a}><div className="eyebrow">{a}</div><div className={i === 1 ? "serif-i" : "num"} style={{ fontSize: i === 0 ? 30 : 20, marginTop: 4 }}>{b}</div></div>
            ))}
          </div>
          <div style={{ marginTop: 16, fontSize: 12.5 }}>
            <div className="eyebrow">Appréciation du conseil pédagogique</div>
            <p className="serif" style={{ fontSize: 15, lineHeight: 1.5, marginTop: 6, color: "var(--terra)" }}>Année très solide, regard créatif affirmé. Consolider la technique d’assemblage en 2e année. Admise en STY-2.</p>
          </div>
          <div className="row between" style={{ marginTop: 24, alignItems: "flex-end" }}>
            <div className="row gap12"><FakeQR size={70} seed={31} /><div className="muted" style={{ fontSize: 10.5, lineHeight: 1.5 }}>verif.isdam.app<br />BUL-2026-STY1-031</div></div>
            <div style={{ textAlign: "right", fontSize: 11.5 }}><div className="serif" style={{ fontSize: 20, color: "var(--terra)" }}>V. Ahouansou</div><div className="muted">Directrice · Cotonou, le 10 juillet 2026</div></div>
          </div>
        </div>
        <div style={{ background: "var(--ivoire)", padding: 16, boxShadow: "0 30px 80px rgba(26,18,48,.2)" }}>
          <div style={{ border: "1px solid var(--ligne)", padding: 10 }}>
            <div style={{ border: "3px double var(--terra)", padding: "48px 40px", textAlign: "center", background: "var(--papier)" }}>
              <div style={{ display: "flex", justifyContent: "center" }}><Logo size={54} /></div>
              <div className="eyebrow t" style={{ marginTop: 36, letterSpacing: ".32em" }}>Certificat de fin de formation</div>
              <p className="muted" style={{ marginTop: 24, fontSize: 14 }}>ISDAM certifie que</p>
              <div className="serif" style={{ fontSize: 64, lineHeight: 1, marginTop: 14 }}>Grâce <em className="serif-i">Tossou</em></div>
              <p style={{ marginTop: 22, fontSize: 15, lineHeight: 1.7, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
                a suivi avec succès le cursus <b>Design Textile & Wax</b> (1 an, 840 heures dont 590 heures d’atelier) — promotion 2025–2026 — et obtenu le <b>Certificat professionnel</b> avec la mention
              </p>
              <div className="serif-i" style={{ fontSize: 34, marginTop: 12 }}>Très bien</div>
              <div className="row" style={{ justifyContent: "center", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
                <span className="badge b-line">Moyenne générale 16,8 / 20</span>
                <span className="badge b-line">Projet : imprimé « Indigo de Ganvié »</span>
              </div>
              <div className="grid" style={{ gridTemplateColumns: "1fr auto 1fr", gap: 24, marginTop: 40, alignItems: "end" }}>
                <div><div className="serif" style={{ fontSize: 22, color: "var(--terra)" }}>V. Ahouansou</div><div className="muted" style={{ borderTop: "1px solid var(--ligne)", marginTop: 6, paddingTop: 6, fontSize: 11.5 }}>Victoire Ahouansou, Directrice</div></div>
                <div style={{ width: 118, height: 118, border: "2px solid var(--terra)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--terra)", transform: "rotate(-8deg)", margin: "0 auto" }}>
                  <div><div style={{ fontSize: 8.5, letterSpacing: ".16em", fontWeight: 800 }}>ISDAM</div><div className="serif" style={{ fontSize: 20, color: "var(--terra)" }}>Cotonou</div><div style={{ fontSize: 8.5, letterSpacing: ".12em", fontWeight: 700 }}>10 · 07 · 2026</div></div>
                </div>
                <div><div className="serif" style={{ fontSize: 22, color: "var(--terra)" }}>E. Kpadonou</div><div className="muted" style={{ borderTop: "1px solid var(--ligne)", marginTop: 6, paddingTop: 6, fontSize: 11.5 }}>Euloge Kpadonou, responsable de filière</div></div>
              </div>
              <div className="row between" style={{ marginTop: 40, alignItems: "flex-end" }}>
                <div className="row gap12" style={{ textAlign: "left" }}><FakeQR size={76} seed={41} /><div className="muted" style={{ fontSize: 10.5, lineHeight: 1.5 }}>N° CERT-TEX-2026-0112<br />Délivré à Cotonou le 10 juillet 2026<br />verif.isdam.app</div></div>
                <span className="ex-note">Document d’exemple</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ex-note" style={{ marginTop: 28 }}>Documents d’exemple — noms, notes et numéros fictifs · QR codes illustratifs non scannables</div>
    </div>
  );
}
