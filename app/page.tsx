import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PublicHeader } from "@/components/public-header";
import { Avatar, Logo, Photo, SiteFooter } from "@/components/ui";
import { fcfaN } from "@/lib/brand";
import { FORMATIONS, img } from "@/lib/data";

export const metadata: Metadata = { title: "L’art de couper, coudre, créer" };

const filieres = ["Stylisme", "Modélisme", "Design textile", "Couture", "Image de mode", "Accessoires"];

const stats = [
  ["412", "diplômés", "diplômés depuis 2017"],
  ["86%", "en activité", "en activité à 12 mois"],
  ["6", "ateliers", "ateliers équipés"],
] as const;

export default function VitrinePage() {
  const featured = FORMATIONS.slice(0, 4);
  return (
    <div className="landing mesh" style={{ backgroundColor: "var(--ivoire)" }}>
      <PublicHeader />

      <section className="land-hero">
        <div className="land-hero-copy">
          <span className="badge b-terra" style={{ marginBottom: 18, height: "auto", padding: "6px 14px" }}>
            <span className="sm-only">Admissions ouvertes · janv. 2027</span>
            <span className="md-only">Admissions ouvertes · Session janvier 2027 · Cotonou</span>
          </span>
          <h1 className="serif hero-title">
            L’art de couper,<br />coudre, créer.
          </h1>
          <div className="sm-only land-hero-photo">
            <HeroPhoto />
          </div>
          <p className="land-lead">
            <span className="sm-only">Six filières, des ateliers équipés et un book professionnel à la sortie — au cœur de Cotonou.</span>
            <span className="md-only">Une académie de mode et de stylisme au cœur de Cotonou. Six filières, des ateliers équipés, des formateurs issus des maisons de couture — et un book professionnel à la sortie.</span>
          </p>
          <div className="land-hero-actions">
            <Link className="btn terra lg" href="/admission">Candidater en ligne <Icon name="arrow" size={16} /></Link>
            <Link className="btn ghost lg" href="#ecole">
              <span className="sm-only">Voir les formations</span>
              <span className="md-only">Découvrir les formations</span>
            </Link>
          </div>
          <div className="stat-row">
            {stats.map(([n, short, long]) => (
              <div key={n}>
                <div className="num" style={{ fontSize: 32 }}>{n}</div>
                <div className="muted" style={{ fontSize: 12 }}>
                  <span className="sm-only">{short}</span>
                  <span className="md-only">{long}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md-only land-hero-photo">
          <HeroPhoto floating />
        </div>
      </section>

      <section className="marquee serif md-only" style={{ padding: "24px 64px", borderBottom: "1px solid var(--ligne)" }}>
        {filieres.map((x, i) => (
          <span key={x} className="row" style={{ gap: 56 }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: i % 2 ? "var(--terra)" : "var(--noir)" }}>{x}</span>
            <span style={{ color: "var(--terra-clair)" }}>✦</span>
          </span>
        ))}
      </section>

      <section id="ecole" className="land-pad">
        <div className="land-head">
          <div>
            <div className="eyebrow t">{`Filières`}</div>
            <h2 id="formations" className="h-page land-h2">
              <span className="sm-only">Six chemins vers la <em>mode</em>.</span>
              <span className="md-only">Six chemins vers<br />les métiers de la <em>mode</em>.</span>
            </h2>
          </div>
          <a className="link md-only" href="#ecole">Voir le catalogue complet →</a>
        </div>

        <div className="sm-only">
          {featured.map((f) => (
            <Link key={f.code} href={`/admission?filiere=${f.code}`} className="filiere-row">
              <Photo src={f.img} w={78} h={96} pos={f.pos} radius={16} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="eyebrow">{f.code} · {f.duree}</div>
                <div className="serif" style={{ fontSize: 19, lineHeight: 1.2, marginTop: 4 }}>{f.nom}</div>
                <div className="tnum" style={{ fontWeight: 700, fontSize: 13, marginTop: 6 }}>{fcfaN(f.tarif)} F{f.unite ? ` ${f.unite}` : ""}</div>
              </div>
              <Icon name="arrow" size={18} />
            </Link>
          ))}
        </div>

        <div className="cards-4 md-only">
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

      <section id="lookbook" className="land-pad" style={{ background: "var(--noir)", color: "var(--ivoire)" }}>
        <div className="land-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--terra-clair)" }}>
              <span className="sm-only">Lookbook élèves</span>
              <span className="md-only">Réalisations des élèves</span>
            </div>
            <h2 className="serif land-h2" style={{ color: "#fff" }}>
              <span className="sm-only">Réalisations 2026</span>
              <span className="md-only">Le <em className="serif-i">lookbook</em> 2026.</span>
            </h2>
          </div>
          <p className="md-only" style={{ maxWidth: 360, color: "#B8B4C8", lineHeight: 1.7 }}>
            Chaque pièce est conçue, patronnée et assemblée dans nos ateliers. Books validés par les formateurs, partagés par lien sécurisé.
          </p>
        </div>
        <div className="look-mini sm-only">
          <Photo src={img.lookOrange} h={230} pos="center 30%" radius={16} />
          <Photo src={img.lookTulle} h={230} pos="center 30%" radius={16} />
          <Photo src={img.lookKente} h={170} pos="center 30%" radius={16} />
          <Photo src={img.lookWax} h={170} pos="center 30%" radius={16} />
        </div>
        <div className="look-grid md-only">
          <figure><Photo src={img.lookOrange} h="100%" pos="center 30%" /></figure>
          <figure><Photo src={img.lookWax} h="100%" pos="center 30%" /></figure>
          <figure><Photo src={img.lookKente} h="100%" pos="center 30%" /></figure>
          <figure><Photo src={img.lookTulle} h="100%" pos="center 30%" /></figure>
          <figure><Photo src={img.wax4} h="100%" /></figure>
          <figure><Photo src={img.lookCape} h="100%" pos="center 20%" /></figure>
        </div>
        <div className="look-caps md-only">
          <span>Drapé fuchsia — Nadège Akpovi, STY-2</span>
          <span>Volume wax — Aïcha Bio · Kenté urbain — Fifamè Dossou</span>
          <span>Motif & cape — atelier Design textile</span>
          <span>Tulle céladon — Nadège Akpovi</span>
        </div>
      </section>

      <section id="pedagogie" className="two land-pad mesh">
        <Photo src={img.atelierGroupe} h={520} pos="center 40%" arch className="land-ped-photo" />
        <div>
          <div className="eyebrow t">La pédagogie</div>
          <h2 className="h-page land-h2">
            Apprendre à la main,<br />penser en <em>créateur</em>.
          </h2>
          <div className="col" style={{ marginTop: 36 }}>
            {[
              ["70 %", "de pratique en atelier", "Coupe, moulage, piquage : chaque semaine en conditions réelles."],
              ["1 brief", "par mois, noté sur critères", "Collection capsule, commande client, défilé — rendus déposés en HD."],
              ["1 book", "professionnel à la sortie", "Galerie validée, partageable auprès des maisons et showrooms."],
            ].map(([a, b, c]) => (
              <div key={a} className="ped-row">
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

      <section id="temoignages" className="land-pad" style={{ background: "var(--sable-pale)", borderTop: "1px solid var(--ligne)", borderBottom: "1px solid var(--ligne)" }}>
        <div className="eyebrow t md-only" style={{ marginBottom: 28 }}>Témoignages</div>
        <div className="three">
          {[
            [img.grace, "Grâce Tossou", "Diplômée Design textile 2026 · fondatrice de Tossou Textiles", "« J’ai développé mon premier imprimé à l’académie. Aujourd’hui il est produit en série à Lomé. »"],
            [img.marius, "Marius Hounkpatin", "Élève Stylisme, 2e année", "« Les retours des formateurs sur chaque rendu, avec des annotations sur mes photos, m’ont fait progresser très vite. »"],
            [img.fifame, "Fifamè Dossou", "Élève Stylisme, 2e année", "« Payer ma scolarité par tranches via MoMo et suivre mon planning sur le téléphone : tout est simple. »"],
          ].map(([photo, name, role, quote], i) => (
            <figure key={name} className={i > 0 ? "md-only" : undefined}>
              <p className="serif" style={{ fontSize: 22, lineHeight: 1.4, fontWeight: 700 }}>{quote}</p>
              <figcaption className="row gap12" style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid var(--ligne)" }}>
                <Avatar src={photo} size={52} pos="center 20%" />
                <div>
                  <div style={{ fontWeight: 700 }}>{name}</div>
                  <div className="muted" style={{ fontSize: 12.5 }}>{i === 0 ? "Diplômée Design textile 2026" : role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="cta-grid land-pad">
        <div>
          <div className="eyebrow t md-only">Session janvier 2027 · 96 places</div>
          <h2 className="serif land-cta">
            <span className="md-only">Votre première<br />collection commence ici.</span>
          </h2>
          <p className="sm-only muted" style={{ fontSize: 13 }}>Frais de dossier 15 000 FCFA · Clôture 30 nov. 2026</p>
        </div>
        <div>
          <p className="muted md-only" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Dossier 100 % en ligne en 15 minutes. Frais de dossier : <b style={{ color: "var(--noir)" }}>15 000 FCFA</b>, payables par Mobile Money ou carte. Réponse sous 10 jours ouvrés.
          </p>
          <div className="land-hero-actions" style={{ marginTop: 28 }}>
            <Link className="btn terra lg" href="/admission">Candidater <Icon name="arrow" size={16} /></Link>
            <Link className="btn ghost lg md-only" href="/admission">Portes ouvertes · 24 oct.</Link>
          </div>
          <div className="muted md-only" style={{ fontSize: 12, marginTop: 18 }}>Clôture des candidatures : 30 novembre 2026</div>
        </div>
      </section>
      <SiteFooter />
      <span className="sr-only"><Logo /></span>
    </div>
  );
}

function HeroPhoto({ floating = false }: { floating?: boolean }) {
  return (
    <>
      <Photo src={img.runway} h={floating ? 560 : 420} pos={floating ? "center 28%" : "center 30%"} arch className="land-hero-ph" />
      {floating ? (
        <div className="card hero-card">
          <div className="eyebrow t">Défilé 2026</div>
          <div style={{ fontWeight: 800, fontSize: 14, marginTop: 4, fontFamily: "var(--display)" }}>« Terre rouge » — STY-2</div>
          <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>Collection des 2es années</div>
        </div>
      ) : (
        <span className="eyebrow land-hero-cap">Défilé 2026 · « Terre rouge »</span>
      )}
    </>
  );
}
