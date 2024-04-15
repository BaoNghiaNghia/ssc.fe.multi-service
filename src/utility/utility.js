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

function findSecondMinimum(arr) {
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

export {
  ellipsis,
  numberWithCommas,
  findSecondMinimum,
  currentDate,
  previousDate
};
