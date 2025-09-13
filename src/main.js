import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btn = document.querySelector('button');
const inputEl = document.querySelector('input');
const formEl = document.querySelector('form');
formEl.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.currentTarget.elements['search-text'].value.trim();

  getImagesByQuery(query).then(images => {
    createGallery(images);
  });
});
