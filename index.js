const readline = require("readline");

const {
    inventario,
    mostrarInventario,
    agregarProducto,
    procesarVenta
} = require("./inventario");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n==============================");
    console.log("       SISTEMA POS");
    console.log("==============================");
    console.log("1. Mostrar inventario");
    console.log("2. Agregar producto");
    console.log("3. Realizar venta");
    console.log("4. Salir");
    console.log("==============================");

    rl.question("Seleccione una opción (1-4): ", (opcion) => {

        switch (opcion) {

            case "1":
                mostrarInventario();
                mostrarMenu();
                break;

            case "2":
                rl.question("Ingrese el ID del producto: ", (id) => {
                    rl.question("Ingrese el nombre del producto: ", (nombre) => {
                        rl.question("Ingrese el precio: ", (precio) => {
                            rl.question("Ingrese el stock: ", (stock) => {
                                rl.question("¿Tiene ITBIS? (si/no): ", (itbis) => {

                                    const tieneITBIS = itbis.toLowerCase() === "si";

                                    agregarProducto(
                                        id,
                                        nombre,
                                        Number(precio),
                                        Number(stock),
                                        tieneITBIS
                                    );

                                    mostrarMenu();
                                });
                            });
                        });
                    });
                });
                break;

            case "3":
                rl.question("Ingrese el ID del producto: ", (id) => {
                    rl.question("Ingrese la cantidad a vender: ", (cantidad) => {

                        procesarVenta(id, Number(cantidad));

                        mostrarMenu();
                    });
                });
                break;

            case "4":
                console.log("Gracias por usar el Sistema POS. Saliendo...");
                rl.close();
                break;

            default:
                console.log("⚠️ Opción no válida. Intente de nuevo.");
                mostrarMenu();
                break;
        }
    });
}

mostrarMenu()case "3"
        rl.question("Digite el ID del producto a vender: ", (idProducto) => {
          rl.question("Digite la cantidad: ", (cantidadStr) => {
            let cantidad = parseInt(cantidadStr);
            procesarVenta(idProducto, cantidad);
            mostrarMenu();
          });
        });
        break;