"use client";

import { useState } from "react";

const ContactSection = ({}) => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "ranggaputra681@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="bg-zinc-900 dark:bg-zinc-900/50 border border-zinc-800 dark:border-zinc-800/50 rounded-3xl p-10 md:p-16 relative overflow-hidden text-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* Decorative Glowing Orbs */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          ></div>
          <div
            className="absolute -bottom-24 -left-24 w-60 h-60 bg-accent/10 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          ></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="reveal text-xs font-semibold text-white tracking-widest uppercase mb-4">
              Get in touch
            </p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
              Let's create something
              <br />
              extraordinary together
            </h2>
            <p className="reveal d2 text-zinc-400 leading-relaxed text-base md:text-lg mb-10">
              I'm open to frontend and full-stack opportunities, freelance work,
              or just chatting about new projects. Drop me a line, and let's
              start the conversation.
            </p>

            {/* CTA Buttons */}
            <div className="reveal d3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href={`mailto:${emailAddress}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-light text-white text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-accent/10"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send Email
              </a>
              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-zinc-800 hover:bg-zinc-700/80 border border-zinc-700/50 text-white text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {copied ? (
                  <>
                    <svg
                      className="w-4 h-4 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 text-zinc-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Grid */}
            <div className="reveal d4 border-t border-zinc-800/80 pt-8 flex flex-wrap justify-center gap-6 md:gap-8">
              <a
                href="https://linkedin.com/in/rangga-putra"
                rel="noopener noreferrer"
                target="_blank"
                className="group flex items-center gap-2.5 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-zinc-800/50 rounded-lg border border-zinc-700/30 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all shrink-0">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/rangga48"
                rel="noopener noreferrer"
                target="_blank"
                className="group flex items-center gap-2.5 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-zinc-800/50 rounded-lg border border-zinc-700/30 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all shrink-0">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
