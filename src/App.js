// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Loading from "./pages/Loading";
import Home from "./pages/Home";
import Vote from "./pages/Vote";
import Resultats from "./pages/Resultats";

function App() {
  return (
    <Router>
      <Routes>
        {/* Page de chargement */}
        <Route path="/" element={<Loading />} />

        {/* Pages principales */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/vote" element={<Vote />} />
                <Route path="/resultats" element={<Resultats />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
