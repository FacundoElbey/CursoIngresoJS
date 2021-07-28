function mostrar()
{
	let contador = 0;
	let acumulador;
	let numeroIngresado;
	let promedio;
	acumulador=0;
	
	while (contador < 5) {
		numeroIngresado = parseInt(prompt("Ingrese un número por favor"));
		while (isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Eso no es un numero. Ingrese un número por favor"));
		}
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}

	promedio = acumulador / contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	
}//FIN DE LA FUNCIÓN