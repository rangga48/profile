interface SectionBadgeProps {
  label: string;
}

const SectionBadge = ({ label }: SectionBadgeProps) => (
  <div className="flex justify-center" data-aos="fade-up">
    <button className="bg-gray-200 text-black py-1 px-6 rounded-xl" disabled>
      {label}
    </button>
  </div>
);

export default SectionBadge;
