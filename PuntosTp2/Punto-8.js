//Punto8
let numero = parseInt(prompt("Ingresar un numero menor o igual que 50"));
if(Number(numero) == numero){
if (numero > 0 && numero <= 50) {
  let rep, i;
  for (i = 1; i <= numero ; i++) {
    for (rep = 1; rep <= i; rep++) {
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