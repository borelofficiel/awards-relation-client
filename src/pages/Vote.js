// src/pages/Vote.js
import React, { useEffect } from "react";
import "../styles/Vote.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Exemple de données entreprises (photo + nom + votes)
const entreprises = [
  { id: 1, nom: "Entreprise A", photo: "/assets/images/entrepriseA.jpg", votes: 0 },
  { id: 2, nom: "Entreprise B", photo: "/assets/images/entrepriseB.jpg", votes: 0 },
  { id: 3, nom: "Entreprise C", photo: "/assets/images/entrepriseC.jpg", votes: 0 },
];

function Vote() {
  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="vote-container">
      <h2 data-aos="fade-up">Votez pour vos entreprises préférées</h2>

      {/* Cartes entreprises */}
      <div className="cards">
        {entreprises.map((e) => (
          <div className="card" key={e.id} data-aos="fade-up">
            <img src={e.photo} alt={e.nom} />
            <h3>{e.nom}</h3>
            <p>Votes : {e.votes}</p>
            <button>Voter</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vote;
