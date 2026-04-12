import sys

try:
    with open("d:\\Project\\profile\\src\\app\\page.tsx", "r", encoding="utf-8") as f:
        code = f.read()

    # Add import dict
    code = code.replace('import { CV_CONFIG } from "@/config/cv";', 'import { CV_CONFIG } from "@/config/cv";\nimport { dict } from "@/config/i18n";')

    # Add lang state
    state_block = """  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<"en" | "id">("en");
  const [copiedEmail, setCopiedEmail] = useState(false);"""
    code = code.replace('  const [isDark, setIsDark] = useState(false);\n  const [copiedEmail, setCopiedEmail] = useState(false);', state_block)

    lang_toggle1 = """  const toggleLanguage = () => {
    const next = lang === "en" ? "id" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  const toggleDark = () => {"""
    code = code.replace('  const toggleDark = () => {', lang_toggle1)

    ue1 = """    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
    const savedLang = localStorage.getItem("lang") as "en" | "id";
    if (savedLang) {
      setLang(savedLang);
    }"""
    code = code.replace("""    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }""", ue1)

    # toggle 1 (desktop)
    t1_old = """            <div className="text-lg hover:scale-110 transition-transform duration-300">
              <button
                onClick={toggleDark}"""
    t1_new = """            <div className="flex items-center gap-x-2 text-lg">
              <button
                onClick={toggleLanguage}
                title={lang === "en" ? "Switch to Indonesian" : "Switch to English"}
                className="w-10 h-10 flex items-center justify-center font-bold text-sm bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {lang === "en" ? "EN" : "ID"}
              </button>
              <div className="hover:scale-110 transition-transform duration-300">
              <button
                onClick={toggleDark}"""
    code = code.replace(t1_old, t1_new)
    # Fix the div closing
    code = code.replace("""                  />
                )}
              </button>
            </div>
            <button
              onClick={handleDownloadCV}""", """                  />
                )}
              </button>
              </div>
            </div>
            <button
              onClick={handleDownloadCV}""")

    # toggle 2 (mobile top)
    t2_old = """          <div className="flex lg:hidden items-center gap-x-3 relative z-50">
            <button
              onClick={toggleDark}"""
    t2_new = """          <div className="flex lg:hidden items-center gap-x-3 relative z-50">
            <button
              onClick={toggleLanguage}
              title={lang === "en" ? "Switch to Indonesian" : "Switch to English"}
              className="w-9 h-9 flex items-center justify-center font-bold text-xs rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
            >
              {lang === "en" ? "EN" : "ID"}
            </button>
            <button
              onClick={toggleDark}"""
    code = code.replace(t2_old, t2_new)

    # toggle 3 (mobile inside menu)
    t3_old = """                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-gray-800 dark:text-gray-300">
                      Switch Theme
                    </span>
                    <button
                      onClick={toggleDark}"""
    t3_new = """                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-gray-800 dark:text-gray-300">
                      {dict[lang].nav.switchTheme}
                    </span>
                    <div className="flex items-center gap-x-2">
                    <button
                      onClick={toggleLanguage}
                      title={lang === "en" ? "Switch to Indonesian" : "Switch to English"}
                      className="p-2 rounded-full text-gray-800 dark:text-gray-200 transition-colors duration-200 font-bold text-sm"
                    >
                      {lang === "en" ? "EN" : "ID"}
                    </button>
                    <button
                      onClick={toggleDark}"""
    t3_new_end = """                      )}
                    </button>
                    </div>
                  </div>"""

    code = code.replace(t3_old, t3_new)
    code = code.replace("""                      )}
                    </button>
                  </div>""", t3_new_end)


    # Mobile Menu nav links
    code = code.replace("""                  <a
                    href="#about"
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white transition-colors"
                  >
                    About
                  </a>""", """                  <a
                    href="#about"
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white transition-colors"
                  >
                    {dict[lang].nav.about}
                  </a>""")
    code = code.replace("""                  <a
                    href="#work"
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white transition-colors"
                  >
                    Work
                  </a>""", """                  <a
                    href="#work"
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white transition-colors"
                  >
                    {dict[lang].nav.work}
                  </a>""")

    code = code.replace("""                  <a
                    href="#testimonials"
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white transition-colors"
                  >
                    Testimonials
                  </a>""", "")

    code = code.replace("""                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white transition-colors"
                  >
                    Contact
                  </a>""", """                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white transition-colors"
                  >
                    {dict[lang].nav.contact}
                  </a>""")

    code = code.replace("""            <a
              href="#about"
              className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              About
            </a>""", """            <a
              href="#about"
              className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              {dict[lang].nav.about}
            </a>""")
    code = code.replace("""            <a
              href="#work"
              className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              Work
            </a>""", """            <a
              href="#work"
              className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              {dict[lang].nav.work}
            </a>""")

    code = code.replace("""            <a
              href="#contact"
              className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              Contact
            </a>""", """            <a
              href="#contact"
              className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              {dict[lang].nav.contact}
            </a>""")


    code = code.replace('Download CV\n            </button>', '{dict[lang].nav.downloadCV}\n            </button>')
    code = code.replace('Download CV\n                  </button>', '{dict[lang].nav.downloadCV}\n                  </button>')
    code = code.replace('Hi, I`m Rangga 👋', '{dict[lang].hero.greeting}')
    code = code.replace('Frontend Developer with hands-on experience in building and\n                maintaining responsive web applications. Skilled in JavaScript\n                and TypeScript, with a strong focus on creating clean, scalable,\n                and user-friendly interfaces. <br />\n                <br />\n                Experienced in working with modern frontend frameworks,\n                integrating REST APIs, and collaborating with cross-functional\n                teams (UI/UX, Backend, QA). Proven ability to manage multiple\n                projects simultaneously while maintaining high code quality and\n                performance.', '<span dangerouslySetInnerHTML={{ __html: `${dict[lang].hero.desc1} <br /><br /> ${dict[lang].hero.desc2}` }} />')
    code = code.replace('Bandung, Indonesia', '{dict[lang].hero.location}')
    code = code.replace('Available for new projects and open to work', '{dict[lang].hero.available}')
    code = code.replace('About Me\n            </button>', '{dict[lang].about.title}\n            </button>')
    code = code.replace('Curious about me? Here you have it:', '{dict[lang].about.subtitle}')

    code = code.replace('Hi, I\'m Rangga Putra — a Frontend Developer based in Bandung,\n                  Indonesia, with a passion for building clean, responsive, and\n                  user-friendly web applications.', '{dict[lang].about.p1}')
    code = code.replace('My journey in web development started back in 2022 when I\n                  interned at a government agency, and since then I haven\'t\n                  looked back. I\'ve grown from debugging PHP apps to managing up\n                  to 9 active products simultaneously as a professional frontend\n                  developer — and I genuinely enjoy every bit of the challenge.', '{dict[lang].about.p2}')
    code = code.replace('I specialize in Angular and TypeScript, with solid experience\n                  in Laravel, Bootstrap, Tailwind CSS, and REST API integration.\n                  I care deeply about writing readable, performant code and\n                  delivering interfaces that feel great to use.', '{dict[lang].about.p3}')
    code = code.replace('Currently, I\'m a Frontend Developer at PT. Adhikari Invoasi\n                  Indonesia, where I work closely with UI/UX designers and\n                  backend teams to ship high-quality features across multiple\n                  products. Before that, I freelanced for 2+ years, completing\n                  over 30 web projects for clients across various industries.', '{dict[lang].about.p4}')
    code = code.replace('A few quick things about me:', '{dict[lang].about.p5}')
    code = code.replace('Bachelor\'s in Informatics Engineering — Politeknik Pos\n                      Indonesia', '{dict[lang].about.ul1[0]}')
    code = code.replace('Open to freelance opportunities', '{dict[lang].about.ul1[1]}')
    code = code.replace('Currently building with Angular, TypeScript & Laravel', '{dict[lang].about.ul2[0]}')
    code = code.replace('Based in Bandung, always happy to connect', '{dict[lang].about.ul2[1]}')
    code = code.replace('One last thing, I`m available for freelance work, so feel free\n                  to reach out and say hello! I promise I don`t bite 😉', '{dict[lang].about.p6}')

    code = code.replace('Skills\n            </button>', '{dict[lang].skills.title}\n            </button>')
    code = code.replace('The skills, tools and technologies I am really good at:', '{dict[lang].skills.subtitle}')

    code = code.replace('Experience\n            </button>', '{dict[lang].experience.title}\n            </button>')
    code = code.replace('Here is a quick summary of my most recent experiences:', '{dict[lang].experience.subtitle}')


    code = code.replace('Develop and maintain web applications using Angular and\n                        TypeScript .', '{dict[lang].experience.awh.tasks[0]}')
    code = code.replace('Manage multiple projects simultaneously (up to 9 active\n                        products).', '{dict[lang].experience.awh.tasks[1]}')
    code = code.replace('Implement new features based on business and user\n                        requirements .', '{dict[lang].experience.awh.tasks[2]}')
    code = code.replace('Perform bug fixing and optimize application performance.', '{dict[lang].experience.awh.tasks[3]}')
    code = code.replace('Integrate frontend applications with REST APIs.', '{dict[lang].experience.awh.tasks[4]}')
    code = code.replace('Collaborate with UI/UX designers and backend developers\n                        to deliver high-quality features.', '{dict[lang].experience.awh.tasks[5]}')

    code = code.replace('Designed and developed a donation platform with a CMS\n                        using Laravel, MySQL, and Eloquent.', '{dict[lang].experience.vaganza.tasks[0]}')
    code = code.replace('Developed dynamic and responsive web pages based on\n                        UI/UX mockups using HTML, Bootstrap, CSS, and SCSS.', '{dict[lang].experience.vaganza.tasks[1]}')
    code = code.replace('Collaborated with UI/UX designers to ensure technical\n                        feasibility of designs.', '{dict[lang].experience.vaganza.tasks[2]}')
    code = code.replace('Worked closely with clients and developers to meet\n                        project requirements and goals.', '{dict[lang].experience.vaganza.tasks[3]}')
    code = code.replace('Managed the development process from design to\n                        deployment, ensuring cross-browser compatibility.', '{dict[lang].experience.vaganza.tasks[4]}')

    code = code.replace('Assisted in debugging and maintaining PHP-based\n                        applications.', '{dict[lang].experience.diskominfo.tasks[0]}')
    code = code.replace('Analyzed application requirements from stakeholders.', '{dict[lang].experience.diskominfo.tasks[1]}')
    code = code.replace('Developed an Employee Attendance Information System.', '{dict[lang].experience.diskominfo.tasks[2]}')
    code = code.replace('Supported feature improvements and system optimization.', '{dict[lang].experience.diskominfo.tasks[3]}')


    code = code.replace('Work\n            </button>', '{dict[lang].work.title}\n            </button>')
    code = code.replace('Some of the noteworthy projects i have built:', '{dict[lang].work.subtitle}')

    code = code.replace('Developed a responsive and interactive landing page for\n                    Visidea Studio using Angular, TypeScript, and Tailwind CSS.\n                    Integrated RESTful APIs for dynamic data handling and\n                    implemented a CMS-based architecture, enabling\n                    administrators to easily manage and update all landing page\n                    content without code changes. Also handled API integration,\n                    state management, and content rendering to ensure optimal\n                    performance and user experience', '{dict[lang].work.visidea.desc}')
    code = code.replace('Developed a photobooth landing page using CodeIgniter 3,\n                    PHP, Blade templating, Ajax and Bootstrap 4. Integrated\n                    RESTful APIs for dynamic data management and implemented an\n                    interactive map using Leaflet to visualize multiple\n                    photobooth locations. Designed and implemented a CMS-driven\n                    system, enabling full control of content, location points,\n                    and other data through an admin dashboard without requiring\n                    code changes. Also handled API integration, data rendering,\n                    and UI responsiveness to ensure optimal performance and user\n                    experience.', '{dict[lang].work.photobooth.desc}')

    code = code.replace('Get In Touch\n            </button>', '{dict[lang].contact.title}\n            </button>')
    code = code.replace('What’s next? Feel free to reach out to me if youre looking for\n              <br /> a Frontend Developer, have a query, or simply want to\n              connect.', '<span dangerouslySetInnerHTML={{ __html: dict[lang].contact.subtitle }} />')
    code = code.replace('You may also find me on these platforms!', '{dict[lang].contact.platforms}')
    code = code.replace('© 2025 | Designed and coded with ❤️ by Rangga', '{dict[lang].contact.footer}')

    code = code.replace('Jan 2024 - Present', '{dict[lang].experience.awh.date}')
    code = code.replace('Jul 2023 - Oct 2023', '{dict[lang].experience.vaganza.date}')
    code = code.replace('Oct 2021 - Feb 2022', '{dict[lang].experience.diskominfo.date}')

    code = code.replace('Full-Stack Web Developer (Internship)', '{dict[lang].experience.vaganza.role}')
    code = code.replace('Frontend Developer</h3>', '{dict[lang].experience.awh.role}</h3>')

    with open("d:\\Project\\profile\\src\\app\\page.tsx", "w", encoding="utf-8") as f:
        f.write(code)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
