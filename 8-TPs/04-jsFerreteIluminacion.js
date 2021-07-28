/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 /*function CalcularPrecio() {
    let precioLampara = 35;
    let cantidadLampara = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let precioFinal = 0;
    let porDescuento = 0;
    let precioDescuento;
    let descuento = 0;
    let impuesto=0 ;
    
    if (cantidadLampara >= 6) {

        precio = cantidadLampara * precioLampara;
        porDescuento = 50 / 100;
        
    } else if (cantidadLampara == 5) {

        precio = precioLampara * cantidadLampara;

        switch (marca) {
            case "ArgentinaLuz":
                porDescuento = 40 / 100;
                break;
            default:
                porDescuento = 30 / 100;
                break;
        }
        
    } else if (cantidadLampara == 4) {

        precio = precioLampara * cantidadLampara;

        switch (marca) {
            case "ArgentinaLuz": case "FelipeLamparas":
                porDescuento = 25 / 100;
                break;
            case "JeLuz": case "HazIluminacion": case "Osram":
                porDescuento = 20 / 100;
                break;
        }
    } else if (cantidadLampara == 3) {
        precio = precioLampara * cantidadLampara;
        switch (marca) {
            case "ArgentinaLuz":
                porDescuento = 15 / 100;
                break;
            case "FelipeLamparas":
                porDescuento = 10 / 100;
                break;
            default:
                porDescuento = 5 / 100;
                break;
        }
    }

    descuento = precio * porDescuento;
    precioFinal = precio - descuento;

    if (precioFinal >= 120) {
    impuesto  =  precioFinal * 10 / 100;
        precioFinal = precio + impuesto;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
        alert("IIBB Usted pago $" + precioFinal + "usted pago de IIBB"+impuesto);
    } else {
    alert("IIBB Usted pago $" + precioFinal);
    }

    document.getElementById("txtIdprecioDescuento").value = precioDescuento;
}*/

function CalcularPrecio() {
    let precioLampara = 35;
    let cantidadLampara = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let precioFinal = 0;
    let porDescuento = 0;
    let precioDescuento;
    let descuento = 0;
    let impuesto=0 ;

    switch (cantidadLampara) {
        case 1:
        case 2:
            porDescuento = 0;
            break;
        case 3:
            if ( marca == "ArgentinaLuz") {
                porDescuento = 15 / 100;
            } else if ( marca == "FelipeLamparas") {
                porDescuento = 10 / 100;
            } else {
                porDescuento = 5 / 100;
            }
            break;
        case 4:
            if ( marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                porDescuento = 25 / 100;
            } else {
                porDescuento = 20 / 100;
            }
            break;
        case 5:
            if ( marca == "ArgentinaLuz") {
                porDescuento = 40 / 100;
            } else {
                porDescuento = 30 / 100;
            }
            break;
        default:
            porDescuento = 50 / 100;
            break;
    }

    descuento = precioLampara * porDescuento;
    precioDescuento = precioLampara - descuento;
    document.getElementById("txtIdprecioDescuento").value = precioDescuento;
    precioFinal = precioDescuento * cantidadLampara;

    if ( precioFinal > 120) {
        impuesto  =  precioFinal * 10 / 100;
        precioFinal = precioFinal + impuesto;
        alert("Usted pago $ " +precioFinal+ ", y usted pago de IIBB "+impuesto);
    }
}