import { C, rgb } from "../../constants/colors";
import useTyping from "../../hooks/useTyping";

export default function Hero() {
  const typed = useTyping([
    "Python",
    "JavaScript",
    "Core Java",
    "SQL",
    "Data Structure & Algorithms",
    "Distributed Systems",
    "AI / ML",
  ]);

  return (
    <section
      id="about"
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px clamp(1rem,4vw,3rem) 3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,0.04) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Glow Effect */}
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: "30%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "min(700px,90vw)",
          height: "min(700px,90vw)",
          background:
            "radial-gradient(circle,rgba(16,185,129,0.07) 0%,transparent 68%)",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            background: "rgba(15,23,42,0.82)",
            border: "1px solid rgba(16,185,129,0.22)",
            borderRadius: "18px",
            padding: "clamp(1.4rem,4vw,2.8rem)",
            backdropFilter: "blur(20px)",
            boxShadow:
              "0 0 80px rgba(16,185,129,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Terminal Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              marginBottom: "1.5rem",
            }}
          >
            {["#ef4444", "#f59e0b", "#10b981"].map((c, i) => (
              <div
                key={i}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: c,
                }}
              />
            ))}
            <span
              style={{
                marginLeft: "10px",
                color: "#475569",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.7rem",
              }}
            >
              tejas@portfolio:~$
            </span>
          </div>

          {/* whoami */}
          <p
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.82rem",
              marginBottom: "1.1rem",
            }}
          >
            <span style={{ color: C.em }}>$ </span>
            <span style={{ color: "#475569" }}>whoami</span>
          </p>

          <p
            style={{
              color: "#475569",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.74rem",
              marginBottom: "0.5rem",
            }}
          >
            // B.Tech CSE '26 · Software Developer · Pune, India
          </p>

          <h1
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem,5.5vw,4rem)",
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
              lineHeight: 1.06,
              margin: "0.4rem 0 0.9rem",
            }}
          >
            Tejas <span style={{ color: C.em }}>Khilare</span>
          </h1>

          {/* Typing Animation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "1.6rem",
            }}
          >
            <span
              style={{
                color: C.em,
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "clamp(1rem,2.5vw,1.2rem)",
              }}
            >
              {">"}
            </span>

            <span
              style={{
                color: "#e2e8f0",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "clamp(1rem,2.5vw,1.2rem)",
              }}
            >
              {typed}
            </span>

            <span
              className="blink"
              style={{
                display: "inline-block",
                width: "2px",
                height: "1.1em",
                background: C.em,
                verticalAlign: "middle",
              }}
            />
          </div>

          {/* Description */}
          <p
            style={{
              color: "#64748b",
              lineHeight: 1.85,
              fontSize: "0.93rem",
              maxWidth: "680px",
              marginBottom: "2rem",
            }}
          >
            Detail-oriented Software Developer specializing in{" "}
            <span style={{ color: C.em, fontWeight: 600 }}>
              Distributed Systems
            </span>{" "}
            and{" "}
            <span style={{ color: C.ind, fontWeight: 600 }}>
              AI-powered backends
            </span>
            . From Redis-inspired datastores with custom TCP protocols to hybrid
            search engines using Gemini embeddings — I engineer what lives under
            the hood.
          </p>

          {/* CTA Buttons */}
          <div className="cta-row">
            <a
              href="#projects"
              style={{
                background: C.em,
                color: "#020617",
                padding: "0.72rem 1.7rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontFamily: "'JetBrains Mono',monospace",
                fontWeight: 700,
                fontSize: "0.82rem",
                boxShadow: `0 0 22px rgba(${rgb(C.em)},0.35)`,
              }}
            >
              View Projects →
            </a>

            <a
              href="mailto:tejaskhilare35@gmail.com"
              style={{
                border: `1px solid rgba(${rgb(C.em)},0.45)`,
                color: C.em,
                padding: "0.72rem 1.7rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontFamily: "'JetBrains Mono',monospace",
                fontWeight: 600,
                fontSize: "0.82rem",
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              paddingTop: "1.8rem",
              borderTop: "1px solid rgba(71,85,105,0.22)",
            }}
          >
            <div className="hero-stats">
              {[
  { v: "Distributed Systems", l: "Designing Scalable Architectures" },
  { v: "Backend Engineering", l: "FastAPI · REST · Flask" },
  { v: "Problem Solving", l: "Leetcode" },
  { v: "Performance Mindset", l: "Low Latency · O(1) Thinking" },
].map((s) => (
                <div key={s.l}>
                  <div
                    style={{
                      color: C.em,
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {s.v}
                  </div>
                  <div
                    style={{
                      color: "#475569",
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.68rem",
                      marginTop: "2px",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}