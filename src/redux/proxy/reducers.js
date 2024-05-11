import actions from './actions';

const initialState = {
  listDomain: [],
  listProxyInDomain: [],
  detailDomain:{},
  loading: false,
  error: null
};

const {
    CREATE_DOMAIN_BEGIN,
    CREATE_DOMAIN_ERR,
    CREATE_DOMAIN_SUCCESS,

    DELETE_DOMAIN_BEGIN,
    DELETE_DOMAIN_ERR,
    DELETE_DOMAIN_SUCCESS,

    GET_LIST_PROXY_IN_DOMAIN_BEGIN,
    GET_LIST_PROXY_IN_DOMAIN_ERR,
    GET_LIST_PROXY_IN_DOMAIN_SUCCESS,

    LIST_ALL_DOMAIN_BEGIN,
    LIST_ALL_DOMAIN_ERR,
    LIST_ALL_DOMAIN_SUCCESS,

    DETAIL_DOMAIN_BEGIN,
    DETAIL_DOMAIN_ERR,
    DETAIL_DOMAIN_SUCCESS,
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case DETAIL_DOMAIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_DOMAIN_SUCCESS:
      return {
        ...state,
        loading: false,
        detailDomain: data
      };

    case DETAIL_DOMAIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    
    case CREATE_DOMAIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case CREATE_DOMAIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CREATE_DOMAIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case DELETE_DOMAIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case DELETE_DOMAIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_DOMAIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case GET_LIST_PROXY_IN_DOMAIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case GET_LIST_PROXY_IN_DOMAIN_SUCCESS:
      return {
        ...state,
        loading: false,
        listProxyInDomain: data,
      };

    case GET_LIST_PROXY_IN_DOMAIN_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    case LIST_ALL_DOMAIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LIST_ALL_DOMAIN_SUCCESS:
      return {
        ...state,
        loading: false,
        listDomain: data,
      };

    case LIST_ALL_DOMAIN_ERR:
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
