import "../styles/Header.css";

const Header = ({ translations, onToggleLanguage }) => {
  const { header } = translations;

  return (
    <header className="header">
      <div className="header__container">
        <a className="header__brand" href="#home" aria-label="VPA home">
          <span className="header__logo">VPA</span>
          <span className="header__brand-text">{header.subtitle}</span>
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          {header.nav.map((item) => (
            <a className="header__link" href="#" key={item}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            className="header__language"
            type="button"
            onClick={onToggleLanguage}
          >
            {header.language}
          </button>

          <a className="header__phone" href="tel:0852033744">
            {header.phone}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;