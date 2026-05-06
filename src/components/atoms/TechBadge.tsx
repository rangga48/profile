interface TechBadgeProps {
  label: string;
}

const TechBadge = ({ label }: TechBadgeProps) => (
  <div className="text-lg bg-gray-300 rounded-xl py-1 px-6 hover:bg-gray-400 hover:text-white transition-colors duration-300 cursor-default">
    {label}
  </div>
);

export default TechBadge;
