"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand/Tagline Column */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <Link
              href="/"
              className="font-display font-bold text-xl tracking-tight"
            >
              <span className="text-zinc-900 dark:text-white">Rangga</span>
              <span className="text-accent">Putra</span>
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-sm">
              Frontend Developer passionate about creating beautiful,
              functional, and user-centric digital experiences with modern web
              technologies.
            </p>
          </div>

          {/* Sitemap Navigation Column */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm" role="list">
              <li>
                <a
                  href="#services"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors duration-200"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors duration-200"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials / Let's Connect Column */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-white mb-4">
              Let's Connect
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ranggaputra681@gmail.com"
                className="group flex items-center gap-3.5 text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors duration-200"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-200 shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className="text-sm">ranggaputra681@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/rangga-putra"
                rel="noopener noreferrer"
                target="_blank"
                className="group flex items-center gap-3.5 text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors duration-200"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-200 shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/rangga48"
                rel="noopener noreferrer"
                target="_blank"
                className="group flex items-center gap-3.5 text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors duration-200"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-200 shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center sm:text-left">
            &copy; {currentYear} Rangga Putra. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent font-medium transition-colors"
              >
                Next.js
              </a>{" "}
              &amp;{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent font-medium transition-colors"
              >
                Tailwind CSS
              </a>
            </p>
            <a
              href="#"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 hover:text-accent font-medium transition-colors duration-200 group"
              title="Back to Top"
            >
              Back to top
              <svg
                className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
