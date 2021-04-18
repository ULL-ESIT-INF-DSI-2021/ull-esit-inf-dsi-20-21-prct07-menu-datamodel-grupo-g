import { Food } from './Food'
import * as food from './list_food'
import * as plates from './list_plates'

type Category = "Entrante" | "Primer Plato" | "Segundo Plato" | "Postre"

export class Plate {
  /**
   * Clase Plate, se encarga de crear los distintos platos (formados por las variables indicadas
   * aquí) y de hacer los cálculos de cantidades y precios de cada uno de ellos.
   * @param name Nombre del plato
   * @param food Variable de tipo Map que almacena un objeto de tipo Food que contendrá los alimentos por los 
   * cuales esta formado el plato y un number que será la cantidad (en gramos) de cada uno de esos alimentos 
   * que utilizamos.
   * @param category Tipo de plato al que nos referimos: entrante, primer plato... de un tipo de dato que contiene
   * la información en distintas cadenas.
   */
  constructor(public name: string,  private food: Map<Food, number>, private category: Category) {
  }
  
  getName() {
    return this.name;
  }
  
  getFood() {
    return this.food;
  }

  getCategory() {
    return this.category;
  }

  /**
   * Método de impresion printFood(), se encarga de estructurar y escribir la información por pantalla de un plato.
   */
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

  /**
   * Método getNutricional() encargado de adaptar los valores nutricionales del plato a la cantidad de cada alimento indicada.
   * El método divide la cantidad indicada en gramos de cada alimento del plato por cien y lo almacena en un multiplicador (ya que los 
   * valores nutricionales indicados en el objeto Food se encuentran por hidratos de carbono, proteínas y lípidos por cada 100 gramos 
   * de nuestro alimento). Sumaremos estos valores nutricionales de todos los alimentos para obtener el valor total de cada uno, 
   * para esto multiplicaremos el valor nutricional correspondiente del alimento por nuestro multiplicador.
   * @returns retorna un Map con el tipo de valor nutricional al que se refiera y un number con el total de ese valor nutricional
   * de todos los alimentos del plato.
   */
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

  /**
   * Método printNutritional(), se encarga escribir la información por pantalla de los valores nutricionales de un plato.
   */
  printNutritional() {
    let info = this.getNutritional()
    for(let i of info) {
      console.log("  " + i[0] + ": " + i[1].toFixed(2))
    }
  }
  
  /**
   * Método priceGenerator() recoge el precio de cada uno de los alimentos (que se encuentra en €/kg) y realizaremos una
   * comparación con el peso del alimento que se utilizara para el plato, multiplicando este por el precio del alimento por kilogramo
   * y dividiendo este entre mil (para corresponderlo con los gramos, que es la unidad en la que se encuentra el peso de los alimentos).
   * Hemos agregado tambien un valor extra para el precio que será el precio de la mano de obra, el cual incrementará el precio final.
   * @returns devuelve el precio total del plato.
   */
  priceGenerator() {
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

  /**
   * Método getGroups() que se encarga de buscar en los platos los tipos de alimentos que tenemos para almacenarlos en un 
   * vector de cadenas.
   * @returns devuelve un vector de string con los tipos de alimentos hallados en nuestro plato.
   */
  getGroups() {
    let resultado: string[] = []
    for (let i of this.food){
      resultado.push(i[0].getGroup())
    }
    return resultado
  }
}