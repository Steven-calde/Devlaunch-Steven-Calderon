/*
Crea un programa en Javascript  que calcule la factura total de una persona en un hotel
donde cada habitacion tiene un precio de $100 por noche, aprovechando una oferta promocional
que incluye un descuento del 5%

El programa debe solicitar al huesped el numero de noches que paso en el hotel para calcular
la factura total

Si el usuario ingresa que se quedo 5 noches, la salida sera: $475.00
*/


const prompt = require('prompt-sync')()
const PRICE_PER_DAY = 100
const promoDiscount = 0.05
const days = parseInt(prompt('Cuantos dias desea quedarse?   ---> '))
const subtotal = PRICE_PER_DAY*days
const discount = subtotal*promoDiscount
const total = subtotal-discount

console.log(`
    ------------------
    Hotel Receipt
    ------------------

    Nights # ${days}\n
    Payment:\n
        -Subtotal: $${subtotal}\n
        -Discount: $${discount}\n
        -Total:v$${total}\n
    `)
    

