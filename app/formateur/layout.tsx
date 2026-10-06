"use client";

import { usePathname } from "next/navigation";
import { AppShell } from "@/components/shell";

export default function FormateurLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/formateur/appel")) return <>{children}</>;
  return <AppShell role="formateur">{children}</AppShell>;
}
