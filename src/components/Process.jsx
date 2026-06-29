import {
  Search,
  ClipboardCheck,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import "../styles/Process.css";

const icons = [Search, ClipboardCheck, ShieldCheck, RefreshCw];

function Process({ translations }) {
  return (
    <section className="process" id="process">
      <div className="process__container">
        <div className="process__header">
          <p className="process__eyebrow">{translations.process.eyebrow}</p>
          <h2 className="process__title">{translations.process.title}</h2>
          <p className="process__text">{translations.process.text}</p>
        </div>

        <div className="process__grid">
          {translations.process.steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <article className="process__card" key={step.title}>
                <div className="process__top">
                  <div className="process__icon">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>

                  <span className="process__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="process__card-title">{step.title}</h3>
                <p className="process__card-text">{step.text}</p>

                {index < translations.process.steps.length - 1 && (
                  <span className="process__arrow">
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;