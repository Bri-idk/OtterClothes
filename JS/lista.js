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

            maximumFractionDigits: 0

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

                        ${outfit.nombre}

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

    outfitActual =
        buscarOutfit(id);


    tallaSeleccionada =
        null;



    if (!outfitActual) {

        return;

    }



    // IMAGEN

    document.querySelector(
        "#modalImagen"
    ).src =
        outfitActual.imagen;



    // NOMBRE

    document.querySelector(
        "#modalNombre"
    ).textContent =
        outfitActual.nombre;



    // CATEGORÍA

    document.querySelector(
        "#modalEstilo"
    ).textContent =
        outfitActual.categoria;



    // DESCRIPCIÓN

    document.querySelector(
        "#modalDescripcion"
    ).textContent =
        outfitActual.descripcion;



    // PRECIO

    document.querySelector(
        "#modalPrecio"
    ).textContent =
        formatoPrecio(
            outfitActual.precio
        );



    // ======================================
    // PRENDAS
    // ======================================

    const listaIncluye =
        document.querySelector(
            "#modalIncluye"
        );


    listaIncluye.innerHTML = "";



    outfitActual.incluye.forEach(
        prenda => {


            const li =
                document.createElement(
                    "li"
                );


            li.textContent =
                prenda;


            listaIncluye.appendChild(
                li
            );

        }
    );



    // ======================================
    // TALLAS
    // ======================================

    const contenedorTallas =
        document.querySelector(
            "#modalTallas"
        );


    contenedorTallas.innerHTML = "";



    outfitActual.tallas.forEach(
        talla => {


            const boton =
                document.createElement(
                    "button"
                );


            boton.type =
                "button";


            boton.className =
                "btn-talla";


            boton.textContent =
                talla;



            boton.addEventListener(
                "click",
                () => {


                    tallaSeleccionada =
                        talla;



                    document
                        .querySelectorAll(
                            ".btn-talla"
                        )
                        .forEach(
                            btn => {

                                btn.classList
                                    .remove(
                                        "seleccionada"
                                    );

                            }
                        );


                    boton.classList.add(
                        "seleccionada"
                    );

                }
            );



            contenedorTallas
                .appendChild(
                    boton
                );

        }
    );



    actualizarBotonFavoritoModal();



    // ABRIR

    const modal =
        bootstrap.Modal
            .getOrCreateInstance(

                document.querySelector(
                    "#modalOutfit"
                )

            );


    modal.show();

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


    renderizarSecciones();


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
                buscarOutfit(id);


            if (!outfit) {

                return;

            }



            contenedor.innerHTML += `

                <div class="item-lateral">


                    <img
                        src="${outfit.imagen}"
                        alt="${outfit.nombre}">


                    <div class="item-info">


                        <h6>

                            ${outfit.nombre}

                        </h6>


                        <p class="categoria">

                            ${outfit.categoria}

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
                                toggleFavorito(
                                    ${outfit.id}
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



            // =================================
            // VALIDAR TALLA
            // =================================

            if (!tallaSeleccionada) {

                mostrarMensaje(
                    "Selecciona una talla"
                );


                return;

            }



            // =================================
            // BUSCAR SI YA EXISTE
            // =================================

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


            mostrarMensaje(
                "🛒 Outfit agregado al carrito"
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
                buscarOutfit(
                    productoCarrito.id
                );


            if (!outfit) {

                return;

            }



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

                            ${outfit.nombre}

                        </h6>


                        <p>

                            Talla:

                            <strong>

                                ${productoCarrito.talla}

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

    carrito[index].cantidad +=
        cambio;



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


    mostrarMensaje(
        "Producto eliminado"
    );

}



// ==========================================
// 23. MENSAJES
// ==========================================

function mostrarMensaje(texto) {

    document.querySelector(
        "#textoToast"
    ).textContent =
        texto;



    const toast =
        bootstrap.Toast
            .getOrCreateInstance(

                document.querySelector(
                    "#toastMensaje"
                ),

                {

                    delay: 2000

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


        renderizarFavoritos();


        renderizarCarrito();


    }
);