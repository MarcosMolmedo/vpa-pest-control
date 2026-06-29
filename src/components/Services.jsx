import {
  Bug,
  Shield,
  ShieldCheck,
  Search,
  Trees,
} from "lucide-react";

import "../styles/Services.css";

const serviceIcons = [Search, Shield, Bug, Bug, Trees, ShieldCheck];

const Services = ({ translations }) => {
  const services = translations.services;

  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__banner">
          <div className="services__banner-overlay" />

          <div className="services__banner-content">
            <span className="services__eyebrow">
              {services.eyebrow}
            </span>

            <h2 className="services__title">
              {services.title}
            </h2>

            <p className="services__text">
              {services.text}
            </p>
          </div>
        </div>

        <div className="services__grid">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[index] || ShieldCheck;

            return (
              <article
                className="services__card"
                key={service.title}
              >
                <div className="services__icon">
                  <Icon
                    size={34}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="services__card-title">
                  {service.title}
                </h3>

                <p className="services__card-text">
                  {service.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;