import {useParams} from 'react-router-dom';

const SECONDS_IN_HOUR = 3600;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

// export const findFilm = (films) => {
//   const filmId = Number(useParams().id);
//   return films.find((card) => card.id === filmId);
// };

export const formatTime = (time) => {
  const hours = Math.floor(time / SECONDS_IN_HOUR);
  const minutes = Math.floor((time - hours * SECONDS_IN_HOUR) / MINUTES_IN_HOUR);
  const seconds = Math.round(time - hours * SECONDS_IN_HOUR - minutes * SECONDS_IN_MINUTE);

  return {hours, minutes, seconds};
};
