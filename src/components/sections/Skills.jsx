import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import Chip from "../ui/Chip";
import SectionHeader from "../ui/SectionHeader";
import { C } from "../../constants/colors";

const SKILLS = [
  {
    title: "Languages",
    icon: "⟨/⟩",
    color: C.em,
    items: ["Core Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks & Backend",
    icon: "◈",
    color: C.ind,
    items: [
      "FastAPI",
      "Flask",
      "React JS",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Databases & Storage",
    icon: "⬡",
    color: C.pnk,
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Qdrant (Vector DB)",
    ],
  },
  {
    title: "Distributed Systems & Concepts",
    icon: "⟁",
    color: C.amb,
    items: [
      "Consistent Hashing",
      "LRU Cache",
      "TCP/IP",
      "WebSockets",
      "System Design Basics",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁",
    color: C.tel,
    items: [
      "AWS (EC2, S3, RDS)",
      "Docker",
      "CI/CD (GitHub Actions)",
    ],
  },
  {
    title: "Data Processing & Tools",
    icon: "⚙",
    color: "#22c55e",
    items: [
      "PyTesseract (OCR)",
      "pdfPlumber",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        width: "100%",
        background: "rgba(15,23,42,0.35)",
      }}
    >
      <div className="sw">
        <Reveal>
          <SectionHeader
            label="Technical Skills"
            title="The Stack"
            sub="Technologies I use to build scalable systems"
          />
        </Reveal>

        <div className="skills-grid">
          {SKILLS.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <Card accent={cat.color}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: cat.color,
                    }}
                  >
                    {cat.icon}
                  </span>

                  <span
                    style={{
                      color: "#f1f5f9",
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                    }}
                  >
                    {cat.title}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  {cat.items.map((skill) => (
                    <Chip key={skill} text={skill} color={cat.color} />
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}