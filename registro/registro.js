const formulario = document.getElementById("formRegistro");

function mostrarError(idError, mensaje) {
  document.getElementById(idError).textContent = mensaje;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  // const metodoPago = document.getElementById("metodoPago").value.trim();
  const password = document.getElementById("password").value;
  const confirmarPassword = document.getElementById("confirmarPassword").value;

  let formularioValido = true;

  // Nombre
  if (nombre === "") {
    mostrarError("errorNombre", "El nombre es obligatorio");
    formularioValido = false;
  } else if (nombre.length < 3) {
    mostrarError("errorNombre", "El nombre es demasiado corto");
    formularioValido = false;
  } else {
    mostrarError("errorNombre", "");
  }

  // Email
  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {

    mostrarError("errorEmail", "El email es obligatorio");
    formularioValido = false;
  } else if (!formatoEmail.test(email)) {
    mostrarError("errorEmail", "El email no tiene un formato válido");
    formularioValido = false;
  } else {
    mostrarError("errorEmail", "");
  }

  // Teléfono
  const formatoTelefono = /^\d{10}$/;

  if (telefono === "") {
    mostrarError("errorTelefono", "El teléfono es obligatorio");
    formularioValido = false;
  } else if (!formatoTelefono.test(telefono)) {
    mostrarError("errorTelefono", "El teléfono debe tener 10 dígitos numéricos");
    formularioValido = false;
  } else {
    mostrarError("errorTelefono", "");
  }

  // Direccion
  if (direccion === "") {
    mostrarError("errorDireccion", "La dirección es obligatoria");
    formularioValido = false;
  } else if (direccion.length < 5) {
    mostrarError("errorDireccion", "La dirección es demasiado corta");
    formularioValido = false;
  } else {
    mostrarError("errorDireccion", "");
  }

  // Contraseña
  const tieneMayuscula = /[A-Z]/;
  const tieneEspecial = /[^A-Za-z0-9]/;

  if (password === "") {
    mostrarError("errorPassword", "La contraseña es obligatoria");
    formularioValido = false;
  } else if (password.length < 8) {
    mostrarError("errorPassword", "La contraseña debe tener al menos 8 caracteres");
    formularioValido = false;

  } else if (!tieneMayuscula.test(password)) {
    mostrarError("errorPassword", "Debe tener al menos una mayúscula");
    formularioValido = false;
  } else if (!tieneEspecial.test(password)) {
    mostrarError("errorPassword", "Debe tener al menos un carácter especial");
    formularioValido = false;
  } else {
    mostrarError("errorPassword", "");
  }

  // Confirmar contraseña
  if (confirmarPassword === "") {
    mostrarError("errorConfirmar", "Debes confirmar la contraseña");
    formularioValido = false;
  } else if (password !== confirmarPassword) {
    mostrarError("errorConfirmar", "Las contraseñas no coinciden");
    formularioValido = false;
  } else {
    mostrarError("errorConfirmar", "");
  }

 if (formularioValido) {
    const usuario = {
      nombreCompleto: nombre,
      telefono: telefono,
      email: email,
      direccion: direccion,
      // metodoPago: metodoPago,
      password: password
    };

    const usuarioJSON = JSON.stringify(usuario, null, 2);
    console.log(usuarioJSON);
    localStorage.setItem("usuario", usuarioJSON);
    window.location.href="../HTML/miPerfil.html";

    formulario.reset();
  } else {
    console.log("Hay errores en el formulario");
    formulario.reset();
  }
});