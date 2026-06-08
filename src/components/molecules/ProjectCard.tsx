import Image from "next/image";
import { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import TechBadge from "@/components/atoms/TechBadge";

interface ProjectCardProps {
  title: string;
  desc: string;
  category?: string;
  imageSrc: string;
  techStack: string[];
  href?: string;
  /** If true, image is on the right and text on the left */
  reversed?: boolean;
  aosDelay?: string;
  topMargin?: boolean;
  disableAos?: boolean;
  className?: string;
}

const ProjectCard = ({
  title,
  desc,
  category,
  imageSrc,
  techStack,
  href,
  aosDelay = "200",
  topMargin = false,
  disableAos = false,
  className = "",
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = desc.length > 200;
  const displayText =
    shouldTruncate && !isExpanded ? `${desc.substring(0, 200)}...` : desc;

  return (
    <div
      className={`bg-white dark:bg-zinc-900 border border-slate-100/80 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] rounded-[24px] overflow-hidden flex flex-col p-4 sm:p-5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_rgb(0,0,0,0.25)] hover:-translate-y-1.5 transition-all duration-300 group ${topMargin ? "mt-10" : ""
        } ${className}`}
      {...(!disableAos && {
        "data-aos": "fade-up",
        "data-aos-delay": aosDelay,
      })}
    >
      {/* Image Wrapper */}
      <div className="relative w-full aspect-video overflow-hidden rounded-[20px] bg-slate-50 dark:bg-zinc-800/50">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 700px"
          quality={100}
          className="object-contain group-hover:scale-103 transition-transform duration-700 ease-out rounded-[20px]"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow justify-between gap-4 mt-2 px-1">
        <div>
          {/* Header Line (Title on left, Category on right) */}
          <div className="flex justify-between items-baseline gap-4">
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-zinc-100 group-hover:text-blue-500 transition-colors duration-200">
              {title}
            </h3>
            {category && (
              <span className="text-xs sm:text-sm text-slate-400 dark:text-zinc-500 font-medium whitespace-nowrap">
                {category}
              </span>
            )}
          </div>

          {/* Description Text */}
          <p className="text-sm sm:text-[15px] text-slate-500 dark:text-zinc-400 font-light leading-relaxed mt-3.5">
            {displayText}
            {shouldTruncate && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="text-blue-500 hover:text-blue-600 font-semibold ml-1.5 inline-block focus:outline-none transition-colors duration-200"
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            )}
          </p>
        </div>

        {/* Footer Block (Tech Stack & Link) */}
        <div className="flex flex-col gap-4 mt-2">
          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {techStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>

          {/* Site Link */}
          {href && (
            <div className="flex justify-end pt-3 border-t border-slate-100/50 dark:border-zinc-800/40 mt-1">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors duration-300 flex items-center gap-1.5"
              >
                <span className="text-xs font-semibold">Visit Site</span>
                <CiShare1 size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
