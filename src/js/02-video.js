import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
// iframe.addEventListener("timeupdate", onPlay);


iframe.addEventListener(
  "timeupdate",
  _.debounce(() => {
    console.log("");
  }, 1000)
);
// const onPlay = function(event) {
    
// };
// player.on('play', onPlay);