import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Compass, Cpu, Brain, Layers, CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "B.Tech in Data Science & Engineering",
      subtitle: "G M University (SGPA: 8.0)",
      period: "2024 — Present",
      icon: GraduationCap,
    },
    {
      title: "Pre-University College",
      subtitle: "Jawahar Navodaya Vidyalaya Uttara Kannada (71%)",
      period: "Prior",
      icon: Award,
    },
    {
      title: "Core Engineering Domain",
      subtitle: "Machine Learning, Computer Vision & Edge AI",
      period: "Active Practice",
      icon: Brain,
    },
  ];

  const focusAreas = [
    {
      name: "Computer Vision & Deep Learning",
      description: "Developing CNNs, MobileNetV2, and object/spoilage detection systems for real-world visual understanding.",
    },
    {
      name: "IoT & Hardware Integration",
      description: "Interfacing ESP32, environmental sensors (MQ-135, DHT11), and microcontrollers with cloud and local backends.",
    },
    {
      name: "Agentic AI & Modern LLMs",
      description: "Architecting multi-agent reasoning workflows, prompt engineering, and intelligent automation systems.",
    },
    {
      name: "Full-Stack Web Engineering",
      description: "Building reactive, high-performance web applications using React, Node.js, Flask, and relational/document databases.",
    },
  ];

  return (
    <section id="about" className="relative py-28 px-6">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-mono font-medium text-cyan-400">
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Engineering at the intersection of{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI, Hardware & Code.
            </span>
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed">
            <p className="text-base sm:text-lg text-gray-200 font-light">
              I am a <strong className="text-white font-semibold">B.Tech Computer Science & Data Science</strong> student
              at G M University, passionate about designing intelligent computing systems that transcend typical software interfaces.
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              My engineering journey is driven by practical problem solving: from training computer vision models that diagnose food spoilage on edge microcontrollers, to orchestrating autonomous multi-agent travel planners, and architecting full-stack systems with real-time GPS geofencing.
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              Rather than viewing machine learning and software engineering in silos, I focus on full lifecycle implementation — from raw sensor telemetry, data cleaning, and model training in Python, to clean REST APIs and interactive, accessible user experiences.
            </p>

            {/* Core Values / Working Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Production-First Code</h4>
                  <p className="text-xs text-gray-400 mt-1">Emphasis on clean architectural patterns, maintainability, and token-level code quality.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Edge AI & Physical World</h4>
                  <p className="text-xs text-gray-400 mt-1">Bridging deep learning with physical hardware sensors, microcontrollers, and IoT telemetry.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Focus Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Cards */}
            <div className="rounded-2xl border border-white/10 bg-[#090d1a]/80 p-6 backdrop-blur-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4">Academic Background</h3>
              <div className="space-y-4">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-none last:pb-0">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                        <p className="text-xs text-gray-400 mt-0.5">{item.subtitle}</p>
                        <span className="inline-block mt-1 text-[11px] font-mono text-cyan-400/80">{item.period}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technical Pillars */}
            <div className="rounded-2xl border border-white/10 bg-[#090d1a]/80 p-6 backdrop-blur-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4">Technical Interests</h3>
              <div className="space-y-3">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                      {area.name}
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

