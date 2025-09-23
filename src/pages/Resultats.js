// src/pages/Results.js
import React, { useEffect } from "react";
import "../styles/Resultats.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Exemple statique votes
const entreprises = [
  { id: 1, nom: "Entreprise A", votes: 120 },
  { id: 2, nom: "Entreprise B", votes: 95 },
  { id: 3, nom: "Entreprise C", votes: 80 },
];

function Results() {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  // Trie décroissant
  const sorted = [...entreprises].sort((a,b) => b.votes - a.votes);

  return (
    <div className="results-container">
      <h2 data-aos="fade-up">Classement des entreprises</h2>
      <ol>
        {sorted.map((e) => (
          <li key={e.id} data-aos="fade-up">
            <span>{e.nom}</span> - <strong>{e.votes} votes</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Results;
