import dynamic from "next/dynamic";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import HeroSection from "../organisms/HeroSection";
import ServiceSection from "../organisms/ServicesSection";
import ExperienceSection from "../organisms/ExperienceSection";
import AboutSection from "../organisms/AboutSection";
import ContactSection from "../organisms/ContactSection";

// Dynamically import WorkSection as it uses heavy motion libraries (Framer Motion)
const WorkSection = dynamic(() => import("../organisms/WorkSection"), {
  ssr: false,
  loading: () => <div className="h-96 w-full bg-zinc-50/30 dark:bg-zinc-950/10 animate-pulse rounded-3xl" />
});

const PageLayout = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <ExperienceSection />
      <WorkSection projectIds={["visidea", "photobooth", "imomen", "kse"]} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PageLayout;
