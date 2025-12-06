"use client";

import { useState } from "react";
import Deck from "./components/Deck";
import IntroShowcase from "./components/IntroShowcase";
import Hero from "./slides/Hero";
import EddyAIDemo from "./slides/EddyAIDemo";
import ReservoWhat from "./slides/Reservo_1_What";
import ReservoWhy from "./slides/Reservo_2_Why";
import ReservoDemo from "./slides/Reservo_3_Demo";
import VoiceAIOverview from "./slides/VoiceAI_1_Overview";
import VoiceAICallDemo from "./slides/VoiceAI_2_CallDemo";
import VoiceAIFeatures from "./slides/VoiceAI_3_Features";
import CustomObjectsExplanation from "./slides/CustomObjects_1_Explanation";
import CustomObjectsLoomDemo from "./slides/CustomObjects_2_LoomDemo";
import ProjectsElemental from "./slides/Projects_1_Elemental";
import DiscordBots from "./slides/DiscordBots";
import ElevenLabsSlide from "./slides/ElevenLabs";
import EducationalApps from "./slides/EducationalApps";
import ThankYou from "./slides/ThankYou";
import Contact from "./slides/Contact";

const slides = [
  Hero,
  EddyAIDemo,
  ReservoWhat,
  ReservoWhy,
  ReservoDemo,
  VoiceAIOverview,
  VoiceAICallDemo,
  VoiceAIFeatures,
  CustomObjectsExplanation,
  CustomObjectsLoomDemo,
  ProjectsElemental,
  DiscordBots,
  ElevenLabsSlide,
  EducationalApps,
  ThankYou,
  Contact,
];

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? <IntroShowcase onFinish={() => setShowIntro(false)} /> : <Deck slides={slides} />;
}
