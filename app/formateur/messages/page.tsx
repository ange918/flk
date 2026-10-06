import type { Metadata } from "next";
import { Avatar } from "@/components/ui";
import { img } from "@/lib/data";

export const metadata: Metadata = { title: "Messages" };

const threads = [
  [img.nadege, "Nadège Akpovi", "Je passe à la permanence de 16 h pour l’encolure.", "15:02"],
  [img.marius, "Marius Hounkpatin", "Le look 01 est déposé, 7 fichiers.", "hier"],
  [img.victoire, "Victoire Ahouansou", "Commission jeudi 8 oct. à 10:00 — merci de préparer les grilles.", "lun."],
];

export default function MessagesFormateur() {
  return (
    <>
      <div className="eyebrow t">2 non lus</div>
      <h1 className="h-page" style={{ marginTop: 10 }}>Messages</h1>
      <div className="card" style={{ marginTop: 24, background: "#fff" }}>
        {threads.map(([photo, name, text, when]) => (
          <div key={name} className="row gap12" style={{ padding: "16px 20px", borderBottom: "1px solid var(--ligne)" }}>
            <Avatar src={photo} size={42} />
            <div style={{ flex: 1 }}>
              <div className="row between"><b>{name}</b><span className="muted" style={{ fontSize: 12 }}>{when}</span></div>
              <div className="muted" style={{ fontSize: 13 }}>{text}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
