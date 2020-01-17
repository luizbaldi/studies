import { API_URL } from './config';
import { toJson } from './util';

import search from './search';

import album from './album';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;

    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    };
    return fetch(url, headers).then(toJson);
  }
}

