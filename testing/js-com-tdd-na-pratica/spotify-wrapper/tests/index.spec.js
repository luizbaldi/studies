import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';

sinonStubPromise(sinon);
chai.use(sinonChai);

describe('SpotifyWrapper Library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receive apiURL as a parameter', () => {
    let spotify = new SpotifyWrapper({
      apiURL: 'bla'
    });

    expect(spotify.apiURL).to.be.equal('bla');
  });

  it('should use the default apiUrl if not provided', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as a parameter', () => {
    let spotify = new SpotifyWrapper({
      token: 'token'
    });

    expect(spotify.token).to.be.equal('token');
  });

  describe('request method', () => {
    let stubedFetch;
    let fetchedPromise;

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      fetchedPromise = stubedFetch.returnsPromise();
    });

    afterEach(() => {
      stubedFetch.restore();
    });

    it('should have request method', () => {
      let spotify = new SpotifyWrapper({});
      expect(spotify.request).to.exist;
    });

    it('should call fetch when request', () => {
      let spotify = new SpotifyWrapper({
        token: 'token'
      });

      spotify.request('url');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the right url', () => {
      let spotify = new SpotifyWrapper({
        token: 'token'
      });

      spotify.request('url');
      expect(stubedFetch).to.have.been.calledWith('url');
    });

    it('should call fetch with the right headers', () => {
      let spotify = new SpotifyWrapper({
        token: 'token'
      });

      const headers = {
        headers: {
          Authorization: `Bearer token`
        }
      };

      spotify.request('url', headers);
      expect(stubedFetch).to.have.been.calledWith('url', headers);
    });
  });
});
