import 'chai';
import {expect} from 'chai';
import {Food} from '../src/Food';
import {Plate} from '../src/Plate';
import {Menu} from '../src/Menu';

let alimento01 = new Food("Carne molida", "Carne", "Valladolid", 200, 10, 50, 10);
let alimento02 = new Food("Pasta", "Semillas", "Valladolid", 200, 10, 50, 10);
let alimento03 = new Food("Queso rallado", "Quesos", "Valladolid", 200, 10, 50, 10);

let plato01 = new Plate("Espaguetis", new Map<Food,number>([[alimento01, 200], [alimento02, 500], [alimento03, 100]]), "Entrante");
let plato02 = new Plate("Carne molida con pasta", new Map<Food,number>([[alimento01, 200], [alimento02, 500] ]), "Primer Plato");
let plato03 = new Plate("Queso rallado con pasta", new Map<Food,number>([[alimento02, 500], [alimento03, 100]]), "Segundo Plato");
let plato04 = new Plate("Carne molida con queso rallado", new Map<Food,number>([[alimento01, 200], [alimento03, 100]]), "Postre");

let menu01 = new Menu("Pastas, queso y carne", plato01, plato02, plato03, plato04);

describe('check Plate class', () => {
  it('comprobacion si menu01 es un objeto de la clase Menu', () => {
    expect(menu01).to.be.an.instanceOf(Menu);
  });
});

describe('check getPrice function of Menu class', () => {
  it('comprobacion si funcionan', () => {
    expect(plato01.priceGenerator()).to.be.equal(10);
  });
});


