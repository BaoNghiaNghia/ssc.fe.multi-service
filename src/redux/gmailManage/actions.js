const actions = {  
    // CHANGE TYPE
    CHANGE_SERVICE_TYPE_IN_GMAIL_BEGIN: 'CHANGE_SERVICE_TYPE_IN_GMAIL_BEGIN',
    CHANGE_SERVICE_TYPE_IN_GMAIL_SUCCESS: 'CHANGE_SERVICE_TYPE_IN_GMAIL_SUCCESS',
    CHANGE_SERVICE_TYPE_IN_GMAIL_ERR: 'CHANGE_SERVICE_TYPE_IN_GMAIL_ERR',


    // Comment
    LIST_ACCOUNT_GMAIL_COMMENT_BEGIN: 'LIST_ACCOUNT_GMAIL_COMMENT_BEGIN',
    LIST_ACCOUNT_GMAIL_COMMENT_SUCCESS: 'LIST_ACCOUNT_GMAIL_COMMENT_SUCCESS',
    LIST_ACCOUNT_GMAIL_COMMENT_ERR: 'LIST_ACCOUNT_GMAIL_COMMENT_ERR',
    
    DETAIL_ACCOUNT_GMAIL_COMMENT_BEGIN: 'DETAIL_ACCOUNT_GMAIL_COMMENT_BEGIN',
    DETAIL_ACCOUNT_GMAIL_COMMENT_SUCCESS: 'DETAIL_ACCOUNT_GMAIL_COMMENT_SUCCESS',
    DETAIL_ACCOUNT_GMAIL_COMMENT_ERR: 'DETAIL_ACCOUNT_GMAIL_COMMENT_ERR',
    
    CREATE_ACCOUNT_GMAIL_COMMENT_BEGIN: 'CREATE_ACCOUNT_GMAIL_COMMENT_BEGIN',
    CREATE_ACCOUNT_GMAIL_COMMENT_SUCCESS: 'CREATE_ACCOUNT_GMAIL_COMMENT_SUCCESS',
    CREATE_ACCOUNT_GMAIL_COMMENT_ERR: 'CREATE_ACCOUNT_GMAIL_COMMENT_ERR',
    
    DELETE_ACCOUNT_GMAIL_COMMENT_BEGIN: 'DELETE_ACCOUNT_GMAIL_COMMENT_BEGIN',
    DELETE_ACCOUNT_GMAIL_COMMENT_SUCCESS: 'DELETE_ACCOUNT_GMAIL_COMMENT_SUCCESS',
    DELETE_ACCOUNT_GMAIL_COMMENT_ERR: 'DELETE_ACCOUNT_GMAIL_COMMENT_ERR',
    
    PATCH_ACCOUNT_GMAIL_COMMENT_BEGIN: 'PATCH_ACCOUNT_GMAIL_COMMENT_BEGIN',
    PATCH_ACCOUNT_GMAIL_COMMENT_SUCCESS: 'PATCH_ACCOUNT_GMAIL_COMMENT_SUCCESS',
    PATCH_ACCOUNT_GMAIL_COMMENT_ERR: 'PATCH_ACCOUNT_GMAIL_COMMENT_ERR',

    // Like
    LIST_ACCOUNT_GMAIL_LIKE_BEGIN: 'LIST_ACCOUNT_GMAIL_LIKE_BEGIN',
    LIST_ACCOUNT_GMAIL_LIKE_SUCCESS: 'LIST_ACCOUNT_GMAIL_LIKE_SUCCESS',
    LIST_ACCOUNT_GMAIL_LIKE_ERR: 'LIST_ACCOUNT_GMAIL_LIKE_ERR',
    
    DETAIL_ACCOUNT_GMAIL_LIKE_BEGIN: 'DETAIL_ACCOUNT_GMAIL_LIKE_BEGIN',
    DETAIL_ACCOUNT_GMAIL_LIKE_SUCCESS: 'DETAIL_ACCOUNT_GMAIL_LIKE_SUCCESS',
    DETAIL_ACCOUNT_GMAIL_LIKE_ERR: 'DETAIL_ACCOUNT_GMAIL_LIKE_ERR',
    
    CREATE_ACCOUNT_GMAIL_LIKE_BEGIN: 'CREATE_ACCOUNT_GMAIL_LIKE_BEGIN',
    CREATE_ACCOUNT_GMAIL_LIKE_SUCCESS: 'CREATE_ACCOUNT_GMAIL_LIKE_SUCCESS',
    CREATE_ACCOUNT_GMAIL_LIKE_ERR: 'CREATE_ACCOUNT_GMAIL_LIKE_ERR',
    
    DELETE_ACCOUNT_GMAIL_LIKE_BEGIN: 'DELETE_ACCOUNT_GMAIL_LIKE_BEGIN',
    DELETE_ACCOUNT_GMAIL_LIKE_SUCCESS: 'DELETE_ACCOUNT_GMAIL_LIKE_SUCCESS',
    DELETE_ACCOUNT_GMAIL_LIKE_ERR: 'DELETE_ACCOUNT_GMAIL_LIKE_ERR',
    
    PATCH_ACCOUNT_GMAIL_LIKE_BEGIN: 'PATCH_ACCOUNT_GMAIL_LIKE_BEGIN',
    PATCH_ACCOUNT_GMAIL_LIKE_SUCCESS: 'PATCH_ACCOUNT_GMAIL_LIKE_SUCCESS',
    PATCH_ACCOUNT_GMAIL_LIKE_ERR: 'PATCH_ACCOUNT_GMAIL_LIKE_ERR',

    // View
    LIST_ACCOUNT_GMAIL_VIEW_BEGIN: 'LIST_ACCOUNT_GMAIL_VIEW_BEGIN',
    LIST_ACCOUNT_GMAIL_VIEW_SUCCESS: 'LIST_ACCOUNT_GMAIL_VIEW_SUCCESS',
    LIST_ACCOUNT_GMAIL_VIEW_ERR: 'LIST_ACCOUNT_GMAIL_VIEW_ERR',

    DETAIL_ACCOUNT_GMAIL_VIEW_BEGIN: 'DETAIL_ACCOUNT_GMAIL_VIEW_BEGIN',
    DETAIL_ACCOUNT_GMAIL_VIEW_SUCCESS: 'DETAIL_ACCOUNT_GMAIL_VIEW_SUCCESS',
    DETAIL_ACCOUNT_GMAIL_VIEW_ERR: 'DETAIL_ACCOUNT_GMAIL_VIEW_ERR',
    
    CREATE_ACCOUNT_GMAIL_VIEW_BEGIN: 'CREATE_ACCOUNT_GMAIL_VIEW_BEGIN',
    CREATE_ACCOUNT_GMAIL_VIEW_SUCCESS: 'CREATE_ACCOUNT_GMAIL_VIEW_SUCCESS',
    CREATE_ACCOUNT_GMAIL_VIEW_ERR: 'CREATE_ACCOUNT_GMAIL_VIEW_ERR',
    
    DELETE_ACCOUNT_GMAIL_VIEW_BEGIN: 'DELETE_ACCOUNT_GMAIL_VIEW_BEGIN',
    DELETE_ACCOUNT_GMAIL_VIEW_SUCCESS: 'DELETE_ACCOUNT_GMAIL_VIEW_SUCCESS',
    DELETE_ACCOUNT_GMAIL_VIEW_ERR: 'DELETE_ACCOUNT_GMAIL_VIEW_ERR',
    
    PATCH_ACCOUNT_GMAIL_VIEW_BEGIN: 'PATCH_ACCOUNT_GMAIL_VIEW_BEGIN',
    PATCH_ACCOUNT_GMAIL_VIEW_SUCCESS: 'PATCH_ACCOUNT_GMAIL_VIEW_SUCCESS',
    PATCH_ACCOUNT_GMAIL_VIEW_ERR: 'PATCH_ACCOUNT_GMAIL_VIEW_ERR',

    // Subscribe
    LIST_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN: 'LIST_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN',
    LIST_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS: 'LIST_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS',
    LIST_ACCOUNT_GMAIL_SUBSCRIBE_ERR: 'LIST_ACCOUNT_GMAIL_SUBSCRIBE_ERR',

    DETAIL_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN: 'DETAIL_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN',
    DETAIL_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS: 'DETAIL_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS',
    DETAIL_ACCOUNT_GMAIL_SUBSCRIBE_ERR: 'DETAIL_ACCOUNT_GMAIL_SUBSCRIBE_ERR',
    
    CREATE_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN: 'CREATE_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN',
    CREATE_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS: 'CREATE_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS',
    CREATE_ACCOUNT_GMAIL_SUBSCRIBE_ERR: 'CREATE_ACCOUNT_GMAIL_SUBSCRIBE_ERR',
    
    DELETE_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN: 'DELETE_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN',
    DELETE_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS: 'DELETE_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS',
    DELETE_ACCOUNT_GMAIL_SUBSCRIBE_ERR: 'DELETE_ACCOUNT_GMAIL_SUBSCRIBE_ERR',
    
    PATCH_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN: 'PATCH_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN',
    PATCH_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS: 'PATCH_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS',
    PATCH_ACCOUNT_GMAIL_SUBSCRIBE_ERR: 'PATCH_ACCOUNT_GMAIL_SUBSCRIBE_ERR',

  
    // COMMENT
    listAccountGmailCommentBegin: (payload) => {
      return {
        type: actions.LIST_ACCOUNT_GMAIL_COMMENT_BEGIN,
        payload
      };
    },
  
    listAccountGmailCommentSuccess: (data) => {
      return {
        type: actions.LIST_ACCOUNT_GMAIL_COMMENT_SUCCESS,
        data,
      };
    },
  
    listAccountGmailCommentErr: (err) => {
      return {
        type: actions.LIST_ACCOUNT_GMAIL_COMMENT_ERR,
        err,
      };
    },

    detailAccountGmailCommentBegin: (payload) => {
      return {
        type: actions.DETAIL_ACCOUNT_GMAIL_COMMENT_BEGIN,
        payload
      };
    },
  
    detailAccountGmailCommentSuccess: (data) => {
      return {
        type: actions.DETAIL_ACCOUNT_GMAIL_COMMENT_SUCCESS,
        data,
      };
    },
  
    detailAccountGmailCommentErr: (err) => {
      return {
        type: actions.DETAIL_ACCOUNT_GMAIL_COMMENT_ERR,
        err,
      };
    },
    createAccountGmailCommentBegin: (payload) => {
      return {
        type: actions.CREATE_ACCOUNT_GMAIL_COMMENT_BEGIN,
        payload
      };
    },
  
    createAccountGmailCommentSuccess: (data) => {
      return {
        type: actions.CREATE_ACCOUNT_GMAIL_COMMENT_SUCCESS,
        data,
      };
    },
  
    createAccountGmailCommentErr: (err) => {
      return {
        type: actions.CREATE_ACCOUNT_GMAIL_COMMENT_ERR,
        err,
      };
    },
    deleteAccountGmailCommentBegin: (payload) => {
      return {
        type: actions.DELETE_ACCOUNT_GMAIL_COMMENT_BEGIN,
        payload
      };
    },
  
    deleteAccountGmailCommentSuccess: (data) => {
      return {
        type: actions.DELETE_ACCOUNT_GMAIL_COMMENT_SUCCESS,
        data,
      };
    },
  
    deleteAccountGmailCommentErr: (err) => {
      return {
        type: actions.DELETE_ACCOUNT_GMAIL_COMMENT_ERR,
        err,
      };
    },
    patchAccountGmailCommentBegin: (payload) => {
      return {
        type: actions.PATCH_ACCOUNT_GMAIL_COMMENT_BEGIN,
        payload
      };
    },
  
    patchAccountGmailCommentSuccess: (data) => {
      return {
        type: actions.PATCH_ACCOUNT_GMAIL_COMMENT_SUCCESS,
        data,
      };
    },
  
    patchAccountGmailCommentErr: (err) => {
      return {
        type: actions.PATCH_ACCOUNT_GMAIL_COMMENT_ERR,
        err,
      };
    },



    // LIKE
    listAccountGmailLikeBegin: (payload) => {
      return {
        type: actions.LIST_ACCOUNT_GMAIL_LIKE_BEGIN,
        payload
      };
    },
  
    listAccountGmailLikeSuccess: (data) => {
      return {
        type: actions.LIST_ACCOUNT_GMAIL_LIKE_SUCCESS,
        data,
      };
    },
  
    listAccountGmailLikeErr: (err) => {
      return {
        type: actions.LIST_ACCOUNT_GMAIL_LIKE_ERR,
        err,
      };
    },

    detailAccountGmailLikeBegin: (payload) => {
      return {
        type: actions.DETAIL_ACCOUNT_GMAIL_LIKE_BEGIN,
        payload
      };
    },
  
    detailAccountGmailLikeSuccess: (data) => {
      return {
        type: actions.DETAIL_ACCOUNT_GMAIL_LIKE_SUCCESS,
        data,
      };
    },
  
    detailAccountGmailLikeErr: (err) => {
      return {
        type: actions.DETAIL_ACCOUNT_GMAIL_LIKE_ERR,
        err,
      };
    },
    createAccountGmailLikeBegin: (payload) => {
      return {
        type: actions.CREATE_ACCOUNT_GMAIL_LIKE_BEGIN,
        payload
      };
    },
  
    createAccountGmailLikeSuccess: (data) => {
      return {
        type: actions.CREATE_ACCOUNT_GMAIL_LIKE_SUCCESS,
        data,
      };
    },
  
    createAccountGmailLikeErr: (err) => {
      return {
        type: actions.CREATE_ACCOUNT_GMAIL_LIKE_ERR,
        err,
      };
    },
    deleteAccountGmailLikeBegin: (payload) => {
      return {
        type: actions.DELETE_ACCOUNT_GMAIL_LIKE_BEGIN,
        payload
      };
    },
  
    deleteAccountGmailLikeSuccess: (data) => {
      return {
        type: actions.DELETE_ACCOUNT_GMAIL_LIKE_SUCCESS,
        data,
      };
    },
  
    deleteAccountGmailLikeErr: (err) => {
      return {
        type: actions.DELETE_ACCOUNT_GMAIL_LIKE_ERR,
        err,
      };
    },
    patchAccountGmailLikeBegin: (payload) => {
      return {
        type: actions.PATCH_ACCOUNT_GMAIL_LIKE_BEGIN,
        payload
      };
    },
  
    patchAccountGmailLikeSuccess: (data) => {
      return {
        type: actions.PATCH_ACCOUNT_GMAIL_LIKE_SUCCESS,
        data,
      };
    },
  
    patchAccountGmailLikeErr: (err) => {
      return {
        type: actions.PATCH_ACCOUNT_GMAIL_LIKE_ERR,
        err,
      };
    },


    // View
    listAccountGmailViewBegin: (payload) => {
      return {
        type: actions.LIST_ACCOUNT_GMAIL_VIEW_BEGIN,
        payload
      };
    },
  
    listAccountGmailViewSuccess: (data) => {
      return {
        type: actions.LIST_ACCOUNT_GMAIL_VIEW_SUCCESS,
        data,
      };
    },
  
    listAccountGmailViewErr: (err) => {
      return {
        type: actions.LIST_ACCOUNT_GMAIL_VIEW_ERR,
        err,
      };
    },
    detailAccountGmailViewBegin: (payload) => {
      return {
        type: actions.DETAIL_ACCOUNT_GMAIL_VIEW_BEGIN,
        payload
      };
    },
  
    detailAccountGmailViewSuccess: (data) => {
      return {
        type: actions.DETAIL_ACCOUNT_GMAIL_VIEW_SUCCESS,
        data,
      };
    },
  
    detailAccountGmailViewErr: (err) => {
      return {
        type: actions.DETAIL_ACCOUNT_GMAIL_VIEW_ERR,
        err,
      };
    },
    createAccountGmailViewBegin: (payload) => {
      return {
        type: actions.CREATE_ACCOUNT_GMAIL_VIEW_BEGIN,
        payload
      };
    },
  
    createAccountGmailViewSuccess: (data) => {
      return {
        type: actions.CREATE_ACCOUNT_GMAIL_VIEW_SUCCESS,
        data,
      };
    },
  
    createAccountGmailViewErr: (err) => {
      return {
        type: actions.CREATE_ACCOUNT_GMAIL_VIEW_ERR,
        err,
      };
    },
    deleteAccountGmailViewBegin: (payload) => {
      return {
        type: actions.DELETE_ACCOUNT_GMAIL_VIEW_BEGIN,
        payload
      };
    },
  
    deleteAccountGmailViewSuccess: (data) => {
      return {
        type: actions.DELETE_ACCOUNT_GMAIL_VIEW_SUCCESS,
        data,
      };
    },
  
    deleteAccountGmailViewErr: (err) => {
      return {
        type: actions.DELETE_ACCOUNT_GMAIL_VIEW_ERR,
        err,
      };
    },
    patchAccountGmailViewBegin: (payload) => {
      return {
        type: actions.PATCH_ACCOUNT_GMAIL_VIEW_BEGIN,
        payload
      };
    },
  
    patchAccountGmailViewSuccess: (data) => {
      return {
        type: actions.PATCH_ACCOUNT_GMAIL_VIEW_SUCCESS,
        data,
      };
    },
  
    patchAccountGmailViewErr: (err) => {
      return {
        type: actions.PATCH_ACCOUNT_GMAIL_VIEW_ERR,
        err,
      };
    },


    // Subscribe
    listAccountGmailSubscribeBegin: (payload) => {
      return {
        type: actions.LIST_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN,
        payload
      };
    },
  
    listAccountGmailSubscribeSuccess: (data) => {
      return {
        type: actions.LIST_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS,
        data,
      };
    },
  
    listAccountGmailSubscribeErr: (err) => {
      return {
        type: actions.LIST_ACCOUNT_GMAIL_SUBSCRIBE_ERR,
        err,
      };
    },
    detailAccountGmailSubscribeBegin: (payload) => {
      return {
        type: actions.DETAIL_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN,
        payload
      };
    },
  
    detailAccountGmailSubscribeSuccess: (data) => {
      return {
        type: actions.DETAIL_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS,
        data,
      };
    },
  
    detailAccountGmailSubscribeErr: (err) => {
      return {
        type: actions.DETAIL_ACCOUNT_GMAIL_SUBSCRIBE_ERR,
        err,
      };
    },
    createAccountGmailSubscribeBegin: (payload) => {
      return {
        type: actions.CREATE_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN,
        payload
      };
    },
  
    createAccountGmailSubscribeSuccess: (data) => {
      return {
        type: actions.CREATE_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS,
        data,
      };
    },
  
    createAccountGmailSubscribeErr: (err) => {
      return {
        type: actions.CREATE_ACCOUNT_GMAIL_SUBSCRIBE_ERR,
        err,
      };
    },
    deleteAccountGmailSubscribeBegin: (payload) => {
      return {
        type: actions.DELETE_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN,
        payload
      };
    },
  
    deleteAccountGmailSubscribeSuccess: (data) => {
      return {
        type: actions.DELETE_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS,
        data,
      };
    },
  
    deleteAccountGmailSubscribeErr: (err) => {
      return {
        type: actions.DELETE_ACCOUNT_GMAIL_SUBSCRIBE_ERR,
        err,
      };
    },
    patchAccountGmailSubscribeBegin: (payload) => {
      return {
        type: actions.PATCH_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN,
        payload
      };
    },
  
    patchAccountGmailSubscribeSuccess: (data) => {
      return {
        type: actions.PATCH_ACCOUNT_GMAIL_SUBSCRIBE_SUCCESS,
        data,
      };
    },
  
    patchAccountGmailSubscribeErr: (err) => {
      return {
        type: actions.PATCH_ACCOUNT_GMAIL_SUBSCRIBE_ERR,
        err,
      };
    },




    changeServiceTypeInGmailBegin: (payload) => {
      return {
        type: actions.CHANGE_SERVICE_TYPE_IN_GMAIL_BEGIN,
        payload
      };
    },
  
    changeServiceTypeInGmailSuccess: (data) => {
      return {
        type: actions.CHANGE_SERVICE_TYPE_IN_GMAIL_SUCCESS,
        data,
      };
    },
  
    changeServiceTypeInGmailErr: (err) => {
      return {
        type: actions.CHANGE_SERVICE_TYPE_IN_GMAIL_ERR,
        err,
      };
    },
  };
    
  export default actions;
    