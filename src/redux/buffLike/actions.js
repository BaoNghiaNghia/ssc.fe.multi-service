const actions = {
    FETCH_LIST_ORDER_LIKE_BEGIN: 'FETCH_LIST_ORDER_LIKE_BEGIN',
    FETCH_LIST_ORDER_LIKE_SUCCESS: 'FETCH_LIST_ORDER_LIKE_SUCCESS',
    FETCH_LIST_ORDER_LIKE_ERR: 'FETCH_LIST_ORDER_LIKE_ERR',

    DETAIL_ORDER_LIKE_BEGIN: 'DETAIL_ORDER_LIKE_BEGIN',
    DETAIL_ORDER_LIKE_SUCCESS: 'DETAIL_ORDER_LIKE_SUCCESS',
    DETAIL_ORDER_LIKE_ERR: 'DETAIL_ORDER_LIKE_ERR',

    LIKE_IN_ORDER_LIKE_BEGIN: 'LIKE_IN_ORDER_LIKE_BEGIN',
    LIKE_IN_ORDER_LIKE_SUCCESS: 'LIKE_IN_ORDER_LIKE_SUCCESS',
    LIKE_IN_ORDER_LIKE_ERR: 'LIKE_IN_ORDER_LIKE_ERR',

    CREATE_ORDER_LIKE_ADMIN_BEGIN: 'CREATE_ORDER_LIKE_ADMIN_BEGIN',
    CREATE_ORDER_LIKE_ADMIN_SUCCESS: 'CREATE_ORDER_LIKE_ADMIN_SUCCESS',
    CREATE_ORDER_LIKE_ADMIN_ERR: 'CREATE_ORDER_LIKE_ADMIN_ERR',

    DETAIL_ORDER_LIKE_ADMIN_BEGIN: 'DETAIL_ORDER_LIKE_ADMIN_BEGIN',
    DETAIL_ORDER_LIKE_ADMIN_SUCCESS: 'DETAIL_ORDER_LIKE_ADMIN_SUCCESS',
    DETAIL_ORDER_LIKE_ADMIN_ERR: 'DETAIL_ORDER_LIKE_ADMIN_ERR',

    UPDATE_ORDER_LIKE_ADMIN_BEGIN: 'UPDATE_ORDER_LIKE_ADMIN_BEGIN',
    UPDATE_ORDER_LIKE_ADMIN_SUCCESS: 'UPDATE_ORDER_LIKE_ADMIN_SUCCESS',
    UPDATE_ORDER_LIKE_ADMIN_ERR: 'UPDATE_ORDER_LIKE_ADMIN_ERR',

    UPDATE_MANY_ORDER_LIKE_ADMIN_BEGIN: 'UPDATE_MANY_ORDER_LIKE_ADMIN_BEGIN',
    UPDATE_MANY_ORDER_LIKE_ADMIN_SUCCESS: 'UPDATE_MANY_ORDER_LIKE_ADMIN_SUCCESS',
    UPDATE_MANY_ORDER_LIKE_ADMIN_ERR: 'UPDATE_MANY_ORDER_LIKE_ADMIN_ERR',

    UPDATE_MANY_COMPUTER_LIKE_ADMIN_BEGIN: 'UPDATE_MANY_COMPUTER_LIKE_ADMIN_BEGIN',
    UPDATE_MANY_COMPUTER_LIKE_ADMIN_SUCCESS: 'UPDATE_MANY_COMPUTER_LIKE_ADMIN_SUCCESS',
    UPDATE_MANY_COMPUTER_LIKE_ADMIN_ERR: 'UPDATE_MANY_COMPUTER_LIKE_ADMIN_ERR',

    UPDATE_ONE_COMPUTER_LIKE_ADMIN_BEGIN: 'UPDATE_ONE_COMPUTER_LIKE_ADMIN_BEGIN',
    UPDATE_ONE_COMPUTER_LIKE_ADMIN_SUCCESS: 'UPDATE_ONE_COMPUTER_LIKE_ADMIN_SUCCESS',
    UPDATE_ONE_COMPUTER_LIKE_ADMIN_ERR: 'UPDATE_ONE_COMPUTER_LIKE_ADMIN_ERR',

    LIST_COMPUTER_RUN_LIKE_BEGIN: 'LIST_COMPUTER_RUN_LIKE_BEGIN',
    LIST_COMPUTER_RUN_LIKE_SUCCESS: 'LIST_COMPUTER_RUN_LIKE_SUCCESS',
    LIST_COMPUTER_RUN_LIKE_ERR: 'LIST_COMPUTER_RUN_LIKE_ERR',

    DETAIL_COMPUTER_RUN_LIKE_BEGIN: 'DETAIL_COMPUTER_RUN_LIKE_BEGIN',
    DETAIL_COMPUTER_RUN_LIKE_SUCCESS: 'DETAIL_COMPUTER_RUN_LIKE_SUCCESS',
    DETAIL_COMPUTER_RUN_LIKE_ERR: 'DETAIL_COMPUTER_RUN_LIKE_ERR',

    DELETE_COMPUTER_RUN_LIKE_BEGIN: 'DELETE_COMPUTER_RUN_LIKE_BEGIN',
    DELETE_COMPUTER_RUN_LIKE_SUCCESS: 'DELETE_COMPUTER_RUN_LIKE_SUCCESS',
    DELETE_COMPUTER_RUN_LIKE_ERR: 'DELETE_COMPUTER_RUN_LIKE_ERR',

    FETCH_WARRANTY_ORDER_BEGIN: 'FETCH_WARRANTY_ORDER_BEGIN',
    FETCH_WARRANTY_ORDER_SUCCESS: 'FETCH_WARRANTY_ORDER_SUCCESS',
    FETCH_WARRANTY_ORDER_ERR: 'FETCH_WARRANTY_ORDER_ERR',

    ACTIVE_WARRANTY_ORDER_LIKE_BEGIN: 'ACTIVE_WARRANTY_ORDER_LIKE_BEGIN',
    ACTIVE_WARRANTY_ORDER_LIKE_SUCCESS: 'ACTIVE_WARRANTY_ORDER_LIKE_SUCCESS',
    ACTIVE_WARRANTY_ORDER_LIKE_ERR: 'ACTIVE_WARRANTY_ORDER_LIKE_ERR',

    REFUND_WARRANTY_ORDER_BEGIN: 'REFUND_WARRANTY_ORDER_BEGIN',
    REFUND_WARRANTY_ORDER_SUCCESS: 'REFUND_WARRANTY_ORDER_SUCCESS',
    REFUND_WARRANTY_ORDER_ERR: 'REFUND_WARRANTY_ORDER_ERR',

    SET_RANGE_DATE_WARRANTY_FILTER_BEGIN: 'SET_RANGE_DATE_WARRANTY_FILTER_BEGIN',
    SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS: 'SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS',
    SET_RANGE_DATE_WARRANTY_FILTER_ERR: 'SET_RANGE_DATE_WARRANTY_FILTER_ERR',

    SET_STATUS_BAR_NUMBER_LIKE_BEGIN: 'SET_STATUS_BAR_NUMBER_LIKE_BEGIN',
    SET_STATUS_BAR_NUMBER_LIKE_SUCCESS: 'SET_STATUS_BAR_NUMBER_LIKE_SUCCESS',
    SET_STATUS_BAR_NUMBER_LIKE_ERR: 'SET_STATUS_BAR_NUMBER_LIKE_ERR',

    setStatusBarLikeBegin: (payload) => {
        return {
          type: actions.SET_STATUS_BAR_NUMBER_LIKE_BEGIN,
          payload
        };
    },

    setStatusBarLikeSuccess: (data) => {
        return {
            type: actions.SET_STATUS_BAR_NUMBER_LIKE_SUCCESS,
            data,
        }
    },

    setStatusBarLikeErr: (err) => {
        return {
            type: actions.SET_STATUS_BAR_NUMBER_LIKE_ERR,
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

    activeWarrantyOrderLikeBegin: (payload) => {
        return {
            type: actions.ACTIVE_WARRANTY_ORDER_LIKE_BEGIN,
            payload
        };
    },

    activeWarrantyOrderLikeSuccess: (data) => {
        return {
            type: actions.ACTIVE_WARRANTY_ORDER_LIKE_SUCCESS,
            data,
        };
    },

    activeWarrantyOrderLikeErr: (err) => {
        return {
            type: actions.ACTIVE_WARRANTY_ORDER_LIKE_ERR,
            err,
        };
    },

    fetchWarrantyOrderBegin: (payload) => {
        return {
            type: actions.FETCH_WARRANTY_ORDER_BEGIN,
            payload
        };
    },

    fetchWarrantyOrderSuccess: (data) => {
        return {
            type: actions.FETCH_WARRANTY_ORDER_SUCCESS,
            data,
        };
    },

    fetchWarrantyOrderErr: (err) => {
        return {
            type: actions.FETCH_WARRANTY_ORDER_ERR,
            err,
        };
    },

    listComputerRunLikeBegin: (payload) => {
        return {
            type: actions.LIST_COMPUTER_RUN_LIKE_BEGIN,
            payload
        };
    },

    listComputerRunLikeSuccess: (data) => {
        return {
            type: actions.LIST_COMPUTER_RUN_LIKE_SUCCESS,
            data,
        };
    },

    listComputerRunLikeErr: (err) => {
        return {
            type: actions.LIST_COMPUTER_RUN_LIKE_ERR,
            err,
        };
    },

    detailComputerRunLikeBegin: (payload) => {
        return {
            type: actions.DETAIL_COMPUTER_RUN_LIKE_BEGIN,
            payload
        };
    },

    detailComputerRunLikeSuccess: (data) => {
        return {
            type: actions.DETAIL_COMPUTER_RUN_LIKE_SUCCESS,
            data,
        };
    },

    detailComputerRunLikeErr: (err) => {
        return {
            type: actions.DETAIL_COMPUTER_RUN_LIKE_ERR,
            err,
        };
    },

    deleteComputerRunLikeBegin: (payload) => {
        return {
            type: actions.DELETE_COMPUTER_RUN_LIKE_BEGIN,
            payload
        };
    },

    deleteComputerRunLikeSuccess: (data) => {
        return {
            type: actions.DELETE_COMPUTER_RUN_LIKE_SUCCESS,
            data,
        };
    },

    deleteComputerRunLikeErr: (err) => {
        return {
            type: actions.DELETE_COMPUTER_RUN_LIKE_ERR,
            err,
        };
    },

    detailOrderLikeAdminBegin: (payload) => {
        return {
            type: actions.DETAIL_ORDER_LIKE_ADMIN_BEGIN,
            payload
        };
    },

    detailOrderLikeAdminSuccess: (data) => {
        return {
            type: actions.DETAIL_ORDER_LIKE_ADMIN_SUCCESS,
            data,
        };
    },

    detailOrderLikeAdminErr: (err) => {
        return {
            type: actions.DETAIL_ORDER_LIKE_ADMIN_ERR,
            err,
        };
    },

    updateOneComputerLikeAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_ONE_COMPUTER_LIKE_ADMIN_BEGIN,
            payload
        };
    },

    updateOneComputerLikeAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_ONE_COMPUTER_LIKE_ADMIN_SUCCESS,
            data,
        };
    },

    updateOneComputerLikeAdminErr: (err) => {
        return {
            type: actions.UPDATE_ONE_COMPUTER_LIKE_ADMIN_ERR,
            err,
        };
    },

    updateManyComputerLikeAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_MANY_COMPUTER_LIKE_ADMIN_BEGIN,
            payload
        };
    },

    updateManyComputerLikeAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_MANY_COMPUTER_LIKE_ADMIN_SUCCESS,
            data,
        };
    },

    updateManyComputerLikeAdminErr: (err) => {
        return {
            type: actions.UPDATE_MANY_COMPUTER_LIKE_ADMIN_ERR,
            err,
        };
    },

    updateManyOrderLikeAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_MANY_ORDER_LIKE_ADMIN_BEGIN,
            payload
        };
    },

    updateManyOrderLikeAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_MANY_ORDER_LIKE_ADMIN_SUCCESS,
            data,
        };
    },

    updateManyOrderLikeAdminErr: (err) => {
        return {
            type: actions.UPDATE_MANY_ORDER_LIKE_ADMIN_ERR,
            err,
        };
    },

    updateOrderLikeAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_ORDER_LIKE_ADMIN_BEGIN,
            payload
        };
    },

    updateOrderLikeAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_ORDER_LIKE_ADMIN_SUCCESS,
            data,
        };
    },

    updateOrderLikeAdminErr: (err) => {
        return {
            type: actions.UPDATE_ORDER_LIKE_ADMIN_ERR,
            err,
        };
    },

    createOrderLikeAdminBegin: (payload) => {
        return {
            type: actions.CREATE_ORDER_LIKE_ADMIN_BEGIN,
            payload
        };
    },

    createOrderLikeAdminSuccess: (data) => {
        return {
            type: actions.CREATE_ORDER_LIKE_ADMIN_SUCCESS,
            data,
        };
    },

    createOrderLikeAdminErr: (err) => {
        return {
            type: actions.CREATE_ORDER_LIKE_ADMIN_ERR,
            err,
        };
    },

    fetchListOrderLikeBegin: (payload) => {
        return {
            type: actions.FETCH_LIST_ORDER_LIKE_BEGIN,
            payload
        };
    },

    fetchListOrderLikeSuccess: (data) => {
        return {
            type: actions.FETCH_LIST_ORDER_LIKE_SUCCESS,
            data,
        };
    },

    fetchListOrderLikeErr: (err) => {
        return {
            type: actions.FETCH_LIST_ORDER_LIKE_ERR,
            err,
        };
    },

    detailOrderLikeBegin: (payload) => {
        return {
            type: actions.DETAIL_ORDER_LIKE_BEGIN,
            payload
        };
    },

    detailOrderLikeSuccess: (data) => {
        return {
            type: actions.DETAIL_ORDER_LIKE_SUCCESS,
            data,
        };
    },

    detailOrderLikeErr: (err) => {
        return {
            type: actions.DETAIL_ORDER_LIKE_ERR,
            err,
        };
    },

    likeOrderLikeBegin: (payload) => {
        return {
            type: actions.LIKE_IN_ORDER_LIKE_BEGIN,
            payload
        };
    },

    likeOrderLikeSuccess: (data) => {
        return {
            type: actions.LIKE_IN_ORDER_LIKE_SUCCESS,
            data,
        };
    },

    likeOrderLikeErr: (err) => {
        return {
            type: actions.LIKE_IN_ORDER_LIKE_ERR,
            err,
        };
    },
};

export default actions;
