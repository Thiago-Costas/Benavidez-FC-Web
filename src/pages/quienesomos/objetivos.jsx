import React from "react";
import { motion } from "framer-motion";
import "../../styles/pages/objetivos.css";

const Objetivos = () => {
  return (
    <main className="objetivos-section py-5">
      <div className="container">
        <motion.header
          className="text-center mb-5"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="display-4 fw-bold text-success">
            <i className="fas fa-bullseye me-3"></i>Objetivos y Misión
          </h1>
          <hr className="w-25 mx-auto border-success border-2 rounded mt-3 mb-4" />
        </motion.header>

        <div className="row g-5 align-items-center">
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card objetivo-card border-success shadow">
              <div className="card-body">
                <h3 className="card-title text-success mb-3">
                  <i className="fas fa-bullseye me-2"></i>Nuestros Objetivos
                </h3>
                <ul className="objetivos-list list-unstyled">
                  <li><i className="fas fa-futbol text-success me-2"></i>Formar personas a través del deporte.</li>
                  <li><i className="fas fa-users text-success me-2"></i>Brindar un espacio de contención social y educativa.</li>
                  <li><i className="fas fa-handshake text-success me-2"></i>Representar con orgullo nuestros valores dentro y fuera de la cancha.</li>
                  <li><i className="fas fa-trophy text-success me-2"></i>Promover la disciplina, el respeto y la superación personal.</li>
                  <li><i className="fas fa-chart-line text-success me-2"></i>Seguir creciendo institucionalmente y generando oportunidades.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card mision-card border-warning shadow">
              <div className="card-body">
                <h3 className="card-title text-warning mb-3">
                  <i className="fas fa-heart me-2"></i>Nuestra Misión
                </h3>
                <p className="card-text lh-lg">
                  En <span className="fw-bold text-warning">Benavidez Fútbol Club</span> trabajamos con pasión, compromiso y responsabilidad social.  
                  Nuestra misión es formar jugadores y personas con valores, capaces de afrontar desafíos dentro y fuera del campo.
                </p>
                <p className="card-text lh-lg">
                  Creemos que el fútbol es una herramienta de transformación, y que cada logro, cada esfuerzo y cada sonrisa construyen una comunidad más fuerte.  
                  En nuestro club, cada sueño se vive en equipo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="valores-section mt-5 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="fw-bold text-success mb-4">
            <i className="fas fa-star me-2"></i>Nuestros Valores
          </h3>
          <div className="row justify-content-center g-4">
            <div className="col-md-3">
              <div className="valor-card p-4 border-success border rounded-4 shadow-sm">
                <i className="fas fa-hands-helping fa-2x text-success mb-3"></i>
                <h5 className="fw-bold">Solidaridad</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="valor-card p-4 border-success border rounded-4 shadow-sm">
                <i className="fas fa-users fa-2x text-success mb-3"></i>
                <h5 className="fw-bold">Trabajo en Equipo</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="valor-card p-4 border-success border rounded-4 shadow-sm">
                <i className="fas fa-bolt fa-2x text-success mb-3"></i>
                <h5 className="fw-bold">Compromiso</h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Objetivos;
