import SectionBadge from "@/components/atoms/SectionBadge";
import SkillItem from "@/components/atoms/SkillItem";

const SKILLS = [
  { src: "/icon/js.png", label: "Javascript" },
  { src: "/icon/typescript.png", label: "Typescript" },
  { src: "/icon/react.png", label: "React" },
  { src: "/icon/nextjs.svg", label: "Next JS" },
  { src: "/icon/git.svg", label: "Git" },
  { src: "/icon/laravel.png", label: "Laravel" },
  { src: "/icon/tailwind-css.svg", label: "Tailwind CSS" },
  { src: "/icon/css.svg", label: "CSS" },
  { src: "/icon/angular.svg", label: "Angular" },
  { src: "/icon/bootstrap.svg", label: "Bootstrap" },
  { src: "/icon/html.svg", label: "HTML" },
  { src: "/icon/php.png", label: "PHP" },
  { src: "/icon/codeigniter.png", label: "CodeIgniter3" },
  { src: "/icon/jquery.png", label: "jQuery" },
];

interface SkillsSectionProps {
  title: string;
  subtitle: string;
}

const SkillsSection = ({ title, subtitle }: SkillsSectionProps) => (
  <div className="w-full bg-gray-50">
    <div className="container mx-auto px-4 py-8">
      <SectionBadge label={title} />

      <div className="w-full">
        <div className="text-lg text-center mt-5 text-gray-400">{subtitle}</div>
      </div>

      <ul
        className="grid grid-cols-3 gap-4 sm:grid-cols-8 mt-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {SKILLS.map((skill) => (
          <SkillItem key={skill.label} src={skill.src} label={skill.label} />
        ))}
      </ul>
    </div>
  </div>
);

export default SkillsSection;
