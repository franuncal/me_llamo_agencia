import React, { useState, useRef } from "react";
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

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 900;

  const handleMouseEnter = () => {
    if (!isDesktop) return;
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

  return (
    <section className="home">
      <div className="home-center">
        {/* Desktop layout */}
        <div
          className="desktop-only"
          style={{ display: "flex", width: "100%" }}
        >
          <div className="home-column">
            <div className="home-title-block">
              <span className="home-title">Me llamo</span>
              <span className="home-title">agencia</span>
            </div>
            <div className="home-services">
              <span>Redes</span>
              <span>Branded content</span>
              <span>Producciones</span>
            </div>
          </div>
          <div className="home-column">
            <div
              className="home-image"
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
