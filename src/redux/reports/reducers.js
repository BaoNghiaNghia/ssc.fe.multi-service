import moment from 'moment';
import actions from './actions';

const currentDate = moment(new Date()).format("DD-MM-YYYY");
const previos7Date = moment().subtract(7,'d').format('DD-MM-YYYY');

const initialState = {
  subscribeReport: {},
  filterRange: {
    from: previos7Date,
    to: currentDate
  },
  reportCountSuccess: [],
  subWithPoint: [],
  profitToday: {},
  listServer: [],
  statisticSubscribe: {},
  ratioSubSvg: 0,
  countError: {},
  loading: false,
  error: null
};

const {
    FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN,
    FETCH_DAILY_SUBSCRIBE_RESPORT_SUCCESS,
    FETCH_DAILY_SUBSCRIBE_RESPORT_ERR,

    SET_RANGE_DATE_FILTER_BEGIN,
    SET_RANGE_DATE_FILTER_SUCCESS,
    SET_RANGE_DATE_FILTER_ERR,

    COUNT_SUCCESS_SUBSCRIBE_BEGIN,
    COUNT_SUCCESS_SUBSCRIBE_SUCCESS,
    COUNT_SUCCESS_SUBSCRIBE_ERR,

    COUNT_PROFIT_DATA_TODAY_BEGIN,
    COUNT_PROFIT_DATA_TODAY_SUCCESS,
    COUNT_PROFIT_DATA_TODAY_ERR,

    FETCH_SUBSCRIBE_POINT_EVERYDAY_BEGIN,
    FETCH_SUBSCRIBE_POINT_EVERYDAY_SUCCESS,
    FETCH_SUBSCRIBE_POINT_EVERYDAY_ERR,

    COMPUTER_DATA_LIST_BEGIN,
    COMPUTER_DATA_LIST_SUCCESS,
    COMPUTER_DATA_LIST_ERR,

    COUNT_ERROR_SUBSCRIBE_BEGIN,
    COUNT_ERROR_SUBSCRIBE_SUCCESS,
    COUNT_ERROR_SUBSCRIBE_ERR,

    GET_STATISTICS_SUBSCRIBE_REPORT_BEGIN,
    GET_STATISTICS_SUBSCRIBE_REPORT_SUCCESS,
    GET_STATISTICS_SUBSCRIBE_REPORT_ERR
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case GET_STATISTICS_SUBSCRIBE_REPORT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case GET_STATISTICS_SUBSCRIBE_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        statisticSubscribe: data,
        ratioSubSvg: data
      };

    case GET_STATISTICS_SUBSCRIBE_REPORT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case COUNT_ERROR_SUBSCRIBE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case COUNT_ERROR_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        countError: data
      };
    case COUNT_ERROR_SUBSCRIBE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case COMPUTER_DATA_LIST_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMPUTER_DATA_LIST_SUCCESS:
      return {
        ...state,
        listServer: data,
        loading: false,
      };

    case COMPUTER_DATA_LIST_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case FETCH_SUBSCRIBE_POINT_EVERYDAY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SUBSCRIBE_POINT_EVERYDAY_SUCCESS:
      return {
        ...state,
        subWithPoint: data,
        loading: false,
      };

    case FETCH_SUBSCRIBE_POINT_EVERYDAY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case COUNT_PROFIT_DATA_TODAY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case COUNT_PROFIT_DATA_TODAY_SUCCESS:
      return {
        ...state,
        profitToday: data,
        loading: false,
      };
    case COUNT_PROFIT_DATA_TODAY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DAILY_SUBSCRIBE_RESPORT_SUCCESS:
      return {
        ...state,
        subscribeReport: data,
        loading: false,
      };
    case FETCH_DAILY_SUBSCRIBE_RESPORT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case SET_RANGE_DATE_FILTER_BEGIN:
      return {
        ...state,
        loading: true,
      }

    case SET_RANGE_DATE_FILTER_SUCCESS:
      return {
        ...state,
        filterRange: data,
        loading: false,
      }

    case SET_RANGE_DATE_FILTER_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      }

    case COUNT_SUCCESS_SUBSCRIBE_BEGIN:
      return {
        ...state,
        loading: true,
      }

    case COUNT_SUCCESS_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        reportCountSuccess: data,
        loading: false,
      }

    case COUNT_SUCCESS_SUBSCRIBE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      }

    default:
      return state;
  }
};

export default ReportsReducer;
