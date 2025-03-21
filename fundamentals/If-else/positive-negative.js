/*
Escribe un programa simple en javascript que evalue el valor de una variable llamada 'n'
verifica si el numero es positivo, negativo o cero, y muestra un mensaje correspondiente
basado en la siguiente evaluacion:

Si el numero es mayor que cero imprima 'Positivo'
Si el numero es menor que cero imprima 'Negativo'
Si el numero es exactamente cero imprima 'Cero'

Si la variable no es un numero, imprima un mensaje de error: 'Por favor, introduce un numero valido'


*/

const prompt =require('prompt-sync')()

const n = parseInt(prompt('Digite un numero: '))

if (n > 0) {
    console.log('Positivo')
    } else if (n < 0) {
    console.log('Negativo')
    } else if (n === 0) {
        console.log('Cero')
    } else {
        console.log('Por favor, introduce un numero valido')
    }