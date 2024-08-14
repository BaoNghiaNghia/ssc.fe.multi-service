import actions from './actions';
import { currentDate, previousDate } from '../../utility/utility';
import { SERVICE_TYPE } from '../../variables';

const initialState = {
  filterRange: {
    from: previousDate(8),
    to: currentDate
  },
  typeService: SERVICE_TYPE.COMMENT.title,
  listAccountgGmail: [],
  detailAccountGmail: {},
  loading: false,
  error: null
};

const {
  CHANGE_SERVICE_TYPE_IN_GMAIL_BEGIN,
  CHANGE_SERVICE_TYPE_IN_GMAIL_SUCCESS,
  CHANGE_SERVICE_TYPE_IN_GMAIL_ERR,

  CREATE_ACCOUNT_GMAIL_COMMENT_BEGIN,
  CREATE_ACCOUNT_GMAIL_COMMENT_ERR,
  CREATE_ACCOUNT_GMAIL_COMMENT_SUCCESS,

  CREATE_ACCOUNT_GMAIL_LIKE_BEGIN,
  CREATE_ACCOUNT_GMAIL_LIKE_ERR,
  CREATE_ACCOUNT_GMAIL_LIKE_SUCCESS,

  DELETE_ACCOUNT_GMAIL_COMMENT_BEGIN,
  DELETE_ACCOUNT_GMAIL_COMMENT_ERR,
  DELETE_ACCOUNT_GMAIL_COMMENT_SUCCESS,

  DELETE_ACCOUNT_GMAIL_LIKE_BEGIN,
  DELETE_ACCOUNT_GMAIL_LIKE_ERR,
  DELETE_ACCOUNT_GMAIL_LIKE_SUCCESS,

  DETAIL_ACCOUNT_GMAIL_COMMENT_BEGIN,
  DETAIL_ACCOUNT_GMAIL_COMMENT_ERR,
  DETAIL_ACCOUNT_GMAIL_COMMENT_SUCCESS,

  DETAIL_ACCOUNT_GMAIL_LIKE_BEGIN,
  DETAIL_ACCOUNT_GMAIL_LIKE_ERR,
  DETAIL_ACCOUNT_GMAIL_LIKE_SUCCESS,

  LIST_ACCOUNT_GMAIL_COMMENT_BEGIN,
  LIST_ACCOUNT_GMAIL_COMMENT_ERR,
  LIST_ACCOUNT_GMAIL_COMMENT_SUCCESS,

  LIST_ACCOUNT_GMAIL_LIKE_BEGIN,
  LIST_ACCOUNT_GMAIL_LIKE_ERR,
  LIST_ACCOUNT_GMAIL_LIKE_SUCCESS,

  PATCH_ACCOUNT_GMAIL_COMMENT_BEGIN,
  PATCH_ACCOUNT_GMAIL_COMMENT_ERR,
  PATCH_ACCOUNT_GMAIL_COMMENT_SUCCESS,

  PATCH_ACCOUNT_GMAIL_LIKE_BEGIN,
  PATCH_ACCOUNT_GMAIL_LIKE_ERR,
  PATCH_ACCOUNT_GMAIL_LIKE_SUCCESS,
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LIST_ACCOUNT_GMAIL_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIST_ACCOUNT_GMAIL_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        listAccountgGmail: data
      };

    case LIST_ACCOUNT_GMAIL_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case DETAIL_ACCOUNT_GMAIL_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_ACCOUNT_GMAIL_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        detailAccountGmail: data,
      };

    case DETAIL_ACCOUNT_GMAIL_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case CREATE_ACCOUNT_GMAIL_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CREATE_ACCOUNT_GMAIL_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CREATE_ACCOUNT_GMAIL_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case DELETE_ACCOUNT_GMAIL_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DELETE_ACCOUNT_GMAIL_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_ACCOUNT_GMAIL_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case PATCH_ACCOUNT_GMAIL_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case PATCH_ACCOUNT_GMAIL_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case PATCH_ACCOUNT_GMAIL_COMMENT_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };


    case LIST_ACCOUNT_GMAIL_LIKE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIST_ACCOUNT_GMAIL_LIKE_SUCCESS:
      return {
        ...state,
        loading: false,
        listAccountgGmail: data
      };

    case LIST_ACCOUNT_GMAIL_LIKE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case DETAIL_ACCOUNT_GMAIL_LIKE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_ACCOUNT_GMAIL_LIKE_SUCCESS:
      return {
        ...state,
        loading: false,
        detailAccountGmail: data,
      };

    case DETAIL_ACCOUNT_GMAIL_LIKE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case CREATE_ACCOUNT_GMAIL_LIKE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CREATE_ACCOUNT_GMAIL_LIKE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CREATE_ACCOUNT_GMAIL_LIKE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case DELETE_ACCOUNT_GMAIL_LIKE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DELETE_ACCOUNT_GMAIL_LIKE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_ACCOUNT_GMAIL_LIKE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case PATCH_ACCOUNT_GMAIL_LIKE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case PATCH_ACCOUNT_GMAIL_LIKE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case PATCH_ACCOUNT_GMAIL_LIKE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };




    case CHANGE_SERVICE_TYPE_IN_GMAIL_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CHANGE_SERVICE_TYPE_IN_GMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        typeService: data,
      };

    case CHANGE_SERVICE_TYPE_IN_GMAIL_ERR:
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
