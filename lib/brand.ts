export const BRAND = {
  name: "ISDAM",
  tagline: "École de mode & stylisme",
  city: "Cotonou",
  addr: "Lot 214, Haie Vive — Cotonou, Bénin",
  tel: "+229 01 97 45 12 30",
  mail: "admissions@isdam.app",
  domain: "isdam.app",
  mono: "Is",
} as const;

export function fcfaN(n: number) {
  return n.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ");
}

export function fcfa(n: number) {
  return `${fcfaN(n)} FCFA`;
}

export function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * TODO: brancher le client Supabase (auth, storage, Postgres, RLS multi-tenant).
 * Cette version frontend ne parle à aucun backend.
 */
export const supabaseStub = null;

/**
 * TODO: initier un paiement FedaPay, CinetPay ou Stripe.
 * L’interface simule uniquement la confirmation — aucun appel réseau.
 */
export function createPaymentIntent(input: { amount: number; method: string; reference: string }) {
  return { status: "ui-only" as const, ...input };
}
