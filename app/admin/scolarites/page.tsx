"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Avatar, Bar, Person } from "@/components/ui";
import { fcfaN } from "@/lib/brand";
import { TUITION, img } from "@/lib/data";

const FILTERS = ["Tous (142)", "En retard (9)", "Échéance < 15 j (31)", "Soldés (18)"];

export default function ScolaritesPage() {
  const [filter, setFilter] = useState(0);
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState("Romaric Adjovi");
  const rows = useMemo(() => TUITION.filter((r) => {
    if (filter === 1) return r.tone === "b-rouge";
    if (filter === 2) return r.tone === "b-ocre";
    if (filter === 3) return r.status === "Soldé";
    return true;
  }), [filter]);
  const focus = TUITION.find((r) => r.name === selected) ?? TUITION[3];

  return (
    <>
      <div className="row between" style={{ alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow t">Année 2026–2027</div>
          <h1 className="h-page" style={{ marginTop: 10 }}>Scolarités <em>&amp;</em> recouvrement</h1>
        </div>
        <div className="row gap12" style={{ flexWrap: "wrap" }}>
          <Link className="btn ghost" href="/admin/parametres"><Icon name="settings" size={15} /> Plans de paiement</Link>
          <span className="btn ghost"><Icon name="download" size={15} /> Export comptable</span>
          <span className="btn"><Icon name="plus" size={15} /> Enregistrer un paiement</span>
        </div>
      </div>
      <div className="kpi-grid" style={{ marginTop: 28 }}>
        {[
          ["Exigible à date", "132,6", " M F", "sur 201,5 M F facturés pour l’année", false],
          ["Encaissé", "98,4", " M F", "1 128 paiements · 61 % Mobile Money", false],
          ["En retard", "1,24", " M F", "9 élèves · 4 relances programmées", true],
          ["Taux de recouvrement", "74,2", " %", "objectif 85 % au 31 déc.", false],
        ].map(([a, b, u, c, danger]) => (
          <div key={String(a)} className="card p" style={{ borderColor: danger ? "var(--rouge)" : undefined }}>
            <div className="eyebrow">{a}</div>
            <div className="num" style={{ fontSize: 42, marginTop: 6, color: danger ? "var(--rouge)" : undefined }}>{b}<span style={{ fontSize: 20 }}>{u}</span></div>
            <div className="muted" style={{ fontSize: 12 }}>{c}</div>
          </div>
        ))}
      </div>
      <div className="scol-grid" style={{ marginTop: 20 }}>
        <div className="card" style={{ background: "#fff" }}>
          <div className="row between" style={{ padding: "16px 20px", borderBottom: "1px solid var(--ligne)", gap: 12, flexWrap: "wrap" }}>
            <div className="row gap8" style={{ flexWrap: "wrap" }}>
              {FILTERS.map((x, i) => (
                <button key={x} className={`badge ${i === filter ? "b-noir" : "b-line"}`} style={{ height: 30, padding: "0 12px" }} onClick={() => setFilter(i)}>{x}</button>
              ))}
            </div>
            <div className="row gap8 muted" style={{ fontSize: 12 }}><Icon name="filter" size={14} /> Promotion : toutes</div>
          </div>
          <div className="table-wrap">
            <table className="t compact" style={{ fontSize: 12.5 }}>
              <thead><tr><th>Élève · plan</th><th>Payé / total</th><th>Prochaine échéance</th><th>Statut</th><th style={{ textAlign: "right" }}>Actions</th></tr></thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name} style={{ background: r.name === selected ? "var(--terra-pale)" : undefined }} onClick={() => setSelected(r.name)}>
                    <td>
                      <div className="row gap12">
                        <Person img={r.img} ini={r.ini} size={34} />
                        <div><b>{r.name}</b><div className="muted" style={{ fontSize: 11.5 }}>{r.promo} · {r.plan}</div></div>
                      </div>
                    </td>
                    <td style={{ width: 150 }}>
                      <div className="tnum" style={{ fontSize: 12 }}><b>{fcfaN(r.paid)}</b> <span className="muted">/ {fcfaN(r.total)}</span></div>
                      <div style={{ marginTop: 6 }}><Bar value={(r.paid / r.total) * 100} /></div>
                    </td>
                    <td className="tnum" style={{ fontSize: 12.5 }}>{r.next.split(" · ")[0]}<div className="muted" style={{ fontSize: 11.5 }}>{r.next.split(" · ")[1] ?? ""}</div></td>
                    <td><span className={`badge ${r.tone}`}><i className="dot" />{r.status}</span></td>
                    <td>
                      <div className="row gap8" style={{ justifyContent: "flex-end" }}>
                        <span style={iconBtn}><Icon name="mail" size={14} /></span>
                        <span style={iconBtn}><Icon name="wa" size={14} /></span>
                        <Link href="/admin/recu" style={iconBtn}><Icon name="receipt" size={14} /></Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row between muted" style={{ padding: "14px 20px", borderTop: "1px solid var(--ligne)", fontSize: 12, gap: 8, flexWrap: "wrap" }}>
            <span>{rows.length} lignes affichées · extrait de 142 élèves</span>
            <span>Rapprochement FedaPay / CinetPay · TODO synchro · dernière démo 15:02</span>
          </div>
        </div>
        <div className="col gap16">
          <div className="card" style={{ background: "#fff" }}>
            <div className="row gap12" style={{ padding: "18px 20px", borderBottom: "1px solid var(--ligne)" }}>
              <Person img={focus.img ?? img.romaric} ini={focus.ini} size={46} />
              <div>
                <div className="serif" style={{ fontSize: 20 }}>{focus.name}</div>
                <div className="muted" style={{ fontSize: 12 }}>{focus.promo} · {focus.plan}</div>
              </div>
            </div>
            <div style={{ padding: "16px 20px" }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Échéances</div>
              {[["5 sept. 2026", "Retard 31 j", "b-rouge"], ["5 oct. 2026", "Retard 1 j", "b-rouge"], ["5 nov. 2026", "À venir", "b-line"], ["5 déc. 2026", "À venir", "b-line"]].map(([d, s, b]) => (
                <div key={d} className="row between" style={{ padding: "8px 0", borderBottom: "1px solid var(--ligne)", fontSize: 12.5 }}>
                  <span className="tnum">{d}</span><span className="tnum">85 000 F</span><span className={`badge ${b}`}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{ background: "#fff" }}>
            <div className="row between" style={{ padding: "16px 20px", borderBottom: "1px solid var(--ligne)" }}>
              <b>Relance</b>
              <div className="row gap8"><span className="badge b-noir"><Icon name="wa" size={12} /> WhatsApp</span><span className="badge b-line"><Icon name="mail" size={12} /> E-mail</span></div>
            </div>
            <div style={{ padding: "16px 20px", background: "#FDE8F3" }}>
              <div style={{ background: "#fff", borderRadius: "14px 12px 12px 12px", padding: "12px 14px", fontSize: 12.5, lineHeight: 1.6 }}>
                Bonjour, nous vous rappelons que des échéances de <b>{focus.name}</b> ({focus.promo}) restent dues. Payez en un clic par MoMo / Moov : <span style={{ textDecoration: "underline" }}>pay.isdam.app/r/7Q2K</span>
                <br />— Service scolarité, ISDAM
                <div className="muted" style={{ fontSize: 10.5, textAlign: "right", marginTop: 4 }}>Modèle « Relance J+30 »</div>
              </div>
            </div>
            <div className="col gap8" style={{ padding: "14px 20px" }}>
              <button className="btn terra sm" style={{ width: "100%" }} onClick={() => setSent(true)}><Icon name="send" size={13} /> {sent ? "Relance simulée" : "Envoyer la relance"}</button>
              <Link className="btn ghost sm" href="/eleve/echeancier" style={{ width: "100%" }}>Proposer un échéancier</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const iconBtn: React.CSSProperties = { padding: 5, border: "1px solid var(--ligne)", borderRadius: "50%", display: "inline-flex" };
