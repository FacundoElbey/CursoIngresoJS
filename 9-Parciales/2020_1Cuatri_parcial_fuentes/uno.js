/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
-------------------------------------------------------------------------------------------------------------
estrategia de resolución
1. declarar variables
cosas que le tengo que pedir al usuario---> tipo/precio/cantidad/marca/fabricante
punto a---> cantAlBarato/fabAlBarato/precioAlBarato
punto b---> acumA / acumB / acumJ / contadorA / contadorB / contadorJ
punto c---> acumJ utilizada anteriormente
-------------------------------------------------------------------------------------------------------------
2. generar un bucle que se repita 5 veces (va a ser un FOR)
2.1 pido tipo / valido tipo
2.2 pido precio / valido precio
2.3 pido cantidad / valido cantidad
2.4 pido marca
2.5 pido fabricante
-------------------------------------------------------------------------------------------------------------
3. cosas que tengo que hacer para poder contestar el punto a
3.1--->me fijo si es un alcohol
si es alcohol ---> me fijo si es la primera vez que se ingresa alcochol
o ya se habia ingresado previamente (con flag)
si es la primera vez cambio el flag. Y guardo el precio, la cantidad y el fabricante como alcohol barato
y por cada alcohol me fijo si es más barato que el que ya tengo como barato, y de ser asi actualizo
los datos del alcohol barato

3.2 resolver punto b
me fijo el tipo de producto (barbijo, alcohol o jabon) y actualizo el acumulador y contador según corresponda
-------------------------------------------------------------------------------------------------------------
4. cosas que hacer despues del for
me fijo cual fue el tipo con mas unidades vendidas y calculo el promedio

mostrar los resultados.
*/

function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let cantAlBarato;
	let fabAlBarato;
	let precioAlBarato;
	let flagAlcohol = 1;
	let acumA = 0;
	let acumB = 0;
	let acumJ = 0;
	let contadorA = 0;
	let contadorB = 0;
	let contadorJ = 0;
	let promedio;
	let mayorTipo;
	let promedioCompra;

	for (let i = 0; i < 5; i++){
		
		tipo = prompt("Ingrese el tipo de producto (barbijo/jabon/alcohol)").toLowerCase(); //el tolowercase es para pasar todo a minuscula

		while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
			tipo = prompt("Ese tipo no es válido, por favor ingrese el tipo de producto (barbijo/jabon/alcohol)").toLowerCase();
		}

		precio = parseFloat(prompt("Ingrese el precio del producto"));

		while (precio < 100 || precio > 300) {
			precio = parseFloat(prompt("Este precio no es válido, ingrese un precio entre $100 y $300"));
		}

		cantidad = parseInt(prompt("Ingrese la cantidad de productos."));

		while (isNaN(cantidad) || cantidad <= 0 || cantidad > 1000) {
			cantidad = parseInt(prompt("Esta cantidad no es valida, ingrese una cantidad entre 1 y 1000"));
		}

		marca = prompt("Ingrese la marca por favor");

		fabricante = prompt("Ingrese el fabricante por favor");

		switch (tipo) {
			case "alcohol":

				if (flagAlcohol) {
					cantAlBarato = cantidad;
					fabAlBarato = fabricante;
					precioAlBarato = precio;
					flagAlcohol = 0;
				} else if (precioAlBarato > precio) {
					cantAlBarato = cantidad;
					fabAlBarato = fabricante;
					precioAlBarato = precio;
				}

				acumA = acumA + cantidad;
				contadorA++;

				break;
			
			case "barbijo":
				acumB = acumB + cantidad;
				contadorB++;
				break;
			
			case "jabon":
				acumJ = acumJ + cantidad;
				contadorJ++;
				break;
		}
	}

	alert("El alcohol más barato lo fabrico: " + fabricante + " y hay: " + cantidad);

	if (acumB > acumA && acumB > acumJ) {
		mayorTipo = "barbijo";
		promedio = acumB / contadorB ;
	} else if (acumA > acumB && acumA > acumJ) {
		mayorTipo = "alcohol";
		promedio = acumA / contadorA;
	} else {
		mayorTipo = "jabon";
		promedio = acumJ / contadorJ;
	}

	alert("El promedio por compras del producto " + mayorTipo + " es: $" + promedio);

	alert("Las unidades de jabones que hay en total es: " + acumJ);

}
