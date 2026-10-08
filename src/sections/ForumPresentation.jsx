import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const SchoolPresentation = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const mediaRef = useRef(null);
  const { t } = useTranslation();

  useGSAP(() => {
    const section = sectionRef.current;
    const textBlock = textRef.current;
    const mediaBlock = mediaRef.current;

    if (!section) {
      return;
    }

    gsap.fromTo(
      section,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );

    [textBlock, mediaBlock].forEach((element, index) => {
      if (!element) return;

      gsap.fromTo(
        element,
        { opacity: 0, y: index === 0 ? 30 : 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  const forumContent = t("forum", { returnObjects: true }) || {};
  const { title, description1, description2, footer, button } = forumContent;

return (
    <section id="forum" ref={sectionRef} className="app-showcase">
        <div className="w-full md:px-10 px-5">
            <div className="showcaselayout items-center gap-16">
                

                <div
                    ref={mediaRef}
                    className="flex flex-col items-center gap-6 w-full max-w-xl"
                >
                    <div className="rounded-3xl overflow-hidden shadow-xl w-full">
                        <img
                            src="/images/cc-logo2.png"
                            alt={title}
                            className="w-full h-full object-cover scale-100"
                            loading="lazy"
                        />
                    </div>
                    {button && (
                        <a
                            href="/documents/brochure.pdf"
                            download="Forum_Presentation.pdf"
                            className="md:w-120 md:h-16 w-60 h-12 inline-block"
                        >
                            <div className="cta-button group">
                                <div className="bg-circle" />
                                <p className="text">{button}</p>
                                <div className="arrow-wrapper">
                                    <img src="/images/arrow-right.svg" alt="arrow" />
                                </div>
                            </div>
                        </a>
                    )}
                </div>

                <div ref={textRef} className="max-w-2xl space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        {title}
                    </h2>
                    {description1 && (
                        <p className="text-slate-600 md:text-lg leading-relaxed">
                            {description1}
                        </p>
                    )}
                    {description2 && (
                        <p className="text-slate-600 md:text-lg leading-relaxed">
                            {description2}
                        </p>
                    )}
                    {footer && (
                        <p className="text-slate-800 font-semibold">{footer}</p>
                    )}
                </div>
            </div>
        </div>
    </section>
);
};

export default SchoolPresentation;
