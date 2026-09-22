import { ArrowLeft } from "lucide-react";

export default function Protocols() {
  return (
    <main className="protocols-page">
      <header className="subpage-header">
        <a className="brand" href="/" aria-label="Functional Perturbation Laboratory home">
          <img className="nygc-logo" src="/nygc-logo.png" alt="New York Genome Center" />
          <span className="brand-copy">
            <strong>Functional Perturbation Laboratory - New York Genome Center</strong>
          </span>
        </a>
      </header>

      <section className="protocols-hero">
        <a className="back-link" href="/#tools"><ArrowLeft size={17} /> Resources</a>
        <p className="eyebrow"><span /> Resources</p>
        <h1>Protocols</h1>
        <p>Detailed experimental protocols and supporting materials will be added here.</p>
      </section>
    </main>
  );
}
