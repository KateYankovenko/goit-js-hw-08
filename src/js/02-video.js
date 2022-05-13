import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
// Сховище з рядком-ключем
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const player = new Player(iframe);
player.on('timeupdate', onSaveTime);
player.on("loaded", throttle(onReloadTime, 1000));

function onSaveTime (){
     player.getCurrentTime().then(function(time) {
    localStorage.setItem(LOCALSTORAGE_KEY, time);
    })
}


function onReloadTime() {
      player.setCurrentTime(LOCALSTORAGE_KEY).then(function(seconds) {
         localStorage.setItem(LOCALSTORAGE_KEY, seconds);
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