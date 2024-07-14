import actions from './actions';
import { SERVICE_SETTING_TYPE } from '../../variables';

const initialState = {
  listService: [],
  response: null,
  postLoading: false,
  isOpenModalEdit: false,
  typeTab: SERVICE_SETTING_TYPE.SERVICE.title,
  listSettingsComment: {},
  listSettingsLike: {},
  detailService: {},
  listGoogleKey: {},
  detailGoogleKey: {},
  loading: false,
  error: null
};

const {
    FETCH_LIST_SERVICES_BEGIN,
    FETCH_LIST_SERVICES_ERR,
    FETCH_LIST_SERVICES_SUCCESS,

    CREATE_SERVICES_BEGIN,
    CREATE_SERVICES_ERR,
    CREATE_SERVICES_SUCCESS,

    UPDATE_SERVICES_BEGIN,
    UPDATE_SERVICES_ERR,
    UPDATE_SERVICES_SUCCESS,

    MODAL_DETAIL_SERVICE_BEGIN,
    MODAL_DETAIL_SERVICE_ERR,
    MODAL_DETAIL_SERVICE_SUCCESS,

    CHANGE_TYPE_TAB_BEGIN,
    CHANGE_TYPE_TAB_ERR,
    CHANGE_TYPE_TAB_SUCCESS,

    FETCH_LIST_SETTINGS_COMMENT_BEGIN,
    FETCH_LIST_SETTINGS_COMMENT_ERR,
    FETCH_LIST_SETTINGS_COMMENT_SUCCESS,

    UPDATE_SETTING_COMMENT_BEGIN,
    UPDATE_SETTING_COMMENT_ERR,
    UPDATE_SETTING_COMMENT_SUCCESS,

    FETCH_LIST_SETTINGS_LIKE_BEGIN,
    FETCH_LIST_SETTINGS_LIKE_ERR,
    FETCH_LIST_SETTINGS_LIKE_SUCCESS,

    UPDATE_SETTING_LIKE_BEGIN,
    UPDATE_SETTING_LIKE_ERR,
    UPDATE_SETTING_LIKE_SUCCESS,

    FETCH_LIST_ALL_GOOGLE_KEY_BEGIN,
    FETCH_LIST_ALL_GOOGLE_KEY_ERR,
    FETCH_LIST_ALL_GOOGLE_KEY_SUCCESS,

    CREATE_GOOGLE_KEY_BEGIN,
    CREATE_GOOGLE_KEY_ERR,
    CREATE_GOOGLE_KEY_SUCCESS,

    DELETE_GOOGLE_KEY_BEGIN,
    DELETE_GOOGLE_KEY_ERR,
    DELETE_GOOGLE_KEY_SUCCESS,

    DETAIL_GOOGLE_KEY_BEGIN,
    DETAIL_GOOGLE_KEY_ERR,
    DETAIL_GOOGLE_KEY_SUCCESS,

    UPDATE_GOOGLE_KEY_BEGIN,
    UPDATE_GOOGLE_KEY_ERR,
    UPDATE_GOOGLE_KEY_SUCCESS,
} = actions;

const reducers = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case DELETE_GOOGLE_KEY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DELETE_GOOGLE_KEY_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case DELETE_GOOGLE_KEY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case UPDATE_GOOGLE_KEY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_GOOGLE_KEY_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case UPDATE_GOOGLE_KEY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case CREATE_GOOGLE_KEY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CREATE_GOOGLE_KEY_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case CREATE_GOOGLE_KEY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case DETAIL_GOOGLE_KEY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_GOOGLE_KEY_SUCCESS:
      return {
        ...state,
        loading: false,
        detailGoogleKey: data
      };

    case DETAIL_GOOGLE_KEY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case FETCH_LIST_ALL_GOOGLE_KEY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LIST_ALL_GOOGLE_KEY_SUCCESS:
      return {
        ...state,
        loading: false,
        listGoogleKey: data
      };

    case FETCH_LIST_ALL_GOOGLE_KEY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case UPDATE_SETTING_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_SETTING_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_SETTING_COMMENT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case FETCH_LIST_SETTINGS_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LIST_SETTINGS_COMMENT_SUCCESS:
      return {
        ...state,
        listSettingsComment: data,
        loading: false,
      };

    case FETCH_LIST_SETTINGS_COMMENT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case FETCH_LIST_SETTINGS_LIKE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LIST_SETTINGS_LIKE_SUCCESS:
      return {
        ...state,
        listSettingsLike: data,
        loading: false,
      };

    case FETCH_LIST_SETTINGS_LIKE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case CHANGE_TYPE_TAB_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CHANGE_TYPE_TAB_SUCCESS:
      return {
        ...state,
        typeTab: data,
        loading: false,
      };

    case CHANGE_TYPE_TAB_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case FETCH_LIST_SERVICES_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LIST_SERVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        listService: data,
      };

    case FETCH_LIST_SERVICES_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case CREATE_SERVICES_BEGIN:
      return {
        ...state,
        postLoading: true,
      };

    case CREATE_SERVICES_SUCCESS:
      return {
        ...state,
        postLoading: false,
        response: data,
      };

    case CREATE_SERVICES_ERR:
      return {
        ...state,
        postLoading: false,
        error: err
      };

    case UPDATE_SERVICES_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_SERVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        response: data,
      };

    case UPDATE_SERVICES_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case MODAL_DETAIL_SERVICE_BEGIN:
      return {
        ...state,
      };

    case MODAL_DETAIL_SERVICE_SUCCESS:
      return {
        ...state,
        detailService: data
      };

    case MODAL_DETAIL_SERVICE_ERR:
      return {
        ...state,
        isOpenModalEdit: false,
        error: err
      };

    default:
      return state;
  }
};

export default reducers;
