/*

Escribe un programa en Javascript que solicite al usuario ingresar el
numero de dias y calcule el numero equivalente de meses y dias restantes,
considerando que un mes consta de 30 dias

Este programa utiliza el modulo prompt-sync  para recibir interactivamente
la entrada del usuario. Despues de calcular la cantidad de meses y dias restantes
segun la entrada, el programa muestra un mensaje al usuario indicando el equivalente 
en meses y dias restantes

Como pista, puedes usar Math.floor() para redondear el resultado a un numero entero
Si el usuario ingresa 100, la salida sera: 100 days are 3 months and 10 days

*/

const DAYSPERMONTH = 30
const prompt= require('prompt-sync')()

const days = parseInt(prompt('Number of days: '))

const months = Math.floor(days/DAYSPERMONTH)

const daysLeft= days % DAYSPERMONTH

console.log(`${days} days and are ${months} months and ${daysLeft} days.`)