import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-logo navbar-mobile-only">MLA</div>

      <div className="navbar-group navbar-group-left navbar-desktop-only">
        <div className="navbar-item">
          <a href="#info" className="navbar-title">
            Info
          </a>
          <div className="navbar-subtitle">SOBRE MÍ</div>
        </div>
        <div className="navbar-item">
          <a href="#work" className="navbar-title">
            Work
          </a>
          <div className="navbar-subtitle">PROYECTOS</div>
        </div>
      </div>

      <div className="navbar-divider navbar-desktop-only">
        <div className="navbar-curve" />
        <div className="navbar-line" />
      </div>

      <div className="navbar-group navbar-group-right navbar-desktop-only">
        <div className="navbar-item">
          <a href="#workflow" className="navbar-title">
            Proceso
          </a>
          <div className="navbar-subtitle">MÉTODO</div>
        </div>
        <div className="navbar-item">
          <a href="#contact" className="navbar-title">
            Contacto
          </a>
          <div className="navbar-subtitle">COLABORACIÓN</div>
        </div>
      </div>

      <button
        className="navbar-menu-btn navbar-mobile-only"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        MENU
      </button>

      {menuOpen && (
        <div className="navbar-menu-dropdown navbar-mobile-only open">
          <a href="#info" className="navbar-title">
            Info
          </a>
          <a href="#work" className="navbar-title">
            Work
          </a>
          <a href="#workflow" className="navbar-title">
            Procesos
          </a>
          <a href="#contact" className="navbar-title">
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
