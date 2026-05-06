import { AlignJustify, X } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuButton = ({ isOpen, onToggle }: MobileMenuButtonProps) => (
  <button
    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition-all duration-300"
    onClick={onToggle}
  >
    {isOpen ? <X size={20} /> : <AlignJustify size={20} />}
  </button>
);

export default MobileMenuButton;
