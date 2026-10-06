"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon, StatusGlyphs, type IconName } from "@/components/icon";
import { PhoneStage } from "@/components/shell";
import { Bar } from "@/components/ui";
import { createPaymentIntent } from "@/lib/brand";

const tabs: [IconName, string, string][] = [
  ["home", "Accueil", "/eleve/mobile"],
  ["cal", "Planning", "/eleve/planning"],
  ["layers", "Briefs", "/eleve/briefs"],
  ["wallet", "Paiements", "/eleve/echeancier"],
  ["user", "Profil", "/connexion"],
];

export default function EcheancierPage() {
  const [method, setMethod] = useState(0);
  const [paid, setPaid] = useState(false);
  const ops = ["MTN MoMo", "Moov Money", "Carte · FedaPay"];
  return (
    <PhoneStage>
      <div className="status"><span>9:41</span><StatusGlyphs /></div>
      <div style={{ padding: "6px 20px 18px", borderBottom: "1px solid var(--ligne)" }}>
        <div className="row between">
          <Link href="/eleve/mobile"><Icon name="arrowl" size={22} /></Link>
          <span className="eyebrow">Paiements</span>
          <Link href="/admin/recu"><Icon name="receipt" size={20} /></Link>
        </div>
        <div className="eyebrow" style={{ marginTop: 18 }}>Scolarité 2026–2027 · Stylisme 2e année</div>
        <div className="num" style={{ fontSize: 42, lineHeight: 1.05, marginTop: 6 }}>297 500 <span style={{ fontSize: 14, fontFamily: "var(--sans)" }}>FCFA restants</span></div>
        <div style={{ marginTop: 12 }}><Bar value={65} /></div>
        <div className="row between muted" style={{ fontSize: 11.5, marginTop: 6 }}><span>552 500 F payés</span><span>Total 850 000 F</span></div>
      </div>
      <div style={{ padding: "18px 20px 4px" }}><b style={{ fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase" }}>Échéancier · 3 tranches</b></div>
      <div style={{ padding: "0 20px" }}>
        {[["T1 · Acompte", "255 000 F", "Payée le 1er sept. 2026", "b-olive", "Payée", "Moov Money"], ["T2", "297 500 F", "Payée le 5 oct. 2026", "b-olive", "Payée", "MTN MoMo"], ["T3", "297 500 F", "Échéance le 15 janv. 2027", "b-line", "À venir", ""]].map(([t, m, d, b, s, op], i) => (
          <div key={t} className="row gap12" style={{ padding: "14px 0", borderBottom: "1px solid var(--ligne)" }}>
            <span style={{ width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", background: s === "Payée" ? "var(--noir)" : "transparent", color: "#fff", border: s === "Payée" ? "none" : "1px solid var(--ligne)" }}>
              {s === "Payée" ? <Icon name="check" size={13} stroke={2.6} /> : "3"}
            </span>
            <div style={{ flex: 1 }}>
              <div className="row between"><b style={{ fontSize: 14 }}>{t}</b><b className="tnum" style={{ fontSize: 14 }}>{m}</b></div>
              <div className="row between" style={{ marginTop: 2 }}><span className="muted" style={{ fontSize: 11.5 }}>{d}{op ? ` · ${op}` : ""}</span><span className={`badge ${b}`}>{s}</span></div>
              {s === "Payée" ? <Link className="link" href="/admin/recu" style={{ fontSize: 11.5 }}>Reçu PDF</Link> : null}
            </div>
          </div>
        ))}
      </div>
      <div style={{ margin: "18px 20px 0", padding: 18, background: "#fff", border: "1px solid var(--ligne)", borderRadius: 16 }}>
        <div className="eyebrow">Payer la tranche 3 en avance</div>
        <div className="col gap8" style={{ marginTop: 12 }}>
          {ops.map((o, i) => (
            <button key={o} className="row gap12" onClick={() => setMethod(i)} style={{ minHeight: 48, padding: "12px 14px", border: `1px solid ${method === i ? "var(--noir)" : "var(--ligne)"}`, borderRadius: 12, textAlign: "left" }}>
              <span className={`radio ${method === i ? "on" : ""}`} />
              <span className="op-badge" style={{ height: 22, fontSize: 10 }}>{o}</span>
              {method === i ? <span className="muted" style={{ fontSize: 11.5, marginLeft: "auto" }}>+229 01 66 •• •• 07</span> : null}
            </button>
          ))}
        </div>
        <div className="row gap8" style={{ marginTop: 12 }}>
          <span className="badge b-line">Tout · 297 500 F</span>
          <span className="badge b-line">Partiel · montant libre</span>
        </div>
        <button className="btn terra lg" style={{ width: "100%", marginTop: 14 }} onClick={() => { createPaymentIntent({ amount: 297500, method: ops[method], reference: "T3" }); setPaid(true); }}>
          <Icon name="lock" size={15} /> {paid ? "Demande simulée" : "Payer 297 500 FCFA"}
        </button>
      </div>
      <div className="row gap12" style={{ margin: "14px 20px 20px", padding: "14px 16px", background: "var(--sable-pale)", fontSize: 12, lineHeight: 1.6, borderRadius: 14 }}>
        <Icon name="bell" size={18} /><span>Rappel automatique 7 jours et 1 jour avant chaque échéance, par notification et WhatsApp.</span>
      </div>
      <nav className="tabbar">
        {tabs.map(([i, l, href]) => (
          <Link key={l} href={href} className={l === "Paiements" ? "on" : ""}><Icon name={i} size={21} /><span>{l}</span></Link>
        ))}
      </nav>
    </PhoneStage>
  );
}
