interface TechBadgeProps {
  label: string;
}

const TechBadge = ({ label }: TechBadgeProps) => (
  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-600 bg-slate-100 dark:bg-zinc-800 dark:text-zinc-300 px-3 py-1.5 rounded-md uppercase transition-colors duration-300 cursor-default">
    {label}
  </span>
);

export default TechBadge;
