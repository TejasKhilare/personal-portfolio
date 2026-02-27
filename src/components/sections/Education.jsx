import { useState, useEffect, useRef } from "react";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import Chip from "../ui/Chip";
import SectionHeader from "../ui/SectionHeader";
import { C } from "../../constants/colors";

const EDU = [
  {
    degree: "B.Tech – CSE",
    institution: "SIT, Kolhapur",
    period: "2022–2026",
    grade: "CGPA: 8.15 / 10",
    icon: "🎓",
  },
  {
    degree: "HSC (12th Grade)",
    institution: "Miraj Mahavidyalaya",
    period: "2022",
    grade: "77%",
    icon: "📚",
  },
  {
    degree: "SSC (10th Grade)",
    institution: "S.M. Highschool, Malgaon",
    period: "2020",
    grade: "80.80%",
    icon: "🏫",
  },
];

const CERTS = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    color: C.amb,
    image: "/certificates/java.png", // <-- ensure extension matches real file
  },
  {
    title: "Python Developer",
    issuer: "SoloLearn",
    color: C.em,
    image: "/certificates/python.png",
  },
  {
    title: "Core Java",
    issuer: "SoloLearn",
    color: C.em,
    image: "/certificates/corejava.png",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    color: C.ind,
    image: "/certificates/webdevelopment.png",
  },
];

export default function Education() {
  const [showButton, setShowButton] = useState(null);
  const [activeCert, setActiveCert] = useState(null);
  const certSectionRef = useRef(null);

  // Close "View" button when clicking outside certificates grid
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        certSectionRef.current &&
        !certSectionRef.current.contains(event.target)
      ) {
        setShowButton(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="education" style={{ width: "100%" }}>
      <div className="sw">
        <Reveal>
          <SectionHeader
            label="Education & Certifications"
            title="Academic Journey"
            sub="Where the foundation was built"
          />
        </Reveal>

        {/* ================= EDUCATION ================= */}
        <div className="edu-grid">
          {EDU.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.08}>
              <Card accent={C.em}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>
                  {edu.icon}
                </div>

                <p
                  style={{
                    color: C.em,
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "0.7rem",
                    marginBottom: "0.3rem",
                  }}
                >
                  {edu.period}
                </p>

                <h3
                  style={{
                    color: "#f1f5f9",
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    marginBottom: "0.2rem",
                  }}
                >
                  {edu.degree}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.8rem",
                    marginBottom: "0.7rem",
                  }}
                >
                  {edu.institution}
                </p>

                <Chip text={edu.grade} color={C.em} />
              </Card>
            </Reveal>
          ))}
        </div>

        {/* ================= CERTIFICATIONS ================= */}

        <Reveal delay={0.2}>
          <p
            style={{
              color: "#f1f5f9",
              fontFamily: "'Syne',sans-serif",
              fontWeight: 700,
              fontSize: "1.05rem",
              marginBottom: "1.2rem",
            }}
          >
            Certifications
          </p>
        </Reveal>

        <div className="cert-grid" ref={certSectionRef}>
          {CERTS.map((cert, i) => (
            <Reveal key={cert.title} delay={0.25 + i * 0.07}>
              <div
                onClick={() =>
                  setShowButton(
                    showButton === cert.title ? null : cert.title
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <Card accent={cert.color}>
                  <div
                    style={{
                      color: cert.color,
                      fontSize: "1.1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    ✦
                  </div>

                  <p
                    style={{
                      color: "#f1f5f9",
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 600,
                      fontSize: "0.87rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {cert.title}
                  </p>

                  <p
                    style={{
                      color: cert.color,
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.71rem",
                    }}
                  >
                    {cert.issuer}
                  </p>

                  {/* View Button */}
                  {showButton === cert.title && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCert(cert);
                        setShowButton(null);
                      }}
                      style={{
                        marginTop: "1rem",
                        padding: "6px 12px",
                        background: cert.color,
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      View Certificate
                    </button>
                  )}
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}

      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
            padding: "2rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "800px",
              width: "100%",
              background: "#0f172a",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <img
              src={activeCert.image}
              alt="certificate"
              style={{
                width: "100%",
                borderRadius: "8px",
              }}
            />

            <button
              onClick={() => setActiveCert(null)}
              style={{
                marginTop: "1rem",
                padding: "6px 12px",
                background: "#ef4444",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}