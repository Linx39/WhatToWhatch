import dayjs from 'dayjs';

import {Genre, RatingLevel} from './const';

const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

export const getFilmsByGenre = (genre, films) => {
  return genre === Genre.DEFAULT
    ? films
    : films.filter((film) => film.genre === genre);
};

export const getUniqueGenres = (films) => {
  const genres = new Set(films.map(({genre}) => genre));

  return [Genre.DEFAULT, ...genres].slice(0, Genre.COUNT);
};

export const getFilmsLikeThis = ({id, genre}, films) => {
  return films.filter((item) => item.genre === genre && item.id !== id);
};

export const getRatingTitle = (value) => RatingLevel
  .find(({rating}) => rating <= value).title;

export const getTimeInHoursMinutesSeconds = (time) => {
  const secondsInHour = MINUTES_IN_HOUR * SECONDS_IN_MINUTE;

  const hours = Math.floor(time / secondsInHour);
  const minutes = Math.floor((time - hours * secondsInHour) / MINUTES_IN_HOUR);
  const seconds = Math.round(time - hours * secondsInHour - minutes * SECONDS_IN_MINUTE);

  return {hours, minutes, seconds};
};

export const getTimeInHoursMinutes = (time) => {
  const hours = Math.floor(time / MINUTES_IN_HOUR);
  const minutes = Math.round(time - hours * MINUTES_IN_HOUR);

  return {hours, minutes};
};

export const formatDateInMMMMDDYYYY = (date) => {
  return dayjs(date).format(`MMMM DD, YYYY`);
};
