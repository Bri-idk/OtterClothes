const formulario = document.getElementById("formRegistro");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  //console.log("Formulario enviado")
  
const nombre = document.getElementById("nombre").value.trim();
const email = document.getElementById("email").value.trim();

if (nombre === "") {
    console.log("Error: El nombre es obligatorio");
} else if (nombre.length < 3) {
    console.log("Error: El nombre es demasiado corto");
}else {
        console.log("Nombre válido:");
}


  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
  
if (email === "") {
    console.log("Error: El email es obligatorio");
} else if (!formatoEmail.test(email)) {
    console.log("Error: El email no tiene un formato válido");
} else {
    console.log("Email válido:");
}

});