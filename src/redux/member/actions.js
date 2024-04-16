const actions = {
    FETCH_USER_LIST_BEGIN: 'FETCH_USER_LIST_BEGIN',
    FETCH_USER_LIST_SUCCESS: 'FETCH_USER_LIST_SUCCESS',
    FETCH_USER_LIST_ERR: 'FETCH_USER_LIST_ERR',
  
    fetchUserListBegin: (payload) => {
      return {
        type: actions.FETCH_USER_LIST_BEGIN,
        payload
      };
    },
  
    fetchUserListSuccess: (data) => {
      return {
        type: actions.FETCH_USER_LIST_SUCCESS,
        data,
      };
    },
  
    fetchUserListErr: (err) => {
      return {
        type: actions.FETCH_USER_LIST_ERR,
        err,
      };
    },
  };
    
  export default actions;
    