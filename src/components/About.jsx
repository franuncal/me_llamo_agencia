import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/About.css";

const About = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const recognitionsRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.from(imageRef.current, {
      x: -100,
      //   opacity: 0,
      duration: 1,
    })
      .from(
        titleRef.current.children,
        {
          x: 50,
          //   opacity: 0,
          stagger: 0.1,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        descriptionRef.current.children,
        {
          x: 50,
          //   opacity: 0,
          stagger: 0.1,
          duration: 0.8,
        },
        "-=0.3"
      )
      .from(
        recognitionsRef.current.children,
        {
          y: 50,
          //   opacity: 0,
          stagger: 0.1,
          duration: 0.6,
        },
        "-=0.4"
      );
  }, []);

  return (
    <section className="about page">
      <div className="about">
        <div className="d-f top">
          <div className="img" ref={imageRef}>
            <div className="show-outer">
              <div className="show-inner">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Me Llamo Agency Creative Team"
                  width="801"
                  height="887"
                />
              </div>
            </div>
          </div>

          <article ref={titleRef}>
            <h1>ME.LLAMO.AGENCIA</h1>
            <h2>un poco sobre nosotros</h2>
            <strong className="h4">Simplemente sobre</strong>
            <p className="strong">LO QUE HACEMOS</p>
            <p>
              <span>Nuestra experiencia, </span>
              <span>colaboraciones, y</span>
              <span>nuestro propio estilo,</span>
            </p>
          </article>
        </div>

        <div className="d-f desc">
          <div className="spacer"></div>
          <article ref={descriptionRef}>
            <strong className="h4">Entonces,</strong>
            <p>
              Nos especializamos en crear experiencias digitales excepcionales
              que transforman marcas y cautivan audiencias. Nuestro equipo
              combina creatividad, tecnología y estrategia para desarrollar
              soluciones innovadoras que impulsan el crecimiento de nuestros
              clientes.
            </p>
          </article>
        </div>

        <div ref={recognitionsRef}>
          <div className="collabs">
            <ul className="collaborations">
              <li>Adobe</li>
              <li>Microsoft</li>
              <li>Google</li>
              <li>Amazon</li>
              <li>Apple</li>
              <li>Meta</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              {/* Repetidos para scroll infinito */}
              <li>Adobe</li>
              <li>Microsoft</li>
              <li>Google</li>
              <li>Amazon</li>
              <li>Apple</li>
              <li>Meta</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      <footer ref={footerRef}>
        <a href="/" className="back-home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm7 14l-4-4h8l-4 4zm0-6l4-4H8l4 4z"
              fill="currentColor"
            />
          </svg>
          Volver al inicio
        </a>
        <strong className="big">No más palabras</strong>
        <div className="content">
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="ME.LLAMO team collaboration"
              width="766"
              height="966"
            />

            <a href="/contact" className="link">
              Contáctanos
            </a>
          </div>

          <div className="top">
            <div>
              <p className="line">
                <span className="left">hagamos un</span>
              </p>
              <p className="line">
                <span className="left">increíble</span>
              </p>
              <p className="line">
                <span className="left red">proyecto</span>
              </p>
              <p className="line">
                <span className="right">juntos</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default About;
