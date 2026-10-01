const formulario = document.getElementById("formRegistro");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  console.log("Formulario enviado, listo para validar");
});