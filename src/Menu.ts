import {Plate} from './Platos'
import {plato02} from './Platos'
import {plato03} from './Platos'
import {plato04} from './Platos'


class Menu {
    constructor(private entrante: Plate, private primerPlato: Plate, private segundoPlato: Plate, private postre?: Plate){
        if (entrante.getCategory() != 'Entrante' || primerPlato.getCategory() != 'Primer Plato' || segundoPlato.getCategory() != 'Segundo Plato') {
            if (postre != undefined) {
                if (postre.getCategory() != 'Postre') {
                    throw 'El postre no se corresponde con su categoría'
                }
            }
            throw 'Se tiene que añadir un entrante, primer plato, segundo plato, obligatoriamente en ese orden.'
        }
    }

    getPrice() {
        return this.entrante.priceGenerator() + this.primerPlato.priceGenerator() + this.segundoPlato.priceGenerator()
    }

    getPlates() {
        console.log(`Menú:\n Entrante: ${this.entrante.getName()}\n Primer Plato: ${this.primerPlato.getName()}\n Segundo Plato: ${this.segundoPlato.getName()}\n`)
        if (this.postre != undefined) {
            console.log(`Postre: ${this.postre.getName()}\n`)
        }
    }

    getNutritional() {
        let resultado = new Map<string,number>()
        let proteinas: number = 0;
        let hidratos: number = 0;
        let lípidos: number = 0;
        let kcal: number = 0;

        //proteinas = this.entrante.getNutritional()
        
    }
}

let prueba = new Menu(plato02,plato03,plato04)
