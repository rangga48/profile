import { X } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import NavLink from "@/components/atoms/NavLink";
import Logo from "@/components/atoms/Logo";
import IndoFlag from "@/components/atoms/IndoFlag";
import UKFlag from "@/components/atoms/UKFlag";
import DownloadCVButton from "@/components/atoms/DownloadCVButton";

interface MobileMenuProps {
  lang: "en" | "id";
  isDark: boolean;
  navLabels: { about: string; work: string; contact: string };
  switchThemeLabel: string;
  downloadLabel: string;
  onClose: () => void;
  onToggleLang: () => void;
  onToggleDark: () => void;
  onDownloadCV: () => void;
}

const MobileMenu = ({
  lang,
  isDark,
  navLabels,
  switchThemeLabel,
  downloadLabel,
  onClose,
  onToggleLang,
  onToggleDark,
  onDownloadCV,
}: MobileMenuProps) => (
  <div className="fixed inset-0 bg-white dark:bg-[#0B0C10] z-[100] flex flex-col lg:hidden transition-all duration-300 overflow-hidden">
    {/* Header */}
    <div className="flex justify-between items-center py-5 px-5 border-b border-gray-100 dark:border-white/10">
      <div className="text-xl tracking-tighter font-bold text-black dark:text-white">
        <Logo />
      </div>
      <button
        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
        onClick={onClose}
      >
        <X size={24} />
      </button>
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1">
      {/* Nav links */}
      <div className="flex flex-col px-5 py-6 space-y-6">
        <NavLink href="#about" label={navLabels.about} onClick={onClose} mobile />
        <NavLink href="#work" label={navLabels.work} onClick={onClose} mobile />
        <NavLink href="#contact" label={navLabels.contact} onClick={onClose} mobile />
      </div>

      {/* Controls */}
      <div className="border-t border-gray-100 dark:border-white/10 px-5 py-6 flex flex-col space-y-6 mt-2">
        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-800 dark:text-gray-300">
            {switchThemeLabel}
          </span>
          <div className="flex items-center gap-x-2">
            <button
              onClick={onToggleLang}
              title={lang === "en" ? "Switch to Indonesian" : "Switch to English"}
              className="px-2 py-1 flex items-center gap-1.5 flex-row rounded-full text-gray-800 dark:text-gray-200 transition-colors duration-200 font-bold"
            >
              {lang === "en" ? <UKFlag /> : <IndoFlag />}
              <span>{lang === "en" ? "EN" : "ID"}</span>
            </button>
            <button
              onClick={onToggleDark}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-1 rounded-full text-gray-800 dark:text-gray-200 transition-colors duration-200"
            >
              {isDark ? (
                <Moon size={22} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun size={22} className="text-gray-500" />
              )}
            </button>
          </div>
        </div>

        <DownloadCVButton
          label={downloadLabel}
          onClick={() => {
            onDownloadCV();
            onClose();
          }}
        />
      </div>
    </div>
  </div>
);

export default MobileMenu;
