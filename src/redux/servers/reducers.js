import moment from 'moment';
import actions from './actions';

const initialState = {
  listServer: [],
  loading: false,
  error: null
};

const {

    COMPUTER_DATA_LIST_BEGIN,
    COMPUTER_DATA_LIST_SUCCESS,
    COMPUTER_DATA_LIST_ERR,
} = actions;

const ServerReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case COMPUTER_DATA_LIST_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case COMPUTER_DATA_LIST_SUCCESS:
      return {
        ...state,
        listServer: data,
        loading: false,
      };

    case COMPUTER_DATA_LIST_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

export default ServerReducer;
