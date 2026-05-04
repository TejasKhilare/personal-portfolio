import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { C, rgb } from "../../constants/colors";

const HOBBIES = [
  { icon: "⛰️", label: "Trekking", sub: "Discipline · Resilience" },
  { icon: "🏊", label: "Swimming", sub: "Endurance · Focus" },
  { icon: "🎵", label: "Singing", sub: "Creativity · Balance" },
  { icon: "📖", label: "Reading", sub: "Continuous Learning" },
  { icon: "⚡", label: "DSA Practice", sub: "Problem Solving" },
];

export default function About() {
  return (
    <section
      style={{
        width: "100%",
        background: "rgba(15,23,42,0.35)",
      }}
    >
      <div className="sw">
        <Reveal>
          <SectionHeader
            label="About Me"
            title="Engineering Mindset"
            sub="Focused on building scalable systems and real-world solutions"
          />
        </Reveal>

        <div className="about-grid">
          {/* LEFT: ABOUT TEXT */}
          <Reveal delay={0.1}>
            <Card accent={C.em} extra={{ height: "100%" }}>
              <p
                style={{
                  color: C.em,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.71rem",
                  marginBottom: "1rem",
                }}
              >
                // B.Tech CSE · 2022–2026 · Pune, India
              </p>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  fontSize: "0.88rem",
                  marginBottom: "1rem",
                }}
              >
                I am a backend-focused software engineer specializing in{" "}
                <span style={{ color: C.em, fontWeight: 600 }}>
                  distributed systems
                </span>{" "}
                and{" "}
                <span style={{ color: C.ind, fontWeight: 600 }}>
                  AI-powered backend applications
                </span>.
              </p>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  fontSize: "0.88rem",
                  marginBottom: "1rem",
                }}
              >
                I have built systems ranging from a{" "}
                <span style={{ color: C.em, fontWeight: 600 }}>
                  Redis-inspired in-memory datastore
                </span>{" "}
                with custom TCP protocols to a{" "}
                <span style={{ color: C.ind, fontWeight: 600 }}>
                  RAG-based document search engine
                </span>{" "}
                using vector databases and LLMs.
              </p>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  fontSize: "0.88rem",
                }}
              >
                My focus is on designing{" "}
                <span style={{ color: "#f1f5f9", fontWeight: 600 }}>
                  scalable, low-latency systems
                </span>{" "}
                and understanding how systems work at a deeper level rather than
                relying only on high-level abstractions.
              </p>
            </Card>
          </Reveal>

          {/* RIGHT: HOBBIES */}
          <Reveal delay={0.18}>
            <Card accent={C.ind} extra={{ height: "100%" }}>
              <p
                style={{
                  color: "#f1f5f9",
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  marginBottom: "1.2rem",
                }}
              >
                Interests & Activities
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}
              >
                {HOBBIES.map((hobby) => (
                  <div
                    key={hobby.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.9rem",
                      padding: "0.65rem 0.9rem",
                      background: "rgba(15,23,42,0.5)",
                      border: "1px solid rgba(71,85,105,0.24)",
                      borderRadius: "10px",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `rgba(${rgb(
                        C.ind
                      )},0.45)`;
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(71,85,105,0.24)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <span style={{ fontSize: "1.25rem" }}>
                      {hobby.icon}
                    </span>

                    <div>
                      <p
                        style={{
                          color: "#f1f5f9",
                          fontFamily: "'Syne',sans-serif",
                          fontWeight: 600,
                          fontSize: "0.87rem",
                        }}
                      >
                        {hobby.label}
                      </p>

                      <p
                        style={{
                          color: "#64748b",
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: "0.67rem",
                        }}
                      >
                        {hobby.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}