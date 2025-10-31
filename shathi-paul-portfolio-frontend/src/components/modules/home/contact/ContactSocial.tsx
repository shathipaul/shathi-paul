import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/shathipaul",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      link: "https://github.com/shathipaul",
      label: "GitHub",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/",
      label: "Instagram",
    },
  ];
  return (
    <div className="flex gap-3 mt-">
      {socialLinks.map((data, i) => (
        <a
          key={i}
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline relative z-30 text-sm md:text-base italic duration-500"
          aria-label={data.label}
        >
          {data.label}
        </a>
      ))}
    </div>
  );
};

export default ContactSocial;
