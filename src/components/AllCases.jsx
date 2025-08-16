import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/AllCases.css";

const AllCases = () => {
  const plusRef = useRef(null);
  const proyectosRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".allcases-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Animar el +
        gsap.to(plusRef.current, {
          rotate: 360,
          duration: 1.2,
          ease: "power2.out",
          overwrite: true,
        });
        // Subrayar 'Proyectos'
        gsap.to(proyectosRef.current, {
          borderBottom: "3px solid #f7f6f3",
          color: "#f7f6f3",
          duration: 0.6,
          overwrite: true,
        });
      } else {
        // Resetear animaciones
        gsap.to(plusRef.current, {
          rotate: 0,
          duration: 0.6,
          overwrite: true,
        });
        gsap.to(proyectosRef.current, {
          borderBottom: "none",
          color: "#222",
          duration: 0.6,
          overwrite: true,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="allcases-section">
      <div className="allcases-title">
        <span ref={plusRef} className="allcases-plus">
          +
        </span>{" "}
        <span ref={proyectosRef} className="allcases-proyectos">
          Proyectos
        </span>
        <div className="allcases-underline" />
      </div>
      <div className="allcases-thanks">
        <span className="allcases-text">
          Somos una agencia de marketing que nació para conectar <br /> marcas
          con <span className="allcases-bold">personas</span>, ideas con{" "}
          <span className="allcases-bold">resultados</span>, y creatividad con{" "}
          <span className="allcases-bold">estrategia</span>. <br />
        </span>
      </div>
    </section>
  );
};

export default AllCases;
