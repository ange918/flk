import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { FakeQR, Photo } from "@/components/ui";
import { BRAND } from "@/lib/brand";
import { img } from "@/lib/data";

export const metadata: Metadata = { title: "Book de Nadège Akpovi" };

export default async function PortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug !== "nadege-akpovi") notFound();
  return (
    <div>
      <div className="row between" style={{ padding: "10px 64px", background: "var(--noir)", color: "#F9C2DD", fontSize: 12, gap: 12, flexWrap: "wrap" }}>
        <span className="row gap8"><Icon name="lock" size={13} /> Lien privé partagé par Nadège Akpovi · expire le 6 nov. 2026</span>
        <span>Téléchargement désactivé · images filigranées</span>
      </div>
      <header className="row between" style={{ padding: "26px 64px", borderBottom: "1px solid var(--ligne)", gap: 16, flexWrap: "wrap" }}>
        <Link href="/" className="row gap12">
          <span className="mono" style={{ width: 36, height: 36, fontSize: 15 }}>{BRAND.mono}</span>
          <span className="eyebrow">Book certifié · {BRAND.name}</span>
        </Link>
        <nav className="row gap32" style={{ fontSize: 13, fontWeight: 600 }}>
          <a href="#collections">Collections</a>
          <a href="#croquis">Croquis</a>
          <a href="#parcours">Parcours</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", borderBottom: "1px solid var(--ligne)" }}>
        <div style={{ padding: "72px 64px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="eyebrow t">Styliste · Promotion 2027</div>
            <h1 className="serif" style={{ fontSize: "clamp(64px, 8vw, 120px)", lineHeight: 0.86, marginTop: 18 }}>
              Nadège<br /><em className="serif-i">Akpovi</em>
            </h1>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 48 }}>
            <p className="serif" style={{ fontSize: 22, lineHeight: 1.4 }}>« Je dessine des volumes qui respirent, nourris de la terre rouge du Sud-Bénin et des façades de Porto-Novo. »</p>
            <div className="col gap8" style={{ fontSize: 13 }}>
              {[["Formation", "Stylisme & Création de mode"], ["École", "ISDAM, Cotonou"], ["Spécialités", "Drapé, volume, wax"], ["Disponible", "Stage — févr. 2027"]].map(([a, b]) => (
                <div key={a} className="row between" style={{ padding: "8px 0", borderTop: "1px solid var(--ligne)", gap: 12 }}><span className="muted">{a}</span><b>{b}</b></div>
              ))}
            </div>
          </div>
        </div>
        <Photo src={img.nadege} h={760} pos="center 25%" radius={0} />
      </section>
      <section id="collections" style={{ padding: "88px 64px 40px" }}>
        <div className="row between" style={{ alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow">Chapitre I</div>
            <h2 className="serif" style={{ fontSize: 64, lineHeight: 1, marginTop: 10 }}>Collection capsule <em className="serif-i">« Terre rouge »</em></h2>
          </div>
          <span className="muted" style={{ fontSize: 13 }}>2026 · 3 silhouettes · encadrée par O. Sossa</span>
        </div>
      </section>
      <section style={{ padding: "0 64px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 16 }}>
        <figure style={{ position: "relative" }}>
          <Photo src={img.lookOrange} h={640} pos="center 30%" />
          <figcaption className="cap" style={{ marginTop: 8 }}>LOOK 03 — TOP DRAPÉ TERRACOTTA, PANTALON VELOURS</figcaption>
        </figure>
        <div className="col gap16">
          <Photo src={img.lookTerre} h={312} pos="center 30%" />
          <Photo src={img.broderie} h={312} />
        </div>
        <div className="col gap16">
          <Photo src={img.croquis3} h={400} />
          <div style={{ padding: 22, background: "var(--sable-pale)", flex: 1, borderRadius: 20 }}>
            <div className="eyebrow">Note du formateur</div>
            <p className="serif" style={{ fontSize: 17, lineHeight: 1.45, marginTop: 10 }}>« Un vrai sens du volume et une grande rigueur de recherche. »</p>
            <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>Ornella Sossa, formatrice Stylisme</div>
          </div>
        </div>
      </section>
      <section id="croquis" style={{ padding: "110px 64px 40px" }}>
        <div className="eyebrow">Chapitre II</div>
        <h2 className="serif" style={{ fontSize: 64, lineHeight: 1, marginTop: 10 }}>Volumes <em className="serif-i">&amp;</em> croquis</h2>
      </section>
      <section style={{ padding: "0 64px 80px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
        {[[img.lookTulle, "center 30%"], [img.croquis2, "center"], [img.lookJaune, "center 30%"], [img.lookOmbrelle, "center 30%"]].map(([s, p]) => (
          <Photo key={s} src={s} h={420} pos={p} />
        ))}
      </section>
      <section id="parcours" style={{ margin: "0 64px", padding: "56px 0", borderTop: "1px solid var(--ligne)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div className="eyebrow">Parcours</div>
          <div className="col gap8" style={{ marginTop: 14, fontSize: 13.5 }}>
            {[["2025 – 2027", "Stylisme & Création de mode, ISDAM"], ["Juil. 2026", "Défilé de fin de 1re année — 2 silhouettes"], ["2024", "Baccalauréat série G2, Cotonou"]].map(([a, b]) => (
              <div key={a} className="grid" style={{ gridTemplateColumns: "110px 1fr", gap: 12 }}><b className="tnum">{a}</b><span>{b}</span></div>
            ))}
          </div>
        </div>
        <div>
          <div className="eyebrow">Book vérifié</div>
          <div className="row gap16" style={{ marginTop: 14 }}>
            <FakeQR size={84} seed={21} />
            <p className="muted" style={{ fontSize: 12.5, lineHeight: 1.6 }}>Toutes les pièces ont été validées par l’équipe pédagogique d’ISDAM.</p>
          </div>
        </div>
        <div id="contact">
          <div className="eyebrow">Contact</div>
          <p style={{ marginTop: 14, fontSize: 13.5, lineHeight: 1.6 }}>Les demandes de stage ou de collaboration transitent par le service relations entreprises de l’école.</p>
          <Link className="btn terra" style={{ marginTop: 16 }} href="/connexion"><Icon name="mail" size={15} /> Contacter via l’école</Link>
        </div>
      </section>
      <footer className="row between ex-note" style={{ padding: "24px 64px", borderTop: "1px solid var(--ligne)", gap: 12, flexWrap: "wrap" }}>
        <span>Book propulsé par ISDAM — plateforme marque blanche</span>
        <span>Données d’exemple · photos illustratives</span>
      </footer>
    </div>
  );
}
