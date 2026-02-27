import { C } from "../../constants/colors";

export default function SectionHeader({ label, title, sub }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <p style={{
        color: C.em,
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: "0.7rem",
        letterSpacing: "0.22em",
        marginBottom: "0.7rem"
      }}>
        ── {label.toUpperCase()} ──
      </p>

      <h2 style={{
        fontFamily: "'Syne',sans-serif",
        fontWeight: 800,
        color: "#f1f5f9",
        fontSize: "clamp(1.9rem,3.8vw,2.7rem)",
        letterSpacing: "-0.02em",
        lineHeight: 1.1
      }}>
        {title}
      </h2>

      {sub && (
        <p style={{ color: "#64748b", marginTop: "0.5rem", fontSize: "0.95rem" }}>
          {sub}
        </p>
      )}
    </div>
  );
}