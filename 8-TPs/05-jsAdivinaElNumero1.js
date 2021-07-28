/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/


function comenzar()
{
}

function verificar()
{

  let contadorIntentos = 0;
  let numeroRandom = Math.floor(Math.random() * 100 + 1);
  let numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  
  if (numeroRandom = numeroIngresado) {
    contadorIntentos = contadorIntentos + 1;
    alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos.");
  } else if (numeroRandom > numeroIngresado) {
    contadorIntentos = contadorIntetos + 1;
    alert("Se pasó...");
  } else {
    contadorIntentos = contadorIntetos + 1;
    alert("Falta...");
  }

}