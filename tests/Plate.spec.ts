import 'chai';
import {expect} from 'chai';
import {Food} from '../src/Food';
import {Plate} from '../src/Plate'

let alimento01 = new Food("Carne molida", "Carne", "Valladolid", 200, 10, 50, 10);
let alimento02 = new Food("Carne molida", "Carne", "Valladolid", 200, 10, 50, 10);
let alimento03 = new Food("Carne molida", "Carne", "Valladolid", 200, 10, 50, 10);


let plato01 = new Plate("Espaguetis", new Map<Food,number>([[alimento01, 100], [alimento02, 200], [alimento03, 500]]), "Segundo Plato");

describe('check Plate class', () => {
  it('comprobacion si plato01 es un objeto de la clase Plate', () => {
    expect(plato01).to.be.an.instanceOf(Plate);
  });
});

/*
describe('check getFood function of Plate class', () => {
  it('comprobacion si getFood funcionan', () => {
    expect(plato01.getFood()).to.be.("Solomillo");
  });
});*/