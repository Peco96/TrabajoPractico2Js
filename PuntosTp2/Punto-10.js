//Punto 10
const filas = parseInt(prompt("ingrese numero de filas"));
const columnas = parseInt(prompt("ingrese un numero de columnas"));
let resultado = filas * columnas;
document.write(`  <table> <tbody>`);
//se encarga de dibujar las filas
for (let indiceFila = 0; indiceFila < filas; indiceFila++) {
  document.write(`  
    <tr>`);
  for (let indicecolumna = 0; indicecolumna < columnas; indicecolumna++) {
    // document.write(`<td>Prueba</td>`);
    document.write(`<td>${resultado}</td>`);
    resultado--;
  }

  document.write(`</tr>
`);
}

document.write(`  
</tbody>
</table>`);
