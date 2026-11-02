import React from "react";
import { ArrowUp } from "lucide-react";

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#03050a] py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-mono text-xs font-bold">
            M
          </span>
          <span className="text-sm font-semibold text-white">
            Manoj D K <span className="text-gray-400 font-normal">| Machine Learning & Full-Stack Engineer</span>
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-gray-400">
          <a
            href="https://github.com/Manojdk7"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/manoj-d-k-034806331"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors ml-4"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-400">
        <p>© {new Date().getFullYear()} Manoj D K. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Designed & engineered with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  );
}

