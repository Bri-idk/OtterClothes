const usuarioGuardado = localStorage.getItem("usuario"); // sessionStorage para pruebas rapidas, local para pruebas largas

if (usuarioGuardado) {
    const usuario = JSON.parse(usuarioGuardado); // Convertimos a objeto de JS para trabajarlo
    document.getElementById("perfilNombre").textContent = usuario.nombreCompleto;
    document.getElementById("perfilTelefono").textContent = usuario.telefono;
    document.getElementById("perfilEmail").textContent = usuario.email;
    document.getElementById("perfilDireccion").textContent = usuario.direccion;
}