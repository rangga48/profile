interface FooterProps {
  text: string;
}

const Footer = ({ text }: FooterProps) => (
  <div className="w-full bg-gray-300 py-5">
    <div className="text-sm lg:text-lg text-center text-gray-50">{text}</div>
  </div>
);

export default Footer;
