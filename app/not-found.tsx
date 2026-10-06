import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mesh" style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 32 }}>
      <div style={{ textAlign: "center" }}>
        <div className="eyebrow t">404</div>
        <h1 className="h-page" style={{ marginTop: 12 }}>Cette page n’est pas dans le vestiaire.</h1>
        <Link className="btn terra" style={{ marginTop: 24 }} href="/">Retour à la vitrine</Link>
      </div>
    </div>
  );
}
