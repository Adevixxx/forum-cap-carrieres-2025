import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Shield,
  Cpu,
  Zap,
  Rocket,
  HeartPulse,
  Briefcase,
  FlaskConical,
  Wheat,
  Building2,
  X,
} from "lucide-react";

import { poles } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

// ... (iconMap et poleCompanies restent les mêmes) ...
const iconMap = {
  Shield: <Shield className="w-12 h-12 text-blue-600" />,
  Cpu: <Cpu className="w-12 h-12 text-purple-600" />,
  Zap: <Zap className="w-12 h-12 text-yellow-500" />,
  Rocket: <Rocket className="w-12 h-12 text-pink-500" />,
  HeartPulse: <HeartPulse className="w-12 h-12 text-red-500" />,
  Briefcase: <Briefcase className="w-12 h-12 text-green-600" />,
  FlaskConical: <FlaskConical className="w-12 h-12 text-teal-600" />,
  Wheat: <Wheat className="w-12 h-12 text-amber-600" />,
  Building2: <Building2 className="w-12 h-12 text-indigo-600" />,
};

const poleCompanies = {
  defense: ["Thales", "MBDA", "Naval Group", "DGA", "Marine Nationale", "Shom"],
  it: ["Orange", "Clever Cloud", "Nokia"],
  energy: [],
  finance: ["Arkéa", "Qube Research & Technologies", "Sopra Steria", "Wavestone"],
  research: [],
  distribution: ["Carrefour"],
};


// ... (PoleModal reste le même) ...
const PoleModal = ({ pole, companies, onClose }) => {
  if (!pole) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[200] animate-fade-in">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-5 p-10 md:p-12 overflow-y-auto max-h-[85vh]">
        {/* Bouton fermeture */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-800"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Contenu */}
        <div className="flex items-center gap-4 mb-6">
          <div>{iconMap[pole.icon]}</div>
          <h2 className="text-3xl font-bold text-black">{pole.name}</h2>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {pole.description}
        </p>

        <h3 className="text-xl font-semibold text-black mb-3">
          Entreprises présentes :
        </h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          {companies.map((company) => (
            <li key={company}>{company}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


// 🌟 Composant principal
const PolesShowcase = () => {
  const { t } = useTranslation();
  const poleContent = t("poles.items", { returnObjects: true });
  const [selectedPole, setSelectedPole] = useState(null);

  const getPoleContent = (id) =>
    poleContent.find((item) => item.id === id) || {};

  const closeModal = () => setSelectedPole(null);

  return (
    <section id="poles" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={t("poles.title")}
          sub={t("poles.subtitle")}
        />

        {/* On garde la 'grid' et 'gap-6' */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-6">
          {poles.map((pole, index) => {
            const content = getPoleContent(pole.id);
            return (
              <GlowCard
                key={pole.id}
                card={{ description: content.description }}
                index={index}
                // Pour réactiver la fenêtre listant les entreprises du pôle (voir poleCompanies) :
                // onClick={() => setSelectedPole({ ...content, icon: pole.icon, id: pole.id })}
                // On garde 'h-full' ici pour que la *carte* remplisse la grille
                className="hover:scale-[1.02] transition-transform h-full"
              // On NE PASSE PAS 'childrenWrapperClass', c'est ça la solution
              >
                <div className="flex items-center gap-3">
                  <div>{iconMap[pole.icon]}</div>
                  <div>
                    <p className="font-bold text-lg">{content.name}</p>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Modal affiché si un pôle est sélectionné */}
        {selectedPole && (
          <PoleModal
            pole={selectedPole}
            companies={poleCompanies[selectedPole.id] || []}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default PolesShowcase;