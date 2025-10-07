import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/error404.css";

const Error404 = () => {
    return (
        <main className="error-page d-flex flex-column align-items-center justify-content-center text-center">
            <div className="error-animation">
                <i className="fas fa-triangle-exclamation text-danger fa-4x mb-3"></i>
                <h1 className="glitch-text" data-text="404">404</h1>
            </div>

            <h2 className="fw-bold mt-3">¡Ups! Página no encontrada</h2>
            <p className="text-muted mb-4 fs-5">
                Parece que te perdiste... pero tranquilo, podés volver al inicio.
            </p>

            <Link to="/" className="btn btn-success btn-lg px-5 shadow-sm bounce-btn">
                <i className="fas fa-home me-2"></i> Volver al inicio
            </Link>
        </main>
    );
};

export default Error404;
