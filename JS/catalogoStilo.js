
// BLOC 1: BASE DE DATOS DE PRODUCTOS (ARRAY)

const listaProductos = [
    {
        id: 1,
        nombre: "Stage Presence Idol Set",
        estilo: "Kpop Idol",
        descripcion: "Inspirado en los outfits de performance más icónicos del K-Pop actual.",
        precio: "\$1,550 MXN",
        imagen: "#",
        incluye: ["Falda de Pliegues", "Top Holográfico", "Arnés de Accesorios"],
        tallas: ["S", "M", "L", "G", "XL"]
    },
     {
        id: 1.2,
        nombre: "Award Show Elegant Dress",
        estilo: "Kpop Idol",
        descripcion: "Estilo sofisticado y vanguardista usado en las alfombras rojas de Seúl.",
        precio: "$1,890 MXN",
        imagen: "#",
        incluye: ["Blazer Entallado Satinado", "Falda Corta de Encaje", "Botas de Caña Alta"],
        tallas: ["XS", "S", "M", "G", "XL"]
    },
    {
        id: 1.3,
        nombre: "Music Video Street Idol",
        estilo: "Kpop Idol",
        descripcion: "Traje de calle llamativo de corte asimétrico ideal para dance covers.",
        precio: "$1,380 MXN",
        imagen: "#",
        incluye: ["Pantalón de Chándal Bicolor", "Crop Top Técnico", "Guantes de Red"],
        tallas: ["XS", "S", "M", "G", "XL"]
    },
    {
        id: 2,
        nombre: "Cyber Y2K Grunge Pack",
        estilo: "Y2K",
        descripcion: "Un outfit retro-futurista perfecto para la estética urbana de los 2000.",
        precio: "\$1,200 MXN",
        imagen: "#", 
        incluye: ["Chaqueta Oversize", "Pantalón Cargo Ancho", "Gafas de Sol Futuristas"],
        tallas: ["S", "M", "L", "G", "XL"]
    },
      {
        id: 2.2,
        nombre: "Y2K Cyberpunk Cyber Set",
        estilo: "Y2K",
        descripcion: "Estética futurista con contrastes neón y texturas reflectantes de la vieja escuela.",
        precio: "$1,450 MXN",
        imagen: "#",
        incluye: ["Chaqueta Cromada", "Jeans de Tiro Bajo", "Botas Plataforma"],
        tallas: ["S", "M", "L", "G", "XL"]
    },
     {
        id: 2.3,
        nombre: "Award Show Elegant Dress",
        estilo: "Y2K",
        descripcion: "Estilo sofisticado y vanguardista usado en las alfombras rojas de Seúl.",
        precio: "$1,150 MXN",
        imagen: "#",
        incluye: ["Blazer Entallado Satinado", "Falda Corta de Encaje", "Botas de Caña Alta"],
        tallas: ["S", "M", "L", "G", "XL"]
    },
    {
        id: 3,
        nombre: "Casual Aesthetic Minimal",
        estilo: "Casual",
        descripcion: "Básicos de alta calidad combinables para un look relajado de día a día.",
        precio: "\$850 MXN",
        imagen: "#",
        incluye: ["Playera Básica Algodón", "Jeans Rectos Neutros"],
        tallas: ["S", "M", "L", "G", "XL"]
    },
      {
        id: 3.2,
        nombre: "Smart Casual Autumn",
        estilo: "Casual",
        descripcion: "Un balance perfecto entre lo profesional y lo cómodo para días templados.",
        precio: "$1,250 MXN",
        imagen: "#",
        incluye: ["Suéter de Punto Ligero", "Pantalón Chino Beige", "Mocasines Cómodos"],
        tallas: ["S", "M", "L", "G", "XL"]
    },
    {
        id: 3.3,
        nombre: "Denim Everyday Vibe",
        estilo: "Casual",
        descripcion: "El conjunto básico por excelencia que nunca falla para cualquier salida casual.",
        precio: "$950 MXN",
        imagen: "#",
        incluye: ["Chaqueta de Mezclilla", "Camiseta Blanca Lisa", "Pantalón Negro Slim"],
        tallas: ["S", "M", "L", "G", "XL"]
    },
    {
        id: 4,
        nombre: "Streetwear Essential Tokyo",
        estilo: "Streetwear",
        descripcion: "Comodidad y vanguardia con cortes oversize inspirados en las calles de Harajuku.",
        precio: "\$980 MXN",
        imagen: "#",
        incluye: ["Sudadera con Capucha Gráfica", "Joggers Ajustables"],
        tallas: ["S", "M", "L", "G", "XL"]
    },
    {
        id: 4.2,
        nombre: "Urban Techwear Pack",
        estilo: "Streetwear",
        descripcion: "Cortes utilitarios tácticos con múltiples correas y telas impermeables.",
        precio: "$1,600 MXN",
        imagen: "#",
        incluye: ["Chaqueta Impermeable Táctica", "Pantalón Cargo Multi-bolsillos", "Gorrito Beanie"],
        tallas: ["M", "L", "XL", "G"]
    },
     {
        id: 4.3,
        nombre: "Skater Graphic Vibe",
        estilo: "Streetwear",
        descripcion: "Estilo urbano californiano clásico y relajado de corte muy holgado.",
        precio: "$890 MXN",
        imagen: "#",
        incluye: ["Camiseta Oversize Estampada", "Pantalón de Mezclilla Ancho", "Tenis de Suela Plana"],
        tallas: ["M", "L", "XL", "G"]
    },

    {
        id: 6,
        nombre: "Retro Golden Vintage Tailor",
        estilo: "Vintage",
        descripcion: "Prendas inspiradas en los años 70 y 80 con texturas y patrones atemporales.",
        precio: "\$1,100 MXN",
        imagen: "#",
        incluye: ["Camisa de Pana Retro", "Pantalón de Pinzas"],
        tallas: ["S", "M", "L", "G", "XL"]
    },
     {
        id: 6.2,
        nombre: "90s Varsity Classic",
        estilo: "Vintage",
        descripcion: "Look universitario retro que rescata las siluetas americanas clásicas de los 90.",
        precio: "$1,350 MXN",
        imagen: "#",
        incluye: ["Chaqueta Varsity de Cuero", "Sudadera Cuello Redondo", "Pantalón Recto"],
        tallas: ["M", "L", "G", "XL"]
    },
    {
        id: 5.3,
        nombre: "70s Corduroy & Earth Set",
        estilo: "Vintage",
        descripcion: "Inspirado en paletas de colores tierra y patrones de cuadros de la época de oro.",
        precio: "$1,190 MXN",
        imagen: "#",
        incluye: ["Saco de Pana Café", "Camisa Estampada de Cuadros", "Cinturón de Cuero"],
        tallas: ["M", "L", "G", "XL"]
    }

];


// BLOC 2: CAPTURA DE RUTA Y ELEMENTOS HTML

// Lee la categoría que viene en el enlace (ej: ?categoria=Y2K)
const parametrosURL = new URLSearchParams(window.location.search);
const estiloSeleccionado = parametrosURL.get('categoria');
const mensajesPorEstilo = {
    "kpop idol": {
        nombre: "Kpop Idol",
        mensaje: "Descubre outfits inspirados en el estilo K-pop. 💖"
    },
    "y2k": {
        nombre: "Y2K",
        mensaje: "Explora la colección con toda la vibra Y2K. ✨"
    },
    "casual": {
        nombre: "Casual",
        mensaje: "Encuentra tu próximo look casual favorito. ☀️"
    },
    "streetwear": {
        nombre: "Streetwear",
        mensaje: "Descubre outfits urbanos con mucha actitud. 🧢"
    },
    "vintage": {
        nombre: "Vintage",
        mensaje: "Explora prendas con inspiración vintage. 📼"
    }
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
                    .map(talla => `<button class="btn btn-outline-dark btn-xs mx-1">${talla}</button>`)
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
                                    <button class="btn text-white fw-bold px-3 btn-sm btn-naranja">
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
