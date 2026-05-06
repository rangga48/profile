interface AvailableBadgeProps {
  label: string;
}

const AvailableBadge = ({ label }: AvailableBadgeProps) => (
  <div className="text-lg flex items-center gap-x-4 ml-1.5 mt-3">
    <div className="w-3 h-3 bg-green-500 rounded-full mr-1.5" />
    {label}
  </div>
);

export default AvailableBadge;
