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