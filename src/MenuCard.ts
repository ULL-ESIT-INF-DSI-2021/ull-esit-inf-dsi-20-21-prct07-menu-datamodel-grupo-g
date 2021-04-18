import { Food } from './Food'
import { Plate } from './Plate'
import { Menu } from './Menu'
import * as plates from './list_plates'
import * as menus from './list_menu'

/** 
 * Clase MenuCard que realiza la composición de la carta de nuestros platos y menus
 * sus atributos corresponden a un vector de objetos de tipo Plate y otro de objetos tipo
 * Menu, ambos se construiran mediante las listas list_menu y list_plates (a la vez esta con
 * list_food) 
 */
export class MenuCard {
  private plates: Plate[] = [];
  private menu: Menu[] = [];
  constructor(){
    Object.values(plates).forEach(element => {
      this.plates.push(element)
    });
    Object.values(menus).forEach(element => {
      this.menu.push(element)
    });
  }

  getPlates() {
    return this.plates;
  }

  getMenu() {
    return this.menu;
  }

  /**
   * Imprime la carta con los platos junto a los menus llamando a los métodos de impresión
   * de las clases correspondientes
   */
  printMenu() {

    console.log("---------------- CARTA ----------------");
    console.log();
    
    console.log("-------------- ENTRANTES --------------");
    for(let plate of this.plates) {
      if(plate.getCategory() == "Entrante") {
        plate.printFood();
      }
    }
    
    console.log("------------- PRIMER PLATO ------------");
    for(let plate of this.plates) {
      if(plate.getCategory() == "Primer Plato") {
        plate.printFood();
      }
    }
    
    console.log("------------ SEGUNDO PLATO ------------");
    for(let plate of this.plates) {
      if(plate.getCategory() == "Segundo Plato") {
        plate.printFood();
      }
    }
    
    console.log("--------------- POSTRES ---------------");
    for(let plate of this.plates) {
      if(plate.getCategory() == "Postre") {
        plate.printFood();
      }
    }
    
    console.log("---------------- MENUS ----------------");
    for(let menu of this.menu) {
      menu.printMenu();
    }
  }
}  

