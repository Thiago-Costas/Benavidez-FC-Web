import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // ✅ Import correcto
import "../styles/scrolltop.css"; // ✅ Ruta correcta de estilos

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    // Detectar el scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Función para volver al inicio
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        visible && (
            <button id="btnScrollTop" onClick={scrollToTop}>
                <ArrowUp size={20} />
            </button>
        )
    );
};

export default ScrollTop;
