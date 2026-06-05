import SectionBadge from "@/components/atoms/SectionBadge";
import ProjectCard from "@/components/molecules/ProjectCard";
import { motion } from "motion/react";

interface WorkSectionProps {
  title: string;
  subtitle: string;
  work: {
    visidea: { desc: string };
    photobooth: { desc: string };
    undangan: { desc: string };
    ticketing: { desc: string };
    parking: { desc: string };
    editphoto: { desc: string };
    monitoring: { desc: string };
    findjob: { desc: string };
    smartticket: { desc: string };
    kse: { desc: string };
  };
}

const WorkSection = ({ title, subtitle, work }: WorkSectionProps) => {
  const projects = [
    {
      title: "VisideaStudio",
      desc: work.visidea.desc,
      imageSrc: "/img/visidea.png",
      techStack: ["AngularJS", "Typescript", "Tailwindcss", "Axios", "Integrate REST API"],
      href: "https://visideastudio.id",
      reversed: false,
      aosDelay: "200",
    },
    {
      title: "Photobooth Landing Page",
      desc: work.photobooth.desc,
      imageSrc: "/img/photobooth.png",
      techStack: ["PHP", "Ajax", "CodeIgniter 3", "Bootstrap 4", "CSS", "REST API", "Blade Templating", "JavaScript"],
      href: "https://photobooth.awh.co.id",
      reversed: true,
      aosDelay: "300",
    },
    {
      title: "Undangan Digital",
      desc: work.undangan.desc,
      imageSrc: "/img/undangan.png",
      techStack: ["PHP", "Ajax", "CodeIgniter 3", "Bootstrap 4", "CSS", "REST API", "Blade Templating", "JavaScript"],
      reversed: false,
      aosDelay: "200",
    },
    {
      title: "Ticketing System",
      desc: work.ticketing.desc,
      imageSrc: "/img/ticketing.png",
      techStack: ["PHP", "Ajax", "CodeIgniter 3", "Bootstrap 4", "CSS", "REST API", "Blade Templating", "JavaScript"],
      reversed: true,
      aosDelay: "300",
    },
    {
      title: "Parking System",
      desc: work.parking.desc,
      imageSrc: "/img/parking.png",
      techStack: ["AngularJS", "Typescript", "Tailwindcss", "Axios", "Integrate REST API"],
      reversed: false,
      aosDelay: "200",
    },
    {
      title: "Editing Photobooth",
      desc: work.editphoto.desc,
      imageSrc: "/img/editphotobooth.png",
      techStack: ["PHP", "Ajax", "CodeIgniter 3", "Bootstrap 4", "CSS", "REST API", "Blade Templating", "JavaScript"],
      reversed: true,
      aosDelay: "300",
    },
    {
      title: "Monitoring Photobooth",
      desc: work.monitoring.desc,
      imageSrc: "/img/monitoring.png",
      techStack: ["PHP", "Ajax", "CodeIgniter 3", "Bootstrap 4", "CSS", "REST API", "Blade Templating", "JavaScript"],
      reversed: false,
      aosDelay: "200",
    },
    {
      title: "Slicing Find Job",
      desc: work.findjob.desc,
      imageSrc: "/img/findjob.png",
      techStack: ["NextJS", "ReactJS", "Typescript", "Tailwindcss"],
      reversed: false,
      aosDelay: "200",
    },
    {
      title: "Smart Ticketing",
      desc: work.smartticket.desc,
      imageSrc: "/img/smart-ticketing.png",
      techStack: ["PHP", "Laravel", "Ajax", "Bootstrap 4", "CSS", "REST API", "MQTT", "JavaScript"],
      reversed: true,
      aosDelay: "300",
    },
    {
      title: "Donasi KSE",
      desc: work.kse.desc,
      imageSrc: "/img/kse.png",
      techStack: ["PHP", "Laravel", "Bootstrap 4", "CSS", "Blade Templating", "JavaScript"],
      href: "https://donasi.kse.or.id/",
      reversed: true,
      aosDelay: "300",
    },
  ];

  const duplicatedProjects = [...projects, ...projects];

  return (
    <div id="work" className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <SectionBadge label={title} />

        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <div className="text-lg text-center mt-5 text-gray-400">{subtitle}</div>
        </div>
      </div>

      <div className="relative w-full mt-10 overflow-hidden">
        {/* Transparent gradient masks for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-gray-50 to-transparent dark:from-[#1f2937] dark:to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-gray-50 to-transparent dark:from-[#1f2937] dark:to-transparent pointer-events-none z-10" />

        {/* Marquee slider track scrolling to the right (left-to-right visual motion) */}
        <motion.div
          className="flex gap-6 w-max animate-marquee-right hover:[animation-play-state:paused] py-4 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {duplicatedProjects.map((project, i) => (
            <ProjectCard
              key={`${project.title}-${i}`}
              title={project.title}
              desc={project.desc}
              imageSrc={project.imageSrc}
              techStack={project.techStack}
              href={project.href}
              reversed={project.reversed}
              disableAos={true}
              topMargin={false}
              className="w-[85vw] sm:w-[500px] md:w-[600px] lg:w-[700px] shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkSection;
