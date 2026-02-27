import { useEffect, useState } from "react";
import { C } from "../../constants/colors";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["About","Skills","Projects","Experience","Education","Contact"];

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(1rem,4vw,2.5rem)",
        background: scrolled ? "rgba(2,8,23,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(16,185,129,0.1)" : "none",
        transition: "all 0.3s ease",
      }}>
        <a href="#about" style={{
          textDecoration: "none",
          fontFamily: "'JetBrains Mono',monospace",
          fontWeight: 700,
          fontSize: "1rem",
          color: C.em
        }}>
          <span style={{ color: "#475569" }}>{"<"}</span>
          TK
          <span style={{ color: "#475569" }}>{"/>"}</span>
        </a>

        <div className="nav-links">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.08em"
              }}
            >
              {l}
            </a>
          ))}
        </div>

        <button
          className="burger"
          onClick={() => setOpen(o => !o)}
          style={{
            background: "none",
            border: "none",
            color: C.em,
            fontSize: "1.4rem",
            cursor: "pointer"
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div style={{
          position: "fixed",
          top: "60px",
          left: 0,
          right: 0,
          zIndex: 199,
          background: "rgba(2,8,23,0.97)",
          padding: "1.2rem clamp(1rem,4vw,2.5rem)",
          display: "flex",
          flexDirection: "column",
          gap: "1.1rem"
        }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.9rem"
              }}
            >
              → {l}
            </a>
          ))}
        </div>
      )}
    </>
  );
}