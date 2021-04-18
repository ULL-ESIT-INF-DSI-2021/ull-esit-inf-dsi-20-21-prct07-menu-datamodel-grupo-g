import { Food } from './Food'
import * as food from './list_food'
import * as plates from './list_plates'

type Category = "Entrante" | "Primer Plato" | "Segundo Plato" | "Postre"

export class Plate {
  
  constructor(public name: string,  private food: Map<Food, number>, private category: Category){
  }

  getName() {
    return this.name;
  }
  
  getFood() {
    return this.food;
  }

  printFood() {
    let aux: string = "";
    console.log();
    console.log("Nombre del plato: ", this.getName());

    for (let food of this.food) {
      aux += food[0].getName();
      aux += "  ";
    }
    
    console.log("Ingredientes: ", aux);
    console.log("Información nutricional: ");
    this.printNutritional();
    console.log("Precio: " + (this.priceGenerator()).toFixed(2) + "€");
    console.log(); 
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

  printNutritional() {
    let info = this.getNutritional()
    for(let i of info) {
      console.log("  " + i[0] + ": " + i[1].toFixed(2))
    }
  }
  
  priceGenerator() { //calcular el precio del plato según los alimentos que tenga y su proporcion
    let price1000: number = 0;
    let foodWeight: number = 0;
    let totalPrice: number = 0;

    for (let i of this.food) {
      price1000 = i[0].getPrice();
      foodWeight = i[1];
      totalPrice += (foodWeight * price1000)/1000
    }

    totalPrice += 2; //Precio por mano de obra

    return totalPrice
  }

  getGroups() {
    let resultado: string[] = []
    for (let i of this.food){
      resultado.push(i[0].getGroup())
    }
    return resultado
  }
}