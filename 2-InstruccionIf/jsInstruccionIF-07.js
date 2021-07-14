function mostrar()
{

	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para no ser soltero");
	}
	

}//FIN DE LA FUNCIÓN