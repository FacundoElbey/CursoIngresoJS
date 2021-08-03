function mostrar()
{
	let respuesta;
	
	for (; ;){

		respuesta = parseInt(prompt("Ingrese un número por favor."));
		
		while (isNaN (respuesta)) {
			respuesta = parseInt(prompt("Ese dato no es un número, ingrese un número por favor."));
		}

		if (respuesta == 9) {
			break;
		}

	}



}//FIN DE LA FUNCIÓN