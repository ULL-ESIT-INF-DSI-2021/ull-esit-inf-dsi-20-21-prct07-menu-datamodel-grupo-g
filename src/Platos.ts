import {Food} from './Food'
import * as food from './list_food'

type Category = "Entrante" | "Primer Plato" | "Segundo Plato" | "Postre"

export class Plate {
  
  constructor(private name: string,  private food: Map<Food, number>, private category: Category){
  }

  getName() {
    return this.name;
  }
  
  getFood() {
    return this.food;
  }

  printFood() {
    for (let food of this.food) {
      console.log(food[0].getName());
    } 
  }

  getCategory() {
    return this.category;
  }

  getNutritional() { 
    let resultado = new Map<string,number>()
    let proteinas: number = 0;
    let hidratos: number = 0;
    let lípidos: number = 0;
    let kcal: number = 0;
    for (let i of this.food) {
      let multiplier = i[1]/100;
      proteinas = proteinas + (i[0].getProteins() * multiplier);
      hidratos = hidratos + (i[0].getHydrates() * multiplier);
      lípidos = lípidos + (i[0].getLipids() * multiplier);
      kcal = kcal + (i[0].getKcal() * multiplier)
    }
    
    resultado.set("Hidratos",hidratos);
    resultado.set("Proteinas",proteinas);
    resultado.set("Lípidos",lípidos);
    resultado.set("Kcal", kcal)

    return resultado;
  }
  
  priceGenerator() { //calcular el precio del plato según los alimentos que tenga y su proporcion
    //let price = 

    return 5
  }

  getGroups() {
    let resultado: string[] = []
    for (let i of this.food){
      resultado.push(i[0].getGroup())
    }
    return resultado
  }

}
