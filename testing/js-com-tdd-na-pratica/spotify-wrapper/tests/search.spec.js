import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Spotify Wrapper', () => {
  let spotify;
  let fetchedStub;
  let fetchedPromise;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'token'
    });
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedPromise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist the searchAlbums method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('search artists', () => {
    it('should call fetch function', () => {
      spotify.search.artists('BonIver');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call a fetch with the correct url', () => {
      spotify.search.artists('BonIver');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=BonIver&type=artist');

      spotify.search.artists('Djonga');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Djonga&type=artist');
    });
  });

  describe('search albums', () => {
    it('should call fetch function', () => {
      spotify.search.albums('BonIver');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call a fetch with the correct url', () => {
      spotify.search.albums('BonIver');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=BonIver&type=album');

      spotify.search.albums('SantaCeia');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=SantaCeia&type=album');
    });
  });

  describe('search tracks', () => {
    it('should call fetch function', () => {
      spotify.search.tracks('SkinnyLove');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call a fetch with the correct url', () => {
      spotify.search.tracks('SkinnyLove');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=SkinnyLove&type=track');

      spotify.search.tracks('SantaCeia');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=SantaCeia&type=track');
    });
  });

  describe('search playlists', () => {
    it('should call fetch function', () => {
      spotify.search.playlists('BucketMoments');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call a fetch with the correct url', () => {
      spotify.search.playlists('BucketMoments');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=BucketMoments&type=playlist');

      spotify.search.playlists('LofiChillWaves');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=LofiChillWaves&type=playlist');
    });
  });

});
