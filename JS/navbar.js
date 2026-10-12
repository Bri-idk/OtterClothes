/**
 * navbar.js — Carga e inyecta la barra de navegación.
 *
 * COMPATIBILIDAD: funciona tanto en servidor local como en GitHub Pages
 * sin importar el nombre del repositorio, porque calcula la URL base
 * a partir de la ubicación real del propio script (siempre correcta).
 */

(function () {
  // ── Base URL del proyecto ────────────────────────────────────────────────
  // document.currentScript.src devuelve la URL absoluta del script,
  // p.ej. https://bri-idk.github.io/OtterClothes/JS/navbar.js
  // Cortamos en "/JS/" para obtener la raíz del proyecto.
  const scriptSrc = (document.currentScript || {}).src || "";
  const BASE = scriptSrc.includes("/JS/")
    ? scriptSrc.slice(0, scriptSrc.lastIndexOf("/JS/") + 1)
    : location.origin + "/";

  // =====================================================
    // SELECCIONAR EL ARCHIVO CSS
    // =====================================================

     const ESTILO = "CSS/Navbar.css";

    function cargarCSS(id, ruta) {

        if (document.getElementById(id)) return;

        const link = document.createElement("link");

        link.id = id;
        link.rel = "stylesheet";
        link.href = ruta;

        document.head.appendChild(link);
    }

    // Cargar los estilos de la navbar
    cargarCSS("navbar-css", BASE + ESTILO);

// =====================================================
    // CARGAR ICONOS DE BOOTSTRAP
    // =====================================================

    cargarCSS(
        "bootstrap-icons-css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    );


    // =====================================================
    // CONFIGURACION DE ICONOS
    // =====================================================

    const iconos = {
        "mi carrito": "bi-cart3",
        "agregar producto": "bi-plus-circle-fill",
    };

    // =====================================================
    // AGREGAR ICONOS AL NAVBAR
    // =====================================================

    function agregarIconos(placeholder) {

        const enlaces = placeholder.querySelectorAll(
            ".nav-link"
        );

        enlaces.forEach((enlace) => {

            const texto = enlace.textContent
                .trim()
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

            const claseIcono = iconos[texto];

            if (!claseIcono) return;

            // Evitar iconos duplicados
            if (enlace.querySelector(".bi")) return;

            const icono = document.createElement("i");

            icono.className = `bi ${claseIcono}`;
            icono.setAttribute("aria-hidden", "true");

            enlace.prepend(icono);

        });
    }

     // =====================================================
    // ------------------------------------------------------------
    // =====================================================

  // ── Inyección de navbar ──────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById("navbar-placeholder");
    if (!placeholder) return;

    fetch(BASE + "HTML/navbar.html")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar la navbar: " + res.status);
        return res.text();
      })
      .then((html) => {
        placeholder.innerHTML = html;

        // Reescribir href de todos los <a> del navbar con la URL absoluta
        // para que funcione independientemente de la profundidad de la página.
        placeholder.querySelectorAll("a[href]").forEach((a) => {
          const href = a.getAttribute("href");
          if (!href || href.startsWith("http") || href.startsWith("#")) return;
          a.href = BASE + href;
        });

        // Reescribir src de imágenes del navbar
        placeholder.querySelectorAll("img[src]").forEach((img) => {
          const src = img.getAttribute("src");
          if (!src || src.startsWith("http") || src.startsWith("data:")) return;
          img.src = BASE + src;
        });
      })
      .catch((err) => console.error(err));
  });
})();