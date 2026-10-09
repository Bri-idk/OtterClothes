const CART_STORAGE_KEY = "otterCarrito";
const PRODUCTS_STORAGE_KEY = "misProductosFormulario";
const COUPONS = {
  DESCUENTO10: { type: "percentage", value: 0.1, label: "10% OFF" },
  OTTER15: { type: "percentage", value: 0.15, label: "15% OFF" },
  PROMO50: { type: "fixed", value: 50, label: "$50 OFF" },
};
const CATEGORY_IMAGES = {
  camisas: {
    name: "Camisas / Playeras",
    image: "https://placehold.co/600x700/F8DFB7/49261E?text=Camisas+%2F+Playeras",
  },
  pantalones: {
    name: "Pantalones / Jeans",
    image: "https://placehold.co/600x700/C9E7F6/35509a?text=Pantalones+%2F+Jeans",
  },
  vestidos: {
    name: "Vestidos",
    image: "https://placehold.co/600x700/F6C1D5/49261E?text=Vestidos",
  },
};
const ORDERS_STORAGE_KEY = "otterPedidos"; // Constante en local storage propia del demo sin backend

let cart = [];
let appliedCoupon = null;

const cartItemsList = document.getElementById("cartItemsList");
const cartCountBadge = document.getElementById("cartCount");
const subtotalAmountEl = document.getElementById("subtotalAmount");
const discountRowEl = document.getElementById("discountRow");
const discountAmountEl = document.getElementById("discountAmount");
const totalAmountEl = document.getElementById("totalAmount");
const couponInputEl = document.getElementById("couponInput");
const applyCouponBtn = document.getElementById("applyCouponBtn");
const couponMessageEl = document.getElementById("couponMessage");
const checkoutBtn = document.getElementById("checkoutBtn");
const confirmationEl = document.getElementById("confirmationSection");
const restartOrderBtn = document.getElementById("restartOrderBtn");
const itemCountLabel = document.getElementById("itemCountLabel");
const orderIdEl = document.getElementById("orderId");
const cartDataError = document.getElementById("cartDataError");

function formatCurrency(amount) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
  }).format(amount);
}

function generateOrderId() {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `OC-${ts}-${rand}`;
}

function showCartError(message) {
  if (!cartDataError) return;
  cartDataError.textContent = message;
  cartDataError.classList.remove("d-none");
}

function clearCartError() {
  cartDataError?.classList.add("d-none");
  if (cartDataError) cartDataError.textContent = "";
}

function readSkuProducts() {
  const saved = localStorage.getItem(PRODUCTS_STORAGE_KEY);
  if (!saved) return [];
  const products = JSON.parse(saved);
  if (!Array.isArray(products)) {
    throw new TypeError("Los productos guardados tienen un formato inválido.");
  }
  return products;
}

function resolveProduct(id) {
  if (typeof id === "number") {
    return outfits.find((product) => product.id === id) ?? null;
  }

  if (typeof id !== "string") return null;

  const product = readSkuProducts().find((entry) => entry.id === id);
  if (!product) return null;

  const category = CATEGORY_IMAGES[product.categoria] ?? {
    name: product.categoria,
    image: "https://placehold.co/600x700/F8DFB7/49261E?text=Prenda",
  };

  return {
    id: product.id,
    nombre: product.nombre,
    categoria: category.name,
    precio: product.precio,
    imagen: category.image,
    sku: product.sku,
    stock: product.stock,
  };
}

function getCartKey(item) {
  return JSON.stringify([item.id, item.talla]);
}

function getCartQuantityForProduct(id) {
  return cart
    .filter((item) => item.id === id)
    .reduce((total, item) => total + item.cantidad, 0);
}

function loadCart() {
  clearCartError();
  let saved;
  try {
    saved = localStorage.getItem(CART_STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    if (!Array.isArray(parsed)) {
      throw new TypeError("El carrito guardado tiene un formato inválido.");
    }
    cart = parsed.filter(
      (item) =>
        item &&
        (typeof item.id === "number" || typeof item.id === "string") &&
        typeof item.talla === "string" &&
        Number.isInteger(item.cantidad) &&
        item.cantidad > 0,
    );
    if (cart.length !== parsed.length) {
      showCartError("Se encontraron artículos dañados y no se pudieron cargar.");
    }
  } catch (error) {
    cart = [];
    showCartError(`No se pudo leer el carrito guardado: ${error.message}`);
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    clearCartError();
    return true;
  } catch (error) {
    showCartError(`No se pudo guardar el carrito: ${error.message}`);
    return false;
  }
}

// Guardar el pedido en local storage por ausencia de backend
function savePedido(pedido) {
  try {
    const saved = localStorage.getItem(ORDERS_STORAGE_KEY); // Acceder a los pedidos en local storage
    const pedidos = saved ? JSON.parse(saved) : []; // Pasar a objeto de js si existe el valor, [] en caso contrario
    if (!Array.isArray(pedidos)) {
      throw new TypeError("Los pedidos guardados tienen un formato inválido");
    }
    pedidos.push(pedido);
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(pedidos));
    return true;
  } catch (error) {
    showCartError(`No se pudo guardar el pedido: ${error.message}`);
    return false;
  }
}

function renderCart() {
  cartItemsList.replaceChildren();

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="empty-cart-container">
        <i class="bi bi-bag-x empty-cart-icon"></i>
        <p class="empty-cart-title">Tu carrito está vacío</p>
        <p class="empty-cart-desc">Explora los outfits y prendas y agrega lo que más te guste.</p>
        <a href="lista_de_items.html" class="btn-explore">Ver catálogo</a>
      </div>
    `;
    updateCartCountBadge(0);
    updateTotalsUI(0, 0, 0);
    setCheckoutEnabled(false);
    return;
  }

  let totalItems = 0;
  let containsUnavailableProduct = false;
  let exceedsAvailableStock = false;
  cart.forEach((item) => {
    totalItems += item.cantidad;
    let product;
    try {
      product = resolveProduct(item.id);
    } catch (error) {
      showCartError(`No se pudo leer la información de un producto: ${error.message}`);
    }

    if (!product) {
      containsUnavailableProduct = true;
      cartItemsList.appendChild(buildItemElement({
        ...item,
        title: "Producto no disponible",
        subtitle: `Talla ${item.talla} · Ya no está en el catálogo`,
        price: 0,
        img: null,
        unavailable: true,
      }));
      return;
    }

    const sku = typeof item.id === "string";
    if (sku && getCartQuantityForProduct(item.id) > product.stock) {
      exceedsAvailableStock = true;
      showCartError(`La cantidad de ${product.nombre} supera el inventario disponible.`);
    }
    const subtitle = sku
      ? `Talla ${item.talla} · ${product.categoria} · SKU ${product.sku}`
      : `Talla ${item.talla} · ${product.categoria}`;
    cartItemsList.appendChild(buildItemElement({
      ...item,
      cartKey: encodeURIComponent(getCartKey(item)),
      title: product.nombre,
      subtitle,
      price: product.precio,
      img: product.imagen,
      stock: sku ? product.stock : null,
      unavailable: false,
    }));
  });

  updateCartCountBadge(totalItems);
  calculateAndRender();
  setCheckoutEnabled(!containsUnavailableProduct && !exceedsAvailableStock);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function buildItemElement(item) {
  const el = document.createElement("div");
  el.className = "cart-item";
  const title = escapeHtml(item.title);
  const subtitle = escapeHtml(item.subtitle);
  const key = item.cartKey ?? encodeURIComponent(getCartKey(item));
  const imgContent = item.img
    ? `<img src="${escapeHtml(item.img)}" alt="${title}">`
    : `<div class="item-image-box"></div>`;
  const skuStockLimitReached =
    typeof item.id === "string" &&
    !item.unavailable &&
    getCartQuantityForProduct(item.id) >= item.stock;

  el.innerHTML = `
    <div class="row align-items-center g-3">
      <div class="col-auto">
        <div class="item-image-wrapper">${imgContent}</div>
      </div>
      <div class="col">
        <p class="item-title mb-0">${title}</p>
        <p class="item-subtitle mb-1">${subtitle}</p>
        <div class="qty-controls mt-2">
          <button class="btn-qty" data-cart-action="decrease" data-cart-key="${key}" title="Restar">−</button>
          <span class="qty-number">${item.cantidad}</span>
          <button class="btn-qty" data-cart-action="increase" data-cart-key="${key}" title="Sumar" ${skuStockLimitReached || item.unavailable ? "disabled" : ""}>+</button>
          <button class="btn-delete ms-2" data-cart-action="remove" data-cart-key="${key}" title="Eliminar">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
      <div class="col-auto text-end">
        <div class="item-price">${formatCurrency(item.price * item.cantidad)}</div>
      </div>
    </div>
  `;
  return el;
}

function updateCartItem(key, action) {
  let parsedKey;
  try {
    parsedKey = JSON.parse(decodeURIComponent(key));
  } catch {
    showCartError("No se pudo identificar el artículo del carrito.");
    return;
  }
  const itemIndex = cart.findIndex(
    (item) => item.id === parsedKey[0] && item.talla === parsedKey[1],
  );
  if (itemIndex < 0) return;

  const item = cart[itemIndex];
  if (action === "remove") {
    cart.splice(itemIndex, 1);
  } else if (action === "decrease") {
    item.cantidad -= 1;
    if (item.cantidad < 1) cart.splice(itemIndex, 1);
  } else if (action === "increase") {
    if (typeof item.id === "string") {
      let product;
      try {
        product = resolveProduct(item.id);
      } catch (error) {
        showCartError(`No se pudo comprobar el inventario: ${error.message}`);
        return;
      }
      if (!product || getCartQuantityForProduct(item.id) >= product.stock) {
        showCartError("No hay más unidades disponibles en inventario.");
        return;
      }
    }
    item.cantidad += 1;
  }

  if (saveCart()) renderCart();
}

cartItemsList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-cart-action]");
  if (!button) return;
  updateCartItem(button.dataset.cartKey, button.dataset.cartAction);
});

function updateTotalsUI(subtotal, discount, total) {
  if (subtotalAmountEl) subtotalAmountEl.textContent = formatCurrency(subtotal);
  if (totalAmountEl) totalAmountEl.textContent = formatCurrency(total);

  if (discount > 0) {
    discountRowEl?.classList.remove("d-none");
    if (discountAmountEl) {
      discountAmountEl.textContent = `− ${formatCurrency(discount)}`;
    }
  } else {
    discountRowEl?.classList.add("d-none");
  }
}

function calculateAndRender() {
  const subtotal = cart.reduce((sum, item) => {
    try {
      const product = resolveProduct(item.id);
      return product ? sum + product.precio * item.cantidad : sum;
    } catch (error) {
      showCartError(`No se pudo calcular el subtotal: ${error.message}`);
      return sum;
    }
  }, 0);
  let discount = 0;

  if (appliedCoupon) {
    discount =
      appliedCoupon.type === "percentage"
        ? subtotal * appliedCoupon.value
        : appliedCoupon.value;
    if (discount > subtotal) discount = subtotal;
  }

  updateTotalsUI(subtotal, discount, subtotal - discount);
}

function updateCartCountBadge(count) {
  if (cartCountBadge) cartCountBadge.textContent = count;
  if (itemCountLabel) {
    itemCountLabel.textContent = `${count} ${count === 1 ? "artículo" : "artículos"}`;
  }
}

function setCheckoutEnabled(enabled) {
  if (!checkoutBtn) return;
  checkoutBtn.disabled = !enabled;
  checkoutBtn.style.opacity = enabled ? "1" : "0.5";
}

applyCouponBtn?.addEventListener("click", () => {
  const code = couponInputEl.value.trim().toUpperCase();
  if (!code) {
    showCouponMessage("Por favor ingresa un código de cupón.", "text-danger");
    return;
  }

  if (COUPONS[code]) {
    appliedCoupon = COUPONS[code];
    showCouponMessage(
      `¡Cupón <strong>${code}</strong> aplicado! (${appliedCoupon.label})`,
      "text-success",
    );
    renderActiveCouponBadge(code, appliedCoupon.label);
    calculateAndRender();
  } else {
    appliedCoupon = null;
    showCouponMessage(
      "Código inválido. Prueba: <strong>DESCUENTO10</strong>, <strong>OTTER15</strong> o <strong>PROMO50</strong>",
      "text-danger",
    );
    removeActiveCouponBadge();
    calculateAndRender();
  }
});

function showCouponMessage(html, cls) {
  if (!couponMessageEl) return;
  couponMessageEl.innerHTML = html;
  couponMessageEl.className = `mt-2 fw-semibold ${cls}`;
  couponMessageEl.style.fontSize = "0.88rem";
}

function renderActiveCouponBadge(code, label) {
  removeActiveCouponBadge();
  const badge = document.createElement("div");
  badge.id = "activeCouponBadge";
  badge.className = "coupon-active-badge mt-2";
  badge.innerHTML = `
    <i class="bi bi-tag-fill"></i>
    <span>${code} · ${label}</span>
    <button class="btn-remove-coupon" title="Quitar cupón" id="removeCouponBtn">
      <i class="bi bi-x-lg"></i>
    </button>
  `;
  couponMessageEl?.after(badge);
  document.getElementById("removeCouponBtn")?.addEventListener("click", removeCoupon);
}

function removeActiveCouponBadge() {
  document.getElementById("activeCouponBadge")?.remove();
}

function removeCoupon() {
  appliedCoupon = null;
  if (couponInputEl) couponInputEl.value = "";
  if (couponMessageEl) couponMessageEl.innerHTML = "";
  removeActiveCouponBadge();
  calculateAndRender();
}

checkoutBtn?.addEventListener("click", () => {
  if (cart.length === 0) return;

  const invalidProduct = cart.some((item) => {
    try {
      return !resolveProduct(item.id);
    } catch {
      return true;
    }
  });
  if (invalidProduct) {
    showCartError("Quita los artículos que ya no están disponibles antes de finalizar.");
    return;
  }

  for (const item of cart) {
    if (typeof item.id !== "string") continue;
    const product = resolveProduct(item.id);
    if (getCartQuantityForProduct(item.id) > product.stock) {
      showCartError(`El inventario de ${product.nombre} cambió. Ajusta la cantidad antes de finalizar.`);
      return;
    }
  }

  if (!saveCart()) return;
  const orderId = generateOrderId();

  // Se genera el json del pedido para guardar en local storage
  const pedido = {
    numero: orderId,
    articulos: cart.map((item) => {
      const product = resolveProduct(item.id);
      return { // El map devuelve este objeto para cada elemento del array cart
        nombre: product.nombre,
        talla: item.talla,
        cantidad: item.cantidad,
        precioUnitario: product.precio
      };
    })
  };
  if (!savePedido(pedido)) return; // Guarda el pedido en local storage o informa el fracaso

  if (orderIdEl) orderIdEl.textContent = orderId;

  cart = []; // Aquí se vacía el carrito después del click en checkoutBtn
  if (!saveCart()) return;
  document.getElementById("cartSection")?.classList.add("d-none");
  document.getElementById("couponSection")?.classList.add("d-none");
  document.getElementById("summarySection")?.classList.add("d-none");

  confirmationEl.style.display = "block";
  setTimeout(() => {
    confirmationEl.classList.add("show");
    confirmationEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
});

function resetCartState() {
  cart = [];
  appliedCoupon = null;
  if (couponInputEl) couponInputEl.value = "";
  if (couponMessageEl) couponMessageEl.innerHTML = "";
  removeActiveCouponBadge();

  confirmationEl?.classList.remove("show");
  setTimeout(() => {
    if (confirmationEl) confirmationEl.style.display = "none";
    document.getElementById("cartSection")?.classList.remove("d-none");
    document.getElementById("couponSection")?.classList.remove("d-none");
    document.getElementById("summarySection")?.classList.remove("d-none");
  }, 350);

  if (saveCart()) renderCart();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

restartOrderBtn?.addEventListener("click", resetCartState);
window.addEventListener("storage", (event) => {
  if (event.key === CART_STORAGE_KEY || event.key === PRODUCTS_STORAGE_KEY) {
    loadCart();
    renderCart();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  loadCart();
  renderCart();
});
