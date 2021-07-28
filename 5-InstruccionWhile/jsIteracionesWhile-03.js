/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	/*let claveAlmacenada = "utn750";
	let claveIngresada;

	while (claveAlmacenada != claveIngresada) {
		claveIngresada = prompt("ingrese el número clave.");
		
	}*/
	
	let claveAlmacenada = "utn750";
	let clave;

// pido el dato
	clave = prompt("ingrese el número clave.");

	while (claveAlmacenada != clave) {
		// pongo una condicion que al ser verdadera, el dato sea falso 
		// mientras el dato sea incorrecto, lo informo, y lo pido de nuevo
		clave = prompt("Clave incorrecta, reintentar, por favor.");
	}
		
	alert("Clave correcta!");

}//FIN DE LA FUNCIÓN
