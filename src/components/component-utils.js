import dayjs from 'dayjs';

const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

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
