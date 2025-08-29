import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Works.css";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Proyecto Digital",
    category: "WEB / APP",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    number: "02",
    title: "Branding Corporativo",
    category: "BRANDING",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    number: "03",
    title: "App Mobile",
    category: "APP",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  },
  {
    id: 4,
    number: "04",
    title: "E-commerce Platform",
    category: "WEB / SHOP",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
  },
];

const Works = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Animación inicial de las líneas
    gsap.from(".line", {
      y: 100,
      opacity: 0,
      scaleY: 1.5,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Listener para el scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = scrolled / (docHeight - winHeight);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProjectHover = (project) => {
    setActiveImage(project);
    if (project) {
      gsap.to(".img", {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(".img", {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  return (
    <main className="works-page">
      <div
        className="progress"
        style={{ transform: `scale3d(1, ${1 - scrollProgress}, 1)` }}
      />

      <nav className="works-nav">
        <a href="/" className="home-link">
          Go home
        </a>
      </nav>

      <div className="scroll-container" ref={containerRef}>
        <section className="works">
          <div className="container">
            <div className="screen">
              <div className="lines-container">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="line"
                    onMouseEnter={() => handleProjectHover(project)}
                    onMouseLeave={() => handleProjectHover(null)}
                  >
                    <div className="work-link">
                      <span className="number">{project.number}</span>
                      <a href={`/work/${project.id}`} className="label">
                        {project.title}
                        {project.category && (
                          <span className="category">
                            <span className="slash"> / </span>
                            <span>{project.category}</span>
                          </span>
                        )}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="work-img">
              {activeImage && (
                <div className="img">
                  <img src={activeImage.image} alt={activeImage.title} />
                </div>
              )}
            </div>

            <button className="scroll-hint">scroll down for all cases</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Works;
