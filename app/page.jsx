"use client";

import { useState } from "react";
import Deck from "./components/Deck";
import IntroShowcase from "./components/IntroShowcase";
import Hero from "./slides/Hero";
import ReservoWhat from "./slides/Reservo_1_What";
import VoiceAIOverview from "./slides/VoiceAI_1_Overview";
import ProjectsDeckEngine from "./slides/Projects_4_DeckEngine";
import SkillsOverview from "./slides/Skills_1_Overview";
import Contact from "./slides/Contact";

const backgrounds = [
  "radial-gradient(circle at 15% 20%, rgba(110,243,255,0.35), transparent 35%), radial-gradient(circle at 80% 10%, rgba(126,122,255,0.32), transparent 32%), linear-gradient(135deg, #04121c 0%, #0a1220 55%, #101428 100%)",
  "radial-gradient(circle at 20% 20%, rgba(144,122,255,0.35), transparent 36%), radial-gradient(circle at 80% 0%, rgba(255,128,234,0.32), transparent 35%), linear-gradient(120deg, #0c0a1a 0%, #0f1124 60%, #1a1230 100%)",
  "radial-gradient(circle at 15% 30%, rgba(59,222,179,0.32), transparent 32%), radial-gradient(circle at 85% 10%, rgba(81,207,255,0.32), transparent 30%), linear-gradient(135deg, #041210 0%, #07171c 60%, #0c1f28 100%)",
  "radial-gradient(circle at 20% 35%, rgba(88,255,177,0.3), transparent 32%), radial-gradient(circle at 75% 10%, rgba(171,255,99,0.3), transparent 30%), linear-gradient(135deg, #0b1b12 0%, #0b1f17 55%, #0d1f1c 100%)",
  "radial-gradient(circle at 10% 20%, rgba(86,178,255,0.35), transparent 35%), radial-gradient(circle at 80% 15%, rgba(118,137,255,0.32), transparent 32%), linear-gradient(135deg, #081223 0%, #0a1428 55%, #0d162f 100%)",
  "radial-gradient(circle at 18% 24%, rgba(125,178,255,0.32), transparent 34%), radial-gradient(circle at 80% 10%, rgba(167,139,250,0.3), transparent 32%), linear-gradient(135deg, #0a1020 0%, #0f1426 55%, #13182e 100%)"
];

const slides = [
  { id: "hero", component: Hero, background: backgrounds[0] },
  { id: "reservo-what", component: ReservoWhat, background: backgrounds[1] },
  { id: "voiceai-overview", component: VoiceAIOverview, background: backgrounds[2] },
  { id: "projects-deck", component: ProjectsDeckEngine, background: backgrounds[3] },
  { id: "skills-overview", component: SkillsOverview, background: backgrounds[4] },
  { id: "contact", component: Contact, background: backgrounds[5] }
];

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? <IntroShowcase onFinish={() => setShowIntro(false)} /> : <Deck slides={slides} />;
}
