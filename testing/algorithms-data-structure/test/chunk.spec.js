import { expect } from 'chai';
import chunk from '../src/chunk';

describe('Chunk', () => {
  it('should chunk method exist', () => {
    expect(chunk).to.be.a('function');
  });

  it('should chunk an array of 4 elements with size 2', () => {
    const arr = [1, 2, 3, 4];
    const chunked = chunk(arr, 2);

    expect(chunked).to.be.eql([[1, 2], [3, 4]]);
  });

  it('should chunk an array of 5 elements lefting one item', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunk(arr, 2);

    expect(chunked.length).to.be.equal(3);
  });

  it('should chunk an array with single array inside', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunk(arr, 5);

    expect(chunked).to.be.eql([arr]);
  });
});
