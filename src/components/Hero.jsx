import { ShieldCheck, Clock3, Leaf, BadgeCheck } from "lucide-react";
import "../styles/Hero.css";

const Hero = ({ translations }) => {
  const { hero, trust } = translations;

  const trustIcons = [ShieldCheck, Clock3, Leaf, BadgeCheck];

  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">{hero.eyebrow}</p>

          <h1 className="hero__title">{hero.title}</h1>

          <p className="hero__description">{hero.text}</p>

          <div className="hero__actions">
            <a
              href="tel:+31852033744"
              className="hero__button hero__button--primary"
            >
              {hero.primaryButton}
            </a>

            <a href="#contact" className="hero__button hero__button--secondary">
              {hero.secondaryButton}
              <span className="hero__button-icon">→</span>
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <img
            src="/images/hero-rat.png"
            alt={hero.imageAlt}
            className="hero__image"
          />
        </div>
      </div>

      <div className="hero__trust">
        <div className="hero__trust-container">
          {trust.map((item, index) => {
            const Icon = trustIcons[index];

            return (
              <div className="hero__trust-item" key={item}>
                <span className="hero__trust-icon">
                  <Icon size={18} strokeWidth={1.7} />
                </span>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;