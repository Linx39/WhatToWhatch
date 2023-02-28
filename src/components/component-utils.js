import dayjs from 'dayjs';

const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

const RatingLevel = {
  BAD: {name: `Bad`, count: 0},
  NORMAL: {name: `Normal`, count: 3},
  GOOD: {name: `Good`, count: 5},
  VERY_GOOD: {name: `Very good`, count: 8},
  AWESOME: {name: `Awesome`, count: 10},
};

import {FilmsCount} from '../const';

import {GENRE_DEFAULT} from '../const';

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

export const getFormatedTimeTemplate = (time) => {
  const {hours, minutes, seconds} = getTimeInHoursMinutesSeconds(time);

  const h = hours !== 0 ? `${hours}:` : ``;
  const m = minutes.lenght === 1 ? `0${minutes}:` : `${minutes}:`;
  const s = seconds.lenght === 1 ? `0${seconds}` : `${seconds}`;

  return `${h}${m}${s}`;
};

export const getProgressValue = (durationVideo, currentTime) => {
  const progressValue = (durationVideo && currentTime)
    ? currentTime * 100 / durationVideo
    : `0`;

  return progressValue;
};

export const getRatingLevel = (rating) => {
  let ratingLevel = RatingLevel.AWESOME.name;

  if (rating >= RatingLevel.BAD.count && rating < RatingLevel.NORMAL.count) {
    ratingLevel = RatingLevel.BAD.name;
  }

  if (rating >= RatingLevel.NORMAL.count && rating < RatingLevel.GOOD.count) {
    ratingLevel = RatingLevel.NORMAL.name;
  }

  if (rating >= RatingLevel.GOOD.count && rating < RatingLevel.VERY_GOOD.count) {
    ratingLevel = RatingLevel.GOOD.name;
  }

  if (rating >= RatingLevel.VERY_GOOD.count && rating < RatingLevel.AWESOME.count) {
    ratingLevel = RatingLevel.VERY_GOOD.name;
  }

  return ratingLevel;
};

export const getUniqueGenres = (films) => { // сделать чеоез редусер
  const uniqueGenres = [GENRE_DEFAULT];

  films.forEach((film) => {
    if (!uniqueGenres.find((genre) => genre === film.genre)) {
      uniqueGenres.push(film.genre);
    }
  });

  return uniqueGenres;
};

export const filterFilmsByGenre = (genre, films) => {
  if (genre === GENRE_DEFAULT) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

export const getNewCount = (prevCount, maxCount) => {
  const nextCount = prevCount + FilmsCount.MAIN;
  const newCount = nextCount > maxCount ? maxCount : nextCount;

  return newCount;
};

