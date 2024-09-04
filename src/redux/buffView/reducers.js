import actions from './actions';
import { currentDate, previousDate } from '../../utility/utility';

const initialState = {
  listOrderView: [],
  detailOrderView: {},
  listComputer: {},
  detailComputerView: {},
  listWarrantyOrder: [],
  viewInOrder: {},
  filterRange: {
    from: previousDate(8),
    to: currentDate
  },
  loading: false,
  error: null
};

const {
    FETCH_LIST_ORDER_VIEW_BEGIN,
    FETCH_LIST_ORDER_VIEW_ERR,
    FETCH_LIST_ORDER_VIEW_SUCCESS,

    DETAIL_ORDER_VIEW_BEGIN,
    DETAIL_ORDER_VIEW_ERR,
    DETAIL_ORDER_VIEW_SUCCESS,

    VIEW_IN_ORDER_VIEW_BEGIN,
    VIEW_IN_ORDER_VIEW_ERR,
    VIEW_IN_ORDER_VIEW_SUCCESS,

    CREATE_ORDER_VIEW_ADMIN_BEGIN,
    CREATE_ORDER_VIEW_ADMIN_ERR,
    CREATE_ORDER_VIEW_ADMIN_SUCCESS,

    DETAIL_ORDER_VIEW_ADMIN_BEGIN,
    DETAIL_ORDER_VIEW_ADMIN_ERR,
    DETAIL_ORDER_VIEW_ADMIN_SUCCESS,

    UPDATE_ORDER_VIEW_ADMIN_BEGIN,
    UPDATE_ORDER_VIEW_ADMIN_ERR,
    UPDATE_ORDER_VIEW_ADMIN_SUCCESS,

    LIST_COMPUTER_RUN_VIEW_BEGIN,
    LIST_COMPUTER_RUN_VIEW_ERR,
    LIST_COMPUTER_RUN_VIEW_SUCCESS,

    DETAIL_COMPUTER_RUN_VIEW_BEGIN,
    DETAIL_COMPUTER_RUN_VIEW_ERR,
    DETAIL_COMPUTER_RUN_VIEW_SUCCESS,

    DELETE_COMPUTER_RUN_VIEW_BEGIN,
    DELETE_COMPUTER_RUN_VIEW_ERR,
    DELETE_COMPUTER_RUN_VIEW_SUCCESS,
    
    UPDATE_MANY_ORDER_VIEW_ADMIN_BEGIN,
    UPDATE_MANY_ORDER_VIEW_ADMIN_ERR,
    UPDATE_MANY_ORDER_VIEW_ADMIN_SUCCESS,
    
    UPDATE_ONE_COMPUTER_RUN_VIEW_BEGIN,
    UPDATE_ONE_COMPUTER_RUN_VIEW_ERR,
    UPDATE_ONE_COMPUTER_RUN_VIEW_SUCCESS,

    UPDATE_MANY_COMPUTER_VIEW_ADMIN_BEGIN,
    UPDATE_MANY_COMPUTER_VIEW_ADMIN_ERR,
    UPDATE_MANY_COMPUTER_VIEW_ADMIN_SUCCESS,

    ACTIVE_WARRANTY_ORDER_VIEW_BEGIN,
    ACTIVE_WARRANTY_ORDER_VIEW_ERR,
    ACTIVE_WARRANTY_ORDER_VIEW_SUCCESS,

    FETCH_WARRANTY_VIEW_ORDER_BEGIN,
    FETCH_WARRANTY_VIEW_ORDER_ERR,
    FETCH_WARRANTY_VIEW_ORDER_SUCCESS,

    REFUND_WARRANTY_ORDER_BEGIN,
    REFUND_WARRANTY_ORDER_ERR,
    REFUND_WARRANTY_ORDER_SUCCESS,

    SET_RANGE_DATE_WARRANTY_FILTER_BEGIN,
    SET_RANGE_DATE_WARRANTY_FILTER_ERR,
    SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS,

    FETCH_LIST_DEVICES_RUN_VIEW_ERR,
    FETCH_LIST_DEVICES_RUN_VIEW_SUCCESS,
    FETCH_LIST_DEVICES_RUN_VIEW_BEGIN
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FETCH_WARRANTY_VIEW_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_WARRANTY_VIEW_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        listWarrantyOrder: data
      };

    case FETCH_WARRANTY_VIEW_ORDER_ERR:
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

    case ACTIVE_WARRANTY_ORDER_VIEW_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case ACTIVE_WARRANTY_ORDER_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case ACTIVE_WARRANTY_ORDER_VIEW_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case UPDATE_MANY_COMPUTER_VIEW_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_MANY_COMPUTER_VIEW_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_MANY_COMPUTER_VIEW_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case UPDATE_ONE_COMPUTER_RUN_VIEW_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_ONE_COMPUTER_RUN_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_ONE_COMPUTER_RUN_VIEW_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case UPDATE_MANY_ORDER_VIEW_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_MANY_ORDER_VIEW_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_MANY_ORDER_VIEW_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case FETCH_LIST_DEVICES_RUN_VIEW_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LIST_DEVICES_RUN_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        listComputer: data
      };

    case FETCH_LIST_DEVICES_RUN_VIEW_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case DETAIL_ORDER_VIEW_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_ORDER_VIEW_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        detailOrderView: data
      };

    case DETAIL_ORDER_VIEW_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case DELETE_COMPUTER_RUN_VIEW_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DELETE_COMPUTER_RUN_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_COMPUTER_RUN_VIEW_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case DETAIL_COMPUTER_RUN_VIEW_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_COMPUTER_RUN_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        detailComputerView: data
      };

    case DETAIL_COMPUTER_RUN_VIEW_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case UPDATE_ORDER_VIEW_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_ORDER_VIEW_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_ORDER_VIEW_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case CREATE_ORDER_VIEW_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CREATE_ORDER_VIEW_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CREATE_ORDER_VIEW_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case FETCH_LIST_ORDER_VIEW_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LIST_ORDER_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        listOrderView: data,
      };

    case FETCH_LIST_ORDER_VIEW_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case DETAIL_ORDER_VIEW_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_ORDER_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        detailOrderView: data,
      };

    case DETAIL_ORDER_VIEW_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case VIEW_IN_ORDER_VIEW_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case VIEW_IN_ORDER_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        viewInOrder: data,
      };

    case VIEW_IN_ORDER_VIEW_ERR:
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
