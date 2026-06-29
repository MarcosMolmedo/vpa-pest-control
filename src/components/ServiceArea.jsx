import {
  MapPin,
  Navigation,
  Clock,
  CheckCircle2,
} from "lucide-react";
import "../styles/ServiceArea.css";

function ServiceArea({ translations }) {
  const serviceArea = translations.serviceArea;

  const icons = [MapPin, Navigation, Clock];

  return (
   <section className="service-area" id="service-area">
      <div className="service-area__container">
        <div className="service-area__content">
          <span className="service-area__eyebrow">
            {serviceArea.eyebrow}
          </span>

          <h2 className="service-area__title">
            {serviceArea.title}
          </h2>

          <p className="service-area__text">
            {serviceArea.text}
          </p>

          <div className="service-area__highlights">
            {serviceArea.highlights.map((highlight, index) => {
              const Icon = icons[index] || CheckCircle2;

              return (
                <div className="service-area__highlight" key={highlight}>
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{highlight}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="service-area__visual" aria-label={serviceArea.visualLabel}>
          <div className="service-area__card">
            <div className="service-area__card-header">
              <Navigation size={22} strokeWidth={1.8} />
              <span>{serviceArea.cardTitle}</span>
            </div>

            <ul className="service-area__areas">
              {serviceArea.areas.map((area) => (
                <li className="service-area__area" key={area}>
                  <CheckCircle2 size={16} strokeWidth={1.8} />
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            <div className="service-area__note">
              <MapPin size={18} strokeWidth={1.8} />
              <p>{serviceArea.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;