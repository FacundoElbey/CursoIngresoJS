function mostrar()
{

	let mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero": case "Marzo": case "Mayo": case "Julio": case "Agosto": case "Octubre": case "Diciembre":
			alert("TTiene 31 días");
			break;
		case "Abril": case "Junio": case "Septiembre": case "Noviembre":
			alert ("Tiene 30 días");
			break;
		case "Febrero":
			alert("Tiene 28 días");
			break;
	}

}//FIN DE LA FUNCIÓN