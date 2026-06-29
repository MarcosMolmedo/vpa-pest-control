import "../styles/ContactCTA.css";

function ContactCTA({ translations }) {
  const { contactCta } = translations;

  return (
      <section className="contact-cta" id="contact">
      <div className="contact-cta__container">
        <p className="contact-cta__eyebrow">{contactCta.eyebrow}</p>

        <h2 className="contact-cta__title">{contactCta.title}</h2>

        <p className="contact-cta__text">{contactCta.text}</p>

        <div className="contact-cta__actions">
          <a href="tel:+31301234567" className="contact-cta__button contact-cta__button--primary">
            {contactCta.primaryButton}
          </a>

          <a href="#contact" className="contact-cta__button contact-cta__button--secondary">
            {contactCta.secondaryButton}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;