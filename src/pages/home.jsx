import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <main className="main-home animate__animated animate__fadeInUp">
      <section className="hero">
        <div className="container">
          <h1>Benavidez Futbol Club</h1>
          <p className="subheading">
            "Formando Jugadores, Construyendo sueños"
          </p>
          <a href="/quienes-somos/historia" className="btn btn-mandarin">
            Conocé el Club
          </a>
        </div>
      </section>

      <section className="quick-links py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card card-link">
                <i className="fas fa-box-open fa-3x mb-3 text-success"></i>
                <h5>Productos</h5>
                <a href="/productos" className="btn btn-outline-success">
                  Ver tienda
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-link">
                <i className="fas fa-image fa-3x mb-3 text-success"></i>
                <h5>Galería</h5>
                <a href="/quienes-somos/galeria" className="btn btn-outline-success">
                  Ver fotos
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-link">
                <i className="fas fa-headset fa-3x mb-3 text-success"></i>
                <h5>Soporte</h5>
                <a href="/soporte" className="btn btn-outline-success">
                  Contactanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="about-club">
        <div className="container">
          <i className="fas fa-people-roof fa-3x mb-3 text-warning"></i>
          <h2>Somos Más Que Un Club De Fútbol</h2>
          <p>
            Comprometidos con el deporte, la comunidad y la formación de grandes
            personas.
          </p>
        </div>
      </section>


      <section className="values-section py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Nuestros Valores</h2>
          <p className="mb-4">
            En Benavidez FC, fomentamos la disciplina, el respeto, el trabajo en
            equipo y la inclusión.
          </p>

          <div className="row g-4 mb-4">
            <div className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <i className="fas fa-heart fa-2x text-success mb-3"></i>
                  <h5>Pasión</h5>
                  <p>Jugamos con el corazón, representando a nuestra comunidad.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <i className="fas fa-users fa-2x text-success mb-3"></i>
                  <h5>Comunidad</h5>
                  <p>Somos un espacio de contención, unión y crecimiento para todos.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <i className="fas fa-handshake fa-2x text-success mb-3"></i>
                  <h5>Compromiso</h5>
                  <p>Cada paso que damos es con responsabilidad y dedicación.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <i className="fas fa-star fa-2x text-success mb-3"></i>
                  <h5>Excelencia</h5>
                  <p>Buscamos crecer en lo deportivo, humano y social día a día.</p>
                </div>
              </div>
            </div>
          </div>

          <a href="/quienes-somos/objetivos" className="btn btn-success btn-lg mt-3">
            Conocer nuestros Objetivos
          </a>
        </div>
      </section>


      <section className="news-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Últimas Noticias</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="news-card">
                <img src="/public/images/pages/primernoticia.png" alt="Nueva camiseta edición 2025" className="news-img-top mb-3"/>
                <h5>Nueva camiseta edición 10 Años</h5>
                <p>Presentamos los modelos conmemorativos por los 10 años de historia del club.</p>
                <a href="/quienessomos/noticias" className="link-more">Leer más →</a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="news-card">
                <img src="/public/images/pages/segundanoticia.jpg" alt="Arrancan las inscripciones" className="news-img-top mb-3"/>
                <h5>Arrancan las inscripciones</h5>
                <p>¡Te esperamos!, Sumate</p>
                <a href="./quienesomos/noticias" className="link-more">Leer más →</a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="news-card">
                <img src="/public/images/pages/terceranoticia.jpeg" alt="Arrancan las inscripciones" className="news-img-top mb-3"/>
                <h5>17 años de su partida</h5>
                <p>Recordando en este dia a 17 años de su partida al "MAGO GASPAR" </p>
                <a href="" className="link-more">Leer más →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
