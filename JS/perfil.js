const usuarioGuardado = localStorage.getItem("usuario"); // localStorage por no tener db ni back
const formatoPrecio = new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN"
        });
// Info del usuario

if (usuarioGuardado) {
    const usuario = JSON.parse(usuarioGuardado); // Convertimos a objeto de JS para trabajarlo
    document.getElementById("perfilNombre").textContent = usuario.nombreCompleto;
    document.getElementById("perfilTelefono").textContent = usuario.telefono;
    document.getElementById("perfilEmail").textContent = usuario.email;
    document.getElementById("perfilDireccion").textContent = usuario.direccion;
}

// Sección de pedidos

const contenedorPedidos = document.getElementById("listaPedidos");

try {
    const pedidosGuardados = localStorage.getItem("otterPedidos"); // Acceder al array de pedidos en local storage
    const pedidos = pedidosGuardados ? JSON.parse(pedidosGuardados) : []; // Pasar a objeto de js si existe el valor, [] en caso contrario

    if (Array.isArray(pedidos) && pedidos.length > 0 && contenedorPedidos) {
        contenedorPedidos.replaceChildren();
        contenedorPedidos.className = "text-start py-3"; // Cambia la clase de text-center (Aviso de que no hay pedidos) a text-start para comenzar a enlistar

        // Copiamos con slice, invertimos la lista para que el más reciente (último elemento de la lista) aparezca primero y creamos sus respectivos contenedores con forEach()
        pedidos.slice().reverse().forEach((pedido) => {
            const contenedor = document.createElement("div");
            contenedor.className = "pb-3 mb-3 border-bottom";

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

// Sección de favoritos

const categoriasPerfil = {
    camisas: {
        nombre: "Camisas / Playeras",
        imagen: "https://placehold.co/600x700/F8DFB7/49261E?text=Camisas+%2F+Playeras"
    },
    pantalones: {
        nombre: "Pantalones / Jeans",
        imagen: "https://placehold.co/600x700/C9E7F6/35509a?text=Pantalones+%2F+Jeans"
    },
    vestidos: {
        nombre: "Vestidos",
        imagen: "https://placehold.co/600x700/F6C1D5/49261E?text=Vestidos"
    }
};

function buscarFavorito(id) {
    // Primero se revisa si el id es numérico, se usa productos.js
    if (typeof id === "number") {
        const outfit = outfits.find((o) => o.id === id); // outfits vive en productos.js, outfit es la primera incidencia de id con los outfits de productos.js
        if (!outfit) return null;
        // retorna objeto con datos de la instancia de clase encontrada en productos.js
        return {
            nombre: outfit.nombre,
            categoria: outfit.categoria,
            precio: outfit.precio,
            imagen: outfit.imagen
        };
    }

    // Si no es numérico entonces revisa si es indexSku, se usa local storage
    if (typeof id === "string") {
        let productos = [];
        try {
            const guardados = localStorage.getItem("misProductosFormulario");
            productos = guardados ? JSON.parse(guardados) : [];
        } catch (error) {
            console.error("No se pudieron leer las prendas guardadas.", error);
            return null; // Devuelve null para que no se deje de ejecutar el script
        }
        if (!Array.isArray(productos)) return null;

        const prenda = productos.find((p) => p.id === id);
        if (!prenda) return null;

        const categoria = categoriasPerfil[prenda.categoria] ?? {
            nombre: prenda.categoria,
            imagen: "https://placehold.co/600x700/F8DFB7/49261E?text=Prenda"
        }; // Operador de fusión nula: F ?? G devuelve G si F es null o undefined
        return {
            nombre: prenda.nombre,
            categoria: categoria.nombre,
            precio: prenda.precio,
            imagen: categoria.imagen
        };
    }

    return null; // Si la lectura del id no es numérico ni string
}

function mostrarFavoritos() {
    const contenedor = document.getElementById("listaFavoritos");
    if (!contenedor) return; // Por si no se encuentra el Id de html

    let ids = [];
    try {
        const guardados = localStorage.getItem("otterFavoritos");
        ids = guardados ? JSON.parse(guardados) : [];
    } catch (error) {
        console.error("No se pudieron leer los favoritos guardados.", error);
        return;
    }
    if (!Array.isArray(ids)) return;

    // Aplica a cada elemento del array ids buscarFavorito, map nos da un nuevo array, el cual luego filtra todos los valores falsy (null, undefined) y solo deja los truthy (los que sí tienen información)
    const favoritos = ids.map(buscarFavorito).filter(Boolean);
    if (favoritos.length === 0) return; // Se deja el mensaje por defecto

    contenedor.replaceChildren();
    contenedor.className = "text-start py-3";

    favoritos.forEach((favorito) => {
        const fila = document.createElement("div");
        fila.className = "d-flex align-items-center gap-3 pb-3 mb-3 border-bottom";

        const imagen = document.createElement("img");
        imagen.src = favorito.imagen;
        imagen.alt = favorito.nombre;
        imagen.width = 64;
        imagen.height = 64;
        imagen.style.objectFit = "cover";
        imagen.className = "rounded";

        const texto = document.createElement("div");

        const categoria = document.createElement("small");
        categoria.className = "text-muted d-block";
        categoria.textContent = favorito.categoria;

        const nombre = document.createElement("h6");
        nombre.className = "mb-0";
        nombre.textContent = favorito.nombre;

        const precio = document.createElement("span");
        precio.textContent = formatoPrecio.format(favorito.precio);

        texto.append(categoria, nombre, precio);
        fila.append(imagen, texto);
        contenedor.append(fila);
    });
}

mostrarFavoritos();