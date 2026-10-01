const formulario = document.getElementById("formRegistro");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  //console.log("Formulario enviado")
  
const nombre = document.getElementById("nombre").value.trim();

if (nombre === "") {
    console.log("Error: El campo nombre es obligatorio");
} else if (nombre.length < 3) {
    console.log("Error: El nombre es demasiado corto");
}else {
        console.log("Nombre válido:");
}

});