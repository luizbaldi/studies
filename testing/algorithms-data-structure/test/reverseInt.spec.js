import { expect } from 'chai';
import reverseInt from '../src/reverseInt';

describe('Reverse int', () => {
  it('should reverse int method exist', () => {
    expect(reverseInt).to.exist;
  });

  it('should return a number', () => {
    expect(reverseInt(123)).to.be.a('number');
  });

  it('reverse handles 0 as an input', () => {
    expect(reverseInt(0)).to.be.equal(0);
  });

  it('should reverse positive numbers', () => {
    expect(reverseInt(123)).to.be.equal(321);
    expect(reverseInt(789)).to.be.equal(987);
  });

  it('should reverse a negative number', () => {
    expect(reverseInt(-123)).to.be.equal(-321);
    expect(reverseInt(-789)).to.be.equal(-987);
  });
});
