import * as inquirer from 'inquirer'
import {MenuCard} from './MenuCard'
import * as lowdb from 'lowdb'
import * as FileSync from 'lowdb/adapters/FileSync'

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

type schemaType = {
  comanda: { pedido: string, cantidad: number }
}

export class Comanda {
  private carta: MenuCard
  private database: lowdb.LowdbSync<schemaType>
  private pedido: Map<string, number>
  /** 
   * Clase comanda, se encarga de implementar una interfaz interactiva que permite al cliente ver la carta, y seleccionar los platos que desea
   * El constructor se encargará de inicializar los atributos pedido, que se sincronizará con database, que escribirá en el archivo Comanda.json el pedido del cliente.
   * El atributo carta contiene todos los platos y menus de las listas.
   */
  constructor(){
    this.pedido = new Map<string, number>()
    this.carta = new MenuCard();
    this.database = lowdb(new FileSync("Comanda.json"));
  }
  /**
   * promptUser() ofrece la interfaz inicial del cliente, en el que decidirá si ver la carta o realizar un pedido.
   */
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
  /**
   * Si el cliente decide hacer un pedido, se llamará a este método, que simplemente es una interfaz en la que decide si escoger menu o plato.
   */
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

  /**
   * El método promptPlatos() implementa una interfaz que permite seleccionar un plato y que cantidad de ese plato.
   */
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
       this.pedido.set(plato, cantidad)
       this.store()
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
  /**
   * El método promptMenus() implementa una interfaz que permite seleccionar un menu y cuantos menus desea.
   */
  promptMenus(){
    let menu: string;
    let cantidad: number;
    console.clear()
    inquirer.prompt({
      type: "list",
      name: "menus",
      message: "Seleccione el menu que desee",
      choices: this.carta.getMenu()
    }).then(answers => {
      menu = answers.menus
      inquirer.prompt({
        type: "number",
        name: "Cantidad",
        message: "¿Cuantas menus " + menu + " desea?"
      }).then(answers => {
        cantidad = answers.Cantidad
      }).then(answers => {
       this.pedido.set(menu, cantidad)
       this.store()
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

  /**
   * Método privado que se usa dentro de la clase para almacenar en la base de datos.
   */
  private store() {
    this.database.set("comanda", [...this.pedido]).write()
  }

}

/*
let x = new Comanda()
x.promptUser()*/