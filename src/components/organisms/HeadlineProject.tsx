const HeadlineProject = ({}) => {
  return (
    <section className="pt-36 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p
          className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Portfolio
        </p>
        <h1
          className="reveal font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          All Projects
        </h1>
        <p
          className="reveal text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          A complete look at my work as a frontend developer and fullstack
          developer.
        </p>
        <div
          className="reveal flex flex-wrap gap-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="text-sm px-4 py-1.5 rounded-full border transition-colors">
            All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeadlineProject;
