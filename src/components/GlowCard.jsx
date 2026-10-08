import { useRef } from "react";

const GlowCard = ({
  card,
  index,
  children,
  onClick,
  className = "",
  paddingClass = "p-10",
  childrenWrapperClass = "", // <-- 1. AJOUTER CETTE PROP
}) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      onClick={onClick}
      className={`card card-border timeline-card rounded-xl mb-5 break-inside-avoid-column relative overflow-hidden transition-all duration-300 ${paddingClass} ${className}`}
    >
      {/* Glow effect */}
      <div className="glow pointer-events-none absolute inset-0" />

      {/* Contenu de la carte */}
      {/* <-- 2. UTILISER LA PROP ICI au lieu de 'h-full' en dur */}
      <div className={`relative z-10 ${childrenWrapperClass}`}>{children}</div>

      {/* Description */}
      {card?.description && (
        <div className="mt-5 text-slate-600 text-lg">{card.description}</div>
      )}
    </div>
  );
};

export default GlowCard;