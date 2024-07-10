import moment from 'moment';
import actions from './actions';
import { currentDate, previousDate } from '../../utility/utility';
import { SERVICE_TYPE } from '../../variables';

const initialState = {
  usuallyReportData: {},
  chartLoading: false,
  isOpenCreateOrder: false,
  filterRange: {
    from: previousDate(7),
    to: currentDate
  },
  typeService: SERVICE_TYPE.COMMENT.title,
  reportCountSuccess: [],
  subWithPoint: [],
  profitToday: {},
  validateYouTubeUrl: {},
  listServer: [],
  statisticSubscribe: {},
  statisticComment: {},
  commentByDay: [],
  taskSuccessInMinutes: [],
  taskDurationInMinutes: [],
  orderAmount: [],
  accountStatus: {},
  computerThread: {},
  commentAccountOnComputer: {},
  commentByStatusOrder: {},
  commentRunningComputer: {},
  commentRunningUserOrder: {},
  commentTaskOfTool: {},
  commentUserPoint: {},
  performance: [],
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


  COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN,
  COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_ERR,
  COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS,

  COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN,
  COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR,
  COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS,

  COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN,
  COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_ERR,
  COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS,

  COMMENT_STATISTIC_COMMENT_BY_DAY_BEGIN,
  COMMENT_STATISTIC_COMMENT_BY_DAY_ERR,
  COMMENT_STATISTIC_COMMENT_BY_DAY_SUCCESS,

  COMMENT_STATISTIC_COMPUTER_THREAD_BEGIN,
  COMMENT_STATISTIC_COMPUTER_THREAD_ERR,
  COMMENT_STATISTIC_COMPUTER_THREAD_SUCCESS,

  COMMENT_STATISTIC_ORDER_AMOUNT_BEGIN,
  COMMENT_STATISTIC_ORDER_AMOUNT_ERR,
  COMMENT_STATISTIC_ORDER_AMOUNT_SUCCESS,

  COMMENT_STATISTIC_PERFORMANCE_COMMENT_BEGIN,
  COMMENT_STATISTIC_PERFORMANCE_COMMENT_ERR,
  COMMENT_STATISTIC_PERFORMANCE_COMMENT_SUCCESS,

  COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_BEGIN,
  COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_ERR,
  COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_SUCCESS,

  COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN,
  COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_ERR,
  COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS,

  COMMENT_STATISTIC_BY_STATUS_ORDER_BEGIN,
  COMMENT_STATISTIC_BY_STATUS_ORDER_ERR,
  COMMENT_STATISTIC_BY_STATUS_ORDER_SUCCESS,

  COMMENT_STATISTIC_RUNNING_COMPUTER_BEGIN,
  COMMENT_STATISTIC_RUNNING_COMPUTER_ERR,
  COMMENT_STATISTIC_RUNNING_COMPUTER_SUCCESS,

  COMMENT_STATISTIC_RUNNING_USER_ORDER_BEGIN,
  COMMENT_STATISTIC_RUNNING_USER_ORDER_ERR,
  COMMENT_STATISTIC_RUNNING_USER_ORDER_SUCCESS,

  COMMENT_STATISTIC_TASK_OF_TOOL_BEGIN,
  COMMENT_STATISTIC_TASK_OF_TOOL_ERR,
  COMMENT_STATISTIC_TASK_OF_TOOL_SUCCESS,

  COMMENT_STATISTIC_USER_POINT_BEGIN,
  COMMENT_STATISTIC_USER_POINT_ERR,
  COMMENT_STATISTIC_USER_POINT_SUCCESS,


  VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN,
  VALIDATE_YOUTUBE_VIDEO_LINK_ERR,
  VALIDATE_YOUTUBE_VIDEO_LINK_SUCCESS,

} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case COMMENT_STATISTIC_USER_POINT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_USER_POINT_SUCCESS:
      return {
        ...state,
        loading: false,
        commentUserPoint: data,
      };

    case COMMENT_STATISTIC_USER_POINT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case COMMENT_STATISTIC_TASK_OF_TOOL_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_TASK_OF_TOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        commentTaskOfTool: data,
      };

    case COMMENT_STATISTIC_TASK_OF_TOOL_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case COMMENT_STATISTIC_RUNNING_USER_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_RUNNING_USER_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        commentRunningUserOrder: data,
      };

    case COMMENT_STATISTIC_RUNNING_USER_ORDER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case COMMENT_STATISTIC_RUNNING_COMPUTER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_RUNNING_COMPUTER_SUCCESS:
      return {
        ...state,
        loading: false,
        commentRunningComputer: data,
      };

    case COMMENT_STATISTIC_RUNNING_COMPUTER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case COMMENT_STATISTIC_BY_STATUS_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_BY_STATUS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        commentByStatusOrder: data,
      };

    case COMMENT_STATISTIC_BY_STATUS_ORDER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS:
      return {
        ...state,
        loading: false,
        commentAccountOnComputer: data,
      };

    case COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VALIDATE_YOUTUBE_VIDEO_LINK_SUCCESS:
      return {
        ...state,
        loading: false,
        validateYouTubeUrl: data,
      };

    case VALIDATE_YOUTUBE_VIDEO_LINK_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    
    case COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        accountStatus: data,
      };

    case COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case COMMENT_STATISTIC_PERFORMANCE_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_PERFORMANCE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        performance: data,
      };

    case COMMENT_STATISTIC_PERFORMANCE_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case COMMENT_STATISTIC_ORDER_AMOUNT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_ORDER_AMOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        orderAmount: data,
      };

    case COMMENT_STATISTIC_ORDER_AMOUNT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case COMMENT_STATISTIC_COMPUTER_THREAD_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_COMPUTER_THREAD_SUCCESS:
      return {
        ...state,
        loading: false,
        computerThread: data,
      };

    case COMMENT_STATISTIC_COMPUTER_THREAD_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case COMMENT_STATISTIC_COMMENT_BY_DAY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_COMMENT_BY_DAY_SUCCESS:
      return {
        ...state,
        loading: false,
        commentByDay: data,
      };

    case COMMENT_STATISTIC_COMMENT_BY_DAY_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS:
      return {
        ...state,
        taskSuccessInMinutes: data,
        loading: false,
      };

    case COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS:
      return {
        ...state,
        taskDurationInMinutes: data,
        loading: false,
      };

    case COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
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

    case COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        statisticComment: data,
      };

    case COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_ERR:
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
        chartLoading: true,
      };

    case FETCH_DAILY_SUBSCRIBE_RESPORT_SUCCESS:
      return {
        ...state,
        chartLoading: false,
        usuallyReportData: data,
      };

    case FETCH_DAILY_SUBSCRIBE_RESPORT_ERR:
      return {
        ...state,
        error: err,
        chartLoading: false,
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
