const actions = {
    FETCH_LIST_ORDER_COMMENT_BEGIN: 'FETCH_LIST_ORDER_COMMENT_BEGIN',
    FETCH_LIST_ORDER_COMMENT_SUCCESS: 'FETCH_LIST_ORDER_COMMENT_SUCCESS',
    FETCH_LIST_ORDER_COMMENT_ERR: 'FETCH_LIST_ORDER_COMMENT_ERR',

    DETAIL_ORDER_COMMENT_BEGIN: 'DETAIL_ORDER_COMMENT_BEGIN',
    DETAIL_ORDER_COMMENT_SUCCESS: 'DETAIL_ORDER_COMMENT_SUCCESS',
    DETAIL_ORDER_COMMENT_ERR: 'DETAIL_ORDER_COMMENT_ERR',
    

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
};

export default actions;
