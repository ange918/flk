"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Bar } from "@/components/ui";
import { createPaymentIntent } from "@/lib/brand";

const ROWS = [
  ["T1 · Acompte", "255 000 F", "Payée le 1er sept. 2026", "b-olive", "Payée", "Moov Money"],
  ["T2", "297 500 F", "Payée le 5 oct. 2026", "b-olive", "Payée", "MTN MoMo"],
  ["T3", "297 500 F", "Échéance le 15 janv. 2027", "b-line", "À venir", ""],
];

export default function PaiementsEleve() {
  const [method, setMethod] = useState("MTN MoMo");
  const [paid, setPaid] = useState(false);
  return (
    <>
      <div className="eyebrow t">Scolarité 2026–2027 · Stylisme 2e année</div>
      <h1 className="h-page" style={{ marginTop: 10 }}>Paiements</h1>
      <div className="grid" style={{ gridTemplateColumns: "1.2fr .8fr", gap: 20, marginTop: 24, alignItems: "start" }}>
        <div className="card" style={{ background: "#fff" }}>
          <div style={{ padding: "20px 22px", borderBottom: "1px solid var(--ligne)" }}>
            <div className="num" style={{ fontSize: 42 }}>297 500 <span style={{ fontSize: 16, fontFamily: "var(--sans)" }}>FCFA restants</span></div>
            <div style={{ marginTop: 12 }}><Bar value={65} /></div>
            <div className="row between muted" style={{ fontSize: 12, marginTop: 6 }}><span>552 500 F payés</span><span>Total 850 000 F</span></div>
          </div>
          {ROWS.map(([t, m, d, b, s, op]) => (
            <div key={t} className="row gap12" style={{ padding: "16px 22px", borderBottom: "1px solid var(--ligne)" }}>
              <span style={{ width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: s === "Payée" ? "var(--noir)" : "transparent", color: "#fff", border: s === "Payée" ? "none" : "1px solid var(--ligne)" }}>
                {s === "Payée" ? <Icon name="check" size={13} stroke={2.6} /> : "3"}
              </span>
              <div style={{ flex: 1 }}>
                <div className="row between"><b>{t}</b><b className="tnum">{m}</b></div>
                <div className="row between" style={{ marginTop: 4 }}><span className="muted" style={{ fontSize: 12 }}>{d}{op ? ` · ${op}` : ""}</span><span className={`badge ${b}`}>{s}</span></div>
                {s === "Payée" ? <Link className="link" href="/admin/recu" style={{ fontSize: 12 }}>Reçu PDF</Link> : null}
              </div>
            </div>
          ))}
        </div>
        <div className="card p">
          <div className="eyebrow">Payer la tranche 3 en avance</div>
          <div className="col gap8" style={{ marginTop: 12 }}>
            {["MTN MoMo", "Moov Money", "Carte · FedaPay"].map((o) => (
              <button key={o} className="row gap12" onClick={() => setMethod(o)} style={{ padding: "10px 12px", border: `1px solid ${method === o ? "var(--noir)" : "var(--ligne)"}`, borderRadius: 12, textAlign: "left" }}>
                <span className={`radio ${method === o ? "on" : ""}`} />
                <span className="op-badge" style={{ height: 22, fontSize: 10 }}>{o}</span>
              </button>
            ))}
          </div>
          <button className="btn terra lg" style={{ width: "100%", marginTop: 16 }} onClick={() => { createPaymentIntent({ amount: 297500, method, reference: "T3-NADEGE" }); setPaid(true); }}>
            <Icon name="lock" size={15} /> {paid ? "Demande simulée" : "Payer 297 500 FCFA"}
          </button>
          <p className="muted" style={{ fontSize: 12, marginTop: 10 }}>Aucun débit. TODO : FedaPay / CinetPay.</p>
          <Link className="link" href="/eleve/echeancier">Version mobile</Link>
        </div>
      </div>
    </>
  );
}
