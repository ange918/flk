# ISDAM

Frontend de démonstration d’**ISDAM**, plateforme marque blanche pour académies de mode et de stylisme. Interface 100 % française, montants en FCFA, opérateurs Mobile Money en badges texte (MTN MoMo, Moov Money, FedaPay, CinetPay).

Cette version est **frontend uniquement** : données fictives, connexions de démo, paiements simulés. Le backend (Supabase, authentification, encaissements) viendra ensuite.

## Lancer

```bash
npm install
npm run dev
```

Production :

```bash
npm run build
npm start
```

Ouvrir [http://localhost:3000](http://localhost:3000).

Sur téléphone (≤ 760 px) la vitrine reprend la maquette mobile. Les espaces direction, formateur et élève replient la barre latérale dans un menu, avec une barre de navigation en bas. Tableaux, kanban et planning défilent horizontalement ; les formulaires passent sur une colonne.

## Comptes de démo

Sur `/connexion`, choisir un rôle ou saisir l’e-mail. Le mot de passe n’est pas vérifié.

| Rôle | E-mail | Espace |
|------|--------|--------|
| Direction | `direction@isdam.app` | `/admin` |
| Formateur | `ornella.sossa@isdam.app` | `/formateur` |
| Élève | `nadege.akpovi@isdam.app` | `/eleve` |

## Carte des routes

Les écrans suivent les maquettes 00–24 (marque **ISDAM** à la place du placeholder).

| Maquette | Route |
|----------|--------|
| 00 Design system | `/design-system` |
| 01 Vitrine | `/` |
| 02 Vitrine mobile | `/mobile` |
| 03 Catalogue | `/formations` |
| 04 Admission | `/admission` |
| 05 Paiement frais de dossier | `/paiement` |
| 06 Connexion | `/connexion` |
| 07 Direction — tableau de bord | `/admin` |
| 08 Candidatures (kanban) | `/admin/candidatures` |
| 09 Promotions & plannings | `/admin/promotions` |
| 10 Scolarités & relances | `/admin/scolarites` |
| 11 Reçu numérique | `/admin/recu` |
| 12 Marque blanche | `/admin/marque-blanche` |
| 13 Formateur — aujourd’hui | `/formateur` |
| 14 Publication de brief | `/formateur/briefs/nouveau` |
| 15 Correction annotée | `/formateur/corrections` |
| 16 Appel / émargement | `/formateur/appel` |
| 17 Saisie des notes | `/formateur/notes` |
| 18 Élève — accueil | `/eleve` |
| 19 Dépôt de rendu | `/eleve/depot` |
| 20 Book | `/eleve/book` |
| 21 Portfolio public | `/book/nadege-akpovi` |
| 22 Bibliothèque | `/eleve/bibliotheque` |
| 23a Mobile accueil | `/eleve/mobile` |
| 23b Mobile échéancier | `/eleve/echeancier` |
| 24 Bulletin & certificat | `/eleve/bulletin` |

Les menus latéraux ouvrent aussi des listes complémentaires (élèves, formateurs, rapports, messages, plannings, paiements) alimentées par les mêmes données d’exemple.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · Lexend & Manrope.

Couleur d’accent `#E0218A`, encre `#1A1230`, surface `#FAFAFE`. Photos d’exemple dans `public/media`.

## Backend plus tard

Les modules `lib/brand.ts` marquent les points d’accroche :

- client Supabase (auth, fichiers, RLS multi-tenant) ;
- intents de paiement FedaPay, CinetPay ou Stripe — l’UI confirme sans aucun appel réseau.
