import { galleryItems } from './gallery-items.js';
// Change code below this line
const takeContainer = document.querySelector(".gallery");
const takeMarkup = createPicMarkup(galleryItems);

takeContainer.insertAdjacentHTML('beforeend',takeMarkup);
takeContainer.addEventListener("click", onImgClick);

function createPicMarkup (pics){
    
    return pics.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="#">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join('');

}

function onImgClick(evt){
    
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
	basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`).show()
}

