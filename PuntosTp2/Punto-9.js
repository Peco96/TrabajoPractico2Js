// Punto 9
document.write("<hr>");
let x;
let y = 500;
let rep = 0;
for (x = 1; x <= y; x++) {
  document.write(x);
  if (x % 4 == 0) {
    document.write(" (Multiplo de 4)");
  }
  if (x % 9 == 0) {
    document.write(" (Multiplo de 9)");
  }
  document.write("<br>");
  if (x % 5 == 0) {
    document.write("<hr>");
  }
}
