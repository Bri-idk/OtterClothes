// Función global que se activa al dar clic en el botón de guardar
window.validarFormulario = function() {
    const errorAlert = document.getElementById('errorAlert');
    const successAlert = document.getElementById('pageSuccessAlert');
    
    // REINICIO: Escondemos las alertas antes de iniciar una nueva validación
    errorAlert.classList.add('d-none');
    successAlert.classList.add('d-none');

    // Captura de datos de los elementos del formulario
    const name = document.getElementById('prodName').value.trim();
    const category = document.getElementById('prodCategory').value;
    const gender = document.getElementById('prodGender').value;
    const sku = document.getElementById('prodSku').value.trim();
    const price = document.getElementById('prodPrice').value;
    const stock = document.getElementById('prodStock').value;
    
    // Recopilación de los checkboxes de tallas seleccionadas
    const selectedSizes = [];
    document.querySelectorAll('.size-cb:checked').forEach(cb => {
        selectedSizes.push(cb.value);
    });

    // VALIDACIÓN JAVASCRIPT
    if (name === "") return mostrarAlertaError("El nombre de la prenda es requerido.");
    if (category === "") return mostrarAlertaError("Por favor selecciona una categoría de ropa.");
    if (gender === "") return mostrarAlertaError("Debes asignar un género para el catálogo.");
    if (sku === "") return mostrarAlertaError("El código SKU es obligatorio para el control de inventario.");
    if (price === "" || parseFloat(price) <= 0) return mostrarAlertaError("Ingresa un precio de venta válido mayor a 0.");
    if (stock === "" || parseInt(stock) < 0) return mostrarAlertaError("El stock inicial no puede quedar vacío ni ser menor a 0.");
    if (selectedSizes.length === 0) return mostrarAlertaError("Debes seleccionar al menos una talla disponible.");

    // CREACIÓN DEL MODELO DE DATOS EN FORMATO JSON
    const productoModelo = {
        nombre: name,
        categoria: category,
        genero: gender,
        sku: sku,
        precio: parseFloat(price),
        stock: parseInt(stock),
        tallas: selectedSizes,
        creadoEl: new Date().toISOString()
    };

    // Se convierte el objeto a una cadena JSON formal y se manda a la consola (F12)
    console.log("=== NUEVO MODELO JSON GENERADO ===");
    console.log(JSON.stringify(productoModelo, null, 2));
    
    // ACTIVACIÓN VISUAL: Mostramos la alerta verde de éxito en la interfaz principal
    successAlert.classList.remove('d-none'); 
    
    // Limpiar los campos del formulario para el siguiente registro de prenda
    document.getElementById('clothingForm').reset();
};

// Función auxiliar para inyectar el mensaje y mostrar la alerta roja
function mostrarAlertaError(mensaje) {
    const errorAlert = document.getElementById('errorAlert');
    document.getElementById('errorMessage').textContent = mensaje;
    errorAlert.classList.remove('d-none');
}
//div del boton
// Seleccionamos el botón de apertura y el contenedor del formulario
const btnAbrir = document.getElementById('btnAbrirFormulario');
const contenedorForm = document.getElementById('contenedorFormulario');

// Al dar clic en el botón principal...
btnAbrir.addEventListener('click', () => {
    contenedorForm.style.display = 'block'; // Mostramos el formulario
    btnAbrir.style.display = 'none';        // Ocultamos este botón para limpiar la pantalla
});

// OPCIONAL: Si quieres que al enviar el formulario el botón vuelva a aparecer:
document.getElementById('tuFormularioActual').addEventListener('submit', (e) => {
    // Aquí ya debes tener tu código para guardar el SKU...
    
    // Al terminar de guardar, puedes limpiar el formulario y regresar al botón inicial:
    contenedorForm.style.display = 'none';
    btnAbrir.style.display = 'block';
});
