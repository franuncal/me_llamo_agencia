import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
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
            Proyectos
          </a>
          <div className="navbar-subtitle">ALGUNOS PROYECTOS</div>
        </div>
      </div>
      <div className="navbar-divider navbar-desktop-only">
        <div className="navbar-curve" />
        <div className="navbar-line" />
      </div>
      <div className="navbar-group navbar-group-right navbar-desktop-only">
        <div className="navbar-item">
          <a href="#workflow" className="navbar-title">
            Procesos
          </a>
          <div className="navbar-subtitle">FLUJO DE TRABAJO</div>
        </div>
        <div className="navbar-item">
          <a href="#contact" className="navbar-title">
            Contacto
          </a>
          <div className="navbar-subtitle">PARA COLABORACIÓN</div>
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
            Workflow
          </a>
          <a href="#contact" className="navbar-title">
            Contact me
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
