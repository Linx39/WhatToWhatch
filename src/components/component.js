import {useParams} from 'react-router-dom';

const findMovie = (movies) => {
  const filmId = Number(useParams().id.slice(1));
  return movies.find((card) => card.id === filmId);
};

export {findMovie};
