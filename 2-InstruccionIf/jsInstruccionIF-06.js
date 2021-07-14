function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad > 17){
		alert ("Es adulto");
	}
	else if (edad < 13) {
		alert ("Es niño");
	} else {
		alert ("Es adolescente");
	}
}//FIN DE LA FUNCIÓN