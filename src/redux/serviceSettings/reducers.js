import actions from './actions';

const initialState = {
  listService: [],
  loading: false,
  error: null
};

const {
    FETCH_LIST_SERVICES_BEGIN,
    FETCH_LIST_SERVICES_ERR,
    FETCH_LIST_SERVICES_SUCCESS
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

    default:
      return state;
  }
};

export default reducers;
