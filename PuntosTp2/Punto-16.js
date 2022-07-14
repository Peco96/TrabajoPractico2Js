//Punto16
let cadena = prompt("Introduce un Texto:");
let numchar = cadena.length;
let x;
let car;
let salida = "";
for (x = 0; x < numchar; x++) {
    car = cadena.charAt(x);    
    salida = car + salida;
}
document.write(salida);