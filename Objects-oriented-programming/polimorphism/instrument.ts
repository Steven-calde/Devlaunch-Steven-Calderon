type InstrumentType = 'Viento' | 'Cuerda' | 'Percusion'

abstract class Instrument {
    constructor(public type: InstrumentType) {
    }

    play () {
    }
}

class Guitar extends Instrument {
    constructor () {
        super('Cuerda')
    }

play() {
    console.log('Strum strum strum...')
    }
}

class Flaut extends Instrument {
    constructor() {
        super('Viento')
    }
    play() {
        console.log('Toot toot toot...')
    }
}


class Drums extends Instrument {
    constructor() {
        super('Percusion')
    }
    play() {
        console.log('boom boom boom...')
    }

}

const guitar1 = new Guitar()
const flaut1 = new Flaut()
const drums1 = new Drums()

guitar1.play()
flaut1.play()
drums1.play()
