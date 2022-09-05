// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const refsGallery = document.querySelector('.gallery')


function makeGalleryItem(items) {
    return items.map(({ preview, original, description }) => {
        return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image"
          src="${preview}" 
          alt="${description}"
          width="340">
      </a>
    `
    }).join('')
}

const makeGalleryList = makeGalleryItem(galleryItems);

refsGallery.insertAdjacentHTML('afterbegin', makeGalleryList);

const lightbox = new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});