import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loading.css";

function Loading() {
  const navigate = useNavigate(); // Hook pour naviguer

  useEffect(() => {
    // Redirige vers la page Home après 3 secondes
    const timer = setTimeout(() => {
      navigate("/Home"); // "/" = Home
    }, 1000);

    // Nettoyage du timer si le composant est démonté
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Chargement...</p>
    </div>
  );
}

export default Loading;
