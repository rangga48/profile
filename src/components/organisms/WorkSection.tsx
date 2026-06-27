"use client";

import { Project, projects } from "@/config/projects";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const WorkSection = ({ projectIds }: { projectIds?: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // States to calculate dynamic layout width & gap for exact card centering
  const [itemWidth, setItemWidth] = useState(450);
  const [gap, setGap] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setItemWidth(280);
        setGap(16);
      } else if (window.innerWidth <= 1024) {
        setItemWidth(380);
        setGap(24);
      } else {
        setItemWidth(450);
        setGap(30);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter projects by projectIds if provided, otherwise default to first 4 projects
  const selectedProjects = projectIds
    ? projects.filter((project) => projectIds.includes(project.id))
    : projects.slice(0, 4);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate total travel distance to translate from first item centered to last item centered
  const totalDistance = (selectedProjects.length - 1) * (itemWidth + gap);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative h-[300vh] bg-zinc-50/30 dark:bg-zinc-950/10"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="max-w-6xl w-full mx-auto px-6 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
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
        </div>

        {/* Sticky Wrapper matching the active card width */}
        <div
          className="mx-auto flex items-center justify-start overflow-visible"
          style={{ width: `${itemWidth}px` }}
        >
          <motion.div
            className="flex will-change-transform"
            style={{ x, gap: `${gap}px` }}
          >
            {selectedProjects.map((proj) => {
              return (
                <article
                  key={proj.id}
                  style={{ width: `${itemWidth}px` }}
                  className="flex-shrink-0 group rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="w-full relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
