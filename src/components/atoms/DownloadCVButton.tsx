interface DownloadCVButtonProps {
  label: string;
  onClick: () => void;
  fullWidth?: boolean;
}

const DownloadCVButton = ({
  label,
  onClick,
  fullWidth = true,
}: DownloadCVButtonProps) => (
  <button
    onClick={onClick}
    className={`${
      fullWidth ? "w-full" : ""
    } bg-black dark:bg-white text-white dark:text-black font-medium p-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-95 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
  >
    {label}
  </button>
);

export default DownloadCVButton;
