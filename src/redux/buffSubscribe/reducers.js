import actions from './actions';
import { currentDate, previousDate } from '../../utility/utility';
import { ORDER_YOUTUBE_STATUS } from '../../variables';

const initialState = {
  statusBarNumber: ORDER_YOUTUBE_STATUS.find(item => item?.name === 'OrderStatusProcessing')?.value,
  adminSetting: {},
  servicePackage: [],
  userList: [],
  orderSubHistory: [],
  filterRange: {
    from: previousDate(8),
    to: currentDate
  },
  typeHistory: 0,
  listOrderSubscribe: [],
  detailOrderSubscribe: {},
  listComputer: {},
  detailComputerSubscribe: {},
  listWarrantyOrder: [],
  commentInOrder: {},
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
    SET_STATUS_BAR_NUMBER_SUBSCRIBE_SUCCESS,






    DETAIL_ORDER_SUBSCRIBE_BEGIN,
    DETAIL_ORDER_SUBSCRIBE_ERR,
    DETAIL_ORDER_SUBSCRIBE_SUCCESS,

    SUBSCRIBE_IN_ORDER_SUBSCRIBE_BEGIN,
    SUBSCRIBE_IN_ORDER_SUBSCRIBE_ERR,
    SUBSCRIBE_IN_ORDER_SUBSCRIBE_SUCCESS,

    CREATE_ORDER_SUBSCRIBE_ADMIN_BEGIN,
    CREATE_ORDER_SUBSCRIBE_ADMIN_ERR,
    CREATE_ORDER_SUBSCRIBE_ADMIN_SUCCESS,

    DETAIL_ORDER_SUBSCRIBE_ADMIN_BEGIN,
    DETAIL_ORDER_SUBSCRIBE_ADMIN_ERR,
    DETAIL_ORDER_SUBSCRIBE_ADMIN_SUCCESS,

    UPDATE_ORDER_SUBSCRIBE_ADMIN_BEGIN,
    UPDATE_ORDER_SUBSCRIBE_ADMIN_ERR,
    UPDATE_ORDER_SUBSCRIBE_ADMIN_SUCCESS,

    LIST_COMPUTER_RUN_SUBSCRIBE_BEGIN,
    LIST_COMPUTER_RUN_SUBSCRIBE_ERR,
    LIST_COMPUTER_RUN_SUBSCRIBE_SUCCESS,

    DETAIL_COMPUTER_RUN_SUBSCRIBE_BEGIN,
    DETAIL_COMPUTER_RUN_SUBSCRIBE_ERR,
    DETAIL_COMPUTER_RUN_SUBSCRIBE_SUCCESS,

    DELETE_COMPUTER_RUN_SUBSCRIBE_BEGIN,
    DELETE_COMPUTER_RUN_SUBSCRIBE_ERR,
    DELETE_COMPUTER_RUN_SUBSCRIBE_SUCCESS,
    
    UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_BEGIN,
    UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_ERR,
    UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_SUCCESS,
    
    UPDATE_ONE_COMPUTER_RUN_SUBSCRIBE_BEGIN,
    UPDATE_ONE_COMPUTER_RUN_SUBSCRIBE_ERR,
    UPDATE_ONE_COMPUTER_RUN_SUBSCRIBE_SUCCESS,

    UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_BEGIN,
    UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_ERR,
    UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_SUCCESS,

    ACTIVE_WARRANTY_ORDER_SUBSCRIBE_BEGIN,
    ACTIVE_WARRANTY_ORDER_SUBSCRIBE_ERR,
    ACTIVE_WARRANTY_ORDER_SUBSCRIBE_SUCCESS,

    FETCH_WARRANTY_SUBSCRIBE_ORDER_BEGIN,
    FETCH_WARRANTY_SUBSCRIBE_ORDER_ERR,
    FETCH_WARRANTY_SUBSCRIBE_ORDER_SUCCESS,

    REFUND_WARRANTY_ORDER_BEGIN,
    REFUND_WARRANTY_ORDER_ERR,
    REFUND_WARRANTY_ORDER_SUCCESS,

    SET_RANGE_DATE_WARRANTY_FILTER_BEGIN,
    SET_RANGE_DATE_WARRANTY_FILTER_ERR,
    SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS,
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



    case FETCH_WARRANTY_SUBSCRIBE_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_WARRANTY_SUBSCRIBE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        listWarrantyOrder: data
      };

    case FETCH_WARRANTY_SUBSCRIBE_ORDER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case SET_RANGE_DATE_WARRANTY_FILTER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        filterRange: data
      };

    case SET_RANGE_DATE_WARRANTY_FILTER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case REFUND_WARRANTY_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case REFUND_WARRANTY_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case REFUND_WARRANTY_ORDER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case ACTIVE_WARRANTY_ORDER_SUBSCRIBE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case ACTIVE_WARRANTY_ORDER_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case ACTIVE_WARRANTY_ORDER_SUBSCRIBE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case UPDATE_ONE_COMPUTER_RUN_SUBSCRIBE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_ONE_COMPUTER_RUN_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_ONE_COMPUTER_RUN_SUBSCRIBE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case LIST_COMPUTER_RUN_SUBSCRIBE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIST_COMPUTER_RUN_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        listComputer: data
      };

    case LIST_COMPUTER_RUN_SUBSCRIBE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case DETAIL_ORDER_SUBSCRIBE_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_ORDER_SUBSCRIBE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        detailOrderSubscribe: data
      };

    case DETAIL_ORDER_SUBSCRIBE_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case DELETE_COMPUTER_RUN_SUBSCRIBE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DELETE_COMPUTER_RUN_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_COMPUTER_RUN_SUBSCRIBE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case DETAIL_COMPUTER_RUN_SUBSCRIBE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_COMPUTER_RUN_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        detailComputerSubscribe: data
      };

    case DETAIL_COMPUTER_RUN_SUBSCRIBE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case UPDATE_ORDER_SUBSCRIBE_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_ORDER_SUBSCRIBE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_ORDER_SUBSCRIBE_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case CREATE_ORDER_SUBSCRIBE_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CREATE_ORDER_SUBSCRIBE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CREATE_ORDER_SUBSCRIBE_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case DETAIL_ORDER_SUBSCRIBE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_ORDER_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        detailOrderSubscribe: data,
      };

    case DETAIL_ORDER_SUBSCRIBE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case SUBSCRIBE_IN_ORDER_SUBSCRIBE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SUBSCRIBE_IN_ORDER_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        commentInOrder: data,
      };

    case SUBSCRIBE_IN_ORDER_SUBSCRIBE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    default:
      return state;
  }
};

export default ReportsReducer;
