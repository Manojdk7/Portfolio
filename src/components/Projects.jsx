import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { projects } from "../data/projects";

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const CATEGORIES = ["All", "Computer Vision", "Deep Learning", "IoT & Hardware", "Full Stack", "Agentic AI"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-28 px-6">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-mono font-medium text-cyan-400">
              <span>03 // FEATURED WORK</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Engineered Systems & Projects
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-gray-400">
              Verified production-grade applications across industrial computer vision, deep learning for agriculture, IoT edge telemetries, and full-stack platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20 font-semibold"
                    : "border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#090d1a]/80 p-6 sm:p-7 backdrop-blur-md transition-all hover:border-cyan-500/40 hover:bg-[#0c1224] hover:shadow-xl hover:shadow-cyan-500/5"
              >
                {/* Top Section */}
                <div>
                  {/* Badge & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-cyan-300">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-cyan-400/90">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    {project.desc}
                  </p>

                  {/* Project Highlights / Metrics */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                      {project.highlights.map((m, i) => (
                        <div key={i} className="text-center">
                          <div className="text-xs font-bold text-white font-mono truncate" title={m.value}>
                            {m.value}
                          </div>
                          <div className="text-[10px] text-gray-400 uppercase tracking-wider truncate" title={m.label}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technology Badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-gray-200 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 active:scale-95"
                    >
                      <GithubIcon size={16} />
                      <span>View Repository</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-white/[0.02] px-3 py-1.5 rounded-lg border border-white/5">
                      <Lock size={12} className="text-gray-400" />
                      <span>Private / In Progress</span>
                    </span>
                  )}

                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-gray-400">
                      Verified System
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
