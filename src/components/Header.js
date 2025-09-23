// src/components/Header.js
import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      {/* Titre principal */}
      <h1>Awards Relation Client 2025</h1>

      {/* Navigation */}
      <nav>
        <a href="/">Accueil</a>
        <a href="/vote">Votez</a>
        <a href="/results">Résultats</a>
      </nav>
    </header>
  );
}

export default Header;
