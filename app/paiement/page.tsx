"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Icon, type IconName } from "@/components/icon";
import { PublicHeader } from "@/components/public-header";
import { Photo } from "@/components/ui";
import { createPaymentIntent } from "@/lib/brand";
import { FORMATIONS } from "@/lib/data";

const METHODS = [
  { id: "momo", title: "Mobile Money", sub: "Validation sur votre téléphone via code USSD / application", badges: ["MTN MoMo", "Moov Money", "Celtiis Cash"] },
  { id: "agg", title: "Agrégateur en ligne", sub: "Redirection vers la page de paiement sécurisée", badges: ["FedaPay", "CinetPay"] },
  { id: "card", title: "Carte bancaire", sub: "Visa, Mastercard, GIM-UEMOA — 3-D Secure", badges: ["Visa", "Mastercard", "GIM-UEMOA"] },
  { id: "wire", title: "Virement / dépôt en agence", sub: "Réception sous 48 h, justificatif à téléverser", badges: ["Virement"] },
];

function PaiementInner() {
  const params = useSearchParams();
  const code = params.get("filiere") ?? "STY";
  const nom = params.get("nom") ?? "Chimène Adandé";
  const formation = FORMATIONS.find((f) => f.code === code) ?? FORMATIONS[0];
  const [method, setMethod] = useState("momo");
  const [operator, setOperator] = useState("MTN MoMo");
  const [phone, setPhone] = useState("01 66 52 09 14");
  const [accepted, setAccepted] = useState(true);
  const [done, setDone] = useState(false);

  const label = method === "momo" ? operator : METHODS.find((m) => m.id === method)?.badges[0] ?? "paiement";

  function pay() {
    createPaymentIntent({ amount: 15000, method: label, reference: "ADM-2027-0187" });
    setDone(true);
  }

  return (
    <div>
      <PublicHeader active="Admissions" />
      <div className="pay-grid">
        <main style={{ padding: "48px 64px 64px" }}>
          <Link href="/admission" className="row gap8 muted" style={{ fontSize: 12 }}>
            <Icon name="arrowl" size={14} /> Retour au dossier <span>·</span> Étape 5 sur 5
          </Link>
          <h1 className="h-page" style={{ marginTop: 24 }}>Régler les frais de <em>dossier</em></h1>
          <p className="muted" style={{ marginTop: 10, maxWidth: 620, lineHeight: 1.7 }}>
            Paiement sécurisé via nos agrégateurs agréés. Votre candidature est transmise à la commission dès confirmation. Aucun débit réel dans cette démonstration.
          </p>
          <div className="row gap8" style={{ marginTop: 28, flexWrap: "wrap" }}>
            <span className="badge b-noir" style={{ height: 34, padding: "0 16px", fontSize: 12 }}>Frais de dossier · 15 000 F</span>
            <span className="badge b-line" style={{ height: 34, padding: "0 16px", fontSize: 12 }}>Acompte d’inscription · après acceptation</span>
          </div>
          <label className="lb" style={{ marginTop: 36 }}>Moyen de paiement</label>
          <div className="col gap12">
            {METHODS.map((m) => (
              <div key={m.id}>
                <button className="row gap16" onClick={() => setMethod(m.id)} style={{ width: "100%", textAlign: "left", padding: "18px 20px", border: `1px solid ${method === m.id ? "var(--noir)" : "var(--ligne)"}`, borderRadius: 14, background: "#fff", boxShadow: method === m.id ? "0 0 0 3px rgba(224,33,138,.15)" : undefined }}>
                  <span className={`radio ${method === m.id ? "on" : ""}`} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700 }}>{m.title}</div>
                    <div className="muted" style={{ fontSize: 12 }}>{m.sub}</div>
                  </div>
                  <div className="row gap8" style={{ flexWrap: "wrap", justifyContent: "flex-end" }}>
                    {m.badges.map((b) => <span key={b} className="op-badge">{b}</span>)}
                  </div>
                </button>
                {method === "momo" && m.id === "momo" ? (
                  <div className="grid" style={{ margin: "8px 0 8px 54px", padding: 20, borderLeft: "3px solid var(--terra)", background: "#fff", gap: 16 }}>
                    <div className="grid" style={{ gridTemplateColumns: "200px 1fr", gap: 16 }}>
                      <div>
                        <label className="lb">Opérateur</label>
                        <select className="input" value={operator} onChange={(e) => setOperator(e.target.value)}>
                          <option>MTN MoMo</option>
                          <option>Moov Money</option>
                          <option>Celtiis Cash</option>
                        </select>
                      </div>
                      <div>
                        <label className="lb">Numéro Mobile Money</label>
                        <div className="input focus"><span className="muted" style={{ marginRight: 10 }}>+229</span>
                          <input value={phone} onChange={(e) => setPhone(e.target.value)} style={{ border: 0, outline: "none", flex: 1, font: "inherit" }} />
                        </div>
                      </div>
                    </div>
                    <div className="row gap8 muted" style={{ fontSize: 12 }}>
                      <Icon name="phone" size={14} /> Une demande de confirmation va s’afficher sur ce numéro. Ne communiquez jamais votre code secret.
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <button className="row gap8" style={{ marginTop: 22, textAlign: "left" }} onClick={() => setAccepted((v) => !v)}>
            <span className={`check ${accepted ? "on" : ""}`}>{accepted ? <Icon name="check" size={12} stroke={3} /> : null}</span>
            <span style={{ fontSize: 13 }}>J’accepte les conditions générales et la politique de remboursement (frais de dossier non remboursables).</span>
          </button>
          <p className="ex-note" style={{ marginTop: 28 }}>Noms d’opérateurs affichés en texte — logos officiels à intégrer selon chartes partenaires. TODO : appel FedaPay / CinetPay / Stripe.</p>
          {done ? (
            <div className="card p" style={{ marginTop: 24, background: "var(--olive-pale)", borderColor: "transparent" }}>
              <div className="row gap8" style={{ color: "var(--olive)", fontWeight: 800 }}><Icon name="check" size={16} /> Demande envoyée · réf. ADM-2027-0187</div>
              <p style={{ marginTop: 8, fontSize: 13.5 }}>
                Confirmez les 15 000 FCFA sur {label} ({phone}). Le reçu sera disponible dans l’espace scolarité après branchement du paiement. Cette démo n’effectue aucun débit.
              </p>
              <Link className="btn sm" style={{ marginTop: 14 }} href="/admin/recu">Voir un reçu d’exemple</Link>
            </div>
          ) : null}
        </main>
        <aside style={{ borderLeft: "1px solid var(--noir)", background: "var(--papier)", padding: "48px 40px" }}>
          <div className="eyebrow">Récapitulatif</div>
          <div className="row gap16" style={{ marginTop: 20, paddingBottom: 20, borderBottom: "1px solid var(--ligne)" }}>
            <Photo src={formation.img} w={84} h={104} pos="center 30%" radius={14} />
            <div>
              <div className="serif" style={{ fontSize: 20, lineHeight: 1.2 }}>{formation.nom}</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>Session janvier 2027 · {formation.duree}</div>
              <div className="muted" style={{ fontSize: 12 }}>Candidate : {nom}</div>
            </div>
          </div>
          {[
            ["Frais de dossier", "15 000 FCFA"],
            ["Frais de service agrégateur", "0 FCFA"],
            ["Réf. dossier", "ADM-2027-0187"],
          ].map(([a, b]) => (
            <div key={a} className="row between" style={{ padding: "12px 0", borderBottom: "1px solid var(--ligne)", fontSize: 13.5 }}>
              <span className="muted">{a}</span><b className="tnum">{b}</b>
            </div>
          ))}
          <div className="row between" style={{ padding: "22px 0", borderBottom: "1px solid var(--ligne)", alignItems: "flex-end" }}>
            <span className="eyebrow">Total à payer</span>
            <span className="num" style={{ fontSize: 44 }}>15 000 <span style={{ fontSize: 15, fontFamily: "var(--sans)" }}>FCFA</span></span>
          </div>
          <button className="btn terra lg" style={{ width: "100%", marginTop: 24 }} disabled={!accepted || done} onClick={pay}>
            <Icon name="lock" size={16} /> Payer 15 000 FCFA avec {label}
          </button>
          <div className="col gap12" style={{ marginTop: 28 }}>
            {([
              ["shield", "Paiement chiffré, aucune donnée bancaire stockée par l’école"],
              ["receipt", "Reçu numérique envoyé par e-mail et WhatsApp"],
              ["chat", "Une question ? +229 01 97 45 12 30"],
            ] as [IconName, string][]).map(([i, t]) => (
              <div key={t} className="row gap12 muted" style={{ fontSize: 12.5 }}><Icon name={i} size={16} /><span>{t}</span></div>
            ))}
          </div>
          <div className="card" style={{ marginTop: 32, padding: 18, background: "#fff" }}>
            <div className="eyebrow">Après acceptation</div>
            <p className="muted" style={{ fontSize: 12.5, marginTop: 6, lineHeight: 1.6 }}>
              Acompte d’inscription : <b style={{ color: "var(--noir)" }}>255 000 FCFA</b> (30 % de l’année 1), puis 2 tranches — ou 10 mensualités.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function PaiementPage() {
  return (
    <Suspense fallback={<div className="content">Préparation du paiement…</div>}>
      <PaiementInner />
    </Suspense>
  );
}
