
/*
La universidad de Harvard se ha dado cuenta de que manejar manualmente los criterios
de becas no es eficiente. Ahora buscan una forma mejor de evaluar las numerosas solicitudes
de estudiantes que reciben.

El nuevo sistema que planean implementar decidira eficiencientemente quien califica para las becas.
Normalmente,los estudiantes deben ayudar en clases de laboratorio y aprobar 4 materias
con calificaciones promediadas para verificar la eligibilidad.

Las reglas de eligibilidad son estrictas:

- Los estudiantes necesitan tener un promedio de calificaciones de 9 o mas en todas las materias, sin
ninguna calificacion individual menor a 8, independientemente de como les fue como asistentes de laboratorio

- Alternativamente, si tienen un promedio de 8.5 o mas, aun pueden calificar si obtuvieron una calificacion de "A" o "B" 
como asistentes de laboratorio.

Sin embargo, si obtuvieron una calificacion de "C" como asistentes de laboratorio no calificaran para la beca incluso 
si sus calificaciones generales son buenas

*/

const prompt = require('prompt-sync')()

const REJECT_LABORATORY_GRADE = 'C'
const COUNT_OF_GRADES = 4
const MIN_GRADE = 8
const MIN_AVERAGE_GRADE = 8.5
const FAST_FORWARD_GRADE = 9

function validateScholarship(grade1, grade2, grade3, grade4, laboratoryGrade) {

    if (laboratoryGrade === REJECT_LABORATORY_GRADE) {
    return false
}
    if(grade1 < MIN_GRADE || grade2 < MIN_GRADE || grade3 < MIN_GRADE || grade4 < MIN_GRADE ){
return false
}


const average = (grade1 + grade2 + grade3 + grade4)/COUNT_OF_GRADES

    if(average < MIN_AVERAGE_GRADE) {
        return false
    } else {
        if(average < FAST_FORWARD_GRADE && !(laboratoryGrade === 'A' || laboratoryGrade === 'B')) {
            return false
        }
    }

return true
}


function main() {
    const grade1 = parseFloat(prompt('Grade#1 : '))
    const grade2 = parseFloat(prompt('Grade#2 : '))
    const grade3 = parseFloat(prompt('Grade#3 : '))
    const grade4 = parseFloat(prompt('Grade#4 : '))

    const laboratoryGrade = prompt('Laboratory grade (A,B,C): ').toUpperCase() 


const isElegible = validateScholarship(grade1,grade2,grade3,grade4,laboratoryGrade)

if(isElegible) {
console.log('Congrats! You are eligible')
}
else {
    console.log('Sorry, you are not elegible for the scholarship')
}
}
main()
