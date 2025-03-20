/*

Escribe un programa sencillo en javascript que calcule y muestre el indice de masa corporal (IMC)
de un usuario. El programa debe solicitar al usuario su nombre, altura en metros y peso en kilogramos

Despues de calcular el IMC, el programa debe mostrar un mensaje al usuario que incluya su nombre 
y el valor del IMC

Calcula el IMC utilizando la formula: 

IMC: weight/height al cuadrado

Nombre: Jhon
Altura: 1.75
Peso: 70

La salida sera: Hi Jhon your BMI is ~22.86

*/

const prompt= require('prompt-sync')()

const name = prompt('Whats your name?: ')
const height = parseFloat(prompt('Whats your Height?: '))
const weight = parseFloat(prompt('Whats your weight?: '))

const BMI= (weight/Math.pow(height,2))

console.log(`Hi ${name} your BMI is ~${BMI.toFixed(2)}`)