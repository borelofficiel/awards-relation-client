import React from "react";
import "../styles/Accueil.css";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="accueil-container">
      <header className="accueil-header">
        <h1 className="title">Awards Relation Client 2025</h1>
        <p className="subtitle">
          Votez pour votre entreprise préférée et découvrez le classement en temps réel !
        </p>
        <Link to="/vote">
          <button className="btn-voter">Commencer à voter</button>
        </Link>
      </header>
    </div>
  );
}

export default Accueil;
