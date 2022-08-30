import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"
import 'simplelightbox/dist/simple-lightbox.min.css';



// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


// 2.1. находим куда вставить разметку
const listGallery = document.querySelector('.gallery');
// 2.2. ~ создаем карточки
const cardsGallery = createGalleryCard (galleryItems);
// 2.3. добавляем их в ul (gallery)
listGallery.insertAdjacentHTML('beforeend', cardsGallery); 


// 1. создаем разметку
function createGalleryCard (galleryItems) {
    return galleryItems.map(( { preview, original, description } ) => {
return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
`
    }).join('');
}

let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250,});
gallery.on('show.simplelightbox', function () {
	// do something…
});

