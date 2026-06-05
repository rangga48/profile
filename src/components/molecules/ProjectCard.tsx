import Image from "next/image";
import { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import TechBadge from "@/components/atoms/TechBadge";

interface ProjectCardProps {
  title: string;
  desc: string;
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
  imageSrc,
  techStack,
  href,
  reversed = false,
  aosDelay = "200",
  topMargin = false,
  disableAos = false,
  className = "",
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = desc.length > 200;
  const displayText = shouldTruncate && !isExpanded ? `${desc.substring(0, 200)}...` : desc;

  const imageCol = (
    <div
      className={`col-span-12 lg:col-span-6 ${reversed ? "order-1 lg:order-2" : ""}`}
    >
      <div className="flex justify-center">
        <Image
          src={imageSrc}
          alt={title}
          height={500}
          width={500}
          quality={100}
          className="rounded-[15px] group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );

  const infoCol = (
    <div
      className={`col-span-12 lg:col-span-6 flex flex-col justify-between ${reversed ? "order-2 lg:order-1" : ""}`}
    >
      <div>
        <div className="text-lg font-bold">{title}</div>
        <div className="text-md mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          {displayText}
          {shouldTruncate && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-blue-500 hover:text-blue-600 font-semibold ml-2 inline-block focus:outline-none transition-colors duration-200"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
      <div>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
        {href && (
          <div className="mt-5">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <CiShare1 size={32} />
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-12 gap-6 p-8 md:p-10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group max-h-[600px] lg:max-h-[500px] overflow-y-auto custom-scrollbar ${
        topMargin ? "mt-10" : ""
      } ${className}`}
      {...(!disableAos && {
        "data-aos": "fade-up",
        "data-aos-delay": aosDelay,
      })}
    >
      {reversed ? (
        <>
          {infoCol}
          {imageCol}
        </>
      ) : (
        <>
          {imageCol}
          {infoCol}
        </>
      )}
    </div>
  );
};

export default ProjectCard;
