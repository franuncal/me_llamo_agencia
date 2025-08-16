import React from "react";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-group navbar-group-left">
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
    <div className="navbar-divider">
      <div className="navbar-curve" />
      <div className="navbar-line" />
    </div>
    <div className="navbar-group navbar-group-right">
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
  </nav>
);

export default Navbar;
