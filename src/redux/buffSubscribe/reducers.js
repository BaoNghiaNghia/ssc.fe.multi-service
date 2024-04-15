import actions from './actions';

const initialState = {
  adminSetting: {},
  listOrderSubscribe: [],
  servicePackage: [],
  userList: [],
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

    FETCH_USER_LIST_BEGIN,
    FETCH_USER_LIST_ERR,
    FETCH_USER_LIST_SUCCESS,
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
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

    default:
      return state;
  }
};

export default ReportsReducer;
