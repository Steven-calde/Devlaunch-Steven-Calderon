/*
El fitness Center es un gimasio boutique ubicado en Palo Alto, California,
que ofrece membresias por $150 al mes.
Opera de 6 AM a 10 PM, emplea 10 entrenadores certificados
y cuenta con comodidades como sauna, piscina y clases grupales
*/

const gymName = 'Fitness Center'
const gymType ='Boutique'
const location ='Palo Alto, California'
const price = 150
const currency ='$'
const duration ='Mes'

const openTime = 6
const closeTime = 22
const trainerAmmount = 10
const ammenity1 ='Sauna'
const ammenity2 ='Piscina'
const ammenity3 ='Clases Grupales'

console.log(`
    Gym: ${gymName} (${gymType})\n
    Location: ${location}\n
    Price: ${currency}${price}/${duration}\n
    Time: ${openTime}-${closeTime}:00PM\n
    Team: ${trainerAmmount} certified trainers\n
    Ammenities: ${ammenity1},${ammenity2},${ammenity3}\n
    `)