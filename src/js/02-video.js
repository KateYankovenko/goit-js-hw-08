import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
// Сховище з рядком-ключем
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const player = new Player(iframe);
player.on('timeupdate', );
player.on("loaded", throttle(reloadTime, 1000));

player.on('timeupdate', function() {
    player.getCurrentTime().then(time => LOCALSTORAGE_KEY)
},1000);


function reloadTime() {
      player.setCurrentTime(LOCALSTORAGE_KEY).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                console.log("the time was less than 0 or greater than the video’s duration");
                break;

            default:
                 console.log("some other error occurred");
                break;
        }
    });  
}





// iframe.addEventListener(
//   "timeupdate",
//   throttle(() => {
//     console.log("Timeupdate handler call after 1000ms pause");
//   }, 1000)
// );



// 1.Вивчи документацію методу on() і почни відстежувати 
// подію timeupdate - оновлення часу відтворення.
// 2.Зберігай час відтворення у локальне сховище. 
// Нехай ключем для сховища буде рядок
// "videoplayer-current-time".
// 3.Під час перезавантаження сторінки скористайся 
// методом setCurrentTime() з метою відновлення 
// відтворення зі збереженої позиції.
// 4.Додай до проекту бібілотеку lodash.throttle і 
// зроби так, щоб час відтворення оновлювався у сховищі 
// не частіше, ніж раз на секунду.