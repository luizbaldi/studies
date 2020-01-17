import spotify from './spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

/* Creating elements and fetching data using api */
const albumListEl = document.getElementById('album-list');
const albumInfoEl = document.getElementById('album-info');
const albumTracksEl = document.getElementById('album-tracks');

export default () => {
  albumListEl.addEventListener('click', e => {
    const albumId = e.target.getAttribute('data-album-id');
    spotify.album.getAlbum(albumId)
      .then(data => renderAlbumInfo(data, albumInfoEl))
      .then(data => renderAlbumTracks(data.items, albumTracksEl));
  });
};
