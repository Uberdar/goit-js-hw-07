import { galleryItems } from './gallery-items.js';
// Change code below this line
const takeContainer = document.querySelector(".gallery");
const takeMarkup = createPicMarkup(galleryItems);

takeContainer.insertAdjacentHTML('beforeend',takeMarkup);

function createPicMarkup (pics){
    
    return pics.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    }).join('');

}

var lightbox = new SimpleLightbox('.gallery a', { 
    close: true,
    showCounter: true,
    animationSlide: false,
    fadeSpeed: false,
    captionsData: "alt",
    captionDelay: 250,
 });

