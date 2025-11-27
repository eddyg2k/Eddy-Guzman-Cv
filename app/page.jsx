import IntroAnimation from "./components/IntroAnimation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import ProjectReservo from "./components/ProjectReservo";
import ProjectElemental from "./components/ProjectElemental";
import DemoVideos from "./components/DemoVideos";
import DiscordBots from "./components/DiscordBots";
import About from "./components/About";
import Contact from "./components/Contact";
import ThankYou from "./components/ThankYou";
import LayeredBackground from "./components/LayeredBackground";

export default function HomePage() {
  return (
    <LayeredBackground>
      {/* Intro animation appears for 5 seconds then auto advances */}
      <IntroAnimation />
      {/* Main hero section: leave as is */}
      <Hero />
      {/* Experience overview */}
      <Experience />
      {/* Projects */}
      <ProjectReservo />
      <ProjectElemental />
      {/* Demo videos */}
      <DemoVideos />
      {/* Bots and educational apps */}
      <DiscordBots />
      {/* About me */}
      <About />
      {/* Contact */}
      <Contact />
      {/* Thank you (last slide, stops scroll) */}
      <ThankYou />
    </LayeredBackground>
  );
}
