function mostrar() {
  let precio;
  let tipo;
  let cantidad;
  let acumCal = 0;
  let acumCemento = 0;
  let acumArena = 0;
  let contadorArena = 0;
  let contadorCal = 0 ;
  let contadorCemento = 0;
  let precioArena = 0;
  let precioCemento = 0;
  let precioCal = 0;
  let importeBruto;
  let importeNeto = 0;
  let descuento;
  let maxTipo;
  let maxPrecio;
  let seguir;
  let flagCaro = 1;
  let subtotal;
  let respuesta;

  do {
    tipo = prompt("Ingrese por favor el producto que desea comprar (arena / cal / cemento).").toLowerCase();
    
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
      tipo = prompt("Ese prodcuto no se encontro, ingrese por favor el producto que desea comprar (arena / cal / cemento).").toLowerCase();
   
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de productos."));

    precio = parseFloat(prompt("Ingrese el precio del producto"));

    while (precio <= 0) {
      precio = parseFloat(prompt("Ese precio no es válido, ingrese el precio del producto por favor"));
    }

    if (cantidad > 30) {
      descuento = 0.25;
    } else if (cantidad > 10){
      descuento = 0.10;
    }
    
    if (flagCaro) {
      maxPrecio = tipo;
      flagCaro = 0;
    } else if (precio > maxPrecio) {
      maxPrecio = precio;
}

    switch (tipo) {
      case "arena":
        acumArena = acumArena + cantidad;
        precioArena = precio;
        contadorArena++;
        break;
      case "cal":
        acumCal = acumCal + cantidad;
        precioCal = precio;
        contadorCal++;
        break;
      case "cemento":
        acumCemento = acumCemento + cantidad;
        precioCemento = precio;
        contadorCemento++;
        break;
    }



    respuesta = prompt("¿Dese seguir ingresando cosas (si o no)?")

  } while (respuesta == "si");

  if (acumCemento > acumArena && acumCemento > acumCal) {
    maxTipo = "cemento";
  } else if (acumArena > acumCemento && acumArena > acumCal) {
    maxTipo = "arena";
  } else {
    maxTipo = "cal";
  }

  if (precioCemento > precioArena && precioCemento > precioCal) {
    maxPrecio = "cemento";
  } else if (precioArena > precioCemento && precioArena > precioCal) {
    maxPrecio = "arena";
  } else {
    maxPrecio = "cal";
  }







}