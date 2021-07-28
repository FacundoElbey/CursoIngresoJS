function mostrar()
{
	let precio = 15000;
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	let porcAumento = 0;
	let porDescuento = 0;
	let aumento;
	let descuento;

	switch (estacion) {
		
		case "Invierno":
			if (destino == "Bariloche") {
				porcAumento =  20 / 100;
			} else if (destino == "Cataratas" || destino == "Cordoba") {
				porDescuento =  10 / 100;
			} else {
				porDescuento= 20 / 100;
			}
			break;
		
		case "Verano":
			if (destino == "Bariloche") {
				porDescuento= 20 / 100;
			} else if (destino == "Cataratas" || destino == "Cordoba") {
				porcAumento= 10 / 100;
			} else {
				porcAumento = 20 / 100;
			}
			break;
		
		case "Otoño": case "Primavera":
			switch (destino) {
				case "Bariloche": case "Cataratas": case "Mar del plata":
					porcAumento = 10 / 100;
					break;
				case "Cordoba":
					precio = precio;
					break;
			}
	
	}
	aumento = precio * porcAumento;
	descuento = precio * porDescuento;
	precio = precio + aumento - descuento;
	alert("Su tarifa es de $" + precio);
			}