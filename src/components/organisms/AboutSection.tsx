import SectionBadge from "@/components/atoms/SectionBadge";
import ProfileImage from "@/components/atoms/ProfileImage";

interface AboutSectionProps {
  title: string;
  subtitle: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  ul1: string[];
  ul2: string[];
}

const AboutSection = ({
  title,
  subtitle,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  ul1,
  ul2,
}: AboutSectionProps) => (
  <div id="about" className="w-full bg-gray-50">
    <div className="container mx-auto px-4 py-8">
      <SectionBadge label={title} />

      <div className="flex p-5 mt-10">
        <div className="grid grid-cols-12 gap-4">
          {/* Photo */}
          <div
            className="col-span-12 lg:col-span-6 flex justify-center items-center p-5"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <ProfileImage src="/img/profile2.jpg" shadowSide="left" />
          </div>

          {/* Text */}
          <div
            className="col-span-12 lg:col-span-6 p-5"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="text-2xl font-bold">{subtitle}</div>
            <div className="text-lg text-gray-400 mt-5">{p1}</div>
            <div className="text-lg text-gray-400 mt-5">{p2}</div>
            <div className="text-lg text-gray-400 mt-5">{p3}</div>
            <div className="text-lg text-gray-400 mt-5">{p4}</div>
            <div className="text-lg text-gray-400 mt-5">{p5}</div>

            <div className="text-lg flex flex-col lg:flex-row lg:justify-between text-gray-400 mt-5 gap-y-2 lg:gap-y-0">
              <ul className="list-disc list-inside pl-2 text-gray-400">
                {ul1.map((item, i) => (
                  <li key={i} className="text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="list-disc list-inside pl-2 text-gray-400">
                {ul2.map((item, i) => (
                  <li key={i} className="text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-lg text-gray-400 mt-5">{p6}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;
