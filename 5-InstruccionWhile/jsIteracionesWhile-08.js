/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//1- declaro variables (numero / multiplicacionNegativos / sumaPositivos  / respuesta )
	let numero;
	let multiplicacionNegativos = 1;
	let sumaPositivos = 0;
	let respuesta;

	//2- tengo que generar un bucle del tipo mientras el usuario quiera (do - while)
	do {  //3- cosas que hacer en el bucle
		//3.1 pido numero
		numero = parseInt(prompt("Ingrese un número por favor."));

		//3.2 valido que sea un numero
		while (isNaN(numero)) {
			numero = parseInt(prompt("Ese dato no es un número, ingrese un número por favor."));
		}
		
		//3.3 analizo el signo del número

		if (numero >= 0) {
			sumaPositivos = sumaPositivos + numero;
		} else {
			multiplicacionNegativos = multiplicacionNegativos * numero;
		}

		respuesta = prompt("¿Quiere ingresar otro número (si o no)?");
	} while (respuesta == "si");

     //4- muestra los resultados

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN

//estrategia de resolucion
//1- declaro variables (numero / multiplicador de negativo / acumulador de positivo  / seguir )
//2- tengo que generar un bucle del tipo mientras el usuario quiera (do - while)
//3- cosas que hacer en el bucle
//3.1 pido número
//3.2 valido que sea un número
//3.3 analizo el signo del número
// si el número es positivo ---> lo sumo al acumulador de positivos
// si el número es negativo ---> lo multiplico al multiplicador de negativos
//4- muestra los resultados