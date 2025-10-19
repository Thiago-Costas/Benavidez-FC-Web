import { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/pages/productos.css";

export default function Productos() {
  const [productoActivo, setProductoActivo] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const productos = [
    {
      id: 1,
      nombre: "Camiseta Titular 2025",
      descripcion: "Diseño oficial de la temporada 2025. Cómoda, liviana y con los colores históricos del club.",
      imagen: "img/camiseta-principal.jpg",
      galeria: ["img/camiseta1.jpg", "img/camiseta2.jpg", "img/camiseta3.jpg"],
      colores: ["#d32f2f", "#000", "#fff"],
      talles: "S, M, L, XL",
    },
    {
      id: 2,
      nombre: "Short Oficial 2025",
      descripcion: "Short de entrenamiento con escudo bordado. Tela liviana DryFit.",
      imagen: "img/short.jpg",
      galeria: ["img/short1.jpg", "img/short2.jpg", "img/short3.jpg"],
      colores: ["#000", "#d32f2f"],
      talles: "S, M, L, XL",
    },
    {
      id: 3,
      nombre: "Buzo de Entrenamiento",
      descripcion: "Ideal para días fríos. Material térmico con respiración y logo del club.",
      imagen: "img/buzo.jpg",
      galeria: ["img/buzo1.jpg", "img/buzo2.jpg", "img/buzo3.jpg"],
      colores: ["#121212", "#c8102e"],
      talles: "M, L, XL",
    },
    {
      id: 4,
      nombre: "Campera Representativa",
      descripcion: "Usada por los jugadores en presentaciones. Corte moderno, bolsillos con cierre.",
      imagen: "img/campera.jpg",
      galeria: ["img/campera1.jpg", "img/campera2.jpg", "img/campera3.jpg"],
      colores: ["#c8102e", "#000"],
      talles: "S, M, L",
    },
    {
      id: 5,
      nombre: "Medias Oficiales",
      descripcion: "Medias técnicas con suela reforzada, cómodas y resistentes.",
      imagen: "img/medias.jpg",
      galeria: ["img/medias1.jpg", "img/medias2.jpg", "img/medias3.jpg"],
      colores: ["#000", "#fff"],
      talles: "Único",
    },
  ];

  const abrirProducto = (producto) => {
    setProductoActivo(producto);
  };

  const cerrarProducto = () => {
    setProductoActivo(null);
  };

  const handleCartClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2500);
  };

  return (
    <main className="productos-container">
      <h1 className="titulo-seccion text-center mt-5">Nuestros Productos</h1>
      <hr className="divisor" />

      <div className="container my-5">
        <div className="row g-4">
          {productos.map((producto) => (
            <div key={producto.id} className="col-md-4">
              <motion.div
                className="card-producto shadow-sm"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="img-fluid rounded-top"
                />
                <div className="card-body text-center">
                  <h5 className="nombre-producto">{producto.nombre}</h5>
                  <p className="descripcion-breve">{producto.descripcion}</p>
                  <button
                    className="btn btn-vermas"
                    onClick={() => abrirProducto(producto)}
                  >
                    <ShoppingCart className="me-2" /> Ver más
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal del producto */}
      <AnimatePresence>
        {productoActivo && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-producto"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >
              <button className="btn-cerrar" onClick={cerrarProducto}>
                <X size={24} />
              </button>
              <h2 className="titulo-modal">{productoActivo.nombre}</h2>
              <hr className="divisor" />

              {/* Carrusel */}
              <div id="carouselDetalles" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-inner rounded-4 shadow">
                  {productoActivo.galeria.map((img, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img src={img} className="d-block w-100" alt="imagen producto" />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselDetalles"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselDetalles"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>

              {/* Info */}
              <p className="descripcion">{productoActivo.descripcion}</p>

              <h5 className="subtitulo">Colores disponibles</h5>
              <div className="colores">
                {productoActivo.colores.map((color, i) => (
                  <span key={i} className="color" style={{ backgroundColor: color }}></span>
                ))}
              </div>

              <h5 className="subtitulo">Talles</h5>
              <p>{productoActivo.talles}</p>

              <div className="boton-carrito mt-3">
                <button onClick={handleCartClick} className="btn btn-agregar">
                  <ShoppingCart className="me-2" /> Agregar al carrito
                </button>
                {showMessage && (
                  <motion.div
                    className="mensaje-no-disponible"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    ❌ No disponible actualmente
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
