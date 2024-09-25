import actions from './actions';
import { currentDate, previousDate } from '../../utility/utility';
import { ORDER_YOUTUBE_STATUS } from '../../variables';

const initialState = {
  statusBarNumber: ORDER_YOUTUBE_STATUS.find(item => item?.name === 'OrderStatusProcessing')?.value,
  adminSetting: {},
  listOrderSubscribe: [],
  servicePackage: [],
  userList: [],
  orderSubHistory: [],
  filterRange: {
    from: previousDate(8),
    to: currentDate
  },
  typeHistory: 0,
  loading: false,
  error: null
};

const {
    FETCH_ADMIN_SETTING_BEGIN,
    FETCH_ADMIN_SETTING_ERR,
    FETCH_ADMIN_SETTING_SUCCESS,

    FETCH_LIST_ORDER_SUBSCRIBE_BEGIN,
    FETCH_LIST_ORDER_SUBSCRIBE_ERR,
    FETCH_LIST_ORDER_SUBSCRIBE_SUCCESS,

    FETCH_SERVICE_PACKAGE_LIST_BEGIN,
    FETCH_SERVICE_PACKAGE_LIST_ERR,
    FETCH_SERVICE_PACKAGE_LIST_SUCCESS,

    FETCH_LIST_ORDER_HISTORY_BEGIN,
    FETCH_LIST_ORDER_HISTORY_ERR,
    FETCH_LIST_ORDER_HISTORY_SUCCESS,

    CHANGE_ORDER_HISTORY_TYPE_BEGIN,
    CHANGE_ORDER_HISTORY_TYPE_SUCCESS,
    CHANGE_ORDER_HISTORY_TYPE_ERR,

    SET_RANGE_DATE_ORDER_HISTORY_BEGIN,
    SET_RANGE_DATE_ORDER_HISTORY_SUCCESS,
    SET_RANGE_DATE_ORDER_HISTORY_ERR,

    SET_STATUS_BAR_NUMBER_SUBSCRIBE_BEGIN,
    SET_STATUS_BAR_NUMBER_SUBSCRIBE_ERR,
    SET_STATUS_BAR_NUMBER_SUBSCRIBE_SUCCESS
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SET_STATUS_BAR_NUMBER_SUBSCRIBE_BEGIN:
      return {
        ...state,
      };

    case SET_STATUS_BAR_NUMBER_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        statusBarNumber: data
      };

    case SET_STATUS_BAR_NUMBER_SUBSCRIBE_ERR:
      return {
        ...state,
        error: err
      };

    case SET_RANGE_DATE_ORDER_HISTORY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SET_RANGE_DATE_ORDER_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        filterRange: data,
      };

    case SET_RANGE_DATE_ORDER_HISTORY_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case CHANGE_ORDER_HISTORY_TYPE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CHANGE_ORDER_HISTORY_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        typeHistory: data,
      };

    case CHANGE_ORDER_HISTORY_TYPE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case FETCH_LIST_ORDER_HISTORY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LIST_ORDER_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        orderSubHistory: data,
      };

    case FETCH_LIST_ORDER_HISTORY_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case FETCH_ADMIN_SETTING_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ADMIN_SETTING_SUCCESS:
      return {
        ...state,
        loading: false,
        adminSetting: data,
      };

    case FETCH_ADMIN_SETTING_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case FETCH_LIST_ORDER_SUBSCRIBE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LIST_ORDER_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        listOrderSubscribe: data
      };
    case FETCH_LIST_ORDER_SUBSCRIBE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case FETCH_SERVICE_PACKAGE_LIST_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SERVICE_PACKAGE_LIST_SUCCESS:
      return {
        ...state,
        servicePackage: data,
        loading: false,
      };

    case FETCH_SERVICE_PACKAGE_LIST_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

export default ReportsReducer;
