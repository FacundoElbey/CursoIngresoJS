/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0;
	let acumulador = 0;
	let respuesta;
	let numero;

	
	do {

		numero = parseInt(prompt("Ingrese un número por favor."));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un número por favor"));
		}

		acumulador = acumulador + numero;

		contador = contador + 1;

		respuesta = prompt("¿Quiere ingresar otro número? (si o no).");

	} while (respuesta == "si");
	
	document.getElementById("txtIdSuma").value = acumulador;
	
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}