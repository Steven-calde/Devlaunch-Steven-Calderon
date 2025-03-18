/*
Voy al supermercado GreenCenter para hacer mis compras habituales y
planeo comprar manzandas y naranjas.
Cuando estoy alli, veo que no hay platanos ni uvas, asi que cambio un poco mi lista.
Veo que 3 cajeros estan trabajando, asi que me preparo para pagar.
Mis cosas cuestan $100 en total.
Entrego $150 en efectivo y recibo $50 de cambio
*/

const supermarketName = 'GreenCenter'
const favoriteFruit1 = 'Apple'
const favoriteFruit2 = 'Orange'
const areBananaAvailables = false
const aregrapesAvailables = false
const numberofActiveCashiers = 3
const cashInWallet = 150
const totalcost = 100
const change = cashInWallet-totalcost

console.log(`
    SupermarketName: ${supermarketName} \n
    Payment: $${cashInWallet}\n
    Total Purshase: $${totalcost}\n
    Change: $${change}\n
    `)
