function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	// si la edad esta dentro del rango de adolescente ------> es adolescente
	//if (edad < 18 && edad > 12) //si edad es menor a 18 y mayor a 12 sale el alert
	//{
	//	alert ("Usted es adolescente!");
	//}

	//Si la edad no esta fuera del rango de adolescente -----> es adolescente
	if (!(edad > 17 || edad < 13)) { //con el NOT doy vuelta el valor de la tabla de verdad
	alert ("Usted es adolescente");
    }
}
//FIN DE LA FUNCIÓN