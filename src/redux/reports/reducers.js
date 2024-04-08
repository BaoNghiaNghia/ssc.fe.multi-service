import actions from './actions';

const initialState = {
  subscribeReport: null,
  loading: false,
  error: null
};

const {
    FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN,
    FETCH_DAILY_SUBSCRIBE_RESPORT_SUCCESS,
    FETCH_DAILY_SUBSCRIBE_RESPORT_ERR
} = actions;

const ProfileReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DAILY_SUBSCRIBE_RESPORT_SUCCESS:
      return {
        ...state,
        subscribeReport: data,
        loading: false,
      };
    case FETCH_DAILY_SUBSCRIBE_RESPORT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
