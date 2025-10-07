import React from "react";
import "../styles/pages/soporte.css";

const Soporte = () => {
  return (
    <main>
      <section className="contact-section animate__animated animate__fadeInUp">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-success">
              <i className="fas fa-headset me-2"></i> Contacto y Soporte
            </h2>
            <p className="lead">
              Estamos para ayudarte en todo momento. Elegí el medio que prefieras
              para comunicarte con nosotros.
            </p>
          </div>
          <div className="row g-4 mb-5 justify-content-center">
            <div className="col-md-4">
              <div className="card shadow-sm h-100 text-center contact-card">
                <div className="card-body">
                  <i className="fas fa-clock fa-3x text-success mb-3"></i>
                  <h5 className="card-title">Horario de Atención</h5>
                  <p className="card-text">
                    Lunes a Viernes: 8:00 - 22:00 hs<br />
                    Sábados: 8:00 - 19:00 hs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100 text-center contact-card">
                <div className="card-body">
                  <i className="fab fa-whatsapp fa-3x text-success mb-3"></i>
                  <h5 className="card-title">WhatsApp</h5>
                  <p className="card-text">+54 11 6629-5591</p>
                  <a
                    href="https://wa.me/541166295591"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success btn-lg"
                  >
                    <i className="fab fa-whatsapp me-2"></i> Escribir ahora
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100 text-center contact-card">
                <div className="card-body">
                  <i className="fas fa-envelope fa-3x text-success mb-3"></i>
                  <h5 className="card-title">E-mail</h5>
                  <p className="card-text">benavidezfutbolclub@gmail.com</p>
                  <a
                    href="mailto:benavidezfutbolclub@gmail.com"
                    className="btn btn-primary btn-lg"
                  >
                    <i className="fas fa-envelope me-2"></i> Enviar correo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h4
              className="mb-4"
              style={{ color: "#009B4D", fontFamily: "'Bungee', sans-serif" }}
            >
              Redes Sociales
            </h4>
            <div className="d-flex justify-content-center gap-4 fs-2">
              <a
                href="https://www.instagram.com/benavidezfc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/benavidezfc.benavidezfc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.youtube.com/@benavidezfc9102"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Soporte;
