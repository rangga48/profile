import Image from "next/image";

interface SkillItemProps {
  src: string;
  label: string;
}

const SkillItem = ({ src, label }: SkillItemProps) => (
  <li className="text-center p-2 hover:-translate-y-2 transition-transform duration-300 cursor-default">
    <div className="flex justify-center">
      <Image
        className="object-cover w-2/5"
        src={src}
        alt={label}
        width={100}
        height={100}
        quality={100}
      />
    </div>
    <div className="text-lg mt-1">{label}</div>
  </li>
);

export default SkillItem;
