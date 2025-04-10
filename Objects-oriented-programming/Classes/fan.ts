/**
 
Cuando de trata de ventiladores, a menudo presentar caracteristicas distintas, como configuraciones
de velocidad, tamaño, potencia, medida en vatios o caballos de fuerza, tipo y color.

Para manejar y modificar adecuadamente las caracteristicas de un ventilador, es util organizarlas
en un sistema de clases. De esta manera, se obtiene una estructura clara para trabajar con las 
propiedades del ventilador, facilitando la comprension, reutilizacion y mantenmiento del codigo

Para abordar esta tarea, crearemos una clase que encapsule los diferentes atributos de un ventilador.
Esta clase incluira un constructor para inicializar dichos atributos y metodos como getters y setters 
para acceder y modificarlos segun sea necesario.

Al implementar esta estructura de clase, podremos representar y gestionar de manera eficiente las 
caracteristicas de los ventiladores en nuestro sistema.

 Esta clase esta diseñada para porporcionar todas las caracteristicas esenciales del ventilador desde el
momento de su creacion.

 */

type Fansize = 'small' | 'medium' | 'large'
type Fancolor = 'White' | 'Gray' |'Black'
type Fanspeed = 0 | 1 | 2 | 3

class Fan {
    public speed: Fanspeed

constructor(
    public type: string,
    public size: Fansize,
    public color: Fancolor
){
this.type = type
this.speed = 0
this.size = size
this.color = color
}

public setType (type:string) {
    this.type = type
}

public getType() {
    return this.type
}

public setSize (size:Fansize) {
    this.size = size
}

public getSize() {
    return this.size
}

public setColor (color:Fancolor) {
    this.color = color
}

public getColor() {
    return this.color
}

public setSpeed (speed: Fanspeed) {
    this.speed = speed
}

public getSpeed() {
    return this.speed
}


}

const fan1 = new Fan('Sony','small','White')

fan1.setType('Samsung')
fan1.setColor('Black')
fan1.setSize('small')
fan1.setSpeed(3)

console.log(fan1.type)
console.log(fan1.color)
console.log(fan1.size)
console.log(fan1.speed)