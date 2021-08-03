function mostrar()
{
	let numeroIngresado;
	let cantDivisores = 0;

	numeroIngresado = parseInt(prompt("Ingrese un número por favor"));
	
	while (isNaN(numeroIngresado)) {
		numeroIngresado = parseInt(prompt("Ese dato no es un número, ingrese un número por favor."));
	}

	for (let i = 1; i <= numeroIngresado; i++) {

		if (i % 2 == 0) {
			cantDivisores++;
			console.log(i);
		}

	}

	alert("La cantidad de divisores es " + cantDivisores);
}//FIN DE LA FUNCIÓN