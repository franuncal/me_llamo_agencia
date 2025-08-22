// Services.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Services.css";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Título y estrella
      tl.fromTo(
        ".services-title",
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          ".service.star",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.2"
        )
        // Columnas izquierda y derecha con oscilación horizontal
        .fromTo(
          ".services-col.left .service",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          "-=0.2"
        )
        .fromTo(
          ".services-col.right .service",
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-title">SERVICIOS</div>
      <div className="services-center">
        <div className="service star">✱</div>
      </div>
      <div className="services-columns">
        <div className="services-col left">
          <div className="service big">Redes </div>
          <div className="service big italic underline">Branded content</div>
          <div className="service big">Producciones</div>
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
};

export default Services;
