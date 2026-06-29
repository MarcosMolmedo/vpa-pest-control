import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import "../styles/Header.css";

const Header = ({ translations, onToggleLanguage }) => {
  const { header, trust } = translations;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationLinks = [
    "#home",
    "#services",
    "#about",
    "#process",
    "#certifications",
    "#service-area",
    "#contact",
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const handleLanguage = () => {
    onToggleLanguage();
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      {/* TOP BAR */}

      <div className="header__topbar">
        <div className="header__topbar-container">
          {trust.map((item) => (
            <span className="header__trust-item" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* MAIN */}

      <div className="header__main">
        <div className="header__container">
          <a
            href="#home"
            className="header__brand"
            aria-label="Go to home"
            onClick={closeMenu}
          >
            <span className="header__logo">
              {header.logo}
            </span>

            <span className="header__brand-text">
              {header.subtitle}
            </span>
          </a>

          {/* DESKTOP NAV */}

          <nav
            className="header__nav"
            aria-label="Main navigation"
          >
            {header.nav.map((item, index) => (
              <a
                key={item}
                href={navigationLinks[index]}
                className="header__link"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* ACTIONS */}

          <div className="header__actions">
            <button
              className="header__language"
              type="button"
              onClick={handleLanguage}
              aria-label="Change language"
            >
              {header.language}
            </button>

            <a
              className="header__phone"
              href="tel:0852033744"
            >
              <Phone size={15} />

              <span>{header.phone}</span>
            </a>

            <button
              className="header__menu"
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={
                isMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
            >
              {isMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}

      <aside
        id="mobile-menu"
        className={`header__drawer ${
          isMenuOpen
            ? "header__drawer--open"
            : ""
        }`}
      >
        <nav
          className="header__drawer-nav"
          aria-label="Mobile navigation"
        >
          {header.nav.map((item, index) => (
            <a
              key={item}
              href={navigationLinks[index]}
              className="header__drawer-link"
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="header__drawer-footer">
          <button
            className="header__drawer-language"
            type="button"
            onClick={handleLanguage}
          >
            {header.language}
          </button>

          <a
            className="header__drawer-phone"
            href="tel:0852033744"
            onClick={closeMenu}
          >
            <Phone size={16} />

            <span>{header.phone}</span>
          </a>
        </div>
      </aside>
    </header>
  );
};

export default Header;