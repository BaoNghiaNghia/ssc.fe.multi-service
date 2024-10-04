/* eslint-disable no-restricted-syntax */
import moment from "moment";
import { FORMAT_DATESTRING, REGEX_VALIDATE_YOUTUBE_CHANNEL_LINK, REGEX_VALIDATE_YOUTUBE_VIDEO_LINK, REGION_IDENTIFIER } from "../variables/index";

/**
 * Return ellipsis of a given string
 * @param {string} text
 * @param {number} size
 */
const ellipsis = (text, size) => {
  return `${text.split(' ').slice(0, size).join(' ')}...`;
};

function numberWithCommas(x) {
  if (x == null) return '';
  const rounded = Math.round(x * 1000) / 1000;
  const parts = rounded.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join('.'); // Rejoin the parts
}

const numberWithCommasCurrency = (x) => {
  if (x == null) return '';
  
  const rounded = Math.round(x * 100) / 100;

  if (rounded >= 1_000_000_000_000) {
    const trillionFormatted = (rounded / 1_000_000_000_000).toFixed(2).replace(/\.0$/, '');
    return `${trillionFormatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} T`; 
  }
  if (rounded >= 1_000_000_000) { 
    const billionFormatted = (rounded / 1_000_000_000).toFixed(2).replace(/\.0$/, '');
    return `${billionFormatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Tỉ`;
  }
  if (rounded >= 1_000_000) {
    const millionFormatted = (rounded / 1_000_000).toFixed(2).replace(/\.0$/, '');
    return `${millionFormatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Tr`;
  }
  if (rounded >= 1_000) { 
    const thousandFormatted = (rounded / 1_000).toFixed(2).replace(/\.0$/, '');
    return `${thousandFormatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} N`;
  }

  // Format the number with commas
  const parts = rounded.toString().split('.'); 
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join('.');
};


export const validateYouTubeUrl = (urlToParse) => {
  if (urlToParse) {
      if (urlToParse.match(REGEX_VALIDATE_YOUTUBE_VIDEO_LINK)) {
          return true;
      }
  }
  return false;
}

export const validateYouTubeChannelUrl = (urlToParse) => {
  return REGEX_VALIDATE_YOUTUBE_CHANNEL_LINK.test(urlToParse);
};

export const isYouTubeValidUrl = (urlToParse) => {
  if (!urlToParse) {
      return false; // Invalid input
  }

  const isVideoUrl = REGEX_VALIDATE_YOUTUBE_VIDEO_LINK.test(urlToParse);
  const isChannelUrl = REGEX_VALIDATE_YOUTUBE_CHANNEL_LINK.test(urlToParse);

  return isVideoUrl || isChannelUrl; // Returns true if either condition is met
};

const findSecondMinimum = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    return [];
  }
  const arrClone  = [...arr].sort((a, b) => a - b);

  return arrClone[1];
}

const currentDate = moment(new Date()).format(FORMAT_DATESTRING);

const previousDate = (day) => {
  return moment().subtract(day,'d').format(FORMAT_DATESTRING);
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

const performanceColorBack = (performance) => {
  switch (true) {
    case (performance >= 100):
      return {
        color: 'white',
        backgroundColor: 'green',
        blurColor: 'darkgreen'
      }
    case (performance >= 80 && performance < 100):
      return {
        color: 'darkgreen',
        backgroundColor: '#84d984',
        blurColor: 'white'
      }
    case (performance < 80 && performance > 50):
      return {
        color: 'green',
        backgroundColor: '#ffdfa5',
        blurColor: '#f0ff10'
      }
    case (performance <= 50 && performance >= 30):
      
      return {
        color: 'white',
        backgroundColor: 'goldenrod',
        blurColor: 'saddlebrown'
      }
    case (performance < 30):
      return {
        color: 'white',
        backgroundColor: 'crimson',
        blurColor: 'black'
      }
    case (performance === 0):
      return {
        color: 'gray',
        backgroundColor: '#e7e7e7',
        blurColor: 'black'
      }
    default:
      return {
        color: 'gray',
        backgroundColor: '#e7e7e7',
        blurColor: 'black'
      }
  }
}

const performanceStatementTags = (performance) => {
  return <>
    {
      performance !== 0 ? (
        <span
          style={{ 
            fontSize: '0.8em',
            fontWeight: 800,
            padding:'0 5px',
            fontFamily: 'Poppins, sans-serif',
            borderRadius: '5px',
            textShadow: `1px 1px 2px ${performanceColorBack(performance)?.blurColor}`,
            backgroundColor: performanceColorBack(performance)?.backgroundColor,
            color: performanceColorBack(performance)?.color,
            display: 'inline-flex', alignItems: 'center'
          }}
        >
          <span style={{ fontWeight: 600 }}>Hiệu suất: &nbsp;</span> <span style={{ fontSize: '1.1em' }}>{numberWithCommas(Math.floor(performance, 1) || 0)}  %</span>
        </span>
      ) : (
        <span
          style={{ 
            fontSize: '0.8em',
            fontWeight: 700,
            fontFamily: 'Poppins, sans-serif',
            padding:'0 5px',
            borderRadius: '5px',
            backgroundColor: '#ebebeb',
            display: 'inline-flex', alignItems: 'center'
          }}
        >
          <span style={{ color: 'gray' }}>Hiệu suất: &nbsp;</span> {numberWithCommas(Math.floor(performance, 1) || 0)} %
        </span>
      )
    }
  </>;
}

function getPathLocalFromString(inputString) {
  const shortcode = inputString?.split('_')?.pop();
  const region = REGION_IDENTIFIER.find(region => region?.shortcode === shortcode);
  
  return region ? region?.path : null;
}

function getYouTubeVideoID(url) {
  const urlParams = new URL(url).searchParams;
  return urlParams?.get('v');
}


export {
  ellipsis,
  numberWithCommas,
  findSecondMinimum,
  currentDate,
  previousDate,
  convertSeconds,
  isEmptyObject,
  isVietnamesePhoneNumber,
  performanceColorBack,
  getPathLocalFromString,
  numberWithCommasCurrency,
  performanceStatementTags,
  getYouTubeVideoID
};
