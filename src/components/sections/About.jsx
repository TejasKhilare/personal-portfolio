import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { C, rgb } from "../../constants/colors";

const HOBBIES = [
  { icon: "⛰️", label: "Trekking", sub: "Western Ghats · Resilience" },
  { icon: "🏊", label: "Swimming", sub: "Discipline · Endurance" },
  { icon: "🎵", label: "Singing", sub: "Creativity · Harmony" },
  { icon: "📖", label: "Reading", sub: "Continuous Learning" },
  { icon: "⚡", label: "LeetCode", sub: "DSA · Problem Solving" },
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
            title="Beyond the Code"
            sub="The engineer behind the systems"
          />
        </Reveal>

        <div className="about-grid">
          {/* About Text */}
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
                // Born: November 15, 2003
              </p>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.85,
                  fontSize: "0.88rem",
                  marginBottom: "1rem",
                }}
              >
                I am a software engineer born with a curiosity for how complex
                systems work under the hood. Currently pursuing my B.Tech in
                Computer Science, I specialize in{" "}
                <span style={{ color: C.em, fontWeight: 600 }}>
                  high-performance backends
                </span>{" "}
                and{" "}
                <span style={{ color: C.em, fontWeight: 600 }}>
                  distributed architectures
                </span>.
              </p>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.85,
                  fontSize: "0.88rem",
                  marginBottom: "1rem",
                }}
              >
                My journey spans low-level networking and{" "}
                <span style={{ color: C.ind, fontWeight: 600 }}>AI</span> —
                from Redis-inspired datastores with custom TCP protocols to
                hybrid search engines using Gemini embeddings.
              </p>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.85,
                  fontSize: "0.88rem",
                }}
              >
                I believe the discipline of trekking and the rhythm of singing
                translate directly into my engineering:{" "}
                <em style={{ color: "#f1f5f9" }}>
                  persistence, harmony in design, and a constant drive to reach
                  the next summit.
                </em>
              </p>
            </Card>
          </Reveal>

          {/* Hobbies */}
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
                Interests & Hobbies
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
                      cursor: "default",
                      transition: "border-color 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `rgba(${rgb(
                        C.em
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