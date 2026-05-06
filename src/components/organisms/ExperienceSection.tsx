import SectionBadge from "@/components/atoms/SectionBadge";
import ExperienceCard from "@/components/molecules/ExperienceCard";

interface ExperienceEntry {
  logoSrc: string;
  logoDark?: string;
  role: string;
  date: string;
  tasks: string[];
  aosDelay: string;
}

interface ExperienceSectionProps {
  title: string;
  subtitle: string;
  isDark: boolean;
  awh: { role: string; date: string; tasks: string[] };
  vaganza: { role: string; date: string; tasks: string[] };
  diskominfo: { role: string; date: string; tasks: string[] };
}

const ExperienceSection = ({
  title,
  subtitle,
  isDark,
  awh,
  vaganza,
  diskominfo,
}: ExperienceSectionProps) => {
  const entries: ExperienceEntry[] = [
    {
      logoSrc: "/icon/awh.png",
      logoDark: "/icon/logo_awh.png",
      role: awh.role,
      date: awh.date,
      tasks: awh.tasks,
      aosDelay: "200",
    },
    {
      logoSrc: "/icon/vaganza.jpg",
      role: vaganza.role,
      date: vaganza.date,
      tasks: vaganza.tasks,
      aosDelay: "300",
    },
    {
      logoSrc: "/icon/diskominfo.jpg",
      role: diskominfo.role,
      date: diskominfo.date,
      tasks: diskominfo.tasks,
      aosDelay: "400",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <SectionBadge label={title} />

        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <div className="text-lg text-center mt-5 text-gray-400">{subtitle}</div>
        </div>

        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-12">
            {entries.map((exp, i) => (
              <ExperienceCard
                key={i}
                logoSrc={exp.logoSrc}
                logoDark={exp.logoDark}
                isDark={isDark}
                role={exp.role}
                date={exp.date}
                tasks={exp.tasks}
                aosDelay={exp.aosDelay}
                topMargin={i > 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
