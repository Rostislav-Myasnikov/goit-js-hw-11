import SimpleLightbox from 'simplelightbox';

export function createGallery(images) {
  const listEl = document.querySelector('.gallery-list');
  listEl.innerHTML = '';

  const markup = images
    .map(
      img => `<li class="gallery-item">
        <img class="gallery-img" src="${img.previewURL}" alt="${img.tags}" />
      </li>`
    )
    .join('');

  listEl.insertAdjacentHTML('beforeend', markup);
}
