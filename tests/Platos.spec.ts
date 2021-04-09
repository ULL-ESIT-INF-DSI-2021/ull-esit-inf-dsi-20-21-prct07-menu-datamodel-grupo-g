import 'chai';
import {expect} from 'chai';
import {Food} from '../src/Food';
import {Plate} from '../src/Platos'

let ternera = new Food("Ternera", "Carne", "Madrid", 30, 40, 10, 100);
let alimento01 = new Food("Carne molida", "Carne", "Valladolid", 200, 10, 50, 10);
let alimento02 = new Food("Carne molida", "Carne", "Valladolid", 200, 10, 50, 10);
let alimento03 = new Food("Carne molida", "Carne", "Valladolid", 200, 10, 50, 10);


let plato01 = new Plate("Espaguetis", new Map<Food,number>([[alimento01, 100], [alimento02, 200], [alimento03, 500]]), "Segundo Plato");

describe('check Food class', () => {
  it('comprobacion si ternera es un objeto de la clase Food', () => {
    expect(ternera).to.be.an.instanceOf(Food);
  });
});