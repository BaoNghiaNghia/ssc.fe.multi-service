import moment from 'moment';
import actions from './actions';
import { currentDate, previousDate } from '../../utility/utility';
import { SERVICE_TYPE } from '../../variables';

const initialState = {
  subscribeReport: {},
  isOpenCreateOrder: false,
  filterRange: {
    from: previousDate(7),
    to: currentDate
  },
  typeService: SERVICE_TYPE.COMMENT.title,
  reportCountSuccess: [],
  subWithPoint: [],
  profitToday: {},
  listServer: [],
  statisticSubscribe: {},
  statisticComment: {},
  commentByDay: [],
  taskSuccessInMinutes: {},
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
  GET_STATISTICS_SUBSCRIBE_REPORT_ERR,

  CHANGE_SERVICE_TYPE_BEGIN,
  CHANGE_SERVICE_TYPE_SUCCESS,
  CHANGE_SERVICE_TYPE_ERR,

  OPEN_MODAL_CREATE_NEW_ORDER_BEGIN,
  OPEN_MODAL_CREATE_NEW_ORDER_SUCCESS,
  OPEN_MODAL_CREATE_NEW_ORDER_ERR,

  STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN,
  STATISTIC_COMMENT_BY_ORDER_REPORT_ERR,
  STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS,

  STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN,
  STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR,
  STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS,

  STATISTIC_COMMENT_BY_DAY_BEGIN,
  STATISTIC_COMMENT_BY_DAY_ERR,
  STATISTIC_COMMENT_BY_DAY_SUCCESS,
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case STATISTIC_COMMENT_BY_DAY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case STATISTIC_COMMENT_BY_DAY_SUCCESS:
      return {
        ...state,
        loading: false,
        commentByDay: data,
      };

    case STATISTIC_COMMENT_BY_DAY_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS:
      return {
        ...state,
        loading: false,
        taskSuccessInMinutes: data,
      };

    case STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case OPEN_MODAL_CREATE_NEW_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case OPEN_MODAL_CREATE_NEW_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isOpenCreateOrder: data,
      };

    case OPEN_MODAL_CREATE_NEW_ORDER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        statisticComment: data,
      };

    case STATISTIC_COMMENT_BY_ORDER_REPORT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case CHANGE_SERVICE_TYPE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CHANGE_SERVICE_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        typeService: data,
      };

    case CHANGE_SERVICE_TYPE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

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
