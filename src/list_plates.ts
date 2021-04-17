import {Food} from './Food'
import * as food from './list_food'
import { Plate } from './Platos'

/*Entrante*/
/*
Queso asado
Escaldón
Champiñones rellenos
Croquetas
Pan con ajo
*/
export let queso_asado = new Plate("Queso asado", new Map<Food, number>([[food.queso_cabra, 200]]), "Primer Plato")
export let escaldon = new Plate("Escaldon", new Map<Food, number>([[food.gofio, 300], [food.cebolla, 200]]), "Primer Plato")
//export let  = new Plate("Nombre", new Map<Food, number>([[food.arroz_blanco, 500], [food.leche_desnatada, 200]]), "Primer Plato")

/*Primer plato*/
/*
Huevos estrellados
Ensalada
Potaje
Ensaladilla
Tomates aliñados
Calamares
*/

/*Segundo plato*/
/*
Carne fiesta
Tortilla
Ropa vieja
Arroz a la cubana
Pulpo guisado
Garbanzas
*/

/*Postre*/
/*
Tarta de chocolate
Quesillo
Polvito uruguayo
Principe Alberto
*/