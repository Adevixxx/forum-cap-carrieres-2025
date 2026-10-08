import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

import { forumDate } from "../constants";

const Countdown = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdownRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date(forumDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Animation à l’apparition uniquement (pas à chaque update)
  useEffect(() => {
    if (countdownRef.current) {
      gsap.fromTo(
        countdownRef.current.querySelectorAll(".countdown-item"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    }
  }, []);

  return (
    <div className="mt-10 mb-2 flex flex-col items-center justify-center text-blue-900 font-semibold">
      <p className="text-lg md:text-xl mb-5 text-center">
        {t("countdown.title")}
      </p>

      <div
        ref={countdownRef}
        className="flex justify-center gap-5 md:gap-8 flex-wrap"
      >
        {[
          { label: t("countdown.days"), value: timeLeft.days },
          { label: t("countdown.hours"), value: timeLeft.hours },
          { label: t("countdown.minutes"), value: timeLeft.minutes },
          { label: t("countdown.seconds"), value: timeLeft.seconds },
        ].map((item, index) => (
          <div
            key={index}
            className="countdown-item flex flex-col items-center bg-white/60 backdrop-blur-md rounded-xl px-5 py-3 shadow-md min-w-[70px]"
          >
            <span className="text-3xl md:text-5xl text-blue-900 font-bold">
              {item.value.toString().padStart(2, "0")}
            </span>
            <p className="text-sm md:text-base text-slate-600 mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
