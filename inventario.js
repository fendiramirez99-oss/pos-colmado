const inventario = [
  { id: "001", nombre: "Refresco 500ml", precio: 50, stock: 20, tieneITBIS: true },
  { id: "002", nombre: "Agua 600ml", precio: 25, stock: 50, tieneITBIS: false },
  { id: "003", nombre: "Jabon de Cuaba", precio: 40, stock: 15, tieneITBIS: true }
];

function mostrarInventario() {
  console.log("\n=== INVENTARIO DEL SISTEMA POS ===");
  inventario.forEach(function(producto) {
    let itbis = producto.tieneITBIS ? producto.precio * 0.18 : 0;
    let precioFinal = producto.precio + itbis;
    console.log("ID: " + producto.id + " | " + producto.nombre + " | Stock: " + producto.stock + " | Precio Base: RD$" + producto.precio + " | Total con ITBIS: RD$" + precioFinal.toFixed(2));
  });
  console.log("=================================\n");
}

function agregarProducto(id, nombre, precio, stock, tieneITBIS) {
  inventario.push({ id: id, nombre: nombre, precio: precio, stock: stock, tieneITBIS: tieneITBIS });
  console.log("\n✅ Producto '" + nombre + "' agregado correctamente.");
}

function procesarVenta(id, cantidad) {
  let producto = inventario.find(function(p) {
    return p.id === id;
  });

  if (!producto) {
    console.log("\n❌ Error: El producto con ese ID no existe.");
    return;
  }

  if (producto.stock < cantidad) {
    console.log("\n❌ Error: Stock insuficiente. Solo quedan " + producto.stock + " unidades.");
    return;
  }

  producto.stock -= cantidad;

  let subtotal = producto.precio * cantidad;
  let itbisUnitario = producto.tieneITBIS ? producto.precio * 0.18 : 0;
  let itbisTotal = itbisUnitario * cantidad;
  let totalPagar = subtotal + itbisTotal;

  console.log("\n=================================");
  console.log("       FACTURA DE VENTA          ");
  console.log("=================================");
  console.log("Producto:      " + producto.nombre);
  console.log("Precio Unit.:  RD$" + producto.precio.toFixed(2));
  console.log("Cantidad:      " + cantidad);
  console.log("Subtotal:      RD$" + subtotal.toFixed(2));
  console.log("ITBIS (18%):   RD$" + itbisTotal.toFixed(2));
  console.log("---------------------------------");
  console.log("TOTAL A PAGAR: RD$" + totalPagar.toFixed(2));
  console.log("=================================");
  console.log("✅ Venta realizada con éxito.");
}

module.exports = {
  inventario: inventario,
  mostrarInventario: mostrarInventario,
  agregarProducto: agregarProducto,
  procesarVenta: procesarVenta


};// Lista para registrar los clientes con deudas (fiados)
const listaFiados = [
  // Ejemplo: { idCliente: "1", nombre: "Juan Pérez", deuda: 350, telefono: "809-555-1234" }
];module.exports = {
  inventario: inventario,
  mostrarInventario: mostrarInventario,
  agregarProducto: agregarProducto,
  procesarVenta: procesarVenta
};
const listaFiados = [];

function registrarFiado(nombreCliente, telefono, monto) {
  listaFiados.push({
    id: listaFiados.length + 1,
    nombre: nombreCliente,
    telefono: telefono,
    deuda: monto
  });
  console.log("Fiado registrado con exito para " + nombreCliente);
}

function mostrarFiados() {
  console.log("\n--- LISTA DE FIADOS ---");
  if (listaFiados.length === 0) {
    console.log("No hay fiados registrados.");
    return;
  }
  listaFiados.forEach(function(f) {
    console.log("ID: " + f.id + " | Cliente: " + f.nombre + " | Deuda: RD$" + f.deuda);
  });
}

module.exports = {
  inventario: inventario,
  mostrarInventario: mostrarInventario,
  agregarProducto: agregarProducto,
  procesarVenta: procesarVenta,
  listaFiados: listaFiados,
  registrarFiado: registrarFiado,
  mostrarFiados: mostrarFiados
};