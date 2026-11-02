import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Sparkles, Terminal, Mail } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";

function GithubIcon({ size = 18, className = "" }) {
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

function LinkedinIcon({ size = 18, className = "" }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const ROLES = [
  "Machine Learning Engineer",
  "AI Engineer",
  "Deep Learning Enthusiast",
  "Full Stack Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTyped(current.substring(0, typed.length + 1));
        if (typed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTyped(current.substring(0, typed.length - 1));
        if (typed.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typed, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl w-full">
        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[75vh]">
          
          {/* Left Column: Introduction & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono font-medium text-cyan-300 backdrop-blur-md w-fit mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Available for New Roles & Collaborations</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                Manoj D K
              </span>
            </motion.h1>

            {/* Animated Typing Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-4 flex items-center font-mono text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300"
            >
              <Terminal size={24} className="mr-3 text-cyan-400 shrink-0" />
              <span>{typed}</span>
              <span className="ml-1 inline-block w-2.5 animate-pulse text-cyan-400">|</span>
            </motion.div>

            {/* Master Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-gray-300 font-light leading-relaxed"
            >
              Building intelligent systems by combining machine learning, deep learning, computer vision, IoT hardware and modern software engineering.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-bold text-black transition-all hover:brightness-110 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95 cursor-pointer"
              >
                <Sparkles size={17} />
                <span>Explore My Work</span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="group flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-white/10 active:scale-95 cursor-pointer"
              >
                <FileText size={17} className="text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="https://github.com/Manojdk7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-mono text-gray-300 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-white/5 transition-all"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/manoj-d-k-034806331"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-mono text-gray-300 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-white/5 transition-all"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:manojdk1825@gmail.com"
                aria-label="Email Manoj"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-mono text-gray-300 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-white/5 transition-all"
              >
                <Mail size={16} className="text-cyan-400" />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Professional Portrait + Integrated WebGL Neural Network (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Visual Container Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl border border-cyan-500/30 bg-[#090d1a]/80 p-2.5 backdrop-blur-md shadow-2xl shadow-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
            >
              {/* Soft atmospheric backlight */}
              <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Verified Professional Portrait */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#05070f]">
                <img
                  src="/assets/manoj-profile.png"
                  alt="Manoj D K – Machine Learning Engineer"
                  loading="eager"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle vignette gradient overlay at bottom to anchor portrait */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090d1a] via-[#090d1a]/40 to-transparent" />

                {/* Live Role Badge on portrait */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-[#05070f]/85 px-3 py-2 backdrop-blur-md">
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">Manoj D K</div>
                    <div className="text-[10px] font-mono text-cyan-400">Machine Learning & Full-Stack</div>
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Interactive 3D WebGL Neural Network Component as a complementary live card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative -mt-6 z-20 w-[90%] sm:w-[85%] rounded-2xl border border-white/10 bg-[#05070f]/90 p-2 backdrop-blur-xl shadow-xl shadow-black/60"
            >
              <div className="flex items-center justify-between px-2.5 py-1 mb-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>3D Neural Network // WebGL</span>
                </span>
                <span className="text-[9px] font-mono text-gray-400">
                  Interactive Node Graph
                </span>
              </div>
              <div className="h-28 sm:h-32 w-full rounded-xl overflow-hidden bg-black/40 border border-white/5">
                <NeuralNetwork />
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-xs text-gray-400 hover:text-cyan-400 transition-colors"
      >
        <span className="mb-1 text-[10px] font-mono uppercase tracking-widest">Explore</span>
        <ArrowDown size={14} className="animate-bounce text-cyan-400" />
      </a>
    </section>
  );
}
