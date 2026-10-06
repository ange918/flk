import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/icon";
import { Avatar, AvatarIni, Logo, Photo } from "@/components/ui";
import { img } from "@/lib/data";

export const metadata: Metadata = { title: "Design system" };

const swatches = [
  ["#E0218A", "Fuchsia", "accent, CTA, titres"],
  ["#FDE8F3", "Muted", "cartes teintées"],
  ["#1A1230", "Ink", "texte, footer"],
  ["#6B6885", "Muted text", "secondaire"],
  ["#FAFAFE", "Surface", "fond"],
  ["#FFFFFF", "Cream", "cartes"],
  ["#16A34A", "Success", "payé"],
  ["#D97706", "Warning", "échéance"],
  ["#DC2626", "Danger", "retard"],
  ["#3B5BDB", "Info", "revue"],
  ["#E8E6F0", "Line", "bordures"],
  ["#F06BAF", "Soft", "hover"],
];

const icons: IconName[] = ["home", "users", "kanban", "cal", "wallet", "receipt", "layers", "image", "upload", "pen", "scissors", "hanger", "ruler", "award", "palette", "wa", "lock", "link"];

export default function DesignSystemPage() {
  return (
    <div className="mesh" style={{ padding: "56px 64px 80px" }}>
      <div className="row between" style={{ alignItems: "flex-end", paddingBottom: 28, gap: 24, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow t">00 — Design system · v2.0</div>
          <h1 className="h-page" style={{ fontSize: 64, marginTop: 14, color: "var(--terra)" }}>
            Le vestiaire <em style={{ color: "var(--noir)" }}>visuel</em><br />de l’académie.
          </h1>
          <p className="muted" style={{ marginTop: 12, fontSize: 15 }}>Style clair · accent fuchsia · Lexend + Manrope · photos en arche</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <Logo size={48} />
          <div className="wl-note" style={{ marginTop: 14 }}>ISDAM — marque blanche personnalisable</div>
        </div>
      </div>

      <Section kicker="01 · Couleurs" text="Fonds blancs / très clairs, un seul accent vif fuchsia, encre sombre pour le texte. Tons fonctionnels pour statuts.">
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 16 }}>
          {swatches.map(([hex, name, use]) => (
            <div key={hex}>
              <div className="swatch" style={{ width: "100%", height: 88, background: hex, marginBottom: 10 }} />
              <div style={{ fontWeight: 700, fontSize: 13 }}>{name}</div>
              <div className="muted" style={{ fontSize: 11 }}>{hex} · {use}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="02 · Typographie" text="Lexend (titres bold, géométrique) · Manrope (corps). Titres grands en fuchsia.">
        <div className="grid" style={{ gridTemplateColumns: "1.3fr 1fr", gap: 40 }}>
          <div className="col gap20">
            <div>
              <span className="eyebrow">Display XL · Lexend 800</span>
              <div className="serif" style={{ fontSize: 72, lineHeight: 0.95, color: "var(--terra)", marginTop: 8 }}>Couture & esprit</div>
            </div>
            <div>
              <span className="eyebrow">H1 · Lexend 800 · 44</span>
              <div className="h-page" style={{ marginTop: 6 }}>Collection capsule 2026</div>
            </div>
            <div>
              <span className="eyebrow">H2 · Lexend 800 · 24</span>
              <div className="serif" style={{ fontSize: 24, marginTop: 6, color: "var(--terra)" }}>Rendus à corriger cette semaine</div>
            </div>
            <div>
              <span className="eyebrow">Chiffres · Lexend 800</span>
              <div className="num" style={{ fontSize: 52, marginTop: 6 }}>
                850 000 <span style={{ fontSize: 18, fontFamily: "var(--sans)", letterSpacing: ".06em", color: "var(--taupe)" }}>FCFA</span>
              </div>
            </div>
          </div>
          <div className="col gap16">
            <div>
              <span className="eyebrow">Body · Manrope 500 · 14/1.6</span>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 6 }}>
                Chaque élève construit un book professionnel validé par ses formateurs, partageable par lien sécurisé auprès des maisons de couture et showrooms.
              </p>
            </div>
            <div>
              <span className="eyebrow">Small · Manrope 600 · 12</span>
              <p className="muted" style={{ fontSize: 12, fontWeight: 600, marginTop: 6 }}>Déposé le 3 oct. 2026 à 18:42 · 6 fichiers · 84 Mo</p>
            </div>
            <div>
              <span className="eyebrow">Eyebrow · Manrope 700 · 10 · +0.2em</span>
              <div className="eyebrow t" style={{ marginTop: 6 }}>Admissions ouvertes — session janvier 2027</div>
            </div>
            <div className="card p" style={{ background: "var(--terra-pale)", border: "none" }}>
              <span className="eyebrow t">Contraste</span>
              <div style={{ fontSize: 12.5, marginTop: 8, lineHeight: 1.8, color: "var(--noir-3)" }}>
                Ink / surface ≥ 12:1 · Fuchsia #E0218A sur blanc ≥ 4.5:1 (CTA & titres gras) · Texte secondaire #6B6885 sur surface AA.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section kicker="03 · Composants" text="Pills solides fuchsia + outline blanc, cartes soft radius 20, badges teintés, inputs radius 14.">
        <div className="col gap32">
          <div className="row gap12" style={{ flexWrap: "wrap" }}>
            <span className="btn terra lg">Candidater <Icon name="arrow" size={16} /></span>
            <span className="btn lg">Publier le brief</span>
            <span className="btn ghost lg">Enregistrer le brouillon</span>
            <span className="btn light lg">Annuler</span>
            <span className="btn sm"><Icon name="plus" size={14} /> Ajouter</span>
            <span className="link">Voir tout le programme</span>
          </div>
          <div className="row gap8" style={{ flexWrap: "wrap" }}>
            <span className="badge b-olive"><i className="dot" />Payé</span>
            <span className="badge b-ocre"><i className="dot" />Échéance proche</span>
            <span className="badge b-rouge"><i className="dot" />En retard · 21 j</span>
            <span className="badge b-indigo"><i className="dot" />En revue</span>
            <span className="badge b-terra">Stylisme</span>
            <span className="badge b-noir">Validé au book</span>
            <span className="badge b-line">STY-2 · 2026–27</span>
            <span className="op-badge">MTN MoMo</span>
            <span className="op-badge">Moov Money</span>
            <span className="op-badge">FedaPay</span>
            <span className="op-badge">CinetPay</span>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            <div><label className="lb">Nom complet</label><div className="input">Nadège Akpovi</div></div>
            <div><label className="lb">Téléphone (WhatsApp)</label><div className="input focus">+229 01 66 24 81 07</div></div>
            <div><label className="lb">Filière</label><div className="input row between">Stylisme & Création de mode <Icon name="arrow" size={14} /></div></div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            <div className="card p" style={{ background: "var(--terra-pale)", border: "none" }}>
              <div className="eyebrow t">Taux de recouvrement</div>
              <div className="num" style={{ fontSize: 44, marginTop: 8, color: "var(--terra)" }}>74,2<span style={{ fontSize: 22 }}>%</span></div>
              <div className="bar t" style={{ marginTop: 12 }}><i style={{ width: "74%" }} /></div>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <Photo src={img.lookKente} h={150} pos="center 30%" arch />
              <div style={{ padding: "14px 16px" }}>
                <div className="serif" style={{ fontSize: 16 }}>Look 02 — Kenté urbain</div>
                <div className="muted" style={{ fontSize: 12 }}>Fifamè Dossou · STY-2</div>
              </div>
            </div>
            <div className="card p col gap12">
              <div className="row gap12">
                <Avatar src={img.nadege} size={40} />
                <div>
                  <div style={{ fontWeight: 700 }}>Nadège Akpovi</div>
                  <div className="muted" style={{ fontSize: 12 }}>Élève · STY-2</div>
                </div>
              </div>
              <div className="row gap8">
                <AvatarIni initials="PK" /><AvatarIni initials="CA" /><AvatarIni initials="FG" />
                <span className="muted" style={{ fontSize: 12 }}>Avatars à initiales si pas de photo</span>
              </div>
            </div>
            <div className="card p col gap12">
              <div className="row gap8"><Icon name="upload" size={18} /><b>Zone de dépôt</b></div>
              <div className="muted" style={{ border: "1.5px dashed var(--ligne-fonce)", borderRadius: 16, padding: 18, textAlign: "center", fontSize: 12, background: "var(--terra-pale)" }}>
                Glissez vos fichiers HD<br />JPG, PNG, PDF · 200 Mo max
              </div>
            </div>
          </div>
          <div className="row gap24" style={{ color: "var(--noir-3)", flexWrap: "wrap" }}>
            {icons.map((name) => <Icon key={name} name={name} size={22} />)}
            <span className="muted" style={{ fontSize: 12 }}>Icônes trait 1.6 px</span>
          </div>
        </div>
      </Section>

      <Section kicker="04 · Photos en arche" text="Portraits et looks recadrés en arche (arch-diamond). Ateliers et wax en cartes radius 20. Légendes petites capitales.">
        <div className="grid" style={{ gridTemplateColumns: "1.1fr 1fr 1fr", gap: 20, alignItems: "end" }}>
          <div className="col gap8">
            <Photo src={img.nadege} h={320} pos="center 20%" arch />
            <span className="cap">ÉLÈVE · NADÈGE AKPOVI · STY-2</span>
          </div>
          <div className="col gap8">
            <Photo src={img.ornella} h={280} pos="center 15%" arch />
            <span className="cap">FORMATRICE · ORNELLA SOSSA</span>
          </div>
          <div className="col gap8">
            <Photo src={img.wax4} h={220} />
            <span className="cap">MOTIF WAX · ATELIER</span>
          </div>
        </div>
      </Section>
      <p className="ex-note" style={{ marginTop: 48 }}>Données d’exemple — ISDAM · design system v2</p>
    </div>
  );
}

function Section({ kicker, text, children }: { kicker: string; text: string; children: React.ReactNode }) {
  return (
    <>
      <div className="rule-l" style={{ margin: "48px 0" }} />
      <div className="grid" style={{ gridTemplateColumns: "minmax(180px, 220px) 1fr", gap: 40 }}>
        <div>
          <div className="eyebrow t">{kicker}</div>
          <p className="muted" style={{ marginTop: 10, fontSize: 13, lineHeight: 1.7 }}>{text}</p>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
