import React from "react";
import { motion } from "framer-motion";
import { Brain, Code2, Database, Wrench, Cpu, Terminal } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      skills: [
        { name: "Python", level: "Core Language" },
        { name: "PyTorch", level: "Deep Learning" },
        { name: "Scikit-Learn", level: "ML Pipelines" },
        { name: "Computer Vision", level: "OpenCV, MobileNetV2" },
        { name: "NumPy & Pandas", level: "Data Wrangling" },
        { name: "Matplotlib & Seaborn", level: "Visualization" },
        { name: "LLM Orchestration", level: "Prompt & Agent Workflows" },
      ],
    },
    {
      title: "IoT & Embedded Systems",
      icon: Cpu,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      skills: [
        { name: "ESP32 & Arduino", level: "Hardware Microcontrollers" },
        { name: "Embedded C / C++", level: "Firmware" },
        { name: "Sensor Interfacing", level: "MQ-135, MQ-2, DHT11" },
        { name: "Telemetry & Edge AI", level: "Real-Time Sensor Streams" },
        { name: "Serial Protocols", level: "UART, I2C, SPI" },
      ],
    },
    {
      title: "Frontend & Full-Stack",
      icon: Code2,
      color: "from-purple-500/20 to-indigo-500/20",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "React.js", level: "Modern Hooks & SPA" },
        { name: "Tailwind CSS", level: "Responsive Styling" },
        { name: "JavaScript (ES6+)", level: "Async, DOM, APIs" },
        { name: "HTML5 & CSS3", level: "Semantic Markup" },
        { name: "Framer Motion", level: "Micro-Interactions" },
        { name: "Three.js / WebGL", level: "3D Visualizations" },
      ],
    },
    {
      title: "Backend, Data & DevOps",
      icon: Database,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "Flask & FastAPI", level: "REST Microservices" },
        { name: "Node.js & Express", level: "Full-Stack Server" },
        { name: "SQL & MySQL", level: "Relational Queries" },
        { name: "MongoDB", level: "Document Store" },
        { name: "Git & GitHub", level: "Version Control & CI" },
        { name: "VS Code & Jupyter", level: "Development Workflow" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-28 px-6 bg-[#04060d]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-mono font-medium text-cyan-400">
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Verified Skills & Technologies
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-400">
            Tools, frameworks, and foundational technologies thoroughly practiced across verified academic work, personal projects, and IoT prototypes.
          </p>
        </div>

        {/* 4 Categorized Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-2xl border border-white/10 bg-[#090d1a]/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-cyan-500/40 hover:bg-[#0c1224]`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-cyan-400 border border-white/10 shadow-sm`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                    <span className="text-xs font-mono text-gray-500">{cat.skills.length} core proficiencies</span>
                  </div>
                </div>

                {/* Skill Badges Matrix */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/pill flex flex-col rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/[0.05]"
                    >
                      <span className="text-xs font-semibold text-gray-200 group-hover/pill:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

