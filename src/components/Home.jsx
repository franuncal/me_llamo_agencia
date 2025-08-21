import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import "../styles/Home.css";

const unsplashImages = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
];

const Home = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const intervalRef = useRef(null);

  // Refs para desktop
  const titleBlockRef = useRef(null);
  const servicesRef = useRef(null);
  const imageRef = useRef(null);

  // Handlers para rotación de imagen al hacer hover
  const handleMouseEnter = () => {
    if (window.innerWidth < 900) return;
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % unsplashImages.length);
    }, 180);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setImgIndex(0);
    }
  };

  // Animaciones GSAP con timeline
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (window.innerWidth >= 900) {
        // Timeline para desktop
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 1 },
        });

        tl.from(titleBlockRef.current, { x: 100, opacity: 0 })
          .from(servicesRef.current, { x: -100, opacity: 0 }, "-=0.6") // se solapa un poco
          .from(imageRef.current, { y: 50, opacity: 0 }, "-=0.4");
      } else {
        // Timeline para mobile
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 1 },
        });

        tl.from(".mobile-title-block", { x: -100, opacity: 0 })
          .from(".home-image", { y: 100, opacity: 0 }, "-=0.6")
          .from(".home-services", { x: -100, opacity: 0 }, "-=0.4");
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="home">
      <div className="home-center">
        {/* Desktop layout */}
        <div
          className="desktop-only"
          style={{ display: "flex", width: "100%" }}
        >
          <div className="home-column">
            <div className="home-title-block" ref={titleBlockRef}>
              <span className="home-title">Me llamo</span>
              <span className="home-title">agencia</span>
            </div>
            <div className="home-services" ref={servicesRef}>
              <span>Redes</span>
              <span>Branded content</span>
              <span>Producciones</span>
            </div>
          </div>
          <div className="home-column">
            <div
              className="home-image"
              ref={imageRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={unsplashImages[imgIndex]}
                alt="Portada principal"
                className="image-main"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  transition: "filter 0.2s",
                }}
              />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet layout */}
        <div className="mobile-only" style={{ width: "100%" }}>
          <div className="home-title-block mobile-title-block">
            <span className="home-title">Me llamo</span>
            <span className="home-title">agencia</span>
          </div>
          <div className="home-image">
            <img
              src={unsplashImages[0]}
              alt="Portada principal"
              className="image-main"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                transition: "filter 0.2s",
              }}
            />
          </div>
          <div className="home-services">
            <span>Redes</span>
            <span>Branded content</span>
            <span>Producciones</span>
          </div>
        </div>
      </div>

      <div className="home-footer">
        <span>Mail</span>
        <span>Instagram</span>
        <span>Twitter</span>
      </div>
    </section>
  );
};

export default Home;
