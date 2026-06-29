import { Award, Clock, ShieldCheck, UserCheck, Leaf } from "lucide-react";
import "../styles/About.css";

function About({ translations }) {
  const icons = [UserCheck, Award, ShieldCheck, Clock, Leaf];

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <p className="about__eyebrow">{translations.about.eyebrow}</p>

          <h2 className="about__title">{translations.about.title}</h2>

          <p className="about__text">{translations.about.text}</p>

          <ul className="about__list">
            {translations.about.points.map((point, index) => {
              const Icon = icons[index];

              return (
                <li className="about__item" key={point}>
                  <span className="about__icon">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span>{point}</span>
                </li>
              );
            })}
          </ul>

          <div className="about__signature">
            <p className="about__signature-name">
              {translations.about.signatureName}
            </p>
            <p className="about__signature-role">
              {translations.about.signatureRole}
            </p>
          </div>
        </div>

        <div className="about__media">
          <img
            className="about__image"
            src="/images/about-technician.png"
            alt={translations.about.imageAlt}
          />

          <div className="about__quote">
            <p>{translations.about.quote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;