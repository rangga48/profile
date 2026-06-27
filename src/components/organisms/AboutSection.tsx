import Image from "next/image";

const AboutSection = ({}) => {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal order-2 md:order-1">
            <div className="pf w-full aspect-square max-w-sm mx-auto rounded-3xl">
              <Image
                src="/img/profile.jpg"
                width="1000"
                height="1000"
                alt="Eliott"
                loading="lazy"
                className="object-cover rounded-2xl"
                data-aos="fade-up"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p
              className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              About me
            </p>
            <h2
              className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A bit about
              <br />
              who I am
            </h2>
            <p
              className="reveal d2 text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Frontend Developer with hands-on experience in building and
              maintaining responsive web applications. Skilled in JavaScript and
              TypeScript, with a strong focus on creating clean, scalable, and
              user-friendly interfaces.
            </p>
            <p
              className="reveal d3 text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Experienced in working with modern frontend frameworks,
              integrating REST APIs, and collaborating with cross-functional
              teams (UI/UX, Backend, QA). Proven ability to manage multiple
              projects simultaneously while maintaining high code quality and
              performance.
            </p>
            <div className="reveal d4">
              <p
                className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Stack &amp; tools
              </p>
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Skills"
              >
                <span
                  role="listitem"
                  className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  React.js
                </span>
                <span
                  role="listitem"
                  className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  Next.js
                </span>
                <span
                  role="listitem"
                  className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  Angular.js
                </span>
                <span
                  role="listitem"
                  className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  JavaScript
                </span>
                <span
                  role="listitem"
                  className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  TypeScript
                </span>
                <span
                  role="listitem"
                  className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
                  data-aos="fade-up"
                  data-aos-delay="1100"
                >
                  Tailwind CSS
                </span>
                <span
                  role="listitem"
                  className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  Bootstrap
                </span>
                <span
                  role="listitem"
                  className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
                  data-aos="fade-up"
                  data-aos-delay="1300"
                >
                  Figma
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
