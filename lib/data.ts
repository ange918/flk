import { initials } from "./brand";

export const img = {
  victoire: "/media/p007.jpg",
  ornella: "/media/p008.jpg",
  rodrigue: "/media/p062.jpg",
  euloge: "/media/p067.jpg",
  serge: "/media/p046.jpg",
  nadege: "/media/p141.jpg",
  fifame: "/media/p006.jpg",
  aicha: "/media/p146.jpg",
  marius: "/media/p171.jpg",
  kevin: "/media/p174.jpg",
  romaric: "/media/p184.jpg",
  grace: "/media/p057.jpg",
  atelierGroupe: "/media/p069.jpg",
  atelierPiquage: "/media/p072.jpg",
  atelierNB: "/media/p063.jpg",
  atelierTransmission: "/media/p065.jpg",
  studio: "/media/p189.jpg",
  machine: "/media/p076.jpg",
  craie: "/media/p078.jpg",
  coupe: "/media/p204.jpg",
  broderie: "/media/p205.jpg",
  patron: "/media/p209.jpg",
  croquisMain: "/media/p188.jpg",
  croquisMur: "/media/p101.jpg",
  lookOrange: "/media/p016.jpg",
  lookKente: "/media/p015.jpg",
  lookPagne: "/media/p017.jpg",
  lookJaune: "/media/p018.jpg",
  lookWax: "/media/p043.jpg",
  lookTerre: "/media/p044.jpg",
  lookDos: "/media/p097.jpg",
  lookTulle: "/media/p160.jpg",
  runway: "/media/p195.jpg",
  lookRaye: "/media/p029.jpg",
  lookBantu: "/media/p005.jpg",
  lookOmbrelle: "/media/p004.jpg",
  lookCape: "/media/p010.jpg",
  wax1: "/media/p024.jpg",
  wax2: "/media/p025.jpg",
  wax3: "/media/p036.jpg",
  wax4: "/media/p038.jpg",
  croquis1: "/media/p103.jpg",
  croquis2: "/media/p104.jpg",
  croquis3: "/media/p113.jpg",
  croquis4: "/media/p110.jpg",
} as const;

export type Formation = {
  code: string;
  nom: string;
  duree: string;
  rythme: string;
  tarif: number;
  unite: string;
  diplome: string;
  img: string;
  pos: string;
  places: number;
  rentree: string;
  modules: string[];
};

export const FORMATIONS: Formation[] = [
  {
    code: "STY",
    nom: "Stylisme & Création de mode",
    duree: "2 ans",
    rythme: "Temps plein · 28 h/sem.",
    tarif: 850000,
    unite: "/ an",
    diplome: "Diplôme d'établissement — niveau Bac +2",
    img: img.lookOrange,
    pos: "center 30%",
    places: 24,
    rentree: "11 janvier 2027",
    modules: ["Dessin de mode & croquis", "Histoire de la mode africaine", "Recherche tendances & planches", "Collection capsule", "Stylisme photo", "Défilé de fin d’année"],
  },
  {
    code: "MOD",
    nom: "Modélisme & Patronage",
    duree: "18 mois",
    rythme: "Temps plein · 30 h/sem.",
    tarif: 720000,
    unite: "/ an",
    diplome: "Certificat professionnel",
    img: img.patron,
    pos: "center",
    places: 20,
    rentree: "11 janvier 2027",
    modules: ["Patronage à plat", "Moulage sur buste", "Gradation des tailles", "Fiches techniques", "Industrialisation"],
  },
  {
    code: "TEX",
    nom: "Design Textile & Wax",
    duree: "1 an",
    rythme: "Temps plein · 24 h/sem.",
    tarif: 600000,
    unite: "",
    diplome: "Certificat professionnel",
    img: img.wax4,
    pos: "center",
    places: 16,
    rentree: "11 janvier 2027",
    modules: ["Motif & répétition", "Teinture naturelle & indigo", "Batik et impression", "Tissage traditionnel", "Développement d’un imprimé"],
  },
  {
    code: "CTA",
    nom: "Couture & Techniques d’atelier",
    duree: "9 mois",
    rythme: "Temps plein · 30 h/sem.",
    tarif: 380000,
    unite: "",
    diplome: "Attestation de formation",
    img: img.atelierPiquage,
    pos: "center",
    places: 24,
    rentree: "11 janvier 2027",
    modules: ["Machines & piquage", "Assemblage & finitions", "Retouches", "Tenues traditionnelles"],
  },
  {
    code: "SPI",
    nom: "Stylisme photo & Image de mode",
    duree: "6 mois",
    rythme: "Soir & samedi · 10 h/sem.",
    tarif: 290000,
    unite: "",
    diplome: "Certificat",
    img: img.lookCape,
    pos: "center 25%",
    places: 14,
    rentree: "1er février 2027",
    modules: ["Direction artistique", "Shooting studio & extérieur", "Réseaux sociaux & lookbook"],
  },
  {
    code: "ACC",
    nom: "Masterclass Accessoires & Maroquinerie",
    duree: "3 mois",
    rythme: "Samedi · 6 h/sem.",
    tarif: 175000,
    unite: "",
    diplome: "Attestation",
    img: img.lookPagne,
    pos: "center 30%",
    places: 12,
    rentree: "6 février 2027",
    modules: ["Coiffes & foulards", "Perlage", "Petite maroquinerie"],
  },
];

export type Student = { name: string; gender: "F" | "M"; photo?: string; promo: string };

const sty2Names: [string, "F" | "M", string?][] = [
  ["Nadège Akpovi", "F", img.nadege],
  ["Fifamè Dossou", "F", img.fifame],
  ["Aïcha Bio", "F", img.aicha],
  ["Marius Hounkpatin", "M", img.marius],
  ["Romaric Adjovi", "M", img.romaric],
  ["Sènami Gbaguidi", "F"],
  ["Carmel Ahodékon", "M"],
  ["Edwige Kakpo", "F"],
  ["Jordy Sagbo", "M"],
  ["Laure Hounkanrin", "F"],
  ["Mireille Zannou", "F"],
  ["Ozias Tchibozo", "M"],
  ["Rachida Moussa", "F"],
  ["Steve Houngbo", "M"],
  ["Tatiana Amoussou", "F"],
  ["Vianney Ogoubiyi", "M"],
  ["Wilfried Agbodjan", "M"],
  ["Yolande Gandonou", "F"],
  ["Hermione Capo-Chichi", "F"],
  ["Brice Aïdji", "M"],
  ["Clémence Fanou", "F"],
  ["Elvire Sossou", "F"],
];

export const STY2: Student[] = sty2Names.map(([name, gender, photo]) => ({
  name,
  gender,
  photo,
  promo: "STY-2",
}));

export const USERS = {
  admin: { name: "Victoire Ahouansou", role: "Directrice", img: img.victoire, pos: "center 20%", email: "direction@isdam.app" },
  formateur: { name: "Ornella Sossa", role: "Formatrice · Stylisme", img: img.ornella, pos: "center 15%", email: "ornella.sossa@isdam.app" },
  eleve: { name: "Nadège Akpovi", role: "Élève · Stylisme 2e année", img: img.nadege, pos: "center 20%", email: "nadege.akpovi@isdam.app" },
} as const;

export type Role = keyof typeof USERS;

export type NavItem =
  | { section: string }
  | { icon: string; label: string; href: string; key: string; count?: number };

export const MENUS: Record<Role, NavItem[]> = {
  admin: [
    { section: "Pilotage" },
    { icon: "home", label: "Tableau de bord", href: "/admin", key: "dash" },
    { icon: "kanban", label: "Candidatures", href: "/admin/candidatures", key: "cand", count: 23 },
    { icon: "users", label: "Élèves", href: "/admin/eleves", key: "eleves" },
    { icon: "cal", label: "Promotions & plannings", href: "/admin/promotions", key: "promo" },
    { icon: "wallet", label: "Scolarités", href: "/admin/scolarites", key: "scol", count: 9 },
    { icon: "layers", label: "Formations", href: "/admin/formations", key: "form" },
    { section: "Équipe" },
    { icon: "user", label: "Formateurs", href: "/admin/formateurs", key: "formateurs" },
    { icon: "chart", label: "Rapports", href: "/admin/rapports", key: "rap" },
    { section: "Plateforme" },
    { icon: "palette", label: "Marque blanche", href: "/admin/marque-blanche", key: "marque" },
    { icon: "settings", label: "Paramètres", href: "/admin/parametres", key: "param" },
  ],
  formateur: [
    { section: "Enseignement" },
    { icon: "home", label: "Aujourd’hui", href: "/formateur", key: "dash" },
    { icon: "cal", label: "Mon planning", href: "/formateur/planning", key: "plan" },
    { icon: "layers", label: "Briefs", href: "/formateur/briefs", key: "briefs" },
    { icon: "pen", label: "Corrections", href: "/formateur/corrections", key: "corr", count: 7 },
    { icon: "check", label: "Appel & émargement", href: "/formateur/appel", key: "appel" },
    { icon: "chart", label: "Notes", href: "/formateur/notes", key: "notes" },
    { section: "Ressources" },
    { icon: "book", label: "Bibliothèque", href: "/formateur/bibliotheque", key: "biblio" },
    { icon: "chat", label: "Messages", href: "/formateur/messages", key: "msg", count: 2 },
  ],
  eleve: [
    { section: "Mon parcours" },
    { icon: "home", label: "Accueil", href: "/eleve", key: "dash" },
    { icon: "cal", label: "Planning", href: "/eleve/planning", key: "plan" },
    { icon: "layers", label: "Briefs & rendus", href: "/eleve/briefs", key: "briefs", count: 2 },
    { icon: "image", label: "Mon book", href: "/eleve/book", key: "book" },
    { icon: "award", label: "Notes & bulletins", href: "/eleve/bulletin", key: "notes" },
    { section: "Espace" },
    { icon: "book", label: "Ressources", href: "/eleve/bibliotheque", key: "biblio" },
    { icon: "wallet", label: "Paiements", href: "/eleve/paiements", key: "pay" },
    { icon: "chat", label: "Messages", href: "/eleve/messages", key: "msg" },
  ],
};

export const CRUMBS: Record<Role, string> = {
  admin: "Direction",
  formateur: "Espace formateur",
  eleve: "Espace élève",
};

export function activeKey(role: Role, pathname: string) {
  const items = MENUS[role].filter((i): i is Extract<NavItem, { href: string }> => "href" in i);
  const hit = items
    .filter((i) => pathname === i.href || (i.href !== `/${role}` && pathname.startsWith(i.href)))
    .sort((a, b) => b.href.length - a.href.length)[0];
  if (hit) return hit.key;
  if (pathname === `/${role}`) return "dash";
  return "";
}

export const TRAINERS = [
  { name: "Ornella Sossa", role: "Stylisme", hours: "15 h", img: img.ornella, promo: "STY-1 · STY-2 · SPI-26" },
  { name: "Rodrigue Agbossou", role: "Modélisme", hours: "19 h", img: img.rodrigue, promo: "MOD-1 · STY-2" },
  { name: "Euloge Kpadonou", role: "Design textile", hours: "10 h", img: img.euloge, promo: "TEX-26" },
  { name: "Serge Dossa", role: "Couture traditionnelle", hours: "13 h", img: img.serge, promo: "CTA-26" },
  { name: "Victoire Ahouansou", role: "Direction", hours: "—", img: img.victoire, promo: "Pilotage" },
];

export type KanbanCard = {
  id: string;
  ini: string;
  name: string;
  filiere: string;
  date: string;
  docs: string;
  score?: string;
  extra?: string;
  column: "recue" | "revue" | "acceptee" | "refusee";
  age?: string;
  city?: string;
  phone?: string;
  paid?: string;
  letter?: string;
  reviewers?: string;
};

export const KANBAN: KanbanCard[] = [
  { id: "YS", ini: "YS", name: "Yasmine Soglo", filiere: "Stylisme & Création", date: "3 oct.", docs: "4/5 pièces", column: "recue", extra: "Frais en attente" },
  { id: "FG", ini: "FG", name: "Florent Gnonlonfoun", filiere: "Modélisme & Patronage", date: "5 oct.", docs: "5/5 pièces", column: "recue" },
  { id: "IA", ini: "IA", name: "Inès Assogba", filiere: "Stylisme photo", date: "5 oct.", docs: "5/5 pièces", column: "recue" },
  { id: "UT", ini: "UT", name: "Ulrich Togbé", filiere: "Couture & Techniques", date: "4 oct.", docs: "3/5 pièces", column: "recue", extra: "Pièces manquantes" },
  { id: "CA", ini: "CA", name: "Chimène Adandé", filiere: "Stylisme & Création", date: "5 oct.", docs: "5/5 pièces", score: "16,5 / 20", column: "revue", extra: "Entretien jeu. 8 oct. · 10:00", age: "19 ans", city: "Porto-Novo", phone: "+229 01 66 52 09 14", paid: "15 000 F · MoMo · 5 oct.", letter: "412 car. · lue", reviewers: "O. Sossa · R. Agbossou" },
  { id: "ED", ini: "ED", name: "Ezéchiel Dah", filiere: "Couture & Techniques", date: "2 oct.", docs: "5/5 pièces", score: "14 / 20", column: "revue" },
  { id: "MA", ini: "MA", name: "Merveille Adjahi", filiere: "Design Textile & Wax", date: "1er oct.", docs: "5/5 pièces", score: "15,5 / 20", column: "revue", extra: "Entretien jeu. 8 oct. · 11:30" },
  { id: "RA", ini: "RA", name: "Ruth Agossou", filiere: "Design Textile & Wax", date: "4 oct.", docs: "Acompte payé", score: "17 / 20", column: "acceptee", extra: "Inscrite · TEX-27" },
  { id: "AQ", ini: "AQ", name: "Arnaud Quenum", filiere: "Modélisme & Patronage", date: "29 sept.", docs: "Acompte en attente", score: "15 / 20", column: "acceptee", extra: "Acompte avant le 20 oct." },
  { id: "JA", ini: "JA", name: "Josiane Ahyi", filiere: "Stylisme & Création", date: "28 sept.", docs: "Acompte payé", score: "18 / 20", column: "acceptee", extra: "Inscrite · STY-1 B" },
  { id: "DH", ini: "DH", name: "Désiré Hounsou", filiere: "Stylisme photo", date: "26 sept.", docs: "Dossier incomplet", score: "9 / 20", column: "refusee" },
  { id: "BL", ini: "BL", name: "Bénédicte Lokossou", filiere: "Modélisme & Patronage", date: "25 sept.", docs: "Redirigée vers CTA", score: "11 / 20", column: "refusee", extra: "Proposition alternative" },
];

export const RECENT_CANDIDATES = [
  { ini: "CA", name: "Chimène Adandé", filiere: "Stylisme & Création", date: "5 oct. · 15:12", status: "En revue", tone: "b-indigo", paid: true },
  { ini: "FG", name: "Florent Gnonlonfoun", filiere: "Modélisme & Patronage", date: "5 oct. · 09:40", status: "Reçue", tone: "", paid: true },
  { ini: "RA", name: "Ruth Agossou", filiere: "Design Textile & Wax", date: "4 oct. · 18:05", status: "Acceptée", tone: "b-olive", paid: true },
  { ini: "YS", name: "Yasmine Soglo", filiere: "Stylisme & Création", date: "3 oct. · 11:22", status: "Reçue", tone: "", paid: false },
  { ini: "ED", name: "Ezéchiel Dah", filiere: "Couture & Techniques", date: "2 oct. · 16:48", status: "En revue", tone: "b-indigo", paid: true },
];

export const LATE_FEES = [
  { img: img.romaric, name: "Romaric Adjovi", plan: "STY-2 · mensuel", detail: "Sept. + oct. · 170 000 F", delay: "31 j" },
  { ini: "PK", name: "Prudence Kiki", plan: "MOD-1 · 3 tranches", detail: "Acompte · 216 000 F", delay: "24 j" },
  { img: img.aicha, name: "Aïcha Bio", plan: "STY-2 · mensuel", detail: "Octobre · 85 000 F", delay: "1 j" },
  { ini: "GH", name: "Gildas Houéto", plan: "CTA-26 · 3 tranches", detail: "Acompte · 114 000 F", delay: "18 j" },
];

export const PROMOS = [
  { code: "STY-2", nom: "Stylisme · 2e année", eleves: 22, cap: 24, formateur: "O. Sossa", img: img.ornella, salle: "Atelier Ganvié", on: true },
  { code: "STY-1 A", nom: "Stylisme · 1re année", eleves: 24, cap: 24, formateur: "O. Sossa", img: img.ornella, salle: "Salle Croquis" },
  { code: "MOD-1", nom: "Modélisme & Patronage", eleves: 19, cap: 20, formateur: "R. Agbossou", img: img.rodrigue, salle: "Atelier Ouidah" },
  { code: "TEX-26", nom: "Design textile & Wax", eleves: 15, cap: 16, formateur: "E. Kpadonou", img: img.euloge, salle: "Labo textile" },
  { code: "CTA-26", nom: "Couture & Techniques", eleves: 23, cap: 24, formateur: "S. Dossa", img: img.serge, salle: "Atelier Piquage" },
  { code: "SPI-26", nom: "Image de mode · soir", eleves: 11, cap: 14, formateur: "O. Sossa", img: img.ornella, salle: "Studio Lumière" },
];

export const PROMO_COLORS: Record<string, [string, string]> = {
  STY: ["#E0218A", "#fff"],
  MOD: ["#1A1230", "#fff"],
  TEX: ["#DCFCE7", "#166534"],
  CTA: ["#FDE8F3", "#9D174D"],
  SPI: ["#DBEAFE", "#1E40AF"],
};

export type CalEvent = {
  day: number;
  start: number;
  end: number;
  promo: keyof typeof PROMO_COLORS;
  title: string;
  room: string;
  teacher: string;
  conflict?: boolean;
  lane: number;
  lanes: number;
};

export const CAL_EVENTS: CalEvent[] = [
  { day: 0, start: 8, end: 12, promo: "STY", title: "STY-2 · Collection capsule", room: "Atelier Ganvié", teacher: "O. Sossa", lane: 0, lanes: 2 },
  { day: 0, start: 8, end: 12, promo: "MOD", title: "MOD-1 · Patronage à plat", room: "Atelier Ouidah", teacher: "R. Agbossou", lane: 1, lanes: 2 },
  { day: 0, start: 13, end: 17, promo: "TEX", title: "TEX-26 · Teinture indigo", room: "Labo textile", teacher: "E. Kpadonou", lane: 0, lanes: 1 },
  { day: 1, start: 8, end: 10, promo: "STY", title: "STY-2 · Croquis de mode", room: "Salle Croquis", teacher: "O. Sossa", lane: 0, lanes: 2 },
  { day: 1, start: 10.5, end: 12.5, promo: "STY", title: "STY-1 · Histoire de la mode", room: "Salle Croquis", teacher: "O. Sossa", lane: 0, lanes: 2 },
  { day: 1, start: 8, end: 12, promo: "CTA", title: "CTA-26 · Piquage", room: "Atelier Piquage", teacher: "S. Dossa", lane: 1, lanes: 2 },
  { day: 1, start: 14, end: 17, promo: "MOD", title: "MOD-1 · Moulage buste", room: "Atelier Ouidah", teacher: "R. Agbossou", lane: 0, lanes: 1 },
  { day: 2, start: 8, end: 12, promo: "STY", title: "STY-2 · Atelier assemblage", room: "Atelier Ganvié", teacher: "R. Agbossou", lane: 0, lanes: 1 },
  { day: 2, start: 13, end: 16, promo: "TEX", title: "TEX-26 · Motif & répétition", room: "Labo textile", teacher: "E. Kpadonou", lane: 0, lanes: 2 },
  { day: 2, start: 14, end: 17, promo: "CTA", title: "CTA-26 · Finitions", room: "Atelier Piquage", teacher: "S. Dossa", lane: 1, lanes: 2 },
  { day: 3, start: 8, end: 12, promo: "MOD", title: "MOD-1 · Gradation", room: "Atelier Ouidah", teacher: "R. Agbossou", lane: 0, lanes: 1 },
  { day: 3, start: 14, end: 17, promo: "STY", title: "STY-2 · Corrections capsule", room: "Atelier Ganvié", teacher: "O. Sossa", lane: 0, lanes: 2 },
  { day: 3, start: 14, end: 16, promo: "CTA", title: "CTA-26 · Retouches", room: "Atelier Ganvié", teacher: "S. Dossa", conflict: true, lane: 1, lanes: 2 },
  { day: 4, start: 8, end: 12, promo: "STY", title: "STY-1 · Couture de base", room: "Atelier Piquage", teacher: "S. Dossa", lane: 0, lanes: 2 },
  { day: 4, start: 9, end: 12, promo: "TEX", title: "TEX-26 · Batik", room: "Labo textile", teacher: "E. Kpadonou", lane: 1, lanes: 2 },
  { day: 4, start: 13, end: 17, promo: "STY", title: "STY-2 · Fiches techniques", room: "Salle Croquis", teacher: "R. Agbossou", lane: 0, lanes: 1 },
  { day: 5, start: 9, end: 13, promo: "SPI", title: "SPI-26 · Shooting studio", room: "Studio Lumière", teacher: "O. Sossa", lane: 0, lanes: 1 },
];

export type TuitionRow = {
  img?: string;
  ini?: string;
  name: string;
  promo: string;
  plan: string;
  paid: number;
  total: number;
  next: string;
  status: string;
  tone: string;
  selected?: boolean;
};

export const TUITION: TuitionRow[] = [
  { img: img.nadege, name: "Nadège Akpovi", promo: "STY-2", plan: "3 tranches", paid: 552500, total: 850000, next: "15 janv. 2027 · 297 500 F", status: "À jour", tone: "b-olive" },
  { img: img.fifame, name: "Fifamè Dossou", promo: "STY-2", plan: "3 tranches", paid: 255000, total: 850000, next: "15 oct. 2026 · 297 500 F", status: "Échéance J−9", tone: "b-ocre" },
  { img: img.marius, name: "Marius Hounkpatin", promo: "STY-2", plan: "3 tranches", paid: 552500, total: 850000, next: "15 janv. 2027 · 297 500 F", status: "À jour", tone: "b-olive" },
  { img: img.romaric, name: "Romaric Adjovi", promo: "STY-2", plan: "Mensuel 10×", paid: 0, total: 850000, next: "Sept. + oct. · 170 000 F", status: "Retard 31 j", tone: "b-rouge", selected: true },
  { img: img.aicha, name: "Aïcha Bio", promo: "STY-2", plan: "Mensuel 10×", paid: 85000, total: 850000, next: "5 oct. 2026 · 85 000 F", status: "Retard 1 j", tone: "b-rouge" },
  { img: img.kevin, name: "Kévin Zinsou", promo: "MOD-1", plan: "3 tranches", paid: 216000, total: 720000, next: "15 oct. 2026 · 252 000 F", status: "Échéance J−9", tone: "b-ocre" },
  { ini: "PK", name: "Prudence Kiki", promo: "MOD-1", plan: "3 tranches", paid: 0, total: 720000, next: "Acompte · 216 000 F", status: "Retard 24 j", tone: "b-rouge" },
  { ini: "SG", name: "Sènami Gbaguidi", promo: "STY-2", plan: "Comptant", paid: 850000, total: 850000, next: "—", status: "Soldé", tone: "b-noir" },
  { ini: "GH", name: "Gildas Houéto", promo: "CTA-26", plan: "3 tranches", paid: 0, total: 380000, next: "Acompte · 114 000 F", status: "Retard 18 j", tone: "b-rouge" },
];

export const BOOK = [
  { src: img.lookOrange, title: "Look 03 — Drapé fuchsia", meta: "Collection Capsule · 2026", pos: "center 30%", h: 420, cover: true },
  { src: img.lookTulle, title: "Tulle céladon", meta: "Projet volume · 2026", pos: "center 30%", h: 300 },
  { src: img.croquis2, title: "Robe fleurs de coton", meta: "Croquis · 2026", pos: "center", h: 340 },
  { src: img.lookJaune, title: "Wax & coiffe soleil", meta: "Stylisme photo · 2026", pos: "center 30%", h: 300 },
  { src: img.croquis3, title: "Manteau rouille", meta: "Croquis · 2026", pos: "center", h: 360 },
  { src: img.lookTerre, title: "Terre de barre", meta: "Capsule · recherche · 2026", pos: "center 30%", h: 420 },
  { src: img.broderie, title: "Point de croix — détail", meta: "Finitions · 2026", pos: "center", h: 240 },
  { src: img.lookOmbrelle, title: "Ombrelle & bustier", meta: "Défilé 1re année · 2026", pos: "center 30%", h: 380 },
  { src: img.croquis1, title: "Robe chemisier", meta: "Croquis · 2025", pos: "center", h: 300 },
];

export const RESOURCES = [
  { src: img.patron, cat: "Gabarit", title: "Patron de base jupe droite — T34 à T48", meta: "PDF · A0 + tuilé A4 · 4,2 Mo", icon: "file" as const },
  { src: img.croquis4, cat: "Gabarit", title: "Silhouettes 9 têtes femme & homme", meta: "PDF · 12 pages · 3,4 Mo", icon: "file" as const },
  { src: img.atelierTransmission, cat: "Vidéo", title: "Masterclass : monter une manche gigot", meta: "24 min · C. Hounnou (invité)", icon: "video" as const },
  { src: img.craie, cat: "Vidéo", title: "Traçage et mise en place sur tissu", meta: "12 min · atelier Modélisme", icon: "video" as const },
  { src: img.wax2, cat: "Moodboard", title: "Wax & pagnes tissés du Bénin — 120 images", meta: "Galerie · E. Kpadonou", icon: "image" as const },
  { src: img.machine, cat: "Fiche", title: "Réglages machine piqueuse plate — tensions", meta: "PDF · 2 pages · 680 Ko", icon: "file" as const },
  { src: img.croquisMain, cat: "Gabarit", title: "Fiche technique école — modèle A3", meta: "PDF + Figma · 1,2 Mo", icon: "file" as const },
  { src: img.atelierNB, cat: "Vidéo", title: "Finitions : ourlet invisible & surpiqûre", meta: "9 min · atelier Couture", icon: "video" as const },
];

export const NOTES: Record<string, [number, number | null]> = {
  "Nadège Akpovi": [16, 15.6],
  "Fifamè Dossou": [14.5, null],
  "Aïcha Bio": [15, null],
  "Marius Hounkpatin": [17, null],
  "Romaric Adjovi": [12, null],
  "Sènami Gbaguidi": [15.5, null],
  "Carmel Ahodékon": [13, 13.5],
  "Edwige Kakpo": [14, 12.9],
  "Jordy Sagbo": [11.5, 12],
  "Laure Hounkanrin": [16.5, 15.2],
  "Mireille Zannou": [13.5, 14],
};

export function studentInitials(name: string) {
  return initials(name);
}

export const BULLETIN = [
  ["Dessin de mode & croquis", 3, 15.5],
  ["Histoire de la mode africaine", 2, 16],
  ["Couture de base", 3, 13.5],
  ["Moulage sur buste", 2, 14],
  ["Matières, wax & textiles", 2, 15],
  ["Planches tendance", 2, 16.5],
  ["Anglais professionnel", 1, 14],
  ["Projet de fin d’année (défilé)", 4, 15.5],
] as const;

export const SESSION = "janvier 2027";
export const YEAR = "2026–2027";
