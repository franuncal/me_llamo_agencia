// import React from "react";
// import "../styles/Contact.css";

// const Contact = () => (
//   <section className="contact-section">
//     <div className="contact-content">
//       <h2 className="contact-title">
//         Hagamos <span className="contact-italic">crecer</span> tu marca!
//       </h2>

//       <div className="contact-arrows">
//         <span className="contact-arrow">→</span>
//         <span className="contact-arrow">→</span>
//         <span className="contact-arrow">→</span>
//       </div>
//       <div className="contact-collab">
//         <span className="contact-for">para</span> colaboraciones.
//         <div className="contact-email">
//           <span className="contact-email-main">hola@mellamoagencia.com</span>
//         </div>
//         <span className="contact-star">✱</span>
//         {/* <span className="contact-star">✦</span> */}
//       </div>
//     </div>
//     <div className="contact-socials">
//       <span>Mail</span>
//       <span>Instagram</span>
//       <span>Twitter</span>
//     </div>
//   </section>
// );

// export default Contact;

// Contact.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
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

      tl.fromTo(
        ".contact-title",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          ".contact-italic",
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" },
          "-=0.4"
        )
        .fromTo(
          ".contact-arrow",
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .fromTo(
          ".contact-collab",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".contact-star",
          { scale: 0, rotation: -90, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
          },
          "-=0.5"
        )
        .fromTo(
          ".contact-socials span",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" },
          "-=0.3"
        )
        .add(() => {
          // 🔁 Animación infinita de las flechas
          gsap.to(".contact-arrow", {
            x: 10,
            repeat: -1,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut",
            stagger: 0.2,
          });
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-content">
        <h2 className="contact-title">
          Hagamos <span className="contact-italic">crecer</span> tu marca!
        </h2>

        <div className="contact-arrows">
          <span className="contact-arrow">→</span>
          <span className="contact-arrow">→</span>
          <span className="contact-arrow">→</span>
        </div>

        <div className="contact-collab">
          <span className="contact-for">para</span> colaboraciones.
          <div className="contact-email">
            <span className="contact-email-main">hola@mellamoagencia.com</span>
          </div>
          <span className="contact-star">✱</span>
        </div>
      </div>

      <div className="contact-socials">
        <span>Mail</span>
        <span>Instagram</span>
        <span>Twitter</span>
      </div>
    </section>
  );
};

export default Contact;
