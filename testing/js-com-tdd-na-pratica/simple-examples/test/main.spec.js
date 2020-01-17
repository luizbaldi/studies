const expect = require('chai').expect;

describe('Main', () => {
  let arr;

  beforeEach(() => {
    arr = [1,2,3];
  });

  // smoke test
  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove the value 3 when use pop', () => {
    arr.pop();
    expect(arr).to.not.contain(3);
  });

  it('should return true when pop 3 from the array', () => {
    const value = arr.pop();
    expect(value === 3).to.be.true;
  })

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

});
