// BLOC 1: BASE DE DATOS DE PRODUCTOS (ARRAY)

const listaProductos = [

    // ==========================================
    // Kpop Idol
    // ==========================================

    {
        id: 1,
        nombre: "Retro 2000",
        estilo: "Kpop Idol",
        descripcion: "Un outfit inspirado en las tendencias más representativas de principios de los años 2000.",
        precio: "$1,149 MXN",
        imagen: "https://i.pinimg.com/736x/65/43/38/654338182152a05e0fbe34b9d9fc5bd9.jpg",
        incluye: ["Top estilo Kpop Idol", "Pantalón wide leg", "Cinturón retro", "Accesorios"],
        tallas: ["CH", "M", "G"]
    },
    {
        id: 2,
        nombre: "Pink Cyber",
        estilo: "Kpop Idol",
        descripcion: "Una combinación inspirada en la estética cyber y pop de los años 2000.",
        precio: "$1,299 MXN",
        imagen: "https://i.pinimg.com/736x/98/86/59/988659845199b10ead0bfcf318ed019c.jpg",
        incluye: ["Top rosa", "Falda cargo", "Cinturón metálico", "Lentes"],
        tallas: ["CH", "M"]
    },
    {
        id: 3,
        nombre: "Silver Star",
        estilo: "Kpop Idol",
        descripcion: "Look dosmilero con accesorios brillantes y una estética futurista.",
        precio: "$1,199 MXN",
        imagen: "https://media-photos.depop.com/b1/42459049/2281831139_e0c021b343e941c59133306721b754fe/P0.jpg",
        incluye: ["Top", "Jeans", "Bolso", "Accesorios"],
        tallas: ["CH", "M", "G"]
    },
    {
        id: 4,
        nombre: "Denim 2000",
        estilo: "Kpop Idol",
        descripcion: "Un outfit centrado en la mezclilla y las siluetas características de la moda Kpop Idol.",
        precio: "$1,349 MXN",
        imagen: "https://tse4.mm.bing.net/th/id/OIP.W9ZRCHv-XktqNVznVSD5xAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        incluye: ["Top", "Jeans denim", "Bolso", "Sneakers"],
        tallas: ["M", "G"]
    },
    {
        id: 5,
        nombre: "Pop Princess",
        estilo: "Kpop Idol",
        descripcion: "Colores pastel y accesorios inspirados en los íconos pop de los años 2000.",
        precio: "$1,249 MXN",
        imagen: "https://i.pinimg.com/originals/6f/95/fe/6f95fe130387577ee14f0a87aad8fbda.jpg",
        incluye: ["Top", "Falda", "Bolso", "Accesorios"],
        tallas: ["CH", "M", "G"]
    },
    {
        id: 6,
        nombre: "Cyber Blue",
        estilo: "Kpop Idol",
        descripcion: "Look futurista inspirado en la moda digital de principios del milenio.",
        precio: "$1,399 MXN",
        imagen: "https://i.pinimg.com/736x/96/46/9f/96469f2cbdb71fe2a011946cef1a5e97.jpg",
        incluye: ["Top azul", "Cargo", "Lentes", "Sneakers"],
        tallas: ["CH", "M", "G"]
    },
    {
        id: 7,
        nombre: "Bubblegum",
        estilo: "Kpop Idol",
        descripcion: "Outfit casual Kpop Idol inspirado en colores brillantes y accesorios retro.",
        precio: "$1,099 MXN",
        imagen: "https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x700/outfits/aa5af7f5-df7c-46c4-8604-4fc763ba24f3.png",
        incluye: ["Playera", "Falda", "Bolso", "Tenis"],
        tallas: ["CH", "M"]
    },
    {
        id: 8,
        nombre: "Chrome Girl",
        estilo: "Kpop Idol",
        descripcion: "Una combinación moderna con inspiración cyber y accesorios metálicos.",
        precio: "$1,449 MXN",
        imagen: "https://i.pinimg.com/474x/82/c3/24/82c32401d68c9700a1983c4f4f495eae.jpg?nii=t",
        incluye: ["Top", "Pantalón", "Accesorios", "Sneakers"],
        tallas: ["M", "G"]
    },
    {
        id: 9,
        nombre: "Retro Denim",
        estilo: "Kpop Idol",
        descripcion: "Combinación completa inspirada en las tendencias denim de los años 2000.",
        precio: "$1,279 MXN",
        imagen: "https://i.pinimg.com/originals/48/ec/8d/48ec8daf086e6a21131c4117993fa979.jpg?nii=t",
        incluye: ["Chaqueta denim", "Top", "Jeans", "Sneakers"],
        tallas: ["CH", "M", "G"]
    },

    // ==========================================
    // CASUAL
    // ==========================================

    {
        id: 10,
        nombre: "Everyday Cream",
        estilo: "Casual",
        descripcion: "Un outfit casual pensado para comodidad y versatilidad durante el día.",
        precio: "$999 MXN",
        imagen: "https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x700/outfits/5fbca72e-29f4-45ba-a8da-58ec156584a1.png",
        incluye: ["Playera", "Pantalón beige", "Sudadera", "Sneakers"],
        tallas: ["CH", "M", "G"]
    },
    {
        id: 11,
        nombre: "Soft Beige",
        estilo: "Casual",
        descripcion: "Outfit casual construido con tonos claros y prendas fáciles de combinar.",
        precio: "$1,099 MXN",
        imagen: "https://i.pinimg.com/474x/2a/8f/60/2a8f609d9dfe31e5ab4be81a00750a2b.jpg?nii=t",
        incluye: ["Playera", "Pantalón", "Chaqueta", "Tenis"],
        tallas: ["CH", "M", "G", "EG"]
    },
    {
        id: 12,
        nombre: "Weekend",
        estilo: "Casual",
        descripcion: "Combinación casual cómoda para actividades cotidianas y fines de semana.",
        precio: "$1,199 MXN",
        imagen: "https://i.pinimg.com/originals/e9/fe/72/e9fe72190e9b3a696140a29cacc43b5b.jpg",
        incluye: ["Playera", "Jeans", "Sudadera", "Sneakers"],
        tallas: ["M", "G"]
    },
    {
        id: 13,
        nombre: "Coffee Day",
        estilo: "Casual",
        descripcion: "Prendas cómodas y colores cálidos para un estilo cotidiano.",
        precio: "$1,049 MXN",
        imagen: "https://i.pinimg.com/originals/9a/54/50/9a5450d60b9a35f1c1830ef7f9a334d0.jpg",
        incluye: ["Playera", "Pantalón", "Sobrecamisa", "Tenis"],
        tallas: ["CH", "M", "G"]
    },
    {
        id: 14,
        nombre: "Daily Blue",
        estilo: "Casual",
        descripcion: "Outfit versátil pensado para utilizarse durante todo el día.",
        precio: "$1,149 MXN",
        imagen: "https://i.pinimg.com/474x/28/c4/33/28c4330969cfc6f1e3924539489f69b8.jpg?nii=t",
        incluye: ["Playera", "Jeans", "Chaqueta", "Sneakers"],
        tallas: ["M", "G", "EG"]
    },
    {
        id: 15,
        nombre: "Sunday Fit",
        estilo: "Casual",
        descripcion: "Look casual sencillo con prendas suaves y cómodas.",
        precio: "$949 MXN",
        imagen: "https://i.pinimg.com/originals/a5/f2/06/a5f20650770aac3026754a87b965103a.jpg",
        incluye: ["Playera", "Jogger", "Sudadera", "Tenis"],
        tallas: ["CH", "M", "G"]
    },
    {
        id: 16,
        nombre: "Urban Casual",
        estilo: "Casual",
        descripcion: "La comodidad del estilo casual combinada con algunos elementos urbanos.",
        precio: "$1,249 MXN",
        imagen: "https://i.pinimg.com/736x/e2/90/f7/e290f78417df35914cb7ab93fff523b2.jpg",
        incluye: ["Playera", "Cargo", "Chaqueta", "Sneakers"],
        tallas: ["CH", "M", "G"]
    },
    {
        id: 17,
        nombre: "Basic White",
        estilo: "Casual",
        descripcion: "Un outfit construido alrededor de prendas esenciales.",
        precio: "$899 MXN",
        imagen: "https://i.pinimg.com/564x/d7/f0/79/d7f079d3bb66186bdd587bb0debab5bd.jpg",
        incluye: ["Playera blanca", "Jeans", "Sudadera", "Tenis"],
        tallas: ["CH", "M", "G", "EG"]
    },
    {
        id: 18,
        nombre: "Morning Fit",
        estilo: "Casual",
        descripcion: "Una combinación sencilla para comenzar el día con comodidad.",
        precio: "$1,079 MXN",
        imagen: "https://tse3.mm.bing.net/th/id/OIP.ldq_tAoXlH0LFwAKGrC24gHaNC?r=0&w=604&h=1064&rs=1&pid=ImgDetMain&o=7&rm=3",
        incluye: ["Playera", "Pantalón", "Chaqueta", "Sneakers"],
        tallas: ["M", "G"]
    }
];


// BLOC 2: CAPTURA DE RUTA Y ELEMENTOS HTML

// Lee la categoría que viene en el enlace (ej: ?categoria=Kpop Idol)
const parametrosURL = new URLSearchParams(window.location.search);
const estiloSeleccionado = parametrosURL.get('categoria');
const mensajesPorEstilo = {
    "kpop idol": {
        nombre: "Kpop Idol",
        mensaje: "Descubre outfits inspirados en el estilo K-pop. 💖"
    },
    "casual": {
        nombre: "Casual",
        mensaje: "Encuentra tu próximo look casual favorito. ☀️"
    },
};

// Vincula las etiquetas de tu HTML donde pintaremos los datos
const tituloCategoria = document.getElementById('tituloCategoria');
const contenedorCatalogo = document.getElementById('seccionesOutfits');

// BLOC 3: FILTRADO DE PRODUCTOS

if (!estiloSeleccionado?.trim()) {
    tituloCategoria.textContent = "Selecciona un estilo en la navbar para descubrir su colección. 💖";
} else {
    const estiloLimpio = estiloSeleccionado.trim();
    const filtro = mensajesPorEstilo[estiloLimpio.toLowerCase()];

    if (!filtro) {
        tituloCategoria.textContent = `No encontramos el estilo "${estiloLimpio}". Elige uno desde la navbar.`;
        contenedorCatalogo.innerHTML = "";
    } else {
        tituloCategoria.textContent = filtro.mensaje;

        // Filtra la lista general y solo deja los que coincidan con el estilo seleccionado.
        const productosFiltrados = listaProductos.filter(
            prod => prod.estilo.toLowerCase() === filtro.nombre.toLowerCase()
        );

        // BLOC 4: DIBUJAR LAS CARDS EN PANTALLA
        if (productosFiltrados.length > 0) {
            contenedorCatalogo.innerHTML = "";

            productosFiltrados.forEach(producto => {
                const listaPrendasHTML = producto.incluye
                    .map(prenda => `<li>${prenda}</li>`)
                    .join("");
                const botonesTallasHTML = producto.tallas
                    .map(talla => `<button type="button" class="btn btn-outline-dark btn-xs mx-1 btn-talla" data-talla="${talla}">${talla}</button>`)
                    .join("");

                const cardHTML = `
                   <div class="col">
                        <div class="card h-100 shadow-sm border-0 bg-white">
                            <div class="contenedor-imagen-card">
                                <img src="${producto.imagen}" class="w-100 h-100" alt="${producto.nombre}">
                            </div>
                            <div class="card-body p-4 bg-white d-flex flex-column justify-content-between">
                                <div>
                                    <span class="badge bg-light text-dark mb-2 border-crema">${producto.estilo}</span>
                                    <h4 class="fw-bold m-0 text-cafe">${producto.nombre}</h4>
                                    <p class="text-muted my-2 small">${producto.descripcion}</p>
                                    <hr class="linea-separadora">
                                    <h6 class="fw-bold mb-1 texto-seccion-card">Este outfit incluye:</h6>
                                    <ul class="small mb-3 lista-prendas-card">
                                        ${listaPrendasHTML}
                                    </ul>
                                    <h6 class="fw-bold mb-2 texto-seccion-card">Tallas disponibles:</h6>
                                    <div class="tallas-card mb-2">
                                        ${botonesTallasHTML}
                                    </div>
                                </div>
                                <hr class="linea-separadora">
                                <div class="d-flex align-items-center justify-content-between mt-1">
                                    <span class="fw-bold fs-5 text-naranja">${producto.precio}</span>
                                    <button type="button" class="btn text-white fw-bold px-3 btn-sm btn-naranja btn-agregar" data-id="${producto.id}">
                                        <i class="bi bi-bag-plus me-1"></i> Agregar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                contenedorCatalogo.innerHTML += cardHTML;
            });
        } else {
            contenedorCatalogo.innerHTML = `<p class="text-center w-100 text-muted my-5">Próximamente añadiremos más outfits en este estilo.</p>`;
        }
    }
}


// BLOC 5: SELECCIÓN DE TALLA Y CARRITO

// Muestra un texto temporal dentro del botón y luego lo restaura.
function mostrarAviso(boton, texto) {
    if (!boton.dataset.original) boton.dataset.original = boton.innerHTML;
    boton.textContent = texto;
    clearTimeout(boton.temporizador);
    boton.temporizador = setTimeout(() => {
        boton.innerHTML = boton.dataset.original;
    }, 1500);
}

// Guarda en localStorage con el mismo formato que usa el carrito: { id, talla, cantidad }
function guardarEnCarrito(id, talla) {
    let carrito = [];
    try {
        carrito = JSON.parse(localStorage.getItem("otterCarrito")) || [];
    } catch (error) {
        carrito = [];
    }

    const existente = carrito.find(p => p.id === id && p.talla === talla);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ id, talla, cantidad: 1 });
    }

    localStorage.setItem("otterCarrito", JSON.stringify(carrito));

    // Actualiza el contador del carrito si existe en la página
    const contador = document.getElementById("contadorCarrito");
    if (contador) {
        contador.textContent = carrito.reduce((total, p) => total + p.cantidad, 0);
    }
}

// Un solo "oyente" para todas las cards (delegación de eventos)
contenedorCatalogo.addEventListener("click", evento => {

    // 1) Click en una talla: se marca como seleccionada dentro de su card
    const botonTalla = evento.target.closest(".btn-talla");
    if (botonTalla) {
        botonTalla.closest(".tallas-card").querySelectorAll(".btn-talla").forEach(b => {
            b.classList.remove("btn-dark", "seleccionada");
            b.classList.add("btn-outline-dark");
        });
        botonTalla.classList.remove("btn-outline-dark");
        botonTalla.classList.add("btn-dark", "seleccionada");
        return;
    }

    // 2) Click en Agregar: exige talla y guarda en el carrito
    const botonAgregar = evento.target.closest(".btn-agregar");
    if (!botonAgregar) return;

    const tallaElegida = botonAgregar.closest(".card").querySelector(".btn-talla.seleccionada");

    if (!tallaElegida) {
        mostrarAviso(botonAgregar, "Elige una talla");
        return;
    }

    guardarEnCarrito(Number(botonAgregar.dataset.id), tallaElegida.dataset.talla);
    mostrarAviso(botonAgregar, "¡Agregado!");
});