# EJERCICIO PRÁCTICO

Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". Si es más pequeño, la consola registra "¡El número es menor que 50!"

#### RESPUESTA:

```
function operacion(a, b, c, d) {
  var resultado = (a + b) * (c + d);
  if (resultado > 50) {
    console.log("¡El número es mayor que 50!")
  } else {
    console.log("¡El número es menor que 50!");
  }       
}
operacion(5, 90, 56, 4)
```
