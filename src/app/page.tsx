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
import { dict } from "@/config/i18n";

const IndoFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-[18px] h-auto rounded-[2px] shadow-sm">
    <rect width="3" height="2" fill="#fff"/>
    <rect width="3" height="1" fill="#ce1126"/>
  </svg>
);

const UKFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-[18px] h-auto rounded-[2px] shadow-sm">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/>
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<"en" | "id">("en");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const toggleLanguage = () => {
    const next = lang === "en" ? "id" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

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
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
    const savedLang = localStorage.getItem("lang") as "en" | "id";
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Load AOS via CDN to bypass npm module resolution issues
    if (!document.querySelector('link[href*="aos.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
      document.head.appendChild(link);
    }

    const initAOS = () => {
      // @ts-ignore
      if (window.AOS) {
        // @ts-ignore
        window.AOS.init({
          once: false,
          mirror: true,
          easing: "ease-out-cubic",
          duration: 800,
          offset: 50,
          delay: 50,
        });
        // Small timeout to allow styles to settle and recalculate positions
        setTimeout(() => {
          // @ts-ignore
          window.AOS.refresh();
        }, 500);
      }
    };

    // Ensure we don't inject multiple times across hot reloads
    if (!document.querySelector('script[src*="aos.js"]')) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
      script.async = true;
      script.onload = initAOS;
      document.body.appendChild(script);
    } else {
      initAOS();
    }
  }, [isClient]);

  if (!isClient) {
    return null;
  }
  return (
    <div className="overflow-x-hidden overflow-y-clip">
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
              {dict[lang].nav.about}
            </a>
            <a
              href="#work"
              className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              {dict[lang].nav.work}
            </a>
            {/* <a href="#testimonials" className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1">Testimonials</a> */}
            <a
              href="#contact"
              className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              {dict[lang].nav.contact}
            </a>
            <div className="flex items-center gap-x-2 text-lg">
              <button
                onClick={toggleLanguage}
                title={lang === "en" ? "Switch to Indonesian" : "Switch to English"}
                className="h-8 px-2 flex items-center justify-center font-bold text-xs rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center gap-1.5">
                  {lang === "en" ? <UKFlag /> : <IndoFlag />}
                  <span>{lang === "en" ? "EN" : "ID"}</span>
                </div>
              </button>
              <div className="hover:scale-110 transition-transform duration-300">
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
            </div>
            <button
              onClick={handleDownloadCV}
              className="w-full bg-black dark:bg-white text-white dark:text-black font-medium p-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-95 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {dict[lang].nav.downloadCV}
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-x-3 relative z-50">
            <button
              onClick={toggleLanguage}
              title={lang === "en" ? "Switch to Indonesian" : "Switch to English"}
              className="h-9 px-2 flex items-center justify-center font-bold text-xs rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
            >
              <div className="flex items-center gap-1.5">
                {lang === "en" ? <UKFlag /> : <IndoFlag />}
                <span>{lang === "en" ? "EN" : "ID"}</span>
              </div>
            </button>
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
            <div className="fixed inset-0 bg-white dark:bg-[#0B0C10] z-[100] flex flex-col lg:hidden transition-all duration-300 overflow-hidden">
              <div className="flex justify-between items-center py-5 px-5 border-b border-gray-100 dark:border-white/10">
                <div className="text-xl tracking-tighter font-bold text-black dark:text-white">
                  {"</>"}
                </div>
                <button
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex flex-col px-5 py-6 space-y-6">
                  <a
                    href="#about"
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white transition-colors"
                  >
                    {dict[lang].nav.about}
                  </a>
                  <a
                    href="#work"
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white transition-colors"
                  >
                    {dict[lang].nav.work}
                  </a>
                  {/* <a
                    href="#testimonials"
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white transition-colors"
                  >
                    Testimonials
                  </a> */}
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white transition-colors"
                  >
                    {dict[lang].nav.contact}
                  </a>
                </div>

                <div className="border-t border-gray-100 dark:border-white/10 px-5 py-6 flex flex-col space-y-6 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-gray-800 dark:text-gray-300">
                      {dict[lang].nav.switchTheme}
                    </span>
                    <div className="flex items-center gap-x-2">
                    <button
                      onClick={toggleLanguage}
                      title={lang === "en" ? "Switch to Indonesian" : "Switch to English"}
                      className="px-2 py-1 flex items-center gap-1.5 flex-row rounded-full text-gray-800 dark:text-gray-200 transition-colors duration-200 font-bold"
                    >
                      {lang === "en" ? <UKFlag /> : <IndoFlag />}
                      <span>{lang === "en" ? "EN" : "ID"}</span>
                    </button>
                    <button
                      onClick={toggleDark}
                      title={
                        isDark ? "Switch to Light Mode" : "Switch to Dark Mode"
                      }
                      className="p-1 rounded-full text-gray-800 dark:text-gray-200 transition-colors duration-200"
                    >
                      {isDark ? (
                        <Moon
                          size={22}
                          className="text-gray-700 dark:text-gray-300"
                        />
                      ) : (
                        <Sun size={22} className="text-gray-500" />
                      )}
                    </button>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      handleDownloadCV();
                      setMenuOpen(false);
                    }}
                    className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-95 transition-all duration-300"
                  >
                    {dict[lang].nav.downloadCV}
                  </button>
                </div>
              </div>
            </div>
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
                {dict[lang].hero.greeting}
              </div>
              <div className="text-lg mt-5 lg:mt-10 text-gray-400 md:leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: `${dict[lang].hero.desc1} <br /><br /> ${dict[lang].hero.desc2}` }} />
              </div>
              <div className="mt-10">
                <div className="text-lg flex items-center gap-x-4">
                  <MapPin /> {dict[lang].hero.location}
                </div>
                <div className="text-lg flex items-center gap-x-4 ml-1.5 mt-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-1.5"></div>
                  {dict[lang].hero.available}
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
              {dict[lang].about.title}
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
                  {dict[lang].about.subtitle}
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  {dict[lang].about.p1}
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  {dict[lang].about.p2}
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  {dict[lang].about.p3}
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  {dict[lang].about.p4}
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  {dict[lang].about.p5}
                </div>
                <div className="text-lg flex flex-col lg:flex-row lg:justify-between text-gray-400 mt-5 gap-y-2 lg:gap-y-0">
                  <ul className="list-disc list-inside pl-2 text-gray-400">
                    <li className="text-sm font-medium">
                      {dict[lang].about.ul1[0]}
                    </li>
                    <li className="text-sm font-medium">
                      {dict[lang].about.ul1[1]}
                    </li>
                  </ul>
                  <ul className="list-disc list-inside pl-2 text-gray-400">
                    <li className="text-sm font-medium">
                      {dict[lang].about.ul2[0]}
                    </li>
                    <li className="text-sm font-medium">
                      {dict[lang].about.ul2[1]}
                    </li>
                  </ul>
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  {dict[lang].about.p6}
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
              {dict[lang].skills.title}
            </button>
          </div>
          <div className="w-full">
            <div className="text-lg text-center mt-5 text-gray-400">
              {dict[lang].skills.subtitle}
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
              {dict[lang].experience.title}
            </button>
          </div>
          <div className="w-full" data-aos="fade-up" data-aos-delay="100">
            <div className="text-lg text-center mt-5 text-gray-400">
              {dict[lang].experience.subtitle}
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
                    <h3 className="text-xl font-bold">{dict[lang].experience.awh.role}</h3>
                    <ul className="list-disc list-inside text-gray-400 mt-5">
                      <li className="text-base font-medium">
                        {dict[lang].experience.awh.tasks[0]}
                      </li>
                      <li className="text-base font-medium">
                        {dict[lang].experience.awh.tasks[1]}
                      </li>
                      <li className="text-base font-medium">
                        {dict[lang].experience.awh.tasks[2]}
                      </li>
                      <li className="text-base font-medium">
                        {dict[lang].experience.awh.tasks[3]}
                      </li>
                      <li className="text-base font-medium">
                        {dict[lang].experience.awh.tasks[4]}
                      </li>
                      <li className="text-base font-medium">
                        {dict[lang].experience.awh.tasks[5]}
                      </li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-400 md:text-right mt-4 md:mt-0">
                    {dict[lang].experience.awh.date}
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
                      {dict[lang].experience.vaganza.role}
                    </h3>
                    <ul className="list-disc list-inside text-gray-400 mt-5">
                      <li className="text-base font-medium">
                        {dict[lang].experience.vaganza.tasks[0]}
                      </li>
                      <li className="text-base font-medium">
                        {dict[lang].experience.vaganza.tasks[1]}
                      </li>
                      <li className="text-base font-medium">
                        {dict[lang].experience.vaganza.tasks[2]}
                      </li>
                      <li className="text-base font-medium">
                        {dict[lang].experience.vaganza.tasks[3]}
                      </li>
                      <li className="text-base font-medium">
                        {dict[lang].experience.vaganza.tasks[4]}
                      </li>
                    </ul>
                  </div>

                  <div className="text-sm text-gray-400 md:text-right mt-4 md:mt-0">
                    {dict[lang].experience.vaganza.date}
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
                    <h3 className="text-xl font-bold">{dict[lang].experience.diskominfo.role}</h3>
                    <ul className="list-disc list-inside text-gray-400 mt-5">
                      <li className="text-base font-medium">
                        {dict[lang].experience.diskominfo.tasks[0]}
                      </li>
                      <li className="text-base font-medium">
                        {dict[lang].experience.diskominfo.tasks[1]}
                      </li>
                      <li className="text-base font-medium">
                        {dict[lang].experience.diskominfo.tasks[2]}
                      </li>
                      <li className="text-base font-medium">
                        {dict[lang].experience.diskominfo.tasks[3]}
                      </li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-400 md:text-right mt-4 md:mt-0">
                    {dict[lang].experience.diskominfo.date}
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
              {dict[lang].work.title}
            </button>
          </div>
          <div className="w-full" data-aos="fade-up" data-aos-delay="100">
            <div className="text-lg text-center mt-5 text-gray-400">
              {dict[lang].work.subtitle}
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
                    {dict[lang].work.visidea.desc}
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
                  {/* <div className="mt-5">
                    <CiShare1 size={32} />
                  </div> */}
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
                    {dict[lang].work.photobooth.desc}
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
                  {/* <div className="mt-5">
                    <CiShare1 size={32} />
                  </div> */}
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
              <div
                className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-12 gap-4 p-10 mt-10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex justify-center">
                    <Image
                      src="/img/undangan.png"
                      alt=""
                      height={500}
                      width={500}
                      quality={100}
                      className="rounded-[15px] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="text-lg">Undangan</div>
                  <div className="text-md mt-5">
                    {dict[lang].work.undangan.desc}
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
                  {/* <div className="mt-5">
                    <CiShare1 size={32} />
                  </div> */}
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
              {dict[lang].contact.title}
            </button>
          </div>
          <div className="w-full" data-aos="fade-up" data-aos-delay="100">
            <div className="text-lg text-center mt-5 text-gray-400">
              <span dangerouslySetInnerHTML={{ __html: dict[lang].contact.subtitle }} />
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
              {dict[lang].contact.platforms}
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
          {dict[lang].contact.footer}
        </div>
      </div>
    </div>
  );
}
