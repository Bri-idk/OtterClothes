const form = document.getElementById("loginForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("clave").value;

    // 1. Limpiar mensajes de error previos
    document.getElementById("errorUsuario").textContent = "";
    document.getElementById("errorClave").textContent = "";
    document.getElementById("errorGeneral").textContent = "";

    // 2. Validar que los campos no estén vacíos
    let valido = true;
    if (user === "") {
        document.getElementById("errorUsuario").textContent = "El usuario/correo es obligatorio";
        valido = false;
    }
    if (pass === "") {
        document.getElementById("errorClave").textContent = "La contraseña es obligatoria";
        valido = false;
    }
    if (!valido) return;

    // 3. Crear el objeto JSON con las claves que espera Spring Boot (user_email y user_password)
    const credenciales = {
        user_email: user,
        user_password: pass
    };

    try {
        // 4. Enviar la petición POST al servidor
        const respuesta = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credenciales)
        });

        if (respuesta.ok) {
            const usuarioAutenticado = await respuesta.json().catch(() => null);

            // Guardar el usuario real en el localStorage para saber quién inició sesión
            if (usuarioAutenticado) {
                localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioAutenticado));
            } else {
                localStorage.setItem("sesion", user);
            }

            // Redirigir al perfil de usuario
            window.location.href = "../HTML/miPerfil.html";
        } else {
            // Manejar error si las credenciales son incorrectas (ej. HTTP 401 o 404)
            const errorServidor = await respuesta.json().catch(() => null);
            const mensaje = errorServidor?.message || "Usuario o contraseña inválidos";
            document.getElementById("errorGeneral").textContent = mensaje;
        }
    } catch (error) {
        console.error("Error al conectar con la API:", error);
        document.getElementById("errorGeneral").textContent = "No se pudo conectar con el servidor.";
    }
});