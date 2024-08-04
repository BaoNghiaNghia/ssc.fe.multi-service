const actions = {
    FETCH_LIST_ORDER_COMMENT_BEGIN: 'FETCH_LIST_ORDER_COMMENT_BEGIN',
    FETCH_LIST_ORDER_COMMENT_SUCCESS: 'FETCH_LIST_ORDER_COMMENT_SUCCESS',
    FETCH_LIST_ORDER_COMMENT_ERR: 'FETCH_LIST_ORDER_COMMENT_ERR',

    DETAIL_ORDER_COMMENT_BEGIN: 'DETAIL_ORDER_COMMENT_BEGIN',
    DETAIL_ORDER_COMMENT_SUCCESS: 'DETAIL_ORDER_COMMENT_SUCCESS',
    DETAIL_ORDER_COMMENT_ERR: 'DETAIL_ORDER_COMMENT_ERR',

    COMMENT_IN_ORDER_COMMENT_BEGIN: 'COMMENT_IN_ORDER_COMMENT_BEGIN',
    COMMENT_IN_ORDER_COMMENT_SUCCESS: 'COMMENT_IN_ORDER_COMMENT_SUCCESS',
    COMMENT_IN_ORDER_COMMENT_ERR: 'COMMENT_IN_ORDER_COMMENT_ERR',

    CREATE_ORDER_COMMENT_ADMIN_BEGIN: 'CREATE_ORDER_COMMENT_ADMIN_BEGIN',
    CREATE_ORDER_COMMENT_ADMIN_SUCCESS: 'CREATE_ORDER_COMMENT_ADMIN_SUCCESS',
    CREATE_ORDER_COMMENT_ADMIN_ERR: 'CREATE_ORDER_COMMENT_ADMIN_ERR',

    DETAIL_ORDER_COMMENT_ADMIN_BEGIN: 'DETAIL_ORDER_COMMENT_ADMIN_BEGIN',
    DETAIL_ORDER_COMMENT_ADMIN_SUCCESS: 'DETAIL_ORDER_COMMENT_ADMIN_SUCCESS',
    DETAIL_ORDER_COMMENT_ADMIN_ERR: 'DETAIL_ORDER_COMMENT_ADMIN_ERR',

    UPDATE_ORDER_COMMENT_ADMIN_BEGIN: 'UPDATE_ORDER_COMMENT_ADMIN_BEGIN',
    UPDATE_ORDER_COMMENT_ADMIN_SUCCESS: 'UPDATE_ORDER_COMMENT_ADMIN_SUCCESS',
    UPDATE_ORDER_COMMENT_ADMIN_ERR: 'UPDATE_ORDER_COMMENT_ADMIN_ERR',

    UPDATE_MANY_ORDER_COMMENT_ADMIN_BEGIN: 'UPDATE_MANY_ORDER_COMMENT_ADMIN_BEGIN',
    UPDATE_MANY_ORDER_COMMENT_ADMIN_SUCCESS: 'UPDATE_MANY_ORDER_COMMENT_ADMIN_SUCCESS',
    UPDATE_MANY_ORDER_COMMENT_ADMIN_ERR: 'UPDATE_MANY_ORDER_COMMENT_ADMIN_ERR',

    UPDATE_MANY_COMPUTER_COMMENT_ADMIN_BEGIN: 'UPDATE_MANY_COMPUTER_COMMENT_ADMIN_BEGIN',
    UPDATE_MANY_COMPUTER_COMMENT_ADMIN_SUCCESS: 'UPDATE_MANY_COMPUTER_COMMENT_ADMIN_SUCCESS',
    UPDATE_MANY_COMPUTER_COMMENT_ADMIN_ERR: 'UPDATE_MANY_COMPUTER_COMMENT_ADMIN_ERR',

    UPDATE_ONE_COMPUTER_COMMENT_ADMIN_BEGIN: 'UPDATE_ONE_COMPUTER_COMMENT_ADMIN_BEGIN',
    UPDATE_ONE_COMPUTER_COMMENT_ADMIN_SUCCESS: 'UPDATE_ONE_COMPUTER_COMMENT_ADMIN_SUCCESS',
    UPDATE_ONE_COMPUTER_COMMENT_ADMIN_ERR: 'UPDATE_ONE_COMPUTER_COMMENT_ADMIN_ERR',

    LIST_COMPUTER_RUN_COMMENT_BEGIN: 'LIST_COMPUTER_RUN_COMMENT_BEGIN',
    LIST_COMPUTER_RUN_COMMENT_SUCCESS: 'LIST_COMPUTER_RUN_COMMENT_SUCCESS',
    LIST_COMPUTER_RUN_COMMENT_ERR: 'LIST_COMPUTER_RUN_COMMENT_ERR',

    DETAIL_COMPUTER_RUN_COMMENT_BEGIN: 'DETAIL_COMPUTER_RUN_COMMENT_BEGIN',
    DETAIL_COMPUTER_RUN_COMMENT_SUCCESS: 'DETAIL_COMPUTER_RUN_COMMENT_SUCCESS',
    DETAIL_COMPUTER_RUN_COMMENT_ERR: 'DETAIL_COMPUTER_RUN_COMMENT_ERR',

    DELETE_COMPUTER_RUN_COMMENT_BEGIN: 'DELETE_COMPUTER_RUN_COMMENT_BEGIN',
    DELETE_COMPUTER_RUN_COMMENT_SUCCESS: 'DELETE_COMPUTER_RUN_COMMENT_SUCCESS',
    DELETE_COMPUTER_RUN_COMMENT_ERR: 'DELETE_COMPUTER_RUN_COMMENT_ERR',

    FETCH_WARRANTY_COMMENT_ORDER_BEGIN: 'FETCH_WARRANTY_COMMENT_ORDER_BEGIN',
    FETCH_WARRANTY_COMMENT_ORDER_SUCCESS: 'FETCH_WARRANTY_COMMENT_ORDER_SUCCESS',
    FETCH_WARRANTY_COMMENT_ORDER_ERR: 'FETCH_WARRANTY_COMMENT_ORDER_ERR',

    ACTIVE_WARRANTY_ORDER_COMMENT_BEGIN: 'ACTIVE_WARRANTY_ORDER_COMMENT_BEGIN',
    ACTIVE_WARRANTY_ORDER_COMMENT_SUCCESS: 'ACTIVE_WARRANTY_ORDER_COMMENT_SUCCESS',
    ACTIVE_WARRANTY_ORDER_COMMENT_ERR: 'ACTIVE_WARRANTY_ORDER_COMMENT_ERR',

    REFUND_WARRANTY_ORDER_BEGIN: 'REFUND_WARRANTY_ORDER_BEGIN',
    REFUND_WARRANTY_ORDER_SUCCESS: 'REFUND_WARRANTY_ORDER_SUCCESS',
    REFUND_WARRANTY_ORDER_ERR: 'REFUND_WARRANTY_ORDER_ERR',

    SET_RANGE_DATE_WARRANTY_FILTER_BEGIN: 'SET_RANGE_DATE_WARRANTY_FILTER_BEGIN',
    SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS: 'SET_RANGE_DATE_WARRANTY_FILTER_SUCCESS',
    SET_RANGE_DATE_WARRANTY_FILTER_ERR: 'SET_RANGE_DATE_WARRANTY_FILTER_ERR',

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
            type: actions.ACTIVE_WARRANTY_ORDER_COMMENT_BEGIN,
            payload
        };
    },

    activeWarrantyOrderCommentSuccess: (data) => {
        return {
            type: actions.ACTIVE_WARRANTY_ORDER_COMMENT_SUCCESS,
            data,
        };
    },

    activeWarrantyOrderCommentErr: (err) => {
        return {
            type: actions.ACTIVE_WARRANTY_ORDER_COMMENT_ERR,
            err,
        };
    },

    fetchWarrantyCommentOrderBegin: (payload) => {
        return {
            type: actions.FETCH_WARRANTY_COMMENT_ORDER_BEGIN,
            payload
        };
    },

    fetchWarrantyCommentOrderSuccess: (data) => {
        return {
            type: actions.FETCH_WARRANTY_COMMENT_ORDER_SUCCESS,
            data,
        };
    },

    fetchWarrantyCommentOrderErr: (err) => {
        return {
            type: actions.FETCH_WARRANTY_COMMENT_ORDER_ERR,
            err,
        };
    },

    listComputerRunCommentBegin: (payload) => {
        return {
            type: actions.LIST_COMPUTER_RUN_COMMENT_BEGIN,
            payload
        };
    },

    listComputerRunCommentSuccess: (data) => {
        return {
            type: actions.LIST_COMPUTER_RUN_COMMENT_SUCCESS,
            data,
        };
    },

    listComputerRunCommentErr: (err) => {
        return {
            type: actions.LIST_COMPUTER_RUN_COMMENT_ERR,
            err,
        };
    },

    detailComputerRunCommentBegin: (payload) => {
        return {
            type: actions.DETAIL_COMPUTER_RUN_COMMENT_BEGIN,
            payload
        };
    },

    detailComputerRunCommentSuccess: (data) => {
        return {
            type: actions.DETAIL_COMPUTER_RUN_COMMENT_SUCCESS,
            data,
        };
    },

    detailComputerRunCommentErr: (err) => {
        return {
            type: actions.DETAIL_COMPUTER_RUN_COMMENT_ERR,
            err,
        };
    },

    deleteComputerRunCommentBegin: (payload) => {
        return {
            type: actions.DELETE_COMPUTER_RUN_COMMENT_BEGIN,
            payload
        };
    },

    deleteComputerRunCommentSuccess: (data) => {
        return {
            type: actions.DELETE_COMPUTER_RUN_COMMENT_SUCCESS,
            data,
        };
    },

    deleteComputerRunCommentErr: (err) => {
        return {
            type: actions.DELETE_COMPUTER_RUN_COMMENT_ERR,
            err,
        };
    },

    detailOrderCommentAdminBegin: (payload) => {
        return {
            type: actions.DETAIL_ORDER_COMMENT_ADMIN_BEGIN,
            payload
        };
    },

    detailOrderCommentAdminSuccess: (data) => {
        return {
            type: actions.DETAIL_ORDER_COMMENT_ADMIN_SUCCESS,
            data,
        };
    },

    detailOrderCommentAdminErr: (err) => {
        return {
            type: actions.DETAIL_ORDER_COMMENT_ADMIN_ERR,
            err,
        };
    },

    updateOneComputerCommentAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_ONE_COMPUTER_COMMENT_ADMIN_BEGIN,
            payload
        };
    },

    updateOneComputerCommentAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_ONE_COMPUTER_COMMENT_ADMIN_SUCCESS,
            data,
        };
    },

    updateOneComputerCommentAdminErr: (err) => {
        return {
            type: actions.UPDATE_ONE_COMPUTER_COMMENT_ADMIN_ERR,
            err,
        };
    },

    updateManyComputerCommentAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_MANY_COMPUTER_COMMENT_ADMIN_BEGIN,
            payload
        };
    },

    updateManyComputerCommentAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_MANY_COMPUTER_COMMENT_ADMIN_SUCCESS,
            data,
        };
    },

    updateManyComputerCommentAdminErr: (err) => {
        return {
            type: actions.UPDATE_MANY_COMPUTER_COMMENT_ADMIN_ERR,
            err,
        };
    },

    updateManyOrderCommentAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_MANY_ORDER_COMMENT_ADMIN_BEGIN,
            payload
        };
    },

    updateManyOrderCommentAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_MANY_ORDER_COMMENT_ADMIN_SUCCESS,
            data,
        };
    },

    updateManyOrderCommentAdminErr: (err) => {
        return {
            type: actions.UPDATE_MANY_ORDER_COMMENT_ADMIN_ERR,
            err,
        };
    },

    updateOrderCommentAdminBegin: (payload) => {
        return {
            type: actions.UPDATE_ORDER_COMMENT_ADMIN_BEGIN,
            payload
        };
    },

    updateOrderCommentAdminSuccess: (data) => {
        return {
            type: actions.UPDATE_ORDER_COMMENT_ADMIN_SUCCESS,
            data,
        };
    },

    updateOrderCommentAdminErr: (err) => {
        return {
            type: actions.UPDATE_ORDER_COMMENT_ADMIN_ERR,
            err,
        };
    },

    createOrderCommentAdminBegin: (payload) => {
        return {
            type: actions.CREATE_ORDER_COMMENT_ADMIN_BEGIN,
            payload
        };
    },

    createOrderCommentAdminSuccess: (data) => {
        return {
            type: actions.CREATE_ORDER_COMMENT_ADMIN_SUCCESS,
            data,
        };
    },

    createOrderCommentAdminErr: (err) => {
        return {
            type: actions.CREATE_ORDER_COMMENT_ADMIN_ERR,
            err,
        };
    },

    fetchListOrderCommentBegin: (payload) => {
        return {
            type: actions.FETCH_LIST_ORDER_COMMENT_BEGIN,
            payload
        };
    },

    fetchListOrderCommentSuccess: (data) => {
        return {
            type: actions.FETCH_LIST_ORDER_COMMENT_SUCCESS,
            data,
        };
    },

    fetchListOrderCommentErr: (err) => {
        return {
            type: actions.FETCH_LIST_ORDER_COMMENT_ERR,
            err,
        };
    },

    detailOrderCommentBegin: (payload) => {
        return {
            type: actions.DETAIL_ORDER_COMMENT_BEGIN,
            payload
        };
    },

    detailOrderCommentSuccess: (data) => {
        return {
            type: actions.DETAIL_ORDER_COMMENT_SUCCESS,
            data,
        };
    },

    detailOrderCommentErr: (err) => {
        return {
            type: actions.DETAIL_ORDER_COMMENT_ERR,
            err,
        };
    },

    commentOrderCommentBegin: (payload) => {
        return {
            type: actions.COMMENT_IN_ORDER_COMMENT_BEGIN,
            payload
        };
    },

    commentOrderCommentSuccess: (data) => {
        return {
            type: actions.COMMENT_IN_ORDER_COMMENT_SUCCESS,
            data,
        };
    },

    commentOrderCommentErr: (err) => {
        return {
            type: actions.COMMENT_IN_ORDER_COMMENT_ERR,
            err,
        };
    },
};

export default actions;
