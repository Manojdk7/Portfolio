import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("manojdk1825@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:manojdk1825@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-1/3 bottom-10 -z-10 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-mono font-medium text-cyan-400">
            <span>05 // GET IN TOUCH</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let's Build Something Intelligent Together
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-400">
            I am currently open to internship opportunities, research collaborations, and software engineering roles. Reach out directly or drop a message below.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#090d1a]/80 p-6 sm:p-8 backdrop-blur-sm space-y-6">
              <h3 className="text-lg font-bold text-white">Contact Information</h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-gray-400 uppercase">Email</div>
                      <a href="mailto:manojdk1825@gmail.com" className="text-xs sm:text-sm font-medium text-white hover:text-cyan-400">
                        manojdk1825@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-cyan-300 hover:bg-white/10"
                  >
                    {copiedEmail ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400 uppercase">Phone</div>
                    <a href="tel:+919113832072" className="text-xs sm:text-sm font-medium text-white hover:text-cyan-400">
                      +91 91138 32072
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400 uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-medium text-white">
                      Karnataka, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-3">Professional Profiles</span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Manojdk7"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs font-semibold text-gray-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manoj-d-k-034806331"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs font-semibold text-gray-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-[#090d1a]/80 p-6 sm:p-8 backdrop-blur-sm space-y-5"
            >
              <h3 className="text-lg font-bold text-white">Send a Direct Message</h3>
              <p className="text-xs text-gray-400">
                Fills and launches your default email client with your message drafted.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Opportunity / Collaboration Inquiry"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, team, or opportunity..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-sm font-semibold text-black transition-all hover:brightness-110 active:scale-[0.99] shadow-lg shadow-cyan-500/20"
              >
                <span>Send Message</span>
                <Send size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
