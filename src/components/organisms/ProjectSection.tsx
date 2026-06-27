import { projects } from "@/config/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = ({}) => {
  return (
    <section className="pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id}>
              <Link
                href={`/projects/${project.slug}`}
                className="project-card group h-full rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors block"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="block photo-frame relative w-full h-52">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-gray-100 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nav-link">
                      View project →
                    </span>
                    <span className="text-xs text-zinc-400">
                      {project.years}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
