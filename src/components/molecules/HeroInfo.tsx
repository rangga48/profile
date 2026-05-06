import { MapPin, Github, Instagram, Linkedin } from "lucide-react";
import AvailableBadge from "@/components/atoms/AvailableBadge";
import SocialLink from "@/components/atoms/SocialLink";

interface HeroInfoProps {
  greeting: string;
  desc1: string;
  desc2: string;
  location: string;
  available: string;
}

const HeroInfo = ({
  greeting,
  desc1,
  desc2,
  location,
  available,
}: HeroInfoProps) => (
  <div
    className="col-span-12 lg:col-span-6 p-5 order-2 lg:order-1"
    data-aos="fade-right"
    data-aos-duration="1000"
  >
    <div className="text-3xl lg:text-6xl mt-5 lg:mt-0 font-bold">{greeting}</div>

    <div className="text-lg mt-5 lg:mt-10 text-gray-400 md:leading-relaxed">
      <span
        dangerouslySetInnerHTML={{
          __html: `${desc1} <br /><br /> ${desc2}`,
        }}
      />
    </div>

    <div className="mt-10">
      <div className="text-lg flex items-center gap-x-4">
        <MapPin /> {location}
      </div>
      <AvailableBadge label={available} />
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-x-4">
        <SocialLink href="https://github.com/rangga48" icon={<Github />} />
        <SocialLink href="https://www.instagram.com/mweh.48/" icon={<Instagram />} />
        <SocialLink href="https://www.linkedin.com/in/rangga-putra/" icon={<Linkedin />} />
      </div>
    </div>
  </div>
);

export default HeroInfo;
