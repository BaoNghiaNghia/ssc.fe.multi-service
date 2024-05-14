import moment from "moment";

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
      const regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      if (urlToParse.match(regExp)) {
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

export {
  ellipsis,
  numberWithCommas,
  findSecondMinimum,
  currentDate,
  previousDate,
  convertSeconds
};
