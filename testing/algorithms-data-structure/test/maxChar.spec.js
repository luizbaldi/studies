import { expect } from 'chai';
import maxChar from '../src/maxChar';

describe('Max Char', () => {
  it('should maxChat method exist', () => {
    expect(maxChar).to.be.a('function');
  });

  it('should find the most frequently used char', () => {
    expect(maxChar('a')).to.be.equal('a');
    expect(maxChar('potatu')).to.be.equal('t');
  });

  it('should find the most frequently used char with numbers', () => {
    expect(maxChar(111234)).to.be.equal('1');
    expect(maxChar(6547888)).to.be.equal('8');
    expect(maxChar('potatu999')).to.be.equal('9');
  });
});
