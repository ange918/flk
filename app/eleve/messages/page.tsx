import type { Metadata } from "next";
import { Avatar } from "@/components/ui";
import { img } from "@/lib/data";

export const metadata: Metadata = { title: "Messages élève" };

export default function EleveMessages() {
  return (
    <>
      <div className="eyebrow t">Boîte de réception</div>
      <h1 className="h-page" style={{ marginTop: 10 }}>Messages</h1>
      <div className="card" style={{ marginTop: 24, background: "#fff" }}>
        {[
          [img.ornella, "Ornella Sossa", "Très beau parti pris sur les volumes — la manche fonctionne.", "15:02"],
          [img.rodrigue, "Rodrigue Agbossou", "Fiche technique look 02 : pense à la gradation T36–T42.", "hier"],
          [img.victoire, "Service scolarité", "Reçu ISD-REC-2026-0418 disponible.", "5 oct."],
        ].map(([photo, name, text, when]) => (
          <div key={name} className="row gap12" style={{ padding: "16px 20px", borderBottom: "1px solid var(--ligne)" }}>
            <Avatar src={photo} size={42} />
            <div style={{ flex: 1 }}>
              <div className="row between"><b>{name}</b><span className="muted" style={{ fontSize: 12 }}>{when}</span></div>
              <div className="muted">{text}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
