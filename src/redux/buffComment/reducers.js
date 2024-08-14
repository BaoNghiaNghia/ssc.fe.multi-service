import actions from './actions';
import { currentDate, previousDate } from '../../utility/utility';

const initialState = {
  listOrderComment: [],
  detailOrderComment: {},
  listComputer: {},
  detailComputerComment: {},
  listWarrantyOrder: [],
  commentInOrder: {},
  filterRange: {
    from: previousDate(8),
    to: currentDate
  },
  loading: false,
  error: null
};

const {
    FETCH_LIST_ORDER_COMMENT_BEGIN,
    FETCH_LIST_ORDER_COMMENT_ERR,
    FETCH_LIST_ORDER_COMMENT_SUCCESS,

    DETAIL_ORDER_COMMENT_BEGIN,
    DETAIL_ORDER_COMMENT_ERR,
    DETAIL_ORDER_COMMENT_SUCCESS,

    COMMENT_IN_ORDER_COMMENT_BEGIN,
    COMMENT_IN_ORDER_COMMENT_ERR,
    COMMENT_IN_ORDER_COMMENT_SUCCESS,

    CREATE_ORDER_COMMENT_ADMIN_BEGIN,
    CREATE_ORDER_COMMENT_ADMIN_ERR,
    CREATE_ORDER_COMMENT_ADMIN_SUCCESS,

    DETAIL_ORDER_COMMENT_ADMIN_BEGIN,
    DETAIL_ORDER_COMMENT_ADMIN_ERR,
    DETAIL_ORDER_COMMENT_ADMIN_SUCCESS,

    UPDATE_ORDER_COMMENT_ADMIN_BEGIN,
    UPDATE_ORDER_COMMENT_ADMIN_ERR,
    UPDATE_ORDER_COMMENT_ADMIN_SUCCESS,

    LIST_COMPUTER_RUN_COMMENT_BEGIN,
    LIST_COMPUTER_RUN_COMMENT_ERR,
    LIST_COMPUTER_RUN_COMMENT_SUCCESS,

    DETAIL_COMPUTER_RUN_COMMENT_BEGIN,
    DETAIL_COMPUTER_RUN_COMMENT_ERR,
    DETAIL_COMPUTER_RUN_COMMENT_SUCCESS,

    DELETE_COMPUTER_RUN_COMMENT_BEGIN,
    DELETE_COMPUTER_RUN_COMMENT_ERR,
    DELETE_COMPUTER_RUN_COMMENT_SUCCESS,
    
    UPDATE_MANY_ORDER_COMMENT_ADMIN_BEGIN,
    UPDATE_MANY_ORDER_COMMENT_ADMIN_ERR,
    UPDATE_MANY_ORDER_COMMENT_ADMIN_SUCCESS,
    
    UPDATE_ONE_COMPUTER_RUN_COMMENT_BEGIN,
    UPDATE_ONE_COMPUTER_RUN_COMMENT_ERR,
    UPDATE_ONE_COMPUTER_RUN_COMMENT_SUCCESS,

    UPDATE_MANY_COMPUTER_COMMENT_ADMIN_BEGIN,
    UPDATE_MANY_COMPUTER_COMMENT_ADMIN_ERR,
    UPDATE_MANY_COMPUTER_COMMENT_ADMIN_SUCCESS,

    ACTIVE_WARRANTY_ORDER_COMMENT_BEGIN,
    ACTIVE_WARRANTY_ORDER_COMMENT_ERR,
    ACTIVE_WARRANTY_ORDER_COMMENT_SUCCESS,

    FETCH_WARRANTY_COMMENT_ORDER_BEGIN,
    FETCH_WARRANTY_COMMENT_ORDER_ERR,
    FETCH_WARRANTY_COMMENT_ORDER_SUCCESS,

    REFUND_WARRANTY_ORDER_BEGIN,
    REFUND_WARRANTY_ORDER_ERR,
    REFUND_WARRANTY_ORDER_SUCCESS,

    SET_RANGE_DATE_WARRANTY_FILTER_BEGIN,
    SET_RANGE_DATE_WARRANTY_FILTER_ERR,
    SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FETCH_WARRANTY_COMMENT_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_WARRANTY_COMMENT_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        listWarrantyOrder: data
      };

    case FETCH_WARRANTY_COMMENT_ORDER_ERR:
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

    case ACTIVE_WARRANTY_ORDER_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case ACTIVE_WARRANTY_ORDER_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case ACTIVE_WARRANTY_ORDER_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case UPDATE_MANY_COMPUTER_COMMENT_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_MANY_COMPUTER_COMMENT_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_MANY_COMPUTER_COMMENT_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case UPDATE_ONE_COMPUTER_RUN_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_ONE_COMPUTER_RUN_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_ONE_COMPUTER_RUN_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case UPDATE_MANY_ORDER_COMMENT_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_MANY_ORDER_COMMENT_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_MANY_ORDER_COMMENT_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case LIST_COMPUTER_RUN_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIST_COMPUTER_RUN_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        listComputer: data
      };

    case LIST_COMPUTER_RUN_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case DETAIL_ORDER_COMMENT_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_ORDER_COMMENT_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        detailOrderComment: data
      };

    case DETAIL_ORDER_COMMENT_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case DELETE_COMPUTER_RUN_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DELETE_COMPUTER_RUN_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_COMPUTER_RUN_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case DETAIL_COMPUTER_RUN_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_COMPUTER_RUN_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        detailComputerComment: data
      };

    case DETAIL_COMPUTER_RUN_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case UPDATE_ORDER_COMMENT_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_ORDER_COMMENT_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_ORDER_COMMENT_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case CREATE_ORDER_COMMENT_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CREATE_ORDER_COMMENT_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CREATE_ORDER_COMMENT_ADMIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case FETCH_LIST_ORDER_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LIST_ORDER_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        listOrderComment: data,
      };

    case FETCH_LIST_ORDER_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case DETAIL_ORDER_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_ORDER_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        detailOrderComment: data,
      };

    case DETAIL_ORDER_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case COMMENT_IN_ORDER_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMMENT_IN_ORDER_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        commentInOrder: data,
      };

    case COMMENT_IN_ORDER_COMMENT_ERR:
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
