import 'chai';
import {expect} from 'chai';
import {Food} from '../src/Food';
import {Plate} from '../src/Plate'

let alimento01 = new Food("Carne molida", "Carne", "Valladolid", 200, 10, 50, 10);
let alimento02 = new Food("Pasta", "Semillas", "Valladolid", 200, 10, 50, 10);
let alimento03 = new Food("Queso rallado", "Quesos", "Valladolid", 200, 10, 50, 10);


let plato01 = new Plate("Espaguetis", new Map<Food,number>([[alimento01, 200], [alimento02, 500], [alimento03, 100]]), "Segundo Plato");

describe('check Plate class', () => {
  it('comprobacion si plato01 es un objeto de la clase Plate', () => {
    expect(plato01).to.be.an.instanceOf(Plate);
  });
});


describe('check getName function of Plate class', () => {
  it('comprobacion si getName funcionan', () => {
    expect(plato01.getName()).to.be.equal("Espaguetis");
  });
});

describe('check getFood function of Plate class', () => {
  it('comprobacion si getFood funcionan', () => {
    expect(plato01.getFood()).to.be.instanceOf(Map);
  });
});

describe('check printFood function of Plate class', () => {
  it('comprobacion si printFood funcionan', () => {
    plato01.printFood();
  });
});

describe('check getCategory function of Plate class', () => {
  it('comprobacion si getCategory funcionan', () => {
    expect(plato01.getCategory()).to.be.eql("Segundo Plato");
  });
});

describe('check getNutritional function of Plate class', () => {
  it('comprobacion si getNutritional funcionan', () => {
    expect(plato01.getNutritional()).to.be.an.instanceOf(Map);
  });
});

describe('check printNutritional function of Plate class', () => {
  it('comprobacion si printNutritional funcionan', () => {
    plato01.printNutritional();
  });
});

describe('check priceGenerator function of Plate class', () => {
  it('comprobacion si priceGenerator funcionan', () => {
    expect(plato01.priceGenerator()).to.be.equal(10);
  });
});

describe('check getGroups function of Plate class', () => {
  it('comprobacion si getGroups funcionan', () => {
    expect(plato01.getGroups()).to.be.a('string');
  });
});


