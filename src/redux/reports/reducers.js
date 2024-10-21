import actions from './actions';
import { currentDate, previousDate } from '../../utility/utility';
import { INITIALIZE_SERVICE_SELECTED, SERVICE_TYPE } from '../../variables';

const initialState = {
  usuallyReportData: {},
  chartLoading: false,
  isOpenCreateOrder: false,
  categoryNewOrder: INITIALIZE_SERVICE_SELECTED,
  filterRange: {
    from: previousDate(8),
    to: currentDate
  },
  typeService: SERVICE_TYPE.COMMENT.title,
  reportCountSuccess: [],
  profitToday: {},
  validateYouTubeUrl: {},
  listServer: [],
  statisticSubscribe: {},
  statisticComment: {},
  quantityRunByDay: [],
  taskSuccessInMinutes: [],
  taskDurationInMinutes: [],
  orderAmountComment: [],
  orderAmountLike: [],
  orderAmountView: [],
  orderAmountSubscribe: [],
  accountStatus: {},
  computerThread: {},
  accountOnComputer: {},
  statByStatusOrder: {},
  runningComputer: {},
  totalOrder: 0,
  runningUserOrder: {},
  taskOfTool: {},
  userPoint: {},
  performance: [],
  ratioSubSvg: 0,
  countError: {},
  orderByDays: [],
  respMultipleOrder: {},
  loading: false,
  error: null
};

const {
  SET_RANGE_DATE_FILTER_BEGIN,
  SET_RANGE_DATE_FILTER_SUCCESS,
  SET_RANGE_DATE_FILTER_ERR,

  SET_CATEGORY_IN_NEW_ORDER_BEGIN,
  SET_CATEGORY_IN_NEW_ORDER_SUCCESS,
  SET_CATEGORY_IN_NEW_ORDER_ERR,

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

  COMMENT_STATISTIC_TOTAL_ORDER_BEGIN,
  COMMENT_STATISTIC_TOTAL_ORDER_ERR,
  COMMENT_STATISTIC_TOTAL_ORDER_SUCCESS,

  COMMENT_STATISTIC_ORDER_BY_DAYS_BEGIN,
  COMMENT_STATISTIC_ORDER_BY_DAYS_ERR,
  COMMENT_STATISTIC_ORDER_BY_DAYS_SUCCESS,



  LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN,
  LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_ERR,
  LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS,

  LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN,
  LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR,
  LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS,

  LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN,
  LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_ERR,
  LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS,

  LIKE_STATISTIC_LIKE_BY_DAY_BEGIN,
  LIKE_STATISTIC_LIKE_BY_DAY_ERR,
  LIKE_STATISTIC_LIKE_BY_DAY_SUCCESS,

  LIKE_STATISTIC_COMPUTER_THREAD_BEGIN,
  LIKE_STATISTIC_COMPUTER_THREAD_ERR,
  LIKE_STATISTIC_COMPUTER_THREAD_SUCCESS,

  LIKE_STATISTIC_ORDER_AMOUNT_BEGIN,
  LIKE_STATISTIC_ORDER_AMOUNT_ERR,
  LIKE_STATISTIC_ORDER_AMOUNT_SUCCESS,

  LIKE_STATISTIC_PERFORMANCE_LIKE_BEGIN,
  LIKE_STATISTIC_PERFORMANCE_LIKE_ERR,
  LIKE_STATISTIC_PERFORMANCE_LIKE_SUCCESS,

  LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_BEGIN,
  LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_ERR,
  LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_SUCCESS,

  LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN,
  LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_ERR,
  LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS,

  LIKE_STATISTIC_BY_STATUS_ORDER_BEGIN,
  LIKE_STATISTIC_BY_STATUS_ORDER_ERR,
  LIKE_STATISTIC_BY_STATUS_ORDER_SUCCESS,

  LIKE_STATISTIC_RUNNING_COMPUTER_BEGIN,
  LIKE_STATISTIC_RUNNING_COMPUTER_ERR,
  LIKE_STATISTIC_RUNNING_COMPUTER_SUCCESS,

  LIKE_STATISTIC_RUNNING_USER_ORDER_BEGIN,
  LIKE_STATISTIC_RUNNING_USER_ORDER_ERR,
  LIKE_STATISTIC_RUNNING_USER_ORDER_SUCCESS,

  LIKE_STATISTIC_TASK_OF_TOOL_BEGIN,
  LIKE_STATISTIC_TASK_OF_TOOL_ERR,
  LIKE_STATISTIC_TASK_OF_TOOL_SUCCESS,

  LIKE_STATISTIC_USER_POINT_BEGIN,
  LIKE_STATISTIC_USER_POINT_ERR,
  LIKE_STATISTIC_USER_POINT_SUCCESS,

  LIKE_STATISTIC_TOTAL_ORDER_BEGIN,
  LIKE_STATISTIC_TOTAL_ORDER_ERR,
  LIKE_STATISTIC_TOTAL_ORDER_SUCCESS,

  LIKE_STATISTIC_ORDER_BY_DAYS_BEGIN,
  LIKE_STATISTIC_ORDER_BY_DAYS_ERR,
  LIKE_STATISTIC_ORDER_BY_DAYS_SUCCESS,

  LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_BEGIN,
  LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_ERR,
  LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_SUCCESS,



  VIEW_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN,
  VIEW_STATISTIC_COMMENT_BY_ORDER_REPORT_ERR,
  VIEW_STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS,

  VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN,
  VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR,
  VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS,

  VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN,
  VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_ERR,
  VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS,

  VIEW_STATISTIC_VIEW_BY_DAY_BEGIN,
  VIEW_STATISTIC_VIEW_BY_DAY_ERR,
  VIEW_STATISTIC_VIEW_BY_DAY_SUCCESS,

  VIEW_STATISTIC_COMPUTER_THREAD_BEGIN,
  VIEW_STATISTIC_COMPUTER_THREAD_ERR,
  VIEW_STATISTIC_COMPUTER_THREAD_SUCCESS,

  VIEW_STATISTIC_ORDER_AMOUNT_BEGIN,
  VIEW_STATISTIC_ORDER_AMOUNT_ERR,
  VIEW_STATISTIC_ORDER_AMOUNT_SUCCESS,

  VIEW_STATISTIC_PERFORMANCE_VIEW_BEGIN,
  VIEW_STATISTIC_PERFORMANCE_VIEW_ERR,
  VIEW_STATISTIC_PERFORMANCE_VIEW_SUCCESS,

  VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_BEGIN,
  VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_ERR,
  VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_SUCCESS,

  VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN,
  VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_ERR,
  VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS,

  VIEW_STATISTIC_BY_STATUS_ORDER_BEGIN,
  VIEW_STATISTIC_BY_STATUS_ORDER_ERR,
  VIEW_STATISTIC_BY_STATUS_ORDER_SUCCESS,

  VIEW_STATISTIC_RUNNING_COMPUTER_BEGIN,
  VIEW_STATISTIC_RUNNING_COMPUTER_ERR,
  VIEW_STATISTIC_RUNNING_COMPUTER_SUCCESS,

  VIEW_STATISTIC_RUNNING_USER_ORDER_BEGIN,
  VIEW_STATISTIC_RUNNING_USER_ORDER_ERR,
  VIEW_STATISTIC_RUNNING_USER_ORDER_SUCCESS,

  VIEW_STATISTIC_TASK_OF_TOOL_BEGIN,
  VIEW_STATISTIC_TASK_OF_TOOL_ERR,
  VIEW_STATISTIC_TASK_OF_TOOL_SUCCESS,

  VIEW_STATISTIC_USER_POINT_BEGIN,
  VIEW_STATISTIC_USER_POINT_ERR,
  VIEW_STATISTIC_USER_POINT_SUCCESS,

  VIEW_STATISTIC_TOTAL_ORDER_BEGIN,
  VIEW_STATISTIC_TOTAL_ORDER_ERR,
  VIEW_STATISTIC_TOTAL_ORDER_SUCCESS,

  VIEW_STATISTIC_ORDER_BY_DAYS_BEGIN,
  VIEW_STATISTIC_ORDER_BY_DAYS_ERR,
  VIEW_STATISTIC_ORDER_BY_DAYS_SUCCESS,
  
  VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_BEGIN,
  VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_ERR,
  VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_SUCCESS,


  SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_BEGIN,
  SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_ERR,
  SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_SUCCESS,

  SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN,
  SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR,
  SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS,

  SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN,
  SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_ERR,
  SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS,

  SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_BEGIN,
  SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_ERR,
  SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_SUCCESS,

  SUBSCRIBE_STATISTIC_COMPUTER_THREAD_BEGIN,
  SUBSCRIBE_STATISTIC_COMPUTER_THREAD_ERR,
  SUBSCRIBE_STATISTIC_COMPUTER_THREAD_SUCCESS,

  SUBSCRIBE_STATISTIC_ORDER_AMOUNT_BEGIN,
  SUBSCRIBE_STATISTIC_ORDER_AMOUNT_ERR,
  SUBSCRIBE_STATISTIC_ORDER_AMOUNT_SUCCESS,

  SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_BEGIN,
  SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_ERR,
  SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_SUCCESS,

  SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_BEGIN,
  SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_ERR,
  SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_SUCCESS,

  SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN,
  SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_ERR,
  SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS,

  SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_BEGIN,
  SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_ERR,
  SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_SUCCESS,

  SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_BEGIN,
  SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_ERR,
  SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_SUCCESS,

  SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_BEGIN,
  SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_ERR,
  SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_SUCCESS,

  SUBSCRIBE_STATISTIC_TASK_OF_TOOL_BEGIN,
  SUBSCRIBE_STATISTIC_TASK_OF_TOOL_ERR,
  SUBSCRIBE_STATISTIC_TASK_OF_TOOL_SUCCESS,

  SUBSCRIBE_STATISTIC_USER_POINT_BEGIN,
  SUBSCRIBE_STATISTIC_USER_POINT_ERR,
  SUBSCRIBE_STATISTIC_USER_POINT_SUCCESS,

  SUBSCRIBE_STATISTIC_TOTAL_ORDER_BEGIN,
  SUBSCRIBE_STATISTIC_TOTAL_ORDER_ERR,
  SUBSCRIBE_STATISTIC_TOTAL_ORDER_SUCCESS,

  SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_BEGIN,
  SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_ERR,
  SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_SUCCESS,



  VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN,
  VALIDATE_YOUTUBE_VIDEO_LINK_ERR,
  VALIDATE_YOUTUBE_VIDEO_LINK_SUCCESS,

  RESPONSE_MULTIPLE_ORDER_CREATED,
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case RESPONSE_MULTIPLE_ORDER_CREATED:
      return {
        ...state,
        respMultipleOrder: action?.payload
      };

    case COMMENT_STATISTIC_ORDER_BY_DAYS_BEGIN:
      return {
        ...state,
        chartLoading: true,
      };

    case COMMENT_STATISTIC_ORDER_BY_DAYS_SUCCESS:
      return {
        ...state,
        chartLoading: false,
        orderByDays: data,
      };

    case COMMENT_STATISTIC_ORDER_BY_DAYS_ERR:
      return {
        ...state,
        chartLoading: false,
        orderByDays: [],
        error: err
      };

    case SET_CATEGORY_IN_NEW_ORDER_BEGIN:
      return {
        ...state,
      };

    case SET_CATEGORY_IN_NEW_ORDER_SUCCESS:
      return {
        ...state,
        categoryNewOrder: data,
      };

    case SET_CATEGORY_IN_NEW_ORDER_ERR:
      return {
        ...state,
        categoryNewOrder: INITIALIZE_SERVICE_SELECTED,
        error: err
      };

    case COMMENT_STATISTIC_TOTAL_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_TOTAL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        totalOrder: data,
      };

    case COMMENT_STATISTIC_TOTAL_ORDER_ERR:
      return {
        ...state,
        totalOrder: 0,
        loading: false,
        error: err
      };

    case COMMENT_STATISTIC_USER_POINT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_STATISTIC_USER_POINT_SUCCESS:
      return {
        ...state,
        loading: false,
        userPoint: data,
      };

    case COMMENT_STATISTIC_USER_POINT_ERR:
      return {
        ...state,
        loading: false,
        userPoint: {},
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
        taskOfTool: data,
      };

    case COMMENT_STATISTIC_TASK_OF_TOOL_ERR:
      return {
        ...state,
        loading: false,
        taskOfTool: {},
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
        runningUserOrder: data,
      };

    case COMMENT_STATISTIC_RUNNING_USER_ORDER_ERR:
      return {
        ...state,
        loading: false,
        runningUserOrder: {},
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
        runningComputer: data,
      };

    case COMMENT_STATISTIC_RUNNING_COMPUTER_ERR:
      return {
        ...state,
        loading: false,
        runningComputer: {},
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
        statByStatusOrder: data,
      };

    case COMMENT_STATISTIC_BY_STATUS_ORDER_ERR:
      return {
        ...state,
        loading: false,
        statByStatusOrder: {},
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
        accountOnComputer: data,
      };

    case COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_ERR:
      return {
        ...state,
        loading: false,
        accountOnComputer: {},
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
        accountStatus: {},
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
        performance: [],
        error: err
      };

    case COMMENT_STATISTIC_ORDER_AMOUNT_BEGIN:
      return {
        ...state,
      };

    case COMMENT_STATISTIC_ORDER_AMOUNT_SUCCESS:
      return {
        ...state,
        orderAmountComment: data,
      };

    case COMMENT_STATISTIC_ORDER_AMOUNT_ERR:
      return {
        ...state,
        orderAmountComment: [],
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
        computerThread: {},
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
        quantityRunByDay: data,
      };

    case COMMENT_STATISTIC_COMMENT_BY_DAY_ERR:
      return {
        ...state,
        loading: false,
        quantityRunByDay: [],
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
        taskSuccessInMinutes: [],
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
        taskDurationInMinutes: [],
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
        statisticComment: [],
        error: err
      };

      
    // LIKE
    case LIKE_STATISTIC_USER_POINT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_USER_POINT_SUCCESS:
      return {
        ...state,
        loading: false,
        userPoint: data,
      };

    case LIKE_STATISTIC_USER_POINT_ERR:
      return {
        ...state,
        loading: false,
        userPoint: {},
        error: err
      };

    case LIKE_STATISTIC_TASK_OF_TOOL_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_TASK_OF_TOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        taskOfTool: data,
      };

    case LIKE_STATISTIC_TASK_OF_TOOL_ERR:
      return {
        ...state,
        loading: false,

        taskOfTool: {},
        error: err
      };

    case LIKE_STATISTIC_RUNNING_USER_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_RUNNING_USER_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        runningUserOrder: data,
      };

    case LIKE_STATISTIC_RUNNING_USER_ORDER_ERR:
      return {
        ...state,
        loading: false,
        runningUserOrder: {},
        error: err
      };

    case LIKE_STATISTIC_RUNNING_COMPUTER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_RUNNING_COMPUTER_SUCCESS:
      return {
        ...state,
        loading: false,
        runningComputer: data,
      };

    case LIKE_STATISTIC_RUNNING_COMPUTER_ERR:
      return {
        ...state,
        loading: false,
        runningComputer: {},
        error: err
      };

    case LIKE_STATISTIC_BY_STATUS_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_BY_STATUS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        statByStatusOrder: data,
      };

    case LIKE_STATISTIC_BY_STATUS_ORDER_ERR:
      return {
        ...state,
        loading: false,
        statByStatusOrder: {},
        error: err
      };

    case LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS:
      return {
        ...state,
        loading: false,
        accountOnComputer: data,
      };

    case LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_ERR:
      return {
        ...state,
        loading: false,
        accountOnComputer: {},
        error: err
      };
    
    case LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_SUCCESS:
      return {
        ...state,
        loading: false,
        accountStatus: data,
      };

    case LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_ERR:
      return {
        ...state,
        accountStatus: {},
        loading: false,
        error: err
      };

    case LIKE_STATISTIC_PERFORMANCE_LIKE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_PERFORMANCE_LIKE_SUCCESS:
      return {
        ...state,
        loading: false,
        performance: data,
      };

    case LIKE_STATISTIC_PERFORMANCE_LIKE_ERR:
      return {
        ...state,
        loading: false,
        performance: [],
        error: err
      };

    case LIKE_STATISTIC_ORDER_AMOUNT_BEGIN:
      return {
        ...state,
      };

    case LIKE_STATISTIC_ORDER_AMOUNT_SUCCESS:
      return {
        ...state,
        orderAmountLike: data,
      };

    case LIKE_STATISTIC_ORDER_AMOUNT_ERR:
      return {
        ...state,
        orderAmountLike: [],
        error: err
      };

    case LIKE_STATISTIC_COMPUTER_THREAD_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_COMPUTER_THREAD_SUCCESS:
      return {
        ...state,
        loading: false,
        computerThread: data,
      };

    case LIKE_STATISTIC_COMPUTER_THREAD_ERR:
      return {
        ...state,
        loading: false,
        computerThread: {},
        error: err
      };

    case LIKE_STATISTIC_LIKE_BY_DAY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_LIKE_BY_DAY_SUCCESS:
      return {
        ...state,
        loading: false,
        quantityRunByDay: data,
      };

    case LIKE_STATISTIC_LIKE_BY_DAY_ERR:
      return {
        ...state,
        loading: false,
        quantityRunByDay: [],
        error: err
      };
    case LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS:
      return {
        ...state,
        taskSuccessInMinutes: data,
        loading: false,
      };

    case LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR:
      return {
        ...state,
        loading: false,
        taskSuccessInMinutes: [],
        error: err
      };
    case LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS:
      return {
        ...state,
        taskDurationInMinutes: data,
        loading: false,
      };

    case LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_ERR:
      return {
        ...state,
        error: err,
        taskDurationInMinutes: [],
        loading: false,
      };

    case LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        statisticComment: data,
      };

    case LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_ERR:
      return {
        ...state,
        loading: false,
        statisticComment: {},
        error: err
      };

    case LIKE_STATISTIC_TOTAL_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIKE_STATISTIC_TOTAL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        totalOrder: data,
      };

    case LIKE_STATISTIC_TOTAL_ORDER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_BEGIN:
      return {
        ...state,
        chartLoading: true,
      };

    case LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_SUCCESS:
      return {
        ...state,
        statisticComment: data,
      };

    case LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_ERR:
      return {
        ...state,
        statisticComment: [],
        error: err
      };

    case LIKE_STATISTIC_ORDER_BY_DAYS_BEGIN:
      return {
        ...state,
        chartLoading: true,
      };

    case LIKE_STATISTIC_ORDER_BY_DAYS_SUCCESS:
      return {
        ...state,
        chartLoading: false,
        orderByDays: data,
      };

    case LIKE_STATISTIC_ORDER_BY_DAYS_ERR:
      return {
        ...state,
        chartLoading: false,
        orderByDays: [],
        error: err
      };


    // VIEW
    case VIEW_STATISTIC_USER_POINT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_USER_POINT_SUCCESS:
      return {
        ...state,
        loading: false,
        userPoint: data,
      };

    case VIEW_STATISTIC_USER_POINT_ERR:
      return {
        ...state,
        loading: false,
        userPoint: {},
        error: err
      };

    case VIEW_STATISTIC_TASK_OF_TOOL_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_TASK_OF_TOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        taskOfTool: data,
      };

    case VIEW_STATISTIC_TASK_OF_TOOL_ERR:
      return {
        ...state,
        loading: false,
        taskOfTool: {},
        error: err
      };

    case VIEW_STATISTIC_RUNNING_USER_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_RUNNING_USER_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        runningUserOrder: data,
      };

    case VIEW_STATISTIC_RUNNING_USER_ORDER_ERR:
      return {
        ...state,
        loading: false,
        runningUserOrder: {},
        error: err
      };

    case VIEW_STATISTIC_RUNNING_COMPUTER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_RUNNING_COMPUTER_SUCCESS:
      return {
        ...state,
        loading: false,
        runningComputer: data,
      };

    case VIEW_STATISTIC_RUNNING_COMPUTER_ERR:
      return {
        ...state,
        loading: false,
        runningComputer: {},
        error: err
      };

    case VIEW_STATISTIC_BY_STATUS_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_BY_STATUS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        statByStatusOrder: data,
      };

    case VIEW_STATISTIC_BY_STATUS_ORDER_ERR:
      return {
        ...state,
        loading: false,
        statByStatusOrder: {},
        error: err
      };

    case VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_BEGIN:
      return {
        ...state,
        chartLoading: true,
      };

    case VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_SUCCESS:
      return {
        ...state,
        statisticComment: data,
      };

    case VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_ERR:
      return {
        ...state,
        statisticComment: [],
        error: err
      };

    case VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS:
      return {
        ...state,
        loading: false,
        accountOnComputer: data,
      };

    case VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_ERR:
      return {
        ...state,
        loading: false,
        accountOnComputer: {},
        error: err
      };
    
    case VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        accountStatus: data,
      };

    case VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_ERR:
      return {
        ...state,
        accountStatus: {},
        loading: false,
        error: err
      };

    case VIEW_STATISTIC_PERFORMANCE_VIEW_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_PERFORMANCE_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        performance: data,
      };

    case VIEW_STATISTIC_PERFORMANCE_VIEW_ERR:
      return {
        ...state,
        loading: false,
        performance: [],
        error: err
      };

    case VIEW_STATISTIC_ORDER_AMOUNT_BEGIN:
      return {
        ...state,
      };

    case VIEW_STATISTIC_ORDER_AMOUNT_SUCCESS:
      return {
        ...state,
        orderAmountView: data,
      };

    case VIEW_STATISTIC_ORDER_AMOUNT_ERR:
      return {
        ...state,
        orderAmountView: [],
        error: err
      };

    case VIEW_STATISTIC_COMPUTER_THREAD_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_COMPUTER_THREAD_SUCCESS:
      return {
        ...state,
        loading: false,
        computerThread: data,
      };

    case VIEW_STATISTIC_COMPUTER_THREAD_ERR:
      return {
        ...state,
        loading: false,
        computerThread: {},
        error: err
      };

    case VIEW_STATISTIC_VIEW_BY_DAY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_VIEW_BY_DAY_SUCCESS:
      return {
        ...state,
        loading: false,
        quantityRunByDay: data,
      };

    case VIEW_STATISTIC_VIEW_BY_DAY_ERR:
      return {
        ...state,
        loading: false,
        quantityRunByDay: [],
        error: err
      };
    case VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS:
      return {
        ...state,
        taskSuccessInMinutes: data,
        loading: false,
      };

    case VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR:
      return {
        ...state,
        loading: false,
        taskSuccessInMinutes: [],
        error: err
      };
    case VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS:
      return {
        ...state,
        taskDurationInMinutes: data,
        loading: false,
      };

    case VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_ERR:
      return {
        ...state,
        error: err,
        taskDurationInMinutes: [],
        loading: false,
      };

    case VIEW_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        statisticComment: data,
      };

    case VIEW_STATISTIC_COMMENT_BY_ORDER_REPORT_ERR:
      return {
        ...state,
        loading: false,
        statisticComment: {},
        error: err
      };

    case VIEW_STATISTIC_TOTAL_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_STATISTIC_TOTAL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        totalOrder: data,
      };

    case VIEW_STATISTIC_TOTAL_ORDER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case VIEW_STATISTIC_ORDER_BY_DAYS_BEGIN:
      return {
        ...state,
        chartLoading: true,
      };

    case VIEW_STATISTIC_ORDER_BY_DAYS_SUCCESS:
      return {
        ...state,
        chartLoading: false,
        orderByDays: data,
      };

    case VIEW_STATISTIC_ORDER_BY_DAYS_ERR:
      return {
        ...state,
        chartLoading: false,
        orderByDays: [],
        error: err
      };

    // SUBSCRIBE
    case SUBSCRIBE_STATISTIC_USER_POINT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_USER_POINT_SUCCESS:
      return {
        ...state,
        loading: false,
        userPoint: data,
      };

    case SUBSCRIBE_STATISTIC_USER_POINT_ERR:
      return {
        ...state,
        loading: false,
        userPoint: {},
        error: err
      };

    case SUBSCRIBE_STATISTIC_TASK_OF_TOOL_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_TASK_OF_TOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        taskOfTool: data,
      };

    case SUBSCRIBE_STATISTIC_TASK_OF_TOOL_ERR:
      return {
        ...state,
        loading: false,

        taskOfTool: {},
        error: err
      };

    case SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        runningUserOrder: data,
      };

    case SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_ERR:
      return {
        ...state,
        loading: false,
        runningUserOrder: {},
        error: err
      };

    case SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_SUCCESS:
      return {
        ...state,
        loading: false,
        runningComputer: data,
      };

    case SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_ERR:
      return {
        ...state,
        loading: false,
        runningComputer: {},
        error: err
      };

    case SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        statByStatusOrder: data,
      };

    case SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_ERR:
      return {
        ...state,
        loading: false,
        statByStatusOrder: {},
        error: err
      };

    case SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS:
      return {
        ...state,
        loading: false,
        accountOnComputer: data,
      };

    case SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_ERR:
      return {
        ...state,
        loading: false,
        accountOnComputer: {},
        error: err
      };
    
    case SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        accountStatus: data,
      };

    case SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_ERR:
      return {
        ...state,
        accountStatus: {},
        loading: false,
        error: err
      };

    case SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        performance: data,
      };

    case SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_ERR:
      return {
        ...state,
        loading: false,
        performance: [],
        error: err
      };

    case SUBSCRIBE_STATISTIC_ORDER_AMOUNT_BEGIN:
      return {
        ...state,
      };

    case SUBSCRIBE_STATISTIC_ORDER_AMOUNT_SUCCESS:
      return {
        ...state,
        orderAmountSubscribe: data,
      };

    case SUBSCRIBE_STATISTIC_ORDER_AMOUNT_ERR:
      return {
        ...state,
        orderAmountSubscribe: [],
        error: err
      };

    case SUBSCRIBE_STATISTIC_COMPUTER_THREAD_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_COMPUTER_THREAD_SUCCESS:
      return {
        ...state,
        loading: false,
        computerThread: data,
      };

    case SUBSCRIBE_STATISTIC_COMPUTER_THREAD_ERR:
      return {
        ...state,
        loading: false,
        computerThread: {},
        error: err
      };

    case SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_SUCCESS:
      return {
        ...state,
        loading: false,
        quantityRunByDay: data,
      };

    case SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_ERR:
      return {
        ...state,
        loading: false,
        quantityRunByDay: [],
        error: err
      };
    case SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS:
      return {
        ...state,
        taskSuccessInMinutes: data,
        loading: false,
      };

    case SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR:
      return {
        ...state,
        loading: false,
        taskSuccessInMinutes: [],
        error: err
      };
    case SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS:
      return {
        ...state,
        taskDurationInMinutes: data,
        loading: false,
      };

    case SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_ERR:
      return {
        ...state,
        error: err,
        taskDurationInMinutes: [],
        loading: false,
      };

    case SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        statisticComment: data,
      };

    case SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_ERR:
      return {
        ...state,
        loading: false,
        statisticComment: {},
        error: err
      };

    case SUBSCRIBE_STATISTIC_TOTAL_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_STATISTIC_TOTAL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        totalOrder: data,
      };

    case SUBSCRIBE_STATISTIC_TOTAL_ORDER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_BEGIN:
      return {
        ...state,
        chartLoading: true,
      };

    case SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_SUCCESS:
      return {
        ...state,
        chartLoading: false,
        orderByDays: data,
      };

    case SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_ERR:
      return {
        ...state,
        chartLoading: false,
        orderByDays: [],
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
        validateYouTubeUrl: [],
        error: err
      };

    case OPEN_MODAL_CREATE_NEW_ORDER_BEGIN:
      return {
        ...state,
      };

    case OPEN_MODAL_CREATE_NEW_ORDER_SUCCESS:
      return {
        ...state,
        isOpenCreateOrder: data,
      };

    case OPEN_MODAL_CREATE_NEW_ORDER_ERR:
      return {
        ...state,
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
        statisticSubscribe: [],
        error: err
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

    default:
      return state;
  }
};

export default ReportsReducer;
