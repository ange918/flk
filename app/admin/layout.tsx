"use client";

import { usePathname } from "next/navigation";
import { AppShell } from "@/components/shell";

const BARE = ["/admin/recu"];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (BARE.some((p) => pathname.startsWith(p))) return <>{children}</>;
  return <AppShell role="admin">{children}</AppShell>;
}
