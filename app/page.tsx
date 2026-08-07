"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const spot = document.getElementById("spot");
    function handleMove(e: MouseEvent) {
      spot?.style.setProperty("--x", e.clientX + "px");
      spot?.style.setProperty("--y", e.clientY + "px");
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div className="spot" id="spot"></div>
      <main>
        <div className="logo-wrap">
          <img
            className="logo"
            src="https://spheria.digital/wp-content/uploads/2025/03/SPHERIA-NEG.png"
            alt="SPHERIA"
          />
        </div>
        <h1>
          Estamos reconstruyendo <em>spheria.digital</em>.
          <br />
          Volvemos pronto.
        </h1>
        <div className="line"></div>
        <a className="mail" href="mailto:hello@spheria.es">
          hello@spheria.es
        </a>
      </main>
      <footer>EUROPA — LATAM</footer>
    </>
  );
}
