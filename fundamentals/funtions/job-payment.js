/**
 
En una empresa hay un proceso donde cada trabajador debe de registrar las horas de entrada
y salida diariamente. De esta forma, al final de cada dia, el empleador sabra cuanto
tiene que pagarle por sus horas trabajadas.

Pero si una persona trabajo mas de 8 horas, se le debe de pagar un costo extra por 
las horas adicionales, que es igual a 1.5  veces el monto de su tarifa por hora.

Haz un programa que, recibiendo la tarifa por hora, la hora de entrada y la hora de salida
imprima el monto total de dinero que este empleado recibio ese dia

Tarifa por hora: $10
Hora entrada: 9:00
Hora salida: 18:00

 */

const prompt = require('prompt-sync')()

const WORK_DAY_HOURS = 8
const EXTRA_HOUR_MULTIPLIER = 1.5


const calculateSalary = (hourlyRate,startTime,endTime) => {
    const [startHour] = startTime.split(':')
    const [EndHour] = endTime.split(':')

    const workedHours = EndHour-startHour
    
    let salary = 0

    if(workedHours <= WORK_DAY_HOURS) {
        salary = hourlyRate * workedHours
     } else {
        const extraHours = workedHours - WORK_DAY_HOURS
        salary = (hourlyRate * WORK_DAY_HOURS) + ((extraHours * hourlyRate) * EXTRA_HOUR_MULTIPLIER)

     }
     return salary
}

const main = () => {
    const hourlyRate = parseFloat(prompt('Hourly Rate $: '))
    const startTime = prompt('Start at: ')
    const endTime = prompt('End at: ')

    const salary = calculateSalary(hourlyRate, startTime, endTime)

    console.log(`
        Salary: $${salary}
        `)

    }

main()