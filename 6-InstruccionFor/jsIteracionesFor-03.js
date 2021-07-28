function mostrar()
{
	let repeticiones;

	repeticiones = parseInt(prompt("Ingrese la cantidad de veces que desea ver el mensaje."));

	while (isNaN (repeticiones)) {
		repeticiones = parseInt(prompt("Ese dato no es un número, ingrese un número por favor."));
	}

	for (let i = 0; i < repeticiones; i++){
		alert("Hola UTN FRA.");
	}


}//FIN DE LA FUNCIÓN