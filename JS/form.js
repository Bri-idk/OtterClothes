// Identificamos al form en el DOM
const form = document.querySelector("form");
// Aviso es un elemento auxiliar de HTML, una etiqueta <p> que por defecto está vacía pero que mostrará texto si el usuario no llena correctamente todos los campos o mensaje respecto al estado del envío de datos
const aviso = document.getElementById("aviso");

// Expresiones regulares para validar los datos de los campos
/**
 * Un nombre válido contiene letras de la A a la Z (minusculas también)
 * Puede tener vocales mayúsculas o minúsculas con acento
 * Puede tener Ñ o ñ
 * Puede tener espacios
 * Debe contener mínimo 2 caracteres, máximo 50
 * */ 
const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,50}$/;

/**
 * Un correo válido no puede empezar con @ o espacios
 * Debe contener @ después de los primeros caracteres
 * Debe seguir con caracteres que no sean @ o espacios
 * Continúa con un .
 * Y finaliza con cualesquiera caracteres que no sean @ o espacios
 */
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Un teléfono válido debe tener al menos un digito entre el 0 y el 9
 * Puede tener guiones
 * Puede tener espacios
 * Puede tener paréntesis ()
 * Debe tener longitud mínima de 7 y máxima de 15
 */
const regexTelefono = /^[0-9+\-\s()]{7,16}$/;

// URL del endpoint de Formspree
const FORMSPREE_URL = "https://formspree.io/f/moeqgywk";

// Estamos a la escucha del botón submit
form.addEventListener("submit", envioDatos);

// Manejo de promesa de Formspree con async/await
async function envioDatos(e) {
    e.preventDefault(); // Evitamos que el navegador recargue la página

    // Capturamos los valores de los campos del formulario y nos aseguramos de que no tengan espacios o tabulaciones al inicio y al final con trim()
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if ((nombre === "" || correo === "") || (telefono === "" || mensaje === "")) { // Validación básica, sería bueno implementar regex
        aviso.textContent = "Por favor, complete todos los campos."
        return; // Si alguno de los campos no es llenado entonces se retorna para que no se envíe nada.
    }

    if (!regexNombre.test(nombre)) {
        aviso.textContent = "El nombre debe contener mínimo 2 letras."
        return;
    }

    if (!regexCorreo.test(correo)) {
        aviso.textContent = "Ingresa un correo válido (ejemplo usuario@dominio.com)."
        return;
    }

    if (!regexTelefono.test(telefono)) {
        aviso.textContent = "Ingresa un teléfono válido (de 7 a 15 dígitos)."
        return;
    }

    if (mensaje.length < 10) {
        aviso.textContent = "El mensaje debe tener al menos 10 caracteres."
        return;
    }

    /**
     * Creamos un objeto FormData que captura todos los campos con atributo name de un formulario HTML especificado en el argumento (form, declarado al inicio del script), convirtiendo sus valores en pares clave-valor.
     */
    const datos = new FormData(form);

    // Usamos la información procesada con trim de los regex para enviarlos en el FormData
    datos.set("nombre", nombre);
    datos.set("correo", correo);
    datos.set("telefono", telefono);
    datos.set("mensaje", mensaje);

    try {
        const respuestaSv = await fetch(FORMSPREE_URL, {
            method: "POST",
            body: datos,
            headers: {"Accept": "application/json"}
        });

        if (respuestaSv.ok) {
            aviso.textContent = "Datos enviados con éxito.";
            form.reset(); // Limpiamos el formulario
        } else {
            aviso.textContent = "Error al enviar. Intente de nuevo.";
        }
    } catch (error) {
        console.error("Información del error: ", error);
        aviso.textContent = "Error de conexión"; // Mensaje de error
    }

}