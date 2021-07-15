function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;
	switch (destino) {
		case "Bariloche": case "Ushuaia":
			alert("Este lugar es frio.");
			break;
		case "Mar del plata": case "Cataratas":
			alert("En este lugar hace calor.");
			break;
	}

}//FIN DE LA FUNCIÓN