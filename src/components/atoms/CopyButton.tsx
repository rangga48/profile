"use client";

import { FaRegCopy } from "react-icons/fa";

interface CopyButtonProps {
  copied: boolean;
  onCopy: () => void;
  title?: string;
}

const CopyButton = ({ copied, onCopy, title = "Copy" }: CopyButtonProps) => (
  <button
    onClick={onCopy}
    title={title}
    className="relative group hover:scale-110 transition-transform"
  >
    {copied ? (
      <span className="text-sm text-green-500 font-medium">Copied!</span>
    ) : (
      <FaRegCopy
        size={24}
        className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors cursor-pointer"
      />
    )}
  </button>
);

export default CopyButton;
