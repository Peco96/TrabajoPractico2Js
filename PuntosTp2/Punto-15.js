//Punto 15
let cadena = prompt("Introduce una cadena de texto:");
    let numchar = cadena.length;    
    cadena = cadena.toUpperCase();  
    let car;
    let contador = 0;
    let x;
    for (x = 0; x < numchar; x++) {
        car = cadena.charAt(x);    
        if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
            contador++;
        }
    }
    document.write("Número de Vocales: " + contador + ".");