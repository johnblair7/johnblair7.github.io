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
} from "lucide-react";

const navItems = [
  ["Research", "#research"],
  ["Publications", "#publications"],
  ["Resources", "#tools"],
  ["People", "#people"],
  ["Collaborations", "#collaborations"],
  ["Contact", "#contact"],
];

const researchAreas = [
  {
    number: "01",
    title: "Genetic Perturbations",
    copy: "Map how biological systems change in response to perturbations of genes and regulatory elements.",
  },
  {
    number: "02",
    title: "Technology Development",
    copy: "Develop new single-cell tools that capture more cells and modalities, improve data quality, and reduce costs.",
  },
  {
    number: "03",
    title: "Neurological Disease Biology",
    copy: "Use genetic perturbations in human models of neurological disease to uncover disease mechanisms and advance therapeutic development.",
  },
];

const publications = [
  {
    year: "2026",
    type: "Preprint",
    title: "Genome-wide single-cell perturbation screens with VIPerturb-seq",
    authors: "Bradu A, Blair JD, Grabski IN, Mascio I, Lee J, McCormick C, Satija R",
    journal: "bioRxiv · February 13, 2026 · PMCID: PMC12919025",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12919025/",
  },
  {
    year: "2025",
    type: "Preprint",
    title: "Iterative, multimodal, and scalable single-cell profiling for discovery and characterization of signaling regulators",
    authors: "Blair JD, Bradu A, Dalgarno C, Grabski IN, Satija R",
    journal: "bioRxiv · August 30, 2025 · PMCID: PMC12407899",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12407899/",
  },
  {
    year: "2025",
    type: "Research article",
    title: "Phospho-seq: integrated, multi-modal profiling of intracellular protein dynamics in single cells",
    authors: "Blair JD, Hartman A, Zenk F, Wahle P, Brancati G, Dalgarno C, Treutlein B, Satija R",
    journal: "Nature Communications · 16(1):1346 · PMCID: PMC11794950",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11794950/",
  },
  {
    year: "2025",
    type: "Preprint",
    title: "mTORC1 activation drives astrocyte reactivity in cortical tubers and brain organoid models of TSC",
    authors: "Li TL, Blair JD, Yoo T, Grant GA, Hockemeyer D, Porter BE, Bateup HS",
    journal: "bioRxiv · March 18, 2025 · PMCID: PMC11908165",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11908165/",
  },
  {
    year: "2018",
    type: "Research article",
    title: "Genetically engineered human cortical spheroid models of tuberous sclerosis",
    authors: "Blair JD, Hockemeyer D, Bateup HS",
    journal: "Nature Medicine · 24(10):1568–1578 · PMCID: PMC6261470",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6261470/",
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
            <strong>Functional Perturbation Laboratory - New York Genome Center</strong>
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
          <h1>Functional Perturbation Lab</h1>
          <p className="hero-intro">
            We study how biological systems respond to precise perturbations. Our research involves
            highly scalable multimodal experimental approaches to investigate causal mechanisms in biology.
          </p>
        </div>

      </section>

      <section className="section research-section" id="research">
        <div className="section-heading">
          <p className="eyebrow"><span /> Our work</p>
          <h2>Research areas</h2>
        </div>
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
          <h2>Relevant publications</h2>
        </div>
        <div className="publication-list">
          {publications.map((publication) => (
            <a className="publication-row" href={publication.href} target="_blank" rel="noreferrer" key={publication.title}>
              <div className="pub-meta"><span>{publication.year}</span><span>{publication.type}</span></div>
              <div><h3>{publication.title}</h3><p>{publication.authors} · <em>{publication.journal}</em></p></div>
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="section tools-section" id="tools">
        <div className="section-heading">
          <p className="eyebrow"><span /> Resources</p>
          <h2>Tools &amp; resources</h2>
        </div>
        <div className="tools-copy">
          <p>Web tools developed for Phospho-seq and related single-cell experiments. The applications remain hosted independently and open in a new tab.</p>
          <div className="tool-list">
            <a href="/protocols"><BookOpen /><span><strong>Protocols</strong><small>Experimental protocols and supporting materials</small></span><ArrowUpRight size={18} /></a>
            <a href="https://phospho-seq.netlify.app/probe-maker/" target="_blank" rel="noreferrer"><Code2 /><span><strong>ProbeMaker</strong><small>Design custom DNA probes for use in 10x FLEX experiments</small></span><ExternalLink size={18} /></a>
            <a href="https://seed-finder-lite.onrender.com" target="_blank" rel="noreferrer"><FlaskConical /><span><strong>CRISPR Seed Finder</strong><small>Scan TSS windows for PAM-proximal seed matches</small></span><ExternalLink size={18} /></a>
            <a href="https://seed-hit-browser.onrender.com" target="_blank" rel="noreferrer"><Network /><span><strong>CRISPR Seed Hit Browser</strong><small>Browse guide- and gene-level seed hits for the Dolcetto library only, with differential-expression overlays</small></span><ExternalLink size={18} /></a>
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
            <div className="portrait-placeholder"><span>JB</span></div>
            <div>
              <p className="role">Platform Lead</p>
              <h3>John Blair, PhD</h3>
              <p>
                John Blair received his PhD from the University of California, Berkeley, where he worked in Dr. Helen Bateup&apos;s lab and established human neuronal models of Tuberous Sclerosis. This work combined 3D human stem cell differentiation, CRISPR-mediated stem cell engineering, and single-cell sequencing. He completed his postdoctoral training in Dr. Rahul Satija&apos;s lab at the New York Genome Center, where he developed multimodal technologies for single-cell sequencing with intracellular protein quantification and perturbations—including Phospho-seq and FlexPlex—as well as VIPerturb-seq for large-scale Perturb-seq in fixed samples.
              </p>
              <a href="#contact">Full profile <ArrowUpRight size={16} /></a>
            </div>
          </article>
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
