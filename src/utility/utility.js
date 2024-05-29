/* eslint-disable no-restricted-syntax */
import moment from "moment";
import { REGEX_VALIDATE_YOUTUBE_VIDEO_LINK } from "../variables";

/**
 * Return ellipsis of a given string
 * @param {string} text
 * @param {number} size
 */
const ellipsis = (text, size) => {
  return `${text.split(' ').slice(0, size).join(' ')}...`;
};

const numberWithCommas = (x) => {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const validateYouTubeUrl = (urlToParse) => {
  if (urlToParse) {
      if (urlToParse.match(REGEX_VALIDATE_YOUTUBE_VIDEO_LINK)) {
          return true;
      }
  }
  return false;
}

const findSecondMinimum = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    return [];
  }
  const arrClone  = [...arr].sort((a, b) => a - b);

  return arrClone[1];
}

const currentDate = moment(new Date()).format("DD-MM-YYYY");

const previousDate = (day) => {
  return moment().subtract(7,'d').format('DD-MM-YYYY');
};

const convertSeconds = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const hourString = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : '';
  const minuteString = minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : '';
  const secondString = remainingSeconds > 0 ? `${remainingSeconds} second${remainingSeconds > 1 ? 's' : ''}` : '';

  if (hours > 0) {
    return `${hourString} : ${minuteString || '0 minute'} ${secondString && `: ${secondString}`}`;
  } if (!hours && minutes > 0) {
    return `${minuteString} ${secondString && `: ${secondString}`}`;
  }

  return secondString;
}

const isEmptyObject = (obj) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

const isVietnamesePhoneNumber = (number) => {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

export {
  ellipsis,
  numberWithCommas,
  findSecondMinimum,
  currentDate,
  previousDate,
  convertSeconds,
  isEmptyObject,
  isVietnamesePhoneNumber
};
