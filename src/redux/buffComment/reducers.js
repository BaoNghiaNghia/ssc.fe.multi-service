import actions from './actions';

const initialState = {
  listOrderComment: [],
  detailOrderComment: {},
  listComputer: {},
  commentInOrder: {},
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
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
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
