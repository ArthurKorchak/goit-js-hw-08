// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const trgForAdd = document.querySelector('.gallery');

galleryGen(galleryItems);
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

function galleryGen(galleryItems) {
    const dataSet = galleryItems.reduce((acc, { preview, original, description }) => {
        return acc +=
            `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
    }, '');
    trgForAdd.innerHTML = dataSet;
};