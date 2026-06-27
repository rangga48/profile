"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900/50">
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display font-bold text-xl tracking-tight relative z-10"
        >
          <span className="text-zinc-900 dark:text-white">Rangga</span>
          <span className="text-accent">Putra</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm" role="list">
          <li>
            <Link
              href="/#services"
              className="nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/#experience"
              className="nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/#work"
              className="nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center gap-2 shimmer bg-accent text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-accent-light transition-colors"
          >
            Hire me{" "}
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {!menuOpen ? (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-900/50 shadow-lg py-6 px-6 flex flex-col gap-4">
          <Link
            href="/#services"
            onClick={() => setMenuOpen(false)}
            className="text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-1"
          >
            Services
          </Link>
          <Link
            href="/#experience"
            onClick={() => setMenuOpen(false)}
            className="text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-1"
          >
            Experience
          </Link>
          <Link
            href="/#work"
            onClick={() => setMenuOpen(false)}
            className="text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-1"
          >
            Work
          </Link>
          <Link
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-1"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-1"
          >
            Contact
          </Link>
          <hr className="border-zinc-100 dark:border-zinc-800 my-2" />
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="w-full justify-center inline-flex items-center gap-2 bg-accent text-black text-sm font-medium px-5 py-3 rounded-full hover:bg-accent-light transition-colors"
          >
            Hire me
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
