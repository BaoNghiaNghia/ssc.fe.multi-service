const actions = {
  PROFILE_FRIENDS_BEGIN: 'PROFILE_FRIENDS_BEGIN',
  PROFILE_FRIENDS_SUCCESS: 'PROFILE_FRIENDS_SUCCESS',
  PROFILE_FRIENDS_ERR: 'PROFILE_FRIENDS_ERR',

  POST_DATA_BEGIN: 'POST_DATA_BEGIN',
  POST_DATA_SUCCESS: 'POST_DATA_SUCCESS',
  POST_DATA_ERR: 'POST_DATA_ERR',

  reportSubscribeBegin: () => {
    return {
      type: actions.PROFILE_FRIENDS_BEGIN,
    };
  },

  reportSubscribeSuccess: (data) => {
    return {
      type: actions.PROFILE_FRIENDS_SUCCESS,
      data,
    };
  },

  reportSubscribeErr: (err) => {
    return {
      type: actions.PROFILE_FRIENDS_ERR,
      err,
    };
  },

  postDataBegin: () => {
    return {
      type: actions.POST_DATA_BEGIN,
    };
  },

  postDataSuccess: (data) => {
    return {
      type: actions.POST_DATA_SUCCESS,
      data,
    };
  },

  postDataErr: (err) => {
    return {
      type: actions.POST_DATA_ERR,
      err,
    };
  },
};

export default actions;
