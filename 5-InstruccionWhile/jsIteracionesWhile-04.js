/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (numeroIngresado < 0 || numeroIngresado > 10) {

		numeroIngresado = parseInt(prompt("Número incorrectro, ingrese un número entre 0 y 9."));
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN