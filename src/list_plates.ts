import { Food } from './Food'
import * as food from './list_food'
import { Plate } from './Plate'

/*Entrante*/
/*
Queso asado
Escaldón
Champiñones rellenos
Croquetas
Pan con ajo
*/
export let quesoAsado = new Plate("Queso asado", new Map<Food, number>([[food.queso_cabra, 200]]), "Entrante");
export let escaldon = new Plate("Escaldón", new Map<Food, number>([[food.gofio, 300], [food.cebolla, 200]]), "Entrante");
export let champiñones_rellenos = new Plate("Champiñones rellenos", new Map<Food, number>([[food.champiñón, 300], [food.leche_entera, 50], [food.queso_azul, 50]]), "Entrante");
export let croquetas = new Plate("Croquetas", new Map<Food, number>([[food.pan, 250], [food.patata, 800], [food.leche_entera, 0.5], [food.huevo_gallina, 73], [food.jamon_cocido, 150]]), "Entrante");
export let panConAjo = new Plate("Pan con ajo", new Map<Food, number>([[food.pan, 250], [food.queso_rallado, 20], [food.ajo, 30]]), "Entrante");

/*Primer plato*/
/*
Huevos estrellados
Ensalada
Potaje
Ensaladilla
Tomates aliñados
Calamares
*/
export let huevosEstrellados = new Plate("Huevos Estrellados El Escaldón", new Map<Food, number>([[food.patata, 1000], [food.huevo_gallina, 300], [food.jamón_serrano, 150]]), "Primer Plato");
export let ensalada = new Plate("Ensalada", new Map<Food, number>([[food.aguacate, 340], [food.naranja, 300], [food.mandarina, 230], [food.tomate, 735], [food.calabacin, 250], [food.lechuga, 100]]), "Primer Plato"); 
export let potaje = new Plate("Potaje", new Map<Food, number>([[food.ajo, 75], [food.cebolla, 100], [food.tomate, 450], [food.berenjena, 800]]), "Primer Plato");
export let Ensaladilla = new Plate("Ensaladilla", new Map<Food, number>([[food.patata, 500], [food.zanahoria, 200], [food.atún, 100], [food.gambas, 200], [food.huevo_gallina, 400], [food.limón, 100]]), "Primer Plato");
export let tomates_aliñados = new Plate("Tomates aliñados", new Map<Food, number>([[food.tomate, 630], [food.ajo, 75]]), "Primer Plato");
export let calamares = new Plate("Calamares", new Map<Food, number>([[food.calamar, 1000], [food.cebolla, 200], [food.ajo, 75]]), "Primer Plato");

/*Segundo plato*/
/*
Carne fiesta
Tortilla
Ropa vieja
Arroz a la cubana
Pulpo guisado
Garbanzas
*/

export let pulpoGuisado = new Plate("Pulpo Guisado", new Map<Food, number>([[food.pulpo, 800], [food.cebolla, 200], [food.ajo, 60], [food.tomate, 630], [food.patata, 500]]), "Segundo Plato");
/*
export let carneFiesta = new Plate("Carne fiesta", new Map<Food, number>([[food.chuleta_ternera, 500], [food.ajo, 90], [food.zanahoria, 160]]) , "Segundo Plato");
export let tortilla = new Plate("Tortilla", new Map<Food, number>([[]]) , "Segundo Plato");
export let ropa_vieja = new Plate("Ropa vieja", new Map<Food, number>([[]]) , "Segundo Plato");
export let arrozALaCubana = new Plate("Arroz a la cubana", new Map<Food, number>([[]]) , "Segundo  Plato");
export let garbanzas = new Plate("Garbanza", new Map<Food, number>([[]]) , "Segundo  Plato");
*/


/*Postre*/
/*
Tarta de chocolate
Quesillo
Polvito uruguayo
Principe Alberto
*/

/*
export let tartaDeChocolate
export let quesillo
export let polvitoUruguayo
export let principeAlberto

*/