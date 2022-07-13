//Punto 11
let nombreDe1 = prompt("Ingresar nombre de 1");
let edad1 = parseInt(prompt("Ingresar edad de 1"));
let nombreDe2 = prompt("Ingresar nombre de 2");
let edad2 = parseInt(prompt("Ingresar edad de 2"));
let nombreDe3 = prompt("Ingresar nombre de 3");
let edad3 = parseInt(prompt("Ingresar edad de 3"));
if(edad1>edad2 && edad1>edad3){
    document.write(nombreDe1 +"es el mayoy y tiene: " + edad1)
}else if(edad2>edad1 && edad2>edad3){
    document.write(nombreDe2 +"es el mayoy y tiene: " + edad2)
}else if(edad3>edad1 && edad3>edad2){
    document.write(nombreDe3 +"es el mayoy y tiene: " + edad3)
}