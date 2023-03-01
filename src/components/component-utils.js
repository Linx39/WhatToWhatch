import dayjs from 'dayjs';

const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])/;

export const isEmailValid = (value) => EMAIL_REGEXP.test(value);

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
