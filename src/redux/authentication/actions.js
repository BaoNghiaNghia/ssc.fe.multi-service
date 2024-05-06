const actions = {
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERR: 'LOGIN_ERR',

  LOGOUT_BEGIN: 'LOGOUT_BEGIN',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERR: 'LOGOUT_ERR',

  FETCH_USER_PROFILE_BEGIN: 'FETCH_USER_PROFILE_BEGIN',
  FETCH_USER_PROFILE_SUCCESS: 'FETCH_USER_PROFILE_SUCCESS',
  FETCH_USER_PROFILE_ERR: 'FETCH_USER_PROFILE_ERR',

  fetchUserProfileBegin: (payload) => {
    return {
      type: actions.FETCH_USER_PROFILE_BEGIN,
      payload
    };
  },

  fetchUserProfileSuccess: (data) => {
    return {
      type: actions.FETCH_USER_PROFILE_SUCCESS,
      data,
    };
  },

  fetchUserProfileErr: (err) => {
    return {
      type: actions.FETCH_USER_PROFILE_ERR,
      err,
    };
  },

  loginBegin: (payload) => {
    return {
      type: actions.LOGIN_BEGIN,
      payload
    };
  },

  loginSuccess: (data) => {
    return {
      type: actions.LOGIN_SUCCESS,
      data,
    };
  },

  loginErr: (err) => {
    return {
      type: actions.LOGIN_ERR,
      err,
    };
  },

  logoutBegin: () => {
    return {
      type: actions.LOGOUT_BEGIN,
    };
  },

  logoutSuccess: (data) => {
    return {
      type: actions.LOGOUT_SUCCESS,
      data,
    };
  },

  logoutErr: (err) => {
    return {
      type: actions.LOGOUT_ERR,
      err,
    };
  },
};

export default actions;
