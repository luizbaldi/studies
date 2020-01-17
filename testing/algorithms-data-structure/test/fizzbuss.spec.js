import { expect } from 'chai';
import fizzBuzz from '../src/fizzbuz';
import fizzbuz from '../src/fizzbuz';

describe('FizzBuz', () => {
  it('should fizzBuzz method exist', () => {
    expect(fizzBuzz).to.be.a('function');
  });

  it('should print fizz', () => {
    expect(fizzbuz(3)).to.be.equal('fizz');
    expect(fizzbuz(9)).to.be.equal('fizz');
  });

  it('should print buzz', () => {
    expect(fizzbuz(5)).to.be.equal('buzz');
    expect(fizzbuz(20)).to.be.equal('buzz');
  });

  it('should print fizzbuzz', () => {
    expect(fizzbuz(15)).to.be.equal('fizzbuzz');
    expect(fizzbuz(30)).to.be.equal('fizzbuzz');
  });
});
