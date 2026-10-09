// 1. Usuario de prueba "codificado", guardado en localStorage
if (!localStorage.getItem("usuarios")) {
    const usuarios = [{ usuario: "Juan", clave: "1234" }];
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("clave").value;

    // Limpiar mensajes
    document.getElementById("errorUsuario").textContent = "";
    document.getElementById("errorClave").textContent = "";
    document.getElementById("errorGeneral").textContent = "";

    // 2. Campos vacíos
    let valido = true;
    if (user === "") {
        document.getElementById("errorUsuario").textContent = "El usuario es obligatorio";
        valido = false;
    }
    if (pass === "") {
        document.getElementById("errorClave").textContent = "La contraseña es obligatoria";
        valido = false;
    }
    if (!valido) return;

    // 3. Autenticar vs localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const encontrado = usuarios.find(u => u.usuario === user && u.clave === pass);

    if (encontrado) {
        localStorage.setItem("sesion", user);
        window.location = "miPerfil.html";   // remplazar esta linea con la ruta de la pagina 
    } else {
        document.getElementById("errorGeneral").textContent = "Usuario o contraseña inválidos";
    }
});