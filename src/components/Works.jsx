import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "../styles/Works.css";

const works = [
  {
    id: 1,
    title: "Proyecto 1",
    categories: ["Diseño Web", "Desarrollo"],
    image: "/works/proyecto1.jpg",
  },
  {
    id: 2,
    title: "Proyecto 2",
    categories: ["Branding", "UX/UI"],
    image: "/works/proyecto2.jpg",
  },
  {
    id: 3,
    title: "Proyecto 3",
    categories: ["Marketing Digital", "SEO"],
    image: "/works/proyecto3.jpg",
  },
  {
    id: 4,
    title: "Proyecto 4",
    categories: ["Desarrollo Web", "E-commerce"],
    image: "/works/proyecto4.jpg",
  },
  {
    id: 5,
    title: "Proyecto 5",
    categories: ["Branding", "Diseño Gráfico"],
    image: "/works/proyecto5.jpg",
  },
];

const Works = () => {
  const progressRef = useRef(null);
  const [setActiveImage] = useState(null);
  const containerRef = useRef(null);
  const imagesRef = useRef({});

  useEffect(() => {
    // Inicializar GSAP para la barra de progreso
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 0.3,
        start: "top top",
        end: "bottom bottom",
      },
    });
  }, []);

  const handleMouseEnter = (id) => {
    setActiveImage(id);
    if (imagesRef.current[id]) {
      gsap.to(imagesRef.current[id], {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (id) => {
    if (imagesRef.current[id]) {
      gsap.to(imagesRef.current[id], {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="works-page">
      <div ref={progressRef} className="progress"></div>

      <nav className="works-nav">
        <Link to="/" className="home-link">
          Volver al Inicio
        </Link>
      </nav>

      <div className="works" ref={containerRef}>
        <div className="container">
          <div className="screen">
            <div className="lines-container">
              {works.map((work, index) => (
                <div
                  key={work.id}
                  className="line"
                  onMouseEnter={() => handleMouseEnter(work.id)}
                  onMouseLeave={() => handleMouseLeave(work.id)}
                >
                  <Link to={`/work/${work.id}`} className="work-link">
                    <span className="number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="label">{work.title}</span>
                    <span className="category">
                      {work.categories.map((cat, i) => (
                        <React.Fragment key={i}>
                          {cat}
                          {i < work.categories.length - 1 && (
                            <span className="slash">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="work-img">
          {works.map((work) => (
            <div
              key={work.id}
              className="img"
              ref={(el) => (imagesRef.current[work.id] = el)}
              style={{ opacity: 0 }}
            >
              <img src={work.image} alt={work.title} />
            </div>
          ))}
        </div>
      </div>

      <button className="scroll-hint">Scroll para explorar</button>
    </div>
  );
};

export default Works;
