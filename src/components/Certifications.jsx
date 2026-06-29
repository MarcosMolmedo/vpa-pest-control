import {
  ShieldCheck,
  BadgeCheck,
  Award,
  FileCheck2,
} from "lucide-react";

import "../styles/Certifications.css";

const certificationIcons = [ShieldCheck, BadgeCheck, FileCheck2, Award];

function Certifications({ translations }) {
  const certifications = translations.certifications;

  return (
    <section className="certifications" id="certifications">
      <div className="certifications__container">
        <div className="certifications__header">
          <span className="certifications__eyebrow">
            {certifications.eyebrow}
          </span>

          <h2 className="certifications__title">
            {certifications.title}
          </h2>

          <p className="certifications__text">
            {certifications.text}
          </p>
        </div>

        <div className="certifications__grid">
          {certifications.items.map((item, index) => {
            const Icon = certificationIcons[index];

            return (
              <article className="certifications__card" key={item.title}>
                <div className="certifications__icon">
                  <Icon size={28} strokeWidth={1.6} />
                </div>

                <h3 className="certifications__card-title">
                  {item.title}
                </h3>

                <p className="certifications__card-text">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;