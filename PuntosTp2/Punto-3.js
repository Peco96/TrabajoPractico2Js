//Punto 3
let resultado = "";

    do{
        let cadena = prompt("Introduce una cadena");
    if(resultado ===""){
        resultado = resultado + cadena;
}
    else{
        resultado = cadena + "-" + cadena;
}
}while(confirm("Desea seguir?"));
    document.write(resultado);
