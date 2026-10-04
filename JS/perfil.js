const usuarioGuardado = localStorage.getItem("usuario"); // sessionStorage para pruebas rapidas, local para pruebas largas

if (usuarioGuardado) {
    const usuario = JSON.parse(usuarioGuardado); // Convertimos a objeto de JS para trabajarlo
    document.getElementById("perfilNombre").textContent = usuario.nombreCompleto;
    document.getElementById("perfilTelefono").textContent = usuario.telefono;
    document.getElementById("perfilEmail").textContent = usuario.email;
    document.getElementById("perfilDireccion").textContent = usuario.direccion;
}

const contenedorPedidos = document.getElementById("listaPedidos");

try {
    const pedidosGuardados = localStorage.getItem("otterPedidos"); // Acceder al array de pedidos en local storage
    const pedidos = pedidosGuardados ? JSON.parse(pedidosGuardados) : []; // Pasar a objeto de js si existe el valor, [] en caso contrario

    if (Array.isArray(pedidos) && pedidos.length > 0 && contenedorPedidos) {
        contenedorPedidos.replaceChildren();
        contenedorPedidos.className = "text-start py3"; // Cambia la clase de text-center (Aviso de que no hay pedidos) a text-start para comenzar a enlistar
        const formatoPrecio = new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN"
        });

        // Copiamos con slice, invertimos la lista para que el más reciente (último elemento de la lista) aparezca primero y creamos sus respectivos contenedores con forEach()
        pedidos.slice().reverse().forEach((pedido) => {
            const contenedor = document.createElement("div");
            contenedor.className = "mb-3";

            const titulo = document.createElement("h6");
            titulo.textContent = `Pedido ${pedido.numero}`
            contenedor.append(titulo);

            // Se recorren todos los articulos del pedido con forEach()
            pedido.articulos.forEach((articulo) => {
                let total = articulo.precioUnitario * articulo.cantidad;
                const textoInfo = document.createElement("p");
                textoInfo.className = "card-text mb-1";
                textoInfo.textContent = `${articulo.nombre} Talla ${articulo.talla} x${articulo.cantidad} | ${formatoPrecio.format(articulo.precioUnitario)} c/u | Total: ${formatoPrecio.format(total)}`;
                contenedor.append(textoInfo);
            });

            contenedorPedidos.append(contenedor);

        });
    }

} catch (error) {
    console.error("No se pudieron leer los pedidos guardados.", error);
}