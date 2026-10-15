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
// Kpop Idol
// ==========================================

const outfit1 = new Outfit({

    id: 1,
    categoria: "Kpop Idol",
    nombre: "Retro 2000",
    precio: 1149,

    imagen:
        "https://i.pinimg.com/736x/65/43/38/654338182152a05e0fbe34b9d9fc5bd9.jpg",

    descripcionCorta:
        "Look inspirado en la moda de los años 2000.",

    descripcion:
        "Un outfit inspirado en las tendencias más representativas de principios de los años 2000.",

    incluye: [
        "Top estilo Kpop Idol",
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
    categoria: "Kpop Idol",
    nombre: "Pink Cyber",
    precio: 1299,

    imagen:
        "https://i.pinimg.com/736x/98/86/59/988659845199b10ead0bfcf318ed019c.jpg",

    descripcionCorta:
        "Estética futurista Kpop Idol en tonos rosas.",

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
    categoria: "Kpop Idol",
    nombre: "Silver Star",
    precio: 1199,

    imagen:
        "https://media-photos.depop.com/b1/42459049/2281831139_e0c021b343e941c59133306721b754fe/P0.jpg",

    descripcionCorta:
        "Prendas Kpop Idol con detalles metálicos.",

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
    categoria: "Kpop Idol",
    nombre: "Denim 2000",
    precio: 1349,

    imagen:
        "https://tse4.mm.bing.net/th/id/OIP.W9ZRCHv-XktqNVznVSD5xAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",

    descripcionCorta:
        "Denim y accesorios inspirados en los 2000.",

    descripcion:
        "Un outfit centrado en la mezclilla y las siluetas características de la moda Kpop Idol.",

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
    categoria: "Kpop Idol",
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
    categoria: "Kpop Idol",
    nombre: "Cyber Blue",
    precio: 1399,

    imagen:
        "https://i.pinimg.com/736x/96/46/9f/96469f2cbdb71fe2a011946cef1a5e97.jpg",

    descripcionCorta:
        "Estilo futurista Kpop Idol en tonos azules.",

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
    categoria: "Kpop Idol",
    nombre: "Bubblegum",
    precio: 1099,

    imagen:
        "https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x700/outfits/aa5af7f5-df7c-46c4-8604-4fc763ba24f3.png",

    descripcionCorta:
        "Look juvenil en tonos rosas y blancos.",

    descripcion:
        "Outfit casual Kpop Idol inspirado en colores brillantes y accesorios retro.",

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
    categoria: "Kpop Idol",
    nombre: "Chrome Girl",
    precio: 1449,

    imagen:
        "https://i.pinimg.com/474x/82/c3/24/82c32401d68c9700a1983c4f4f495eae.jpg?nii=t",

    descripcionCorta:
        "Outfit Kpop Idol con elementos metálicos.",

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
    categoria: "Kpop Idol",
    nombre: "Retro Denim",
    precio: 1279,

    imagen:
        "https://i.pinimg.com/originals/48/ec/8d/48ec8daf086e6a21131c4117993fa979.jpg?nii=t",

    descripcionCorta:
        "Mezclilla clásica con esencia Kpop Idol.",

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
    outfit18

];



// ==========================================
// LO MÁS VISTO
// ==========================================

const idsMasVistos = [

    1,      // Kpop Idol
    10,     // Casual
    6,      // Kpop Idol
    16      // Casual

];