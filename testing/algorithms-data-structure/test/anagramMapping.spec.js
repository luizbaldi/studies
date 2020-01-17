import { expect } from 'chai';
import anagram from '../src/anagramMapping';

describe('Anagram Mapping', () => {
  it('should anagram method exist', () => {
    expect(anagram).to.be.a('function');
  });

  it('should validate simple anagram mapping', () => {
    const arrOne = [12, 28, 46, 32, 50];
    const arrTwo = [50, 12, 32, 46, 28];
    const expectedResult = [1, 4, 3, 2, 0];

    expect(anagram(arrOne, arrTwo)).to.be.eql(expectedResult);
  });
});
