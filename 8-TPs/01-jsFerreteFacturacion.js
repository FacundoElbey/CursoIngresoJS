/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt (document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt (document.getElementById("txtIdPrecioTres").value);
    resultado = precioUno + precioDos + precioTres;
    alert ("El subtotal de sus productos es $" +resultado);
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt (document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt (document.getElementById("txtIdPrecioTres").value);
    resultado = (precioUno + precioDos + precioTres) / 3 ;
    alert ("El promedio de sus productos es $" +resultado);
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let subtotalPrecios;
    let resultado;
    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt (document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt (document.getElementById("txtIdPrecioTres").value);
    subtotalPrecios = precioUno + precioDos + precioTres;
    resultado = subtotalPrecios + subtotalPrecios * 21 / 100;
    alert ("El total de sus productos es $" +resultado);
}