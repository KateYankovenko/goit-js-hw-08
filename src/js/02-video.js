import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const STORAGE_KEY = "videoplayer-current-time";
iframe.addEventListener("timeupdate", onPlay);

const onPlay = function(event) {
    console.log("Go");
};



player.setCurrentTime(STORAGE_KEY).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


// iframe.on('play', onPlay);

// iframe.addEventListener(
//   "timeupdate",
//   debounce(() => {
//     console.log("Timeupdate handler call after 1000ms pause");
//   }, 1000)
// );

