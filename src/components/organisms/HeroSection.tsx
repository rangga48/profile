"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const HeroSection = ({}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const words = ["Rangga", "Frontend Developer", "Full Stack Developer"];
    const tl = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      tl.to(textRef.current, {
        duration: 1.2,
        scrambleText: {
          text: word,
          chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          revealDelay: 0.1,
          speed: 0.3,
        },
      }).to({}, { duration: 2 }); // Pause for 2 seconds after revealing
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="reveal text-sm font-medium text-accent tracking-widest uppercase mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Available for work
            </p>
            <h1
              className="reveal d1 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Hi, I'm{" "}
              <span ref={textRef} className="text-accent">
                Rangga
              </span>
            </h1>
            <p
              className="reveal d2 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md mb-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Full Stack{" "}
              <strong className="font-medium text-zinc-700 dark:text-zinc-300">
                Software Engineer
              </strong>
              . with a frontend focus, dedicated to building beautiful,
              functional, and high-performance web applications using modern
              technologies.
            </p>
            <div
              className="reveal d3 flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="#work"
                className="shimmer inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm"
              >
                View my work
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm"
              >
                Get in touch
              </a>
            </div>
            <div
              className="reveal d4 inline-flex items-center gap-2 mt-8 px-4 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                4 Years of Professional Experience
              </span>
            </div>
          </div>

          <div className="reveal d2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="pf w-full h-full rounded-3xl" data-aos="fade-up">
                <Image
                  src="/img/profile.jpg"
                  alt="Eliott — Freelance UI/UX Designer"
                  loading="eager"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-black text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Open to projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
