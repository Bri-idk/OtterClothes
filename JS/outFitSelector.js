// 1. CLASE PARA CADA PRENDA INDIVIDUAL
class Prenda {
  constructor(nombre, urlImagen) {
    this.id = Date.now() + Math.random();
    this.nombre = nombre;
    this.urlImagen = urlImagen;
  }
}

// 2. CLASE PARA GESTIONAR EL OUTFIT DEL USUARIO
class MiOutfitPersonalizado {
  constructor() {
    this.prendas = [];
  }

  agregar(nombre, urlImagen) {
    const nuevaPrenda = new Prenda(nombre, urlImagen);
    this.prendas.push(nuevaPrenda);
    this.actualizarInterfaz();
  }

  eliminar(id) {
    this.prendas = this.prendas.filter(prenda => prenda.id !== id);
    this.actualizarInterfaz();
  }

  limpiar() {
    this.prendas = [];
    this.actualizarInterfaz();
  }

  // Renderiza cada prenda una debajo de otra ocupar toda la fila (col-12)
  actualizarInterfaz() {
    const contenedor = document.getElementById('contenedor-mi-outfit');
    
    if (!contenedor) return;

    contenedor.innerHTML = '';

    if (this.prendas.length === 0) {
      contenedor.innerHTML = '<p id="mensaje-vacio" class="text-muted mb-0 text-center">No has agregado piezas a tu outfit aún.</p>';
      return;
    }

    this.prendas.forEach((prenda) => {
      const col = document.createElement('div');
      col.className = 'col-12';

      col.innerHTML = `
        <div class="card p-2 border shadow-sm position-relative d-flex flex-row align-items-center justify-content-between">
          <div class="d-flex align-items-center gap-3">
            <img src="${prenda.urlImagen}" class="rounded" style="height: 120px; width: 120px; object-fit: contain;" alt="${prenda.nombre}">
            <h6 class="fw-bold mb-0">${prenda.nombre}</h6>
          </div>
          <button 
            class="btn btn-sm style="background-color: var(--naranja);" rounded-circle px-2 me-2" 
            onclick="miOutfit.eliminar(${prenda.id})" 
            title="Quitar prenda">&times;</button>
        </div>
      `;

      contenedor.appendChild(col);
    });
  }
}

// 3. INICIALIZAMOS LA INSTANCIA GLOBAL
const miOutfit = new MiOutfitPersonalizado();

// 4. FUNCIÓN QUE LLAMAN LOS BOTONES DEL HTML
function agregarPrendaDeOutfit(nombre, urlImagen) {
  miOutfit.agregar(nombre, urlImagen);
}

// 5. REGISTRO EN WINDOW
window.miOutfit = miOutfit;
window.agregarPrendaDeOutfit = agregarPrendaDeOutfit;

// 6. FORMULARIO CON PROTECCIÓN
const form = document.getElementById("tu-id-de-formulario");
if (form) {
  form.addEventListener("submit", envioDatos);
}