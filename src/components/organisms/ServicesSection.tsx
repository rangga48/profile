const ServiceSection = ({}) => {
  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3"
            data-aos="fade-up"
          >
            What I do
          </p>
          <h2
            className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <article
            className="reveal d1 card-h group bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-orange-50 dark:bg-zinc-800 rounded-xl mb-6 group-hover:bg-accent/10 transition-colors">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">
              Frontend Dev
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Creating responsive and pixel-perfect interfaces with Tailwind
              CSS. Focused on clean UI, performance optimization, and great user
              experience.
            </p>
          </article>

          <article
            className="reveal d2 card-h group bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-800 hover:border-accent"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 dark:bg-zinc-700 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-3">
              Backend Dev
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Building scalable backend applications with Laravel and
              Express.js. Experienced in API development and database systems
              using MySQL and PostgreSQL.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
