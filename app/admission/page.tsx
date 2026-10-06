"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Icon } from "@/components/icon";
import { PublicHeader } from "@/components/public-header";
import { Photo } from "@/components/ui";
import { FORMATIONS, img } from "@/lib/data";

const STEPS = [
  { title: "Identité", hint: "Chimène Adandé" },
  { title: "Formation", hint: "Stylisme & Création de mode" },
  { title: "Pièces justificatives", hint: "En cours — 3/5 pièces" },
  { title: "Motivation", hint: "Lettre + 3 visuels" },
  { title: "Paiement", hint: "15 000 FCFA" },
];

function AdmissionInner() {
  const params = useSearchParams();
  const preset = params.get("filiere");
  const [step, setStep] = useState(2);
  const [filiere, setFiliere] = useState(preset ?? "STY");
  const [name, setName] = useState("Chimène Adandé");
  const [phone, setPhone] = useState("+229 01 66 52 09 14");
  const [city, setCity] = useState("Porto-Novo");
  const [letter, setLetter] = useState("Depuis l’atelier de couture de ma tante à Porto-Novo, je dessine les tenues que je verrais bien portées dans les rues de Cotonou. Je souhaite apprendre le patronage pour donner une structure à mes idées et créer une ligne de prêt-à-porter qui associe le wax et les coupes contemporaines…");
  const [saved, setSaved] = useState("Dernière sauvegarde le 5 oct. à 14:58");
  const chosen = useMemo(() => FORMATIONS.find((f) => f.code === filiere) ?? FORMATIONS[0], [filiere]);

  function saveLater() {
    const now = new Date();
    setSaved(`Dernière sauvegarde à ${now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })} — brouillon local`);
  }

  return (
    <div>
      <PublicHeader active="Admissions" />
      <div className="adm-grid">
        <aside style={{ borderRight: "1px solid var(--ligne)", padding: "48px 40px", background: "var(--papier)" }}>
          <div className="eyebrow t">Dossier de candidature</div>
          <h1 className="serif" style={{ fontSize: 44, lineHeight: 1, marginTop: 12 }}>
            Session<br /><em className="serif-i">janvier 2027</em>
          </h1>
          <div className="col" style={{ marginTop: 40 }}>
            {STEPS.map((s, i) => (
              <button key={s.title} onClick={() => setStep(i)} className="row gap16" style={{ padding: "16px 0", borderTop: "1px solid var(--ligne)", textAlign: "left", width: "100%" }}>
                <span style={{ width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, background: i < step ? "var(--noir)" : i === step ? "var(--terra)" : "transparent", color: i <= step ? "#fff" : "var(--taupe)", border: i > step ? "1px solid var(--ligne-fonce)" : "none" }}>
                  {i < step ? <Icon name="check" size={14} stroke={2.4} /> : i + 1}
                </span>
                <div>
                  <div style={{ fontWeight: 700, color: i > step ? "var(--taupe)" : "var(--noir)" }}>{s.title}</div>
                  <div className="muted" style={{ fontSize: 12 }}>{i === 1 ? chosen.nom : s.hint}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="card p" style={{ marginTop: 28 }}>
            <div className="row gap8"><Icon name="lock" size={16} /><b style={{ fontSize: 13 }}>Brouillon enregistré automatiquement</b></div>
            <p className="muted" style={{ fontSize: 12, marginTop: 6 }}>{saved} — reprenez depuis n’importe quel appareil via le lien reçu par SMS.</p>
          </div>
          <Photo src={img.croquisMur} h={220} style={{ marginTop: 28 }} />
        </aside>
        <main style={{ padding: "48px 64px 64px" }}>
          <div className="row between">
            <span className="eyebrow">Étape {step + 1} sur 5</span>
            <span className="muted" style={{ fontSize: 12 }}>Temps estimé restant : {Math.max(2, 12 - step * 2)} min</span>
          </div>
          <div className="bar t" style={{ marginTop: 12 }}><i style={{ width: `${((step + 1) / 5) * 100}%` }} /></div>

          {step === 0 && (
            <>
              <h2 className="h-page" style={{ marginTop: 36 }}>Votre <em>identité</em></h2>
              <p className="muted" style={{ marginTop: 10, maxWidth: 640 }}>Ces informations figurent sur le dossier transmis à la commission. Session janvier 2027.</p>
              <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 28 }}>
                <Field label="Nom complet" value={name} onChange={setName} />
                <Field label="Téléphone (WhatsApp)" value={phone} onChange={setPhone} />
                <Field label="Ville" value={city} onChange={setCity} />
                <Field label="Date de naissance" value="12 mars 2007" onChange={() => undefined} />
                <Field label="E-mail" value="chimene.adande@email.bj" onChange={() => undefined} />
                <div>
                  <label className="lb">Niveau d’études</label>
                  <div className="input row between">Baccalauréat ou équivalent <Icon name="arrow" size={14} /></div>
                </div>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h2 className="h-page" style={{ marginTop: 36 }}>Choisir une <em>formation</em></h2>
              <p className="muted" style={{ marginTop: 10 }}>Une seule filière par dossier. Vous pourrez être réorienté·e après entretien.</p>
              <div className="col" style={{ marginTop: 24, gap: 12 }}>
                {FORMATIONS.map((f) => (
                  <button key={f.code} onClick={() => setFiliere(f.code)} className="row gap16" style={{ padding: 16, border: `1px solid ${filiere === f.code ? "var(--noir)" : "var(--ligne)"}`, borderRadius: 14, background: "#fff", textAlign: "left", boxShadow: filiere === f.code ? "0 0 0 3px rgba(224,33,138,.15)" : undefined }}>
                    <span className={`radio ${filiere === f.code ? "on" : ""}`} />
                    <Photo src={f.img} w={72} h={72} pos={f.pos} radius={12} />
                    <div style={{ flex: 1 }}>
                      <div className="eyebrow">{f.code} · {f.duree}</div>
                      <b>{f.nom}</b>
                      <div className="muted" style={{ fontSize: 12 }}>{f.rythme} · rentrée {f.rentree}</div>
                    </div>
                    <b className="tnum">{fcfaShort(f.tarif)}</b>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 2 && <Pieces />}

          {step === 3 && (
            <>
              <h2 className="h-page" style={{ marginTop: 36 }}>Lettre de <em>motivation</em></h2>
              <p className="muted" style={{ marginTop: 10, maxWidth: 640 }}>Racontez votre regard. Pas de niveau requis : nous évaluons la curiosité.</p>
              <label className="lb" style={{ marginTop: 28 }}>Lettre</label>
              <textarea className="input area" style={{ minHeight: 220 }} value={letter} onChange={(e) => setLetter(e.target.value)} maxLength={3000} />
              <div className="row between muted" style={{ fontSize: 12, marginTop: 8 }}>
                <span>ou importer un PDF · ou enregistrer un message vocal (2 min)</span>
                <span className="tnum">{letter.length} / 3 000 caractères</span>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="h-page" style={{ marginTop: 36 }}>Prêt pour le <em>paiement</em></h2>
              <p className="muted" style={{ marginTop: 10, maxWidth: 640 }}>
                {name}, {city} — {chosen.nom}. Les frais de dossier de 15 000 FCFA transmettent le dossier à la commission.
              </p>
              <Link className="btn terra lg" style={{ marginTop: 28 }} href={`/paiement?filiere=${chosen.code}&nom=${encodeURIComponent(name)}`}>
                <Icon name="lock" size={16} /> Régler 15 000 FCFA
              </Link>
            </>
          )}

          <div className="row between" style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--ligne)", gap: 12, flexWrap: "wrap" }}>
            <button className="btn ghost" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>
              <Icon name="arrowl" size={14} /> Étape précédente
            </button>
            <div className="row gap12" style={{ flexWrap: "wrap" }}>
              <button className="btn light" style={{ borderColor: "var(--ligne-fonce)" }} onClick={saveLater}>Enregistrer et continuer plus tard</button>
              {step < 4 ? (
                <button className="btn terra" onClick={() => setStep((s) => Math.min(4, s + 1))}>
                  {step === 2 ? "Continuer vers la motivation" : "Continuer"} <Icon name="arrow" size={14} />
                </button>
              ) : null}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="lb">{label}</label>
      <input className="input" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function fcfaShort(n: number) {
  return `${n.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ")} F`;
}

function Pieces() {
  const files = [
    ["acte-naissance-adande.pdf", "Acte de naissance · 412 Ko", "ok"],
    ["cni-chimene-adande.jpg", "Pièce d’identité (CNI / CIP) · 1,8 Mo", "ok"],
    ["releve-bac-2026.pdf", "Diplôme ou relevé du dernier diplôme · 2,4 Mo", "up"],
  ] as const;
  return (
    <>
      <h2 className="h-page" style={{ marginTop: 36 }}>Pièces <em>justificatives</em></h2>
      <p className="muted" style={{ marginTop: 10, maxWidth: 640, lineHeight: 1.7 }}>
        Formats acceptés : PDF, JPG, PNG — 10 Mo max par pièce. Les documents seront stockés de façon chiffrée (branchement Supabase Storage à venir) et accessibles uniquement par la commission d’admission.
      </p>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 36, marginTop: 36 }}>
        <div className="col gap12">
          <label className="lb">Documents obligatoires</label>
          {files.map(([n, meta, st]) => (
            <div key={n} className="row gap16" style={{ padding: "14px 16px", border: "1px solid var(--ligne)", background: "#fff", borderRadius: 14 }}>
              <span style={{ width: 38, height: 46, border: "1px solid var(--ligne-fonce)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800 }}>{n.split(".").pop()?.toUpperCase()}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{n}</div>
                <div className="muted" style={{ fontSize: 12 }}>{meta}</div>
                {st === "up" ? <div className="bar t" style={{ marginTop: 8 }}><i style={{ width: "64%" }} /></div> : null}
              </div>
              {st === "ok" ? <span className="badge b-olive"><Icon name="check" size={12} stroke={2.4} /> Vérifié</span> : <span className="muted tnum" style={{ fontSize: 12 }}>64 %</span>}
            </div>
          ))}
          <div style={{ border: "1px dashed var(--noir)", borderRadius: 14, padding: 26, textAlign: "center", background: "var(--papier)" }}>
            <Icon name="upload" size={26} />
            <div style={{ fontWeight: 700, marginTop: 8 }}>Photo d’identité récente</div>
            <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>Glissez-déposez ou parcourez · fond clair</div>
          </div>
          <div className="muted" style={{ border: "1px dashed var(--ligne-fonce)", borderRadius: 14, padding: 18, textAlign: "center" }}>
            Certificat médical (facultatif à ce stade)
          </div>
        </div>
        <div className="col gap12">
          <label className="lb">Dossier artistique · 3 à 8 visuels</label>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {[img.croquis1, img.croquis3, img.croquis2].map((s, i) => (
              <div key={s} style={{ position: "relative" }}>
                <Photo src={s} h={150} radius={14} />
                <span className="badge" style={{ position: "absolute", left: 6, bottom: 6, background: "var(--ivoire)" }}>0{i + 1}</span>
              </div>
            ))}
            <div className="muted" style={{ height: 150, border: "1px dashed var(--ligne-fonce)", borderRadius: 14, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <Icon name="plus" size={20} />
              <span style={{ fontSize: 12 }}>Ajouter</span>
            </div>
          </div>
          <p className="muted" style={{ fontSize: 12 }}>Croquis, photos de pièces réalisées ou planches d’inspiration.</p>
        </div>
      </div>
    </>
  );
}

export default function AdmissionPage() {
  return (
    <Suspense fallback={<div className="content">Chargement du dossier…</div>}>
      <AdmissionInner />
    </Suspense>
  );
}
