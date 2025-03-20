/* Imaginina desarrollar un programa para calcular el promedio de calificaciones de estudiantes
en una escuela. Como parte de esta desafio primero el entorno para recibir 
entradas del usuario, permitiendo que ingresen tres notas

Luego procesas estos datos para calcular el promedio de manera precisa

Finalmente, presentas el resultado formateado con maximo dos decimales, para asegurar una lectura clara

Si el usuario ingresa las calificaciones 70, 80 y 90, la calificacion sera 80

*/

const prompt= require('prompt-sync')()

const grade1 = parseFloat(prompt('Nota#1: '))
const grade2 = parseFloat(prompt('Nota#2: '))
const grade3 = parseFloat(prompt('Nota#3: '))

const gradesCount = 3
const maxDigits=2
const AvgGrade = ((grade1+grade2+grade3)/gradesCount)

console.log(`Final Grade: ${AvgGrade.toFixed(maxDigits)}`)