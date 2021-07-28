/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	// declarar variables
	let numero;
	let numeroMax;
	let numeroMin;
	let flag = 1;      //el flag lo utilizo  para poder entrar al primer if que le da valor a mis dos variables, 
	let respuesta;    //y luego me compara los numeros ingresados con los que almaceno

	do {
		numero = parseInt(prompt("Ingrese un número"));

		while (isNaN (numero)) {
			numero = parseInt(prompt("Ese dato no es un número, ingrese un número por favor."));
		}

		if (flag) {  //como flag va a valer 1 (True), va a entrar acá, y después directamente va al  próximo else if y luego va a valer 0.

			numeroMax = numero;
			numeroMin = numero;
			flag = 0;

		} else if (numero > numeroMax){
			numeroMax = numero;
		} else if (numero < numeroMin) {
			numeroMin = numero;
		}

		respuesta = prompt("¿Quiere seguir ingresando números?");

	} while (respuesta == "si");

	document.getElementById("txtIdMaximo").value = numeroMax;
	document.getElementById("txtIdMinimo").value = numeroMin;

}
  //otra manera de hacerlo
/* 
function mostrar() {
	let numero;
	let numeroMax;
	let numeroMin;
	let flag = 1;
	let = respuesta;

	do {
		numero = parseInt(prompt("Ingrese un numero"));
	
		while (isNaN(numero)) {
			numero = parseInt(prompt("Ese dato no es un número, ingrese un número por favor."));
		}

		if (flag || numero > numeroMax) {
			maximo = numero;
		}
		if (flag || numero < numeroMin) {
			minimo = numero;
			flag = 0;
		}
		respuesta = prompt("Quiere seguir ingresando números?")

	} while (respuesta == "si");
 
	document.getElementById("txtIdMaximo").value = numeroMax;
	document.getElementById("txtIdMinimo").value = numeroMin;

} */