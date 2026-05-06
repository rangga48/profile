import { ReactNode } from "react";
import CopyButton from "@/components/atoms/CopyButton";

interface ContactItemProps {
  href: string;
  icon: ReactNode;
  label: string;
  copied: boolean;
  onCopy: () => void;
  copyTitle?: string;
  aosDelay?: string;
  isExternal?: boolean;
}

const ContactItem = ({
  href,
  icon,
  label,
  copied,
  onCopy,
  copyTitle,
  aosDelay = "200",
  isExternal = false,
}: ContactItemProps) => (
  <div
    className="w-full mt-10"
    data-aos="fade-up"
    data-aos-delay={aosDelay}
  >
    <div className="flex justify-center items-center gap-5">
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        title={label}
      >
        <span className="text-gray-400 hover:text-black dark:hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300 block">
          {icon}
        </span>
      </a>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-lg lg:text-2xl font-bold hover:underline hover:text-gray-500 transition-all"
      >
        {label}
      </a>
      <CopyButton copied={copied} onCopy={onCopy} title={copyTitle} />
    </div>
  </div>
);

export default ContactItem;
