const actions = {
    FETCH_LIST_ORDER_VIEW_BEGIN: 'FETCH_LIST_ORDER_VIEW_BEGIN',
    FETCH_LIST_ORDER_VIEW_SUCCESS: 'FETCH_LIST_ORDER_VIEW_SUCCESS',
    FETCH_LIST_ORDER_VIEW_ERR: 'FETCH_LIST_ORDER_VIEW_ERR',

    DETAIL_ORDER_VIEW_BEGIN: 'DETAIL_ORDER_VIEW_BEGIN',
    DETAIL_ORDER_VIEW_SUCCESS: 'DETAIL_ORDER_VIEW_SUCCESS',
    DETAIL_ORDER_VIEW_ERR: 'DETAIL_ORDER_VIEW_ERR',

    VIEW_IN_ORDER_VIEW_BEGIN: 'VIEW_IN_ORDER_VIEW_BEGIN',
    VIEW_IN_ORDER_VIEW_SUCCESS: 'VIEW_IN_ORDER_VIEW_SUCCESS',
    VIEW_IN_ORDER_VIEW_ERR: 'VIEW_IN_ORDER_VIEW_ERR',

    CREATE_ORDER_VIEW_ADMIN_BEGIN: 'CREATE_ORDER_VIEW_ADMIN_BEGIN',
    CREATE_ORDER_VIEW_ADMIN_SUCCESS: 'CREATE_ORDER_VIEW_ADMIN_SUCCESS',
    CREATE_ORDER_VIEW_ADMIN_ERR: 'CREATE_ORDER_VIEW_ADMIN_ERR',

    DETAIL_ORDER_VIEW_ADMIN_BEGIN: 'DETAIL_ORDER_VIEW_ADMIN_BEGIN',
    DETAIL_ORDER_VIEW_ADMIN_SUCCESS: 'DETAIL_ORDER_VIEW_ADMIN_SUCCESS',
    DETAIL_ORDER_VIEW_ADMIN_ERR: 'DETAIL_ORDER_VIEW_ADMIN_ERR',

    UPDATE_ORDER_VIEW_ADMIN_BEGIN: 'UPDATE_ORDER_VIEW_ADMIN_BEGIN',
    UPDATE_ORDER_VIEW_ADMIN_SUCCESS: 'UPDATE_ORDER_VIEW_ADMIN_SUCCESS',
    UPDATE_ORDER_VIEW_ADMIN_ERR: 'UPDATE_ORDER_VIEW_ADMIN_ERR',

    UPDATE_MANY_ORDER_VIEW_ADMIN_BEGIN: 'UPDATE_MANY_ORDER_VIEW_ADMIN_BEGIN',
    UPDATE_MANY_ORDER_VIEW_ADMIN_SUCCESS: 'UPDATE_MANY_ORDER_VIEW_ADMIN_SUCCESS',
    UPDATE_MANY_ORDER_VIEW_ADMIN_ERR: 'UPDATE_MANY_ORDER_VIEW_ADMIN_ERR',

    UPDATE_MANY_COMPUTER_VIEW_ADMIN_BEGIN: 'UPDATE_MANY_COMPUTER_VIEW_ADMIN_BEGIN',
    UPDATE_MANY_COMPUTER_VIEW_ADMIN_SUCCESS: 'UPDATE_MANY_COMPUTER_VIEW_ADMIN_SUCCESS',
    UPDATE_MANY_COMPUTER_VIEW_ADMIN_ERR: 'UPDATE_MANY_COMPUTER_VIEW_ADMIN_ERR',

    UPDATE_ONE_COMPUTER_VIEW_ADMIN_BEGIN: 'UPDATE_ONE_COMPUTER_VIEW_ADMIN_BEGIN',
    UPDATE_ONE_COMPUTER_VIEW_ADMIN_SUCCESS: 'UPDATE_ONE_COMPUTER_VIEW_ADMIN_SUCCESS',
    UPDATE_ONE_COMPUTER_VIEW_ADMIN_ERR: 'UPDATE_ONE_COMPUTER_VIEW_ADMIN_ERR',

    LIST_COMPUTER_RUN_VIEW_BEGIN: 'LIST_COMPUTER_RUN_VIEW_BEGIN',
    LIST_COMPUTER_RUN_VIEW_SUCCESS: 'LIST_COMPUTER_RUN_VIEW_SUCCESS',
    LIST_COMPUTER_RUN_VIEW_ERR: 'LIST_COMPUTER_RUN_VIEW_ERR',

    DETAIL_COMPUTER_RUN_VIEW_BEGIN: 'DETAIL_COMPUTER_RUN_VIEW_BEGIN',
    DETAIL_COMPUTER_RUN_VIEW_SUCCESS: 'DETAIL_COMPUTER_RUN_VIEW_SUCCESS',
    DETAIL_COMPUTER_RUN_VIEW_ERR: 'DETAIL_COMPUTER_RUN_VIEW_ERR',

    DELETE_COMPUTER_RUN_VIEW_BEGIN: 'DELETE_COMPUTER_RUN_VIEW_BEGIN',
    DELETE_COMPUTER_RUN_VIEW_SUCCESS: 'DELETE_COMPUTER_RUN_VIEW_SUCCESS',
    DELETE_COMPUTER_RUN_VIEW_ERR: 'DELETE_COMPUTER_RUN_VIEW_ERR',

    FETCH_WARRANTY_VIEW_ORDER_BEGIN: 'FETCH_WARRANTY_VIEW_ORDER_BEGIN',
    FETCH_WARRANTY_VIEW_ORDER_SUCCESS: 'FETCH_WARRANTY_VIEW_ORDER_SUCCESS',
    FETCH_WARRANTY_VIEW_ORDER_ERR: 'FETCH_WARRANTY_VIEW_ORDER_ERR',

    ACTIVE_WARRANTY_ORDER_VIEW_BEGIN: 'ACTIVE_WARRANTY_ORDER_VIEW_BEGIN',
    ACTIVE_WARRANTY_ORDER_VIEW_SUCCESS: 'ACTIVE_WARRANTY_ORDER_VIEW_SUCCESS',
    ACTIVE_WARRANTY_ORDER_VIEW_ERR: 'ACTIVE_WARRANTY_ORDER_VIEW_ERR',

    REFUND_WARRANTY_ORDER_BEGIN: 'REFUND_WARRANTY_ORDER_BEGIN',
    REFUND_WARRANTY_ORDER_SUCCESS: 'REFUND_WARRANTY_ORDER_SUCCESS',
    REFUND_WARRANTY_ORDER_ERR: 'REFUND_WARRANTY_ORDER_ERR',

    SET_RANGE_DATE_WARRANTY_FILTER_BEGIN: 'SET_RANGE_DATE_WARRANTY_FILTER_BEGIN',
    SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS: 'SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS',
    SET_RANGE_DATE_WARRANTY_FILTER_ERR: 'SET_RANGE_DATE_WARRANTY_FILTER_ERR',

    FETCH_LIST_DEVICES_RUN_VIEW_BEGIN: 'FETCH_LIST_DEVICES_RUN_VIEW_BEGIN',
    FETCH_LIST_DEVICES_RUN_VIEW_SUCCESS: 'FETCH_LIST_DEVICES_RUN_VIEW_SUCCESS',
    FETCH_LIST_DEVICES_RUN_VIEW_ERR: 'FETCH_LIST_DEVICES_RUN_VIEW_ERR',

    
    fetchListDevicesRunViewBegin: (payload) => {
        return {
          type: actions.FETCH_LIST_DEVICES_RUN_VIEW_BEGIN,
          payload
        };
    },

    fetchListDevicesRunViewSuccess: (data) => {
        return {
            type: actions.FETCH_LIST_DEVICES_RUN_VIEW_SUCCESS,
            data,
        }
    },

    fetchListDevicesRunViewErr: (err) => {
        return {
            type: actions.FETCH_LIST_DEVICES_RUN_VIEW_ERR,
            err,
        }
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

    activeWarrantyOrderViewBegin: (payload) => {
        return {
            type: actions.ACTIVE_WARRANTY_ORDER_VIEW_BEGIN,
            payload
        };
    },

    activeWarrantyOrderViewSuccess: (data) => {
        return {
            type: actions.ACTIVE_WARRANTY_ORDER_VIEW_SUCCESS,
            data,
        };
    },

    activeWarrantyOrderViewErr: (err) => {
        return {
            type: actions.ACTIVE_WARRANTY_ORDER_VIEW_ERR,
            err,
        };
    },

    fetchWarrantyViewOrderBegin: (payload) => {
        return {
            type: actions.FETCH_WARRANTY_VIEW_ORDER_BEGIN,
            payload
        };
    },

    fetchWarrantyViewOrderSuccess: (data) => {
        return {
            type: actions.FETCH_WARRANTY_VIEW_ORDER_SUCCESS,
            data,
        };
    },

    fetchWarrantyViewOrderErr: (err) => {
        return {
            type: actions.FETCH_WARRANTY_VIEW_ORDER_ERR,
            err,
        };
    },

    listComputerRunViewBegin: (payload) => {
        return {
            type: actions.LIST_COMPUTER_RUN_VIEW_BEGIN,
            payload
        };
    },

    listComputerRunViewSuccess: (data) => {
        return {
            type: actions.LIST_COMPUTER_RUN_VIEW_SUCCESS,
            data,
        };
    },

    listComputerRunViewErr: (err) => {
        return {
            type: actions.LIST_COMPUTER_RUN_VIEW_ERR,
            err,
        };
    },

    detailComputerRunViewBegin: (payload) => {
        return {
            type: actions.DETAIL_COMPUTER_RUN_VIEW_BEGIN,
            payload
        };
    },

    detailComputerRunViewSuccess: (data) => {
        return {
            type: actions.DETAIL_COMPUTER_RUN_VIEW_SUCCESS,
            data,
        };
    },

    detailComputerRunViewErr: (err) => {
        return {
            type: actions.DETAIL_COMPUTER_RUN_VIEW_ERR,
            err,
        };
    },

    deleteComputerRunViewBegin: (payload) => {
        return {
            type: actions.DELETE_COMPUTER_RUN_VIEW_BEGIN,
            payload
        };
    },

    deleteComputerRunViewSuccess: (data) => {
        return {
            type: actions.DELETE_COMPUTER_RUN_VIEW_SUCCESS,
            data,
        };
    },

    deleteComputerRunViewErr: (err) => {
        return {
            type: actions.DELETE_COMPUTER_RUN_VIEW_ERR,
            err,
        };
    },

    detailOrderViewAdminBegin: (payload) => {
        return {
            type: actions.DETAIL_ORDER_VIEW_ADMIN_BEGIN,
            payload
        };
    },

    detailOrderViewAdminSuccess: (data) => {
        return {
            type: actions.DETAIL_ORDER_VIEW_ADMIN_SUCCESS,
            data,
        };
    },

    detailOrderViewAdminErr: (err) => {
        return {
            type: actions.DETAIL_ORDER_VIEW_ADMIN_ERR,
            err,
        };
    },

    updateOneComputerViewAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_ONE_COMPUTER_VIEW_ADMIN_BEGIN,
            payload
        };
    },

    updateOneComputerViewAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_ONE_COMPUTER_VIEW_ADMIN_SUCCESS,
            data,
        };
    },

    updateOneComputerViewAdminErr: (err) => {
        return {
            type: actions.UPDATE_ONE_COMPUTER_VIEW_ADMIN_ERR,
            err,
        };
    },

    updateManyComputerViewAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_MANY_COMPUTER_VIEW_ADMIN_BEGIN,
            payload
        };
    },

    updateManyComputerViewAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_MANY_COMPUTER_VIEW_ADMIN_SUCCESS,
            data,
        };
    },

    updateManyComputerViewAdminErr: (err) => {
        return {
            type: actions.UPDATE_MANY_COMPUTER_VIEW_ADMIN_ERR,
            err,
        };
    },

    updateManyOrderViewAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_MANY_ORDER_VIEW_ADMIN_BEGIN,
            payload
        };
    },

    updateManyOrderViewAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_MANY_ORDER_VIEW_ADMIN_SUCCESS,
            data,
        };
    },

    updateManyOrderViewAdminErr: (err) => {
        return {
            type: actions.UPDATE_MANY_ORDER_VIEW_ADMIN_ERR,
            err,
        };
    },

    updateOrderViewAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_ORDER_VIEW_ADMIN_BEGIN,
            payload
        };
    },

    updateOrderViewAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_ORDER_VIEW_ADMIN_SUCCESS,
            data,
        };
    },

    updateOrderViewAdminErr: (err) => {
        return {
            type: actions.UPDATE_ORDER_VIEW_ADMIN_ERR,
            err,
        };
    },

    createOrderViewAdminBegin: (payload) => {
        return {
            type: actions.CREATE_ORDER_VIEW_ADMIN_BEGIN,
            payload
        };
    },

    createOrderViewAdminSuccess: (data) => {
        return {
            type: actions.CREATE_ORDER_VIEW_ADMIN_SUCCESS,
            data,
        };
    },

    createOrderViewAdminErr: (err) => {
        return {
            type: actions.CREATE_ORDER_VIEW_ADMIN_ERR,
            err,
        };
    },

    fetchListOrderViewBegin: (payload) => {
        return {
            type: actions.FETCH_LIST_ORDER_VIEW_BEGIN,
            payload
        };
    },

    fetchListOrderViewSuccess: (data) => {
        return {
            type: actions.FETCH_LIST_ORDER_VIEW_SUCCESS,
            data,
        };
    },

    fetchListOrderViewErr: (err) => {
        return {
            type: actions.FETCH_LIST_ORDER_VIEW_ERR,
            err,
        };
    },

    detailOrderViewBegin: (payload) => {
        return {
            type: actions.DETAIL_ORDER_VIEW_BEGIN,
            payload
        };
    },

    detailOrderViewSuccess: (data) => {
        return {
            type: actions.DETAIL_ORDER_VIEW_SUCCESS,
            data,
        };
    },

    detailOrderViewErr: (err) => {
        return {
            type: actions.DETAIL_ORDER_VIEW_ERR,
            err,
        };
    },

    viewOrderViewBegin: (payload) => {
        return {
            type: actions.VIEW_IN_ORDER_VIEW_BEGIN,
            payload
        };
    },

    viewOrderViewSuccess: (data) => {
        return {
            type: actions.VIEW_IN_ORDER_VIEW_SUCCESS,
            data,
        };
    },

    viewOrderViewErr: (err) => {
        return {
            type: actions.VIEW_IN_ORDER_VIEW_ERR,
            err,
        };
    },
};

export default actions;
