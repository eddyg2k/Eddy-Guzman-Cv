import Intro from "./components/Intro";
import Hero from "./components/Hero";
import LayeredBackground from "./components/LayeredBackground";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ink text-slate-100">
      <Intro />
      <Hero />
      <LayeredBackground />
      <Projects />
      <Skills />
      <About />
    </main>
  );
}
