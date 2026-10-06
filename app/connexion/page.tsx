"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon, type IconName } from "@/components/icon";
import { Logo, Photo } from "@/components/ui";
import { img, type Role } from "@/lib/data";

const ROLES: { id: Role; icon: IconName; label: string; email: string; href: string }[] = [
  { id: "admin", icon: "shield", label: "Direction / Admin", email: "direction@isdam.app", href: "/admin" },
  { id: "formateur", icon: "pen", label: "Formateur", email: "ornella.sossa@isdam.app", href: "/formateur" },
  { id: "eleve", icon: "user", label: "Élève", email: "nadege.akpovi@isdam.app", href: "/eleve" },
];

export default function ConnexionPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("formateur");
  const [email, setEmail] = useState(ROLES[1].email);
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  function select(next: (typeof ROLES)[number]) {
    setRole(next.id);
    setEmail(next.email);
    setError("");
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const match = ROLES.find((r) => r.email === email.trim().toLowerCase()) ?? ROLES.find((r) => r.id === role);
    if (!match) {
      setError("Compte de démonstration introuvable.");
      return;
    }
    router.push(match.href);
  }

  return (
    <div className="login-grid">
      <div style={{ position: "relative", minHeight: 420 }}>
        <Photo src={img.atelierPiquage} h="100%" radius={0} style={{ position: "absolute", inset: 0, height: "100%", borderRadius: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(26,18,48,.35),rgba(26,18,48,.1) 40%,rgba(26,18,48,.75))" }} />
        <div style={{ position: "absolute", top: 40, left: 48 }}><Logo light size={44} /></div>
        <div style={{ position: "absolute", left: 48, right: 48, bottom: 48, color: "#fff" }}>
          <div className="eyebrow" style={{ color: "#F9C2DD" }}>Espace numérique de l’académie</div>
          <p className="serif" style={{ fontSize: 44, lineHeight: 1.05, marginTop: 12 }}>
            « Le geste juste s’apprend <em className="serif-i">point par point</em>. »
          </p>
          <div style={{ marginTop: 14, fontSize: 13, color: "#F9C2DD" }}>Atelier piquage — Cotonou · photo d’exemple</div>
        </div>
      </div>
      <div style={{ padding: "64px 72px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="eyebrow t">Connexion</div>
        <h1 className="h-page" style={{ marginTop: 12 }}>Bon retour à <em>l’atelier</em>.</h1>
        <label className="lb" style={{ marginTop: 36 }}>Je me connecte en tant que</label>
        <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
          {ROLES.map((r) => (
            <button key={r.id} onClick={() => select(r)} style={{ padding: "16px 12px", border: `1px solid ${role === r.id ? "var(--noir)" : "var(--ligne)"}`, background: role === r.id ? "var(--noir)" : "var(--papier)", color: role === r.id ? "#fff" : "var(--noir)", borderRadius: 14, display: "flex", flexDirection: "column", gap: 10, textAlign: "left" }}>
              <Icon name={r.icon} size={20} />
              <b style={{ fontSize: 13 }}>{r.label}</b>
            </button>
          ))}
        </div>
        <form className="col gap16" style={{ marginTop: 28 }} onSubmit={submit}>
          <div>
            <label className="lb">E-mail ou téléphone</label>
            <input className="input focus" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" />
          </div>
          <div>
            <label className="lb">Mot de passe</label>
            <div className="input row between">
              <input type={show ? "text" : "password"} defaultValue="demo-isdam" style={{ border: 0, outline: "none", flex: 1, font: "inherit", letterSpacing: show ? 0 : ".2em" }} autoComplete="current-password" />
              <button type="button" className="muted" onClick={() => setShow((v) => !v)} aria-label="Afficher le mot de passe"><Icon name="eye" size={16} /></button>
            </div>
          </div>
          <div className="row between" style={{ fontSize: 13 }}>
            <button type="button" className="row gap8" onClick={() => setRemember((v) => !v)}>
              <span className={`check ${remember ? "on" : ""}`}>{remember ? <Icon name="check" size={12} stroke={3} /> : null}</span>
              Rester connecté(e)
            </button>
            <span className="link">Mot de passe oublié ?</span>
          </div>
          {error ? <p style={{ color: "var(--rouge)", fontSize: 13 }}>{error}</p> : null}
          <button className="btn lg" style={{ width: "100%" }} type="submit">Se connecter <Icon name="arrow" size={16} /></button>
          <p className="muted" style={{ fontSize: 12 }}>Démo : mot de passe libre. Les trois comptes ci-dessus ouvrent l’espace correspondant. Aucun fournisseur d’auth n’est branché.</p>
          <div className="row gap12 muted" style={{ fontSize: 12 }}>
            <span className="rule-l" style={{ flex: 1 }} />ou<span className="rule-l" style={{ flex: 1 }} />
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <button type="button" className="btn ghost" onClick={() => router.push(ROLES.find((r) => r.id === role)!.href)}><Icon name="phone" size={16} /> Code par SMS</button>
            <button type="button" className="btn ghost" onClick={() => router.push(ROLES.find((r) => r.id === role)!.href)}><Icon name="mail" size={16} /> Lien magique</button>
          </div>
        </form>
        <div className="card" style={{ marginTop: 32, padding: "16px 18px", display: "flex", gap: 12 }}>
          <Icon name="shield" size={18} />
          <p className="muted" style={{ fontSize: 12.5, lineHeight: 1.6 }}>
            Accès selon votre rôle : la direction voit l’ensemble de l’école, les formateurs leurs promotions, les élèves leur parcours. TODO : authentification réelle et double facteur direction.
          </p>
        </div>
        <div className="row between muted" style={{ marginTop: 36, fontSize: 12, gap: 12, flexWrap: "wrap" }}>
          <span>Pas encore élève ? <Link className="link" href="/admission" style={{ color: "var(--noir)" }}>Candidater</Link></span>
          <span>FR · EN · Fɔ̀ngbè (bientôt)</span>
        </div>
      </div>
    </div>
  );
}
