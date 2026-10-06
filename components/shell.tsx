"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { CRUMBS, MENUS, USERS, activeKey, type Role } from "@/lib/data";
import { Icon, type IconName } from "./icon";
import { Avatar, Logo } from "./ui";

export function AppShell({
  role,
  crumb,
  search = "Rechercher un élève, une promo, un brief…",
  showSearch = true,
  children,
}: {
  role: Role;
  crumb?: string;
  search?: string;
  showSearch?: boolean;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const key = activeKey(role, pathname);
  const user = USERS[role];
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const hits = useMemo(() => filterNav(q, role), [q, role]);

  return (
    <div className="app">
      <div className={`scrim ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`side ${open ? "open" : ""}`}>
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Logo size={36} />
        </Link>
        {MENUS[role].map((item, i) =>
          "section" in item ? (
            <div className="sec" key={item.section + i}>{item.section}</div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${key === item.key ? "on" : ""}`}
              onClick={() => setOpen(false)}
            >
              <Icon name={item.icon as IconName} size={18} />
              <span>{item.label}</span>
              {item.count ? <span className="cnt">{item.count}</span> : null}
            </Link>
          ),
        )}
        <div style={{ marginTop: "auto", paddingTop: 24 }}>
          <div className="wl-box">
            <span style={{ color: "var(--terra)", fontWeight: 700, letterSpacing: ".14em", fontSize: 9.5, textTransform: "uppercase" }}>
              Marque blanche
            </span>
            <br />
            Nom, logo et couleurs personnalisables par école.
          </div>
          <Link href="/connexion" className="row gap12 user-foot">
            <Avatar src={user.img} size={38} pos={user.pos} />
            <div style={{ lineHeight: 1.3 }}>
              <div style={{ fontWeight: 700, fontSize: 13 }}>{user.name}</div>
              <div style={{ fontSize: 11.5, color: "var(--taupe)" }}>{user.role}</div>
            </div>
            <span style={{ marginLeft: "auto", color: "var(--taupe)" }}>
              <Icon name="logout" size={16} />
            </span>
          </Link>
        </div>
      </aside>
      <div className="main">
        <header className="top">
          <div className="row gap12">
            <button className="menu-btn btn ghost sm" aria-label="Ouvrir le menu" onClick={() => setOpen(true)}>
              <Icon name="menu" size={16} />
            </button>
            <span className="eyebrow">{crumb ?? `${CRUMBS[role]} · ${labelFor(role, key)}`}</span>
          </div>
          <div className="row gap16">
            {showSearch ? (
              <div className="search" style={{ position: "relative" }}>
                <Icon name="search" size={16} />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={search}
                  aria-label="Recherche"
                />
                <span style={{ fontSize: 11, border: "1px solid var(--ligne-fonce)", borderRadius: 16, padding: "0 6px" }}>⌘K</span>
                {q && hits.length > 0 ? (
                  <div className="card" style={{ position: "absolute", top: 46, left: 0, right: 0, padding: 8, zIndex: 30 }}>
                    {hits.map((h) => (
                      <Link key={h.href} href={h.href} className="row gap8" style={{ padding: "8px 10px", borderRadius: 10 }} onClick={() => setQ("")}>
                        <Icon name={h.icon as IconName} size={14} />
                        <span style={{ fontWeight: 700, fontSize: 13 }}>{h.label}</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
            <span style={{ position: "relative", display: "inline-flex" }}>
              <Icon name="bell" size={20} />
              <span style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, borderRadius: "50%", background: "var(--terra)" }} />
            </span>
            <span className="badge b-line">Année 2026–2027</span>
          </div>
        </header>
        <main className="content">{children}</main>
        <div className="ex-note" style={{ padding: "16px 40px 28px", borderTop: "1px solid var(--ligne)", display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <span>Données d’exemple — maquette non contractuelle</span>
          <span>ISDAM · solution marque blanche</span>
        </div>
      </div>
    </div>
  );
}

function labelFor(role: Role, key: string) {
  const item = MENUS[role].find((i) => "key" in i && i.key === key);
  return item && "label" in item ? item.label : "Accueil";
}

function filterNav(q: string, role: Role) {
  const s = q.trim().toLowerCase();
  if (s.length < 2) return [];
  return MENUS[role]
    .flatMap((item) => ("href" in item && item.label.toLowerCase().includes(s) ? [item] : []))
    .slice(0, 6);
}

export function PhoneStage({ children }: { children: React.ReactNode }) {
  return (
    <div className="phone-stage">
      <div className="mob">{children}</div>
    </div>
  );
}
