function mostrar()
{
	let numeroIngresado;
	let contador = 0;

	numeroIngresado = parseInt(prompt("Ingrese un número por favor"));
	
	while (isNaN(numeroIngresado)) {
		numeroIngresado = parseInt(prompt("Ese dato no es un número, ingrese un número por favor."));
	}

	for (let i = 1; i <= numeroIngresado; i++) {
		
		if (numeroIngresado % i == 0 ) {
			contador++;
		}

	}

	if (contador == 2) {
		alert(numeroIngresado + " es primo");
	} else {
		alert(numeroIngresado + " no es primo");
	}

	alert("La cantidad de divisores es " + cantDivisores);
}//FIN DE LA FUNCIÓN