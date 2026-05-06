import { Github, Instagram, Linkedin } from "lucide-react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import SectionBadge from "@/components/atoms/SectionBadge";
import SocialLink from "@/components/atoms/SocialLink";
import ContactItem from "@/components/molecules/ContactItem";

interface ContactSectionProps {
  title: string;
  subtitle: string;
  platforms: string;
  copiedEmail: boolean;
  copiedPhone: boolean;
  onCopyEmail: () => void;
  onCopyPhone: () => void;
}

const ContactSection = ({
  title,
  subtitle,
  platforms,
  copiedEmail,
  copiedPhone,
  onCopyEmail,
  onCopyPhone,
}: ContactSectionProps) => (
  <div id="contact" className="w-full bg-gray-50 pb-10">
    <div className="container mx-auto px-4 py-8">
      <SectionBadge label={title} />

      <div className="w-full" data-aos="fade-up" data-aos-delay="100">
        <div className="text-lg text-center mt-5 text-gray-400">
          <span dangerouslySetInnerHTML={{ __html: subtitle }} />
        </div>
      </div>

      <ContactItem
        href="mailto:ranggaputra681@gmail.com"
        icon={<AiOutlineMail size={24} />}
        label="ranggaputra681@gmail.com"
        copied={copiedEmail}
        onCopy={onCopyEmail}
        copyTitle="Copy email"
        aosDelay="200"
      />

      <ContactItem
        href="https://wa.me/6281383585869"
        icon={<FiPhone size={24} />}
        label="+62 813 8358 5869"
        copied={copiedPhone}
        onCopy={onCopyPhone}
        copyTitle="Copy phone number"
        aosDelay="300"
        isExternal
      />

      <div className="w-full mt-10" data-aos="fade-up" data-aos-delay="400">
        <div className="text-lg text-center text-gray-400">{platforms}</div>
      </div>

      <div className="w-full mt-3" data-aos="fade-up" data-aos-delay="500">
        <div className="flex justify-center items-center gap-3">
          <SocialLink href="https://github.com/rangga48" icon={<Github size={20} />} />
          <SocialLink href="https://www.instagram.com/mweh.48/" icon={<Instagram size={20} />} />
          <SocialLink href="https://www.linkedin.com/in/rangga-putra/" icon={<Linkedin size={20} />} />
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;
