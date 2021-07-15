function mostrar()
{

	let mes = document.getElementById("txtIdMes").value;
	switch (mes) {
		case ("Febrero"):
			alert("Este mes no tiene más de 29 días");
			break;
		// con el default digo que salvo febrero todas las demas opciones tendrían 30 o más días
	    //case ("Marzo"):
		//case ("Enero"):
		//case ("Abril"):
		//case ("Mayo"):
		//case ("Junio"):
		//case ("Julio"):
		//case ("Agosto"):
		//case ("Septiembre"):
		//case ("Octubre"):
		//case ("Noviembre"):
		//case ("Diciembre"): 
		default :
			alert("Este mes tiene 30 o más días");
			break;
	}	
	
	


}//FIN DE LA FUNCIÓN