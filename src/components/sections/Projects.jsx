import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import GrayChip from "../ui/GrayChip";
import SectionHeader from "../ui/SectionHeader";
import { C, rgb } from "../../constants/colors";

const PROJECTS = [
  {
    badge: "DISTRIBUTED SYSTEMS",
    badgeColor: C.em,
    icon: "⬡",
    title: "Distributed In-Memory Datastore",
    subtitle: "Redis-Inspired Architecture",
    tech: [
      "Python",
      "TCP Networking",
      "Consistent Hashing",
      "LRU Cache",
      "AOF Persistence",
    ],
    highlights: [
      { tag: "Custom TCP Protocol", desc: "O(1) GET/SET with TTL semantics" },
      { tag: "Consistent Hashing", desc: "Horizontal sharding via virtual nodes" },
      { tag: "LRU Eviction", desc: "Efficient memory management under load" },
      { tag: "AOF Persistence", desc: "Crash recovery via Append-Only File" },
    ],
    bullets: [
      "Built distributed datastore supporting O(1) GET/SET with TTL and LRU eviction.",
      "Implemented consistent hashing with virtual nodes for horizontal scaling.",
      "Designed AOF persistence for durability and crash recovery.",
    ],
    github: "https://github.com/TejasKhilare/Redis-like-DataStorage",
  },
  {
    badge: "AI / RAG SYSTEM",
    badgeColor: C.ind,
    icon: "◈",
    title: "Document Search Engine",
    subtitle: "RAG-Based Semantic Retrieval System",
    tech: [
      "FastAPI",
      "React",
      "Qdrant",
      "PostgreSQL",
      "Gemini Embeddings",
      "Docker",
      "AWS",
    ],
    highlights: [
      { tag: "RAG Pipeline", desc: "Semantic retrieval + LLM answer generation" },
      { tag: "Vector Search", desc: "3072-dim embeddings stored in Qdrant" },
      { tag: "Dockerized", desc: "Consistent dev & production environments" },
      { tag: "CI/CD", desc: "GitHub Actions automated pipeline" },
    ],
    bullets: [
      "Architected full RAG pipeline integrating retrieval with LLM responses.",
      "Built OCR + pdfPlumber ingestion pipeline for unstructured documents.",
      "Deployed system on AWS EC2 with S3 storage and RDS metadata.",
    ],
    github: "https://github.com/TejasKhilare/Search_Engine",
  },
];

function ProjectCard({ project, delay }) {
  return (
    <Reveal delay={delay}>
      <Card
        accent={project.badgeColor}
        extra={{
          height: "100%",
          backgroundImage: `linear-gradient(135deg,rgba(${rgb(
            project.badgeColor
          )},0.07) 0%,transparent 55%)`,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <span style={{ fontSize: "1.8rem" }}>{project.icon}</span>

          <span
            style={{
              background: `rgba(${rgb(project.badgeColor)},0.12)`,
              border: `1px solid ${project.badgeColor}`,
              color: project.badgeColor,
              padding: "3px 10px",
              borderRadius: "20px",
              fontSize: "0.66rem",
              fontFamily: "'JetBrains Mono',monospace",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            color: "#f1f5f9",
            fontFamily: "'Syne',sans-serif",
            fontWeight: 800,
            fontSize: "1.15rem",
            marginBottom: "0.2rem",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: project.badgeColor,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          {project.subtitle}
        </p>

        {/* Tech Stack */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: "1.1rem",
          }}
        >
          {project.tech.map((tech) => (
            <GrayChip key={tech} text={tech} />
          ))}
        </div>

        {/* Highlights */}
        <div className="highlight-grid">
          {project.highlights.map((h) => (
            <div
              key={h.tag}
              style={{
                background: "rgba(15,23,42,0.55)",
                border: "1px solid rgba(71,85,105,0.22)",
                borderRadius: "8px",
                padding: "0.6rem",
              }}
            >
              <div
                style={{
                  color: project.badgeColor,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.64rem",
                  fontWeight: 700,
                  marginBottom: "3px",
                }}
              >
                ◆ {h.tag}
              </div>

              <div
                style={{
                  color: "#64748b",
                  fontSize: "0.71rem",
                }}
              >
                {h.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Bullets */}
        <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
          {project.bullets.map((bullet, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "0.4rem",
              }}
            >
              <span style={{ color: project.badgeColor }}>→</span>
              <span style={{ color: "#94a3b8", fontSize: "0.82rem" }}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        {/* 🔴 GITHUB BUTTON (THIS WAS MISSING) */}
        <div style={{ marginTop: "1.2rem" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "8px 14px",
              background: project.badgeColor,
              color: "#020617",
              borderRadius: "6px",
              textDecoration: "none",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.75rem",
              fontWeight: 700,
              transition: "all 0.2s",
            }}
          >
            View Code →
          </a>
        </div>
      </Card>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ width: "100%" }}>
      <div className="sw">
        <Reveal>
          <SectionHeader
            label="Featured Projects"
            title="What I've Built"
            sub="Systems designed for performance and scale"
          />
        </Reveal>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}