global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQD50ZP4SPDyYd87nPaCRXY8x0MfmV5aTabQ3tpDf0kIPReGsSTbNREYQ_6zc6L1RBJ9y-L5FH_zy-D83ZDAZvrRg34Nts2QAZqjoe1J0uNDlnWNrKk7sjTtchqKP5qZBWN7JMxaUQIfxkW6'
})

const albums = spotify.search.albums('Bon+Iver');

albums
    .then(data => data.albums.items.map(item => console.log(item.name)))
    .catch(err => console.log(err.message));
