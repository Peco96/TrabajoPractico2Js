//punto 7
let numero = parseInt(prompt("Ingresar un numero menor o igual que 50"));
if(Number(numero) == numero){
if (numero > 0 && numero <= 50) {
  let repeticiones, i;
  for (i = numero; i >= 1; i--) {
    for (rep = i; rep >= 1; rep--) {
      document.write(i);
    }
    document.write("<br>");
  }
  
} else {
  alert("el valor introducido es mayor que 50");
}
}else{
    alert("No ingresaste un numero-")
}
