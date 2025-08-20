import React from "react";
import "../styles/Portfolio.css";

const works = [
  {
    id: "cure",
    letter: "A.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    title: "Marca A",
    subtitle: "Boutique promo website",
    description:
      "Unique nail and wax boutique that curated a build-your-own style menu.",
    tags: "ART DIRECTION / CONTENT CREATION / BRANDING / INTERFACE DESIGN / INTERACTION DESIGN",
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
      "Folio of a polish photographer and videographer, who loves to create visual stories.",
    tags: "ART DIRECTION / INTERFACE DESIGN / INTERACTION DESIGN",
    link: "#",
    bgColor: "#aeaaa2ff",
    textColor: "#fff",
    rightBgColor: "#333333", // color oscuro completo
    rightTextColor: "#fff",
  },
];

const Portfolio = () => (
  <section className="portfolio-section">
    {works.map((work) => (
      <div
        className={`portfolio-block ${work.id}`}
        key={work.id}
        style={{ background: work.rightBgColor || work.bgColor }}
      >
        <div
          className="portfolio-left"
          style={{ background: "transparent", color: work.textColor }}
        >
          <img src={work.image} alt={work.title} className="portfolio-img" />
          <div className="portfolio-title">{work.title}</div>
          <div className="portfolio-subtitle">{work.subtitle}</div>
        </div>
        <div className="portfolio-center">
          <span className="portfolio-letter">{work.letter}</span>
        </div>
        <div
          className="portfolio-right"
          style={{
            background: "transparent",
            color: work.rightTextColor || work.textColor,
          }}
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

export default Portfolio;
