/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    let alambre;
    alambre = ancho * largo * 3;
    alert("La cantidad de alambre a comprar es " + alambre + "m.");
}
function Circulo () 
{
    let radio = parseInt(document.getElementById("txtIdRadio").value);
    let alambre;
    alambre = 3 * 2 * 3, 14 * radio;
    alert("La cantidad de alambre a comprar es " + alambre + "m.");
}
function Materiales () 
{
	let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    let perimetro;
    let bolsaCemento;
    let bosaCal;

    perimetro = ancho * largo;
    bolsaCemento = perimetro * 2;
    bolsaCal = perimetro * 3;
    alert("Se necesitarán " + bolsaCemento + " bolsas de cemento y "+bolsaCal+" bolsas de cal.");
    al
}