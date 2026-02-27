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
      { tag: "LRU Eviction", desc: "40% memory utilization improvement" },
      { tag: "AOF Persistence", desc: "Crash recovery via Append-Only File" },
    ],
    bullets: [
      "Architected distributed datastore supporting TTL semantics, LRU eviction, and O(1) ops.",
      "Non-blocking I/O for concurrent requests simulating cache-aside patterns.",
      "High-availability via AOF persistence for full crash recovery.",
    ],
  },
  {
    badge: "AI / VECTOR SEARCH",
    badgeColor: C.ind,
    icon: "◈",
    title: "Hybrid Document Search Engine",
    subtitle: "AI-Powered Retrieval System",
    tech: [
      "FastAPI",
      "React",
      "Gemini Embeddings",
      "OCR",
      "pdfPlumber",
      "TF-IDF",
    ],
    highlights: [
      { tag: "Gemini Embeddings", desc: "Semantic vector search via Google AI" },
      { tag: "TF-IDF + Vector", desc: "35% relevance boost over keyword-only" },
      { tag: "OCR Pipeline", desc: "99.9% searchability for PDFs & images" },
      { tag: "Cosine Similarity", desc: "Real-time bounding-box highlight UI" },
    ],
    bullets: [
      "Hybrid retrieval: TF-IDF positional indexing + Gemini semantic embeddings.",
      "Automated pipeline using PyTesseract & pdfPlumber for unstructured documents.",
      "FastAPI backend + React frontend with real-time match visualization.",
    ],
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

        {/* Highlights Grid */}
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
                  lineHeight: 1.4,
                }}
              >
                {h.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Bullet Points */}
        <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
          {project.bullets.map((bullet, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "flex-start",
                marginBottom: "0.4rem",
              }}
            >
              <span
                style={{
                  color: project.badgeColor,
                  flexShrink: 0,
                  fontSize: "0.8rem",
                  marginTop: "3px",
                }}
              >
                →
              </span>

              <span
                style={{
                  color: "#94a3b8",
                  fontSize: "0.82rem",
                  lineHeight: 1.55,
                }}
              >
                {bullet}
              </span>
            </li>
          ))}
        </ul>
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