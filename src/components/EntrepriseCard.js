import React from "react";
import "../styles/EntrepriseCard.css";

function EntrepriseCard({ entreprise }) {
  const handleVote = () => {
    alert(`Vous avez voté pour ${entreprise.nom} !`);
    // Ici on ajoutera plus tard la logique Firebase pour enregistrer le vote
  };

  return (
    <div className="card">
      <h3 className="card-title">{entreprise.nom}</h3>
      <p className="card-description">{entreprise.description}</p>
      <p className="card-votes">Votes : {entreprise.votes}</p>
      <button className="card-btn" onClick={handleVote}>Voter</button>
    </div>
  );
}

export default EntrepriseCard;
