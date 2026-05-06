import Logo from "@/components/atoms/Logo";
import LangToggle from "@/components/atoms/LangToggle";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import DesktopNav from "@/components/molecules/DesktopNav";
import MobileMenuButton from "@/components/molecules/MobileMenuButton";
import MobileMenu from "@/components/molecules/MobileMenu";

interface NavbarProps {
  lang: "en" | "id";
  isDark: boolean;
  menuOpen: boolean;
  navLabels: { about: string; work: string; contact: string };
  switchThemeLabel: string;
  downloadLabel: string;
  onToggleLang: () => void;
  onToggleDark: () => void;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onDownloadCV: () => void;
}

const Navbar = ({
  lang,
  isDark,
  menuOpen,
  navLabels,
  switchThemeLabel,
  downloadLabel,
  onToggleLang,
  onToggleDark,
  onToggleMenu,
  onCloseMenu,
  onDownloadCV,
}: NavbarProps) => (
  <>
    <div className="flex justify-between items-center py-5 px-5 relative">
      {/* Logo */}
      <div className="flex items-center z-50 relative">
        <Logo />
      </div>

      {/* Desktop Nav */}
      <DesktopNav
        lang={lang}
        isDark={isDark}
        navLabels={navLabels}
        downloadLabel={downloadLabel}
        onToggleLang={onToggleLang}
        onToggleDark={onToggleDark}
        onDownloadCV={onDownloadCV}
      />

      {/* Mobile Controls */}
      <div className="flex lg:hidden items-center gap-x-3 relative z-50">
        <LangToggle lang={lang} onToggle={onToggleLang} mobile />
        <ThemeToggle isDark={isDark} onToggle={onToggleDark} size={20} mobile />
        <MobileMenuButton isOpen={menuOpen} onToggle={onToggleMenu} />
      </div>
    </div>

    {/* Mobile Menu Overlay */}
    {menuOpen && (
      <MobileMenu
        lang={lang}
        isDark={isDark}
        navLabels={navLabels}
        switchThemeLabel={switchThemeLabel}
        downloadLabel={downloadLabel}
        onClose={onCloseMenu}
        onToggleLang={onToggleLang}
        onToggleDark={onToggleDark}
        onDownloadCV={onDownloadCV}
      />
    )}
  </>
);

export default Navbar;
