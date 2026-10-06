import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/icon";
import { Bar, Person, Photo } from "@/components/ui";
import { STY2, img, studentInitials } from "@/lib/data";

export const metadata: Metadata = { title: "Aujourd’hui — formateur" };

const courses = [
  ["08:00 – 10:00", "STY-2 · Croquis de mode", "Salle Croquis", "Terminé", "b-olive", "Appel fait · 21/22 présents"],
  ["10:30 – 12:30", "STY-1 A · Histoire de la mode africaine", "Salle Croquis", "Terminé", "b-olive", "Appel fait · 23/24 présents"],
  ["16:00 – 17:00", "STY-2 · Permanence corrections capsule", "En ligne (visio)", "À venir", "b-indigo", "9 élèves inscrits"],
];

const rendus = [
  ["Nadège Akpovi", "Capsule · J2 Prototype Look 03", "3 oct. · 18:42", "6 fichiers", "", img.lookOrange],
  ["Sènami Gbaguidi", "Capsule · J2 Prototype Look 02", "4 oct. · 11:05", "5 fichiers", "", img.lookDos],
  ["Marius Hounkpatin", "Capsule · J2 Prototype Look 01", "4 oct. · 16:30", "7 fichiers", "", img.lookRaye],
  ["Fifamè Dossou", "Capsule · J2 Prototype Look 02", "4 oct. · 21:14", "6 fichiers", "", img.lookKente],
  ["Aïcha Bio", "Capsule · J2 Prototype Look 03", "4 oct. · 23:51", "4 fichiers", "", img.lookWax],
  ["Romaric Adjovi", "Capsule · J2 Prototype Look 01", "5 oct. · 23:58", "3 fichiers", "Retard 1 j", img.lookBantu],
] as const;

export default function FormateurHome() {
  return (
    <>
      <div className="grid" style={{ gridTemplateColumns: "1fr 420px", gap: 40, alignItems: "end" }}>
        <div>
          <div className="eyebrow t">Mardi 6 octobre 2026</div>
          <h1 className="h-page" style={{ marginTop: 10, fontSize: 52 }}>Bonjour <em>Ornella</em>,<br />7 rendus vous attendent.</h1>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid var(--ligne)", paddingTop: 16 }}>
          {[["3", "cours aujourd’hui"], ["7", "rendus à corriger"], ["93 %", "présence STY-2"]].map(([a, b]) => (
            <div key={b}><div className="num" style={{ fontSize: 36 }}>{a}</div><div className="muted" style={{ fontSize: 12 }}>{b}</div></div>
          ))}
        </div>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1.25fr", gap: 24, marginTop: 36, alignItems: "start" }}>
        <div className="col gap16">
          <div className="card">
            <div className="card-h"><h3>Cours du jour</h3><span className="muted" style={{ fontSize: 12 }}>Mar. 6 oct.</span></div>
            <div style={{ padding: "6px 24px 16px" }}>
              {courses.map(([h, t, s, st, b, m], i) => (
                <div key={h} className="grid" style={{ gridTemplateColumns: "110px 1fr", gap: 16, padding: "16px 0", borderBottom: i < 2 ? "1px solid var(--ligne)" : undefined }}>
                  <div className="num tnum" style={{ fontSize: 15 }}>{h}</div>
                  <div>
                    <div className="row between" style={{ gap: 8 }}><b>{t}</b><span className={`badge ${b}`}>{st}</span></div>
                    <div className="muted" style={{ fontSize: 12.5, marginTop: 4 }}><Icon name="pin" size={12} /> {s} · {m}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{ overflow: "hidden", background: "var(--noir)", color: "var(--ivoire)", borderColor: "var(--noir)" }}>
            <div className="grid" style={{ gridTemplateColumns: "180px 1fr" }}>
              <Photo src={img.croquisMur} h={220} radius={0} />
              <div style={{ padding: 22 }}>
                <div className="eyebrow" style={{ color: "var(--terra-clair)" }}>Brief en cours · STY-2</div>
                <div className="serif" style={{ fontSize: 28, lineHeight: 1.1, marginTop: 8 }}>Collection Capsule <em className="serif-i">« Terre rouge »</em></div>
                <div style={{ fontSize: 12.5, color: "#B8B4C8", marginTop: 10 }}>Rendu final : ven. 16 oct. 2026, 12:00<br />Jury & oral : lun. 19 oct. 2026</div>
                <div style={{ marginTop: 14 }}><Bar value={62} /></div>
                <div style={{ fontSize: 11.5, color: "#B8B4C8", marginTop: 6 }}>Jalon 2 / 3 · 21 dépôts sur 22</div>
              </div>
            </div>
          </div>
          <div className="card p">
            <div className="eyebrow" style={{ marginBottom: 12 }}>Alertes</div>
            {([
              ["clock", "Romaric Adjovi a déposé le J2 avec 1 jour de retard."],
              ["users", "Edwige Kakpo absente (justifiée) ce matin — certificat médical reçu."],
              ["chat", "2 nouveaux messages de la promo STY-2."],
            ] as [IconName, string][]).map(([i, t]) => (
              <div key={t} className="row gap12" style={{ padding: "9px 0", borderTop: "1px solid var(--ligne)", fontSize: 12.5 }}>
                <Icon name={i} size={16} /><span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{ background: "#fff" }}>
          <div className="card-h">
            <h3>Rendus à corriger</h3>
            <div className="row gap8"><span className="badge b-noir">J2 Prototype (6)</span><span className="badge b-line">STY-1 (1)</span></div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16, padding: "20px 24px" }}>
            {rendus.map(([n, t, d, f, late, src], i) => {
              const student = STY2.find((s) => s.name === n);
              return (
                <div key={n} style={{ border: `1px solid ${i === 0 ? "var(--noir)" : "var(--ligne)"}`, borderRadius: 16, overflow: "hidden", boxShadow: i === 0 ? "0 0 0 3px rgba(224,33,138,.15)" : undefined }}>
                  <div style={{ position: "relative" }}>
                    <Photo src={src} h={190} pos="center 30%" radius={0} />
                    {late ? <span className="badge b-rouge" style={{ position: "absolute", top: 10, left: 10 }}>{late}</span> : null}
                    <span className="badge" style={{ position: "absolute", top: 10, right: 10, background: "var(--ivoire)" }}>{f}</span>
                    <span style={{ position: "absolute", left: 10, bottom: 8, fontSize: 9.5, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, color: "#fff", background: "rgba(26,18,48,.55)", padding: "2px 6px" }}>Porté par mannequin</span>
                  </div>
                  <div className="row gap12" style={{ padding: "12px 14px" }}>
                    <Person img={student?.photo} ini={studentInitials(n)} size={30} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{n}</div>
                      <div className="muted" style={{ fontSize: 11.5 }}>{t}<br />Déposé le {d}</div>
                    </div>
                    {i === 0 ? <Link className="btn sm terra" href="/formateur/corrections">Corriger</Link> : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row between muted" style={{ padding: "0 24px 18px", fontSize: 12 }}>
            <span>+ 1 rendu STY-1 A · Planche matières</span>
            <Link className="link" href="/formateur/corrections" style={{ color: "var(--noir)" }}>Tout afficher</Link>
          </div>
        </div>
      </div>
    </>
  );
}
