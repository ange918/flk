"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./icon";
import { Logo, PUBLIC_LINKS } from "./ui";

export function PublicHeader({ active = "" }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="pub-header">
      <Link href="/" aria-label="ISDAM, accueil">
        <Logo size={42} />
      </Link>
      <nav className={`pub-nav ${open ? "open" : ""}`}>
        {PUBLIC_LINKS.map((l) => (
          <Link key={l.label} href={l.href} className={l.label === active ? "on" : ""} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link className="btn ghost nav-cta" href="/connexion" onClick={() => setOpen(false)}>Se connecter</Link>
        <Link className="btn terra nav-cta" href="/admission" onClick={() => setOpen(false)}>
          Candidater <Icon name="arrow" size={14} />
        </Link>
      </nav>
      <div className="row gap12 nowrap">
        <button className="menu-btn btn ghost sm" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <Icon name={open ? "x" : "menu"} size={18} />
        </button>
        <Link className="btn ghost sm desk-cta" href="/connexion">Se connecter</Link>
        <Link className="btn terra sm desk-cta" href="/admission">
          Candidater <Icon name="arrow" size={14} />
        </Link>
      </div>
    </header>
  );
}
