import { expect } from 'chai';
import { palindrome, reverseString } from '../src/palindrome';

describe('Palindrome', () => {
  it('should palindrome method exists', () => {
    expect(palindrome).to.exist;
  });

  it('should reverseString method exists', () => {
    expect(reverseString).to.exist;
  });

  it('should reverse the string \'bucket\'', () => {
    expect(reverseString('bucket')).to.be.equal('tekcub');
  });

  it('should return true when a string is palidrome', () => {
    expect(palindrome('bob')).to.be.true;
  });

  it('should return false when a string isn\'t a palindrome', () => {
    expect(palindrome('bucket')).to.be.false;
  });
});
