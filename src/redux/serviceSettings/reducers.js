import actions from './actions';
import { SERVICE_SETTING_TYPE } from '../../variables';

const initialState = {
  listService: [],
  response: null,
  postLoading: false,
  isOpenModalEdit: false,
  typeTab: SERVICE_SETTING_TYPE.SERVICE.title,
  listSettings: {},
  detailService: {},
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

    FETCH_LIST_SETTINGS_BEGIN,
    FETCH_LIST_SETTINGS_ERR,
    FETCH_LIST_SETTINGS_SUCCESS
} = actions;

const reducers = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FETCH_LIST_SETTINGS_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LIST_SETTINGS_SUCCESS:
      return {
        ...state,
        listSettings: data,
        loading: false,
      };

    case FETCH_LIST_SETTINGS_ERR:
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
