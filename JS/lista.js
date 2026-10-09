// ==========================================
// 1. VARIABLES
// ==========================================


// Guardamos únicamente los ID
// de los favoritos.

let favoritos =
    JSON.parse(
        localStorage.getItem(
            "otterFavoritos"
        )
    ) || [];



// Carrito:
//
// [
//   {
//      id: 1,
//      talla: "M",
//      cantidad: 2
//   }
// ]

let carrito =
    JSON.parse(
        localStorage.getItem(
            "otterCarrito"
        )
    ) || [];



let outfitActual = null;

let tallaSeleccionada = null;
let productoActualEsSku = false;



// ==========================================
// 2. DOM
// ==========================================

const seccionesOutfits =
    document.querySelector(
        "#seccionesOutfits"
    );



// ==========================================
// 3. PRECIO
// ==========================================

function formatoPrecio(precio) {

    return new Intl.NumberFormat(
        "es-MX",
        {

            style: "currency",

            currency: "MXN",

            maximumFractionDigits: 2

        }
    ).format(precio);

}



// ==========================================
// 4. BUSCAR PRODUCTO POR ID
// ==========================================

function buscarOutfit(id) {

    return outfits.find(
        outfit =>
            outfit.id === id
    );

}


function buscarProductoSku(id) {
    if (typeof id !== "string") return null;

    try {
        const guardados = localStorage.getItem("misProductosFormulario");
        const productos = guardados ? JSON.parse(guardados) : [];
        if (!Array.isArray(productos)) return null;
        return productos.find(producto => producto.id === id) ?? null;
    } catch (error) {
        console.error("No se pudo buscar la prenda guardada.", error);
        return null;
    }
}


function buscarProductoCatalogo(id) {
    const outfit = buscarOutfit(id);
    if (outfit) return outfit;

    const producto = buscarProductoSku(id);
    if (!producto) return null;

    const categoria = categoriasFormulario[producto.categoria] ?? {
        nombre: producto.categoria,
        imagen: "https://placehold.co/600x700/F8DFB7/49261E?text=Prenda"
    };

    return {
        ...producto,
        categoria: categoria.nombre,
        imagen: categoria.imagen,
        descripcionCorta: `SKU: ${producto.sku} · Género: ${producto.genero}`,
        descripcion: `Prenda individual de ${categoria.nombre.toLowerCase()}. SKU: ${producto.sku}. Género: ${producto.genero}.`,
        incluye: [producto.nombre]
    };
}


function cantidadEnCarrito(id) {
    return carrito
        .filter(producto => producto.id === id)
        .reduce((total, producto) => total + producto.cantidad, 0);
}


function escaparHtml(valor) {
    return String(valor).replace(/[&<>"']/g, caracter => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[caracter]);
}



// ==========================================
// 5. PRODUCTOS POR CATEGORÍA
// ==========================================

function obtenerPorCategoria(
    categoria
) {

    return outfits.filter(
        outfit =>
            outfit.categoria === categoria
    );

}



// ==========================================
// 6. LO MÁS VISTO
// ==========================================

function obtenerMasVistos() {

    return idsMasVistos

        .map(
            id =>
                buscarOutfit(id)
        )

        .filter(Boolean);

}



// ==========================================
// 7. SECCIONES
// ==========================================

function obtenerSecciones() {

    return [

        {

            id: "mas-visto",

            titulo:
                "Lo más visto",

            items:
                obtenerMasVistos()

        },


        {

            id: "y2k",

            titulo:
                "Y2K",

            items:
                obtenerPorCategoria(
                    "Y2K"
                )

        },


        {

            id: "casual",

            titulo:
                "Casual",

            items:
                obtenerPorCategoria(
                    "Casual"
                )

        },


        {

            id: "streetwear",

            titulo:
                "Streetwear",

            items:
                obtenerPorCategoria(
                    "Streetwear"
                )

        },


        {

            id: "minimalista",

            titulo:
                "Minimalista",

            items:
                obtenerPorCategoria(
                    "Minimalista"
                )

        },


        {

            id: "elegante",

            titulo:
                "Elegante",

            items:
                obtenerPorCategoria(
                    "Elegante"
                )

        },


        {

            id: "vintage",

            titulo:
                "Vintage",

            items:
                obtenerPorCategoria(
                    "Vintage"
                )

        }

    ];

}



// ==========================================
// 8. AGRUPAR DE 3 EN 3
// ==========================================

function agruparDeTres(lista) {

    const grupos = [];


    for (
        let i = 0;
        i < lista.length;
        i += 3
    ) {

        grupos.push(

            lista.slice(
                i,
                i + 3
            )

        );

    }


    return grupos;

}



// ==========================================
// 9. CREAR UNA CARD
// ==========================================

function crearCard(outfit) {

    const esFavorito =
        favoritos.includes(
            outfit.id
        );


    return `

        <div class="col-12 col-md-6 col-lg-4">


            <article
                class="
                    card
                    outfit-card
                    h-100
                ">


                <!-- IMAGEN -->

                <div class="imagen-outfit">


                    <img
                        src="${outfit.imagen}"
                        alt="${outfit.nombre}"
                        class="card-img-top">


                    <!-- CORAZÓN -->

                    <button
                        type="button"

                        class="
                            favorito
                            ${esFavorito
                                ? "activo"
                                : ""}
                        "

                        onclick="
                            toggleFavorito(
                                ${outfit.id}
                            )
                        ">


                        <i
                            class="
                                bi
                                ${esFavorito
                                    ? "bi-heart-fill"
                                    : "bi-heart"}
                            ">
                        </i>


                    </button>


                </div>



                <!-- INFORMACIÓN -->

                <div class="card-body">


                    <span class="categoria">

                        ${outfit.categoria}

                    </span>



                    <h2 class="nombre-outfit">

                        ${escaparHtml(outfit.nombre)}

                    </h2>



                    <p class="descripcion">

                        ${outfit.descripcionCorta}

                    </p>



                    <!-- TALLAS -->

                    <div class="tallas">


                        ${outfit.tallas

                            .map(
                                talla =>

                                    `<span>
                                        ${talla}
                                    </span>`
                            )

                            .join("")
                        }


                    </div>



                    <!-- PRECIO -->

                    <div class="precio">

                        ${formatoPrecio(
                            outfit.precio
                        )}

                    </div>



                    <!-- VER OUTFIT -->

                    <button
                        type="button"

                        class="btn btn-outfit"

                        onclick="
                            abrirOutfit(
                                ${outfit.id}
                            )
                        ">

                        Ver outfit

                    </button>


                </div>


            </article>


        </div>

    `;

}



// ==========================================
// 10. CREAR SECCIÓN
// ==========================================

function crearSeccion(seccion) {

    const carouselId =
        `carousel-${seccion.id}`;


    const grupos =
        agruparDeTres(
            seccion.items
        );



    const slides =
        grupos

            .map(
                (grupo, index) => {


                    const cards =
                        grupo
                            .map(
                                crearCard
                            )
                            .join("");


                    return `

                        <div
                            class="
                                carousel-item
                                ${index === 0
                                    ? "active"
                                    : ""}
                            ">


                            <div
                                class="
                                    row
                                    g-4
                                    justify-content-center
                                ">

                                ${cards}

                            </div>


                        </div>

                    `;

                }
            )

            .join("");



    return `

        <section class="bloque-seccion">


            <!-- TITULO -->

            <div class="encabezado-carrusel">


                <h2 class="titulo-carrusel">

                    ${seccion.titulo}

                </h2>


                <span class="cantidad-outfits">

                    ${seccion.items.length}
                    outfits

                </span>


            </div>



            <!-- CARRUSEL -->

            <div
                id="${carouselId}"

                class="carousel slide"

                data-bs-interval="false">


                <div class="carousel-inner">

                    ${slides}

                </div>



                <!-- IZQUIERDA -->

                <button
                    class="
                        carousel-control-prev
                        flecha
                        flecha-izquierda
                    "

                    type="button"

                    data-bs-target="#${carouselId}"

                    data-bs-slide="prev">


                    <span>

                        <i
                            class="
                                bi
                                bi-chevron-left
                            ">
                        </i>

                    </span>


                </button>



                <!-- DERECHA -->

                <button
                    class="
                        carousel-control-next
                        flecha
                        flecha-derecha
                    "

                    type="button"

                    data-bs-target="#${carouselId}"

                    data-bs-slide="next">


                    <span>

                        <i
                            class="
                                bi
                                bi-chevron-right
                            ">
                        </i>

                    </span>


                </button>


            </div>


        </section>

    `;

}



// ==========================================
// 11. MOSTRAR TODAS LAS SECCIONES
// ==========================================

function renderizarSecciones() {

    const secciones =
        obtenerSecciones();


    seccionesOutfits.innerHTML =

        secciones

            .map(
                crearSeccion
            )

            .join("");

}



// ==========================================
// 12. ABRIR OUTFIT
// ==========================================

function abrirOutfit(id) {
    outfitActual = buscarOutfit(id);
    productoActualEsSku = false;
    mostrarProductoEnModal(outfitActual);
}


function abrirProductoSku(id) {
    outfitActual = buscarProductoCatalogo(id);
    productoActualEsSku = Boolean(outfitActual);
    mostrarProductoEnModal(outfitActual);
}


function mostrarProductoEnModal(producto) {
    tallaSeleccionada = null;
    if (!producto) return;

    document.querySelector("#modalImagen").src = producto.imagen;
    document.querySelector("#modalImagen").alt = producto.nombre;
    document.querySelector("#modalNombre").textContent = producto.nombre;
    document.querySelector("#modalEstilo").textContent = producto.categoria;
    document.querySelector("#modalDescripcion").textContent = producto.descripcion;
    document.querySelector("#modalPrecio").textContent = formatoPrecio(producto.precio);

    const listaIncluye = document.querySelector("#modalIncluye");
    listaIncluye.replaceChildren();
    producto.incluye.forEach(prenda => {
        const li = document.createElement("li");
        li.textContent = prenda;
        listaIncluye.appendChild(li);
    });

    const contenedorTallas = document.querySelector("#modalTallas");
    contenedorTallas.replaceChildren();
    producto.tallas.forEach(talla => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "btn-talla";
        boton.textContent = talla;
        boton.addEventListener("click", () => {
            tallaSeleccionada = talla;
            contenedorTallas.querySelectorAll(".btn-talla").forEach(btn => {
                btn.classList.toggle("seleccionada", btn === boton);
            });
        });
        contenedorTallas.appendChild(boton);
    });

    actualizarDisponibilidadProductoModal();

    actualizarBotonFavoritoModal();
    bootstrap.Modal.getOrCreateInstance(document.querySelector("#modalOutfit")).show();
}


function actualizarDisponibilidadProductoModal() {
    const disponibilidad = document.querySelector("#modalDisponibilidad");
    const botonAgregar = document.querySelector("#btnAgregarCarrito");
    if (!disponibilidad || !botonAgregar) return;

    if (!productoActualEsSku || !outfitActual) {
        disponibilidad.textContent = "";
        disponibilidad.classList.add("d-none");
        botonAgregar.disabled = false;
        botonAgregar.innerHTML = '<i class="bi bi-bag-plus"></i> Agregar al carrito';
        return;
    }

    const disponibles = Math.max(0, outfitActual.stock - cantidadEnCarrito(outfitActual.id));
    disponibilidad.textContent = `Disponibles: ${disponibles}`;
    disponibilidad.classList.remove("d-none");
    botonAgregar.disabled = disponibles < 1;
    botonAgregar.innerHTML = disponibles < 1
        ? "Sin unidades disponibles"
        : '<i class="bi bi-bag-plus"></i> Agregar al carrito';
}



// ==========================================
// 13. FAVORITOS
// ==========================================

function toggleFavorito(id) {

    const existe =
        favoritos.includes(id);



    if (existe) {

        favoritos =
            favoritos.filter(
                favoritoId =>
                    favoritoId !== id
            );


        mostrarMensaje(
            "Outfit eliminado de favoritos"
        );

    }

    else {

        favoritos.push(id);


        mostrarMensaje(
            "❤️ Outfit agregado a favoritos"
        );

    }



    guardarFavoritos();


    renderizarFavoritos();


    renderizarProductosFormulario();


    actualizarBotonFavoritoModal();

}



// ==========================================
// 14. GUARDAR FAVORITOS
// ==========================================

function guardarFavoritos() {

    localStorage.setItem(

        "otterFavoritos",

        JSON.stringify(
            favoritos
        )

    );

}



// ==========================================
// 15. MOSTRAR FAVORITOS
// ==========================================

function renderizarFavoritos() {

    const contenedor =
        document.querySelector(
            "#listaFavoritos"
        );


    contenedor.innerHTML = "";



    if (
        favoritos.length === 0
    ) {

        contenedor.innerHTML = `

            <div class="lista-vacia">

                <i class="bi bi-heart"></i>

                <p>
                    Aún no tienes favoritos.
                </p>

            </div>

        `;

    }



    favoritos.forEach(
        id => {


            const outfit =
                buscarProductoCatalogo(id);


            if (!outfit) {

                return;

            }



            contenedor.innerHTML += `

                <div class="item-lateral">


                    <img
                        src="${outfit.imagen}"
                        alt="${escaparHtml(outfit.nombre)}">


                    <div class="item-info">


                        <h6>

                            ${escaparHtml(outfit.nombre)}

                        </h6>


                        <p class="categoria">

                            ${escaparHtml(outfit.categoria)}

                        </p>


                        <p>

                            <strong>

                                ${formatoPrecio(
                                    outfit.precio
                                )}

                            </strong>

                        </p>


                        <button
                            type="button"

                            class="eliminar-item"

                            onclick="
                                toggleFavoritoPorClave(
                                        '${encodeURIComponent(String(outfit.id))}'
                                )
                            ">


                            <i
                                class="
                                    bi
                                    bi-trash
                                ">
                            </i>

                            Eliminar


                        </button>


                    </div>


                </div>

            `;

        }
    );



    document.querySelector(
        "#contadorFavoritos"
    ).textContent =
        favoritos.length;

}



// ==========================================
// 16. FAVORITO DESDE MODAL
// ==========================================

document
    .querySelector(
        "#btnFavoritoModal"
    )

    .addEventListener(
        "click",
        () => {


            if (!outfitActual) {

                return;

            }


            toggleFavorito(
                outfitActual.id
            );

        }
    );



// ==========================================
// 17. BOTÓN FAVORITO MODAL
// ==========================================

function actualizarBotonFavoritoModal() {

    if (!outfitActual) {

        return;

    }


    window.toggleFavoritoPorClave = function(idCodificado) {
        const id = decodeURIComponent(idCodificado);
        const idNumerico = Number(id);
        const idCatalogo = Number.isInteger(idNumerico) && outfits.some(outfit => outfit.id === idNumerico)
            ? idNumerico
            : id;
        toggleFavorito(idCatalogo);
    };



    const boton =
        document.querySelector(
            "#btnFavoritoModal"
        );


    const existe =
        favoritos.includes(
            outfitActual.id
        );



    if (existe) {

        boton.innerHTML = `

            <i class="bi bi-heart-fill"></i>

            Quitar de favoritos

        `;

    }

    else {

        boton.innerHTML = `

            <i class="bi bi-heart"></i>

            Agregar a favoritos

        `;

    }

}



// ==========================================
// 18. AGREGAR AL CARRITO
// ==========================================

document
    .querySelector(
        "#btnAgregarCarrito"
    )

    .addEventListener(
        "click",
        () => {

            if (!outfitActual) {
                return;
            }

            if (productoActualEsSku) {
                outfitActual = buscarProductoCatalogo(outfitActual.id);
                if (!outfitActual || outfitActual.stock < 1) {
                    mostrarMensaje("Esta prenda está agotada");
                    return;
                }
                if (cantidadEnCarrito(outfitActual.id) >= outfitActual.stock) {
                    mostrarMensaje("No hay más unidades disponibles en inventario");
                    return;
                }
            }

            if (!tallaSeleccionada) {
                mostrarMensaje(
                    "Selecciona una talla"
                );
                return;
            }

            const existente =
                carrito.find(
                    producto =>

                        producto.id ===
                            outfitActual.id

                        &&

                        producto.talla ===
                            tallaSeleccionada
                );



            if (existente) {
                existente.cantidad++;

            }

            else {
                if (productoActualEsSku && outfitActual.stock < 1) {
                    mostrarMensaje("Esta prenda está agotada");
                    return;
                }

                carrito.push({

                    id:
                        outfitActual.id,

                    talla:
                        tallaSeleccionada,

                    cantidad:
                        1

                });

            }



            guardarCarrito();
            renderizarCarrito();
            renderizarProductosFormulario();
            actualizarDisponibilidadProductoModal();
            mostrarMensaje(
                productoActualEsSku
                    ? "🛒 Prenda agregada al carrito"
                    : "🛒 Outfit agregado al carrito",
                true
            );

        }
    );



// ==========================================
// 19. GUARDAR CARRITO
// ==========================================

function guardarCarrito() {

    localStorage.setItem(

        "otterCarrito",

        JSON.stringify(
            carrito
        )

    );

}



// ==========================================
// 20. MOSTRAR CARRITO
// ==========================================

function renderizarCarrito() {

    const contenedor =
        document.querySelector(
            "#listaCarrito"
        );

    if (!contenedor) return;

    contenedor.innerHTML =
        "";


    let total =
        0;


    let cantidadTotal =
        0;



    if (
        carrito.length === 0
    ) {

        contenedor.innerHTML = `

            <div class="lista-vacia">

                <i class="bi bi-bag"></i>

                <p>
                    Tu carrito está vacío.
                </p>

            </div>

        `;

    }



    carrito.forEach(
        (productoCarrito, index) => {


            const outfit =
                buscarProductoCatalogo(
                    productoCarrito.id
                );


            if (!outfit) {
                return;
            }

            const sinStockDisponible =
                typeof productoCarrito.id === "string" &&
                cantidadEnCarrito(productoCarrito.id) >= outfit.stock;


            total +=

                outfit.precio

                *

                productoCarrito.cantidad;



            cantidadTotal +=
                productoCarrito.cantidad;



            contenedor.innerHTML += `

                <div class="item-lateral">


                    <img
                        src="${outfit.imagen}"
                        alt="${outfit.nombre}">


                    <div class="item-info">


                        <h6>

                            ${escaparHtml(outfit.nombre)}

                        </h6>


                        <p>

                            Talla:

                            <strong>

                                ${escaparHtml(productoCarrito.talla)}

                            </strong>

                        </p>


                        <p>

                            ${formatoPrecio(
                                outfit.precio
                            )}

                        </p>



                        <!-- CANTIDAD -->

                        <div class="control-cantidad">


                            <button
                                type="button"

                                onclick="
                                    cambiarCantidad(
                                        ${index},
                                        -1
                                    )
                                ">

                                −

                            </button>



                            <span>

                                ${productoCarrito.cantidad}

                            </span>



                            <button
                                type="button"
                                ${sinStockDisponible ? "disabled" : ""}

                                onclick="
                                    cambiarCantidad(
                                        ${index},
                                        1
                                    )
                                ">

                                +

                            </button>


                        </div>



                        <!-- ELIMINAR -->

                        <button
                            type="button"

                            class="eliminar-item"

                            onclick="
                                eliminarCarrito(
                                    ${index}
                                )
                            ">


                            <i
                                class="
                                    bi
                                    bi-trash
                                ">
                            </i>

                            Eliminar


                        </button>


                    </div>


                </div>

            `;

        }
    );



    document.querySelector(
        "#totalCarrito"
    ).textContent =
        formatoPrecio(total);



    document.querySelector(
        "#contadorCarrito"
    ).textContent =
        cantidadTotal;

}



// ==========================================
// 21. CAMBIAR CANTIDAD
// ==========================================

function cambiarCantidad(
    index,
    cambio
) {
    const productoEnCarrito = carrito[index];
    if (!productoEnCarrito) return;

    if (cambio > 0 && typeof productoEnCarrito.id === "string") {
        const producto = buscarProductoCatalogo(productoEnCarrito.id);
        if (!producto || cantidadEnCarrito(producto.id) >= producto.stock) {
            mostrarMensaje("No hay más unidades disponibles en inventario");
            return;
        }
    }

    productoEnCarrito.cantidad += cambio;



    if (
        carrito[index].cantidad <= 0
    ) {

        carrito.splice(
            index,
            1
        );

    }



    guardarCarrito();

    renderizarCarrito();
    renderizarProductosFormulario();
    actualizarDisponibilidadProductoModal();

}



// ==========================================
// 22. ELIMINAR CARRITO
// ==========================================

function eliminarCarrito(index) {

    carrito.splice(
        index,
        1
    );


    guardarCarrito();


    renderizarCarrito();
    renderizarProductosFormulario();
    actualizarDisponibilidadProductoModal();


    mostrarMensaje(
        "Producto eliminado"
    );

}



// ==========================================
// 23. MENSAJES
// ==========================================

function mostrarMensaje(texto, incluirEnlaceCarrito = false) {

    document.querySelector(
        "#textoToast"
    ).textContent =
        texto;

    const enlaceCarrito = document.querySelector("#toastCartLink");
    enlaceCarrito?.classList.toggle("d-none", !incluirEnlaceCarrito);


    const toast =
        bootstrap.Toast
            .getOrCreateInstance(

                document.querySelector(
                    "#toastMensaje"
                ),

                {

                    delay: incluirEnlaceCarrito ? 6000 : 2000

                }

            );


    toast.show();

}



// ==========================================
// 24. INICIO
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {


        renderizarSecciones();

        renderizarProductosFormulario();

        renderizarFavoritos();


        renderizarCarrito();


    }
);



const PRODUCTOS_STORAGE_KEY = "misProductosFormulario";

const categoriasFormulario = {
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

function crearTarjetaProductoFormulario(producto) {
    const categoria = categoriasFormulario[producto.categoria] ?? {
        nombre: producto.categoria,
        imagen: "https://placehold.co/600x700/F8DFB7/49261E?text=Prenda"
    };
    const columna = document.createElement("div");
    columna.className = "col-12 col-md-6 col-lg-4";

    const tarjeta = document.createElement("article");
    tarjeta.className = "card outfit-card h-100";

    const contenedorImagen = document.createElement("div");
    contenedorImagen.className = "imagen-outfit";

    const imagen = document.createElement("img");
    imagen.src = categoria.imagen;
    imagen.alt = `Imagen de referencia: ${categoria.nombre}`;
    imagen.className = "card-img-top";
    contenedorImagen.append(imagen);

    const favorito = document.createElement("button");
    favorito.type = "button";
    favorito.className = `favorito ${favoritos.includes(producto.id) ? "activo" : ""}`;
    favorito.setAttribute("aria-label", favoritos.includes(producto.id)
        ? "Quitar de favoritos"
        : "Agregar a favoritos");
    favorito.innerHTML = `<i class="bi ${favoritos.includes(producto.id) ? "bi-heart-fill" : "bi-heart"}"></i>`;
    favorito.addEventListener("click", () => toggleFavorito(producto.id));
    contenedorImagen.append(favorito);

    const contenido = document.createElement("div");
    contenido.className = "card-body";

    const etiquetaCategoria = document.createElement("span");
    etiquetaCategoria.className = "categoria";
    etiquetaCategoria.textContent = categoria.nombre;

    const nombre = document.createElement("h2");
    nombre.className = "nombre-outfit";
    nombre.textContent = producto.nombre;

    const descripcion = document.createElement("p");
    descripcion.className = "descripcion";
    descripcion.textContent = `SKU: ${producto.sku} · Género: ${producto.genero}`;

    const tallas = document.createElement("div");
    tallas.className = "tallas";
    (Array.isArray(producto.tallas) ? producto.tallas : []).forEach(talla => {
        const etiquetaTalla = document.createElement("span");
        etiquetaTalla.textContent = talla;
        tallas.append(etiquetaTalla);
    });

    const precio = document.createElement("div");
    precio.className = "precio";
    precio.textContent = formatoPrecio(producto.precio);

    const stock = document.createElement("p");
    stock.className = "descripcion mb-0";
    stock.textContent = `Disponibles: ${Math.max(0, producto.stock - cantidadEnCarrito(producto.id))}`;

    const verPrenda = document.createElement("button");
    verPrenda.type = "button";
    verPrenda.className = "btn btn-outfit";
    verPrenda.textContent = "Ver prenda";
    verPrenda.addEventListener("click", () => abrirProductoSku(producto.id));

    contenido.append(etiquetaCategoria, nombre, descripcion, tallas, precio, stock, verPrenda);
    tarjeta.append(contenedorImagen, contenido);
    columna.append(tarjeta);
    return columna;
}

function renderizarProductosFormulario() {
    const contenedor = document.querySelector("#seccionesOutfits");
    if (!contenedor) return;

    const seccionAnterior = document.querySelector("#productosFormulario");
    seccionAnterior?.remove();

    let productos = [];
    try {
        const productosGuardados = localStorage.getItem(PRODUCTOS_STORAGE_KEY);
        productos = productosGuardados ? JSON.parse(productosGuardados) : [];
    } catch (error) {
        console.error("No se pudieron leer los productos guardados del formulario.", error);
        return;
    }

    if (!Array.isArray(productos)) {
        console.error("Los productos guardados del formulario tienen un formato inválido.");
        return;
    }

    const productosValidos = productos.filter(producto =>
        producto &&
        typeof producto.id === "string" &&
        typeof producto.nombre === "string" &&
        typeof producto.categoria === "string" &&
        typeof producto.genero === "string" &&
        typeof producto.sku === "string" &&
        Number.isFinite(producto.precio) &&
        Number.isFinite(producto.stock) &&
        Array.isArray(producto.tallas)
    );

    if (productosValidos.length !== productos.length) {
        console.error("Se omitieron productos con datos incompletos del inventario local.");
    }
    if (productosValidos.length === 0) return;

    const seccion = document.createElement("section");
    seccion.id = "productosFormulario";
    seccion.className = "bloque-seccion";

    const encabezado = document.createElement("div");
    encabezado.className = "encabezado-carrusel";

    const titulo = document.createElement("h2");
    titulo.className = "titulo-carrusel";
    titulo.textContent = "Nuevas prendas";

    const contador = document.createElement("span");
    contador.className = "cantidad-outfits";
    contador.textContent = `${productosValidos.length} ${productosValidos.length === 1 ? "prenda" : "prendas"}`;
    encabezado.append(titulo, contador);

    const fila = document.createElement("div");
    fila.className = "row g-4 justify-content-center";
    productosValidos.forEach(producto => {
        fila.append(crearTarjetaProductoFormulario(producto));
    });

    seccion.append(encabezado, fila);
    contenedor.append(seccion);
}

window.addEventListener("storage", event => {
    if (event.key === PRODUCTOS_STORAGE_KEY) {
        renderizarProductosFormulario();
    }
});
