const KEY = '28365901-da68c89b5ab1d43c8fac1c552';

const getImage = (query, page) =>
  fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(responce => responce.json());

export default getImage;