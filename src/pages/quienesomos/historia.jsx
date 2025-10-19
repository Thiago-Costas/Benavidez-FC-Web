import React from "react";
import "../../styles/pages/historia.css";

const Historia = () => {
  return (
    <main className="historia-main">
      <section id="quienes-somos" className="about-section py-5">
        <div className="container">
          <header className="text-center mb-5">
            <h1 className="display-4 fw-bold text-success">
              <i className="fas fa-users me-3"></i> ¿Quiénes Somos?
            </h1>
            <h2 className="h3 text-muted">Historia</h2>
            <hr className="w-25 mx-auto border-success border-2 rounded mt-3 mb-4" />
          </header>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-success h-100">
                <div className="card-body">
                  <h3 className="card-title text-success">
                    <i className="fas fa-hand-holding-heart me-2"></i> Fundación y Apoyo Escolar
                  </h3>
                  <p className="card-text lh-lg">
                    Hace 11 años armamos la ONG <span className="badge bg-success">El Mago Gaspar</span> brindando
                    apoyo escolar gratuito en educación no formal, logrando 64 egresados en primaria y secundaria de
                    adultos en el Centro de Estudio FELIX GASPAR COSTAS.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-warning h-100">
                <div className="card-body">
                  <h3 className="card-title text-warning">
                    <i className="fas fa-futbol me-2"></i> Trabajo Social y Fútbol
                  </h3>
                  <p className="card-text lh-lg">
                    Con más de 5 años de trabajo social y contención a pibes de barrios a través del fútbol, fundamos
                    hace 6 años <span className="badge bg-warning text-dark">Benavidez Fútbol Club</span>, enfocándonos
                    en brindar igualdad y oportunidades a los chicos.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-danger h-100">
                <div className="card-body">
                  <h3 className="card-title text-danger">
                    <i className="fas fa-trophy me-2"></i> Logros Deportivos
                  </h3>
                  <p className="card-text lh-lg">
                    Hoy cumplimos el sueño de representar al Club Atlético ATLAS en infantiles de AFA Sede Benavidez,
                    compitiendo contra equipos de la primera nacional, gracias al esfuerzo y apoyo del coordinador
                    Walter Fernández.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-info h-100">
                <div className="card-body">
                  <h3 className="card-title text-info">
                    <i className="fas fa-users-cog me-2"></i> Comunidad y Futuro
                  </h3>
                  <p className="card-text lh-lg">
                    A pesar de las dificultades, seguimos creciendo día a día con pasión y dedicación. Cada
                    colaborador y participante es parte de esta gran historia solidaria que sigue creciendo.
                    <strong> La magia continúa</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="directivos my-5 text-center">
            <h3 className="mb-4 text-success"><i className="fas fa-user-tie me-2"></i>Directivos del Club</h3>
            <div className="row justify-content-center g-4">
              <div className="col-md-3">
                <div className="card border-success h-100">
                  <div className="card-body">
                    <h5 className="card-title text-success">Fundador y Presidente</h5>
                    <p className="card-text">Dario Costas</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="timeline my-5">
            <h3 className="text-center text-success mb-4"><i className="fas fa-history me-2"></i>Línea de Tiempo</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex align-items-center">
                <i className="fas fa-calendar-check fa-lg text-success me-3"></i>
                Fundación de la ONG "El Mago Gaspar" y apoyo escolar gratuito.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <i className="fas fa-futbol fa-lg text-warning me-3"></i>
                5 años de trabajo social y fútbol en barrios.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <i className="fas fa-flag-checkered fa-lg text-danger me-3"></i>
                Fundación de Benavidez FC y primeros partidos en AFA.
              </li>
              <li className="list-group-item d-flex align-items-center">
                <i className="fas fa-users fa-lg text-info me-3"></i>
                Crecimiento constante y consolidación comunitaria.
              </li>
            </ul>
          </div>

          <div className="text-center mt-4">
            <a href="/soporte">
              <button className="btn btn-success btn-lg px-5 shadow">
                ¡Sumate y ayudanos a crecer! <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Historia;
