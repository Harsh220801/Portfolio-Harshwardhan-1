import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowDownToLine,
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Braces,
  Code2,
  ExternalLink,
  Layers3,
  LineChart,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  Wrench,
  X,
} from "lucide-react";
import projectData from "../data/projects.json";

const roles = ["Data Engineer", "Data Scientist", "ML Enthusiast"];
const skills = [
  ["01", Braces, "Programming", ["Python", "SQL", "R"]],
  [
    "02",
    Layers3,
    "Libraries",
    ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Seaborn"],
  ],
  ["03", Wrench, "Tools", ["Jupyter", "Git / GitHub", "VS Code", "Power BI"]],
  [
    "04",
    LineChart,
    "Concepts",
    ["Machine learning", "Statistics", "EDA", "Visualisation"],
  ],
];

function Reveal({ children, delay = false, className = "" }) {
  return (
    <div className={`reveal ${delay ? "reveal-delay" : ""} ${className}`}>
      {children}
    </div>
  );
}
function Label({ number, children }) {
  return (
    <div className="section-label reveal">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}
function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Harshvardhan home">
      <span>HV</span>
      <i>.</i>
    </a>
  );
}

function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header" id="top">
      <nav className="nav container" aria-label="Main navigation">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? "open" : ""}`} id="nav-links">
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Experience", "#experience"],
            ["Journey", "#education"],
            ["Resume", "#resume"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-contact" onClick={close}>
            Let's talk <ArrowUpRight />
          </a>
          <button
            className="theme-toggle"
            type="button"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun /> : <Moon />}
            <span>{dark ? "Light" : "Theme"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const [role, setRole] = useState(roles[0]);
  useEffect(() => {
    const timer = setInterval(
      () =>
        setRole(
          (current) => roles[(roles.indexOf(current) + 1) % roles.length],
        ),
      2600,
    );
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="hero section container" id="home">
      <Reveal className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> Open to opportunities · India
        </p>
        <h1>
          Curious mind.
          <br />
          <em>Useful models.</em>
        </h1>
        <p className="hero-role">
          {role}
          <span className="cursor">|</span>
        </p>
        <p className="hero-intro">
          I’m <strong>Harshvardhan</strong>, a Data Engineer who builds reliable
          pipelines and turns complex operational data into decisions people can
          act on.
        </p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href="/assets/Harshvardhan-Resume.pdf"
            download
          >
            Download resume <ArrowDownToLine />
          </a>
          <a className="button button-text" href="#projects">
            Explore projects <ArrowDownRight />
          </a>
        </div>
        <div className="social-row" aria-label="Social links">
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <BriefcaseBusiness />
          </a>
          <a href="https://github.com" aria-label="GitHub">
            <Code2 />
          </a>
          <a href="https://www.kaggle.com" aria-label="Kaggle">
            <span className="kaggle-icon">K</span>
          </a>
          <a href="mailto:hello@example.com" aria-label="Email">
            <Mail />
          </a>
        </div>
      </Reveal>
      <Reveal delay className="hero-visual">
        <div className="portrait-frame">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=900&q=85"
            alt="Placeholder portrait of Harshvardhan"
          />
        </div>
        <div className="data-note note-one">
          <span>currently learning</span>
          <strong>Deep learning</strong>
          <BrainCircuit />
        </div>
        <div className="data-note note-two">
          <span>availability</span>
          <strong>2024 — ∞</strong>
          <Sparkles />
        </div>
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
      </Reveal>
      <a className="scroll-cue" href="#about">
        <span>Scroll to explore</span>
        <ArrowDown />
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="about section container" id="about">
      <Label number="01">About me</Label>
      <div className="about-grid">
        <Reveal className="about-lead">
          <h2>
            Data is everywhere.
            <br />
            <em>Clarity is rare.</em>
          </h2>
        </Reveal>
        <Reveal delay className="about-body">
          <p>
            I’m a recent graduate building a foundation across statistics,
            machine learning, and software development. I like the full journey:
            asking a better question, preparing imperfect data, testing an idea,
            and communicating what the result actually means.
          </p>
          <p>
            Outside notebooks, you’ll find me reading about responsible AI,
            recreating dashboards, or explaining a complex idea with a very
            simple sketch.
          </p>
          <a
            className="inline-link"
            href="/assets/Harshvardhan-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View my full resume <ArrowUpRight />
          </a>
        </Reveal>
      </div>
      <div className="facts-grid reveal">
        {[
          ["01", "Degree in", "Computer Science"],
          ["12+", "Projects &", "case studies"],
          ["04", "Core tools I", "work with daily"],
          ["∞", "Questions still", "worth asking"],
        ].map(([value, first, second]) => (
          <div key={value}>
            <strong>{value}</strong>
            <span>
              {first}
              <br />
              {second}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <Label number="02">My toolkit</Label>
        <Reveal className="skills-heading">
          <h2>
            Tools for turning
            <br />
            <em>questions into evidence.</em>
          </h2>
          <p>A practical stack, always expanding.</p>
        </Reveal>
        <div className="skills-grid">
          {skills.map(([number, Icon, title, tags], index) => (
            <Reveal key={title} delay={index % 2 === 1}>
              <article className="skill-card">
                <span className="card-number">{number}</span>
                <Icon />
                <h3>{title}</h3>
                <div className="skill-tags">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const highlights = [
    [
      "01",
      "Pipeline architecture",
      "Designed and maintained batch and incremental pipelines that keep reporting data accurate, traceable, and ready on schedule.",
    ],
    [
      "02",
      "Operational insight",
      "Partnered with cross-functional teams to turn production and business requirements into measurable data products.",
    ],
    [
      "03",
      "Quality by default",
      "Introduced validation checks, documentation, and monitoring habits that make trusted data easier to scale.",
    ],
  ];
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <Label number="03">Experience</Label>
        <div className="experience-header reveal">
          <div>
            <p className="eyebrow">2020 — Present · Pune, India</p>
            <h2>
              Building the data
              <br />
              <em>behind better work.</em>
            </h2>
          </div>
          <div className="experience-company">
            <span className="company-mark">BF</span>
            <div>
              <strong>Data Engineer</strong>
              <small>Bharat Forge</small>
            </div>
          </div>
        </div>
        <div className="experience-body">
          <Reveal className="experience-summary">
            <p>
              For 4+ years, I’ve worked across data engineering and analytics at
              Bharat Forge, designing dependable data foundations for
              manufacturing and business teams.
            </p>
            <a className="inline-link" href="#contact">
              Let’s discuss data <ArrowUpRight />
            </a>
          </Reveal>
          <div className="experience-points reveal reveal-delay">
            {highlights.map(([number, title, text]) => (
              <div className="experience-point" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-stats reveal">
          <div>
            <strong>4+</strong>
            <span>
              years of
              <br />
              experience
            </span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>
              reliable data
              <br />
              mindset
            </span>
          </div>
          <div>
            <strong>1</strong>
            <span>
              focus: useful
              <br />
              outcomes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All"
      ? projectData
      : projectData.filter((project) => project.tags.includes(filter));
  return (
    <section className="projects section container" id="projects">
      <Label number="04">Selected work</Label>
      <Reveal className="projects-heading">
        <h2>
          Small experiments,
          <br />
          <em>real-world intent.</em>
        </h2>
        <p>Each project is a chance to make a fuzzy problem more legible.</p>
      </Reveal>
      <div
        className="filter-row reveal"
        role="group"
        aria-label="Filter projects"
      >
        {["All", "ML", "Visualization", "SQL"].map((item) => (
          <button
            key={item}
            className={`filter ${filter === item ? "active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item === "All"
              ? "All work"
              : item === "ML"
                ? "Machine learning"
                : item === "Visualization"
                  ? "Visualisation"
                  : item}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <img
                src={project.image}
                alt={`${project.title} project thumbnail`}
                loading="lazy"
              />
              <span className="project-index">0{index + 1}</span>
            </div>
            <div className="project-meta">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
              <span>{project.tech}</span>
            </div>
            <div className="project-links">
              <a href={project.repo} target="_blank" rel="noreferrer">
                GitHub repo <ArrowUpRight />
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live notebook <ExternalLink />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="journey section" id="education">
      <div className="container">
        <Label number="05">My journey</Label>
        <div className="journey-grid">
          <div className="timeline reveal">
            <h2>
              Learning by
              <br />
              <em>doing.</em>
            </h2>
            <div className="timeline-item">
              <span className="timeline-year">2020 — 2024</span>
              <div>
                <h3>B.Tech · Computer Science</h3>
                <p>Placeholder University, India</p>
                <small>
                  Coursework: Statistics · DBMS · Algorithms · Artificial
                  Intelligence
                </small>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2023</span>
              <div>
                <h3>Data Science Intern</h3>
                <p>Placeholder Analytics Lab</p>
                <small>
                  Built reports and experiments around customer behaviour.
                </small>
              </div>
            </div>
          </div>
          <div className="certifications reveal reveal-delay">
            <h3>Certifications</h3>
            {[
              ["01", "Google Data Analytics", "Coursera · 2023"],
              ["02", "Python for Data Science", "IBM · 2023"],
              [
                "03",
                "Machine Learning Specialisation",
                "DeepLearning.AI · 2024",
              ],
            ].map(([number, title, platform]) => (
              <div className="cert-item" key={title}>
                <span>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <small>{platform}</small>
                </div>
                <a
                  href="#contact"
                  aria-label={`Ask for ${title} certificate link`}
                >
                  <ArrowUpRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="resume section container" id="resume">
      <Reveal className="resume-card">
        <div>
          <span className="eyebrow">06 · The short version</span>
          <h2>
            Want the details?
            <br />
            <em>Take the PDF.</em>
          </h2>
        </div>
        <div className="resume-action">
          <p>
            Education, experience, and the things I’m building next, in one neat
            document.
          </p>
          <a
            className="button button-light"
            href="/assets/Harshvardhan-Resume.pdf"
            download
          >
            Download resume <ArrowDownToLine />
          </a>
          <a
            className="resume-view"
            href="/assets/Harshvardhan-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View in new tab <ExternalLink />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section container" id="contact">
      <Label number="07">Say hello</Label>
      <div className="contact-grid">
        <Reveal className="contact-intro">
          <h2>
            Have a question,
            <br />
            <em>or a good problem?</em>
          </h2>
          <p>
            I’m always interested in thoughtful teams, useful products, and
            conversations about data.
          </p>
          <a className="contact-email" href="mailto:hello@example.com">
            hello@example.com <ArrowUpRight />
          </a>
          <div className="location">
            <MapPin />
            <span>Based in India · Working globally</span>
          </div>
        </Reveal>
        <Reveal delay className="contact-form">
          <form action="https://formspree.io/f/your-form-id" method="POST">
            <label htmlFor="name">
              Name <span>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
            <label htmlFor="message">
              Message <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell me a little about it..."
              required
            />
            <button className="button button-primary" type="submit">
              Send message <Send />
            </button>
            <p className="form-note">
              Formspree placeholder: replace the form action with your endpoint.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Brand />
        <p>
          Designed & built with curiosity · © {new Date().getFullYear()}{" "}
          Harshvardhan
        </p>
        <div className="footer-links">
          <a href="https://github.com" aria-label="GitHub">
            <Code2 />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <BriefcaseBusiness />
          </a>
          <a href="#top" aria-label="Back to top">
            <ArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("portfolio-theme") === "dark",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onScroll = () =>
      document
        .querySelector(".site-header")
        ?.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="site-loader" aria-hidden="true">
        <span className="loader-mark">
          HV<span>.</span>
        </span>
      </div>
      <Header dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Journey />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
