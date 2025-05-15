"use client";

import { useEffect, useState } from "react";
import {
  AlignJustify,
  Figma,
  Github,
  MapPin,
  Sun,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { CiShare1, CiTwitter } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { FaFigma, FaRegCopy } from "react-icons/fa";
import { FiGithub, FiPhone } from "react-icons/fi";

export default function Profile() {
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
            <div className="text-lg">About</div>
            <div className="text-lg">Work</div>
            <div className="text-lg">Testimonials</div>
            <div className="text-lg">Contact</div>
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
              <a href="#testimonials" className="text-lg">
                Testimonials
              </a>
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
                I`m a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
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
                <div className="w-[260px] h-[250px] lg:w-60 lg:h-60 bg-gray-400 absolute lg:left-8 lg:top-8 top-2 left-[-10px]"></div>
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
                  I`m a passionate, self-proclaimed designer who specializes in
                  full stack development (React.js & Node.js). I am very
                  enthusiastic about bringing the technical and visual aspects
                  of digital products to life. User experience, pixel perfect
                  design, and writing clear, readable, highly performant code
                  matters to me.
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  I began my journey as a web developer in 2015, and since then,
                  I`ve continued to grow and evolve as a developer, taking on
                  new challenges and learning the latest technologies along the
                  way. Now, in my early thirties, 7 years after starting my web
                  development journey, I`m building cutting-edge web
                  applications using modern technologies such as Next.js,
                  TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  I am very much a progressive thinker and enjoy working on
                  products end to end, from ideation all the way to development.
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  When I`m not in full-on developer mode, you can find me
                  hovering around on twitter or on indie hacker, witnessing the
                  journey of early startups or enjoying some free time. You can
                  follow me on Twitter where I share tech-related bites and
                  build in public, or you can follow me on GitHub.
                </div>
                <div className="text-lg text-gray-400 mt-5">
                  Finally, some quick bits about me.
                </div>
                <div className="text-lg flex justify-between text-gray-400 mt-5">
                  <ul className="list-disc list-inside pl-2 text-gray-400">
                    <li className="text-lg font-medium">
                      B.E. in Computer Engineering
                    </li>
                    <li className="text-lg font-medium">
                      Full time freelancer
                    </li>
                  </ul>
                  <ul className="list-disc list-inside pl-2 text-gray-400">
                    <li className="text-lg font-medium">Avid Learner</li>
                    <li className="text-lg font-medium">
                      Aspiring indie hacker
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
                  src="/icon/programing.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">Node JS</div>
            </li>
            <li className="text-center p-2">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/express.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">Express JS</div>
            </li>
            <li className="text-center p-2">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/nest.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">Nest JS</div>
            </li>
            <li className="text-center p-2">
              <div className="flex justify-center">
                <Image
                  className="object-cover w-2/5"
                  src="/icon/socket.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className="text-lg mt-1">Socket io</div>
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
              <div className="col-span-10 col-start-2 bg-white shadow-lg rounded-lg overflow-hidden p-10">
                <div className="flex justify-between items-start">
                  <Image
                    src="/icon/upwork.png"
                    alt="Upwork Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <div className="ml-4 flex-grow max-w-xl">
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
                  <div className="text-sm text-gray-400 text-right">
                    Nov 2021 - Present
                  </div>
                </div>
              </div>
              <div className="col-span-10 col-start-2 bg-white shadow-lg rounded-lg overflow-hidden p-10 mt-10">
                <div className="flex justify-between items-start">
                  <Image
                    src="/icon/upwork.png"
                    alt="Upwork Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <div className="ml-4 flex-grow max-w-xl">
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
                  <div className="text-sm text-gray-400 text-right">
                    Jul 2017 - Oct 2021
                  </div>
                </div>
              </div>
              <div className="col-span-10 col-start-2 bg-white shadow-lg rounded-lg overflow-hidden p-10 mt-10">
                <div className="flex justify-between items-start">
                  <Image
                    src="/icon/upwork.png"
                    alt="Upwork Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <div className="ml-4 flex-grow max-w-xl">
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <ul className="list-disc list-inside text-gray-400 mt-5">
                      <li className="text-base font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-400 text-right">
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
              <div className="col-span-10 col-start-2 bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-12 gap-4 p-10">
                <div className="col-span-10 lg:col-span-6">
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
                <div className="col-span-10 lg:col-span-6">
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
              <div className="col-span-10 col-start-2 bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-12 gap-4 p-10 mt-10">
                <div className="col-span-10 lg:col-span-6">
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
                <div className="col-span-10 lg:col-span-6">
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
              <div className="col-span-10 col-start-2 bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-12 gap-4 p-10 mt-10">
                <div className="col-span-10 lg:col-span-6">
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
                <div className="col-span-10 lg:col-span-6">
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
      <div className="w-full bg-gray-50">
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
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-4 bg-white shadow-lg rounded-lg p-10">
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
              <div className="col-span-4 bg-white shadow-lg rounded-lg p-10">
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
              <div className="col-span-4 bg-white shadow-lg rounded-lg p-10">
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
      </div>
      <div className="w-full bg-gray-50 mb-20">
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
              <br /> a developer, have a query, or simply want to connect.
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="flex justify-center items-center gap-5">
              <AiOutlineMail size={24} className="text-gray-400" />
              <div className="text-3xl font-bold">ranggaputra681@gmail.com</div>
              <FaRegCopy size={24} className="text-gray-400" />
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="flex justify-center items-center gap-5">
              <FiPhone size={24} className="text-gray-400" />
              <div className="text-3xl font-bold">+62 813 8358 5869</div>
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
