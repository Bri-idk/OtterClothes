document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formRegistro");

  // Referencias a los campos
  const inputNombre = document.getElementById("nombre");
  const inputEmail = document.getElementById("email");
  const inputTelefono = document.getElementById("telefono");
  const inputDireccion = document.getElementById("direccion");
  const inputPassword = document.getElementById("password");
  const inputConfirmar = document.getElementById("confirmarPassword");

  // Función auxiliar para mostrar mensajes de error
  function mostrarError(idError, mensaje) {
    document.getElementById(idError).textContent = mensaje;
  }

  // Limpiar errores automáticamente mientras el usuario escribe
  const campos = [
    { input: inputNombre, errorId: "errorNombre" },
    { input: inputEmail, errorId: "errorEmail" },
    { input: inputTelefono, errorId: "errorTelefono" },
    { input: inputDireccion, errorId: "errorDireccion" },
    { input: inputPassword, errorId: "errorPassword" },
    { input: inputConfirmar, errorId: "errorConfirmar" }
  ];

  campos.forEach(({ input, errorId }) => {
    if (input) {
      input.addEventListener("input", () => mostrarError(errorId, ""));
    }
  });

  // Procesar envío del formulario
  formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const nombre = inputNombre.value.trim();
    const email = inputEmail.value.trim();
    const telefono = inputTelefono.value.trim();
    const direccion = inputDireccion.value.trim();
    const password = inputPassword.value;
    const confirmarPassword = inputConfirmar.value;

    let formularioValido = true;

    // 1. Validar Nombre
    if (nombre === "") {
      mostrarError("errorNombre", "El nombre es obligatorio");
      formularioValido = false;
    } else if (nombre.length < 3) {
      mostrarError("errorNombre", "El nombre es demasiado corto");
      formularioValido = false;
    } else {
      mostrarError("errorNombre", "");
    }

    // 2. Validar Email
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

    // 3. Validar Teléfono
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

    // 4. Validar Dirección
    if (direccion === "") {
      mostrarError("errorDireccion", "La dirección es obligatoria");
      formularioValido = false;
    } else if (direccion.length < 5) {
      mostrarError("errorDireccion", "La dirección es demasiado corta");
      formularioValido = false;
    } else {
      mostrarError("errorDireccion", "");
    }

    // 5. Validar Contraseña
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

    // 6. Validar Confirmar Contraseña
    if (confirmarPassword === "") {
      mostrarError("errorConfirmar", "Debes confirmar la contraseña");
      formularioValido = false;
    } else if (password !== confirmarPassword) {
      mostrarError("errorConfirmar", "Las contraseñas no coinciden");
      formularioValido = false;
    } else {
      mostrarError("errorConfirmar", "");
    }

    // Enviar datos al Backend si todas las validaciones son correctas
    if (formularioValido) {
      const nuevoUsuario = {
        user_full_name: nombre,
        user_phone: telefono,
        user_email: email,
        user_address:direccion,
        user_password: password
      };

      try {
        // AJUSTAR ESTA RUTA según la dirección y puerto de el servidor/backend
        // const respuesta = await fetch("http://localhost:8080/api/users", {
          const respuesta = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(nuevoUsuario)
        });

        if (respuesta.ok) {
          const usuarioCreado = await respuesta.json().catch(() => null);
          
          if(usuarioCreado) {
            // Guardar el usuario en localStorage para mantener la sesión
            localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioCreado));
          }else{
            localStorage.setItem("usuarioLogueado", JSON.stringify(nuevoUsuario));
          }
          
          
          alert("¡Registro exitoso!");
          formulario.reset();
          
          // Redirección deseada tras el registro
          window.location.href = "../HTML/miPerfil.html";
        } else {
          const errorServidor = await respuesta.json().catch(() => null);
          const mensajeError = errorServidor?.mensaje || "Error al registrar el usuario en el servidor.";
          mostrarError("errorEmail", mensajeError);
        }
      } catch (error) {
        console.error("Error al conectar con la API:", error);
        mostrarError("errorEmail", "No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.");
      }
    }
  });
});