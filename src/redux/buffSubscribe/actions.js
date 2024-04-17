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

    FETCH_LIST_ORDER_HISTORY_BEGIN: 'FETCH_LIST_ORDER_HISTORY_BEGIN',
    FETCH_LIST_ORDER_HISTORY_SUCCESS: 'FETCH_LIST_ORDER_HISTORY_SUCCESS',
    FETCH_LIST_ORDER_HISTORY_ERR: 'FETCH_LIST_ORDER_HISTORY_ERR',

    CHANGE_ORDER_HISTORY_TYPE_BEGIN: 'CHANGE_ORDER_HISTORY_TYPE_BEGIN',
    CHANGE_ORDER_HISTORY_TYPE_SUCCESS: 'CHANGE_ORDER_HISTORY_TYPE_SUCCESS',
    CHANGE_ORDER_HISTORY_TYPE_ERR: 'CHANGE_SERVICE_TYPE_ERR',

    SET_RANGE_DATE_ORDER_HISTORY_BEGIN: 'SET_RANGE_DATE_ORDER_HISTORY_BEGIN',
    SET_RANGE_DATE_ORDER_HISTORY_SUCCESS: 'SET_RANGE_DATE_ORDER_HISTORY_SUCCESS',
    SET_RANGE_DATE_ORDER_HISTORY_ERR: 'SET_RANGE_DATE_ORDER_HISTORY_ERR',

    setRangeDateOrderHistoryBegin: (payload) => {
      return {
        type: actions.SET_RANGE_DATE_ORDER_HISTORY_BEGIN,
        payload
      };
    },
  
    setRangeDateOrderHistorySuccess: (data) => {
      return {
        type: actions.SET_RANGE_DATE_ORDER_HISTORY_SUCCESS,
        data,
      };
    },
  
    setRangeDateOrderHistoryErr: (err) => {
      return {
        type: actions.SET_RANGE_DATE_ORDER_HISTORY_ERR,
        err,
      };
    },

    changeOrderHistoryTypeBegin: (payload) => {
      return {
        type: actions.CHANGE_ORDER_HISTORY_TYPE_BEGIN,
        payload
      };
    },
  
    changeOrderHistoryTypeSuccess: (data) => {
      return {
        type: actions.CHANGE_ORDER_HISTORY_TYPE_SUCCESS,
        data,
      };
    },
  
    changeOrderHistoryTypeErr: (err) => {
      return {
        type: actions.CHANGE_ORDER_HISTORY_TYPE_ERR,
        err,
      };
    },

    fetchOrderHistoryBegin: (payload) => {
      return {
        type: actions.FETCH_LIST_ORDER_HISTORY_BEGIN,
        payload
      };
    },
  
    fetchOrderHistorySuccess: (data) => {
      return {
        type: actions.FETCH_LIST_ORDER_HISTORY_SUCCESS,
        data,
      };
    },
  
    fetchOrderHistoryErr: (err) => {
      return {
        type: actions.FETCH_LIST_ORDER_HISTORY_ERR,
        err,
      };
    },
  
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
    