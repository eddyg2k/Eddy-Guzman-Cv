import Intro from "./components/Intro";
import Hero from "./components/Hero";
import LayeredBackground from "./components/LayeredBackground";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";

export default function HomePage() {
  return (
    <LayeredBackground>
      <Intro />
      <Hero />
      <Projects />
      <Skills />
      <About />
    </LayeredBackground>
  );
}
