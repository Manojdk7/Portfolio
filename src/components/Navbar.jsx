import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function GithubIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05070f]/80 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-mono text-base font-extrabold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            M
          </span>
          <span className="tracking-wide">
            Manoj<span className="text-cyan-400">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:text-cyan-400 hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Manojdk7"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="rounded-lg p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/manoj-d-k-034806331"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-lg p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:shadow-lg hover:shadow-cyan-500/25 hover:brightness-110 active:scale-95"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-gray-300 hover:bg-white/5 hover:text-cyan-400 md:hidden transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-cyan-500/15 bg-[#05070f]/95 px-6 py-6 backdrop-blur-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-gray-300 transition-colors hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-3">
                <a
                  href="https://github.com/Manojdk7"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg p-2 text-gray-400 hover:text-cyan-400"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/manoj-d-k-034806331"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg p-2 text-gray-400 hover:text-cyan-400"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-cyan-500 px-5 py-2 text-xs font-semibold text-black"
              >
                Let's Talk
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
