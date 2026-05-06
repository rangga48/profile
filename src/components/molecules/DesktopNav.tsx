import NavLink from "@/components/atoms/NavLink";
import LangToggle from "@/components/atoms/LangToggle";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import DownloadCVButton from "@/components/atoms/DownloadCVButton";

interface DesktopNavProps {
  lang: "en" | "id";
  isDark: boolean;
  navLabels: { about: string; work: string; contact: string };
  downloadLabel: string;
  onToggleLang: () => void;
  onToggleDark: () => void;
  onDownloadCV: () => void;
}

const DesktopNav = ({
  lang,
  isDark,
  navLabels,
  downloadLabel,
  onToggleLang,
  onToggleDark,
  onDownloadCV,
}: DesktopNavProps) => (
  <div className="hidden lg:flex items-center gap-x-7">
    <NavLink href="#about" label={navLabels.about} />
    <NavLink href="#work" label={navLabels.work} />
    <NavLink href="#contact" label={navLabels.contact} />

    <div className="flex items-center gap-x-2 text-lg">
      <LangToggle lang={lang} onToggle={onToggleLang} />
      <ThemeToggle isDark={isDark} onToggle={onToggleDark} size={22} />
    </div>

    <DownloadCVButton label={downloadLabel} onClick={onDownloadCV} />
  </div>
);

export default DesktopNav;
