import "./../styles/Footer.css";

function Footer({ translations }) {
  const footer = translations.footer;

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <a className="footer__brand" href="#home" aria-label="VPA Home">
            <span className="footer__logo">VPA</span>
            <span className="footer__subtitle">Plaagbeheersing</span>
          </a>

          <p className="footer__statement">{footer.statement}</p>
        </div>

        <div className="footer__grid">
          <div className="footer__column">
            <h3 className="footer__heading">{footer.navigationTitle}</h3>

            <nav className="footer__nav" aria-label={footer.navigationTitle}>
              {footer.navigation.map((item) => (
                <a key={item.label} className="footer__link" href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">{footer.contactTitle}</h3>

            <ul className="footer__list">
              <li>{footer.phone}</li>
              <li>{footer.email}</li>
              <li>{footer.serviceArea}</li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">{footer.informationTitle}</h3>

            <ul className="footer__list">
              {footer.information.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__portfolio">{footer.portfolio}</p>

          <div className="footer__meta">
            <p>{footer.copyright}</p>

            <a
              href="https://www.linkedin.com/in/marcos-manuel-olmedo/?locale=es"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__developer"
            >
              Developer by <span>Marcos M Olmedo</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;