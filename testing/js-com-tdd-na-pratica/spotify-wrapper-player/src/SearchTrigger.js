import spotify from './spotify';
import renderAlbums from './AlbumList';

const albumListEl = document.getElementById('album-list');
const formSearchEl = document.getElementById('form-search');
const searchInputEl = document.getElementById('search-input');

export default () => {
  formSearchEl.addEventListener('submit', e => {
    e.preventDefault();
    spotify.search.albums(searchInputEl.value)
      .then(data => renderAlbums(data.albums.items, albumListEl));
  })
};
