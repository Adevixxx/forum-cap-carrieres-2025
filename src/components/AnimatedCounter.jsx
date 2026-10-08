import { useMemo, useRef } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);
  const { t, i18n } = useTranslation();

  const counterItems = useMemo(
    () => t("stats.items", { returnObjects: true }),
    [t]
  );

  useGSAP(
    () => {
      countersRef.current.forEach((counter, index) => {
        const numberElement = counter.querySelector(".counter-number");
        const item = counterItems[index];
        if (!item) return;

        // Set initial value to 0
        gsap.set(numberElement, { innerText: "0" });

        // Create the counting animation
        gsap.to(numberElement, {
          innerText: item.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: 1 }, // Ensures whole numbers
          scrollTrigger: {
            trigger: "#counter",
            start: "top center",
          },
          // Add the suffix after counting is complete
          onComplete: () => {
            numberElement.textContent = `${item.value}${item.suffix}`;
          },
        });
      });
    },
    { dependencies: [counterItems, i18n.language] }
  );

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32 mb-2">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-white rounded-lg shadow-sm p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-blue-900 text-5xl font-bold mb-2">
              0 {item.suffix}
            </div>
            <div className="text-slate-600 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;

