import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/util/calc';

describe('Calc', () => {

  describe('Smoke tests', () => {

    it('should exist the method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist the method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

  });

  describe('Sum', () => {

    it('should validate simple sums', () => {
      expect(sum(2,2)).to.be.equal(4);
      expect(sum(4,4)).to.be.equal(8);
    });

  });

  describe('Sub', () => {

    it('should validate simple subs', () => {
      expect(sub(2,2)).to.be.equal(0);
      expect(sub(4,2)).to.be.equal(2);
    });

  });

  describe('Mult', () => {

    it('should validate simple mults', () => {
      expect(mult(2,2)).to.be.equal(4);
      expect(mult(4,2)).to.be.equal(8);
    });

  });

  describe('Div', () => {

    it('should validate simple divs', () => {
      expect(div(2,2)).to.be.equal(1);
      expect(div(4,2)).to.be.equal(2);
    });

    it('should validate division by zero', () => {
      expect(div(2,0)).to.be.equal('Cannot divide by zero');
      expect(div(4,0)).to.be.equal('Cannot divide by zero');
    });

  });

});
