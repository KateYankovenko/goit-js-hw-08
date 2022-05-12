import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const LOCAL_STORAGE = "videoplayer-current-time";
iframe.addEventListener("timeupdate", onPlay);

const onPlay = function(event) {
    console.log("Go");
};
// iframe.on('play', onPlay);

// iframe.addEventListener(
//   "timeupdate",
//   debounce(() => {
//     console.log("Timeupdate handler call after 1000ms pause");
//   }, 1000)
// );

