import { useState } from "react";
import { rgb } from "../../constants/colors";

export default function Card({ children, accent, extra = {} }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "rgba(15,23,42,0.78)",
        border: `1px solid rgba(${rgb(accent)},${hov ? 0.5 : 0.2})`,
        borderRadius: "14px",
        padding: "1.6rem",
        backdropFilter: "blur(14px)",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hov ? `0 16px 40px rgba(${rgb(accent)},0.13)` : "none",
        transition: "all 0.28s ease",
        ...extra,
      }}
    >
      {children}
    </div>
  );
}