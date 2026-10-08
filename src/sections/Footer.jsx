import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa6";

const socialIcons = [
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/capcarrieres25imta" },
  { name: "Facebook", icon: FaFacebook, link: "http://www.facebook.com/IMTAtlantique" },
  { name: "Youtube", icon: FaYoutube, link: "https://www.youtube.com/@IMTAtlantique" },
  { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/company/forum-cap-carrieres/" },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne gauche */}
        <div className="flex flex-col justify-center">
          <p className="cursor-pointer hover:underline">{t("footer.terms")}</p>
        </div>

        {/* Colonne centre (réseaux sociaux) */}
        <div className="socials">
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="icon"
              >
                <Icon className="w-6 h-6 text-white" />
              </a>
            );
          })}
        </div>

        {/* Colonne droite */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

