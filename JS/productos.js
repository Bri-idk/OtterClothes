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
        "https://i.pinimg.com/736x/65/43/38/654338182152a05e0fbe34b9d9fc5bd9.jpg",

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
        "https://i.pinimg.com/736x/98/86/59/988659845199b10ead0bfcf318ed019c.jpg",

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
        "https://media-photos.depop.com/b1/42459049/2281831139_e0c021b343e941c59133306721b754fe/P0.jpg",

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
        "https://tse4.mm.bing.net/th/id/OIP.W9ZRCHv-XktqNVznVSD5xAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",

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
        "https://i.pinimg.com/originals/6f/95/fe/6f95fe130387577ee14f0a87aad8fbda.jpg",

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
        "https://i.pinimg.com/736x/96/46/9f/96469f2cbdb71fe2a011946cef1a5e97.jpg",

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
        "https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x700/outfits/aa5af7f5-df7c-46c4-8604-4fc763ba24f3.png",

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
        "https://i.pinimg.com/474x/82/c3/24/82c32401d68c9700a1983c4f4f495eae.jpg?nii=t",

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
        "https://i.pinimg.com/originals/48/ec/8d/48ec8daf086e6a21131c4117993fa979.jpg?nii=t",

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
        "https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x700/outfits/5fbca72e-29f4-45ba-a8da-58ec156584a1.png",

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
        "https://i.pinimg.com/474x/2a/8f/60/2a8f609d9dfe31e5ab4be81a00750a2b.jpg?nii=t",

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
        "https://i.pinimg.com/originals/e9/fe/72/e9fe72190e9b3a696140a29cacc43b5b.jpg",

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
        "https://i.pinimg.com/originals/9a/54/50/9a5450d60b9a35f1c1830ef7f9a334d0.jpg",

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
        "https://i.pinimg.com/474x/28/c4/33/28c4330969cfc6f1e3924539489f69b8.jpg?nii=t",

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
        "https://i.pinimg.com/originals/a5/f2/06/a5f20650770aac3026754a87b965103a.jpg",

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
        "https://i.pinimg.com/736x/e2/90/f7/e290f78417df35914cb7ab93fff523b2.jpg",

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
        "https://i.pinimg.com/564x/d7/f0/79/d7f079d3bb66186bdd587bb0debab5bd.jpg",

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
        "https://tse3.mm.bing.net/th/id/OIP.ldq_tAoXlH0LFwAKGrC24gHaNC?r=0&w=604&h=1064&rs=1&pid=ImgDetMain&o=7&rm=3",

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
        "https://i.pinimg.com/originals/c0/58/60/c0586065ecc6b5ca59973745f354e9d6.jpg",

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
        "https://i.pinimg.com/originals/af/2a/f2/af2af26b468a38a55a9959ffd62fc27f.jpg",

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
        "https://i.pinimg.com/736x/ee/c3/78/eec37848925c5702b51820247299471f.jpg",

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
        "https://i.pinimg.com/originals/b8/5b/77/b85b777a2bf3029adb6fc039f2e27e74.jpg",

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
        "https://i.pinimg.com/736x/67/c9/35/67c9353fd7b3eac87c17c3d05d10d539.jpg",

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
        "https://tse1.mm.bing.net/th/id/OIP.h3vrx8ApGWTXrRdSDKp3pAHaJ3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",

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
        "https://i.pinimg.com/736x/7b/8e/5f/7b8e5f9534770b63ce478d90f0fd8ee9.jpg",

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
        "https://tse3.mm.bing.net/th/id/OIP.xP8VNmu-0zfE2QxYs_5IwAHaIH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",

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
        "https://i.pinimg.com/736x/7d/6a/8a/7d6a8a0b9dace91a32d50191c8973d63.jpg",

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
        "https://i.pinimg.com/474x/2a/b5/d4/2ab5d4704a2e582d0cca5558087d1831.jpg?nii=t",

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
        "https://zentrosy.com/wp-content/uploads/2024/12/spring-outfits-for-teen-girls-2025-11.png",

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
        "https://i.pinimg.com/736x/e0/42/56/e04256c75ec8ae648d926542ecd425da.jpg",

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
        "https://i.pinimg.com/originals/01/5a/22/015a2205bc4bbb2714bd7a250de9ed98.jpg",

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
        "https://i.pinimg.com/originals/a5/c9/6d/a5c96d90c1a522eb10a5047d4d7ef365.jpg",

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
        "https://i.pinimg.com/736x/44/d4/6f/44d46fe23088a9f762172002587acbc0.jpg",

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
        "https://i.pinimg.com/736x/bb/fe/d3/bbfed398f02f5b4d105111f814345e39.jpg",

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
        "https://i.pinimg.com/564x/3f/22/1a/3f221a46f5c7b50d000dbec0f394dd2a.jpg",

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
        "https://i.pinimg.com/736x/8c/40/b3/8c40b3befa756d6dd14845ca4389b885.jpg",

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
        "https://i.pinimg.com/736x/63/46/d8/6346d8fcd340bcdd4f3dc240c115fc61.jpg",

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
        "https://i.pinimg.com/736x/c7/8b/13/c78b1345aa98d494cb100abced4fbdb1.jpg",

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
        "https://www.fashiondivadesign.com/wp-content/uploads/2014/12/Polyvore-Casual-New-Year-Party-Outfits-For-Girls-2013-2014-5-420x470.jpg",

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
        "https://i0.wp.com/www.alexawebb.com/wp-content/uploads/2018/12/plus-size-party-outfit-alexa-webb-1218-2.jpg?w=812&ssl=1",

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
        "https://i.pinimg.com/736x/5e/a5/58/5ea55894297ce4bd9907e8bd1029ca86.jpg",

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
        "https://i.pinimg.com/736x/43/e0/9d/43e09d629cb5fb15d3e06cdb16bc159e.jpg",

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
        "https://i.pinimg.com/736x/e5/4c/90/e54c903c57c2414fa31e2deabb95aca1.jpg",

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
        "https://i.pinimg.com/736x/43/e0/9d/43e09d629cb5fb15d3e06cdb16bc159e.jpg",

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
        "https://i.pinimg.com/originals/74/0e/0e/740e0e525b30648f3ab2a4fd5b4dfd36.jpg",

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
        "https://i.pinimg.com/736x/9a/56/9a/9a569aa0d48ebba54d719746cc8e420d.jpg",

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
        "https://i.pinimg.com/736x/78/d8/20/78d8209af6e4b879173967d1fe4134b5.jpg",

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
        "https://i.pinimg.com/736x/eb/2f/ec/eb2fec9640694b20d3e56aaab366994a.jpg",

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
        "https://i.pinimg.com/originals/02/8a/41/028a415737d68bd945781560b64c6f80.jpg",

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
        "https://i.pinimg.com/736x/88/37/11/883711b50d4eb3471bcd267334aca001.jpg",

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
        "https://i.pinimg.com/736x/cc/23/b9/cc23b9d719d2ef629d49990efc646902.jpg",

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
        "https://i.pinimg.com/736x/ce/30/e0/ce30e012a86d05f2ecd46f676a2b5411.jpg",

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
        "https://i.pinimg.com/originals/13/51/5d/13515d6dc9bd812f767629c3769a9440.png",

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
        "https://i.pinimg.com/736x/fc/79/88/fc79885b82f57805e71d4b1a0b4782cc.jpg",

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