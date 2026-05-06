import IndoFlag from "./IndoFlag";
import UKFlag from "./UKFlag";

interface LangToggleProps {
  lang: "en" | "id";
  onToggle: () => void;
  mobile?: boolean;
}

const LangToggle = ({ lang, onToggle, mobile = false }: LangToggleProps) => {
  const title = lang === "en" ? "Switch to Indonesian" : "Switch to English";

  const desktopClass =
    "h-8 px-2 flex items-center justify-center font-bold text-xs rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200";

  const mobileClass =
    "h-9 px-2 flex items-center justify-center font-bold text-xs rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300";

  return (
    <button
      onClick={onToggle}
      title={title}
      className={mobile ? mobileClass : desktopClass}
    >
      <div className="flex items-center gap-1.5">
        {lang === "en" ? <UKFlag /> : <IndoFlag />}
        <span>{lang === "en" ? "EN" : "ID"}</span>
      </div>
    </button>
  );
};

export default LangToggle;
