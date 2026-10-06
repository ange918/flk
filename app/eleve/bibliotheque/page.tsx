import type { Metadata } from "next";
import { LibraryView } from "@/components/library";

export const metadata: Metadata = { title: "Bibliothèque" };

export default function EleveBiblio() {
  return <LibraryView />;
}
