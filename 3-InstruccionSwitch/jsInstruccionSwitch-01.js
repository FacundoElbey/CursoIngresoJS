function mostrar() {
	let mes = document.getElementById("txtIdMes").value;
	switch (mes) {                              // en el caso de que la variable mes tome el valor...
		case "Enero":                           //tome el valor enero
			alert("que comiences bien el año!");
			break;
		case "Marzo":
			alert("que comiences bien las clases!!!");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("felices vacaciones!!!.");
			break;
	}

}//FIN DE LA FUNCIÓN