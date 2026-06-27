const ExperienceSection = ({}) => {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p
            className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            My Journey
          </p>
          <h2
            className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Work Experience
          </h2>
        </div>

        <div className="relative dark:border-zinc-800 max-w-6xl mx-auto pl-8 space-y-16">
          {/* Experience Item 1 */}
          <div className="relative" data-aos="fade-up" data-aos-delay="300">
            <span className="absolute -left-[41px] top-1 bg-white dark:bg-zinc-950 border-2 border-accent w-5 h-5 rounded-full z-10 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            </span>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white">
                  Frontend Developer
                </h3>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                  PT. Adhikari Inovasi Indonesia
                </p>
              </div>
              <span className="text-xs font-semibold bg-orange-50 dark:bg-zinc-900 text-accent border border-orange-100 dark:border-zinc-800 px-3 py-1 rounded-full self-start md:self-auto">
                Jan 2024 - April 2026
              </span>
            </div>
            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed list-disc pl-5">
              <li>
                Developed and maintained enterprise web applications across
                multiple product lines, focusing on responsive UI development
                and feature implementation.
              </li>
              <li>
                Built and maintained reusable frontend components using
                AngularJS, JavaScript, and TypeScript to improve development
                efficiency and consistency.
              </li>
              <li>
                Translated UI/UX designs from Figma into responsive and
                user-friendly web interfaces with attention to usability and
                design accuracy.
              </li>
              <li>
                Integrated frontend applications with REST APIs and collaborated
                with backend developers to deliver end-to-end features.
              </li>
              <li>
                Reduced application bugs by up to 50% through debugging, code
                refactoring, UI improvements, and frontend optimization.
              </li>
              <li>
                Developed interactive web features including POS interfaces,
                dashboard modules, reporting pages, and management systems.
              </li>
              <li>
                Implemented responsive layouts, form validation, data handling,
                and user interaction flows across various applications.
              </li>
              <li>
                Collaborated with UI/UX designers, developers, and stakeholders
                to deliver production-ready web applications.
              </li>
            </ul>
          </div>

          {/* Experience Item 2 */}
          <div className="relative" data-aos="fade-up" data-aos-delay="400">
            <span className="absolute -left-[41px] top-1 bg-white dark:bg-zinc-950 border-2 border-zinc-300 dark:border-zinc-700 w-5 h-5 rounded-full z-10 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
            </span>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white">
                  Full-Stack Web Developer (Internship)
                </h3>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                  Vaganza
                </p>
              </div>
              <span className="text-xs font-semibold bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full self-start md:self-auto">
                Jul 2023 - Oct 2023
              </span>
            </div>
            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed list-disc pl-5">
              <li>
                Designed and developed a full-featured donation platform with an
                integrated CMS using Laravel, MySQL, and Eloquent ORM.
              </li>
              <li>
                Built dynamic, responsive pages from UI/UX mockups using HTML,
                Bootstrap, CSS, and SCSS. managed full development lifecycle
                including cross-browser compatibility.
              </li>
              <li>
                Collaborated with UI/UX designers to ensure technical
                feasibility of designs.
              </li>
              <li>
                Worked closely with clients and developers to meet project
                requirements and goals.
              </li>
              <li>
                Oversaw the complete development lifecycle from design to
                deployment, ensuring cross-browser compatibility.
              </li>
            </ul>
          </div>

          {/* Experience Item 3 */}
          <div className="relative" data-aos="fade-up" data-aos-delay="500">
            <span className="absolute -left-[41px] top-1 bg-white dark:bg-zinc-950 border-2 border-zinc-300 dark:border-zinc-700 w-5 h-5 rounded-full z-10 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
            </span>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white">
                  IT Support (Internship)
                </h3>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                  Diskominfo
                </p>
              </div>
              <span className="text-xs font-semibold bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full self-start md:self-auto">
                Oct 2021 - Feb 2022
              </span>
            </div>
            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed list-disc pl-5">
              <li>
                Provided technical support for internal users including
                hardware, software, network, and application troubleshooting.
              </li>
              <li>
                Assisted in maintaining and monitoring government internal
                applications to ensure system availability.
              </li>
              <li>
                Developed and maintained an Employee Attendance Information
                System using PHP and MySQL.
              </li>
              <li>
                Performed bug fixing, database checking, and basic application
                maintenance.
              </li>
              <li>
                Assisted users with application usage, access issues, and
                technical problems.
              </li>
              <li>
                Collected user requirements and collaborated with teams to
                improve internal systems.
              </li>
              <li>
                Prepared technical documentation and supported daily IT
                operational activities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
