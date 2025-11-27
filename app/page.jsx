import IntroAnimation from "./components/IntroAnimation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import ProjectReservo from "./components/ProjectReservo";
import ProjectElemental from "./components/ProjectElemental";
import SimpleFunnelDemo from "./components/SimpleFunnelDemo";
import VoiceAIAgentDemo from "./components/VoiceAIAgentDemo";
import CustomObjectsDemo from "./components/CustomObjectsDemo";
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
      <SimpleFunnelDemo />
      <VoiceAIAgentDemo />
      <CustomObjectsDemo />
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
