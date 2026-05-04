import { C, rgb } from "../../constants/colors";
import useTyping from "../../hooks/useTyping";

export default function Hero() {
  const typed = useTyping([
    "Distributed Systems",
    "Backend Engineering",
    "RAG Systems",
    "FastAPI & React",
    "Low Latency Systems",
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
      {/* Background */}
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

      <div style={{ maxWidth: "960px", zIndex: 1 }}>
        <div
          style={{
            background: "rgba(15,23,42,0.82)",
            border: "1px solid rgba(16,185,129,0.22)",
            borderRadius: "18px",
            padding: "clamp(1.4rem,4vw,2.8rem)",
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem,5.5vw,4rem)",
              color: "#f1f5f9",
              marginBottom: "0.8rem",
            }}
          >
            Tejas <span style={{ color: C.em }}>Khilare</span>
          </h1>

          {/* Typing */}
          <div style={{ marginBottom: "1.5rem" }}>
            <span style={{ color: C.em }}>{"> "}</span>
            <span style={{ color: "#e2e8f0" }}>{typed}</span>
          </div>

          {/* Description */}
          <p
            style={{
              color: "#64748b",
              lineHeight: 1.8,
              fontSize: "0.95rem",
              maxWidth: "650px",
              marginBottom: "2rem",
            }}
          >
            Backend-focused Software Developer building{" "}
            <span style={{ color: C.em, fontWeight: 600 }}>
              distributed systems
            </span>{" "}
            and{" "}
            <span style={{ color: C.ind, fontWeight: 600 }}>
              AI-powered applications
            </span>.
            <br />
            Developed a Redis-like datastore and a RAG-based document search
            engine using vector databases, OCR pipelines, and LLMs.
          </p>

          {/* CTA */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                background: C.em,
                color: "#020617",
                padding: "0.7rem 1.6rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              View Projects →
            </a>

            <a
              href="https://drive.google.com/file/d/1q1BeGKU0bn9fWW-B2WGWqC9PhgENXPaj/view?usp=sharing"
              target="_blank"
              style={{
                border: `1px solid ${C.ind}`,
                color: C.ind,
                padding: "0.7rem 1.6rem",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}