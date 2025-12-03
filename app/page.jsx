"use client";

import { useState } from "react";
import Deck from "./components/Deck";
import IntroShowcase from "./components/IntroShowcase";
import Hero from "./slides/Hero";
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

const backgrounds = [
  "radial-gradient(circle at 15% 20%, rgba(110,243,255,0.35), transparent 35%), radial-gradient(circle at 80% 10%, rgba(126,122,255,0.32), transparent 32%), linear-gradient(135deg, #04121c 0%, #0a1220 55%, #101428 100%)",
  "radial-gradient(circle at 20% 20%, rgba(144,122,255,0.35), transparent 36%), radial-gradient(circle at 80% 0%, rgba(255,128,234,0.32), transparent 35%), linear-gradient(120deg, #0c0a1a 0%, #0f1124 60%, #1a1230 100%)",
  "radial-gradient(circle at 15% 30%, rgba(59,222,179,0.32), transparent 32%), radial-gradient(circle at 85% 10%, rgba(81,207,255,0.32), transparent 30%), linear-gradient(135deg, #041210 0%, #07171c 60%, #0c1f28 100%)",
  "radial-gradient(circle at 20% 35%, rgba(88,255,177,0.3), transparent 32%), radial-gradient(circle at 75% 10%, rgba(171,255,99,0.3), transparent 30%), linear-gradient(135deg, #0b1b12 0%, #0b1f17 55%, #0d1f1c 100%)",
  "radial-gradient(circle at 10% 20%, rgba(86,178,255,0.35), transparent 35%), radial-gradient(circle at 80% 15%, rgba(118,137,255,0.32), transparent 32%), linear-gradient(135deg, #081223 0%, #0a1428 55%, #0d162f 100%)",
  "radial-gradient(circle at 15% 25%, rgba(247,121,242,0.32), transparent 32%), radial-gradient(circle at 80% 10%, rgba(141,137,255,0.32), transparent 30%), linear-gradient(135deg, #12081a 0%, #170c22 55%, #1d1230 100%)",
  "radial-gradient(circle at 20% 30%, rgba(255,180,162,0.28), transparent 34%), radial-gradient(circle at 80% 12%, rgba(255,140,102,0.32), transparent 32%), linear-gradient(135deg, #1c0a14 0%, #241018 55%, #2c1522 100%)",
  "radial-gradient(circle at 15% 25%, rgba(147,197,253,0.28), transparent 34%), radial-gradient(circle at 78% 8%, rgba(129,140,248,0.3), transparent 32%), linear-gradient(135deg, #0c0c24 0%, #0f1230 55%, #0f1836 100%)",
  "radial-gradient(circle at 18% 24%, rgba(255,198,115,0.32), transparent 34%), radial-gradient(circle at 75% 12%, rgba(255,153,102,0.32), transparent 32%), linear-gradient(135deg, #1c0d08 0%, #241410 55%, #2c1a16 100%)",
  "radial-gradient(circle at 15% 22%, rgba(255,176,122,0.32), transparent 34%), radial-gradient(circle at 80% 10%, rgba(255,214,102,0.28), transparent 32%), linear-gradient(135deg, #231206 0%, #2c170b 55%, #32200f 100%)",
  "radial-gradient(circle at 18% 26%, rgba(110,196,255,0.32), transparent 34%), radial-gradient(circle at 80% 12%, rgba(126,122,255,0.3), transparent 32%), linear-gradient(135deg, #071320 0%, #0a1726 55%, #0f1c30 100%)",
  "radial-gradient(circle at 18% 26%, rgba(87,242,203,0.28), transparent 34%), radial-gradient(circle at 78% 8%, rgba(86,190,255,0.3), transparent 32%), linear-gradient(135deg, #07161c 0%, #0a1c24 55%, #0f2430 100%)",
  "radial-gradient(circle at 20% 24%, rgba(208,128,255,0.32), transparent 34%), radial-gradient(circle at 82% 12%, rgba(255,155,219,0.3), transparent 32%), linear-gradient(135deg, #1a0c1f 0%, #1f1128 55%, #231633 100%)",
  "radial-gradient(circle at 18% 26%, rgba(124,169,255,0.32), transparent 34%), radial-gradient(circle at 75% 10%, rgba(118,220,255,0.28), transparent 32%), linear-gradient(135deg, #0c101c 0%, #0f1323 55%, #13172b 100%)",
  "radial-gradient(circle at 18% 24%, rgba(125,255,200,0.32), transparent 34%), radial-gradient(circle at 80% 10%, rgba(102,234,255,0.3), transparent 32%), linear-gradient(135deg, #061412 0%, #0a1b18 55%, #0d221f 100%)",
];

const slides = [
  { id: "hero", component: Hero, background: backgrounds[0] },
  { id: "reservo-what", component: ReservoWhat, background: backgrounds[1] },
  { id: "reservo-why", component: ReservoWhy, background: backgrounds[2] },
  { id: "reservo-demo", component: ReservoDemo, background: backgrounds[3] },
  { id: "voiceai-overview", component: VoiceAIOverview, background: backgrounds[4] },
  { id: "voiceai-call", component: VoiceAICallDemo, background: backgrounds[5] },
  { id: "voiceai-features", component: VoiceAIFeatures, background: backgrounds[6] },
  { id: "custom-objects-explanation", component: CustomObjectsExplanation, background: backgrounds[7] },
  { id: "custom-objects-loom", component: CustomObjectsLoomDemo, background: backgrounds[8] },
  { id: "projects-elemental", component: ProjectsElemental, background: backgrounds[9] },
  { id: "discord-bots", component: DiscordBots, background: backgrounds[10] },
  { id: "elevenlabs", component: ElevenLabsSlide, background: backgrounds[11] },
  { id: "educational-apps", component: EducationalApps, background: backgrounds[12] },
  { id: "thank-you", component: ThankYou, background: backgrounds[13] },
  { id: "contact", component: Contact, background: backgrounds[14] },
];

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? <IntroShowcase onFinish={() => setShowIntro(false)} /> : <Deck slides={slides} />;
}
