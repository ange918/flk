import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PublicHeader } from "@/components/public-header";
import { VitrineMobile } from "@/components/vitrine-mobile";
import { Avatar, Logo, Photo, SiteFooter } from "@/components/ui";
import { fcfaN } from "@/lib/brand";
import { FORMATIONS, img } from "@/lib/data";

export const metadata: Metadata = { title: "L’art de couper, coudre, créer" };

const filieres = ["Stylisme", "Modélisme", "Design textile", "Couture", "Image de mode", "Accessoires"];

export default function VitrinePage() {
  const featured = FORMATIONS.slice(0, 4);
  return (
    <>
    <div className="mesh only-md" style={{ backgroundColor: "var(--ivoire)" }}>
      <PublicHeader />
      <section className="hero-grid mesh" style={{ padding: "72px 64px 64px", borderBottom: "1px solid var(--ligne)" }}>
        <div>
          <span className="badge b-terra" style={{ marginBottom: 18, height: "auto", padding: "6px 14px" }}>
            Admissions ouvertes · Session janvier 2027 · Cotonou
          </span>
          <h1 className="serif hero-title" style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 800, letterSpacing: "-.03em", color: "var(--terra)", marginTop: 8 }}>
            L’art de couper,<br />coudre, créer.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, maxWidth: 480, marginTop: 22, color: "var(--taupe)" }}>
            Une académie de mode et de stylisme au cœur de Cotonou. Six filières, des ateliers équipés, des formateurs issus des maisons de couture — et un book professionnel à la sortie.
          </p>
          <div className="row gap12" style={{ marginTop: 32, flexWrap: "wrap" }}>
            <Link className="btn terra lg" href="/admission">Candidater en ligne <Icon name="arrow" size={16} /></Link>
            <Link className="btn ghost lg" href="/formations">Découvrir les formations</Link>
          </div>
          <div className="row gap32" style={{ marginTop: 40, flexWrap: "wrap" }}>
            {[["412", "diplômés depuis 2017"], ["86%", "en activité à 12 mois"], ["6", "ateliers équipés"]].map(([n, l]) => (
              <div key={l}>
                <div className="num" style={{ fontSize: 32 }}>{n}</div>
                <div className="muted" style={{ fontSize: 12 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", maxWidth: 440, marginLeft: "auto", width: "100%" }}>
          <Photo src={img.runway} h={560} pos="center 28%" arch />
          <div className="card hero-card" style={{ position: "absolute", left: -24, bottom: 28, padding: "14px 18px", maxWidth: 240 }}>
            <div className="eyebrow t">Défilé 2026</div>
            <div style={{ fontWeight: 800, fontSize: 14, marginTop: 4, fontFamily: "var(--display)" }}>« Terre rouge » — STY-2</div>
            <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>Collection des 2es années</div>
          </div>
        </div>
      </section>

      <section className="marquee serif" style={{ padding: "24px 64px", borderBottom: "1px solid var(--ligne)" }}>
        {filieres.map((x, i) => (
          <span key={x} className="row gap32" style={{ gap: 56 }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: i % 2 ? "var(--terra)" : "var(--noir)" }}>{x}</span>
            <span style={{ color: "var(--terra-clair)" }}>✦</span>
          </span>
        ))}
      </section>

      <section id="ecole" style={{ padding: "96px 64px 80px" }}>
        <div className="row between" style={{ alignItems: "flex-end", marginBottom: 44, gap: 16, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow t">Nos filières</div>
            <h2 className="h-page" style={{ fontSize: 60, marginTop: 12 }}>
              Six chemins vers<br />les métiers de la <em>mode</em>.
            </h2>
          </div>
          <Link className="link" href="/formations">Voir le catalogue complet →</Link>
        </div>
        <div className="cards-4">
          {featured.map((f, i) => (
            <article key={f.code} className="card" style={{ overflow: "hidden", padding: 0 }}>
              <div style={{ position: "relative" }}>
                <Photo src={f.img} h={360} pos={f.pos} arch={i % 2 === 0} radius={0} />
                <span className="badge" style={{ position: "absolute", top: 14, left: 14, background: "#fff" }}>{f.duree}</span>
              </div>
              <div style={{ padding: "18px 20px 22px" }}>
                <div className="row between" style={{ paddingBottom: 10 }}>
                  <span className="eyebrow t">0{i + 1}</span>
                  <span className="eyebrow">{f.code}</span>
                </div>
                <h3 className="serif" style={{ fontSize: 22, lineHeight: 1.15, marginTop: 4 }}>{f.nom}</h3>
                <div className="row between" style={{ marginTop: 12, gap: 8 }}>
                  <span className="muted" style={{ fontSize: 13 }}>{f.diplome.split("—")[0]}</span>
                  <b className="tnum" style={{ color: "var(--terra)" }}>{fcfaN(f.tarif)} F{f.unite ? ` ${f.unite}` : ""}</b>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="lookbook" style={{ background: "var(--noir)", color: "var(--ivoire)", padding: "96px 64px" }}>
        <div className="row between" style={{ alignItems: "flex-end", marginBottom: 44, gap: 24, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--terra-clair)" }}>Réalisations des élèves</div>
            <h2 className="serif" style={{ fontSize: 60, lineHeight: 1.05, marginTop: 12, color: "#fff" }}>
              Le <em className="serif-i">lookbook</em> 2026.
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: "#B8B4C8", lineHeight: 1.7 }}>
            Chaque pièce est conçue, patronnée et assemblée dans nos ateliers. Books validés par les formateurs, partagés par lien sécurisé.
          </p>
        </div>
        <div className="look-grid">
          <figure><Photo src={img.lookOrange} h="100%" pos="center 30%" /></figure>
          <figure><Photo src={img.lookWax} h="100%" pos="center 30%" /></figure>
          <figure><Photo src={img.lookKente} h="100%" pos="center 30%" /></figure>
          <figure><Photo src={img.lookTulle} h="100%" pos="center 30%" /></figure>
          <figure><Photo src={img.wax4} h="100%" /></figure>
          <figure><Photo src={img.lookCape} h="100%" pos="center 20%" /></figure>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "1.3fr 1fr 1fr 1.1fr", gap: 16, marginTop: 14, fontSize: 11.5, color: "#B8B4C8", letterSpacing: ".04em" }}>
          <span>Drapé fuchsia — Nadège Akpovi, STY-2</span>
          <span>Volume wax — Aïcha Bio · Kenté urbain — Fifamè Dossou</span>
          <span>Motif & cape — atelier Design textile</span>
          <span>Tulle céladon — Nadège Akpovi</span>
        </div>
      </section>

      <section id="pedagogie" className="two mesh" style={{ padding: "96px 64px" }}>
        <Photo src={img.atelierGroupe} h={520} pos="center 40%" arch />
        <div>
          <div className="eyebrow t">La pédagogie</div>
          <h2 className="h-page" style={{ fontSize: 52, marginTop: 12 }}>
            Apprendre à la main,<br />penser en <em>créateur</em>.
          </h2>
          <div className="col" style={{ marginTop: 36 }}>
            {[
              ["70 %", "de pratique en atelier", "Coupe, moulage, piquage : chaque semaine en conditions réelles."],
              ["1 brief", "par mois, noté sur critères", "Collection capsule, commande client, défilé — rendus déposés en HD."],
              ["1 book", "professionnel à la sortie", "Galerie validée, partageable auprès des maisons et showrooms."],
            ].map(([a, b, c]) => (
              <div key={a} className="grid" style={{ gridTemplateColumns: "150px 1fr", gap: 24, padding: "22px 0", borderTop: "1px solid var(--ligne)" }}>
                <div className="num" style={{ fontSize: 34 }}>{a}</div>
                <div>
                  <div style={{ fontWeight: 700 }}>{b}</div>
                  <div className="muted" style={{ marginTop: 4 }}>{c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="temoignages" style={{ padding: "88px 64px", background: "var(--sable-pale)", borderTop: "1px solid var(--ligne)", borderBottom: "1px solid var(--ligne)" }}>
        <div className="eyebrow t" style={{ marginBottom: 28 }}>Témoignages</div>
        <div className="three">
          {[
            [img.grace, "Grâce Tossou", "Diplômée Design textile 2026 · fondatrice de Tossou Textiles", "« J’ai développé mon premier imprimé à l’académie. Aujourd’hui il est produit en série à Lomé. »"],
            [img.marius, "Marius Hounkpatin", "Élève Stylisme, 2e année", "« Les retours des formateurs sur chaque rendu, avec des annotations sur mes photos, m’ont fait progresser très vite. »"],
            [img.fifame, "Fifamè Dossou", "Élève Stylisme, 2e année", "« Payer ma scolarité par tranches via MoMo et suivre mon planning sur le téléphone : tout est simple. »"],
          ].map(([photo, name, role, quote]) => (
            <figure key={name}>
              <p className="serif" style={{ fontSize: 22, lineHeight: 1.4, fontWeight: 700 }}>{quote}</p>
              <figcaption className="row gap12" style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid var(--ligne)" }}>
                <Avatar src={photo} size={52} pos="center 20%" />
                <div>
                  <div style={{ fontWeight: 700 }}>{name}</div>
                  <div className="muted" style={{ fontSize: 12.5 }}>{role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="cta-grid" style={{ padding: "110px 64px" }}>
        <div>
          <div className="eyebrow t">Session janvier 2027 · 96 places</div>
          <h2 className="serif" style={{ fontSize: 84, lineHeight: 0.92, marginTop: 16, color: "var(--terra)" }}>
            Votre première<br />collection commence ici.
          </h2>
        </div>
        <div>
          <p className="muted" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Dossier 100 % en ligne en 15 minutes. Frais de dossier : <b style={{ color: "var(--noir)" }}>15 000 FCFA</b>, payables par Mobile Money ou carte. Réponse sous 10 jours ouvrés.
          </p>
          <div className="row gap12" style={{ marginTop: 28, flexWrap: "wrap" }}>
            <Link className="btn terra lg" href="/admission">Candidater <Icon name="arrow" size={16} /></Link>
            <Link className="btn ghost lg" href="/admission">Portes ouvertes · 24 oct.</Link>
          </div>
          <div className="muted" style={{ fontSize: 12, marginTop: 18 }}>Clôture des candidatures : 30 novembre 2026</div>
        </div>
      </section>
      <SiteFooter />
      <span className="sr-only"><Logo /></span>
    </div>
    <VitrineMobile />
    </>
  );
}
