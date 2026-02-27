import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#020617", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <About />
      <Contact />
    </div>
  );
}