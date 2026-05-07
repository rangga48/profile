import { useEffect } from "react";
import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import AboutSection from "@/components/organisms/AboutSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import WorkSection from "@/components/organisms/WorkSection";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";
import { dict } from "@/config/i18n";

interface PageLayoutProps {
  lang: "en" | "id";
  isDark: boolean;
  menuOpen: boolean;
  copiedEmail: boolean;
  copiedPhone: boolean;
  onToggleLang: () => void;
  onToggleDark: () => void;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onDownloadCV: () => void;
  onCopyEmail: () => void;
  onCopyPhone: () => void;
}

const PageLayout = ({
  lang,
  isDark,
  menuOpen,
  copiedEmail,
  copiedPhone,
  onToggleLang,
  onToggleDark,
  onToggleMenu,
  onCloseMenu,
  onDownloadCV,
  onCopyEmail,
  onCopyPhone,
}: PageLayoutProps) => {
  const t = dict[lang];

  useEffect(() => {
    // Load AOS CSS
    if (!document.querySelector('link[href*="aos.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
      document.head.appendChild(link);
    }

    const initAOS = () => {
      // @ts-ignore
      if (window.AOS) {
        // @ts-ignore
        window.AOS.init({
          once: false,
          mirror: true,
          easing: "ease-out-cubic",
          duration: 800,
          offset: 50,
          delay: 50,
        });
        setTimeout(() => {
          // @ts-ignore
          window.AOS.refresh();
        }, 500);
      }
    };

    if (!document.querySelector('script[src*="aos.js"]')) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
      script.async = true;
      script.onload = initAOS;
      document.body.appendChild(script);
    } else {
      initAOS();
    }
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-clip">
      {/* Navbar wrapper */}
      <div className="w-full container mx-auto px-4">
        <Navbar
          lang={lang}
          isDark={isDark}
          menuOpen={menuOpen}
          navLabels={{
            about: t.nav.about,
            work: t.nav.work,
            contact: t.nav.contact,
          }}
          switchThemeLabel={t.nav.switchTheme}
          downloadLabel={t.nav.downloadCV}
          onToggleLang={onToggleLang}
          onToggleDark={onToggleDark}
          onToggleMenu={onToggleMenu}
          onCloseMenu={onCloseMenu}
          onDownloadCV={onDownloadCV}
        />

        {/* Hero */}
        <HeroSection
          greeting={t.hero.greeting}
          desc1={t.hero.desc1}
          desc2={t.hero.desc2}
          location={t.hero.location}
          available={t.hero.available}
        />
      </div>

      {/* About */}
      <AboutSection
        title={t.about.title}
        subtitle={t.about.subtitle}
        p1={t.about.p1}
        p2={t.about.p2}
        p3={t.about.p3}
        p4={t.about.p4}
        p5={t.about.p5}
        p6={t.about.p6}
        ul1={t.about.ul1}
        ul2={t.about.ul2}
      />

      {/* Skills */}
      <SkillsSection title={t.skills.title} subtitle={t.skills.subtitle} />

      {/* Experience */}
      <ExperienceSection
        title={t.experience.title}
        subtitle={t.experience.subtitle}
        isDark={isDark}
        awh={t.experience.awh}
        vaganza={t.experience.vaganza}
        diskominfo={t.experience.diskominfo}
      />

      {/* Work */}
      <WorkSection
        title={t.work.title}
        subtitle={t.work.subtitle}
        work={t.work}
      />

      {/* Contact */}
      <ContactSection
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        platforms={t.contact.platforms}
        copiedEmail={copiedEmail}
        copiedPhone={copiedPhone}
        onCopyEmail={onCopyEmail}
        onCopyPhone={onCopyPhone}
      />

      {/* Footer */}
      <Footer text={t.contact.footer} />
    </div>
  );
};

export default PageLayout;
