import 'datejs';
import { MINUTES_IN_HOUR } from '../constants';

const addZeroBeforeSingleNumber = (number) => {
  const SINGLE_DIGIT = 1;

  if (number.toString().length === SINGLE_DIGIT) {
    return '0' + number;
  }

  return number;
};

export const pipeDuration = (incomingMinutes) => {
  const hours = incomingMinutes / MINUTES_IN_HOUR;
  const roundedHours = Math.floor(hours);
  const minutes = (hours - roundedHours) * MINUTES_IN_HOUR;
  const roundedMinutes = Math.round(minutes);

  const hoursWithZero = addZeroBeforeSingleNumber(roundedHours);

  const minutesWithZero = addZeroBeforeSingleNumber(roundedMinutes);

  return `${hoursWithZero}:${minutesWithZero}`;
};

export const getCurrentDateInFormatDMYYYY = () =>
  new Date().toString('d/M/yyyy');
