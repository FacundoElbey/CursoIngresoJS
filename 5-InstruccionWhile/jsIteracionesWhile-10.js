/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 

	let numeroIngresado;
	let cantidadNegativos = 0;
	let	cantidadPositivos = 0;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantidadCeros = 0;
	let cantidadPares = 0;
	let promPositivos = 0;
	let promNegativos = 0;
	let difPositivosNegativos;
	let respuesta;

	do {
		numero = parseInt(prompt("Ingrese un número"));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Ese dato no es un número, ingrese un número por favor."));
		}

		if (numeroIngresado % 2 == 0) {
			cantidadPares++;
		}
		if (numeroIngresado == 0) {
			cantidadCeros++;
		}
		else if (numeroIngresado > 0) {
			cantidadPositivos++;
			sumaPositivos += numeroIngresado;
		}
		else {
			cantidadNegativos++;
			sumaNegativos += numeroIngresado;
		}
		

		respuesta = prompt("Desea seguir ingresando numeros? si/no");
		
	} while (respuesta == "si");

	if(cantidadPositivos > 0){
		promPositivos = sumaPositivos / cantidadPositivos;
		alert("El promedio de positivos es de: " + promPositivos);
		//document.write("El promedio de positivos es de: " + promPositivos + "</br>");
	}else{
		alert("No hay numeros positivos");
		//document.write("No hay numeros positivos </br>");
	}

	if(cantidadNegativos > 0){
		promNegativos = sumaNegativos / cantidadNegativos;
		alert("El promedio de negativos es de: " + promNegativos);
		//document.write("El promedio de negativos es de: " + promNegativos + "</br>");
	}else{
		alert("No hay numeros negativos");
		//document.write("No hay numeros negativos </br>");
	}

	difPositivosNegativos = cantidadPositivos - cantidadNegativos;

	alert("La cantidad de positivos es de: " + cantidadPositivos);
	alert("La cantidad de negativos es de: " + cantidadNegativos);
	
	alert("La suma de positivos es de: " + sumaPositivos);
	alert("La suma de negativos es de: " + sumaNegativos);
	
	alert("La cantidad de numeros pares es de: " + cantidadPares);
	alert("La suma de ceros es de: " + cantidadCeros);
	alert("La diferencia de positivos y negativos: " + difPositivosNegativos);

}//FIN DE LA FUNCIÓN