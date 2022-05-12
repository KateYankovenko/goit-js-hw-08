import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
// iframe.addEventListener("timeupdate", onPlay);

const onPlay = function(event) {
    
};
// iframe.on('play', onPlay);

// iframe.addEventListener(
//   "timeupdate",
//   _.debounce(() => {
//     console.log("Timeupdate handler call after 1000ms pause");
//   }, 1000)
// );

