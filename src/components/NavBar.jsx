import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const DOWN_HIDE_THRESHOLD = 16;
    const UP_SHOW_THRESHOLD = 12;
    const REVEAL_OFFSET = 80;

    lastScrollY.current = window.scrollY;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY < REVEAL_OFFSET) {
        setIsVisible(true);
      } else if (delta > DOWN_HIDE_THRESHOLD) {
        setIsVisible(false);
      } else if (delta < -UP_SHOW_THRESHOLD) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateVisibility);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = [
    "navbar",
    scrolled ? "scrolled" : "not-scrolled",
    "transition-transform duration-300",
    isVisible ? "translate-y-0" : "-translate-y-full"
  ].join(" ");

  return (
    <header className={navbarClasses}>
      <div className="inner">
        <a href="#hero" className="logo">
          <img src="/images/cc-logo.png" alt="Logo" className="h-12 w-auto" />
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, labelKey }) => (
              <li key={labelKey} className="group">
                <a href={link}>
                  <span>{t(`navbar.links.${labelKey}`)}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="actions flex items-center gap-4">
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>{t("navbar.contact")}</span>
            </div>
          </a>
          <div className="language-switcher">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
