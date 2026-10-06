import type { Metadata } from "next";
import { VitrineMobile } from "@/components/vitrine-mobile";

export const metadata: Metadata = { title: "Vitrine mobile" };

export default function VitrineMobilePage() {
  return <VitrineMobile framed />;
}
