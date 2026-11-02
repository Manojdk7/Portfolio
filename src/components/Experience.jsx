import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      period: "October 2024 — Present",
      role: "B.Tech in Data Science & Engineering",
      organization: "G M University, Davanagere",
      type: "Academic & Research",
      description:
        "Specializing in Machine Learning pipelines, Computer Vision, IoT sensor integration, and Data Structures. Actively building production-level prototypes like Fresense (FoodSafe-IoT) and Multi-Agent AI systems.",
      skills: ["Machine Learning", "Computer Vision", "IoT Sensors", "Python", "Data Structures"],
    },
    {
      period: "May 2025 — June 2025",
      role: "Software Engineering & Lexical Tool Prototyping",
      organization: "Independent Engineering Work",
      type: "Technical Project",
      description:
        "Engineered the Code Structure Analyzer web platform. Constructed token-level lexical AST parsers evaluating indentation depth, naming conventions, and comment ratios across 20+ programming languages.",
      skills: ["Flask", "Python", "Pygments", "Lexical Analysis", "Tailwind CSS"],
    },
    {
      period: "Prior",
      role: "Higher Secondary & Pre-University Studies",
      organization: "Jawahar Navodaya Vidyalaya Uttara Kannada",
      type: "Foundational Education",
      description:
        "Focused on Mathematics, Physics, and foundational Computer Science with a strong background in analytical problem solving.",
      skills: ["Mathematics", "Physics", "Analytical Thinking"],
    },
  ];

  const certifications = [
    {
      name: "Hashgraph Developer Course",
      issuer: "Built on Hedera",
      date: "December 2025",
      category: "Distributed Systems & Web3",
    },
    {
      name: "Java Object-Oriented Programming (OOP)",
      issuer: "Algorithm365",
      date: "November 2025",
      category: "Software Architecture",
    },
    {
      name: "Java Programming Fundamentals",
      issuer: "Algorithm365",
      date: "October 2025",
      category: "Core Languages",
    },
  ];

  return (
    <section id="experience" className="relative py-28 px-6 bg-[#04060d]">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-mono font-medium text-cyan-400">
            <span>04 // TIMELINE & CREDENTIALS</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Education, Experience & Certifications
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-400">
            Verified milestones, coursework, hands-on engineering projects, and accredited certifications.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-6 flex items-center gap-2">
              <Briefcase size={16} />
              <span>Milestones & Engineering Journey</span>
            </h3>

            <div className="relative border-l border-white/10 pl-6 ml-3 space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-cyan-400 bg-[#05070f] group-hover:bg-cyan-400 transition-colors" />

                  <span className="text-xs font-mono text-cyan-400/90">{exp.period}</span>
                  <h4 className="text-lg font-bold text-white mt-1">{exp.role}</h4>
                  <p className="text-xs font-medium text-gray-400 mt-0.5">
                    {exp.organization} • <span className="text-gray-500">{exp.type}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-gray-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-6 flex items-center gap-2">
              <Award size={16} />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#090d1a]/80 p-5 backdrop-blur-sm hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">{cert.name}</h4>
                      <p className="text-xs text-gray-400 mt-1">Issued by {cert.issuer}</p>
                    </div>
                    <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-mono font-medium text-cyan-300">
                      {cert.date}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>{cert.category}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Hackathon & Workshop Note */}
            <div className="mt-6 rounded-2xl border border-dashed border-cyan-500/20 bg-cyan-500/[0.02] p-5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                Continuous Learning & Hackathons
              </h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Active participant in innovation workshops, university AI showcases, and hardware hackathons focusing on solving real-world challenges in agriculture and food safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

