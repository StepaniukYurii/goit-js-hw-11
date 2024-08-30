import { fetchImages } from './js/pixabay-api.js';
import { renderGalleryItems } from './js/render-functions.js';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-query');
const gallery = document.querySelector('#gallery');
const loader = document.querySelector('.loader');

let lightbox;

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  gallery.innerHTML = '';
  loader.style.display = 'block';

  const query = searchInput.value.trim();

  fetchImages(query)
    .then(data => {
      renderGalleryItems(data, gallery, lightbox);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.style.display = 'none';
    });
});
