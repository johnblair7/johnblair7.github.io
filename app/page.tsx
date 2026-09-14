import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Calculator,
  Code2,
  ExternalLink,
  FlaskConical,
  Mail,
  MapPin,
  Network,
  Users,
} from "lucide-react";

const navItems = [
  ["Research", "#research"],
  ["Publications", "#publications"],
  ["Tools", "#tools"],
  ["People", "#people"],
  ["Collaborations", "#collaborations"],
  ["Contact", "#contact"],
];

const researchAreas = [
  {
    number: "01",
    title: "Perturbation biology",
    copy: "Map how biological systems respond when genes, cells, or environments are deliberately changed.",
  },
  {
    number: "02",
    title: "Functional genomics",
    copy: "Pair high-throughput experiments with computation to connect molecular changes to phenotype.",
  },
  {
    number: "03",
    title: "Predictive models",
    copy: "Build interpretable models that reveal causal structure and guide the next experiment.",
  },
];

const publications = [
  {
    year: "2026",
    type: "Research article",
    title: "A representative publication title will appear here",
    authors: "Your Name, Collaborator A, Collaborator B",
    journal: "Journal or preprint server",
  },
  {
    year: "2025",
    type: "Methods",
    title: "Add your newest work and link directly to the paper",
    authors: "Lab Member, Your Name",
    journal: "Journal or preprint server",
  },
  {
    year: "2025",
    type: "Review",
    title: "Use this space to highlight a field-defining contribution",
    authors: "Your Name, Collaborator C",
    journal: "Journal name",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Functional Perturbation Lab home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-copy">
            <strong>Functional Perturbation</strong>
            <small>Laboratory</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">
          Get in touch <ArrowDownRight size={17} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Systems biology · Functional genomics</p>
          <h1>Functional Perturbation Lab</h1>
          <p className="hero-intro">
            We study how biological systems respond to precise perturbations. Our research combines
            experimental and computational approaches to investigate causal mechanisms in biology.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">Research <ArrowDownRight size={18} /></a>
            <a className="text-link" href="#publications">Publications <ArrowDownRight size={17} /></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract perturbation response diagram">
          <div className="visual-label">Perturb → Measure → Model</div>
          <svg viewBox="0 0 600 540" role="img" aria-label="Network of cellular responses to a perturbation">
            <defs>
              <linearGradient id="signal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#d7ff45" />
                <stop offset="1" stopColor="#7bf0d5" />
              </linearGradient>
            </defs>
            <g className="grid-lines">
              {[80, 160, 240, 320, 400, 480].map((x) => <line key={`x${x}`} x1={x} y1="0" x2={x} y2="540" />)}
              {[60, 140, 220, 300, 380, 460].map((y) => <line key={`y${y}`} x1="0" y1={y} x2="600" y2={y} />)}
            </g>
            <g className="network-lines">
              <line x1="110" y1="140" x2="250" y2="210" /><line x1="250" y1="210" x2="390" y2="130" />
              <line x1="250" y1="210" x2="360" y2="340" /><line x1="110" y1="140" x2="160" y2="370" />
              <line x1="160" y1="370" x2="360" y2="340" /><line x1="360" y1="340" x2="500" y2="400" />
              <line x1="390" y1="130" x2="500" y2="400" /><line x1="250" y1="210" x2="500" y2="400" />
            </g>
            <g className="nodes">
              <circle cx="110" cy="140" r="18" /><circle cx="250" cy="210" r="42" className="node-focus" />
              <circle cx="390" cy="130" r="25" /><circle cx="160" cy="370" r="28" />
              <circle cx="360" cy="340" r="20" /><circle cx="500" cy="400" r="34" />
            </g>
            <g className="pulse-rings">
              <circle cx="250" cy="210" r="68" /><circle cx="250" cy="210" r="100" />
            </g>
            <path className="response-curve" d="M68 490 C160 455, 192 492, 274 430 S420 470, 535 310" />
          </svg>
          <div className="visual-note visual-note-one"><strong>01</strong><span>Controlled<br />perturbation</span></div>
          <div className="visual-note visual-note-two"><strong>03</strong><span>Predictive<br />insight</span></div>
        </div>
        <p className="hero-index">FPL / 001</p>
      </section>

      <section className="section research-section" id="research">
        <div className="section-heading">
          <p className="eyebrow"><span /> Our work</p>
          <h2>Research areas</h2>
        </div>
        <p className="section-lede">
          Our work starts with a simple premise: the best way to understand a complex system is to
          change it, measure what follows, and learn from the response.
        </p>
        <div className="research-grid">
          {researchAreas.map((area) => (
            <article className="research-card" key={area.number}>
              <div className="card-top"><span>{area.number}</span><ArrowUpRight size={19} /></div>
              <h3>{area.title}</h3>
              <p>{area.copy}</p>
              <div className={`mini-chart chart-${area.number}`} aria-hidden="true"><span /><span /><span /><span /><span /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section publications-section" id="publications">
        <div className="section-heading compact">
          <p className="eyebrow light"><span /> Publications</p>
          <h2>Selected publications</h2>
        </div>
        <div className="publication-list">
          {publications.map((publication) => (
            <a className="publication-row" href="#contact" key={publication.title}>
              <div className="pub-meta"><span>{publication.year}</span><span>{publication.type}</span></div>
              <div><h3>{publication.title}</h3><p>{publication.authors} · <em>{publication.journal}</em></p></div>
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          ))}
        </div>
        <a className="button button-light" href="#contact">View all publications <BookOpen size={17} /></a>
      </section>

      <section className="section tools-section" id="tools">
        <div className="section-heading">
          <p className="eyebrow"><span /> Resources</p>
          <h2>Tools &amp; resources</h2>
        </div>
        <div className="tools-copy">
          <p>Web tools developed for Phospho-seq and related single-cell experiments. The applications remain hosted independently and open in a new tab.</p>
          <div className="tool-list">
            <a href="https://phospho-seq.netlify.app/probe-maker/" target="_blank" rel="noreferrer"><Code2 /><span><strong>ProbeMaker</strong><small>Design DNA probes complementary to mRNA sequences</small></span><ExternalLink size={18} /></a>
            <a href="https://seed-finder-lite.onrender.com" target="_blank" rel="noreferrer"><FlaskConical /><span><strong>CRISPR Seed Finder</strong><small>Scan TSS windows for PAM-proximal seed matches</small></span><ExternalLink size={18} /></a>
            <a href="https://seed-hit-browser.onrender.com" target="_blank" rel="noreferrer"><Network /><span><strong>CRISPR Seed Hit Browser</strong><small>Browse guide- and gene-level seed hits with differential-expression overlays</small></span><ExternalLink size={18} /></a>
            <a href="https://phospho-seq.netlify.app/flex-v2-cost-calculator/" target="_blank" rel="noreferrer"><Calculator /><span><strong>Flex v2 Cost Calculator</strong><small>Estimate hybridization, GEM lane, and sequencing costs</small></span><ExternalLink size={18} /></a>
          </div>
          <a className="tools-source" href="https://github.com/johnblair7/phospho-seq" target="_blank" rel="noreferrer">Source and documentation on GitHub <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="section people-section" id="people">
        <div className="section-heading">
          <p className="eyebrow"><span /> The lab</p>
          <h2>People</h2>
        </div>
        <div className="people-layout">
          <article className="principal-card">
            <div className="portrait-placeholder"><span>PI</span></div>
            <div><p className="role">Principal Investigator</p><h3>Your Name, PhD</h3><p>Add a short biography describing your scientific path, central questions, and approach to mentorship.</p><a href="#contact">Full profile <ArrowUpRight size={16} /></a></div>
          </article>
          <div className="join-card">
            <Users size={28} />
            <div><h3>Join the lab</h3><p>Information about graduate, postdoctoral, and research staff opportunities will be posted here.</p></div>
            <a href="mailto:hello@example.edu">View opportunities <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="section collaborations-section" id="collaborations">
        <p className="eyebrow light"><span /> Collaborations</p>
        <div className="collab-grid">
          <h2>Collaborations</h2>
          <div><p>We collaborate across biology, medicine, engineering, and computation. Please contact us to discuss potential research collaborations.</p><a className="button button-light" href="#contact">Contact the lab <ArrowDownRight size={18} /></a></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow"><span /> Contact</p>
          <h2>Contact</h2>
        </div>
        <div className="contact-details">
          <a href="mailto:hello@example.edu"><Mail size={20} /><span><small>Email</small>hello@example.edu</span></a>
          <div><MapPin size={20} /><span><small>Location</small>Your Institution<br />City, State</span></div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><span /><span /><span /></span><span className="brand-copy"><strong>Functional Perturbation</strong><small>Laboratory</small></span></a>
        <p>© 2026 Functional Perturbation Lab</p>
        <div><a href="#publications">Google Scholar</a><a href="#tools">GitHub</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
