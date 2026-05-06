import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  size?: number;
  mobile?: boolean;
}

const ThemeToggle = ({
  isDark,
  onToggle,
  size = 22,
  mobile = false,
}: ThemeToggleProps) => {
  const baseClass = mobile
    ? "p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
    : "p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200";

  return (
    <div className={mobile ? undefined : "hover:scale-110 transition-transform duration-300"}>
      <button
        onClick={onToggle}
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className={baseClass}
      >
        {isDark ? (
          <Moon
            size={size}
            className="text-gray-700 dark:text-yellow-300 transition-transform duration-300 rotate-0"
          />
        ) : (
          <Sun
            size={size}
            className="text-yellow-500 transition-transform duration-300 rotate-0"
          />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
