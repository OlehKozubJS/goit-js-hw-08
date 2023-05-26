// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

let galleryString = "";

galleryItems.forEach(image => {
    galleryString +=   
    `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>
    </li>`;
});

gallery.innerHTML = galleryString;

let instance = new SimpleLightbox('.gallery a', 
    {
        captionsData: "alt",
        captionDelay: 250,
        disableScroll: false,
    }
);
