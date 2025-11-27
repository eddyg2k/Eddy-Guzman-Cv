"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../components/Section";
import LoomVideo from "../components/LoomVideo";
import thumb from "../../media/project-thumb-placeholder.png";
import heroBg from "../../media/hero-bg-placeholder.jpg";

const projects = [
  {
    title: "AI Voice Intake Agents",
    description:
      "Custom voice pipelines that capture inbound calls, qualify leads, and route them into GHL and CRM journeys automatically.",
    tags: ["LLM", "Voice", "GHL", "Webhooks"],
    media: thumb
  },
  {
    title: "GHL Automation Systems",
    description:
      "Revenue-grade GoHighLevel automations with triggers, event listeners, and agentic follow-up sequences that never miss a beat.",
    tags: ["GoHighLevel", "Events", "Agents"],
    media: heroBg
  },
  {
    title: "Multi-platform Workflow Orchestration",
    description:
      "Zapier + n8n + Make.com orchestration layers connecting data warehouses, messaging, scheduling, and compliance steps.",
    tags: ["Zapier", "n8n", "Make.com"],
    media: thumb
  },
  {
    title: "AI-powered Job Applicant Screening",
    description:
      "Structured vetting flows for applicants with AI summaries, hiring manager alerts, and CRM enrichment in real time.",
    tags: ["AI Agents", "Screening", "Enrichment"],
    media: heroBg
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-gradient-to-b from-ink via-[#090a10] to-ink">
      <div className="flex h-full w-full flex-col justify-center gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Selected builds</p>
          <h2 className="font-display text-3xl text-white md:text-4xl">Automation projects and proof</h2>
          <p className="max-w-2xl text-slate-300">
            Real-world systems designed for throughput: voice, chat, and multi-platform workflows orchestrated for operators and
            revenue teams.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <LoomVideo
              url="https://www.loom.com/embed/7e83fbbb7cfa49de886687f2d9b13ff6"
              title="Automation walkthrough"
            />
            <p className="text-sm text-slate-300">
              Loom walkthrough highlights how pipelines capture inputs, invoke AI agents, and sync data back into CRMs without
              manual intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="soft-border flex flex-col gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="overflow-hidden rounded-xl bg-black/50">
                  <Image
                    src={project.media}
                    alt={project.title}
                    className="h-28 w-full object-cover opacity-80"
                    placeholder="blur"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg text-white">{project.title}</h3>
                  <p className="text-sm text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/10 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
