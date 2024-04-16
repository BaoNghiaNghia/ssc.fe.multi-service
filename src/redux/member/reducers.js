import actions from './actions';

const initialState = {
  userList: [],
  loading: false,
  error: null
};

const {

    FETCH_USER_LIST_BEGIN,
    FETCH_USER_LIST_ERR,
    FETCH_USER_LIST_SUCCESS,
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

    default:
      return state;
  }
};

export default ReportsReducer;
