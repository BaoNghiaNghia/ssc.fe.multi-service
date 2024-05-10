import actions from './actions';

const initialState = {
  listOrderComment: [],
  detailOrderComment: {},
  loading: false,
  error: null
};

const {
    FETCH_LIST_ORDER_COMMENT_BEGIN,
    FETCH_LIST_ORDER_COMMENT_ERR,
    FETCH_LIST_ORDER_COMMENT_SUCCESS,

    DETAIL_ORDER_COMMENT_BEGIN,
    DETAIL_ORDER_COMMENT_ERR,
    DETAIL_ORDER_COMMENT_SUCCESS
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
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

    default:
      return state;
  }
};

export default ReportsReducer;
