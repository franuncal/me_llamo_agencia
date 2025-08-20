import React from "react";
import "../styles/Contact.css";

const Contact = () => (
  <section className="contact-section">
    <div className="contact-content">
      <h2 className="contact-title">
        Hagamos <span className="contact-italic">crecer</span> tu marca!
      </h2>

      <div className="contact-arrows">
        <span className="contact-arrow">→</span>
        <span className="contact-arrow">→</span>
        <span className="contact-arrow">→</span>
      </div>
      <div className="contact-collab">
        <div className="contact-email">
          <span className="contact-email-main">hola@mellamoagencia.com</span>
        </div>
        <span className="contact-for">para</span> colaboraciones.
        {/* <span className="contact-star">✱</span> */}
        <span className="contact-star">✦</span>
      </div>
    </div>
    <div className="contact-socials">
      <span>Mail</span>
      <span>Instagram</span>
      <span>Twitter</span>
    </div>
  </section>
);

export default Contact;
