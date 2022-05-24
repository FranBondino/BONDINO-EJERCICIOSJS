/*
3. Arrays

Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
 "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
*Agregar un elemento al principio y al final del array (utilizar unshift y push).
*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*Agregar un elemento al principio y 
al final del array (utilizar unshift y push).
*Quitar un elemento del principio y del final del array (utilizar shift y pop).
*Invertir el orden del array (utilizar reverse).
*Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

var arrayEnunciado = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"]; 

/* PUNTO A */
arrayEnunciado.unshift("Mes A");
arrayEnunciado.push ("Mes B");

console.log(arrayEnunciado);

/* PUNTO B */
var arrayB = arrayEnunciado.sort()
console.log(arrayB)

/*PUNTO C */ 
arrayEnunciado.shift()
arrayEnunciado.pop ()
console.log(arrayEnunciado)

/*PUNTO D */
var arrayReverse = arrayEnunciado.reverse()
console.log(arrayReverse)

/*PUNTO E*/
var stringArray = arrayEnunciado.join('-')
console.log(stringArray)

/*PUNTO F*/
var arraySlice = arrayEnunciado.slice(4, 12)
console.log(arraySlice)
