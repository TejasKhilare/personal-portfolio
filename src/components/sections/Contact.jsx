import Reveal from "../ui/Reveal";
import { C, rgb } from "../../constants/colors";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tejas-khilare",
    icon: "in",
    color: "#0077b5",
  },
  {
    label: "GitHub",
    href: "https://github.com/tejaskhilare",
    icon: "</>",
    color: "#f1f5f9",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/tejaskhilare",
    icon: "LC",
    color: "#ffa116",
  },
  {
    label: "Email",
    href: "mailto:tejaskhilare35@gmail.com",
    icon: "@",
    color: C.em,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        width: "100%",
        borderTop: "1px solid rgba(71,85,105,0.16)",
      }}
    >
      <div
        className="sw"
        style={{
          maxWidth: "640px",
          textAlign: "center",
        }}
      >
        <Reveal>
          <p
            style={{
              color: C.em,
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              marginBottom: "1rem",
            }}
          >
            ── CONTACT ──
          </p>

          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem,5vw,3rem)",
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Let's Build Something
          </h2>

          <p
            style={{
              color: "#64748b",
              lineHeight: 1.75,
              marginBottom: "2rem",
              fontSize: "0.93rem",
            }}
          >
            Open to internships, collaborations, and conversations about
            distributed systems and AI.
          </p>

          {/* Email Button */}
          <a
            href="mailto:tejaskhilare35@gmail.com"
            style={{
              display: "inline-block",
              background: C.em,
              color: "#020617",
              padding: "0.85rem 2.2rem",
              borderRadius: "10px",
              textDecoration: "none",
              fontFamily: "'JetBrains Mono',monospace",
              fontWeight: 700,
              fontSize: "0.86rem",
              boxShadow: `0 0 28px rgba(${rgb(C.em)},0.38)`,
              transition: "all 0.2s",
              marginBottom: "2.2rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = `0 0 44px rgba(${rgb(
                C.em
              )},0.5)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 0 28px rgba(${rgb(
                C.em
              )},0.38)`;
            }}
          >
            tejaskhilare35@gmail.com →
          </a>

          {/* Social Links */}
          <div className="contact-links">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  background: "rgba(15,23,42,0.8)",
                  border: "1px solid rgba(71,85,105,0.32)",
                  borderRadius: "8px",
                  padding: "0.55rem 1.1rem",
                  textDecoration: "none",
                  color: "#94a3b8",
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.78rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = social.color;
                  e.currentTarget.style.color = social.color;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(71,85,105,0.32)";
                  e.currentTarget.style.color = "#94a3b8";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span style={{ fontWeight: 700 }}>
                  {social.icon}
                </span>
                {social.label}
              </a>
            ))}
          </div>

          <p
            style={{
              color: "#1e293b",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.7rem",
              marginTop: "3rem",
            }}
          >
            © 2025 Tejas Khilare · +91 7841980410
          </p>
        </Reveal>
      </div>
    </section>
  );
}