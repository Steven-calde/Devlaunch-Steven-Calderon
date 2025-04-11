/*

Eres responsable de diseñar un sistema sencillo de gestion vehiculos para una empresa de transporte
El sistema debe representar diferentes tipos de vehiculos y sus comportamientos utilizando una estructura
Todos los vehiculos tienen un emoji, marca, modelo y año de fabricacion

Los vehiculos deben poder arrancar y mostrar su informacion
Los coches tienen un numero especifico de puertas y deben poder encender el aire acondicionado

Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie)

*/

class Vehicle {
private isOn: boolean

    constructor(
        protected emoji: string, 
        protected brand: string,
        protected model: string,
        protected year: number,
    ) {
        this.emoji = emoji,
        this.brand = brand,
        this.model = model,
        this.year = year,
        this.isOn = false
    }

toString() {
      return `Emoji: ${this.emoji}\nBrand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`
}
run () {
    this.isOn = true
}
}

class Car extends Vehicle {
private isAcOn: boolean
    constructor(
             brand: string,
             model: string,
             year: number,
             private numOfDoors: number = 4
    )
    {
    super ('🏎' ,brand, model, year)
    this.isAcOn = false
    }
}


class Motorcycle extends Vehicle {
    constructor(
             brand: string,
             model: string,
             year: number
    ) {
        super('🏍️' ,brand, model, year)
    }

    wheelie () {
return '🛞'
    }
}

const car1 = new Car('Toyota', 'Yaris', 2014)
const moto1 = new Motorcycle('Yamaha','YZ200',2020)

console.log(car1.toString())
console.log(moto1.toString())

