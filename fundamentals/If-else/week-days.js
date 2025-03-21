/*

El programa solicita al usuario un numero del 1 al 7 mediante prompt-sync
utiliza una declaracion switch para mostrar el de la semana correspondiente o
"Invalid day" si el numero no es valido. Ejemplo: 3 muestra "Wednesday",
8 muestra "Invalid day" . Ideal para identificar dias en programas simples

*/

const prompt = require('prompt-sync')()
const day = parseInt(prompt('Indica un numero del 1 al 7: '))

switch(day){
    case 1: 
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
            console.log('Wednesday')
            break;
    case 4:
            console.log('Thursday')
            break;
    case 5:
            console.log('Friday')
            break;
    case 6:
            console.log('Saturday')
            break;
    case 7:
            console.log('Sunday')
            break;
    default: 
    console.log('Invalid day')
                    break;
}

console.log(day)
