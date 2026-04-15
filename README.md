---
description: >-
  Aquí recopilaré información y documentación relacionada con varias preguntas
  destinadas a la evaluación sobre JavaScript, principalmente conceptos y
  funciones importantes de este lenguaje.
layout:
  width: default
  title:
    visible: false
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
---

# ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

## 1. ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

<figure><img src="https://cdn.sanity.io/images/9uwkxuld/production/255cfec31bbbe3b01f9dfffe7a02299fab7cef8f-800x300.png?h=1000&#x26;auto=format&#x26;fit=crop" alt=""><figcaption></figcaption></figure>

JavaScript fundamentalmente es un lenguaje de programación interpretado, esto quiere decir que necesita de un intérprete para su ejecución. En la mayoría de los casos es interpretado gracias a los navegadores, por no decir que es el único lenguaje de programación que se puede guardar en un navegador web. JavaScript también utiliza un modelo de objetos basado en prototipos en lugar de clases, lo que lo diferencia de otros lenguajes orientados a objetos.

La estandarización de JS se basa en la especificación ECMAScript, implementada en la mayoría de navegadores existentes. La version 5 de ECMAScript funciona prácticamente en todos los navegadores, excepto algunas versiones antiguas de Internet Explorer. La versión 6 tiene compatibilidad parcial y la versión 7 tiene poca compatibilidad con Chrome, Internet Explorer, Firefox y Opera. Todos estos navegadores tienen diferentes maneras de analizar algunos de los elementos disponibles en ECMAScript 7. Algunos de estos, como los disponibles en las versiones 6 y 7, se incluyen principalmente para frameworks modernos de JavaScript como Angular o React. En esos casos los propios frameworks o bibliotecas se encargan de ciertas tareas, como el preprocesamiento y que contribuyan al desarrollo adecuado de aplicaciones en este lenguaje.

En[ esta página](https://www.w3schools.com/js/js_versions.asp), encontrarás algunas implementaciones de navegador

Si bien es más conocido como el lenguaje de scripting para páginas web, muchos entornos fuera del navegador también lo usan, tal como [Node.js](https://developer.mozilla.org/es/docs/Glossary/Node.js), [Apache CouchDB](https://couchdb.apache.org/) y [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). Algunas de las aplicaciones más potentes del mundo están desarrolladas en JavaScript, por lo que no hay manera de evitar trabajar con él de una forma u otra.

Además, incluso para quienes no ejerzan como desarrolladores, JavaScript es una de las herramientas más potentes para automatizar el flujo de trabajo diario. Esto se debe a que como el código JavaScript se ejecuta directamente en el navegador, puedes realizar tareas como, por ejemplo, actualizar y seguir a varias personas en Instagram o LinkedIn. Puedes crear un script de JavaScript muy sencillo que se ejecute y automatice la tarea.

&#x20;Es importante saber esto porque muchas veces, al depurar/debuggear tu programa, pensarás que tienes acceso a algún valor o que lo has asignado, solo para descubrir más tarde que es `undefined.` Esto significa que en algún momento se omitió la asignación del valor o que nunca se realizó.

\-        Puede que parezca que haya similitudes entre `null` y `undefined`, pero existe una sutil diferencia: `null` significa que está definido. Tienes acceso a esa variable, pero está vacía. No hay nada. En cambio, `undefined` significa que aún no se le ha asignado ningún valor, por lo que no está vacío y debe asignarse posteriormente.

JavaScript cuenta con lenguajes auxiliares o precompiladores como TypeScript, muy similares a JavaScript, pero que obligan a especificar los tipos de datos, que son la razón por la que TypeScript se llama así. Gran parte de esto es una cuestión de opinión personal.

\-        Existe un debate importante en la comunidad de desarrolladores sobre si los lenguajes de tipado estático o dinámico son mejores. Quienes defienden los lenguajes de tipado estático creen que son mucho mejores porque imponen esta especificación.

\-        Si quisiéramos utilizar el tipado estático en una variable number sería algo así:

```
var name = "Kristine";
var nameTwo = 'Jordan';
console.log(name);
console.log(nameTwo);
//"Kristine"
//"Jordan"
```

Si ejecutamos console.log(user.grades);  nos dará un objeto y luego todas las notas.

Si quisiéramos una nota en concreto habría que referenciar el valor que queremos sacar y poner:&#x20;

* **Arrays**: Un array es simplemente una colección de valores guardados en una sola variable en la que cada elemento tiene una posición.  Esto es muy distinto a lenguajes como Java o C donde todos los elementos deben ser del mismo tipo. El error conceptual más común aquí es pensar que un array solo guarda “listas simples”. En realidad, puede guardar estructuras completas. La sintáxis utilizada para las arrays es el corchete \[]. En lugar de tener muchas variables separadas, puedes agrupar todo en una sola estructura.

&#x20;La forma más común de arrays que podemos encontrar en programación es la sintaxis literal:

***

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

El[ hoisting](https://reactivelinux.com/hoisting/) permite usar funciones declaradas antes de su definición porque JavaScript las registra completamente al inicio. Sin embargo, con expresiones de función, solo se eleva la variable, no el valor que contiene, lo que provoca errores si se intenta usar antes de asignarla. En el ejemplo anterior, el _hoisting_ sí ocurre, pero no de la misma forma que con var o con las declaraciones de función. Si cambiásemos `let` por `var`, el comportamiento del _hoisting_ es diferente porque var sí se inicializa automáticamente con `undefined` durante la fase inicial.&#x20;

`this` es una palabra clave especial que se refiere al contexto en el que se está ejecutando la función actual. es una de las cosas que más confunden al principio, porque no tiene un valor fijo. Puede referirse a un objeto, un método, una propiedad, etc., dependiendo de cómo y dónde se use. En general, el valor de `this` está determinado por cómo se invoca a la función.&#x20;

En cuanto a **buenas prácticas,** una de las más importantes es usar this solo cuando tengas claro qué objeto va a llamar a la función. También es recomendable evitar usar funciones flecha como métodos de objetos cuando necesitas acceder a propiedades del propio objeto.

Otro consejo es no perder el contexto de `this`. Si necesitas pasar un método como callback, puedes usar `.bind()` para asegurar que `this` siga apuntando al objeto correcto:
