import {useParams} from 'react-router-dom';

const findFilm = (films) => {
  const filmId = Number(useParams().id);
  return films.find((card) => card.id === filmId);
};

export {findFilm};
