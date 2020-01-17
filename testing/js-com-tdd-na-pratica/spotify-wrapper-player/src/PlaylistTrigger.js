const albumTracks = document.getElementById('album-tracks');
let audio = null;

export default () => {
  albumTracks.addEventListener('click', e => {
    const target = e.target.parentNode;

    if (target.classList.contains('active')) {
      audio.pause();
    } else {
      if (audio) audio.pause();

      audio = new Audio(target.getAttribute('data-track-preview'));
      audio.play();
      target.classList.add('active');

      audio.addEventListener('pause', () => target.classList.remove('active'));
    }
  });
}
