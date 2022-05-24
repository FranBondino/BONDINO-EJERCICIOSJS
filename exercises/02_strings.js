/* Strings

*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
 caracteres guardando el resultado en una nueva variable (utilizar substring).
*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra 
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).
*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar 
la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf) */

/* PUNTO A */
var stringMinDiez = 'Resolucion'
var stringCincoCaracteres = stringMinDiez.substring(0, 5)

console.log (stringCincoCaracteres)

/* PUNTO B */
var stringA = 'sDFKGTHJKL'
var stringNuevo = stringA.substring(0,1).toUpperCase() + stringA.substring(1, 10).toLowerCase()

console.log (stringNuevo)

/* PUNTO C */
var stringBlanco = 'hola como?'
var espacioBlanco = stringBlanco.indexOf('') 

console.log (espacioBlanco)