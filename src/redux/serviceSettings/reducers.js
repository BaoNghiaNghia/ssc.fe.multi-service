import actions from './actions';

const initialState = {
  listService: [],
  response: null,
  postLoading: false,
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
    UPDATE_SERVICES_SUCCESS
} = actions;

const reducers = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
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

    default:
      return state;
  }
};

export default reducers;
