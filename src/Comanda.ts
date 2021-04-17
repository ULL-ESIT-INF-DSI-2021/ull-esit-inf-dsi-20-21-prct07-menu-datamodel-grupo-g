import * as inquirer from 'inquirer'

class Carta {
    constructor(){}
}

enum Commands {
    VerCarta = "Ver Carta",
    Pedir = "Pedir comida",
    Salir = "Salir"
}

enum Commands2 {
    VerPlatos = "Ver Platos",
    VerMenus = "Ver Menús",
    Salir = "Salir"
}

export class Comanda {
    private carta: Carta
    constructor(){
        this.carta = new Carta()
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
                    this.promptCarta()
                    break;
            }
        });
    }

    promptCarta(){
        console.clear()
        inquirer.prompt({
            type: "list",
            name: "Carta",
            message: "Platos",
            choices: ["Queso Blanco", "Papas Arrugadas", "Ropa vieja"]
        }).then(answers => {
            this.visualizar()
        });
    }

    visualizar(){
        console.clear()
        console.log("Queso Blanco: \n 504 hidratos de carbono\n 202 proteinas \n 100 lípidos \n Precio: 5€")
        inquirer.prompt({
            type: "list",
            name: "Retroceder",
            choices: ["Retroceder"]
        }).then(answers => {
            this.promptCarta()
        });
    }
}

let x = new Comanda()
x.promptUser()