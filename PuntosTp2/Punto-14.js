//Punto14
let cadena = prompt("Introduce una texto:");
    let numchar = cadena.length;    
    let caracter;
    let x;
    for (x = 0; x < numchar; x++) {
	caracter = cadena.charAt(x);    
	if (x == numchar - 1) {
		document.write(caracter);
	}
	else {
		document.write(caracter + "-");
	}
    }