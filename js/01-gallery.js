import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const galleryContainer=document.querySelector('.gallery');


function createGalleryItemsList(galleryItems) {
    return galleryItems.map(item => {
      const { preview, original, description } = item;
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              data-alt="${description}"
            />
          </a>
        </li>
      `;
    }).join('');
  }

  const galleryMarkUp=createGalleryItemsList(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

galleryContainer.addEventListener('click', onGalleryContainerClick);


function onGalleryContainerClick(event){
  event.preventDefault();

  if (!event.target.classList.contains('gallery__item')) {
    return;
  }

}

 
