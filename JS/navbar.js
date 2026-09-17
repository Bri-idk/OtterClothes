document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-placeholder");

  // importamos el vnav con fetch
  fetch("/HTML/navbar.html")
    .then(response => {
      if (!response.ok) throw new Error("Error al cargar la navbar");
      return response.text();
    })
    .then(html => {
      // injectamos la nav
      navbarContainer.innerHTML = html;
    })
    .catch(error => console.error("Error importando la navbar:", error));
});