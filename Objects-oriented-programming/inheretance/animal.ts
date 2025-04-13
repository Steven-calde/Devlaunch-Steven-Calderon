/*

Un zoologico necesita un sistema para gestionar los animales y sus comportamientos
Debe modelar un conjunto de clases que representen distintos tipos de animales y sus caracteristicas
Todos los animales tienen un nombre, especie y edad. Ademas, todos deben poder emitir un sonido 
y mostrar su informacion basica

Algunos animales, como los leones, pueden rugir y tienen una melena. Los elefantes pueden hacer
sonar su trompa y tienen un tamaño especifico (por ejemplo, 'pequeño', 'mediano' y 'grande').

Crea una clase base Animal con las propiedades y metodos necesarios

Extender la clase animal para crear clases especificas como Leon y Elefante que tengan comportamientos
y propiedades particulares

*/


class Animal {

    constructor (
        protected name: string,
        protected species: string,
        protected age: number
    ) {
      this.name = name
      this.species = species
      this.age = age
    }

    makeSound() {

    }

    toString() {
      return `Name: ${this.name}\nSpicy: ${this.species}\nAge: ${this.age}`
    }
}

class Lion extends Animal {
  constructor(
    name: string,
    species: string,
    age: number
  ) {
    super(name, species, age)
  }

  makeSound(): string {
    return 'Roar'
  }

  print(): string {
    const info = this.toString()

    return `🦁:\n ${info}`
  }
}

type SizeElephant = 'Small'|'Medium'|'Large'

class Elephant extends Animal {

constructor(
    name: string,
    species: string,
    age: number,
    private size: SizeElephant
  ) {
    super(name, species, age)
  }

  makeSound(): string {
    return 'Phhhhh'
  }

  print(): string {
    const info = this.toString()

    return `🐘:\n ${info}\nSize: ${this.size}`
  }

}

const l1 = new Lion('Simba', 'King', 8)
console.log(l1.makeSound())
console.log(l1.print()) 

const e1 = new Elephant('Dumbo', 'Volador', 5,'Small')
console.log(e1.makeSound())
console.log(e1.print()) 
