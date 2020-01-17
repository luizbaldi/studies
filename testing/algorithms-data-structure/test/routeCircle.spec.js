import { expect } from 'chai';
import routeCircle from '../src/routeCircle';

describe('Judge route circle', () => {
  it('shoud routeCircle method exist', () => {
    expect(routeCircle).to.be.a('function');
  });

  it('should return to original place', () => {
    const moves = 'UD';
    expect(routeCircle(moves)).to.be.true;
  });

  it('should go far away', () => {
    const moves = 'UUUUUUUUUUUUUULR';
    expect(routeCircle(moves)).to.be.false;
  });
});
