//Punto2
let nota = parseInt(prompt("Ingresar nota (número del 1-10)"));


if ((nota == 0) || (nota == 1 )|| (nota == 2)){
    alert("Muy deficiente");
}else if ((nota == 3) || (nota == 4)){
   alert("Insuficiente");
}else if ((nota == 5) || (nota == 6)){
    alert("Suficiente");
}else if (nota == 7){
    alert("Bien");
}else if ((nota == 8) || (nota == 9)){
    alert("Notable");
}else if (nota == 10){
    alert("Sobresaliente");
}
else{
    document.write("número erróneo ");
    document.write("Introduce un número válido"); 
}