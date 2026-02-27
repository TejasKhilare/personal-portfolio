import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import Chip from "../ui/Chip";
import SectionHeader from "../ui/SectionHeader";
import { C, rgb } from "../../constants/colors";

const EXP = [
  {
    role: "Software Developer Intern",
    company: "Xtensible Software Technologies",
    location: "Pune",
    period: "Dec 2025 – Present",
    color: C.em,
    tags: ["FastAPI", "OCR", "JWT Auth", "REST API", "Agile"],
    points: [
      "Engineered an automated document validator for government income certificates using OCR and pattern matching — achieving 95%+ verification accuracy.",
      "Developed secure REST APIs with FastAPI + JWT Authentication for sensitive client data.",
      "Collaborated in Agile environment to modularize backend services, improving scalability.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Tecspeak IT Solutions",
    location: "Sangli",
    period: "June 2024 – July 2024",
    color: C.ind,
    tags: ["Django Channels", "WebSockets", "React", "Real-time"],
    points: [
      "Built a real-time chat application using Django Channels and WebSockets, reducing message latency significantly.",
      "Designed responsive React UI components with synchronized real-time state across multiple clients.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        width: "100%",
        background: "rgba(15,23,42,0.35)",
      }}
    >
      <div className="sw" style={{ maxWidth: "900px" }}>
        <Reveal>
          <SectionHeader
            label="Experience"
            title="Work Timeline"
            sub="Building real products in real teams"
          />
        </Reveal>

        <div style={{ position: "relative" }}>
          {/* Vertical Timeline Line */}
          <div
            style={{
              position: "absolute",
              left: "19px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: `linear-gradient(to bottom,${C.em},${C.ind})`,
              opacity: 0.22,
            }}
          />

          {EXP.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.1}>
              <div
                style={{
                  display: "flex",
                  gap: "clamp(1rem,3vw,1.8rem)",
                  marginBottom: "2.2rem",
                }}
              >
                {/* Timeline Dot */}
                <div style={{ flexShrink: 0 }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: `rgba(${rgb(exp.color)},0.12)`,
                      border: `2px solid ${exp.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: exp.color,
                      fontSize: "0.9rem",
                      marginTop: "6px",
                    }}
                  >
                    ◆
                  </div>
                </div>

                {/* Card */}
                <Card accent={exp.color} extra={{ flex: 1, minWidth: 0 }}>
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          color: "#f1f5f9",
                          fontFamily: "'Syne',sans-serif",
                          fontWeight: 700,
                          fontSize: "1rem",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {exp.role}
                      </h3>

                      <p
                        style={{
                          color: exp.color,
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: "0.76rem",
                        }}
                      >
                        {exp.company} · {exp.location}
                      </p>
                    </div>

                    <span
                      style={{
                        background: `rgba(${rgb(exp.color)},0.1)`,
                        border: `1px solid rgba(${rgb(exp.color)},0.3)`,
                        color: exp.color,
                        padding: "3px 10px",
                        borderRadius: "20px",
                        fontSize: "0.68rem",
                        fontFamily: "'JetBrains Mono',monospace",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0.8rem 0 1rem",
                    }}
                  >
                    {exp.points.map((pt, index) => (
                      <li
                        key={index}
                        style={{
                          display: "flex",
                          gap: "8px",
                          alignItems: "flex-start",
                          marginBottom: "0.45rem",
                        }}
                      >
                        <span
                          style={{
                            color: exp.color,
                            flexShrink: 0,
                            fontSize: "0.8rem",
                            marginTop: "3px",
                          }}
                        >
                          ▸
                        </span>

                        <span
                          style={{
                            color: "#94a3b8",
                            fontSize: "0.82rem",
                            lineHeight: 1.6,
                          }}
                        >
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                    }}
                  >
                    {exp.tags.map((tag) => (
                      <Chip key={tag} text={tag} color={exp.color} />
                    ))}
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}