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
  LineChart,
  Menu,
  Moon,
  Sparkles,
  Sun,
  Wrench,
  X,
} from "lucide-react";
import projectData from "../data/projects.json";

const roles = ["Aspiring Data Analyst", "Python & Power BI", "Learning Machine Learning"];
const skills = [
  ["01", Braces, "Programming", ["Python", "SQL"]],
  [
    "02",
    Wrench,
    "Tools",
    ["Power BI", "Jupyter", "Git/GitHub", "VS Code", "Cloud Computing", "AWS"],
  ],
  ["03", LineChart, "Statistics", ["Statistics", "Probability"]],
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
    <a className="brand" href="#home" aria-label="Harshwardhan home">
      <span>HP</span>
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
            ["Learning", "#education"],
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
          <span className="status-dot" /> Data analytics · Python · Power BI
        </p>
        <h1>
          Real data.
          <br />
          <em>Clearer insights.</em>
        </h1>
        <p className="hero-role">
          {role}
          <span className="cursor">|</span>
        </p>
        <p className="hero-intro">
          I’m <strong>Harshwardhan</strong>, an aspiring data analyst exploring
          customer, HR, and sales data with Python and Power BI. I turn raw
          datasets into clear reports and useful findings.
        </p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href="/assets/personalized/social/Resume.pdf"
            download
          >
            Download resume <ArrowDownToLine />
          </a>
          <a className="button button-text" href="#projects">
            Explore projects <ArrowDownRight />
          </a>
        </div>
        <div className="social-row" aria-label="Social links">
          <a href="https://www.linkedin.com/in/harshwardhanpatil2208" aria-label="LinkedIn">
            <BriefcaseBusiness />
          </a>
          <a href="https://github.com/Harsh220801" aria-label="GitHub">
            <Code2 />
          </a>
        </div>
      </Reveal>
      <Reveal delay className="hero-visual">
        <div className="portrait-frame">
          <img
            src="/assets/personalized/profile/portrait.png"
            alt="Portrait of Harshwardhan"
          />
        </div>
        <div className="data-note note-one">
          <span>currently learning</span>
          <strong>Machine learning</strong>
          <BrainCircuit />
        </div>
        <div className="data-note note-two">
          <span>project focus</span>
          <strong>Real datasets</strong>
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
            I’m developing my data analytics practice with Python, SQL, Power BI,
            and statistical foundations. My public projects explore customer
            shopping trends, HR attendance, and Amazon sales, combining data
            preparation with clear reporting and visualisation.
          </p>
          <p>
            I’m currently learning machine learning and building on my skills in
            statistics and probability to move from describing data toward
            predictive analysis.
          </p>
          <a
            className="inline-link"
            href="/assets/personalized/social/Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View my full resume <ArrowUpRight />
          </a>
        </Reveal>
      </div>
      <div className="facts-grid reveal">
        {[
          ["03", "Public GitHub", "projects"],
          ["02", "Power BI", "reports"],
          ["01", "Python sales", "analysis"],
          ["ML", "Currently", "learning"],
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
  const experiences = [
    {
      title: "GET – Electrical & Electronics Maintenance",
      company: "Bharat Forge Limited",
      location: "Pune, India",
      points: [
        "Worked across automation, passenger car line, and robotics line automation systems at Bharat Forge.",
        "Performed preventive maintenance (PM) and troubleshooting on FANUC robots to ensure line uptime.",
        "Managed and processed structured and unstructured data with high accuracy and consistency.",
        "Generated and automated reports using advanced MS Excel features and maintained documentation while collaborating with cross-functional teams.",
      ],
    },
    {
      title: "Data Analyst",
      company: "TAN Engineers",
      location: "Pune, India",
      points: [
        "Performed data analysis using Excel to support production and maintenance reporting.",
        "Created MIS reports and Power BI dashboards to track performance metrics.",
        "Carried out data cleaning, validation, and visualization for operational data.",
        "Tracked KPIs and conducted performance analysis to support decision-making.",
      ],
    },
  ];

  const highlights = [
    [
      "01",
      "Customer shopping trends",
      "Built a Power BI report with visual summaries of shopping patterns, including age and gender trends.",
    ],
    [
      "02",
      "HR attendance",
      "Created a Power BI analytics report using a masked 2022–2023 attendance workbook.",
    ],
    [
      "03",
      "Amazon sales analysis",
      "Used Python to clean sales data and visualize order quantities, categories, sizes, and sales patterns.",
    ],
  ];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <Label number="03">Experience</Label>
        <div className="experience-header reveal">
          <div>
            <p className="eyebrow">Professional background</p>
            <h2>
              From operations to
              <br />
              <em>data-driven decisions.</em>
            </h2>
          </div>
          <div className="experience-company">
            <span className="company-mark">EX</span>
            <div>
              <strong>Work history</strong>
              <small>2 roles</small>
            </div>
          </div>
        </div>
        <div className="experience-body">
          <Reveal className="experience-summary">
            <p>
              My professional experience blends industrial maintenance with data
              analysis and reporting. I’ve worked with automation systems,
              Excel-based reporting, Power BI dashboards, and KPI tracking in
              operational environments.
            </p>
            <a className="inline-link" href="#projects">
              Explore projects <ArrowUpRight />
            </a>
          </Reveal>
          <div className="experience-points reveal reveal-delay">
            {experiences.map((experience, index) => (
              <div className="experience-point" key={experience.title}>
                <span>{`0${index + 1}`}</span>
                <div>
                  <h3>{experience.title}</h3>
                  <p>
                    <strong>{experience.company}</strong> · {experience.location}
                  </p>
                  {experience.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-stats reveal">
          <div>
            <strong>2</strong>
            <span>
              professional
              <br />
              roles
            </span>
          </div>
          <div>
            <strong>3</strong>
            <span>
              public GitHub
              <br />
              projects
            </span>
          </div>
          <div>
            <strong>ML</strong>
            <span>
              currently
              <br />
              learning
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
            Three projects,
          <br />
            <em>real datasets.</em>
        </h2>
        <p>Customer shopping, HR attendance, and sales analysis built with Python and Power BI.</p>
      </Reveal>
      <div
        className="filter-row reveal"
        role="group"
        aria-label="Filter projects"
      >
        {["All", ...new Set(projectData.flatMap((project) => project.tags))].map((item) => (
          <button
            key={item}
            className={`filter ${filter === item ? "active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item === "All" ? "All work" : item}
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
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live demo <ExternalLink />
                </a>
              )}
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
        <Label number="05">Education & learning</Label>
        <div className="journey-grid">
          <div className="timeline reveal">
            <h2>
              Educational
              <br />
              <em>qualifications.</em>
            </h2>
            <div className="timeline-item">
              <span className="timeline-year">Jun 2024</span>
              <div>
                <h3>B.E. in Electronics & Telecommunication Engineering</h3>
                <p>Sinhgad Institute of Technology & Science</p>
                <small>SGPA: 6.55</small>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">Aug 2021</span>
              <div>
                <h3>Diploma in Electronics & Telecommunication Engineering</h3>
                <p>Sou Venutai Chavan Polytechnic, Pune</p>
                <small>Percentage: 85.12%</small>
              </div>
            </div>
          </div>
          <div className="certifications reveal reveal-delay">
            <h3>Current learning</h3>
            {[
              ["01", "Programming", "Python · MySQL / SQL"],
              ["02", "Tools", "Power BI · Jupyter · Git/GitHub · VS Code"],
              ["03", "Foundations", "Statistics · Probability · Machine learning · AI"],
            ].map(([number, title, details]) => (
              <div className="cert-item" key={title}>
                <span>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <small>{details}</small>
                </div>
                {title === "Foundations" && <small>Pursuing Data Science with AI</small>}
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
            A concise overview of my background, skills, and project work.
          </p>
          <a
            className="button button-light"
            href="/assets/personalized/social/Resume.pdf"
            download
          >
            Download resume <ArrowDownToLine />
          </a>
          <a
            className="resume-view"
            href="/assets/personalized/social/Resume.pdf"
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
            I’m building a data analytics portfolio and currently learning
            machine learning. Reach out to discuss my projects or connect about
            data work.
          </p>
          <a
            className="contact-email"
            href="https://www.linkedin.com/in/harshwardhanpatil2208"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <ArrowUpRight />
          </a>
        </Reveal>
        <Reveal delay className="contact-form">
          <h3>Elsewhere</h3>
          <a
            className="button button-primary"
            href="https://github.com/Harsh220801"
            target="_blank"
            rel="noreferrer"
          >
            Explore GitHub projects <Code2 />
          </a>
          <a
            className="button button-text"
            href="https://www.linkedin.com/in/harshwardhanpatil2208"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn profile <BriefcaseBusiness />
          </a>
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
          Rutik Bajad
        </p>
        <div className="footer-links">
          <a href="https://github.com/RutikBajad" aria-label="GitHub">
            <Code2 />
          </a>
          <a href="https://www.linkedin.com/in/rutikbajad/" aria-label="LinkedIn">
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
          HP<span>.</span>
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
