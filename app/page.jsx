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
  "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.05), transparent 36%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.04), transparent 32%), linear-gradient(135deg, #050505 0%, #0d0f12 55%, #151820 100%)",
  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 36%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.04), transparent 32%), linear-gradient(135deg, #080809 0%, #101318 55%, #191d25 100%)",
  "radial-gradient(circle at 15% 30%, rgba(255,255,255,0.06), transparent 34%), radial-gradient(circle at 85% 10%, rgba(255,255,255,0.05), transparent 32%), linear-gradient(135deg, #0b0c0e 0%, #13171d 55%, #1c212b 100%)",
  "radial-gradient(circle at 20% 35%, rgba(255,255,255,0.06), transparent 34%), radial-gradient(circle at 75% 10%, rgba(255,255,255,0.05), transparent 32%), linear-gradient(135deg, #0d0f12 0%, #161b22 55%, #1f2530 100%)",
  "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.07), transparent 34%), radial-gradient(circle at 80% 15%, rgba(255,255,255,0.06), transparent 32%), linear-gradient(135deg, #101215 0%, #1a1f27 55%, #232c35 100%)",
  "radial-gradient(circle at 15% 25%, rgba(255,255,255,0.07), transparent 34%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.06), transparent 32%), linear-gradient(135deg, #131417 0%, #1d232c 55%, #27323d 100%)",
  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent 34%), radial-gradient(circle at 80% 12%, rgba(255,255,255,0.07), transparent 32%), linear-gradient(135deg, #15161a 0%, #202731 55%, #2b3441 100%)",
  "radial-gradient(circle at 15% 25%, rgba(255,255,255,0.08), transparent 34%), radial-gradient(circle at 78% 8%, rgba(255,255,255,0.07), transparent 32%), linear-gradient(135deg, #181a1d 0%, #232c36 55%, #2e3947 100%)",
  "radial-gradient(circle at 18% 24%, rgba(255,255,255,0.08), transparent 34%), radial-gradient(circle at 75% 12%, rgba(255,255,255,0.07), transparent 32%), linear-gradient(135deg, #1b1d20 0%, #26303a 55%, #323e4c 100%)",
  "radial-gradient(circle at 15% 22%, rgba(255,255,255,0.09), transparent 34%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.08), transparent 32%), linear-gradient(135deg, #1e2024 0%, #29333e 55%, #354352 100%)",
  "radial-gradient(circle at 18% 26%, rgba(255,255,255,0.09), transparent 34%), radial-gradient(circle at 80% 12%, rgba(255,255,255,0.08), transparent 32%), linear-gradient(135deg, #222429 0%, #2d3944 55%, #394a59 100%)",
  "radial-gradient(circle at 18% 26%, rgba(255,255,255,0.1), transparent 34%), radial-gradient(circle at 78% 8%, rgba(255,255,255,0.09), transparent 32%), linear-gradient(135deg, #26282d 0%, #313f4a 55%, #3d5260 100%)",
  "radial-gradient(circle at 20% 24%, rgba(255,255,255,0.1), transparent 34%), radial-gradient(circle at 82% 12%, rgba(255,255,255,0.09), transparent 32%), linear-gradient(135deg, #2b2f34 0%, #364553 55%, #455d6c 100%)",
  "radial-gradient(circle at 18% 26%, rgba(255,255,255,0.12), transparent 34%), radial-gradient(circle at 75% 10%, rgba(255,255,255,0.1), transparent 32%), linear-gradient(135deg, #32373d 0%, #3f4f5e 55%, #516879 100%)",
  "radial-gradient(circle at 18% 24%, rgba(255,255,255,0.14), transparent 34%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.12), transparent 32%), linear-gradient(135deg, #3c4248 0%, #5f666f 55%, #c4c7cc 100%)",
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
