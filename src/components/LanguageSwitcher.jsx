import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const flags = {
  fr: "/images/flags/fr.png",
  en: "/images/flags/gb.png",
};

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || "fr";

  const handleChange = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Bouton principal */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <div className="w-8 aspect-[3/2] overflow-hidden rounded-sm shadow-sm">
          <img
            src={flags[currentLang]}
            alt={currentLang}
            className="w-full h-full object-cover"
          />
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown centré */}
      {open && (
        <div className="absolute mt-2 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-md shadow-lg w-32 z-50">
          <div
            onClick={() => handleChange("fr")}
            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            role="option"
            aria-selected={currentLang === "fr"}
          >
            <div className="w-6 aspect-[3/2] overflow-hidden rounded-sm">
              <img
                src={flags.fr}
                alt="fr"
                className="w-full h-full object-cover"
              />
            </div>
            <span>{t("languageSwitcher.fr")}</span>
          </div>
          <div
            onClick={() => handleChange("en")}
            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            role="option"
            aria-selected={currentLang === "en"}
          >
            <div className="w-6 aspect-[3/2] overflow-hidden rounded-sm">
              <img
                src={flags.en}
                alt="en"
                className="w-full h-full object-cover"
              />
            </div>
            <span>{t("languageSwitcher.en")}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

