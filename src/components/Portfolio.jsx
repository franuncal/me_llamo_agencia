import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    id: "cure",
    letter: "A.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    title: "Marca A",
    subtitle: "Boutique promo website",
    description:
      "Sitio web interactivo para una startup tecnológica, diseñado para comunicar su visión disruptiva y conectar con una nueva generación de usuarios digitales.",
    tags: "REDES / DISEÑO GRÁFICO / DESARROLLO WEB / BRANDING",
    link: "#",
    bgColor: "#803131ff",
    textColor: "#f4f4f4",
  },
  {
    id: "rafal",
    letter: "B.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Marca B",
    subtitle: "Portfolio website",
    description:
      "Portafolio digital de una marca de moda emergente, enfocada en transmitir autenticidad y estilo a través de campañas visuales innovadoras.",
    tags: "REDES / DISEÑO GRÁFICO / DESARROLLO WEB / BRANDING",
    link: "#",
    bgColor: "#aeaaa2ff",
    textColor: "#fff",
    rightBgColor: "#333333",
    rightTextColor: "#fff",
  },
];

const Portfolio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".portfolio-img");

      images.forEach((img) => {
        gsap.fromTo(
          img,
          { y: 0, scale: 1 },
          {
            y: 20, // efecto parallax
            scale: 1.05, // leve zoom
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="portfolio-section" ref={sectionRef}>
      {works.map((work) => (
        <div
          className={`portfolio-block ${work.id}`}
          key={work.id}
          style={{ background: work.rightBgColor || work.bgColor }}
        >
          <div className="portfolio-left" style={{ color: work.textColor }}>
            <img src={work.image} alt={work.title} className="portfolio-img" />
          </div>
          <div className="portfolio-center">
            <span className="portfolio-letter">{work.letter}</span>
          </div>
          <div
            className="portfolio-right"
            style={{ color: work.rightTextColor || work.textColor }}
          >
            <div className="portfolio-case-title">{work.title}</div>
            <div className="portfolio-tags">{work.tags}</div>
            <div className="portfolio-desc">{work.description}</div>
            <a href={work.link} className="portfolio-link">
              Proyecto Completo <span>+</span>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
