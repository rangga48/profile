import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import HeroSection from "../organisms/HeroSection";
import ServiceSection from "../organisms/ServicesSection";
import ExperienceSection from "../organisms/ExperienceSection";
import WorkSection from "../organisms/WorkSection";
import AboutSection from "../organisms/AboutSection";
import ContactSection from "../organisms/ContactSection";

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
