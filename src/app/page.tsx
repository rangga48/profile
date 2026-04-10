"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AlignJustify,
  Figma,
  Github,
  MapPin,
  Sun,
  Twitter,
} from "lucide-react";
import { CiShare1, CiTwitter } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { FaFigma, FaRegCopy } from "react-icons/fa";
import { FiGithub, FiPhone } from "react-icons/fi";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div>
      <div className="w-full container mx-auto px-4">
        <div className="flex justify-between p-5 relative">
          <div className="flex items-center">
            <div className="text-lg font-bold">{"</>"}</div>
          </div>
          <div className="hidden lg:flex items-center gap-x-7">
            <div className="text-lg cursor-pointer">About</div>
            <div className="text-lg cursor-pointer">Work</div>
            {/* <div className="text-lg cursor-pointer">Testimonials</div> */}
            <div className="text-lg cursor-pointer">Contact</div>
            <div className="text-lg">
              <Sun />
            </div>
            <button className="w-full bg-black text-white p-3 rounded-xl">
              Download CV
            </button>
          </div>
          <div className="lg:hidden relative z-20">
            <button
              className="text-2xl"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <AlignJustify />
            </button>
          </div>

          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-4 lg:hidden z-10">
              <a href="#about" className="text-lg">
                About
              </a>
              <a href="#work" className="text-lg">
                Work
              </a>
              {/* <a href="#testimonials" className="text-lg">
                Testimonials
              </a> */}
              <a href="#contact" className="text-lg">
                Contact
              </a>
              <button className="bg-black text-white px-4 py-2 rounded-xl w-full">
                Download CV
              </button>
            </div>
          )}
        </div>
        <div className="flex p-5">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 p-5 order-2 lg:order-1">
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
                  <MapPin /> Rangga Putra, Bandung
                </div>
                <div className="text-lg flex items-center gap-x-4 ml-1.5 mt-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-1.5"></div>
                  Available for new projects
                </div>
              </div>
              <div className="mt-10">
                <div className="flex items-center gap-x-4">
                  <Github />
                  <Twitter />
                  <Figma />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex justify-center items-center p-5 order-1 lg:order-2">
              <div className="relative">
                <div className="w-[240px] h-[240px] lg:w-60 lg:h-60 bg-gray-400 absolute lg:left-8 lg:top-8 top-[1.4rem] left-[-25px]"></div>
                <div className="w-60 h-60 relative">
                  <Image
                    className="object-cover w-full h-full"
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
      <div className="w-full bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <button
              className="bg-gray-200 text-black py-1 px-6 rounded-xl"
              disabled
            >
              About Me
            </button>
          </div>
          <div className="flex p-5 mt-10">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-6 flex justify-center items-center p-5">
                <div className="relative">
                  <div className="w-[100%] h-[100%] bg-gray-400 absolute top-7 right-7"></div>
                  <div className="w-[100%] h-[100%] relative">
                    <Image
                      className="object-cover w-full h-full"
                      src="/img/profile2.jpg"
                      alt="Profile"
                      width={240}
                      height={240}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 p-5">
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
                <div className="text-lg flex justify-between text-gray-400 mt-5">
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
          <div className="flex justify-center">
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
          <ul className="grid grid-cols-3 gap-4 sm:grid-cols-8 mt-10">
            <li className="text-center p-2">
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
            <li className="text-center p-2">
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
            <li className="text-center p-2">
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
            <li className="text-center p-2">
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
            <li className="text-center p-2">
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
            <li className="text-center p-2">
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
            <li className="text-center p-2">
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
            <li className="text-center p-2">
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
            <li className="text-center p-2">
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
            <li className="text-center p-2">
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
            <li className="text-center p-2">
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
            <li className="text-center p-2">
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
          <div className="flex justify-center">
            <button
              className="bg-gray-200 text-black py-1 px-6 rounded-xl"
              disabled
            >
              Experience
            </button>
          </div>
          <div className="w-full">
            <div className="text-lg text-center mt-5 text-gray-400">
              Here is a quick summary of my most recent experiences:
            </div>
          </div>
          <div className="container mx-auto mt-10">
            <div className="grid grid-cols-12">
              <div className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden p-10">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <Image
                    src="/icon/upwork.png"
                    alt="Upwork Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <div className="ml-0 md:ml-4 mt-4 md:mt-0 flex-grow max-w-xl">
                    <h3 className="text-xl font-bold">
                      Sr. Frontend Developer
                    </h3>
                    <ul className="list-disc list-inside text-gray-400 mt-5">
                      <li className="text-base font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li className="text-base font-medium">
                        Ut pretium arcu et massa semper, id fringilla leo
                        semper.
                      </li>
                      <li className="text-base font-medium">
                        Sed quis justo ac magna.
                      </li>
                      <li className="text-base font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-400 md:text-right mt-4 md:mt-0">
                    Nov 2021 - Present
                  </div>
                </div>
              </div>
              <div className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden p-10 mt-10">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <Image
                    src="/icon/upwork.png"
                    alt="Upwork Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />

                  <div className="ml-0 md:ml-4 mt-4 md:mt-0 flex-grow max-w-xl">
                    <h3 className="text-xl font-bold">Team Lead</h3>
                    <ul className="list-disc list-inside text-gray-400 mt-5">
                      <li className="text-base font-medium">
                        Sed quis justo ac magna.
                      </li>
                      <li className="text-base font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li className="text-base font-medium">
                        Sed quis justo ac magna.
                      </li>
                      <li className="text-base font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                    </ul>
                  </div>

                  <div className="text-sm text-gray-400 md:text-right mt-4 md:mt-0">
                    Jul 2017 - Oct 2021
                  </div>
                </div>
              </div>
              <div className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden p-10 mt-10">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <Image
                    src="/icon/upwork.png"
                    alt="Upwork Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <div className="ml-0 md:ml-4 mt-4 md:mt-0 flex-grow max-w-xl">
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <ul className="list-disc list-inside text-gray-400 mt-5">
                      <li className="text-base font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-400 md:text-right mt-4 md:mt-0">
                    Dec 2015 - May 2017
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <button
              className="bg-gray-200 text-black py-1 px-6 rounded-xl"
              disabled
            >
              Work
            </button>
          </div>
          <div className="w-full">
            <div className="text-lg text-center mt-5 text-gray-400">
              Some of the noteworthy projects i have built:
            </div>
          </div>
          <div className="container mx-auto mt-10">
            <div className="grid grid-cols-12">
              <div className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-12 gap-4 p-10">
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
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      React
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Next.js
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Typescript
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Nest.js
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      PostgreSQL
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Tailwindcss
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Figma
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Cypress
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Storybook
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Git
                    </div>
                  </div>
                  <div className="mt-5">
                    <CiShare1 size={32} />
                  </div>
                </div>
              </div>
              <div className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-12 gap-4 p-10 mt-10">
                <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                  <div className="text-lg">Fiskil</div>
                  <div className="text-md mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas nec urna ac tellus volutpat viverra. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae.
                  </div>
                  <div className="mt-5 flex flex-wrap aligns-center gap-2">
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      React
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Next.js
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Typescript
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Nest.js
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      PostgreSQL
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Tailwindcss
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Figma
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Cypress
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Storybook
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Git
                    </div>
                  </div>
                  <div className="mt-5">
                    <CiShare1 size={32} />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
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
              </div>
              <div className="col-span-12 bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-12 gap-4 p-10 mt-10">
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
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      React
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Next.js
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Typescript
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Nest.js
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      PostgreSQL
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Tailwindcss
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Figma
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Cypress
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Storybook
                    </div>
                    <div className="text-lg bg-gray-300 rounded-xl py-1 px-6">
                      Git
                    </div>
                  </div>
                  <div className="mt-5">
                    <CiShare1 size={32} />
                  </div>
                </div>
              </div>
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
      <div className="w-full bg-gray-50 pb-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <button
              className="bg-gray-200 text-black py-1 px-6 rounded-xl"
              disabled
            >
              Get In Touch
            </button>
          </div>
          <div className="w-full">
            <div className="text-lg text-center mt-5 text-gray-400">
              What’s next? Feel free to reach out to me if youre looking for
              <br /> a Frontend Developer, have a query, or simply want to
              connect.
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="flex justify-center items-center gap-5">
              <AiOutlineMail size={24} className="text-gray-400" />
              <div className="text-2xl font-bold">ranggaputra681@gmail.com</div>
              <FaRegCopy size={24} className="text-gray-400" />
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="flex justify-center items-center gap-5">
              <FiPhone size={24} className="text-gray-400" />
              <div className="text-2xl font-bold">+62 813 8358 5869</div>
              <FaRegCopy size={24} className="text-gray-400" />
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="text-lg text-center text-gray-400">
              You may also find me on these platforms!
            </div>
          </div>
          <div className="w-full mt-3">
            <div className="flex justify-center items-center gap-3">
              <FiGithub size={20} />
              <CiTwitter size={26} />
              <FaFigma size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-300 py-5">
        <div className="text-lg text-center text-gray-50">
          © 2025 | Designed and coded with ❤️ by Miracle
        </div>
      </div>
    </div>
  );
}
