// ==========================================
// CLASE OUTFIT
// ==========================================

class Outfit {

    constructor({
        id,
        categoria,
        nombre,
        precio,
        imagen,
        descripcionCorta,
        descripcion,
        incluye,
        tallas
    }) {

        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcionCorta = descripcionCorta;
        this.descripcion = descripcion;
        this.incluye = incluye;
        this.tallas = tallas;
    }


    obtenerPrecioFormateado() {

        return new Intl.NumberFormat(
            "es-MX",
            {
                style: "currency",
                currency: "MXN",
                maximumFractionDigits: 0
            }
        ).format(this.precio);

    }


    tieneTalla(talla) {

        return this.tallas.includes(talla);

    }


    obtenerInformacion() {

        return `${this.nombre} - ${this.categoria}`;

    }

}



// ==========================================
// Y2K
// ==========================================

const outfit1 = new Outfit({

    id: 1,
    categoria: "Y2K",
    nombre: "Retro 2000",
    precio: 1149,

    imagen:
        "https://placehold.co/600x700/F8DFB7/49261E?text=Retro+2000",

    descripcionCorta:
        "Look inspirado en la moda de los años 2000.",

    descripcion:
        "Un outfit inspirado en las tendencias más representativas de principios de los años 2000.",

    incluye: [
        "Top estilo Y2K",
        "Pantalón wide leg",
        "Cinturón retro",
        "Accesorios"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit2 = new Outfit({

    id: 2,
    categoria: "Y2K",
    nombre: "Pink Cyber",
    precio: 1299,

    imagen:
        "https://placehold.co/600x700/F6C1D5/49261E?text=Pink+Cyber",

    descripcionCorta:
        "Estética futurista Y2K en tonos rosas.",

    descripcion:
        "Una combinación inspirada en la estética cyber y pop de los años 2000.",

    incluye: [
        "Top rosa",
        "Falda cargo",
        "Cinturón metálico",
        "Lentes"
    ],

    tallas: [
        "CH",
        "M"
    ]

});


const outfit3 = new Outfit({

    id: 3,
    categoria: "Y2K",
    nombre: "Silver Star",
    precio: 1199,

    imagen:
        "https://placehold.co/600x700/D9D9D9/49261E?text=Silver+Star",

    descripcionCorta:
        "Prendas Y2K con detalles metálicos.",

    descripcion:
        "Look dosmilero con accesorios brillantes y una estética futurista.",

    incluye: [
        "Top",
        "Jeans",
        "Bolso",
        "Accesorios"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit4 = new Outfit({

    id: 4,
    categoria: "Y2K",
    nombre: "Denim 2000",
    precio: 1349,

    imagen:
        "https://placehold.co/600x700/AFC8DD/49261E?text=Denim+2000",

    descripcionCorta:
        "Denim y accesorios inspirados en los 2000.",

    descripcion:
        "Un outfit centrado en la mezclilla y las siluetas características de la moda Y2K.",

    incluye: [
        "Top",
        "Jeans denim",
        "Bolso",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G"
    ]

});


const outfit5 = new Outfit({

    id: 5,
    categoria: "Y2K",
    nombre: "Pop Princess",
    precio: 1249,

    imagen:
        "https://placehold.co/600x700/FADADD/49261E?text=Pop+Princess",

    descripcionCorta:
        "Inspirado en el pop de principios de los 2000.",

    descripcion:
        "Colores pastel y accesorios inspirados en los íconos pop de los años 2000.",

    incluye: [
        "Top",
        "Falda",
        "Bolso",
        "Accesorios"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit6 = new Outfit({

    id: 6,
    categoria: "Y2K",
    nombre: "Cyber Blue",
    precio: 1399,

    imagen:
        "https://placehold.co/600x700/C9E7F6/49261E?text=Cyber+Blue",

    descripcionCorta:
        "Estilo futurista Y2K en tonos azules.",

    descripcion:
        "Look futurista inspirado en la moda digital de principios del milenio.",

    incluye: [
        "Top azul",
        "Cargo",
        "Lentes",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit7 = new Outfit({

    id: 7,
    categoria: "Y2K",
    nombre: "Bubblegum",
    precio: 1099,

    imagen:
        "https://placehold.co/600x700/F4CCCC/49261E?text=Bubblegum",

    descripcionCorta:
        "Look juvenil en tonos rosas y blancos.",

    descripcion:
        "Outfit casual Y2K inspirado en colores brillantes y accesorios retro.",

    incluye: [
        "Playera",
        "Falda",
        "Bolso",
        "Tenis"
    ],

    tallas: [
        "CH",
        "M"
    ]

});


const outfit8 = new Outfit({

    id: 8,
    categoria: "Y2K",
    nombre: "Chrome Girl",
    precio: 1449,

    imagen:
        "https://placehold.co/600x700/BDBDBD/49261E?text=Chrome+Girl",

    descripcionCorta:
        "Outfit Y2K con elementos metálicos.",

    descripcion:
        "Una combinación moderna con inspiración cyber y accesorios metálicos.",

    incluye: [
        "Top",
        "Pantalón",
        "Accesorios",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G"
    ]

});


const outfit9 = new Outfit({

    id: 9,
    categoria: "Y2K",
    nombre: "Retro Denim",
    precio: 1279,

    imagen:
        "https://placehold.co/600x700/8FB6D9/ffffff?text=Retro+Denim",

    descripcionCorta:
        "Mezclilla clásica con esencia Y2K.",

    descripcion:
        "Combinación completa inspirada en las tendencias denim de los años 2000.",

    incluye: [
        "Chaqueta denim",
        "Top",
        "Jeans",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});



// ==========================================
// CASUAL
// ==========================================

const outfit10 = new Outfit({

    id: 10,
    categoria: "Casual",
    nombre: "Everyday Cream",
    precio: 999,

    imagen:
        "https://placehold.co/600x700/EADBC8/49261E?text=Everyday+Cream",

    descripcionCorta:
        "Look cómodo y sencillo para todos los días.",

    descripcion:
        "Un outfit casual pensado para comodidad y versatilidad durante el día.",

    incluye: [
        "Playera",
        "Pantalón beige",
        "Sudadera",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit11 = new Outfit({

    id: 11,
    categoria: "Casual",
    nombre: "Soft Beige",
    precio: 1099,

    imagen:
        "https://placehold.co/600x700/DDD0C0/49261E?text=Soft+Beige",

    descripcionCorta:
        "Colores claros para un look relajado.",

    descripcion:
        "Outfit casual construido con tonos claros y prendas fáciles de combinar.",

    incluye: [
        "Playera",
        "Pantalón",
        "Chaqueta",
        "Tenis"
    ],

    tallas: [
        "CH",
        "M",
        "G",
        "EG"
    ]

});


const outfit12 = new Outfit({

    id: 12,
    categoria: "Casual",
    nombre: "Weekend",
    precio: 1199,

    imagen:
        "https://placehold.co/600x700/CABFAF/49261E?text=Weekend",

    descripcionCorta:
        "Look relajado para fines de semana.",

    descripcion:
        "Combinación casual cómoda para actividades cotidianas y fines de semana.",

    incluye: [
        "Playera",
        "Jeans",
        "Sudadera",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G"
    ]

});


const outfit13 = new Outfit({

    id: 13,
    categoria: "Casual",
    nombre: "Coffee Day",
    precio: 1049,

    imagen:
        "https://placehold.co/600x700/C8AD8D/49261E?text=Coffee+Day",

    descripcionCorta:
        "Outfit casual en tonos tierra.",

    descripcion:
        "Prendas cómodas y colores cálidos para un estilo cotidiano.",

    incluye: [
        "Playera",
        "Pantalón",
        "Sobrecamisa",
        "Tenis"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit14 = new Outfit({

    id: 14,
    categoria: "Casual",
    nombre: "Daily Blue",
    precio: 1149,

    imagen:
        "https://placehold.co/600x700/CAD8E5/49261E?text=Daily+Blue",

    descripcionCorta:
        "Casual moderno con tonos azules.",

    descripcion:
        "Outfit versátil pensado para utilizarse durante todo el día.",

    incluye: [
        "Playera",
        "Jeans",
        "Chaqueta",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G",
        "EG"
    ]

});


const outfit15 = new Outfit({

    id: 15,
    categoria: "Casual",
    nombre: "Sunday Fit",
    precio: 949,

    imagen:
        "https://placehold.co/600x700/EDE1D1/49261E?text=Sunday+Fit",

    descripcionCorta:
        "Comodidad para un día relajado.",

    descripcion:
        "Look casual sencillo con prendas suaves y cómodas.",

    incluye: [
        "Playera",
        "Jogger",
        "Sudadera",
        "Tenis"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit16 = new Outfit({

    id: 16,
    categoria: "Casual",
    nombre: "Urban Casual",
    precio: 1249,

    imagen:
        "https://placehold.co/600x700/BEB8AD/49261E?text=Urban+Casual",

    descripcionCorta:
        "Casual con detalles urbanos.",

    descripcion:
        "La comodidad del estilo casual combinada con algunos elementos urbanos.",

    incluye: [
        "Playera",
        "Cargo",
        "Chaqueta",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit17 = new Outfit({

    id: 17,
    categoria: "Casual",
    nombre: "Basic White",
    precio: 899,

    imagen:
        "https://placehold.co/600x700/F2F2F2/49261E?text=Basic+White",

    descripcionCorta:
        "Básicos fáciles de combinar.",

    descripcion:
        "Un outfit construido alrededor de prendas esenciales.",

    incluye: [
        "Playera blanca",
        "Jeans",
        "Sudadera",
        "Tenis"
    ],

    tallas: [
        "CH",
        "M",
        "G",
        "EG"
    ]

});


const outfit18 = new Outfit({

    id: 18,
    categoria: "Casual",
    nombre: "Morning Fit",
    precio: 1079,

    imagen:
        "https://placehold.co/600x700/D9CCBB/49261E?text=Morning+Fit",

    descripcionCorta:
        "Look ligero y cómodo.",

    descripcion:
        "Una combinación sencilla para comenzar el día con comodidad.",

    incluye: [
        "Playera",
        "Pantalón",
        "Chaqueta",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G"
    ]

});



// ==========================================
// STREETWEAR
// ==========================================

const outfit19 = new Outfit({

    id: 19,
    categoria: "Streetwear",
    nombre: "Urban Black",
    precio: 1299,

    imagen:
        "https://placehold.co/600x700/292929/ffffff?text=Urban+Black",

    descripcionCorta:
        "Hoodie oversized, cargo y sneakers.",

    descripcion:
        "Outfit urbano inspirado en el streetwear contemporáneo.",

    incluye: [
        "Hoodie",
        "Playera",
        "Cargo",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M",
        "G",
        "EG"
    ]

});


const outfit20 = new Outfit({

    id: 20,
    categoria: "Streetwear",
    nombre: "Concrete",
    precio: 1399,

    imagen:
        "https://placehold.co/600x700/555555/ffffff?text=Concrete",

    descripcionCorta:
        "Tonos grises con prendas oversized.",

    descripcion:
        "Inspirado en la estética urbana y la arquitectura de ciudad.",

    incluye: [
        "Sudadera",
        "Cargo",
        "Playera",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G",
        "EG"
    ]

});


const outfit21 = new Outfit({

    id: 21,
    categoria: "Streetwear",
    nombre: "Orange District",
    precio: 1449,

    imagen:
        "https://placehold.co/600x700/FA4E02/ffffff?text=Orange+District",

    descripcionCorta:
        "Streetwear con detalles naranja.",

    descripcion:
        "Una combinación urbana construida alrededor de acentos de color naranja.",

    incluye: [
        "Hoodie",
        "Cargo",
        "Gorra",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit22 = new Outfit({

    id: 22,
    categoria: "Streetwear",
    nombre: "Night City",
    precio: 1499,

    imagen:
        "https://placehold.co/600x700/171717/ffffff?text=Night+City",

    descripcionCorta:
        "Look urbano pensado para la noche.",

    descripcion:
        "Outfit oscuro inspirado en ambientes urbanos nocturnos.",

    incluye: [
        "Chaqueta",
        "Playera",
        "Cargo",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G"
    ]

});


const outfit23 = new Outfit({

    id: 23,
    categoria: "Streetwear",
    nombre: "Cargo District",
    precio: 1349,

    imagen:
        "https://placehold.co/600x700/4C5145/ffffff?text=Cargo+District",

    descripcionCorta:
        "El pantalón cargo como pieza principal.",

    descripcion:
        "Streetwear funcional construido alrededor de prendas holgadas.",

    incluye: [
        "Playera",
        "Cargo",
        "Chamarra",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit24 = new Outfit({

    id: 24,
    categoria: "Streetwear",
    nombre: "Oversized Grey",
    precio: 1199,

    imagen:
        "https://placehold.co/600x700/696969/ffffff?text=Oversized+Grey",

    descripcionCorta:
        "Siluetas amplias y tonos grises.",

    descripcion:
        "Outfit streetwear cómodo con prendas oversized.",

    incluye: [
        "Hoodie",
        "Playera",
        "Jeans",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G",
        "EG"
    ]

});


const outfit25 = new Outfit({

    id: 25,
    categoria: "Streetwear",
    nombre: "City Red",
    precio: 1429,

    imagen:
        "https://placehold.co/600x700/7B2525/ffffff?text=City+Red",

    descripcionCorta:
        "Streetwear con detalles en rojo.",

    descripcion:
        "Una propuesta urbana con contraste de colores y siluetas relajadas.",

    incluye: [
        "Chaqueta",
        "Playera",
        "Cargo",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit26 = new Outfit({

    id: 26,
    categoria: "Streetwear",
    nombre: "Underground",
    precio: 1549,

    imagen:
        "https://placehold.co/600x700/111111/ffffff?text=Underground",

    descripcionCorta:
        "Look urbano de estética underground.",

    descripcion:
        "Prendas oscuras y oversized para conseguir una estética alternativa.",

    incluye: [
        "Hoodie",
        "Cargo",
        "Gorra",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G"
    ]

});


const outfit27 = new Outfit({

    id: 27,
    categoria: "Streetwear",
    nombre: "Metro Style",
    precio: 1379,

    imagen:
        "https://placehold.co/600x700/343A40/ffffff?text=Metro+Style",

    descripcionCorta:
        "Inspirado en el movimiento de la ciudad.",

    descripcion:
        "Un look streetwear funcional pensado para el ritmo urbano.",

    incluye: [
        "Playera",
        "Cargo",
        "Chaqueta",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M",
        "G",
        "EG"
    ]

});



// ==========================================
// MINIMALISTA
// ==========================================

const outfit28 = new Outfit({

    id: 28,
    categoria: "Minimalista",
    nombre: "Clean Style",
    precio: 1199,

    imagen:
        "https://placehold.co/600x700/E1E1E1/555555?text=Clean+Style",

    descripcionCorta:
        "Colores neutros y líneas sencillas.",

    descripcion:
        "Outfit minimalista pensado para conseguir una estética limpia y moderna.",

    incluye: [
        "Playera",
        "Sobrecamisa",
        "Pantalón",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G",
        "EG"
    ]

});


const outfit29 = new Outfit({

    id: 29,
    categoria: "Minimalista",
    nombre: "Pure White",
    precio: 1249,

    imagen:
        "https://placehold.co/600x700/F7F7F7/555555?text=Pure+White",

    descripcionCorta:
        "Outfit dominado por tonos blancos.",

    descripcion:
        "Prendas simples y monocromáticas para un estilo minimalista.",

    incluye: [
        "Playera",
        "Pantalón",
        "Chaqueta",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit30 = new Outfit({

    id: 30,
    categoria: "Minimalista",
    nombre: "Neutral Sand",
    precio: 1299,

    imagen:
        "https://placehold.co/600x700/D9C7A5/49261E?text=Neutral+Sand",

    descripcionCorta:
        "Tonos arena y cortes limpios.",

    descripcion:
        "Una combinación minimalista inspirada en colores naturales.",

    incluye: [
        "Playera",
        "Pantalón",
        "Sobrecamisa",
        "Tenis"
    ],

    tallas: [
        "M",
        "G"
    ]

});


const outfit31 = new Outfit({

    id: 31,
    categoria: "Minimalista",
    nombre: "Grey Line",
    precio: 1149,

    imagen:
        "https://placehold.co/600x700/C4C4C4/49261E?text=Grey+Line",

    descripcionCorta:
        "Grises y siluetas simples.",

    descripcion:
        "Outfit monocromático de estética limpia y moderna.",

    incluye: [
        "Playera",
        "Pantalón",
        "Chaqueta",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit32 = new Outfit({

    id: 32,
    categoria: "Minimalista",
    nombre: "Simple Black",
    precio: 1399,

    imagen:
        "https://placehold.co/600x700/333333/ffffff?text=Simple+Black",

    descripcionCorta:
        "Minimalismo en color negro.",

    descripcion:
        "Una propuesta minimalista utilizando prendas oscuras.",

    incluye: [
        "Playera",
        "Pantalón",
        "Sobrecamisa",
        "Zapatos"
    ],

    tallas: [
        "M",
        "G",
        "EG"
    ]

});


const outfit33 = new Outfit({

    id: 33,
    categoria: "Minimalista",
    nombre: "Soft Cream",
    precio: 1229,

    imagen:
        "https://placehold.co/600x700/EEE1CA/49261E?text=Soft+Cream",

    descripcionCorta:
        "Colores crema y materiales suaves.",

    descripcion:
        "Minimalismo cálido construido alrededor de tonos claros.",

    incluye: [
        "Playera",
        "Pantalón",
        "Chaqueta",
        "Tenis"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit34 = new Outfit({

    id: 34,
    categoria: "Minimalista",
    nombre: "Mono Beige",
    precio: 1279,

    imagen:
        "https://placehold.co/600x700/D6C6AC/49261E?text=Mono+Beige",

    descripcionCorta:
        "Look monocromático beige.",

    descripcion:
        "Prendas coordinadas para conseguir una estética sencilla.",

    incluye: [
        "Playera",
        "Pantalón",
        "Sobrecamisa",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G"
    ]

});


const outfit35 = new Outfit({

    id: 35,
    categoria: "Minimalista",
    nombre: "Essential",
    precio: 1099,

    imagen:
        "https://placehold.co/600x700/EBEBEB/49261E?text=Essential",

    descripcionCorta:
        "Solo las prendas esenciales.",

    descripcion:
        "Outfit construido con básicos fáciles de combinar.",

    incluye: [
        "Playera",
        "Pantalón",
        "Chaqueta",
        "Tenis"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit36 = new Outfit({

    id: 36,
    categoria: "Minimalista",
    nombre: "Modern White",
    precio: 1349,

    imagen:
        "https://placehold.co/600x700/F5F5F5/49261E?text=Modern+White",

    descripcionCorta:
        "Minimalismo moderno en tonos claros.",

    descripcion:
        "Una combinación limpia con cortes contemporáneos.",

    incluye: [
        "Camisa",
        "Pantalón",
        "Sobrecamisa",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G",
        "EG"
    ]

});



// ==========================================
// ELEGANTE
// ==========================================

const outfit37 = new Outfit({

    id: 37,
    categoria: "Elegante",
    nombre: "Night Style",
    precio: 1599,

    imagen:
        "https://placehold.co/600x700/49261E/ffffff?text=Night+Style",

    descripcionCorta:
        "Outfit pensado para eventos especiales.",

    descripcion:
        "Look elegante con prendas formales y algunos detalles modernos.",

    incluye: [
        "Camisa",
        "Blazer",
        "Pantalón",
        "Zapatos"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit38 = new Outfit({

    id: 38,
    categoria: "Elegante",
    nombre: "Black Dinner",
    precio: 1699,

    imagen:
        "https://placehold.co/600x700/1E1E1E/ffffff?text=Black+Dinner",

    descripcionCorta:
        "Elegancia en tonos negros.",

    descripcion:
        "Outfit oscuro diseñado para cenas y eventos especiales.",

    incluye: [
        "Camisa",
        "Blazer",
        "Pantalón",
        "Zapatos"
    ],

    tallas: [
        "M",
        "G"
    ]

});


const outfit39 = new Outfit({

    id: 39,
    categoria: "Elegante",
    nombre: "Classic Brown",
    precio: 1749,

    imagen:
        "https://placehold.co/600x700/795548/ffffff?text=Classic+Brown",

    descripcionCorta:
        "Estilo clásico en tonos café.",

    descripcion:
        "Look elegante con inspiración tradicional.",

    incluye: [
        "Camisa",
        "Saco",
        "Pantalón",
        "Zapatos"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit40 = new Outfit({

    id: 40,
    categoria: "Elegante",
    nombre: "White Night",
    precio: 1649,

    imagen:
        "https://placehold.co/600x700/F2EFE9/49261E?text=White+Night",

    descripcionCorta:
        "Elegancia moderna en tonos claros.",

    descripcion:
        "Combinación formal con una estética contemporánea.",

    incluye: [
        "Camisa",
        "Blazer",
        "Pantalón",
        "Zapatos"
    ],

    tallas: [
        "M",
        "G",
        "EG"
    ]

});


const outfit41 = new Outfit({

    id: 41,
    categoria: "Elegante",
    nombre: "Wine Suit",
    precio: 1899,

    imagen:
        "https://placehold.co/600x700/722F37/ffffff?text=Wine+Suit",

    descripcionCorta:
        "Look formal con tonos vino.",

    descripcion:
        "Una propuesta elegante construida alrededor de colores profundos.",

    incluye: [
        "Camisa",
        "Saco",
        "Pantalón",
        "Zapatos"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit42 = new Outfit({

    id: 42,
    categoria: "Elegante",
    nombre: "Modern Gentleman",
    precio: 1799,

    imagen:
        "https://placehold.co/600x700/3D3D3D/ffffff?text=Modern+Gentleman",

    descripcionCorta:
        "Elegancia contemporánea.",

    descripcion:
        "Outfit formal actualizado para eventos modernos.",

    incluye: [
        "Camisa",
        "Blazer",
        "Pantalón",
        "Zapatos"
    ],

    tallas: [
        "M",
        "G"
    ]

});


const outfit43 = new Outfit({

    id: 43,
    categoria: "Elegante",
    nombre: "Midnight",
    precio: 1849,

    imagen:
        "https://placehold.co/600x700/191970/ffffff?text=Midnight",

    descripcionCorta:
        "Look nocturno sofisticado.",

    descripcion:
        "Una combinación formal dominada por tonos oscuros.",

    incluye: [
        "Camisa",
        "Blazer",
        "Pantalón",
        "Zapatos"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit44 = new Outfit({

    id: 44,
    categoria: "Elegante",
    nombre: "Classic Grey",
    precio: 1699,

    imagen:
        "https://placehold.co/600x700/777777/ffffff?text=Classic+Grey",

    descripcionCorta:
        "Elegancia clásica en gris.",

    descripcion:
        "Look formal versátil para diferentes ocasiones.",

    incluye: [
        "Camisa",
        "Saco",
        "Pantalón",
        "Zapatos"
    ],

    tallas: [
        "M",
        "G",
        "EG"
    ]

});


const outfit45 = new Outfit({

    id: 45,
    categoria: "Elegante",
    nombre: "Premium Black",
    precio: 1999,

    imagen:
        "https://placehold.co/600x700/000000/ffffff?text=Premium+Black",

    descripcionCorta:
        "Outfit formal premium.",

    descripcion:
        "Una propuesta sofisticada para ocasiones importantes.",

    incluye: [
        "Camisa",
        "Blazer",
        "Pantalón",
        "Zapatos"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});



// ==========================================
// VINTAGE
// ==========================================

const outfit46 = new Outfit({

    id: 46,
    categoria: "Vintage",
    nombre: "Vintage Brown",
    precio: 1349,

    imagen:
        "https://placehold.co/600x700/B08968/ffffff?text=Vintage+Brown",

    descripcionCorta:
        "Inspirado en las décadas de los 80 y 90.",

    descripcion:
        "Look retro utilizando tonos cálidos y prendas clásicas.",

    incluye: [
        "Chaqueta",
        "Playera",
        "Pantalón",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M"
    ]

});


const outfit47 = new Outfit({

    id: 47,
    categoria: "Vintage",
    nombre: "Old School",
    precio: 1449,

    imagen:
        "https://placehold.co/600x700/967259/ffffff?text=Old+School",

    descripcionCorta:
        "Estilo clásico de décadas anteriores.",

    descripcion:
        "Una combinación retro con prendas icónicas.",

    incluye: [
        "Chaqueta",
        "Playera",
        "Jeans",
        "Tenis"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit48 = new Outfit({

    id: 48,
    categoria: "Vintage",
    nombre: "Retro Green",
    precio: 1299,

    imagen:
        "https://placehold.co/600x700/718355/ffffff?text=Retro+Green",

    descripcionCorta:
        "Look retro con tonos verdes.",

    descripcion:
        "Inspirado en tendencias de moda de décadas anteriores.",

    incluye: [
        "Chaqueta",
        "Playera",
        "Pantalón",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G"
    ]

});


const outfit49 = new Outfit({

    id: 49,
    categoria: "Vintage",
    nombre: "Seventies",
    precio: 1499,

    imagen:
        "https://placehold.co/600x700/C08552/ffffff?text=Seventies",

    descripcionCorta:
        "Inspiración directa de los años 70.",

    descripcion:
        "Colores cálidos y siluetas clásicas inspiradas en los setenta.",

    incluye: [
        "Camisa",
        "Pantalón",
        "Chaqueta",
        "Zapatos"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit50 = new Outfit({

    id: 50,
    categoria: "Vintage",
    nombre: "Retro Denim",
    precio: 1399,

    imagen:
        "https://placehold.co/600x700/6688A8/ffffff?text=Retro+Denim",

    descripcionCorta:
        "La mezclilla como protagonista.",

    descripcion:
        "Outfit inspirado en el denim vintage.",

    incluye: [
        "Chaqueta denim",
        "Playera",
        "Jeans",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G",
        "EG"
    ]

});


const outfit51 = new Outfit({

    id: 51,
    categoria: "Vintage",
    nombre: "Classic Cream",
    precio: 1249,

    imagen:
        "https://placehold.co/600x700/E5D1B5/49261E?text=Classic+Cream",

    descripcionCorta:
        "Look retro en colores crema.",

    descripcion:
        "Outfit vintage de tonos claros y estilo relajado.",

    incluye: [
        "Camisa",
        "Pantalón",
        "Chaqueta",
        "Zapatos"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit52 = new Outfit({

    id: 52,
    categoria: "Vintage",
    nombre: "Nineties",
    precio: 1379,

    imagen:
        "https://placehold.co/600x700/756A5D/ffffff?text=Nineties",

    descripcionCorta:
        "Inspiración directa de los años 90.",

    descripcion:
        "Una mezcla de básicos y prendas retro.",

    incluye: [
        "Playera",
        "Jeans",
        "Chaqueta",
        "Sneakers"
    ],

    tallas: [
        "M",
        "G"
    ]

});


const outfit53 = new Outfit({

    id: 53,
    categoria: "Vintage",
    nombre: "Retro College",
    precio: 1329,

    imagen:
        "https://placehold.co/600x700/8B7355/ffffff?text=Retro+College",

    descripcionCorta:
        "Estética universitaria retro.",

    descripcion:
        "Inspirado en looks universitarios clásicos.",

    incluye: [
        "Suéter",
        "Camisa",
        "Pantalón",
        "Sneakers"
    ],

    tallas: [
        "CH",
        "M",
        "G"
    ]

});


const outfit54 = new Outfit({

    id: 54,
    categoria: "Vintage",
    nombre: "Brown Leather",
    precio: 1599,

    imagen:
        "https://placehold.co/600x700/5C4033/ffffff?text=Brown+Leather",

    descripcionCorta:
        "Chaqueta café como pieza principal.",

    descripcion:
        "Un outfit vintage construido alrededor de una chaqueta clásica.",

    incluye: [
        "Chaqueta",
        "Playera",
        "Jeans",
        "Botas"
    ],

    tallas: [
        "M",
        "G",
        "EG"
    ]

});



// ==========================================
// ARREGLO GENERAL DE OUTFITS
// ==========================================

const outfits = [

    outfit1,
    outfit2,
    outfit3,
    outfit4,
    outfit5,
    outfit6,
    outfit7,
    outfit8,
    outfit9,

    outfit10,
    outfit11,
    outfit12,
    outfit13,
    outfit14,
    outfit15,
    outfit16,
    outfit17,
    outfit18,

    outfit19,
    outfit20,
    outfit21,
    outfit22,
    outfit23,
    outfit24,
    outfit25,
    outfit26,
    outfit27,

    outfit28,
    outfit29,
    outfit30,
    outfit31,
    outfit32,
    outfit33,
    outfit34,
    outfit35,
    outfit36,

    outfit37,
    outfit38,
    outfit39,
    outfit40,
    outfit41,
    outfit42,
    outfit43,
    outfit44,
    outfit45,

    outfit46,
    outfit47,
    outfit48,
    outfit49,
    outfit50,
    outfit51,
    outfit52,
    outfit53,
    outfit54

];



// ==========================================
// LO MÁS VISTO
// ==========================================

const idsMasVistos = [

    1,      // Y2K
    10,     // Casual
    19,     // Streetwear
    28,     // Minimalista
    37,     // Elegante
    46,     // Vintage
    6,      // Y2K
    16,     // Casual
    25      // Streetwear

];