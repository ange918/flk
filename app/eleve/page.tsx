import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Avatar, Bar, Photo } from "@/components/ui";
import { img } from "@/lib/data";

export const metadata: Metadata = { title: "Accueil élève" };

const week = [
  ["Lun. 5", "08:00", "Collection capsule", "Atelier Ganvié · O. Sossa", "past"],
  ["Mar. 6", "08:00", "Croquis de mode", "Salle Croquis · O. Sossa", "past"],
  ["Mar. 6", "16:00", "Permanence corrections (visio)", "Inscrite · lien envoyé", "now"],
  ["Mer. 7", "08:00", "Atelier assemblage", "Atelier Ganvié · R. Agbossou", ""],
  ["Jeu. 8", "14:00", "Corrections capsule", "Atelier Ganvié · O. Sossa", ""],
  ["Ven. 9", "13:00", "Fiches techniques", "Salle Croquis · R. Agbossou", ""],
];

export default function EleveHome() {
  return (
    <>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="eyebrow t">Mardi 6 octobre 2026 · STY-2</div>
            <h1 className="h-page" style={{ marginTop: 10, fontSize: 56 }}>Bonjour <em>Nadège</em>.</h1>
            <p className="muted" style={{ marginTop: 10, fontSize: 15, maxWidth: 460 }}>
              Votre J2 a été corrigé par Ornella Sossa — <b style={{ color: "var(--noir)" }}>15,6/20</b>. Plus que 10 jours avant le rendu final de la capsule.
            </p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid var(--ligne)", paddingTop: 16, marginTop: 24 }}>
            {[["15,4", "moyenne S3 provisoire"], ["96 %", "présence"], ["12", "visuels au book"]].map(([a, b]) => (
              <div key={b}><div className="num" style={{ fontSize: 38 }}>{a}</div><div className="muted" style={{ fontSize: 12 }}>{b}</div></div>
            ))}
          </div>
        </div>
        <div className="card" style={{ overflow: "hidden", background: "var(--noir)", color: "var(--ivoire)", borderColor: "var(--noir)", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ padding: 28, display: "flex", flexDirection: "column" }}>
            <div className="eyebrow" style={{ color: "var(--terra-clair)" }}>Prochaine échéance</div>
            <div className="num" style={{ fontSize: 84, lineHeight: 1, marginTop: 14 }}>J−10</div>
            <div className="serif" style={{ fontSize: 24, lineHeight: 1.15, marginTop: 10 }}>Rendu final · Collection Capsule <em className="serif-i">« Terre rouge »</em></div>
            <div style={{ color: "#B8B4C8", fontSize: 12.5, marginTop: 8 }}>Vendredi 16 octobre 2026 à 12:00</div>
            <Link className="btn terra" style={{ marginTop: "auto", alignSelf: "flex-start" }} href="/eleve/depot"><Icon name="upload" size={15} /> Préparer mon dépôt</Link>
          </div>
          <Photo src={img.lookTulle} h="100%" pos="center 30%" radius={0} />
        </div>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 0.9fr", gap: 20, marginTop: 24, alignItems: "start" }}>
        <div className="card">
          <div className="card-h"><h3>Cette semaine</h3><span className="muted" style={{ fontSize: 12 }}>5 – 10 oct.</span></div>
          <div style={{ padding: "4px 24px 14px" }}>
            {week.map(([d, h, t, m, st]) => (
              <div key={d + h} className="grid" style={{ gridTemplateColumns: "56px 46px 1fr", gap: 10, padding: "11px 0", borderBottom: "1px solid var(--ligne)", opacity: st === "past" ? 0.55 : 1 }}>
                <span style={{ fontWeight: 700, fontSize: 12 }}>{d}</span>
                <span className="tnum muted" style={{ fontSize: 12 }}>{h}</span>
                <div>
                  <div className="row gap8" style={{ fontWeight: 700, fontSize: 13 }}>{t}{st === "now" ? <span className="badge b-terra">Aujourd’hui</span> : null}</div>
                  <div className="muted" style={{ fontSize: 11.5 }}>{m}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col" style={{ gap: 20 }}>
          <div className="card">
            <div className="card-h"><h3>Briefs en cours</h3></div>
            <div style={{ padding: "8px 24px 18px" }}>
              {[["Collection Capsule « Terre rouge »", "O. Sossa · J3 rendu final", "ven. 16 oct.", 66, "b-ocre"], ["Fiches techniques · veste tailleur", "R. Agbossou · dossier complet", "ven. 23 oct.", 25, "b-line"]].map(([t, m, d, p, b]) => (
                <Link key={String(t)} href="/eleve/briefs" style={{ display: "block", padding: "12px 0", borderBottom: "1px solid var(--ligne)" }}>
                  <div className="row between"><b style={{ fontSize: 13.5 }}>{t}</b><span className={`badge ${b}`}>{d}</span></div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>{m}</div>
                  <div style={{ marginTop: 10 }}><Bar value={Number(p)} /></div>
                </Link>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="card-h"><h3>Dernières notes</h3><Link className="link" href="/eleve/bulletin">Bulletin</Link></div>
            <div style={{ padding: "6px 24px 16px" }}>
              {[["Capsule · J2 Prototype", "Corrigé le 6 oct.", "15,6", true], ["Capsule · J1 Recherche", "Corrigé le 1er oct.", "16", false], ["Croquis · planche 9 têtes", "Corrigé le 30 sept.", "14,5", false]].map(([t, d, n, nw]) => (
                <div key={String(t)} className="row between" style={{ padding: "10px 0", borderBottom: "1px solid var(--ligne)" }}>
                  <div>
                    <div className="row gap8" style={{ fontWeight: 700, fontSize: 13 }}>{t}{nw ? <span className="badge b-terra">Nouveau</span> : null}</div>
                    <div className="muted" style={{ fontSize: 11.5 }}>{d}</div>
                  </div>
                  <span className="num" style={{ fontSize: 24 }}>{n}<span className="muted" style={{ fontSize: 12 }}>/20</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col" style={{ gap: 20 }}>
          <div className="card p" style={{ background: "#fff" }}>
            <div className="row between"><span className="eyebrow">Scolarité 2026–27</span><span className="badge b-olive">À jour</span></div>
            <div className="num" style={{ fontSize: 34, marginTop: 10 }}>552 500 <span style={{ fontSize: 13, fontFamily: "var(--sans)" }}>/ 850 000 F</span></div>
            <div style={{ marginTop: 10 }}><Bar value={65} /></div>
            <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>Prochaine tranche : 297 500 F le 15 janv. 2027</div>
            <div className="row gap8" style={{ marginTop: 14 }}>
              <Link className="btn sm ghost" href="/admin/recu"><Icon name="receipt" size={13} /> Reçus</Link>
              <Link className="btn sm" href="/eleve/paiements">Payer en avance</Link>
            </div>
          </div>
          <div className="card" style={{ overflow: "hidden" }}>
            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
              {[img.lookOrange, img.croquis2, img.lookJaune].map((s) => <Photo key={s} src={s} h={120} pos="center 30%" radius={0} />)}
            </div>
            <div className="row between" style={{ padding: "16px 20px" }}>
              <div><b>Mon book</b><div className="muted" style={{ fontSize: 12 }}>12 visuels validés · lien public actif</div></div>
              <Link className="link" href="/eleve/book">Ouvrir</Link>
            </div>
          </div>
          <div className="card p">
            <div className="row gap8">
              <Avatar src={img.ornella} size={30} />
              <div style={{ fontSize: 12.5 }}><b>Ornella Sossa</b> <span className="muted">· 15:02</span><div className="muted">« Très beau parti pris sur les volumes… »</div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
