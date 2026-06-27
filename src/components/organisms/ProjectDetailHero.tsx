import Image from "next/image";
import Link from "next/link";
import { Project } from "@/config/projects";

const ProjectDetailHero = ({ project }: { project: Project }) => {
  return (
    <>
      <header className="pt-32 pb-10 max-w-6xl mx-auto px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to projects
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full"
              data-aos="fade-up"
              data-aos-delay={100 + project.tags.indexOf(tag) * 100}
            >
              {tag}
            </span>
          ))}
          {/* <span className="text-xs text-zinc-400 ml-1">
            {project.years} · 6 weeks
          </span> */}
        </div>

        <h1
          className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-tight mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {project.title}
        </h1>

        <p
          className="reveal d1 text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {project.description}
        </p>

        <div className="reveal d2 grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b border-zinc-100 dark:border-zinc-900">
          <div data-aos="fade-up" data-aos-delay="400">
            <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
              Client
            </p>
            <p className="font-medium text-zinc-900 dark:text-white text-sm">
              {project.client}
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
              Role
            </p>
            <p className="font-medium text-zinc-900 dark:text-white text-sm">
              {project.role}
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
              Timeline
            </p>
            <p className="font-medium text-zinc-900 dark:text-white text-sm">
              {project.timeline}
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="700">
            <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
              Deliverables
            </p>
            <p className="font-medium text-zinc-900 dark:text-white text-sm">
              {project.deliverables}
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div
          className="reveal photo-frame w-full h-72 md:h-[480px] rounded-3xl"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Image
            src={project.image}
            alt="Novu — SaaS Dashboard redesign hero"
            loading="eager"
            width={1400}
            height={480}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectDetailHero;
