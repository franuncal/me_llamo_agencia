import React from "react";
import "../styles/Services.css";

const Services = () => (
  <section className="services-section">
    <div className="services-title">SERVICIOS</div>
    <div className="services-center">
      <div className="service star">*</div>
    </div>
    <div className="services-columns">
      <div className="services-col left">
        <div className="service big">Redes </div>
        <div className="service big italic underline">Diseño gráfico</div>
        <div className="service big">Producción audiovisual</div>
      </div>
      <div className="services-col right">
        <div className="service big bold blur italic">Publicidad digital</div>
        <div className="service big">Desarrollo web</div>
        <div className="service ampersand-block">
          <span className="line"></span>
          <span className="ampersand">&</span>
          <span className="service big">Estrategia</span>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
