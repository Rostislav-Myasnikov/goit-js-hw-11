import axios from 'axios';

export function getImagesByQuery(query) {
  const API_KEY = '52265753-7181a70cf6dcebc2c39de477c';
  const END_POINT = '/api/';
  axios.defaults.baseURL = 'https://pixabay.com';

  return axios
    .get(END_POINT, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
      console.log(res.data.hits);
      if ((res.data.hits, length === 0)) {
        return iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: red,
        });
      }
      return res.data.hits;
    })
    .catch(error => {
      return [];
    });
}
