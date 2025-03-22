/**
 
Se solicita al usuario que ingrese su fecha de nacimiento en el formato YYYY/MM/DD.
Calculo de la edad: se crea un objeto Date para la fecha de nacimiento y se calcula la edad restanto el
año de nacimiento de la fecha actual. Tambien se verifica si ya ha pasado el cumpleaños del año actual,
para ajustar la edad si es necesario.

Verificacion de edad: se utiliza un if-else para determinar si la persona cumple con la edad legal para beber (18 años o mas)
Este programa permite que el proceso de verificacion de edad sea automatico y preciso, asegurando que solo

puedes guiarte con esto.

const prompt = require('prompt-sync')()

const birthdate = prompt('What is your birthday in format 'YYYY/MM/DD'?: ')
cons birthday = new date(birthdate)
const today = new date()

const age = today.getFullYear() - birthday.getFullYear() // takes the age of the person 


 */

const prompt = require('prompt-sync')()

const birthdate = prompt('What is your birthday in format (YYYY/MM/DD)?: ')


const today = new Date()
const birthday = new Date(birthdate)

let age = today.getFullYear() - birthday.getFullYear()

const birthdaypass = (
    today.getMonth() > birthday.getMonth() ||
    (
    today.getMonth() === birthday.getMonth() &&
    today.getDate() >= birthday.getDate()
    )
)

if (!birthdaypass) {
    age--
}

if (age >= 18) {
    console.log('Bienvenido al bar de Moe')
}   else {
        console.log("No puede entrar el bar hasta tener 18 años")
         }

console.log(`Su edad es de ${age}`)


