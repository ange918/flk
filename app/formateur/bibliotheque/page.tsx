import type { Metadata } from "next";
import { LibraryView } from "@/components/library";

export const metadata: Metadata = { title: "Bibliothèque formateur" };

export default function FormateurBiblio() {
  return <LibraryView />;
}
