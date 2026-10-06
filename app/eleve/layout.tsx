"use client";

import { usePathname } from "next/navigation";
import { AppShell } from "@/components/shell";

const BARE = ["/eleve/mobile", "/eleve/echeancier", "/eleve/bulletin"];

export default function EleveLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (BARE.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return <>{children}</>;
  return <AppShell role="eleve" search="Rechercher un cours, une ressource…">{children}</AppShell>;
}
