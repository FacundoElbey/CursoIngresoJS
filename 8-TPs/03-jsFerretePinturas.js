/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);
    let centigrados;
    centigrados = (32 * fahrenheit - 32) * 5 / 9;
    alert(fahrenheit + " Fahrenheit son " + centigrados + " centígrados.");
}

function CentigradosFahrenheit () 
{
    let fahrenheit;
    let centigrados = parseInt(document.getElementById("txtIdTemperatura").value);
    fahrenheit = (32 * centigrados * 9/5) + 32;
    alert(centigrados + " Fahrenheit son " + fahrenheit + " centígrados.");
}
