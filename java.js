const productos = ["Zapatillas", "Remera", "Pantalón", "Campera", "Botas"];
const precios = [15000, 5000, 10000, 20000, 30000];
let carrito = [];
let total = 0;

function mostrarProductos() {
  console.log("Lista de productos:");
  productos.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto} - $${precios[index]}`);
  });
}

function iniciarSimulador() {
  alert("Bienvenido al Simulador de Compras");
  let continuar = true;

  while (continuar) {
    mostrarProductos();
    let seleccion = prompt(
      "Ingresa el número del producto que deseas agregar al carrito (1-5):"
    );

    let index = parseInt(seleccion) - 1;

    if (index >= 0 && index < productos.length) {
      carrito.push(productos[index]);
      total += precios[index];
      alert(`${productos[index]} ha sido agregado al carrito.`);
    } else {
      alert("Selección inválida. Intenta de nuevo.");
    }

    continuar = confirm("¿Deseas agregar otro producto?");
  }

  mostrarResumen();
}

function mostrarResumen() {
  console.log("Resumen de tu compra:");
  carrito.forEach((item, i) => {
    console.log(`${i + 1}. ${item} - $${precios[productos.indexOf(item)]}`);
  });
  alert(`Gracias por tu compra. Total a pagar: $${total}`);
}

iniciarSimulador();
