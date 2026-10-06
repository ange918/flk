import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { FakeQR, Logo } from "@/components/ui";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = { title: "Reçu numérique" };

export default function RecuPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F3E8F0" }}>
      <div className="row between" style={{ height: 64, padding: "0 32px", background: "var(--noir)", color: "var(--ivoire)", gap: 16, flexWrap: "wrap" }}>
        <div className="row gap16">
          <Link href="/admin/scolarites" aria-label="Retour"><Icon name="arrowl" size={18} /></Link>
          <b>Reçu ISD-REC-2026-0418.pdf</b>
          <span className="badge" style={{ background: "#2E2548", color: "#C8C4D8" }}>1 page · 182 Ko</span>
        </div>
        <div className="row gap12" style={{ fontSize: 13, color: "#C8C4D8", flexWrap: "wrap" }}>
          <span>− 100 % +</span>
          <span className="btn light sm"><Icon name="download" size={14} /> Télécharger</span>
          <span className="btn sm"><Icon name="wa" size={14} /> Partager sur WhatsApp</span>
          <span className="btn sm ghost" style={{ color: "#fff", borderColor: "#6b625a" }}><Icon name="mail" size={14} /> Envoyer par e-mail</span>
        </div>
      </div>
      <div style={{ width: "min(794px, calc(100% - 32px))", margin: "48px auto 0", background: "#fff", boxShadow: "0 30px 80px rgba(26,18,48,.25)", padding: "64px 48px 56px" }}>
        <div className="row between" style={{ alignItems: "flex-start", paddingBottom: 28, borderBottom: "2px solid var(--noir)", gap: 16 }}>
          <div>
            <Logo size={50} />
            <div className="muted" style={{ fontSize: 11.5, marginTop: 14, lineHeight: 1.6 }}>
              {BRAND.addr}<br />{BRAND.tel} · {BRAND.mail}<br />IFU 3202600418765 · RCCM RB/COT/24 B 3187
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="eyebrow t">Reçu de paiement</div>
            <div className="num" style={{ fontSize: 28, marginTop: 6 }}>N° ISD-REC-2026-0418</div>
            <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>Émis le 5 octobre 2026 à 10:24</div>
            <span className="badge b-olive" style={{ marginTop: 10 }}><Icon name="check" size={11} stroke={2.6} /> Payé</span>
          </div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 28 }}>
          <div>
            <div className="eyebrow">Élève</div>
            <div className="serif" style={{ fontSize: 22, marginTop: 6 }}>Nadège Akpovi</div>
            <div className="muted" style={{ fontSize: 12.5, lineHeight: 1.7, marginTop: 4 }}>Matricule ISD-STY-2025-031<br />Stylisme & Création de mode · 2e année (STY-2)<br />Année académique 2026–2027</div>
          </div>
          <div>
            <div className="eyebrow">Payé par</div>
            <div className="serif" style={{ fontSize: 22, marginTop: 6 }}>Mme Bernadette Akpovi</div>
            <div className="muted" style={{ fontSize: 12.5, lineHeight: 1.7, marginTop: 4 }}>Tutrice légale · +229 01 97 21 46 58<br />Akpakpa, Cotonou</div>
          </div>
        </div>
        <table className="t" style={{ marginTop: 32 }}>
          <thead><tr><th>Désignation</th><th>Échéance</th><th style={{ textAlign: "right" }}>Montant</th></tr></thead>
          <tbody>
            <tr>
              <td><b>Scolarité 2026–2027 — Tranche 2 / 3</b><div className="muted" style={{ fontSize: 12 }}>Plan « 3 tranches » · Stylisme 2e année</div></td>
              <td className="tnum">15 oct. 2026</td>
              <td className="tnum" style={{ textAlign: "right", fontWeight: 700 }}>297 500 FCFA</td>
            </tr>
            <tr>
              <td className="muted">Frais de service Mobile Money</td>
              <td />
              <td className="tnum" style={{ textAlign: "right" }}>0 FCFA</td>
            </tr>
          </tbody>
        </table>
        <div className="row between" style={{ marginTop: 6, padding: "20px 0", borderTop: "2px solid var(--noir)", borderBottom: "1px solid var(--ligne)", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow">Total réglé</div>
            <div className="serif" style={{ fontSize: 14, marginTop: 6, color: "var(--taupe)" }}>Deux cent quatre-vingt-dix-sept mille cinq cents francs CFA</div>
          </div>
          <div className="num" style={{ fontSize: 46 }}>297 500 <span style={{ fontSize: 16, fontFamily: "var(--sans)" }}>FCFA</span></div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 22, fontSize: 12.5 }}>
          {[["Moyen de paiement", "MTN MoMo · +229 01 97 •• •• 58"], ["Réf. transaction", "MP261005.1024.C48217"], ["Agrégateur", "FedaPay · txn 7781204"]].map(([a, b]) => (
            <div key={a}><div className="eyebrow" style={{ marginBottom: 4 }}>{a}</div><b className="tnum">{b}</b></div>
          ))}
        </div>
        <div style={{ marginTop: 28, background: "var(--papier)", border: "1px solid var(--ligne)", padding: "18px 20px" }}>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Situation du compte · année 2026–2027</div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 16, fontSize: 12.5 }}>
            {[["Scolarité annuelle", "850 000 F"], ["Total réglé", "552 500 F"], ["Reste à payer", "297 500 F"], ["Prochaine échéance", "15 janv. 2027"]].map(([a, b]) => (
              <div key={a}><div className="muted">{a}</div><b className="tnum" style={{ fontSize: 15 }}>{b}</b></div>
            ))}
          </div>
          <div className="bar" style={{ marginTop: 12 }}><i style={{ width: "65%" }} /></div>
          <div className="row between muted" style={{ fontSize: 11, marginTop: 6, gap: 8, flexWrap: "wrap" }}>
            <span>T1 · 255 000 F · payée le 1er sept. 2026</span>
            <span>T2 · 297 500 F · payée le 5 oct. 2026</span>
            <span>T3 · 297 500 F · due le 15 janv. 2027</span>
          </div>
        </div>
        <div className="row between" style={{ marginTop: 36, alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
          <div className="row gap16">
            <FakeQR size={104} seed={13} />
            <div className="muted" style={{ fontSize: 11.5, lineHeight: 1.6, maxWidth: 220 }}>
              Vérifiez l’authenticité de ce reçu :<br />
              <b style={{ color: "var(--noir)" }}>verif.isdam.app/ISD-REC-2026-0418</b><br />
              Empreinte : 9F3A·C21E·77B0
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 130, height: 130, border: "2px solid var(--terra)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--terra)", transform: "rotate(-12deg)", marginLeft: "auto" }}>
              <div>
                <div style={{ fontSize: 9, letterSpacing: ".18em", fontWeight: 800 }}>ISDAM</div>
                <div className="serif" style={{ fontSize: 26, color: "var(--terra)" }}>Payé</div>
                <div style={{ fontSize: 9, letterSpacing: ".14em", fontWeight: 700 }}>COTONOU · 05.10.26</div>
              </div>
            </div>
            <div className="muted" style={{ fontSize: 11, marginTop: 8 }}>Service scolarité — signature électronique</div>
          </div>
        </div>
        <div className="muted" style={{ fontSize: 10, marginTop: 36, paddingTop: 14, borderTop: "1px solid var(--ligne)", display: "flex", justifyContent: "space-between" }}>
          <span>Reçu généré automatiquement — fait foi de paiement. Données d’exemple.</span>
          <span>Page 1/1</span>
        </div>
      </div>
      <div style={{ height: 48 }} />
    </div>
  );
}
