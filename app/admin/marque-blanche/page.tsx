"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { Photo } from "@/components/ui";
import { BRAND } from "@/lib/brand";
import { img } from "@/lib/data";

const PRESETS = [
  { name: "Fuchsia Mode", ink: "#1A1230", accent: "#E0218A", surface: "#FAFAFE" },
  { name: "Indigo Ganvié", ink: "#14213D", accent: "#4B3BF5", surface: "#F5F3FF" },
  { name: "Or d’Abomey", ink: "#1A1230", accent: "#D97706", surface: "#FFFBEB" },
  { name: "Vert Pendjari", ink: "#14231B", accent: "#16A34A", surface: "#F0FDF4" },
];

const TABS = ["Identité & thème", "Domaine & e-mails", "Documents", "Modules"];

export default function MarqueBlanchePage() {
  const [tab, setTab] = useState(0);
  const [preset, setPreset] = useState(0);
  const [name, setName] = useState<string>(BRAND.name);
  const [tagline, setTagline] = useState<string>(BRAND.tagline);
  const [domain, setDomain] = useState<string>(BRAND.domain);
  const [published, setPublished] = useState(false);
  const theme = PRESETS[preset];

  return (
    <>
      <div className="row between" style={{ alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow t">Plateforme · Personnalisation</div>
          <h1 className="h-page" style={{ marginTop: 10 }}>Marque <em>blanche</em></h1>
          <p className="muted" style={{ marginTop: 8, maxWidth: 640 }}>
            Chaque école déploie la plateforme sous son propre nom, son logo, ses couleurs et son domaine. Les changements s’appliquent à la vitrine, aux espaces, aux e-mails, reçus et certificats.
          </p>
        </div>
        <div className="row gap12">
          <button className="btn ghost" onClick={() => { setName(BRAND.name); setTagline(BRAND.tagline); setPreset(0); setPublished(false); }}>Annuler</button>
          <button className="btn terra" onClick={() => setPublished(true)}><Icon name="check" size={15} /> {published ? "Publié (démo)" : "Publier les changements"}</button>
        </div>
      </div>
      <div className="row gap8" style={{ marginTop: 24, borderBottom: "1px solid var(--ligne)", overflowX: "auto" }}>
        {TABS.map((t, i) => (
          <button key={t} onClick={() => setTab(i)} style={{ padding: "12px 18px", fontWeight: 700, fontSize: 13, borderBottom: i === tab ? "2px solid var(--terra)" : "2px solid transparent", marginBottom: -1, color: i === tab ? "var(--noir)" : "var(--taupe)" }}>{t}</button>
        ))}
      </div>
      <div className="wl-grid" style={{ marginTop: 28 }}>
        <div className="col gap20">
          {tab === 0 && (
            <>
              <div className="card p">
                <div className="eyebrow" style={{ marginBottom: 16 }}>Identité de l’école</div>
                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div><label className="lb">Nom affiché</label><input className="input focus" value={name} onChange={(e) => setName(e.target.value)} /></div>
                  <div><label className="lb">Signature</label><input className="input" value={tagline} onChange={(e) => setTagline(e.target.value)} /></div>
                </div>
                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 18 }}>
                  <LogoSlot label="Logo (SVG / PNG)" dark={false} mono={name.slice(0, 2)} />
                  <LogoSlot label="Logo version claire" dark mono={name.slice(0, 2)} />
                  <div>
                    <label className="lb">Favicon / icône app</label>
                    <div style={{ height: 110, border: "1px solid var(--ligne)", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: 14, borderRadius: 14 }}>
                      <span className="serif" style={{ width: 44, height: 44, borderRadius: 10, background: theme.ink, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>{name.slice(0, 2)}</span>
                      <span style={{ width: 24, height: 24, borderRadius: 5, background: theme.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800 }}>{name.slice(0, 1)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p">
                <div className="eyebrow" style={{ marginBottom: 16 }}>Thème</div>
                <div className="grid" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
                  {PRESETS.map((p, i) => (
                    <button key={p.name} onClick={() => setPreset(i)} style={{ border: `1px solid ${i === preset ? "var(--noir)" : "var(--ligne)"}`, padding: 10, background: "#fff", textAlign: "left", borderRadius: 12, boxShadow: i === preset ? "0 0 0 3px rgba(224,33,138,.18)" : undefined }}>
                      <div className="row" style={{ height: 46 }}><i style={{ flex: 1, height: "100%", background: p.ink }} /><i style={{ flex: 1, height: "100%", background: p.accent }} /><i style={{ flex: 1, height: "100%", background: p.surface, border: "1px solid var(--ligne)" }} /></div>
                      <div className="row between" style={{ marginTop: 8, fontSize: 12 }}><b>{p.name}</b><span className={`radio ${i === preset ? "on" : ""}`} /></div>
                    </button>
                  ))}
                </div>
                <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 18 }}>
                  {[["Encre (ink)", theme.ink], ["Accent", theme.accent], ["Surface", theme.surface]].map(([l, h]) => (
                    <div key={l}><label className="lb">{l}</label><div className="input row gap12"><i style={{ width: 22, height: 22, borderRadius: 14, background: h, border: "1px solid var(--ligne)" }} /><span className="tnum">{h}</span></div></div>
                  ))}
                </div>
                <div className="row gap8" style={{ marginTop: 14, fontSize: 12.5, padding: "10px 12px", background: "var(--olive-pale)", color: "var(--olive)", borderRadius: 14 }}>
                  <Icon name="check" size={14} stroke={2.4} /> Contraste accent / blanc vérifié pour les boutons — aperçu local uniquement.
                </div>
                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 18 }}>
                  <div><label className="lb">Police titres</label><div className="input row between"><span className="serif" style={{ fontSize: 16, color: theme.accent }}>Lexend</span><Icon name="arrow" size={14} /></div></div>
                  <div><label className="lb">Police interface</label><div className="input row between">Manrope <Icon name="arrow" size={14} /></div></div>
                </div>
              </div>
            </>
          )}
          {tab === 1 && (
            <div className="card p">
              <div className="eyebrow" style={{ marginBottom: 16 }}>Domaine personnalisé</div>
              <div className="grid" style={{ gridTemplateColumns: "1.3fr 1fr", gap: 16 }}>
                <div>
                  <label className="lb">Domaine</label>
                  <div className="input row between"><input value={domain} onChange={(e) => setDomain(e.target.value)} style={{ border: 0, outline: "none", flex: 1, font: "inherit" }} /><span className="badge b-olive"><Icon name="check" size={11} stroke={2.6} /> Vérifié · SSL actif</span></div>
                </div>
                <div><label className="lb">Sous-domaine de secours</label><div className="input muted">{name.toLowerCase().replace(/\s+/g, "-")}.ecole-mode.app</div></div>
              </div>
              <div style={{ marginTop: 14, fontSize: 12, background: "var(--noir)", color: "#F9C2DD", padding: "14px 16px", borderRadius: 14, fontFamily: "ui-monospace, monospace", lineHeight: 1.8 }}>
                CNAME&nbsp;&nbsp;app&nbsp;&nbsp;&nbsp;→ cname.ecole-mode.app<br />TXT&nbsp;&nbsp;&nbsp;&nbsp;_verif → isd-tenant=7f3c21
              </div>
              <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                <div><label className="lb">Expéditeur e-mails</label><div className="input">scolarite@{domain}</div></div>
                <div><label className="lb">WhatsApp Business</label><div className="input">{BRAND.tel}</div></div>
              </div>
              <p className="muted" style={{ marginTop: 14, fontSize: 12 }}>TODO : enregistrement DNS et envoi transactionnel (Resend) par tenant.</p>
            </div>
          )}
          {tab === 2 && (
            <div className="card p">
              <div className="eyebrow" style={{ marginBottom: 12 }}>Documents</div>
              <p>Reçus, bulletins et certificats reprennent le nom <b>{name}</b>, la signature et le cachet. Les modèles sont en français, montants en FCFA.</p>
              <div className="row gap8" style={{ marginTop: 16 }}>
                <span className="badge b-line">Reçu</span><span className="badge b-line">Bulletin</span><span className="badge b-line">Certificat</span><span className="badge b-line">Relance WhatsApp</span>
              </div>
            </div>
          )}
          {tab === 3 && (
            <div className="card p">
              <div className="eyebrow" style={{ marginBottom: 12 }}>Modules</div>
              {[["Admissions en ligne", true], ["Paiement Mobile Money", true], ["Books publics", true], ["Appel hors ligne", true], ["Double authentification direction", false]].map(([label, on]) => (
                <div key={String(label)} className="row between" style={{ padding: "12px 0", borderBottom: "1px solid var(--ligne)" }}>
                  <b>{label}</b><span className={`badge ${on ? "b-olive" : "b-line"}`}>{on ? "Actif" : "Bientôt"}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col gap16" style={{ position: "sticky", top: 84 }}>
          <div className="row between"><span className="eyebrow">Aperçu en direct</span><span className="badge b-noir">Vitrine</span></div>
          <div className="card" style={{ overflow: "hidden", background: theme.surface }}>
            <div className="row between muted" style={{ padding: "10px 14px", background: "#FDE8F3", fontSize: 11 }}>
              <span className="row gap8"><i style={dot} /><i style={dot} /><i style={dot} /></span>
              <span className="row gap4"><Icon name="lock" size={11} /> {domain}</span>
              <span />
            </div>
            <div className="row between" style={{ padding: "14px 20px", borderBottom: "1px solid var(--ligne)" }}>
              <div className="row gap8">
                <span className="mono" style={{ width: 28, height: 28, fontSize: 11, background: theme.accent }}>{name.slice(0, 2)}</span>
                <span className="wordmark" style={{ fontSize: 14 }}>{name}</span>
              </div>
              <span className="btn sm" style={{ height: 26, fontSize: 10.5, background: theme.accent, borderColor: theme.accent }}>Candidater</span>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div style={{ padding: "22px 20px" }}>
                <span className="eyebrow" style={{ fontSize: 8.5, color: theme.accent }}>Admissions ouvertes</span>
                <div className="serif" style={{ fontSize: 32, lineHeight: 0.95, marginTop: 10, color: theme.accent }}>L’art de couper, coudre, créer.</div>
              </div>
              <Photo src={img.runway} h={220} pos="center 30%" radius={0} />
            </div>
          </div>
          <div className="card" style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "150px 1fr", minHeight: 180 }}>
            <div className="col gap8" style={{ background: "#fff", padding: "14px 12px", fontSize: 10.5, borderRight: "1px solid var(--ligne)" }}>
              <div className="row gap8"><span className="mono" style={{ width: 22, height: 22, fontSize: 9, background: theme.accent }}>{name.slice(0, 2)}</span><b style={{ fontSize: 11 }}>{name}</b></div>
              <div style={{ marginTop: 8, padding: "6px 8px", background: "rgba(224,33,138,.12)", borderRadius: 8, color: theme.accent, fontWeight: 700 }}>Tableau de bord</div>
              <div style={{ padding: "6px 8px", color: "var(--taupe)" }}>Candidatures</div>
              <div style={{ padding: "6px 8px", color: "var(--taupe)" }}>Scolarités</div>
            </div>
            <div style={{ padding: 16, background: theme.surface }}>
              <div className="serif" style={{ fontSize: 20 }}>Bonjour, <em style={{ color: theme.accent }}>Victoire</em>.</div>
              <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
                {[["88,8 %", "Inscrits"], ["74,2 %", "Recouvrement"]].map(([a, b]) => (
                  <div key={b} className="card" style={{ padding: 10 }}><div className="num" style={{ fontSize: 22 }}>{a}</div><div className="muted" style={{ fontSize: 10 }}>{b}</div></div>
                ))}
              </div>
              <div className="bar" style={{ marginTop: 12 }}><i style={{ width: "74%", background: theme.accent }} /></div>
            </div>
          </div>
          <div className="card p">
            <div className="row gap12">
              <span className="serif" style={{ width: 38, height: 38, borderRadius: "50%", background: "#2F4A6B", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>Mg</span>
              <div style={{ flex: 1 }}>
                <b style={{ fontSize: 13 }}>Exemple d’un autre tenant</b>
                <div className="muted" style={{ fontSize: 12 }}>« Maison Ganvié — École de couture » · thème Indigo Ganvié</div>
              </div>
              <button className="link" onClick={() => setPreset(1)}>Prévisualiser</button>
            </div>
          </div>
          <p className="ex-note">Isolation multi-tenant : TODO Supabase RLS — chaque école, ses données, fichiers et paramètres.</p>
          {published ? <p className="badge b-olive" style={{ height: "auto", padding: "8px 12px" }}>Aperçu publié localement sous le nom {name}. Aucun tenant distant n’est modifié.</p> : null}
        </div>
      </div>
    </>
  );
}

function LogoSlot({ label, dark, mono }: { label: string; dark?: boolean; mono: string }) {
  return (
    <div>
      <label className="lb">{label}</label>
      <div style={{ height: 110, border: dark ? "none" : "1px dashed var(--noir)", background: dark ? "var(--noir)" : "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, borderRadius: 14, color: dark ? "#fff" : "inherit" }}>
        <span className="mono" style={{ width: 48, height: 48, fontSize: 16 }}>{mono}</span>
        {!dark ? <div className="muted" style={{ fontSize: 11 }}>logo.svg<br /><span className="link" style={{ color: "var(--noir)" }}>Remplacer</span></div> : null}
      </div>
    </div>
  );
}

const dot: React.CSSProperties = { width: 9, height: 9, borderRadius: "50%", background: "#c9bba6" };
