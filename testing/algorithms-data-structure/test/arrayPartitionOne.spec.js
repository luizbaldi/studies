import { expect } from 'chai';
import arrayPartition from '../src/arrayPartitionOne';

describe('Array partition one', () => {
  it('should arrayPartition method exist', () => {
    expect(arrayPartition).to.be.a('function');
  });

  it('should return sum of min chunks', () => {
    const input = [1,4,3,2];
    expect(arrayPartition(input)).to.be.equal(4);
  });
});
