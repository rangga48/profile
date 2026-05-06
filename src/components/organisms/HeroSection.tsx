import ProfileImage from "@/components/atoms/ProfileImage";
import HeroInfo from "@/components/molecules/HeroInfo";

interface HeroSectionProps {
  greeting: string;
  desc1: string;
  desc2: string;
  location: string;
  available: string;
}

const HeroSection = ({
  greeting,
  desc1,
  desc2,
  location,
  available,
}: HeroSectionProps) => (
  <div className="flex p-5">
    <div className="grid grid-cols-12 gap-4">
      <HeroInfo
        greeting={greeting}
        desc1={desc1}
        desc2={desc2}
        location={location}
        available={available}
      />

      <div
        className="col-span-12 lg:col-span-6 flex justify-center items-center p-5 order-1 lg:order-2"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <ProfileImage src="/img/profile.jpg" shadowSide="right" />
      </div>
    </div>
  </div>
);

export default HeroSection;
