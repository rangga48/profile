"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AlignJustify,
  X,
  Linkedin,
  Github,
  MapPin,
  Moon,
  Sun,
  Instagram,
} from "lucide-react";
import { CiShare1, CiTwitter } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { FaFigma, FaRegCopy } from "react-icons/fa";
import { FiGithub, FiPhone } from "react-icons/fi";
import { CV_CONFIG } from "@/config/cv";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = `/cv/${CV_CONFIG.file}`;
    link.download = CV_CONFIG.downloadAs;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };
  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
    // Load AOS via CDN to bypass npm module resolution issues
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
    document.head.appendChild(link);

    // Ensure we don't inject multiple times across hot reloads
    if (!document.querySelector('script[src*="aos.js"]')) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        if (window.AOS) {
          // @ts-ignore
          window.AOS.init({ 
            once: true, 
            easing: "ease-out-cubic", 
            duration: 800,
            offset: 50,
            delay: 50 
          });
          // Small timeout to allow styles to settle and recalculate positions
          setTimeout(() => {
            // @ts-ignore
            window.AOS.refresh();
          }, 300);
        }
      };
      document.body.appendChild(script);
    } else {
        // @ts-ignore
        if (window.AOS) {
          // @ts-ignore
          window.AOS.init({ once: true, easing: "ease-out-cubic", duration: 800 });
          // @ts-ignore
          window.AOS.refresh();
        }
    }
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div>
      <div className="w-full container mx-auto px-4">
        <div className="flex justify-between items-center py-5 px-5 relative">
          <div className="flex items-center z-50 relative">
            <div className="text-xl tracking-tighter font-bold">{"</>"}</div>
          </div>
          <div className="hidden lg:flex items-center gap-x-7">
            <a
              href="#about"
              className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              About
            </a>
            <a
              href="#work"
              className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              Work
            </a>
            {/* <a href="#testimonials" className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1">Testimonials</a> */}
            <a
              href="#contact"
              className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              Contact
            </a>
            <div className="text-lg hover:scale-110 transition-transform duration-300">
              <button
                onClick={toggleDark}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {isDark ? (
                  <Moon
                    size={22}
                    className="text-gray-700 dark:text-yellow-300 transition-transform duration-300 rotate-0"
                  />
                ) : (
                  <Sun
                    size={22}
                    className="text-yellow-500 transition-transform duration-300 rotate-0"
                  />
                )}
              </button>
            </div>
            <button
              onClick={handleDownloadCV}
              className="w-full bg-black dark:bg-white text-white dark:text-black font-medium p-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-95 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Download CV
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-x-3 relative z-50">
            <button
              onClick={toggleDark}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
            >
              {isDark ? (
                <Moon
                  size={20}
                  className="text-gray-700 dark:text-yellow-300 transition-transform duration-300 rotate-0"
                />
              ) : (
                <Sun
                  size={20}
                  className="text-yellow-500 transition-transform duration-300 rotate-0"
                />
              )}
            </button>
            <button
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition-all duration-300"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={20} /> : <AlignJustify size={20} />}
            </button>
          </div>

          {menuOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity"
                onClick={() => setMenuOpen(false)}
              />
              <div className="absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-2xl rounded-3xl flex flex-col p-6 space-y-6 lg:hidden z-50 transition-transform origin-top">
                <div className="flex flex-col space-y-5">
                  <a
                    href="#about"
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
                  >
                    About
                  </a>
                  <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>
                  <a
                    href="#work"
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
                  >
                    Work
                  </a>
                  <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
                  >
                    Contact
                  </a>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      handleDownloadCV();
                      setMenuOpen(false);
                    }}
                    className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-3.5 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-95 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex p-5">
          <div className="grid grid-cols-12 gap-4">
            <div
              className="col-span-12 lg:col-span-6 p-5 order-2 lg:order-1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="text-3xl lg:text-6xl mt-5 lg:mt-0 font-bold">
                Hi, I`m Rangga 👋
              </div>
              <div className="text-lg mt-5 lg:mt-10 text-gray-400">
                Frontend Developer with hands-on experience in building and
                maintaining responsive web applications. Skilled in JavaScript
                and TypeScript, with a strong focus on creating clean, scalable,
                and user-friendly interfaces. <br />
                <br />
                Experienced in working with modern frontend frameworks,
                integrating REST APIs, and collaborating with cross-functional
                teams (UI/UX, Backend, QA). Proven ability to manage multiple
                projects simultaneously while maintaining high code quality and
                performance.
              </div>
              <div className="mt-10">
                <div className="text-lg flex items-center gap-x-4">
                  <MapPin /> Bandung, Indonesia
                </div>
                <div className="text-lg flex items-center gap-x-4 ml-1.5 mt-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-1.5"></div>
                  Available for new projects and open to work
                </div>
              </div>
              <div className="mt-10">
                <div className="flex items-center gap-x-4">
                  <a
                    href="https://github.com/rangga48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Github />
                  </a>
                  <a
                    href="https://www.instagram.com/mweh.48/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rangga-putra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-span-12 lg:col-span-6 flex justify-center items-center p-5 order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="relative group">
                <div className="w-[240px] h-[240px] lg:w-60 lg:h-60 bg-gray-400 absolute lg:left-8 lg:top-8 top-[1.4rem] left-[-25px] transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="w-60 h-60 relative overflow-hidden z-10 rounded-sm">
                  <Image
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    src="/img/profile.jpg"
                    alt="Profile"
                    width={240}
                    height={240}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="w-full bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center" data-aos="fade-up">
            <button
              className="bg-gray-200 text-black py-1 px-6 rounded-xl"
              disabled
            >
              About Me
            </button>
          </div>
          <div className="flex p-5 mt-10">
            <div className="grid grid-cols-12 gap-4">
              <div
                className="col-span-12 lg:col-span-6 flex justify-center items-center p-5"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="relative group">
                  <div className="w-[100%] h-[100%] bg-gray-400 absolute top-7 right-7 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                  <div className="w-[100%] h-[100%] relative overflow-hidden z-10 rounded-sm">
                    <Image
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      src="/img/profile2.jpg"
                      alt="Profile"
                      width={240}
                      height={240}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-span-12 lg:col-span-6 p-5"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="text-2xl font-bold">
                  Curious about me? Here you have it:
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  Hi, I'm Rangga Putra — a Frontend Developer based in Bandung,
                  Indonesia, with a passion for building clean, responsive, and
                  user-friendly web applications.
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  My journey in web development started back in 2022 when I
                  interned at a government agency, and since then I haven't
                  looked back. I've grown from debugging PHP apps to managing up
                  to 9 active products simultaneously as a professional frontend
                  developer — and I genuinely enjoy every bit of the challenge.
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  I specialize in Angular and TypeScript, with solid experience
                  in Laravel, Bootstrap, Tailwind CSS, and REST API integration.
                  I care deeply about writing readable, performant code and
                  delivering interfaces that feel great to use.
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  Currently, I'm a Frontend Developer at PT. Adhikari Invoasi
                  Indonesia, where I work closely with UI/UX designers and
                  backend teams to ship high-quality features across multiple
                  products. Before that, I freelanced for 2+ years, completing
                  over 30 web projects for clients across various industries.
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  A few quick things about me:
                </div>
                <div className="text-lg flex flex-col lg:flex-row lg:justify-between text-gray-400 mt-5 gap-y-2 lg:gap-y-0">
                  <ul className="list-disc list-inside pl-2 text-gray-400">
                    <li className="text-sm font-medium">
                      Bachelor's in Informatics Engineering — Politeknik Pos
                      Indonesia
                    </li>
                    <li className="text-sm font-medium">
                      Open to freelance opportunities
                    </li>
                  </ul>
                  <ul className="list-disc list-inside pl-2 text-gray-400">
                    <li className="text-sm font-medium">
                      Currently building with Angular, TypeScript & Laravel
                    </li>
                    <li className="text-sm font-medium">
                      Based in Bandung, always happy to connect
                    </li>
                  </ul>
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  One last thing, I`m available for freelance work, so feel free
                  to reach out and say hello! I promise I don`t bite 😉
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center" data-aos="fade-up">
            <button
              className="bg-gray-200 text-black py-1 px-6 rounded-xl"
              disabled
            >
              Skills
            </button>
          </div>
          <div className="w-full">
            <div className="text-lg text-center mt-5 text-gray-400">
              The skills, tools and technologies I am really good at:
            </div>
          </div>
          <ul
            className="grid grid-cols-3 gap-4 sm:grid-cols-8 mt-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/js.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">Javascript</div>
            </li>
            <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/typescript.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">Typescript</div>
            </li>
            <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/react.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">React</div>
            </li>
            <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/nextjs.svg"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">Next JS</div>
            </li>
            <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/git.svg"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">Git</div>
            </li>
            <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/laravel.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">Laravel</div>
            </li>
            <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/tailwind-css.svg"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">Tailwind CSS</div>
            </li>
            <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/css.svg"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">CSS</div>
            </li>
            <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/angular.svg"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">Angular</div>
            </li>
            <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/bootstrap.svg"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">Bootstrap</div>
            </li>
            <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/html.svg"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">HTML</div>
            </li>
            <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/php.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">PHP</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center" data-aos="fade-up">
            <button
              className="bg-gray-200 text-black py-1 px-6 rounded-xl"
              disabled
            >
              Experience
            </button>
          </div>
          <div className="w-full" data-aos="fade-up" data-aos-delay="100">
            <div className="text-lg text-center mt-5 text-gray-400">
              Here is a quick summary of my most recent experiences:
            </div>
          </div>
          <div className="container mx-auto mt-10">
            <div className="grid grid-cols-12">
              <div
                className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden p-10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <Image
                    src="/icon/awh.png"
                    alt="Upwork Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <div className="ml-0 md:ml-4 mt-4 md:mt-0 flex-grow max-w-xl">
                    <h3 className="text-xl font-bold">Frontend Developer</h3>
                    <ul className="list-disc list-inside text-gray-400 mt-5">
                      <li className="text-base font-medium">
                        Develop and maintain web applications using Angular and
                        TypeScript .
                      </li>
                      <li className="text-base font-medium">
                        Manage multiple projects simultaneously (up to 9 active
                        products).
                      </li>
                      <li className="text-base font-medium">
                        Implement new features based on business and user
                        requirements .
                      </li>
                      <li className="text-base font-medium">
                        Perform bug fixing and optimize application performance.
                      </li>
                      <li className="text-base font-medium">
                        Integrate frontend applications with REST APIs.
                      </li>
                      <li className="text-base font-medium">
                        Collaborate with UI/UX designers and backend developers
                        to deliver high-quality features.
                      </li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-400 md:text-right mt-4 md:mt-0">
                    Jan 2024 - Present
                  </div>
                </div>
              </div>
              <div
                className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden p-10 mt-10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <Image
                    src="/icon/vaganza.jpg"
                    alt="Upwork Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />

                  <div className="ml-0 md:ml-4 mt-4 md:mt-0 flex-grow max-w-xl">
                    <h3 className="text-xl font-bold">
                      Full-Stack Web Developer (Internship)
                    </h3>
                    <ul className="list-disc list-inside text-gray-400 mt-5">
                      <li className="text-base font-medium">
                        Designed and developed a donation platform with a CMS
                        using Laravel, MySQL, and Eloquent.
                      </li>
                      <li className="text-base font-medium">
                        Developed dynamic and responsive web pages based on
                        UI/UX mockups using HTML, Bootstrap, CSS, and SCSS.
                      </li>
                      <li className="text-base font-medium">
                        Collaborated with UI/UX designers to ensure technical
                        feasibility of designs.
                      </li>
                      <li className="text-base font-medium">
                        Worked closely with clients and developers to meet
                        project requirements and goals.
                      </li>
                      <li className="text-base font-medium">
                        Managed the development process from design to
                        deployment, ensuring cross-browser compatibility.
                      </li>
                    </ul>
                  </div>

                  <div className="text-sm text-gray-400 md:text-right mt-4 md:mt-0">
                    Jul 2023 - Oct 2023
                  </div>
                </div>
              </div>
              <div
                className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden p-10 mt-10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <Image
                    src="/icon/diskominfo.jpg"
                    alt="Upwork Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <div className="ml-0 md:ml-4 mt-4 md:mt-0 flex-grow max-w-xl">
                    <h3 className="text-xl font-bold">IT Support</h3>
                    <ul className="list-disc list-inside text-gray-400 mt-5">
                      <li className="text-base font-medium">
                        Assisted in debugging and maintaining PHP-based
                        applications.
                      </li>
                      <li className="text-base font-medium">
                        Analyzed application requirements from stakeholders.
                      </li>
                      <li className="text-base font-medium">
                        Developed an Employee Attendance Information System.
                      </li>
                      <li className="text-base font-medium">
                        Supported feature improvements and system optimization.
                      </li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-400 md:text-right mt-4 md:mt-0">
                    Oct 2021 - Feb 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="work" className="w-full bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center" data-aos="fade-up">
            <button
              className="bg-gray-200 text-black py-1 px-6 rounded-xl"
              disabled
            >
              Work
            </button>
          </div>
          <div className="w-full" data-aos="fade-up" data-aos-delay="100">
            <div className="text-lg text-center mt-5 text-gray-400">
              Some of the noteworthy projects i have built:
            </div>
          </div>
          <div className="container mx-auto mt-10">
            <div className="grid grid-cols-12">
              <div
                className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-12 gap-4 p-10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex justify-center">
                    <Image
                      src="/img/visidea.png"
                      alt=""
                      height={500}
                      width={500}
                      quality={100}
                      className="rounded-[15px] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="text-lg">VisideaStudio</div>
                  <div className="text-md mt-5">
                    Developed a responsive and interactive landing page for
                    Visidea Studio using Angular, TypeScript, and Tailwind CSS.
                    Integrated RESTful APIs for dynamic data handling and
                    implemented a CMS-based architecture, enabling
                    administrators to easily manage and update all landing page
                    content without code changes. Also handled API integration,
                    state management, and content rendering to ensure optimal
                    performance and user experience
                  </div>
                  <div className="mt-5 flex flex-wrap aligns-center gap-2">
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      AngularJS
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Typescript
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Tailwindcss
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Axios
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Integrate REST API
                    </div>
                  </div>
                  <div className="mt-5">
                    <CiShare1 size={32} />
                  </div>
                </div>
              </div>
              <div
                className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-12 gap-4 p-10 mt-10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                  <div className="text-lg">Photobooth Landing Page</div>
                  <div className="text-md mt-5">
                    Developed a photobooth landing page using CodeIgniter 3,
                    PHP, Blade templating, Ajax and Bootstrap 4. Integrated
                    RESTful APIs for dynamic data management and implemented an
                    interactive map using Leaflet to visualize multiple
                    photobooth locations. Designed and implemented a CMS-driven
                    system, enabling full control of content, location points,
                    and other data through an admin dashboard without requiring
                    code changes. Also handled API integration, data rendering,
                    and UI responsiveness to ensure optimal performance and user
                    experience.
                  </div>
                  <div className="mt-5 flex flex-wrap aligns-center gap-2">
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      PHP
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Ajax
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      CodeIgniter 3
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Bootstrap 4
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      CSS
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      REST API
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Blade Templating
                    </div>
                  </div>
                  <div className="mt-5">
                    <CiShare1 size={32} />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                  <div className="flex justify-center">
                    <Image
                      src="/img/photobooth.png"
                      alt=""
                      height={500}
                      width={500}
                      quality={100}
                      className="rounded-[15px] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-12 gap-4 p-10 mt-10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex justify-center">
                    <Image
                      src="/img/pic.png"
                      alt=""
                      height={500}
                      width={500}
                      quality={100}
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="text-lg">Fiskil</div>
                  <div className="text-md mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas nec urna ac tellus volutpat viverra. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae.
                  </div>
                  <div className="mt-5 flex flex-wrap aligns-center gap-2">
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      React
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Next.js
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Typescript
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Nest.js
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      PostgreSQL
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Tailwindcss
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Figma
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Cypress
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Storybook
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
                      Git
                    </div>
                  </div>
                  <div className="mt-5">
                    <CiShare1 size={32} />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <button
              className="bg-gray-200 text-black py-1 px-6 rounded-xl"
              disabled
            >
              Testimonials
            </button>
          </div>
          <div className="w-full">
            <div className="text-lg text-center mt-5 text-gray-400">
              Nice things people have said about me:
            </div>
          </div>
          <div className="container mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16">
              <div className="bg-white shadow-lg rounded-lg p-10">
                <div className="flex justify-center">
                  <Image
                    src="/icon/icon-avatar.png"
                    alt="Upwork Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="text-lg mt-5 text-gray-400">
                  “Job well done! I am really impressed. He is very very good at
                  what he does:) I would recommend Sagar and will rehire in the
                  future for Frontend development.”
                </div>
                <div className="text-2xl text-center font-semibold mt-8">
                  John Doe
                </div>
                <div className="text-lg text-center text-gray-400">
                  Founder - xyz.com
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-10">
                <div className="flex justify-center">
                  <Image
                    src="/icon/icon-avatar.png"
                    alt="Upwork Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="text-lg mt-5 text-gray-400">
                  “Great guy, highly recommended for any COMPLEX front-end
                  development job! His skills are top-notch and he will be an
                  amazing addition to any team.”
                </div>
                <div className="text-2xl text-center font-semibold mt-8">
                  John Doe
                </div>
                <div className="text-lg text-center text-gray-400">
                  Founder - xyz.com
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-10">
                <div className="flex justify-center">
                  <Image
                    src="/icon/icon-avatar.png"
                    alt="Upwork Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="text-lg mt-5 text-gray-400">
                  “Sagar was extremely easy and pleasant to work with and he
                  truly cares about the project being a success. Sagar has a
                  high level of knowledge and was able to work on my MERN stack
                  application without any issues.”
                </div>
                <div className="text-2xl text-center font-semibold mt-8">
                  John Doe
                </div>
                <div className="text-lg text-center text-gray-400">
                  Founder - xyz.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div id="contact" className="w-full bg-gray-50 pb-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center" data-aos="fade-up">
            <button
              className="bg-gray-200 text-black py-1 px-6 rounded-xl"
              disabled
            >
              Get In Touch
            </button>
          </div>
          <div className="w-full" data-aos="fade-up" data-aos-delay="100">
            <div className="text-lg text-center mt-5 text-gray-400">
              What’s next? Feel free to reach out to me if youre looking for
              <br /> a Frontend Developer, have a query, or simply want to
              connect.
            </div>
          </div>
          <div className="w-full mt-10" data-aos="fade-up" data-aos-delay="200">
            <div className="flex justify-center items-center gap-5">
              <a href="mailto:ranggaputra681@gmail.com" title="Send Email">
                <AiOutlineMail
                  size={24}
                  className="text-gray-400 hover:text-black dark:hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300"
                />
              </a>
              <a
                href="mailto:ranggaputra681@gmail.com"
                className="text-lg lg:text-2xl font-bold hover:underline hover:text-gray-500 transition-all"
              >
                ranggaputra681@gmail.com
              </a>
              <button
                onClick={() => handleCopy("ranggaputra681@gmail.com", "email")}
                title="Copy email"
                className="relative group hover:scale-110 transition-transform"
              >
                {copiedEmail ? (
                  <span className="text-sm text-green-500 font-medium">
                    Copied!
                  </span>
                ) : (
                  <FaRegCopy
                    size={24}
                    className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors cursor-pointer"
                  />
                )}
              </button>
            </div>
          </div>
          <div className="w-full mt-10" data-aos="fade-up" data-aos-delay="300">
            <div className="flex justify-center items-center gap-5">
              <a
                href="https://wa.me/6281383585869"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
              >
                <FiPhone
                  size={24}
                  className="text-gray-400 hover:text-black dark:hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300"
                />
              </a>
              <a
                href="https://wa.me/6281383585869"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg lg:text-2xl font-bold hover:underline hover:text-gray-500 transition-all"
              >
                +62 813 8358 5869
              </a>
              <button
                onClick={() => handleCopy("+62 813 8358 5869", "phone")}
                title="Copy phone number"
                className="relative group hover:scale-110 transition-transform"
              >
                {copiedPhone ? (
                  <span className="text-sm text-green-500 font-medium">
                    Copied!
                  </span>
                ) : (
                  <FaRegCopy
                    size={24}
                    className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors cursor-pointer"
                  />
                )}
              </button>
            </div>
          </div>
          <div className="w-full mt-10" data-aos="fade-up" data-aos-delay="400">
            <div className="text-lg text-center text-gray-400">
              You may also find me on these platforms!
            </div>
          </div>
          <div className="w-full mt-3" data-aos="fade-up" data-aos-delay="500">
            <div className="flex justify-center items-center gap-3">
              <a
                href="https://github.com/rangga48"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.instagram.com/mweh.48/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rangga-putra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-300 py-5">
        <div className="text-sm lg:text-lg text-center text-gray-50">
          © 2025 | Designed and coded with ❤️ by Rangga
        </div>
      </div>
    </div>
  );
}
