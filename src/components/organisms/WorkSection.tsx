import { Project, projects } from "@/config/projects";
import Image from "next/image";
import Link from "next/link";

const WorkSection = ({ projectIds }: { projectIds?: string[] }) => {
  // Filter projects by projectIds if provided, otherwise default to first 4 projects
  const selectedProjects = projectIds
    ? projects.filter((p) => projectIds.includes(p.id))
    : projects.slice(0, 4);

  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p
              className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Portfolio
            </p>
            <h2
              className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Selected work
            </h2>
          </div>
          <Link
            href="/projects"
            className="reveal d1 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors self-start sm:self-auto nl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            All projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {selectedProjects.map((proj, index) => {
            return (
              <article
                key={proj.id}
                className={`card-h reveal d${index + 1} group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="pf w-full relative h-48 md:h-56">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/projects/${proj.slug}`}>
                    <h3 className="font-display font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors text-xl">
                      {proj.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5 line-clamp-3">
                    {proj.description}
                  </p>
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
                  >
                    View case study →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
