import dayjs from 'dayjs';

const SECONDS_IN_HOUR = 3600;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

export const getTimeInHoursMinutesSeconds = (time) => {
  const hours = Math.floor(time / SECONDS_IN_HOUR);
  const minutes = Math.floor((time - hours * SECONDS_IN_HOUR) / MINUTES_IN_HOUR);
  const seconds = Math.round(time - hours * SECONDS_IN_HOUR - minutes * SECONDS_IN_MINUTE);

  return {hours, minutes, seconds};
};

export const getTimeInHoursMinutes = (time) => {
  const hours = Math.floor(time / MINUTES_IN_HOUR);
  const minutes = Math.round(time - hours * MINUTES_IN_HOUR);

  return {hours, minutes};
};

export const formatDateInMonthDDYYYY = (date) => {
  return dayjs(date).format(`MMMM DD, YYYY`);
};
