import Link from "next/link";
import { BRAND } from "@/lib/brand";

export function Logo({ light = false, size = 40 }: { light?: boolean; size?: number }) {
  return (
    <div className="row gap12" style={{ color: light ? "#fff" : "var(--noir)" }}>
      <span
        className="mono"
        style={{
          width: size,
          height: size,
          fontSize: size * 0.38,
          ...(light ? { background: "rgba(255,255,255,.15)", color: "#fff", boxShadow: "none" } : {}),
        }}
      >
        {BRAND.mono}
      </span>
      <div className="wordmark">
        {BRAND.name}
        <small>{BRAND.tagline}</small>
      </div>
    </div>
  );
}

export function Photo({
  src,
  h,
  w = "100%",
  pos = "center",
  arch = false,
  radius,
  className = "",
  style,
}: {
  src: string;
  h: number | string;
  w?: number | string;
  pos?: string;
  arch?: boolean;
  radius?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`ph ${arch ? "arch" : ""} ${className}`}
      style={{
        width: typeof w === "number" ? `${w}px` : w,
        height: typeof h === "number" ? `${h}px` : h,
        borderRadius: arch ? undefined : radius === 0 ? 0 : radius,
        ...style,
      }}
    >
      <img src={src} alt="" style={{ objectPosition: pos }} />
    </div>
  );
}

export function Avatar({ src, size = 36, pos = "center 25%" }: { src: string; size?: number; pos?: string }) {
  return <img className="av" src={src} alt="" style={{ width: size, height: size, objectPosition: pos }} />;
}

export function AvatarIni({ initials, size = 36 }: { initials: string; size?: number }) {
  return (
    <span className="av-i" style={{ width: size, height: size, fontSize: Math.round(size / 3) }}>
      {initials}
    </span>
  );
}

export function Person({
  img,
  ini,
  size = 36,
  pos,
}: {
  img?: string;
  ini?: string;
  size?: number;
  pos?: string;
}) {
  if (img) return <Avatar src={img} size={size} pos={pos} />;
  return <AvatarIni initials={ini ?? "?"} size={size} />;
}

export function Bar({ value, tone }: { value: number; tone?: string }) {
  return (
    <div className={`bar ${tone ?? ""}`}>
      <i style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

export function FakeQR({ size = 120, seed = 7 }: { size?: number; seed?: number }) {
  const n = 25;
  const c = size / n;
  let x = seed;
  const rnd = () => {
    x = (x * 9301 + 49297) % 233280;
    return x / 233280;
  };
  const finder = (i: number, j: number) =>
    [
      [0, 0],
      [0, n - 7],
      [n - 7, 0],
    ].some(([a, b]) => i >= a && i < a + 7 && j >= b && j < b + 7);
  const cells: { x: number; y: number }[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (finder(i, j)) continue;
      if (rnd() > 0.52) cells.push({ x: j * c, y: i * c });
    }
  }
  const finders = [
    [0, 0],
    [0, n - 7],
    [n - 7, 0],
  ];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      {cells.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={c} height={c} fill="#1A1230" />
      ))}
      {finders.map(([a, b], i) => (
        <g key={`f${i}`}>
          <rect x={b * c} y={a * c} width={7 * c} height={7 * c} fill="#1A1230" />
          <rect x={(b + 1) * c} y={(a + 1) * c} width={5 * c} height={5 * c} fill="#fff" />
          <rect x={(b + 2) * c} y={(a + 2) * c} width={3 * c} height={3 * c} fill="#1A1230" />
        </g>
      ))}
    </svg>
  );
}

export function ExNote({ children }: { children?: React.ReactNode }) {
  return (
    <div className="ex-note" style={{ padding: "16px 40px 28px", borderTop: "1px solid var(--ligne)", display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
      <span>{children ?? "Données d’exemple — maquette non contractuelle"}</span>
      <span>ISDAM · solution marque blanche</span>
    </div>
  );
}

export function DemoBanner() {
  return (
    <div className="ex-note" style={{ padding: "14px 64px 20px", borderTop: "1px solid var(--ligne)" }}>
      Données d’exemple — maquette non contractuelle
    </div>
  );
}

export const PUBLIC_LINKS = [
  { href: "/#ecole", label: "L’école" },
  { href: "/formations", label: "Formations" },
  { href: "/#lookbook", label: "Réalisations" },
  { href: "/admission", label: "Admissions" },
  { href: "/#temoignages", label: "Journal" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="foot-grid">
        <div>
          <Logo light size={46} />
          <p style={{ marginTop: 20, color: "#B8B4C8", maxWidth: 320, lineHeight: 1.7 }}>
            Former les créateurs qui habillent l’Afrique de demain — du croquis au défilé.
          </p>
          <span className="wl-note" style={{ marginTop: 20, borderColor: "rgba(255,255,255,.35)", color: "#F9C2DD", background: "rgba(224,33,138,.2)" }}>
            Marque blanche · nom & identité personnalisables
          </span>
        </div>
        <FooterCol title="L’école" links={[["Notre pédagogie", "/#pedagogie"], ["Les formateurs", "/admin/formateurs"], ["Les ateliers", "/#ecole"], ["Partenaires", "/#ecole"]]} />
        <FooterCol title="Admissions" links={[["Candidater", "/admission"], ["Frais & financement", "/paiement"], ["Journées portes ouvertes", "/admission"], ["FAQ", "/connexion"]]} />
        <div>
          <div className="eyebrow" style={{ color: "#6B6885", marginBottom: 14 }}>Contact</div>
          <div className="col gap8" style={{ color: "#C8C4D8" }}>
            <span>{BRAND.addr}</span>
            <span>{BRAND.tel}</span>
            <span>{BRAND.mail}</span>
          </div>
        </div>
      </div>
      <div className="row between" style={{ marginTop: 56, paddingTop: 20, borderTop: "1px solid #2E2548", fontSize: 11.5, color: "#6B6885", gap: 12, flexWrap: "wrap" }}>
        <span>© 2026 ISDAM — Données d’exemple, interface non contractuelle</span>
        <span>
          <Link href="/design-system">Design system</Link> · Mentions légales · Confidentialité
        </span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="eyebrow" style={{ color: "#6B6885", marginBottom: 14 }}>{title}</div>
      <div className="col gap8" style={{ color: "#C8C4D8" }}>
        {links.map(([label, href]) => (
          <Link key={label} href={href}>{label}</Link>
        ))}
      </div>
    </div>
  );
}
