// import SimpleLightbox from "../node_modules/simplelightbox";
import SimpleLightbox from "../node_modules/simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);




// import { galleryItems } from './gallery-items.js';

// const cardsGallery = document.querySelector(".gallery");
// const cardsMarkup = createPictureSetMarkup(galleryItems);

// cardsGallery.insertAdjacentHTML("beforeend", cardsMarkup);
// cardsGallery.addEventListener("click", onGalleryLightClick);

// function createPictureSetMarkup(galleryItems) {

//     return galleryItems.map(({ preview, original, description }) => {
//         return (
//             `
// <a class="gallery__item" href="${original}">
//   <img class="gallery__image" 
//   src="${preview}"
//   alt="${description}" />
// </a>
//     `
//         );
//     }).join('');
// }


// function onGalleryLightClick(e) {
//     e.preventDefault();

//     if (!e.target.tagName === "IMG") {
//         return;
//     }
    
// }

// const lightbox = new SimpleLightbox('.gallery a', {
//         captionsData: "alt",
//         captionDelay: 250,
//     });


// console.log(galleryItems);