import * as inquirer from 'inquirer'
import {MenuCard} from './MenuCard'

enum Commands {
  VerCarta = "Ver Carta",
  Pedir = "Pedir comida",
  Salir = "Salir"
}

enum Commands2 {
  VerPlatos = "Pedir Platos",
  VerMenus = "Pedir Menús",
  Salir = "Salir"
}

export class Comanda {
  private carta: MenuCard
  constructor(){
    this.carta = new MenuCard()
  }

  promptUser(){
    console.clear()
    inquirer.prompt({
      type: "list",
      name: "Accion",
      message: "Bienvenido a Guanchinche El Escaldón, ¿Que desea hacer?",
      choices: Object.values(Commands)
    }).then(answers => {
      switch(answers["Accion"]) {
        case Commands.VerCarta:
          this.carta.printMenu();
          break;
        case Commands.Pedir:
          this.promptPedir();
          break;
      }
    });
  }

  promptPedir(){
    console.clear()
    inquirer.prompt({
      type: "list",
      name: "Pedido",
      message: "Seleccione si desea pedir un Menu o Platos",
      choices: Object.values(Commands2)
    }).then(answers => {
      switch(answers["Pedido"]) {
        case Commands2.VerPlatos:
          this.promptPlatos();
          break;
        case Commands2.VerMenus:
          this.promptMenus();
          break;
      }
    });
  }

  promptPlatos(){
    let plato: string;
    let cantidad: number;
    console.clear()
    inquirer.prompt({
      type: "list",
      name: "platos",
      message: "Seleccione el plato que desea",
      choices: this.carta.getPlates()
    }).then(answers => {
      plato = answers.platos
      inquirer.prompt({
        type: "number",
        name: "Cantidad",
        message: "¿Cuantas raciones de " + plato + " desea?"
      }).then(answers => {
        cantidad = answers.Cantidad
      }).then(answers => {
        /* Se guarda en algún sitio
        CODIGO AQUI
        

        */
        inquirer.prompt({
          type: "list",
          name: "AlgoMas",
          message: "¿Desea algo más?",
          choices: ["Sí", "No"]
        }).then(answers => {
          if (answers.AlgoMas == "Sí") {
            this.promptPedir()
          }
        })
      })
    });

  }

  promptMenus(){

  }

}

let x = new Comanda()
x.promptUser()