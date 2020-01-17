import { expect } from 'chai';
import reverse from '../src/reverseString';

describe('Reverse String', () => {
  it('should reverse method exists', () => {
    expect(reverse).to.exist;
  });

  it('should reverse the string \'abcd\'', () => {
    expect(reverse('abcd')).to.be.equal('dcba');
  });

  it('should reverse the string \'potatoe\'', () => {
    expect(reverse('potatoe')).to.be.equal('eotatop');
  });
});
