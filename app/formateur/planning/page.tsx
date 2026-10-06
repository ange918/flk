import type { Metadata } from "next";
import Link from "next/link";
import { CAL_EVENTS } from "@/lib/data";

export const metadata: Metadata = { title: "Planning formateur" };

const DAYS = ["Lundi 5", "Mardi 6", "Mercredi 7", "Jeudi 8", "Vendredi 9", "Samedi 10"];

export default function PlanningFormateur() {
  const mine = CAL_EVENTS.filter((e) => e.teacher === "O. Sossa");
  return (
    <>
      <div className="eyebrow t">Semaine 41 · Ornella Sossa</div>
      <h1 className="h-page" style={{ marginTop: 10 }}>Mon planning</h1>
      <div className="col" style={{ marginTop: 24, gap: 10 }}>
        {mine.map((e) => (
          <div key={e.title + e.day} className="card row between" style={{ padding: "16px 18px", gap: 12 }}>
            <div>
              <div className="eyebrow">{DAYS[e.day]} · {String(e.start).replace(".", "h")}–{String(e.end).replace(".", "h")}</div>
              <b>{e.title}</b>
              <div className="muted" style={{ fontSize: 12.5 }}>{e.room}</div>
            </div>
            {e.day === 1 && e.start === 8 ? <Link className="btn sm" href="/formateur/appel">Faire l’appel</Link> : <span className="badge b-line">{e.promo}</span>}
          </div>
        ))}
      </div>
    </>
  );
}
