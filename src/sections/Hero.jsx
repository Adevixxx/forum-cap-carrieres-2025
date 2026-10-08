import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { lazy, Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import Countdown from "../components/Countdown";

// Lazy import : le modèle 3D n'est téléchargé que s'il est affiché (desktop/tablette).
// Déclaré hors du composant pour ne pas être recréé (et rechargé) à chaque rendu.
const HeroExperience = lazy(() =>
  import("../components/models/hero_models/HeroExperience")
);

const Hero = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(pointer: coarse)" });

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden" style={{
    backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(250, 250, 250, 1) 90%
      ),
      url('/images/bg.jpg')
    `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top right",
    backgroundColor: "#fafafa", // couleur de fond finale au cas où
  }}>
      
      <div className="hero-layout" >
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5" >
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                {t("hero.headline.line1")}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.textKey}-${index}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.textKey}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-blue-100"
                        />
                        <span>{t(`hero.rotatingWords.${word.textKey}`)}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>{t("hero.headline.line2")}</h1>
              <h1>{t("hero.headline.line3")}</h1>
            </div>

            <p className="text-slate-600 md:text-xl relative z-10 pointer-events-none">
              {t("hero.tagline")}
            </p>

            <Button
              text={t("hero.cta")}
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Static Image */}
        <figure>
          {/* On ne rend ce bloc QUE si on N'EST PAS mobile */}
          {!isMobile && (
            <div className="hero-3d-layout">
              <Suspense fallback={null}>
                <HeroExperience />
              </Suspense>
            </div>
          )}
          {/* Sur mobile, ce <figure> est vide. */}
        </figure>
      </div>

      

      <AnimatedCounter />
      <Countdown />
    </section>
  );
};

export default Hero;
