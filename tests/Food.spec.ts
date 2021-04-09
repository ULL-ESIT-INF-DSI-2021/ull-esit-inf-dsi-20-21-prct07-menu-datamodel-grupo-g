import 'chai';
import {expect} from 'chai';
import {Food} from '../src/Food';

let ternera = new Food("Ternera", "Carne", "Madrid", 30, 40, 10, 100);

describe('check Food class', () => {
  it('comprobacion si ternera es un objeto de la clase Food', () => {
    expect(ternera).to.be.an.instanceOf(Food);
  });
});

describe('check setName y getName function of Food class', () => {
  it('comprobacion si setName y getName funcionan', () => {
    ternera.setName("Solomillo")
    expect(ternera.getName()).to.be.eql("Solomillo");
  });
});

describe('check setGroup y getGroup function of Food class', () => {
  it('comprobacion si setGroup y getGroup funcionan', () => {
    ternera.setGroup("Leche")
    expect(ternera.getGroup()).to.be.eql("Leche");
  });
});

describe('check setOrigin y getOrigin function of Food class', () => {
  it('comprobacion si setOrigin y getOrigin funcionan', () => {
    ternera.setOrigin("Barcelona")
    expect(ternera.getOrigin()).to.be.eql("Barcelona");
  });
});

describe('check setHydrates y getHydrates function of Food class', () => {
  it('comprobacion si setHydrates y getHydrates funcionan', () => {
    ternera.setHydrates(50)
    expect(ternera.getHydrates()).to.be.equal(50);
  });
});

describe('check setProteins y getProteins function of Food class', () => {
  it('comprobacion si setProteins y getProteins funcionan', () => {
    ternera.setProteins(60)
    expect(ternera.getProteins()).to.be.equal(60);
  });
});

describe('check setLipids y getLipids function of Food class', () => {
  it('comprobacion si setLipids y getLipids funcionan', () => {
    ternera.setLipids(10)
    expect(ternera.getLipids()).to.be.equal(10);
  });
});

describe('check setPrice y getPrice function of Food class', () => {
  it('comprobacion si setPrice y getPrice funcionan', () => {
    ternera.setPrice(50)
    expect(ternera.getPrice()).to.be.equal(50);
  });
});


