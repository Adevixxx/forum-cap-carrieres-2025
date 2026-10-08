import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <div ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="w-full">
          <img
            src="/images/groupe.jpg"
            alt={t("groupPhoto.alt")}
            className="mx-auto block h-auto max-w-full rounded-3xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;