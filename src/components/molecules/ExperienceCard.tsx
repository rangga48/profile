import Image from "next/image";

interface ExperienceCardProps {
  logoSrc: string;
  logoDark?: string;
  isDark?: boolean;
  role: string;
  date: string;
  tasks: string[];
  aosDelay?: string;
  topMargin?: boolean;
}

const ExperienceCard = ({
  logoSrc,
  logoDark,
  isDark = false,
  role,
  date,
  tasks,
  aosDelay = "200",
  topMargin = false,
}: ExperienceCardProps) => {
  const src = logoDark && isDark ? logoDark : logoSrc;

  return (
    <div
      className={`col-span-12 bg-white shadow-lg rounded-lg overflow-hidden p-10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ${
        topMargin ? "mt-10" : ""
      }`}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className="flex flex-col md:flex-row justify-between items-start">
        <Image
          src={src}
          alt={role}
          width={100}
          height={100}
          className="object-contain"
        />
        <div className="ml-0 md:ml-4 mt-4 md:mt-0 flex-grow max-w-xl">
          <h3 className="text-xl font-bold">{role}</h3>
          <ul className="list-disc list-inside text-gray-400 mt-5">
            {tasks.map((task, i) => (
              <li key={i} className="text-base font-medium">
                {task}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-gray-400 md:text-right mt-4 md:mt-0">
          {date}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
