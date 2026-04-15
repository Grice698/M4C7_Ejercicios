# M4C7 Full Stack Course

## ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

<figure><img src="https://cdn.sanity.io/images/9uwkxuld/production/255cfec31bbbe3b01f9dfffe7a02299fab7cef8f-800x300.png?h=1000&#x26;auto=format&#x26;fit=crop" alt=""><figcaption></figcaption></figure>

JavaScript fundamentalmente es un lenguaje de programación interpretado, esto quiere decir que necesita de un intérprete para su ejecución. En la mayoría de los casos es interpretado gracias a los navegadores, por no decir que es el único lenguaje de programación que se puede guardar en un navegador web.  JavaScript también utiliza un modelo de objetos basado en prototipos en lugar de clases, lo que lo diferencia de otros lenguajes orientados a objetos.

La estandarización de JS se basa en la especificación ECMAScript, implementada en la mayoría de navegadores existentes. La version 5 de ECMAScript funciona prácticamente en todos los navegadores, excepto algunas versiones antiguas de Internet Explorer. La versión 6 tiene compatibilidad parcial y la versión 7 tiene poca compatibilidad con Chrome, Internet Explorer, Firefox y Opera. Todos estos navegadores tienen diferentes maneras de analizar algunos de los elementos disponibles en ECMAScript 7. Algunos de estos, como los disponibles en las versiones 6 y 7, se incluyen principalmente para frameworks modernos de JavaScript como Angular o React. En esos casos los propios frameworks o bibliotecas se encargan de ciertas tareas, como el preprocesamiento y que contribuyan al desarrollo adecuado de aplicaciones en este lenguaje.

En[ esta página](https://www.w3schools.com/js/js_versions.asp), encontrarás algunas implementaciones de navegador

Si bien es más conocido como el lenguaje de scripting para páginas web, muchos entornos fuera del navegador también lo usan, tal como [Node.js](https://developer.mozilla.org/es/docs/Glossary/Node.js), [Apache CouchDB](https://couchdb.apache.org/) y [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/).  Algunas de las aplicaciones más potentes del mundo están desarrolladas en JavaScript, por lo que no hay manera de evitar trabajar con él de una forma u otra.

Además, incluso para quienes no ejerzan como desarrolladores, JavaScript es una de las herramientas más potentes para automatizar el flujo de trabajo diario. Esto se debe a que como el código JavaScript se ejecuta directamente en el navegador, puedes realizar tareas como, por ejemplo, actualizar y seguir a varias personas en Instagram o LinkedIn. Puedes crear un script de JavaScript muy sencillo que se ejecute y automatice la tarea.

***

## ¿Cuáles son algunos tipos de datos JS?

Básicamente, los tipos de datos son la forma en que JavaScript clasifica nuestros datos. Si tenemos variables, un tipo de dato determina cómo JavaScript las interpreta; si las ve como una frase, como un símbolo o como un número. Como programadores necesitamos saber qué tipo de dato es cada cosa y poder usar las funciones correctas con el tipo de dato adecuado. Los tipos de datos nos permiten hacer precisamente eso:

&#x20;

* **Booleans**: Un boolean no es un nombre, ni una letra, ni una serie de letras como nuestras variables tipo string. Son solo dos valores: true y false. Por ejemplo, si estás creando una aplicación SASS y quieres saber si un usuario es de pago y cuál es gratuito, puedes indicar en tus datos que es un usuario de pago. Cuando hablemos de condicionales, los booleanos son un tipo de dato idílico para darle un comportamiento dinámico a nuestros programas. Podemos declarar una variable:

```
var truthy = true;
var notTruthy = false;
Console.log(truthy);  
//true
```

&#x20;

* **Null:** Con `null` solo puedes tener un único valor que sea `null` ya que es una ausencia de valor esencialmente, una manera de entebder que podría haber un valor ahí pero no lo ponemos. Por ejemplo, las opciones a rellenar no obligatorias de un formulario, si no se rellenan, serían null.

&#x20;

```
 var nully = null; 
 console.log(nully);
 // null
```

&#x20;

* **Undefined:** Este tipo de dato se suele usar más en debugging porque es lo que se obtiene cuando algo se declara sin asignarle un valor. Si ejecutamos una variable solamente, saldrá `undefined`. Por defecto, cuando declaras una variable, JavaScript la asigna automáticamente a `undefined`

```
 var notDefined; 
 console.log(notDefined);
 //undefined
```

&#x20;Es importante saber esto porque muchas veces, al depurar/debuggear tu programa, pensarás que tienes acceso a algún valor o que lo has asignado, solo para descubrir más tarde que es `undefined.` Esto significa que en algún momento se omitió la asignación del valor o que nunca se realizó.

\-        Puede que parezca que haya similitudes entre `null` y `undefined`, pero existe una sutil diferencia: `null` significa que está definido. Tienes acceso a esa variable, pero está vacía. No hay nada. En cambio, `undefined` significa que aún no se le ha asignado ningún valor, por lo que no está vacío y debe asignarse posteriormente.

&#x20;

* **Number**: En JavaScript, estos son datos de tipado no estático, lo que significa que omite el paso de asignar una variable `number` . Interpreta directamente el valor numérico que hemos asignado, realiza la asignación y la fuerza.

```
var age = 15
console.log(age);
```

&#x20;     &#x20;

#### Tipado estático

&#x20;JavaScript cuenta con lenguajes auxiliares o precompiladores como TypeScript, muy similares a JavaScript, pero que obligan a especificar los tipos de datos, que son la razón por la que TypeScript se llama así. Gran parte de esto es una cuestión de opinión personal.

\-        Existe un debate importante en la comunidad de desarrolladores sobre si los lenguajes de tipado estático o dinámico son mejores. Quienes defienden los lenguajes de tipado estático creen que son mucho mejores porque imponen esta especificación.

\-        Si quisiéramos utilizar el tipado estático en una variable number sería algo así:

```
var age: Number = 12;
```



* **String**: Las strings son lo que se utiliza normalmente para referirse a palabras o frases. Sabemos que javascript las interpreta como strings por el uso de comillas.

```
var name = “Kristine";
```

Con el tipo de dato `string` podemos nombrar múltiples variables y nombrarlas:

```
var name = "Kristine";
var nameTwo = 'Jordan';
console.log(name);
console.log(nameTwo);
//"Kristine"
//"Jordan"
```

* **Symbol**: Esto es algo nuevo en ESX. Por lo tanto, cualquier programa anterior no sabrá qué es un símbolo. Los símbolos son similares a las strings, excepto que tienen reglas muy específicas. No se pueden modificar. Solo puede haber uno. Es el equivalente de Javascript a un objeto inmutable. Se utiliza principalmente para trabajar con objetos

```
var mySym = Symbol(‘foo’);
console.log(mySym); 
// [object Symbol] {}
```

&#x20;

* **Objec**t (objetos): Permiten agrupar varios valores bajo un mismo nombre pero también crear un modelo para tu objeto. Los objetos pueden contener diferentes tipos de datos y se escriben entre llaves {}.

Vamos a crear un ejemplo donde vemos el nombre, el curso y las notas de un estudiante. Este ejemplo contiene un objeto anidado dentro de otro, pero veréis que no es tan complejo y que se puede colocar un objeto dentro de otro. Esto es muy común en el desarrollo de APIs, donde se necesita agrupar elementos dentro de otros. Aquí voy a usar "notas" y, a partir de ahí, vamos a usar la misma sintaxis, usando llaves de nuevo.

```
let estudiante = {
  nombre: "Juan",
  curso: '2º'
  notas: {
  matematicas: 50,
  lengua: 60,
  historia: 80
  },
};
```

Si ejecutamos console.log(user.grades);  nos dará un objeto y luego todas las notas.

```
// [object Object]{
  "matematicas": 50,
  "lengua": 60,
  "historia": 80
}
```

Si quisiéramos una nota en concreto habría que referenciar el valor que queremos sacar y poner:&#x20;

```
console.log(user.grades.math); 
// 90
```

&#x20;

* **Arrays**: Un array es simplemente una colección de valores guardados en una sola variable en la que cada elemento tiene una posición.  Esto es muy distinto a lenguajes como Java o C donde todos los elementos deben ser del mismo tipo. El error conceptual más común aquí es pensar que un array solo guarda “listas simples”. En realidad, puede guardar estructuras completas. La sintáxis utilizada para las arrays es el corchete \[]. En lugar de tener muchas variables separadas, puedes agrupar todo en una sola estructura.

Por ejemplo, en lugar de esto,

```
let player1 = "Altuve";
let player2 = "Correa";
let player3 = "Springer";
```

usas un array:

```
let players = ["Altuve", "Correa", "Springer"];
```



Sobre cómo se crean arrays, existen dos formas. La primera usa el constructor Array:

```
var generatedArray = new Array(3);
```

Esto crea un `array` con tres posiciones, pero vacías. Si lo inspeccionas, verás que contiene valores undefined. Esto no significa que esté roto, significa que reservaste espacio pero no asignaste valores. Es destacable el hecho de poder crear arrays con tamaño definido sin saber aún qué van a contener.

Para variar, puedes introducir los elementos directamente en el array, el cual sí crearía un array con contenido real:

```
var generatedArray = new Array('Altuve', 'Correa', 'Spring');
```

Sin embargo, esta forma casi no se usa en práctica. La razón es que puede ser confusa y menos clara.

&#x20;

#### Tipos de arrays

&#x20;La forma más común de arrays que podemos encontrar en programación es la sintaxis literal:

```
var literalArray = [1, 2, 3];
```

Esto hace exactamente lo mismo pero de forma más simple y legible. Esta es la forma que vas a ver en casi todo el código real. Además, es muy importante aclarar que JavaScript no obliga a que todos los elementos sean del mismo tipo.

Esto nos lleva al siguiente punto: arrays mixtos. En JavaScript puedes meter cualquier cosa dentro de un array debido a su flexibilidad. Aquí podemos ver un solo array con un string, un número, una lista, un objeto y una función:

```
var mixedArray = [
  'Hi',
  1,
  ['a', 'b', 'c'],
  { name: 'Kristine' },
  function greeting() { console.log('hey there'); }];
```



Para conseguir sacar valores de dentro de un array, como hemos mencionado al principio, debemos recurrir a los valores indexados. Si quisiéramos, por ejemplo, sacar Altuve, deberíamos poner un 0.

```
literalArray[0];
//”Altuve”
```

También puedes guardar ese valor en otra variable. Esto es muy común porque normalmente no solo quieres ver el valor, sino trabajar con él:

```
var playerName = literalArray[1];
playerName; // “Correa"
```



Cuando tienes arrays más complejos, el acceso sigue la misma lógica, pero encadenando. Aquí el concepto clave es que el resultado de una operación puede ser otra estructura sobre la que puedes seguir operando.

Por ejemplo, con un array dentro de otro:

```
mixedArray[2][2];
```

Primero se accede al índice 2 (el array interno), y luego al índice 2 dentro de ese array. En este caso nos saldría "c".

&#x20;

Con objetos dentro de arrays:

```
mixedArray[3].name;
// Kristine
```

Primero accedes al objeto (índice 3), luego usas la notación de objeto (.) para acceder a su propiedad.

Esto mezcla dos conceptos: arrays + objetos. Con funciones dentro de arrays ocurre algo muy importante: Solo se nos devuelve la función, no se ejecuta.

```
mixedArray[4];
// function greeting() { console.log(‘hey there’);}
```

Para ejecutar la función necesitas **poner las paréntesis**. Puede parecer algo poco importante pero establece la diferencia entre referenciar una función y ejecutarla. Semánticamente cambia como la consola lee los datos que recibe para interpretar:

```
mixedArray[4]();
// "hey there" 
```

Si quieres ampliar más tu información respecto a los tipos de datos en JS, este [artículo](https://es.javascript.info/intro) y este [video](https://www.youtube.com/watch?v=cC65D2q5f8I) te pueden ser de ayuda. Si te han llamado la atención las arrays, mira este [enlace](https://es.javascript.info/array)

***

## ¿Cuáles son las tres funciones de String en JS?

Las cadenas son útiles para almacenar datos que se pueden representar en forma de texto. Tienen una gran variedad de formas de trabajar con ellas, desde buscar letras concretas de una frase, hasta reemplazar unas palabras por otras, o incluso añadir una cadena a otra. Utilizaremos un string de ejemplo para revisar algunas de estas funciones de forma breve:

```
var str = 'The quick brown fox jumped over the lazy dog';
```

> Esta frase es conocida porque contiene todas las letras del alfabeto al menos una vez, por eso se usa frecuentemente en programación y tipografía.

&#x20;

* charAt(): Devuelve el carácter en la posición especificada de una cadena.

```
var char = str.charAt(0);
console.log(char);
//devuelve "T"
```

&#x20;

* indexOf(): Devuelve la posición de la primera vez que aparece un valor especificado en una cadena.

```
var position = str.indexOf("e");
console.log(position);
// Devuelve 2, ya que la primera “e” está indexada en el número 2 de la frase
```

&#x20;

* Función trim(): Normalmente se utiliza para limpiar datos de usuarios o datos de bases de datos. Elimina espacios en blanco al inicio y al final de un string.

```
var messyString = '    foo     ';
messyString.trim();
console.log(messyString);
// "foo"
```

Este resumen donde se describen tres funciones quizás es algo escaso, por eso cabe destacar la evidente diversidad y cantidad de funciones string con las que podemos experimentar: `toUpperCase(), toLowerCase(), length(), split(), replace(), concat(), slice(), startsWith(), endsWith()`...

Si estás interesado/a en aprender más, [aquí](https://www.w3schools.com/js/js_string_methods.asp) y en este [video](https://youtu.be/dizRP9_tArI) se describen en detalle muchas de estas funciones.

***

## ¿Qué es un condicional?

Un condicional es una estructura que permite ejecutar diferentes códigos dependiendo de si se cumple o no una condición dada. Los condicionales más comunes en JavaScript son:

* **If y else**: Un condicional es una estructura que permite ejecutar diferentes códigos dependiendo de si se cumple o no una condición. En JS el funcionamiento es muy parecido, sólo cambia la sintaxis para lograr generar los condicionales:

```
var edad = 20

if (edad < 18) {
    console.log("Acceso denegado")
} else {
    console.log("Acceso permitido")
}
```

* **Else if**: Como aprendimos con Python, el condicional if nos permite encadenar condicionales adicionales. Establece una condición inicial {hacemos algo} y la alternativa si no se cumple la condición será else {si no se cumple if, ocurre esto otro}. No obstante, podemos poner condiciones múltiples mediante el uso de otra condición llamada else if. Siguiendo con el ejemplo:

```
let caja = "gato";

if (caja === "perro") {
console.log("La caja tiene un perro. Dale un hueso.");
} else if (caja === "gato") {
console.log("La caja tiene un gato. Dale pescado.");
} else if (caja === "loro") {
console.log("La caja tiene un loro. Dale semillas.");
} else {
console.log("No sabemos qué animal hay en la caja.");
}
```

* **Switch**: La sentencia switch es una alternativa a los condicionales if-else. Aunque se usa menos, es útil cuando se quiere comparar un valor con varios posibles casos específicos. Se utiliza principalmente cuando se quiere comprobar si un valor es exactamente igual a varias opciones posibles. Se puede usar switch junto con typeof para identificar el tipo de dato de una variable.

```
var dataPoint = 40;

switch (typeof dataPoint) {
  case "string":
    console.log("It's a string");
    break;

  case "number":
    console.log("It's a number");
    break;

  case "boolean":
    console.log("It's a boolean");
    break;

  default:
    console.log("No matches");
}
```

* **operadores ternarios**: Permiten ejecutar un bloque de código si la condición es verdadera, y otro bloque si la condición es falsa, todo en una sola línea. Utilizan los condicionales if y else mediante los símbolos ‘?’ y ’ :’ . Más adelante indagaremos en ellos pero por ahora, veamos un ejemplo:

```
var age = 21;
var canDrink = (age >= 21) ? "Puede comprar alcohol" : "No puede comprar alcohol";
console.log(canDrink); // "No puede comprar alcohol"

```



* operadores lógicos (AND, OR, NOT):
  * && — AND: le permite encadenar dos o más expresiones para que todas ellas se tengan que evaluar individualmente true para que expresión entera retorne true. En caso contrario, será false

```
let edad = 25;
let tienePermiso = true;
let puedeConducir = edad >= 18 && tieneLicencia; 
// true

```

* || — OR: le permite encadenar dos o más expresiones para que una o más de ellas se tengan que evaluar individualmente true para que expresión entera retorne true. Devuelve true si al menos uno de los operandos es verdadero

```
let esFinDeSemana = false;
let esFestivo = true;
let descansar = esFinDeSemana || esFestivo; 
// true

```

* ! — NOT: puede ser usado para negar una expresión. Invierte el valor booleano: convierte true en false y viceversa

```
alert(!!"cadena de texto no vacía"); // true
alert(!!null); //false

```

Si quieres más información sobre los operadores lógicos y ejemplos, pulsa [aquí](https://es.javascript.info/logical-operators).

#### Aspectos a tener en cuenta:

* Es importante ser lo más explícito en las condiciones ya que aunque se puede usar un else como caso por defecto, a veces es mejor usar otra condición explícita (else if) para evitar errores.
* Es recomendable definir claramente todas las condiciones posibles, en lugar de asumir que el último caso cubrirá todo.
* Los condicionales múltiples permiten manejar varios escenarios en un programa, evaluando condiciones en orden. Usar condiciones claras y completas ayuda a evitar errores y comportamientos inesperados en la aplicación.

***

## ¿Qué es un operador ternario?

Un ternario es una expresión que devuelve un valor basado en una comparación. Se trata de un condicional abreviado para referirse a la declaración if...else. Tiene la siguiente sintaxis:

```
`condición ? valor verdadero : valor falso;`
```

En este caso, el signo de pregunta tendría la misma función que if, y el doble punto equivaldría a else.

Veamos mediante un ejemplo la manera de escribir un operador ternario para acceder a una página de apuestas online. La condición es que la edad sea < 18, así que se escribe al principio, previo al ?. Si la condición es cierta, el ternario devuelve "Acceso permitido” y si es falsa, el ternario devuelve "Acceso denegado".

```
var age = 17;
age < 18 ? console.log("Acceso denegado") : console.log("Acceso permitido");
// "Acceso denegado"
```

También es posible realizar múltiples evaluaciones en una misma consulta. Por ejemplo, si quisiéramos comprobar dos veces el acceso de una persona a este sitio de apuestas online:

```
var firstCheck = false,
 secondCheck = false,
access = firstCheck
    ? "Acceso Denegado"
    : secondCheck
      ? "Acceso Denegado"
      : "Acceso Permitido";
      console.log(access);
 // muestra "Acceso Permitido"
```

#### Cosas a tener en cuenta con los operadores ternarios:

Hay que tener cierto cuidado, ya que los operadores ternarios sólo se recomiendan cuando se trata de if muy pequeños. Si intentásemos realizar una comprobación de if múltiples con el operador ternario, la sintaxis puede resultar compleja y difícil de leer. Observa el siguiente ejemplo utilizando operadores ternarios anidados:

```
let nota = 7;
console.log("He realizado mi examen.");
let calificacion =
  nota < 5 ? "Insuficiente" :
  nota < 6 ? "Suficiente" :
  nota < 8 ? "Bien" :
  nota <= 9 ? "Notable" :
  "Sobresaliente";
  console.log("He obtenido un", calificacion);
  // "He obtenido un" "Bien"
```

Observa que lo que tenemos en este ejemplo son múltiples operadores ternarios anidados uno dentro de otro. El "valor falso" del primer operador ternario, es un nuevo operador ternario, que a su vez su valor falso es un nuevo operador ternario, y así con el resto de casos.

Aunque en principio puede resultar interesante porque es bastante compacto y se escribe poco código, se trata de una estructura y sintaxis extraña, por lo que recuerda que los operadores ternarios anidados [no suelen estar muy bien vistos](https://youtu.be/YFES8Nm6uF4).

***

## ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

La diferencia principal entre una declaración de función y una expresión de función en JavaScript radica en cómo son definidas y cómo se comportan en el código.

Sabemos que un operador de comparación es una expresión que devuelve un valor booleano (true o false). Una condicional es una instrucción para manejar la ejecución del programa basada en los valores que devuelven los operadores de comparación.

De manera similar con las funciones, una declaración de función es una instrucción que define una función y le asigna un identificador especificado. Estas se definen utilizando la palabra clave `function` seguida del nombre de la función, parámetros y el cuerpo de la función entre llaves { }.

```
function saludar() {
    console.log("Hola");
}
```

#### Cómo afecta el hoisting a las declaraciones de función?

Una declaración de función puede ser invocada antes de su declaración, debido al concepto de elevación (hoisting) en JavaScript. Esto significa que una función declarada puede ser llamada en el código antes de que se haya declarado formalmente. Una declaración de función puede ser utilizada como un bloque de código independiente y su alcance está dentro del contexto en el que se define.

```
console.log(despedida())

function despedida(){
return "Adios"
}
```

En cambio, una expresión de función no necesita ser nombrada, ya que no se sabe el valor que va a tener nuestra variable previamente declarada. De todas formas, devolverá un valor que se puede almacenar en una variable si necesita ser usado nuevamente. Cuando llamas a una función que es una expresión con un valor de retorno, ya sea que estés llamando a una función definida por una declaración o una expresión.

```
let despedida = function(){
  return "Adios"
}
console.log(despedida());
```

En el segundo caso, no es una función anónima ya que fue nombrada como despedida y con ese mismo nombre es invocada en el segundo console.log.

JavaScript, en la fase inicial, registra la variable despedida, pero como está declarada con `let`, entra en lo que se llama la zona muerta temporal. Eso significa que existe desde el inicio del bloque, pero no se puede usar hasta que se ejecuta la línea donde se define.

La palabra reservada `function` se puede usar tanto al lado izquierdo como al derecho del signo =. Lo interesante es que siguen diferentes reglas dependiendo de dónde la escribimos:

Cuando la usamos al lado izquierdo, estamos creando una declaración de función y es obligatorio asignar un nombre. En cambio, si la usamos a la derecha, hablamos de una expresión de función. En las expresiones de funciones darle nombre a la función es opcional. En cambio para las declaraciones es obligatorio.

&#x20;

#### Cómo afecta el hoisting a las expresiones de función?

El[ hoisting](https://reactivelinux.com/hoisting/) permite usar funciones declaradas antes de su definición porque JavaScript las registra completamente al inicio. Sin embargo, con expresiones de función, solo se eleva la variable, no el valor que contiene, lo que provoca errores si se intenta usar antes de asignarla. En el ejemplo anterior, el _hoisting_ sí ocurre, pero no de la misma forma que con var o con las declaraciones de función. Si cambiásemos `let` por `var`, el comportamiento del _hoisting_ es diferente porque var sí se inicializa automáticamente con `undefined` durante la fase inicial.&#x20;

Con `let` no puedes acceder en absoluto antes de la asignación. Y solo las declaraciones de función permiten llamar a la función antes de escribirla en el código.



***

## ¿Qué es la palabra clave "this" en JS?

`this` es una palabra clave especial que se refiere al contexto en el que se está ejecutando la función actual. es una de las cosas que más confunden al principio, porque no tiene un valor fijo. Puede referirse a un objeto, un método, una propiedad, etc., dependiendo de cómo y dónde se use. En general, el valor de `this` está determinado por cómo se invoca a la función.&#x20;

No puede ser establecida mediante una asignación en tiempo de ejecución, y puede ser diferente cada vez que la función es invocada. ES5 introdujo el método [bind()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) para [establecer el valor de la función this independientemente de como es llamada](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this#funciones_enlazadas), y ES2015 introdujo las funciones flecha que no proporcionan su propio "binding" de `this`.

Para empezar mostraré un ejemplo sencillo con animales:

```
const perro = {
  nombre: "Rex",
  ladrar: function() {
    console.log(this.nombre + " está ladrando");
  }
};

perro.ladrar();
```

Aquí, este `this` dentro de ladrar apunta al objeto perro, porque es ese objeto el que está llamando a la función. Por eso this.nombre es "Rex" y la salida será "Rex está ladrando".

&#x20;

Si llamas a una función de manera “normal”, sin objeto, `this` ya no apunta a ese objeto:

```
function ladrar() {
  console.log(this);
}

saludar();
```

En este caso, `this` depende del entorno. En el navegador suele ser el objeto global, pero en modos más estrictos puede ser undefined. Esto suele causar errores cuando esperas que `this` sea algo concreto.

#### Arrow functions o funciones flecha:

Las _arrow functions_ ([funciones flecha](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)) son una forma más corta de escribir funciones en JavaScript, pero su importancia no es solo sintáctica. Tienen un comportamiento diferente en aspectos clave, especialmente con `this`, y por eso es importante entenderlas bien desde el principio. Uno de los usos más comunes y útiles de las arrow functions es mantener el contexto sin tener que usar cosas como bind.

Una función tradicional se escribe así:

```
function sumar(a, b) {
  return a + b;
}
```

La misma función con arrow function sería:

```
var sumar = (a, b) => a + b;
```

(Aquí el return es implícito, es decir, no hace falta escribirlo.)

&#x20;

En cuanto a **buenas prácticas,** una de las más importantes es usar this solo cuando tengas claro qué objeto va a llamar a la función. También es recomendable evitar usar funciones flecha como métodos de objetos cuando necesitas acceder a propiedades del propio objeto.

Otro consejo es no perder el contexto de `this`. Si necesitas pasar un método como callback, puedes usar `.bind()` para asegurar que `this` siga apuntando al objeto correcto:

```
var conejo = {
  nombre: "Bouncy",
  saltar: function() {
    console.log(this.nombre + " está saltando");
  }
};

var saltarConejo = conejo.saltar.bind(conejo);
saltarConejo();
```

> Aquí `.bind(conejo)` fuerza a que `this` siempre sea conejo.

Entre los errores más comunes están asumir que this siempre es el objeto donde está definida la función, usar arrow functions en métodos esperando que this funcione igual, o perder el contexto al pasar funciones como callbacks.

Para complementar con algo más de información, este [vídeo](https://youtu.be/Jdlo8ZDt5Jg) resume muy bien todo lo relacionado con la palabra clave \`this\`.
