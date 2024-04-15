const actions = {
    FETCH_LIST_ORDER_SUBSCRIBE_BEGIN: 'FETCH_LIST_ORDER_SUBSCRIBE_BEGIN',
    FETCH_LIST_ORDER_SUBSCRIBE_SUCCESS: 'FETCH_LIST_ORDER_SUBSCRIBE_SUCCESS',
    FETCH_LIST_ORDER_SUBSCRIBE_ERR: 'FETCH_LIST_ORDER_SUBSCRIBE_ERR',
    
    FETCH_USER_LIST_BEGIN: 'FETCH_USER_LIST_BEGIN',
    FETCH_USER_LIST_SUCCESS: 'FETCH_USER_LIST_SUCCESS',
    FETCH_USER_LIST_ERR: 'FETCH_USER_LIST_ERR',

    FETCH_ADMIN_SETTING_BEGIN: 'FETCH_ADMIN_SETTING_BEGIN',
    FETCH_ADMIN_SETTING_SUCCESS: 'FETCH_ADMIN_SETTING_SUCCESS',
    FETCH_ADMIN_SETTING_ERR: 'FETCH_ADMIN_SETTING_ERR',

    FETCH_SERVICE_PACKAGE_LIST_BEGIN: 'FETCH_SERVICE_PACKAGE_LIST_BEGIN',
    FETCH_SERVICE_PACKAGE_LIST_SUCCESS: 'FETCH_SERVICE_PACKAGE_LIST_SUCCESS',
    FETCH_SERVICE_PACKAGE_LIST_ERR: 'FETCH_SERVICE_PACKAGE_LIST_ERR',

    fetchAdminSettingBegin: (payload) => {
      return {
        type: actions.FETCH_ADMIN_SETTING_BEGIN,
        payload
      };
    },
  
    fetchAdminSettingSuccess: (data) => {
      return {
        type: actions.FETCH_ADMIN_SETTING_SUCCESS,
        data,
      };
    },
  
    fetchAdminSettingErr: (err) => {
      return {
        type: actions.FETCH_ADMIN_SETTING_ERR,
        err,
      };
    },

    fetchListOrderSubscribeBegin: (payload) => {
      return {
        type: actions.FETCH_LIST_ORDER_SUBSCRIBE_BEGIN,
        payload
      };
    },
  
    fetchListOrderSubscribeSuccess: (data) => {
      return {
        type: actions.FETCH_LIST_ORDER_SUBSCRIBE_SUCCESS,
        data,
      };
    },
  
    fetchListOrderSubscribeErr: (err) => {
      return {
        type: actions.FETCH_LIST_ORDER_SUBSCRIBE_ERR,
        err,
      };
    },
    fetchServicePackageListBegin: (payload) => {
      return {
        type: actions.FETCH_SERVICE_PACKAGE_LIST_BEGIN,
        payload
      };
    },
  
    fetchServicePackageListSuccess: (data) => {
      return {
        type: actions.FETCH_SERVICE_PACKAGE_LIST_SUCCESS,
        data,
      };
    },
  
    fetchServicePackageListErr: (err) => {
      return {
        type: actions.FETCH_SERVICE_PACKAGE_LIST_ERR,
        err,
      };
    },
  
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
    