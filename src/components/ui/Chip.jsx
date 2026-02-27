import { rgb } from "../../constants/colors";

export default function Chip({ text, color }) {
  return (
    <span
      style={{
        background: `rgba(${rgb(color)},0.1)`,
        border: `1px solid rgba(${rgb(color)},0.32)`,
        color,
        padding: "3px 10px",
        borderRadius: "6px",
        fontSize: "0.71rem",
        fontFamily: "'JetBrains Mono',monospace",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </span>
  );
}