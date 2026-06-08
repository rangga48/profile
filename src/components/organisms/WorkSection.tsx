import SectionBadge from "@/components/atoms/SectionBadge";
import ProjectCard from "@/components/molecules/ProjectCard";

interface WorkSectionProps {
  title: string;
  subtitle: string;
  work: {
    visidea: { desc: string; category: string };
    photobooth: { desc: string; category: string };
    undangan: { desc: string; category: string };
    ticketing: { desc: string; category: string };
    parking: { desc: string; category: string };
    editphoto: { desc: string; category: string };
    monitoring: { desc: string; category: string };
    findjob: { desc: string; category: string };
    smartticket: { desc: string; category: string };
    kse: { desc: string; category: string };
  };
}

const WorkSection = ({ title, subtitle, work }: WorkSectionProps) => {
  const projects = [
    {
      title: "VisideaStudio",
      desc: work.visidea.desc,
      category: work.visidea.category,
      imageSrc: "/img/visidea.png",
      techStack: ["AngularJS", "Typescript", "Tailwindcss", "Axios", "Integrate REST API"],
      href: "https://visideastudio.id",
      aosDelay: "200",
    },
    {
      title: "Photobooth Landing Page",
      desc: work.photobooth.desc,
      category: work.photobooth.category,
      imageSrc: "/img/photobooth.png",
      techStack: ["PHP", "Ajax", "CodeIgniter 3", "Bootstrap 4", "CSS", "REST API", "Blade Templating", "JavaScript"],
      href: "https://photobooth.awh.co.id",
      aosDelay: "300",
    },
    {
      title: "Undangan Digital",
      desc: work.undangan.desc,
      category: work.undangan.category,
      imageSrc: "/img/undangan.png",
      techStack: ["PHP", "Ajax", "CodeIgniter 3", "Bootstrap 4", "CSS", "REST API", "Blade Templating", "JavaScript"],
      aosDelay: "400",
    },
    {
      title: "Ticketing System",
      desc: work.ticketing.desc,
      category: work.ticketing.category,
      imageSrc: "/img/ticketing.png",
      techStack: ["PHP", "Ajax", "CodeIgniter 3", "Bootstrap 4", "CSS", "REST API", "Blade Templating", "JavaScript"],
      aosDelay: "200",
    },
    {
      title: "Parking System",
      desc: work.parking.desc,
      category: work.parking.category,
      imageSrc: "/img/parking.png",
      techStack: ["AngularJS", "Typescript", "Tailwindcss", "Axios", "Integrate REST API"],
      aosDelay: "300",
    },
    {
      title: "Editing Photobooth",
      desc: work.editphoto.desc,
      category: work.editphoto.category,
      imageSrc: "/img/editphotobooth.png",
      techStack: ["PHP", "Ajax", "CodeIgniter 3", "Bootstrap 4", "CSS", "REST API", "Blade Templating", "JavaScript"],
      aosDelay: "400",
    },
    {
      title: "Monitoring Photobooth",
      desc: work.monitoring.desc,
      category: work.monitoring.category,
      imageSrc: "/img/monitoring.png",
      techStack: ["PHP", "Ajax", "CodeIgniter 3", "Bootstrap 4", "CSS", "REST API", "Blade Templating", "JavaScript"],
      aosDelay: "200",
    },
    {
      title: "Slicing Find Job",
      desc: work.findjob.desc,
      category: work.findjob.category,
      imageSrc: "/img/findjob.png",
      techStack: ["NextJS", "ReactJS", "Typescript", "Tailwindcss"],
      aosDelay: "300",
    },
    {
      title: "Smart Ticketing",
      desc: work.smartticket.desc,
      category: work.smartticket.category,
      imageSrc: "/img/smart-ticketing.png",
      techStack: ["PHP", "Laravel", "Ajax", "Bootstrap 4", "CSS", "REST API", "MQTT", "JavaScript"],
      aosDelay: "400",
    },
    {
      title: "Donasi KSE",
      desc: work.kse.desc,
      category: work.kse.category,
      imageSrc: "/img/kse.png",
      techStack: ["PHP", "Laravel", "Bootstrap 4", "CSS", "Blade Templating", "JavaScript"],
      href: "https://donasi.kse.or.id/",
      aosDelay: "200",
    },
  ];

  return (
    <div id="work" className="w-full bg-gray-50 dark:bg-zinc-950 py-16">
      <div className="container mx-auto px-4">
        <SectionBadge label={title} />

        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <div className="text-lg text-center mt-5 text-gray-400 dark:text-zinc-500">{subtitle}</div>
        </div>

        {/* 3-Column Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              desc={project.desc}
              category={project.category}
              imageSrc={project.imageSrc}
              techStack={project.techStack}
              href={project.href}
              disableAos={false}
              aosDelay={`${200 + (i % 3) * 100}`}
              className="w-full h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
