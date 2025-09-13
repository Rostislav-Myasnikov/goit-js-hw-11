import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createGallery(images) {
  const listEl = document.querySelector('.gallery-list');
  listEl.innerHTML = '';

  const markup = images
    .map(
      img => `<li class="gallery-item">
         <div><a href="${img.largeImageURL}">
         <img class="gallery-img" src="${img.previewURL}" alt="${img.tags}" />
         </a>
         <div class="img-info">
          <div class="info-block">
            <p>
             Likes
            </p>
            <p>
              ${img.likes}
             </p>
          </div>
          <div class="info-block">
            <p>
              Views</p>
            <p>
              ${img.views}
            </p>
          </div>
          <div class="info-block">
            <p>
              Comments
            </p>
            <p>
              ${img.comments}
            </p>
          </div>
          <div class="info-block">
            <p>
              Downloads
            </p>
            <p>
              ${img.downloads}
            </p>
          </div>
        </div>
      </div>
      </li>`
    )
    .join('');

  listEl.insertAdjacentHTML('beforeend', markup);
  const lightbox = new SimpleLightbox('.gallery-list a', {});
  lightbox.refresh();
}

export function showLoader() {
  document.getElementById('loader').classList.remove('hidden');
}

export function hideLoader() {
  document.getElementById('loader').classList.add('hidden');
}
