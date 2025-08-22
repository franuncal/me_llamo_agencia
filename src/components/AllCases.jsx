// // AllCases.jsx
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../styles/AllCases.css";

// gsap.registerPlugin(ScrollTrigger);

// const AllCases = () => {
//   const sectionRef = useRef(null);
//   const plusRef = useRef(null);
//   const proyectosRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       });

//       // Animar "+"
//       tl.fromTo(
//         plusRef.current,
//         { rotate: 0, opacity: 0, scale: 0.5 },
//         { rotate: 360, opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
//       )
//         // Subrayar y resaltar "Proyectos"
//         .fromTo(
//           proyectosRef.current,
//           { color: "#222", borderBottom: "0px solid transparent" },
//           {
//             color: "#f7f6f3",
//             borderBottom: "3px solid #f7f6f3",
//             duration: 0.6,
//             ease: "power2.out",
//           },
//           "-=0.6"
//         )
//         // Animación del párrafo
//         .fromTo(
//           ".allcases-text",
//           { y: 30, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
//           "-=0.3"
//         );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="allcases-section" ref={sectionRef}>
//       <div className="allcases-title">
//         <span ref={plusRef} className="allcases-plus">
//           +
//         </span>{" "}
//         <span ref={proyectosRef} className="allcases-proyectos">
//           Proyectos
//         </span>
//         <div className="allcases-underline" />
//       </div>
//       <div className="allcases-thanks">
//         <span className="allcases-text">
//           Somos una agencia de marketing que nació para conectar <br /> marcas
//           con <span className="allcases-bold">personas</span>, ideas con{" "}
//           <span className="allcases-bold">resultados</span>, y creatividad con{" "}
//           <span className="allcases-bold">estrategia</span>. <br />
//         </span>
//       </div>
//     </section>
//   );
// };

// export default AllCases;

// AllCases.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/AllCases.css";

gsap.registerPlugin(ScrollTrigger);

const AllCases = () => {
  const sectionRef = useRef(null);
  const plusRef = useRef(null);
  const proyectosRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !plusRef.current ||
      !proyectosRef.current ||
      !underlineRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animar "+"
      tl.fromTo(
        plusRef.current,
        { rotate: 0, opacity: 0, scale: 0.5 },
        { rotate: 360, opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
      )
        // Aparece "Proyectos"
        .fromTo(
          proyectosRef.current,
          { color: "#222" },
          { color: "#f7f6f3", duration: 0.6, ease: "power2.out" },
          "-=0.6"
        )
        // Subrayado animado
        .fromTo(
          underlineRef.current,
          { width: "0%" },
          { width: "100%", duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        // Animación del párrafo
        .fromTo(
          ".allcases-text",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.3"
        );

      // ✅ Hover para el subrayado
      const handleMouseEnter = () => {
        gsap.to(underlineRef.current, {
          backgroundColor: "#803131ff",
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(proyectosRef.current, {
          color: "#803131ff",
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(underlineRef.current, {
          backgroundColor: "#f7f6f3",
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(proyectosRef.current, {
          color: "#f7f6f3",
          duration: 0.4,
          ease: "power2.out",
        });
      };

      proyectosRef.current.addEventListener("mouseenter", handleMouseEnter);
      proyectosRef.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        proyectosRef.current?.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        proyectosRef.current?.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="allcases-section" ref={sectionRef}>
      <div className="allcases-title">
        <span ref={plusRef} className="allcases-plus">
          +
        </span>{" "}
        <span ref={proyectosRef} className="allcases-proyectos">
          Proyectos
        </span>
        <div ref={underlineRef} className="allcases-underline" />
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
