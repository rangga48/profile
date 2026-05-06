interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  mobile?: boolean;
}

const NavLink = ({ href, label, onClick, mobile = false }: NavLinkProps) => {
  if (mobile) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="text-base font-medium text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white transition-colors"
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="text-lg cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-1"
    >
      {label}
    </a>
  );
};

export default NavLink;
