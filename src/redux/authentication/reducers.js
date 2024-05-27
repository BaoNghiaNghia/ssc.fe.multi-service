import Cookies from 'js-cookie';
import actions from './actions';

const { 
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERR,

  LOGOUT_BEGIN,
  LOGOUT_SUCCESS,
  LOGOUT_ERR,

  FETCH_USER_PROFILE_BEGIN,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_ERR,

  REGISTER_REFERRAL_BEGIN,
  REGISTER_REFERRAL_ERR,
  REGISTER_REFERRAL_SUCCESS,

  REGISTER_BEGIN,
  REGISTER_ERR,
  REGISTER_SUCCESS,
} = actions;

const initState = {
  login: localStorage.getItem('logedIn'),
  userInfo: localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')),
  loading: false,
  error: null,
};

/**
 *
 * @todo impure state mutation/explaination
 */
const AuthReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case REGISTER_REFERRAL_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_REFERRAL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REGISTER_REFERRAL_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case REGISTER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REGISTER_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case FETCH_USER_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userInfo: data,
        loading: false,
      };
    case FETCH_USER_PROFILE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: data?.token,
        userInfo: data?.user,
        loading: false,
      };
    case LOGIN_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        login: data,
        loading: false,
      };
    case LOGOUT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
