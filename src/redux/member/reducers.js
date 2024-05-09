import actions from './actions';
import { MEMBER_TABLE_TYPE } from '../../variables';

const initialState = {
  userList: [],
  loading: false,
  detailUser: {},
  //  member or topup
  typeTable: MEMBER_TABLE_TYPE.MEMBER.title,
  topupList: [],
  error: null
};

const {
    FETCH_USER_LIST_BEGIN,
    FETCH_USER_LIST_ERR,
    FETCH_USER_LIST_SUCCESS,
    
    FETCH_TOPUP_LIST_BEGIN,
    FETCH_TOPUP_LIST_ERR,
    FETCH_TOPUP_LIST_SUCCESS,

    DETAIL_USER_ADMIN_BEGIN,
    DETAIL_USER_ADMIN_ERR,
    DETAIL_USER_ADMIN_SUCCESS,

    UPDATE_USER_ADMIN_BEGIN,
    UPDATE_USER_ADMIN_ERR,
    UPDATE_USER_ADMIN_SUCCESS,

    CHANGE_TYPE_TABLE_BEGIN,
    CHANGE_TYPE_TABLE_ERR,
    CHANGE_TYPE_TABLE_SUCCESS,

    CREATE_TOPUP_ITEM_BEGIN,
    CREATE_TOPUP_ITEM_ERR,
    CREATE_TOPUP_ITEM_SUCCESS
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FETCH_USER_LIST_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_LIST_SUCCESS:
      return {
        ...state,
        userList: data,
        loading: false,
      };

    case FETCH_USER_LIST_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case CREATE_TOPUP_ITEM_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CREATE_TOPUP_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CREATE_TOPUP_ITEM_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case FETCH_TOPUP_LIST_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TOPUP_LIST_SUCCESS:
      return {
        ...state,
        topupList: data,
        loading: false,
      };

    case FETCH_TOPUP_LIST_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case DETAIL_USER_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_USER_ADMIN_SUCCESS:
      return {
        ...state,
        detailUser: data,
        loading: false,
      };

    case DETAIL_USER_ADMIN_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case UPDATE_USER_ADMIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_USER_ADMIN_SUCCESS:
      return {
        ...state,
        userList: data,
        loading: false,
      };

    case UPDATE_USER_ADMIN_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case CHANGE_TYPE_TABLE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CHANGE_TYPE_TABLE_SUCCESS:
      return {
        ...state,
        typeTable: data,
        loading: false,
      };

    case CHANGE_TYPE_TABLE_ERR:
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
