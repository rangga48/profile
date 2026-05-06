import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  size?: number;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);

export default SocialLink;
