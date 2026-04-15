/* Cree una función JS que acepte 4 argumentos. 
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. 
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". 
Si es más pequeño, la consola registra "¡El número es menor que 50!"
*/

/*
intento 1. Tengo dudas de si este planteamiento responde al ejercicio porque la operación como tal está establecida 
al final y no como parte de la función pero por si acaso la pongo ya que da el resultado bien. De igual forma la considero importante 
ya que es parte del proceso
*/

var a = 1;
var b = 2;
var c = 3;
var d = 4;

function operation(resultado){
resultado > 50 ? console.log("¡El número es mayor que 50!") : console.log("¡El número es menor que 50!");
}
operation((a + b) * (c + d));
 
// intento 2 

function operacion(a, b, c, d) {
  var resultado = (a + b) * (c + d);
  if (resultado > 50) {
    console.log("¡El número es mayor que 50!")
  } else {
    console.log("¡El número es menor que 50!");
  }       
}
operacion(5, 90, 56, 4)