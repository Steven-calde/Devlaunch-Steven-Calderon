/*

El objetivo es crear una clase Airport que modele las caracteristicas y operaciones de un aeropuerto 
de forma mas avanzada 

Cada aeropuerto tiene:

Un nombre
Una ubicacion
Una pista de aterrizaje (runway)
Un nivel de trafico aereo (bajo, medio, alto)
La clase debe incluir:

Un metodo changeTrafficLevel que permita cambiar el nivel de trafico aereo
Un metodo emergencyLanding que cierre la pista de aterrizaje y marque el nivel de trafico como alto
Un metodo displayInfo que muestre el nombre del aeropuerto, la ubicacion y el estado actual de la 
pista y el nivel de trafico
Crea una instancia de la clase Airport y demuestra el uso de estos metodos con distintas operaciones

*/

type Trafficlevel = 'low' | 'Medium' | 'High'

class Airport {
    private _name: string
    private _location: string
    private _runwaystatus: boolean
    private _trafficLevel: Trafficlevel

    constructor(name: string, location: string) {
        this._name = name
        this._location = location
        this._runwaystatus = true
        this._trafficLevel = 'low'

    }

    get runwayStatus(): boolean {
        return this._runwaystatus
    }

    set runwayStatus(status:boolean) {
        this._runwaystatus = status
    }

    
    get Trafficlevel(): Trafficlevel {
        return this._trafficLevel
    }

    set Trafficlevel(level:Trafficlevel) {
        this._trafficLevel = level
    }

    changeTrafficLevel(level: Trafficlevel): void {
        this.Trafficlevel = level
        console.log(`El nivel de trafico se ha cambiado a ${level} en el aeropuerto ${this._name}`)
    }

    emergencyLanding(): void {
this.runwayStatus = false
this.Trafficlevel = 'High'
console.log(`Aterrizaje de emergencia en el aeropuerto ${this._name}. La pista esta cerrada y el nivel esta alto`)
    }

    displayInfo(): void {
        console.log(`Nombre: ${this._name}`)
        console.log(`Ubicacion: ${this._location}`)
        console.log(`Estado de la pista: ${this.runwayStatus}`)
        console.log(this._trafficLevel)
    }

}

const myAirport = new Airport('Aeropuerto Internacional', 'Ciudad ABC')

myAirport.displayInfo()
myAirport.changeTrafficLevel('Medium')
myAirport.displayInfo()
myAirport.emergencyLanding()
myAirport.displayInfo()
