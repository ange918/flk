"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Icon, StatusGlyphs } from "@/components/icon";
import { PhoneStage } from "@/components/shell";
import { Person } from "@/components/ui";
import { STY2, studentInitials } from "@/lib/data";

type Mark = "P" | "R" | "A";

export default function AppelPage() {
  const list = STY2.slice(0, 12);
  const [marks, setMarks] = useState<Record<string, Mark>>({ "Romaric Adjovi": "R", "Edwige Kakpo": "A" });
  const [validated, setValidated] = useState(false);
  const counts = useMemo(() => {
    const all = list.map((s) => marks[s.name] ?? "P");
    return { P: all.filter((m) => m === "P").length, R: all.filter((m) => m === "R").length, A: all.filter((m) => m === "A").length };
  }, [list, marks]);

  return (
    <PhoneStage>
      <div className="status"><span>9:41</span><StatusGlyphs /></div>
      <div style={{ padding: "6px 20px 16px", borderBottom: "1px solid var(--ligne)" }}>
        <div className="row between">
          <Link href="/formateur"><Icon name="arrowl" size={22} /></Link>
          <span className="eyebrow">Appel · émargement</span>
          <Icon name="more" size={22} />
        </div>
        <div className="serif" style={{ fontSize: 30, lineHeight: 1.05, marginTop: 16 }}>STY-2 · Croquis<br />de <em className="serif-i">mode</em></div>
        <div className="muted" style={{ fontSize: 12.5, marginTop: 6 }}>Mar. 6 oct. 2026 · 08:00 – 10:00 · Salle Croquis</div>
        <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 16, border: "1px solid var(--ligne)" }}>
          {[[String(counts.P), "Présents", ""], [String(counts.R), "Retard", "var(--ocre)"], [String(counts.A), "Absent", "var(--rouge)"]].map(([a, b, c], i) => (
            <div key={b} style={{ padding: 10, textAlign: "center", borderLeft: i ? "1px solid var(--ligne)" : undefined }}>
              <div className="num" style={{ fontSize: 26, color: c || undefined }}>{a}</div>
              <div className="muted" style={{ fontSize: 11 }}>{b}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="row between" style={{ padding: "12px 20px", background: "var(--papier)", borderBottom: "1px solid var(--ligne)", fontSize: 12.5 }}>
        <span className="row gap8"><span className="check on"><Icon name="check" size={11} stroke={3} /></span>Tous présents par défaut</span>
        <span className="link">QR de présence</span>
      </div>
      <div style={{ padding: "0 20px" }}>
        {list.map((s) => {
          const v = marks[s.name] ?? "P";
          return (
            <div key={s.name} className="row gap12" style={{ padding: "11px 0", borderBottom: "1px solid var(--ligne)" }}>
              <Person img={s.photo} ini={studentInitials(s.name)} size={40} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{s.name}</div>
                <div className="muted" style={{ fontSize: 11.5 }}>{v === "R" ? "Arrivé à 08:22" : v === "A" ? "Absence justifiée · certificat" : s.gender === "F" ? "Présente" : "Présent"}</div>
              </div>
              <div className="row" style={{ border: "1px solid var(--ligne)", borderRadius: 999, overflow: "hidden" }}>
                {(["P", "R", "A"] as Mark[]).map((k) => (
                  <button key={k} onClick={() => setMarks((m) => ({ ...m, [s.name]: k }))} style={{ width: 44, height: 44, fontSize: 13, fontWeight: 800, background: k === v ? (k === "P" ? "var(--noir)" : k === "R" ? "var(--ocre)" : "var(--rouge)") : "transparent", color: k === v ? "#fff" : "var(--taupe)" }}>{k}</button>
                ))}
              </div>
            </div>
          );
        })}
        <div className="muted" style={{ textAlign: "center", fontSize: 12, padding: 14 }}>+ {STY2.length - list.length} autres élèves</div>
      </div>
      <div style={{ padding: "14px 20px 18px", background: "var(--ivoire)", borderTop: "1px solid var(--ligne)" }}>
        <div className="row gap8 muted" style={{ fontSize: 11.5, marginBottom: 10 }}><Icon name="shield" size={14} /> Hors ligne OK — synchronisation au retour du réseau</div>
        <button className="btn terra lg" style={{ width: "100%" }} onClick={() => setValidated(true)}>
          <Icon name="check" size={16} /> {validated ? "Appel validé" : `Valider l’appel · ${counts.P + counts.R}/${list.length}`}
        </button>
      </div>
      <nav className="tabbar">
        {([
          ["home", "Accueil", "/formateur"],
          ["cal", "Planning", "/formateur/planning"],
          ["check", "Appel", "/formateur/appel"],
          ["pen", "Corrections", "/formateur/corrections"],
          ["user", "Profil", "/connexion"],
        ] as const).map(([i, l, href]) => (
          <Link key={l} href={href} className={l === "Appel" ? "on" : ""}><Icon name={i} size={21} /><span>{l}</span></Link>
        ))}
      </nav>
    </PhoneStage>
  );
}
