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
