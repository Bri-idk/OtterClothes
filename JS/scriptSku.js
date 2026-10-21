const PRODUCTOS_STORAGE_KEY = 'misProductosFormulario';

// Función global que se activa al dar clic en el botón de guardar
window.validarFormulario = async function() {
    const errorAlert = document.getElementById('errorAlert');
    const successAlert = document.getElementById('pageSuccessAlert');
    
    // REINICIO: Escondemos las alertas antes de iniciar una nueva validación
    errorAlert.classList.add('d-none');
    successAlert.classList.add('d-none');

    // Captura de datos de los elementos del formulario
    const name = document.getElementById('prodName').value.trim();
    const category = document.getElementById('prodCategory').value;
    const description = document.getElementById('prodDescription').value.trim();
    const style = document.getElementById('prodStyle').value.trim();
    const gender = document.getElementById('prodGender').value;
    const sku = document.getElementById('prodSku').value.trim();
    const price = document.getElementById('prodPrice').value;
    const stock = document.getElementById('prodStock').value;
    const color = document.getElementById('prodColor').value.trim();
    
    // Recopilación de los checkboxes de tallas seleccionadas
    const selectedSizes = [];
    document.querySelectorAll('.size-cb:checked').forEach(cb => {
        selectedSizes.push(cb.value);
    });

    // VALIDACIÓN JAVASCRIPT
    if (name === "") return mostrarAlertaError("El nombre de la prenda es requerido.");
    if (description === "") return mostrarAlertaError("Debes agregar una descripción del producto.");
    if (style === "") return mostrarAlertaError("Debes indicar el estilo de la prenda.");
    if (category === "") return mostrarAlertaError("Por favor selecciona una categoría de ropa.");
    if (gender === "") return mostrarAlertaError("Debes asignar un género para el catálogo.");
    if (sku === "") return mostrarAlertaError("El código SKU es obligatorio para el control de inventario.");
    if (price === "" || parseFloat(price) <= 0) return mostrarAlertaError("Ingresa un precio de venta válido mayor a 0.");
    if (stock === "" || parseInt(stock) < 0) return mostrarAlertaError("El stock inicial no puede quedar vacío ni ser menor a 0.");
    if (selectedSizes.length === 0) return mostrarAlertaError("Debes seleccionar al menos una talla disponible.");
    if (color === "") return mostrarAlertaError("Debes indicar el color de la prenda.");

    // CREACIÓN DEL MODELO DE DATOS EN FORMATO JSON
    const productoModelo = {
        id: `sku-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        nombre: name,
        descripcion: description,
        estilo: style,
        categoria: category,
        genero: gender,
        sku: sku,
        precio: parseFloat(price),
        stock: parseInt(stock),
        color: color,
        tallas: selectedSizes,
        creadoEl: new Date().toISOString()
    };

    // Datos que enviaremos al backend de Spring Boot
const productoBackend = {
    product_name: name,
    description: description,
    price: parseFloat(price),
    model: gender,
    style: style
};

   // Enviar el producto al backend de Spring Boot
try {
    const respuesta = await fetch("/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productoBackend)
    });

    if (!respuesta.ok) {
        return mostrarAlertaError("No se pudo guardar el producto en MySQL.");
    }

    const productoGuardado = await respuesta.json();

    console.log("Producto guardado en MySQL:", productoGuardado);

} catch (error) {
    console.error("Error al conectar con Spring Boot:", error);
    return mostrarAlertaError("Error de conexión con el servidor.");
}

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

// Prueba de conexión con el backend
fetch("/api/sizes")
    .then(response => response.json())
    .then(data => {
        console.log("Tallas obtenidas desde MySQL:", data);
    })
    .catch(error => {
        console.error("Error al conectar con Spring Boot:", error);
    });
