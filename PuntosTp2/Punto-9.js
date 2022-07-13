// Punto 9
let numero = parseInt(prompt("Ingresar un numero menor o igual que 500"));
if(Number(numero) == numero){
if (numero > 0 && numero <= 500) {
  let rep, i;
  for (i = 1; i <= numero ; i++) {
    for (rep = i; rep <= i; rep++) {
      document.write(rep);
    }
    document.write("<br>");
  }
  
} else {
  alert("el valor introducido es mayor que 50");
}
}else{
    alert("No ingresaste un numero-")
}