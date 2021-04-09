import {Food} from './Food'

type Category = "Entrante" | "Primer plato" | "Segundo Plato" | "Postre"

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
  }

}

let ternera = new Food("Ternera", "Carne", "Madrid", 30, 40, 10, 100);
let alimento01 = new Food("Carne molida", "Carne", "Valladolid", 200, 10, 50, 10);
let alimento02 = new Food("Carne molida", "Carne", "Valladolid", 200, 10, 50, 10);
let alimento03 = new Food("Carne molida", "Carne", "Valladolid", 200, 10, 50, 10);


let plato01 = new Plate("Espaguetis", new Map<Food,number>([[alimento01, 100], [alimento02, 200], [alimento03, 500]]), "Segundo Plato");

console.log(plato01.getNutritional());
plato01.printFood();