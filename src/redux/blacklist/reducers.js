import actions from './actions';

const initialState = {
  blackListChannel: {},
  loading: false,
  error: null
};

const {
    BLACK_LIST_CHANNEL_BEGIN,
    BLACK_LIST_CHANNEL_SUCCESS,
    BLACK_LIST_CHANNEL_ERR,
} = actions;

const ReportsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case BLACK_LIST_CHANNEL_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case BLACK_LIST_CHANNEL_SUCCESS:
      return {
        ...state,
        loading: false,
        blackListChannel: data,
      };

    case BLACK_LIST_CHANNEL_ERR:
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
