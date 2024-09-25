const actions = {
    FETCH_LIST_ORDER_SUBSCRIBE_BEGIN: 'FETCH_LIST_ORDER_SUBSCRIBE_BEGIN',
    FETCH_LIST_ORDER_SUBSCRIBE_SUCCESS: 'FETCH_LIST_ORDER_SUBSCRIBE_SUCCESS',
    FETCH_LIST_ORDER_SUBSCRIBE_ERR: 'FETCH_LIST_ORDER_SUBSCRIBE_ERR',

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

    SET_STATUS_BAR_NUMBER_SUBSCRIBE_BEGIN: 'SET_STATUS_BAR_NUMBER_SUBSCRIBE_BEGIN',
    SET_STATUS_BAR_NUMBER_SUBSCRIBE_SUCCESS: 'SET_STATUS_BAR_NUMBER_SUBSCRIBE_SUCCESS',
    SET_STATUS_BAR_NUMBER_SUBSCRIBE_ERR: 'SET_STATUS_BAR_NUMBER_SUBSCRIBE_ERR',







    DETAIL_ORDER_SUBSCRIBE_BEGIN: 'DETAIL_ORDER_SUBSCRIBE_BEGIN',
    DETAIL_ORDER_SUBSCRIBE_SUCCESS: 'DETAIL_ORDER_SUBSCRIBE_SUCCESS',
    DETAIL_ORDER_SUBSCRIBE_ERR: 'DETAIL_ORDER_SUBSCRIBE_ERR',

    SUBSCRIBE_IN_ORDER_SUBSCRIBE_BEGIN: 'SUBSCRIBE_IN_ORDER_SUBSCRIBE_BEGIN',
    SUBSCRIBE_IN_ORDER_SUBSCRIBE_SUCCESS: 'SUBSCRIBE_IN_ORDER_SUBSCRIBE_SUCCESS',
    SUBSCRIBE_IN_ORDER_SUBSCRIBE_ERR: 'SUBSCRIBE_IN_ORDER_SUBSCRIBE_ERR',

    CREATE_ORDER_SUBSCRIBE_ADMIN_BEGIN: 'CREATE_ORDER_SUBSCRIBE_ADMIN_BEGIN',
    CREATE_ORDER_SUBSCRIBE_ADMIN_SUCCESS: 'CREATE_ORDER_SUBSCRIBE_ADMIN_SUCCESS',
    CREATE_ORDER_SUBSCRIBE_ADMIN_ERR: 'CREATE_ORDER_SUBSCRIBE_ADMIN_ERR',

    DETAIL_ORDER_SUBSCRIBE_ADMIN_BEGIN: 'DETAIL_ORDER_SUBSCRIBE_ADMIN_BEGIN',
    DETAIL_ORDER_SUBSCRIBE_ADMIN_SUCCESS: 'DETAIL_ORDER_SUBSCRIBE_ADMIN_SUCCESS',
    DETAIL_ORDER_SUBSCRIBE_ADMIN_ERR: 'DETAIL_ORDER_SUBSCRIBE_ADMIN_ERR',

    UPDATE_ORDER_SUBSCRIBE_ADMIN_BEGIN: 'UPDATE_ORDER_SUBSCRIBE_ADMIN_BEGIN',
    UPDATE_ORDER_SUBSCRIBE_ADMIN_SUCCESS: 'UPDATE_ORDER_SUBSCRIBE_ADMIN_SUCCESS',
    UPDATE_ORDER_SUBSCRIBE_ADMIN_ERR: 'UPDATE_ORDER_SUBSCRIBE_ADMIN_ERR',

    UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_BEGIN: 'UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_BEGIN',
    UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_SUCCESS: 'UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_SUCCESS',
    UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_ERR: 'UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_ERR',

    UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_BEGIN: 'UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_BEGIN',
    UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_SUCCESS: 'UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_SUCCESS',
    UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_ERR: 'UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_ERR',

    UPDATE_ONE_COMPUTER_SUBSCRIBE_ADMIN_BEGIN: 'UPDATE_ONE_COMPUTER_SUBSCRIBE_ADMIN_BEGIN',
    UPDATE_ONE_COMPUTER_SUBSCRIBE_ADMIN_SUCCESS: 'UPDATE_ONE_COMPUTER_SUBSCRIBE_ADMIN_SUCCESS',
    UPDATE_ONE_COMPUTER_SUBSCRIBE_ADMIN_ERR: 'UPDATE_ONE_COMPUTER_SUBSCRIBE_ADMIN_ERR',

    LIST_COMPUTER_RUN_SUBSCRIBE_BEGIN: 'LIST_COMPUTER_RUN_SUBSCRIBE_BEGIN',
    LIST_COMPUTER_RUN_SUBSCRIBE_SUCCESS: 'LIST_COMPUTER_RUN_SUBSCRIBE_SUCCESS',
    LIST_COMPUTER_RUN_SUBSCRIBE_ERR: 'LIST_COMPUTER_RUN_SUBSCRIBE_ERR',

    DETAIL_COMPUTER_RUN_SUBSCRIBE_BEGIN: 'DETAIL_COMPUTER_RUN_SUBSCRIBE_BEGIN',
    DETAIL_COMPUTER_RUN_SUBSCRIBE_SUCCESS: 'DETAIL_COMPUTER_RUN_SUBSCRIBE_SUCCESS',
    DETAIL_COMPUTER_RUN_SUBSCRIBE_ERR: 'DETAIL_COMPUTER_RUN_SUBSCRIBE_ERR',

    DELETE_COMPUTER_RUN_SUBSCRIBE_BEGIN: 'DELETE_COMPUTER_RUN_SUBSCRIBE_BEGIN',
    DELETE_COMPUTER_RUN_SUBSCRIBE_SUCCESS: 'DELETE_COMPUTER_RUN_SUBSCRIBE_SUCCESS',
    DELETE_COMPUTER_RUN_SUBSCRIBE_ERR: 'DELETE_COMPUTER_RUN_SUBSCRIBE_ERR',

    FETCH_WARRANTY_SUBSCRIBE_ORDER_BEGIN: 'FETCH_WARRANTY_SUBSCRIBE_ORDER_BEGIN',
    FETCH_WARRANTY_SUBSCRIBE_ORDER_SUCCESS: 'FETCH_WARRANTY_SUBSCRIBE_ORDER_SUCCESS',
    FETCH_WARRANTY_SUBSCRIBE_ORDER_ERR: 'FETCH_WARRANTY_SUBSCRIBE_ORDER_ERR',

    ACTIVE_WARRANTY_ORDER_SUBSCRIBE_BEGIN: 'ACTIVE_WARRANTY_ORDER_SUBSCRIBE_BEGIN',
    ACTIVE_WARRANTY_ORDER_SUBSCRIBE_SUCCESS: 'ACTIVE_WARRANTY_ORDER_SUBSCRIBE_SUCCESS',
    ACTIVE_WARRANTY_ORDER_SUBSCRIBE_ERR: 'ACTIVE_WARRANTY_ORDER_SUBSCRIBE_ERR',

    REFUND_WARRANTY_ORDER_BEGIN: 'REFUND_WARRANTY_ORDER_BEGIN',
    REFUND_WARRANTY_ORDER_SUCCESS: 'REFUND_WARRANTY_ORDER_SUCCESS',
    REFUND_WARRANTY_ORDER_ERR: 'REFUND_WARRANTY_ORDER_ERR',

    SET_RANGE_DATE_WARRANTY_FILTER_BEGIN: 'SET_RANGE_DATE_WARRANTY_FILTER_BEGIN',
    SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS: 'SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS',
    SET_RANGE_DATE_WARRANTY_FILTER_ERR: 'SET_RANGE_DATE_WARRANTY_FILTER_ERR',


    setStatusBarSubscribeBegin: (payload) => {
        return {
          type: actions.SET_STATUS_BAR_NUMBER_SUBSCRIBE_BEGIN,
          payload
        };
    },

    setStatusBarSubscribeSuccess: (data) => {
        return {
            type: actions.SET_STATUS_BAR_NUMBER_SUBSCRIBE_SUCCESS,
            data,
        }
    },

    setStatusBarSubscribeErr: (err) => {
        return {
            type: actions.SET_STATUS_BAR_NUMBER_SUBSCRIBE_ERR,
            err,
        }
    },

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
  
    setRangeDateWarrantyFilterBegin: (payload) => {
      return {
        type: actions.SET_RANGE_DATE_WARRANTY_FILTER_BEGIN,
        payload
      };
    },

    setRangeDateWarrantyFilterSuccess: (data) => {
        return {
            type: actions.SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS,
            data,
        }
    },

    setRangeDateWarrantyFilterErr: (err) => {
        return {
            type: actions.SET_RANGE_DATE_WARRANTY_FILTER_ERR,
            err,
        }
    },

    refundWarrantyOrderBegin: (payload) => {
        return {
            type: actions.REFUND_WARRANTY_ORDER_BEGIN,
            payload
        };
    },

    refundWarrantyOrderSuccess: (data) => {
        return {
            type: actions.REFUND_WARRANTY_ORDER_SUCCESS,
            data,
        };
    },

    refundWarrantyOrderErr: (err) => {
        return {
            type: actions.REFUND_WARRANTY_ORDER_ERR,
            err,
        };
    },

    activeWarrantyOrderCommentBegin: (payload) => {
        return {
            type: actions.ACTIVE_WARRANTY_ORDER_SUBSCRIBE_BEGIN,
            payload
        };
    },

    activeWarrantyOrderCommentSuccess: (data) => {
        return {
            type: actions.ACTIVE_WARRANTY_ORDER_SUBSCRIBE_SUCCESS,
            data,
        };
    },

    activeWarrantyOrderCommentErr: (err) => {
        return {
            type: actions.ACTIVE_WARRANTY_ORDER_SUBSCRIBE_ERR,
            err,
        };
    },

    fetchWarrantyCommentOrderBegin: (payload) => {
        return {
            type: actions.FETCH_WARRANTY_SUBSCRIBE_ORDER_BEGIN,
            payload
        };
    },

    fetchWarrantyCommentOrderSuccess: (data) => {
        return {
            type: actions.FETCH_WARRANTY_SUBSCRIBE_ORDER_SUCCESS,
            data,
        };
    },

    fetchWarrantyCommentOrderErr: (err) => {
        return {
            type: actions.FETCH_WARRANTY_SUBSCRIBE_ORDER_ERR,
            err,
        };
    },

    listComputerRunCommentBegin: (payload) => {
        return {
            type: actions.LIST_COMPUTER_RUN_SUBSCRIBE_BEGIN,
            payload
        };
    },

    listComputerRunCommentSuccess: (data) => {
        return {
            type: actions.LIST_COMPUTER_RUN_SUBSCRIBE_SUCCESS,
            data,
        };
    },

    listComputerRunCommentErr: (err) => {
        return {
            type: actions.LIST_COMPUTER_RUN_SUBSCRIBE_ERR,
            err,
        };
    },

    detailComputerRunCommentBegin: (payload) => {
        return {
            type: actions.DETAIL_COMPUTER_RUN_SUBSCRIBE_BEGIN,
            payload
        };
    },

    detailComputerRunCommentSuccess: (data) => {
        return {
            type: actions.DETAIL_COMPUTER_RUN_SUBSCRIBE_SUCCESS,
            data,
        };
    },

    detailComputerRunCommentErr: (err) => {
        return {
            type: actions.DETAIL_COMPUTER_RUN_SUBSCRIBE_ERR,
            err,
        };
    },

    deleteComputerRunCommentBegin: (payload) => {
        return {
            type: actions.DELETE_COMPUTER_RUN_SUBSCRIBE_BEGIN,
            payload
        };
    },

    deleteComputerRunCommentSuccess: (data) => {
        return {
            type: actions.DELETE_COMPUTER_RUN_SUBSCRIBE_SUCCESS,
            data,
        };
    },

    deleteComputerRunCommentErr: (err) => {
        return {
            type: actions.DELETE_COMPUTER_RUN_SUBSCRIBE_ERR,
            err,
        };
    },

    detailOrderCommentAdminBegin: (payload) => {
        return {
            type: actions.DETAIL_ORDER_SUBSCRIBE_ADMIN_BEGIN,
            payload
        };
    },

    detailOrderCommentAdminSuccess: (data) => {
        return {
            type: actions.DETAIL_ORDER_SUBSCRIBE_ADMIN_SUCCESS,
            data,
        };
    },

    detailOrderCommentAdminErr: (err) => {
        return {
            type: actions.DETAIL_ORDER_SUBSCRIBE_ADMIN_ERR,
            err,
        };
    },

    updateOneComputerCommentAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_ONE_COMPUTER_SUBSCRIBE_ADMIN_BEGIN,
            payload
        };
    },

    updateOneComputerCommentAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_ONE_COMPUTER_SUBSCRIBE_ADMIN_SUCCESS,
            data,
        };
    },

    updateOneComputerCommentAdminErr: (err) => {
        return {
            type: actions.UPDATE_ONE_COMPUTER_SUBSCRIBE_ADMIN_ERR,
            err,
        };
    },

    updateManyComputerCommentAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_BEGIN,
            payload
        };
    },

    updateManyComputerCommentAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_SUCCESS,
            data,
        };
    },

    updateManyComputerCommentAdminErr: (err) => {
        return {
            type: actions.UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_ERR,
            err,
        };
    },

    updateManyOrderCommentAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_BEGIN,
            payload
        };
    },

    updateManyOrderCommentAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_SUCCESS,
            data,
        };
    },

    updateManyOrderCommentAdminErr: (err) => {
        return {
            type: actions.UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_ERR,
            err,
        };
    },

    updateOrderCommentAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_ORDER_SUBSCRIBE_ADMIN_BEGIN,
            payload
        };
    },

    updateOrderCommentAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_ORDER_SUBSCRIBE_ADMIN_SUCCESS,
            data,
        };
    },

    updateOrderCommentAdminErr: (err) => {
        return {
            type: actions.UPDATE_ORDER_SUBSCRIBE_ADMIN_ERR,
            err,
        };
    },

    createOrderCommentAdminBegin: (payload) => {
        return {
            type: actions.CREATE_ORDER_SUBSCRIBE_ADMIN_BEGIN,
            payload
        };
    },

    createOrderCommentAdminSuccess: (data) => {
        return {
            type: actions.CREATE_ORDER_SUBSCRIBE_ADMIN_SUCCESS,
            data,
        };
    },

    createOrderCommentAdminErr: (err) => {
        return {
            type: actions.CREATE_ORDER_SUBSCRIBE_ADMIN_ERR,
            err,
        };
    },

    fetchListOrderCommentBegin: (payload) => {
        return {
            type: actions.FETCH_LIST_ORDER_SUBSCRIBE_BEGIN,
            payload
        };
    },

    fetchListOrderCommentSuccess: (data) => {
        return {
            type: actions.FETCH_LIST_ORDER_SUBSCRIBE_SUCCESS,
            data,
        };
    },

    fetchListOrderCommentErr: (err) => {
        return {
            type: actions.FETCH_LIST_ORDER_SUBSCRIBE_ERR,
            err,
        };
    },

    detailOrderCommentBegin: (payload) => {
        return {
            type: actions.DETAIL_ORDER_SUBSCRIBE_BEGIN,
            payload
        };
    },

    detailOrderCommentSuccess: (data) => {
        return {
            type: actions.DETAIL_ORDER_SUBSCRIBE_SUCCESS,
            data,
        };
    },

    detailOrderCommentErr: (err) => {
        return {
            type: actions.DETAIL_ORDER_SUBSCRIBE_ERR,
            err,
        };
    },

    commentOrderCommentBegin: (payload) => {
        return {
            type: actions.SUBSCRIBE_IN_ORDER_SUBSCRIBE_BEGIN,
            payload
        };
    },

    commentOrderCommentSuccess: (data) => {
        return {
            type: actions.SUBSCRIBE_IN_ORDER_SUBSCRIBE_SUCCESS,
            data,
        };
    },

    commentOrderCommentErr: (err) => {
        return {
            type: actions.SUBSCRIBE_IN_ORDER_SUBSCRIBE_ERR,
            err,
        };
    },
  };
    
  export default actions;
    