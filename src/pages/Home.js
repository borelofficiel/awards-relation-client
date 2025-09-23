// src/pages/Home.js
import React, { useEffect } from "react";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  // Initialisation des animations AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // animations durée 1s
  }, []);

  return (
    <div className="home-container">
      {/* Titre avec animation fade-up */}
      <h2 data-aos="fade-up">Bienvenue aux Awards Relation Client 2025</h2>

      {/* Description avec animation fade-up et délai */}
      <p data-aos="fade-up" data-aos-delay="200">
        Votez pour vos entreprises préférées et découvrez le classement en temps réel.
      </p>

      {/* Bouton commencer à voter */}
      <a href="/vote" className="btn-start" data-aos="zoom-in" data-aos-delay="400">
        Commencer à voter
      </a>
    </div>
  );
}

export default Home;
