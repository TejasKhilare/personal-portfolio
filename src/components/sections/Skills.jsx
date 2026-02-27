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
    items: ["Python", "JavaScript", "Core Java", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: "◈",
    color: C.ind,
    items: [
      "React JS",
      "FastAPI",
      "Django",
      "Flask",
      "NumPy",
      "Pandas",
      "PyTesseract",
      "pdfPlumber",
    ],
  },
  {
    title: "Protocols & Web Tech",
    icon: "⟁",
    color: C.amb,
    items: ["WebSockets", "REST APIs", "HTTP/S", "TCP/IP", "JSON-RPC"],
  },
  {
    title: "Databases & Systems",
    icon: "⬡",
    color: C.pnk,
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Distributed Systems",
      "Consistent Hashing",
      "LRU Cache",
    ],
  },
  {
    title: "Tools & Version Control",
    icon: "⚙",
    color: C.tel,
    items: ["Git", "GitHub", "VS Code", "Google Colab"],
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
            sub="Languages, frameworks, and systems I work with"
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
                    <Chip
                      key={skill}
                      text={skill}
                      color={cat.color}
                    />
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