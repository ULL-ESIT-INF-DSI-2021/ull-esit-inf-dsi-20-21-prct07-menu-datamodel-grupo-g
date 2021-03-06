import { Food } from './Food'
import {Plate} from './Plate'


export class Menu {
  /**
   * Constructor de la clase Menú, que representa un Menu, mediante un nombre, y un plato de cada categoría. El menú puede tener o no un postre.
   */
  constructor(public name: string, private entrante: Plate, private primerPlato: Plate, private segundoPlato: Plate, private postre?: Plate){
    if (entrante.getCategory() != 'Entrante' || primerPlato.getCategory() != 'Primer Plato' || segundoPlato.getCategory() != 'Segundo Plato') {
      if (postre != undefined) {
        if (postre.getCategory() != 'Postre') {
          throw 'El postre no se corresponde con su categoría'
        }
      }
    throw 'Se tiene que añadir un entrante, primer plato, segundo plato, obligatoriamente en ese orden.'
    }
  }

  /**
   * Método que devuelve el precio total de menú
   * @returns Precio de menú
   */
  getPrice() {
    return this.postre != undefined ? this.entrante.priceGenerator() + this.primerPlato.priceGenerator() + this.segundoPlato.priceGenerator() + this.postre.priceGenerator() : this.entrante.priceGenerator() + this.primerPlato.priceGenerator() + this.segundoPlato.priceGenerator()
  }

  /**
   * Imprime el menú
   */
  printMenu() { 
    console.log();
    console.log(`${this.name}:\n  Entrante: ${this.entrante.getName()}\n  Primer Plato: ${this.primerPlato.getName()}\n  Segundo Plato: ${this.segundoPlato.getName()}`)
    if (this.postre != undefined) {
      console.log(`  Postre: ${this.postre.getName()}\n`);
    }
    console.log("  Información nutricional: ");
    let info = this.getNutritional()
    for(let i of info) {
      console.log("    " + i[0] + ": " + i[1].toFixed(2));
    }
    this.printCategories();
    console.log("  Precio: " + this.getPrice().toFixed(2) + "€");
    console.log();
  }

  /**
   * Método que devuelve todos los platos del menú en un array.
   * @returns Array con los platos del menú.
   */
  getPlates() {
    return this.postre != undefined ? [this.entrante, this.primerPlato, this.segundoPlato, this.postre] : [this.entrante, this.primerPlato, this.segundoPlato]
  }

  /**
   * Método que devuelve la información nutricional de todo el menú en un Map.
   * @returns Map con toda la información nutricional.
   */
  getNutritional() {
    let resultado = new Map<string,number>()
    let proteinas: number = 0;
    let hidratos: number = 0;
    let lípidos: number = 0;
    let kcal: number = 0;

    if (this.postre != undefined) {
      proteinas = this.entrante.getNutritional().get('Proteinas') + this.primerPlato.getNutritional().get('Proteinas') + this.segundoPlato.getNutritional().get('Proteinas') + this.postre.getNutritional().get('Proteinas')
      hidratos = this.entrante.getNutritional().get('Hidratos') + this.primerPlato.getNutritional().get('Hidratos') + this.segundoPlato.getNutritional().get('Hidratos') + this.postre.getNutritional().get('Hidratos')
      lípidos = this.entrante.getNutritional().get('Lípidos') + this.primerPlato.getNutritional().get('Lípidos') + this.segundoPlato.getNutritional().get('Lípidos') + this.postre.getNutritional().get('Lípidos')
      kcal = this.entrante.getNutritional().get('Kcal') + this.primerPlato.getNutritional().get('Kcal') + this.segundoPlato.getNutritional().get('Kcal') + this.postre.getNutritional().get('Kcal')
    }
    else {
      proteinas = this.entrante.getNutritional().get('Proteinas') + this.primerPlato.getNutritional().get('Proteinas') + this.segundoPlato.getNutritional().get('Proteinas')
      hidratos = this.entrante.getNutritional().get('Hidratos') + this.primerPlato.getNutritional().get('Hidratos') + this.segundoPlato.getNutritional().get('Hidratos')
      lípidos = this.entrante.getNutritional().get('Lípidos') + this.primerPlato.getNutritional().get('Lípidos') + this.segundoPlato.getNutritional().get('Lípidos')
      kcal = this.entrante.getNutritional().get('Kcal') + this.primerPlato.getNutritional().get('Kcal') + this.segundoPlato.getNutritional().get('Kcal')
    }

    resultado.set("Hidratos", hidratos)
    resultado.set("Proteínas", proteinas)
    resultado.set("Lípidos", lípidos)
    resultado.set("Kcal",kcal)

    return resultado
  }
  /**
   * Imprime las categorías de los alimentos de cada plato.
   */
  printCategories(){
    console.log(`Categorías de los alimentos en cada plato: \n  Entrante: ${this.entrante.getGroups()}\n  Primer Plato: ${this.primerPlato.getGroups()}\n  Segundo Plato: ${this.segundoPlato.getGroups()}`)
    if (this.postre != undefined) {
      console.log(`  Postre: ${this.postre.getGroups()}`)
    }
  }
}

