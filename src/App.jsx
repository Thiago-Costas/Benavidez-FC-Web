import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollTop from "./components/scrolltop";

import Home from "./pages/home";
import Productos from "./pages/productos";
import Soporte from "./pages/soporte";
import Galeria from "./pages/quienesomos/galeria";
import Historia from "./pages/quienesomos/historia";
import Noticias from "./pages/quienesomos/noticias";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/quienes-somos/galeria" element={<Galeria />} />
        <Route path="/quienes-somos/historia" element={<Historia />} />
        <Route path="/quienes-somos/noticias" element={<Noticias />} />
      </Routes>
      <ScrollTop />
      <Footer />
    </Router>
  );
}

export default App;
