import { Food } from './Food'
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
export let queso_asado = new Plate("Queso asado", new Map<Food, number>([[food.queso_cabra, 200]]), "Entrante");
export let escaldon = new Plate("Escaldon", new Map<Food, number>([[food.gofio, 300], [food.cebolla, 200]]), "Entrante");
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
export let huevosEstrellados = new Plate("Huevos Estrellados El Escaldón", new Map<Food, number>([[food.patata, 1000], [food.huevo_gallina, 300], [food.jamón_serrano, 150]]), "Primer Plato")

/*Segundo plato*/
/*
Carne fiesta
Tortilla
Ropa vieja
Arroz a la cubana
Pulpo guisado
Garbanzas
*/
export let pulpoGuisado = new Plate("Pulpo Guisado", new Map<Food, number>([[food.pulpo, 800], [food.cebolla, 200], [food.ajo, 60], [food.tomate, 630], [food.patata, 500]]), "Segundo Plato")

/*Postre*/
/*
Tarta de chocolate
Quesillo
Polvito uruguayo
Principe Alberto
*/