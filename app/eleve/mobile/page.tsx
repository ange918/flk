import type { Metadata } from "next";
import Link from "next/link";
import { Icon, StatusGlyphs, type IconName } from "@/components/icon";
import { PhoneStage } from "@/components/shell";
import { Avatar, Photo } from "@/components/ui";
import { img } from "@/lib/data";

export const metadata: Metadata = { title: "Accueil mobile" };

const tabs: [IconName, string, string][] = [
  ["home", "Accueil", "/eleve/mobile"],
  ["cal", "Planning", "/eleve/planning"],
  ["layers", "Briefs", "/eleve/briefs"],
  ["wallet", "Paiements", "/eleve/echeancier"],
  ["user", "Profil", "/connexion"],
];

export default function EleveMobile() {
  return (
    <PhoneStage>
      <div className="status"><span>9:41</span><StatusGlyphs /></div>
      <div className="row between" style={{ padding: "8px 20px 14px" }}>
        <div className="row gap12">
          <Avatar src={img.nadege} size={42} />
          <div>
            <div className="muted" style={{ fontSize: 12 }}>Mardi 6 octobre</div>
            <div className="serif" style={{ fontSize: 22, lineHeight: 1.1 }}>Bonjour <em className="serif-i">Nadège</em></div>
          </div>
        </div>
        <span style={{ position: "relative" }}><Icon name="bell" size={22} /><span style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, borderRadius: "50%", background: "var(--terra)" }} /></span>
      </div>
      <div style={{ margin: "4px 20px 0", background: "var(--noir)", color: "var(--ivoire)", display: "grid", gridTemplateColumns: "1.2fr 1fr", overflow: "hidden", borderRadius: 16 }}>
        <div style={{ padding: 18 }}>
          <div className="eyebrow" style={{ color: "var(--terra-clair)" }}>Prochaine échéance</div>
          <div className="num" style={{ fontSize: 52, lineHeight: 1, marginTop: 8 }}>J−10</div>
          <div style={{ fontSize: 13, marginTop: 6, fontWeight: 700 }}>Rendu final · Capsule</div>
          <div style={{ fontSize: 11.5, color: "#B8B4C8" }}>ven. 16 oct. · 12:00</div>
        </div>
        <Photo src={img.lookTulle} h={170} pos="center 30%" radius={0} />
      </div>
      <Link href="/formateur/corrections" className="row gap12" style={{ margin: "14px 20px 0", padding: "14px 16px", background: "#fff", border: "1px solid var(--ligne)", borderRadius: 16 }}>
        <Avatar src={img.ornella} size={34} />
        <div style={{ flex: 1, fontSize: 12.5 }}><b>J2 corrigé · 15,6/20</b><div className="muted">Ornella Sossa · 4 annotations</div></div>
        <Icon name="arrow" size={16} />
      </Link>
      <div className="row between" style={{ padding: "22px 20px 6px" }}>
        <b style={{ fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase" }}>Aujourd’hui</b>
        <Link className="link" href="/eleve/planning">Planning</Link>
      </div>
      <div style={{ padding: "0 20px" }}>
        {[["08:00", "Croquis de mode", "Salle Croquis · terminé", true], ["16:00", "Permanence corrections", "Visio · inscrite", false]].map(([h, t, m, past]) => (
          <div key={String(h)} className="row gap16" style={{ padding: "12px 0", borderBottom: "1px solid var(--ligne)", opacity: past ? 0.55 : 1 }}>
            <span className="num tnum" style={{ fontSize: 18, width: 52 }}>{h}</span>
            <div><div style={{ fontWeight: 700, fontSize: 14 }}>{t}</div><div className="muted" style={{ fontSize: 12 }}>{m}</div></div>
          </div>
        ))}
      </div>
      <div style={{ padding: "22px 20px 6px" }}><b style={{ fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase" }}>Raccourcis</b></div>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 10, padding: "0 20px" }}>
        {([
          ["upload", "Déposer un rendu", "/eleve/depot"],
          ["image", "Mon book", "/eleve/book"],
          ["award", "Mes notes", "/eleve/bulletin"],
          ["book", "Ressources", "/eleve/bibliotheque"],
        ] as [IconName, string, string][]).map(([i, t, href]) => (
          <Link key={t} href={href} className="col gap8" style={{ padding: 16, background: "#fff", border: "1px solid var(--ligne)", borderRadius: 16 }}>
            <Icon name={i} size={20} /><b style={{ fontSize: 13 }}>{t}</b>
          </Link>
        ))}
      </div>
      <Link href="/eleve/paiements" className="row between" style={{ margin: "18px 20px 20px", padding: 16, border: "1px solid var(--ligne)", borderRadius: 16 }}>
        <div><div className="eyebrow">Scolarité</div><b className="tnum">552 500 / 850 000 F</b><div className="muted" style={{ fontSize: 11.5 }}>Prochaine tranche le 15 janv. 2027</div></div>
        <span className="badge b-olive">À jour</span>
      </Link>
      <nav className="tabbar">
        {tabs.map(([i, l, href]) => (
          <Link key={l} href={href} className={l === "Accueil" ? "on" : ""}><Icon name={i} size={21} /><span>{l}</span></Link>
        ))}
      </nav>
    </PhoneStage>
  );
}
