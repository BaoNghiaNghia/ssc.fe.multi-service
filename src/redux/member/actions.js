const actions = {
    FETCH_USER_LIST_BEGIN: 'FETCH_USER_LIST_BEGIN',
    FETCH_USER_LIST_SUCCESS: 'FETCH_USER_LIST_SUCCESS',
    FETCH_USER_LIST_ERR: 'FETCH_USER_LIST_ERR',

    FETCH_TOPUP_LIST_BEGIN: 'FETCH_TOPUP_LIST_BEGIN',
    FETCH_TOPUP_LIST_SUCCESS: 'FETCH_TOPUP_LIST_SUCCESS',
    FETCH_TOPUP_LIST_ERR: 'FETCH_TOPUP_LIST_ERR',

    CREATE_TOPUP_ITEM_BEGIN: 'CREATE_TOPUP_ITEM_BEGIN',
    CREATE_TOPUP_ITEM_SUCCESS: 'CREATE_TOPUP_ITEM_SUCCESS',
    CREATE_TOPUP_ITEM_ERR: 'CREATE_TOPUP_ITEM_ERR',

    DETAIL_USER_ADMIN_BEGIN: 'DETAIL_USER_ADMIN_BEGIN',
    DETAIL_USER_ADMIN_SUCCESS: 'DETAIL_USER_ADMIN_SUCCESS',
    DETAIL_USER_ADMIN_ERR: 'DETAIL_USER_ADMIN_ERR',

    DETAIL_TOPUP_ITEM_BEGIN: 'DETAIL_TOPUP_ITEM_BEGIN',
    DETAIL_TOPUP_ITEM_SUCCESS: 'DETAIL_TOPUP_ITEM_SUCCESS',
    DETAIL_TOPUP_ITEM_ERR: 'DETAIL_TOPUP_ITEM_ERR',

    UPDATE_USER_ADMIN_BEGIN: 'UPDATE_USER_ADMIN_BEGIN',
    UPDATE_USER_ADMIN_SUCCESS: 'UPDATE_USER_ADMIN_SUCCESS',
    UPDATE_USER_ADMIN_ERR: 'UPDATE_USER_ADMIN_ERR',
    
    CHANGE_TYPE_TABLE_BEGIN: 'CHANGE_TYPE_TABLE_BEGIN',
    CHANGE_TYPE_TABLE_SUCCESS: 'CHANGE_TYPE_TABLE_SUCCESS',
    CHANGE_TYPE_TABLE_ERR: 'CHANGE_TYPE_TABLE_ERR',

    CONFIRM_TOPUP_BEGIN: 'CONFIRM_TOPUP_BEGIN',
    CONFIRM_TOPUP_SUCCESS: 'CONFIRM_TOPUP_SUCCESS',
    CONFIRM_TOPUP_ERR: 'CONFIRM_TOPUP_ERR',

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

    fetchTopupListBegin: (payload) => {
      return {
        type: actions.FETCH_TOPUP_LIST_BEGIN,
        payload
      };
    },
  
    fetchTopupListSuccess: (data) => {
      return {
        type: actions.FETCH_TOPUP_LIST_SUCCESS,
        data,
      };
    },
  
    fetchTopupListErr: (err) => {
      return {
        type: actions.FETCH_TOPUP_LIST_ERR,
        err,
      };
    },

    
    createTopupItemBegin: (payload) => {
      return {
        type: actions.CREATE_TOPUP_ITEM_BEGIN,
        payload
      };
    },
  
    createTopupItemSuccess: (data) => {
      return {
        type: actions.CREATE_TOPUP_ITEM_SUCCESS,
        data,
      };
    },
  
    createTopupItemErr: (err) => {
      return {
        type: actions.CREATE_TOPUP_ITEM_ERR,
        err,
      };
    },

    detailUserAdminBegin: (payload) => {
      return {
        type: actions.DETAIL_USER_ADMIN_BEGIN,
        payload
      };
    },
  
    detailUserAdminSuccess: (data) => {
      return {
        type: actions.DETAIL_USER_ADMIN_SUCCESS,
        data,
      };
    },
  
    detailUserAdminErr: (err) => {
      return {
        type: actions.DETAIL_USER_ADMIN_ERR,
        err,
      };
    },

    updateUserAdminBegin: (payload) => {
      return {
        type: actions.UPDATE_USER_ADMIN_BEGIN,
        payload
      };
    },
  
    updateUserAdminSuccess: (data) => {
      return {
        type: actions.UPDATE_USER_ADMIN_SUCCESS,
        data,
      };
    },
  
    updateUserAdminErr: (err) => {
      return {
        type: actions.UPDATE_USER_ADMIN_ERR,
        err,
      };
    },

    changeTypeTableBegin: (payload) => {
      return {
        type: actions.CHANGE_TYPE_TABLE_BEGIN,
        payload
      };
    },
  
    changeTypeTableSuccess: (data) => {
      return {
        type: actions.CHANGE_TYPE_TABLE_SUCCESS,
        data,
      };
    },
  
    changeTypeTableErr: (err) => {
      return {
        type: actions.CHANGE_TYPE_TABLE_ERR,
        err,
      };
    },

    confirmTopupBegin: (payload) => {
      return {
        type: actions.CONFIRM_TOPUP_BEGIN,
        payload
      };
    },
  
    confirmTopupSuccess: (data) => {
      return {
        type: actions.CONFIRM_TOPUP_SUCCESS,
        data,
      };
    },
  
    confirmTopupErr: (err) => {
      return {
        type: actions.CONFIRM_TOPUP_ERR,
        err,
      };
    },

    detailTopupBegin: (payload) => {
      return {
        type: actions.DETAIL_TOPUP_ITEM_BEGIN,
        payload
      };
    },
  
    detailTopupSuccess: (data) => {
      return {
        type: actions.DETAIL_TOPUP_ITEM_SUCCESS,
        data,
      };
    },
  
    detailTopupErr: (err) => {
      return {
        type: actions.DETAIL_TOPUP_ITEM_ERR,
        err,
      };
    },
  };
    
  export default actions;
    