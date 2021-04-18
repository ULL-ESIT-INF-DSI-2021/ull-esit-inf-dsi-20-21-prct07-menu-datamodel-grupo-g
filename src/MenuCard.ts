import { Food } from './Food'
import { Plate } from './Plate'
import { Menu } from './Menu'
import * as plates from './list_plates'
import * as menus from './list_menu'


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

