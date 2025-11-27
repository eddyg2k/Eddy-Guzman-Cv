import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";

export default function HomePage() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-scroll bg-ink text-slate-100">
      <Intro />
      <Hero />
      <Projects />
      <Skills />
      <About />
    </main>
  );
}
