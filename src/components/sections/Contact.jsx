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
    label: "GitHub (Projects Code)",
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
        style={{ maxWidth: "640px", textAlign: "center" }}
      >
        <Reveal>
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#f1f5f9",
              marginBottom: "1rem",
            }}
          >
            Let’s Work Together
          </h2>

          <p style={{ color: "#64748b", marginBottom: "2rem" }}>
            Open to internships, backend roles, and collaborations in
            distributed systems or AI.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:tejaskhilare35@gmail.com"
            style={{
              display: "inline-block",
              background: C.em,
              color: "#020617",
              padding: "0.8rem 2rem",
              borderRadius: "8px",
              fontWeight: 700,
              marginBottom: "2rem",
            }}
          >
            Email Me →
          </a>

          {/* Socials */}
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                style={{
                  border: "1px solid rgba(71,85,105,0.3)",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  color: "#94a3b8",
                  textDecoration: "none",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>

          <p style={{ marginTop: "2rem", color: "#1e293b", fontSize: "0.7rem" }}>
            © 2026 Tejas Khilare
          </p>
        </Reveal>
      </div>
    </section>
  );
}