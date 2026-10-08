import { useState } from "react";
import { useTranslation } from "react-i18next";
import { logoIconsList1, logoIconsList2, logoIconsList3 } from "../constants"; // ✅ 3 listes séparées
import TitleHeader from "../components/TitleHeader";

// --- Composant Logo individuel ---
const LogoIcon = ({ icon, label, onClick }) => (
  <div
    className="flex-none flex-center marquee-item cursor-pointer hover:scale-105 transition-transform"
    onClick={onClick}
  >
    <img src={icon.imgPath} alt={label} />
  </div>
);

// --- Composant Modal ---
// Version améliorée avec structure et design cohérents au modal des pôles
const Modal = ({ icon, content, onClose }) => {
  const { t } = useTranslation();
  if (!icon || !content) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[200] animate-fade-in">
      <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl max-w-2xl w-full mx-5 p-10 md:p-12 overflow-y-auto max-h-[85vh]">
        {/* Bouton fermeture */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label={t("logos.modal.close")}
        >
          <span className="text-3xl leading-none">×</span>
        </button>

        {/* Contenu principal */}
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={icon.imgPath}
              alt={content.name}
              className="w-28 h-28 md:w-36 md:h-36 object-contain"
            />
          </div>

          {/* Nom de l’entreprise */}
          <h2 className="text-3xl font-bold text-black mb-4">
            {content.name}
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-lg">
            {content.description}
          </p>

          {/* Bouton lien */}
          <a
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            {t("logos.modal.cta")}
          </a>
        </div>
      </div>
    </div>
  );
};


// --- Composant principal ---
const LogoShowcase = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const { t } = useTranslation();
  const logosContent = t("logos.items", { returnObjects: true });

  const getContent = (id) => logosContent.find((item) => item.id === id);

  const renderLogo = (icon, key) => {
    const content = getContent(icon.id);
    const label = content?.name ?? icon.id;
    return (
      <LogoIcon
        key={key}
        icon={icon}
        label={label}
        onClick={() => setSelectedIcon(icon)}
      />
    );
  };

  return (
    <section id="companies" className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="md:px-10 px-5">
        <TitleHeader
          title={t("logos.title")}
          sub={t("logos.subtitle")}
        />
      </div>

      <div className="mt-16 space-y-10">
        {/* Première ligne */}
        <div className="marquee h-52">
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList1.map((icon, i) => renderLogo(icon, i))}
            {logoIconsList1.map((icon, i) => renderLogo(icon, `dup1-${i}`))}
          </div>
        </div>

        {/* Deuxième ligne */}
        <div className="marquee h-52">
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList2.map((icon, i) => renderLogo(icon, i))}
            {logoIconsList2.map((icon, i) => renderLogo(icon, `dup2-${i}`))}
          </div>
        </div>

        {/* Troisième ligne */}
        <div className="marquee h-52">
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList3.map((icon, i) => renderLogo(icon, i))}
            {logoIconsList3.map((icon, i) => renderLogo(icon, `dup3-${i}`))}
          </div>
        </div>
      </div>

      <Modal
        icon={selectedIcon}
        content={selectedIcon ? getContent(selectedIcon.id) : null}
        onClose={() => setSelectedIcon(null)}
      />
    </section>
  );
};

export default LogoShowcase;
