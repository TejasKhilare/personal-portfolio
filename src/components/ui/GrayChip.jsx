export default function GrayChip({ text }) {
  return (
    <span
      style={{
        background: "rgba(71,85,105,0.2)",
        border: "1px solid rgba(71,85,105,0.36)",
        color: "#94a3b8",
        padding: "2px 8px",
        borderRadius: "4px",
        fontSize: "0.7rem",
        fontFamily: "'JetBrains Mono',monospace",
      }}
    >
      {text}
    </span>
  );
}