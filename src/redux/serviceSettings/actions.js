const actions = {
    FETCH_LIST_SERVICES_BEGIN: 'FETCH_LIST_SERVICES_BEGIN',
    FETCH_LIST_SERVICES_SUCCESS: 'FETCH_LIST_SERVICES_SUCCESS',
    FETCH_LIST_SERVICES_ERR: 'FETCH_LIST_SERVICES_ERR',

    // COMMENT
    FETCH_LIST_SETTINGS_COMMENT_BEGIN: 'FETCH_LIST_SETTINGS_COMMENT_BEGIN',
    FETCH_LIST_SETTINGS_COMMENT_SUCCESS: 'FETCH_LIST_SETTINGS_COMMENT_SUCCESS',
    FETCH_LIST_SETTINGS_COMMENT_ERR: 'FETCH_LIST_SETTINGS_COMMENT_ERR',

    UPDATE_SETTING_COMMENT_BEGIN: 'UPDATE_SETTING_COMMENT_BEGIN',
    UPDATE_SETTING_COMMENT_SUCCESS: 'UPDATE_SETTING_COMMENT_SUCCESS',
    UPDATE_SETTING_COMMENT_ERR: 'UPDATE_SETTING_COMMENT_ERR',

    // LIKE
    FETCH_LIST_SETTINGS_LIKE_BEGIN: 'FETCH_LIST_SETTINGS_LIKE_BEGIN',
    FETCH_LIST_SETTINGS_LIKE_SUCCESS: 'FETCH_LIST_SETTINGS_LIKE_SUCCESS',
    FETCH_LIST_SETTINGS_LIKE_ERR: 'FETCH_LIST_SETTINGS_LIKE_ERR',

    UPDATE_SETTING_LIKE_BEGIN: 'UPDATE_SETTING_LIKE_BEGIN',
    UPDATE_SETTING_LIKE_SUCCESS: 'UPDATE_SETTING_LIKE_SUCCESS',
    UPDATE_SETTING_LIKE_ERR: 'UPDATE_SETTING_LIKE_ERR',

    // VIEW
    FETCH_LIST_SETTINGS_VIEW_BEGIN: 'FETCH_LIST_SETTINGS_VIEW_BEGIN',
    FETCH_LIST_SETTINGS_VIEW_SUCCESS: 'FETCH_LIST_SETTINGS_VIEW_SUCCESS',
    FETCH_LIST_SETTINGS_VIEW_ERR: 'FETCH_LIST_SETTINGS_VIEW_ERR',

    UPDATE_SETTING_VIEW_BEGIN: 'UPDATE_SETTING_VIEW_BEGIN',
    UPDATE_SETTING_VIEW_SUCCESS: 'UPDATE_SETTING_VIEW_SUCCESS',
    UPDATE_SETTING_VIEW_ERR: 'UPDATE_SETTING_VIEW_ERR',

    // SUBSCRIBE
    FETCH_LIST_SETTINGS_SUBSCRIBE_BEGIN: 'FETCH_LIST_SETTINGS_SUBSCRIBE_BEGIN',
    FETCH_LIST_SETTINGS_SUBSCRIBE_SUCCESS: 'FETCH_LIST_SETTINGS_SUBSCRIBE_SUCCESS',
    FETCH_LIST_SETTINGS_SUBSCRIBE_ERR: 'FETCH_LIST_SETTINGS_SUBSCRIBE_ERR',

    UPDATE_SETTING_SUBSCRIBE_BEGIN: 'UPDATE_SETTING_SUBSCRIBE_BEGIN',
    UPDATE_SETTING_SUBSCRIBE_SUCCESS: 'UPDATE_SETTING_SUBSCRIBE_SUCCESS',
    UPDATE_SETTING_SUBSCRIBE_ERR: 'UPDATE_SETTING_SUBSCRIBE_ERR',



    CREATE_SERVICES_BEGIN: 'CREATE_SERVICES_BEGIN',
    CREATE_SERVICES_SUCCESS: 'CREATE_SERVICES_SUCCESS',
    CREATE_SERVICES_ERR: 'CREATE_SERVICES_ERR',

    UPDATE_SERVICES_BEGIN: 'UPDATE_SERVICES_BEGIN',
    UPDATE_SERVICES_SUCCESS: 'UPDATE_SERVICES_SUCCESS',
    UPDATE_SERVICES_ERR: 'UPDATE_SERVICES_ERR',

    MODAL_DETAIL_SERVICE_BEGIN: 'MODAL_DETAIL_SERVICE_BEGIN',
    MODAL_DETAIL_SERVICE_SUCCESS: 'MODAL_DETAIL_SERVICE_SUCCESS',
    MODAL_DETAIL_SERVICE_ERR: 'MODAL_DETAIL_SERVICE_ERR',

    CHANGE_TYPE_TAB_BEGIN: 'CHANGE_TYPE_TAB_BEGIN',
    CHANGE_TYPE_TAB_SUCCESS: 'CHANGE_TYPE_TAB_SUCCESS',
    CHANGE_TYPE_TAB_ERR: 'CHANGE_TYPE_TAB_ERR',

    FETCH_LIST_ALL_GOOGLE_KEY_BEGIN: 'FETCH_LIST_ALL_GOOGLE_KEY_BEGIN',
    FETCH_LIST_ALL_GOOGLE_KEY_SUCCESS: 'FETCH_LIST_ALL_GOOGLE_KEY_SUCCESS',
    FETCH_LIST_ALL_GOOGLE_KEY_ERR: 'FETCH_LIST_ALL_GOOGLE_KEY_ERR',

    CREATE_GOOGLE_KEY_BEGIN: 'CREATE_GOOGLE_KEY_BEGIN',
    CREATE_GOOGLE_KEY_SUCCESS: 'CREATE_GOOGLE_KEY_SUCCESS',
    CREATE_GOOGLE_KEY_ERR: 'CREATE_GOOGLE_KEY_ERR',

    DETAIL_GOOGLE_KEY_BEGIN: 'DETAIL_GOOGLE_KEY_BEGIN',
    DETAIL_GOOGLE_KEY_SUCCESS: 'DETAIL_GOOGLE_KEY_SUCCESS',
    DETAIL_GOOGLE_KEY_ERR: 'DETAIL_GOOGLE_KEY_ERR',

    UPDATE_GOOGLE_KEY_BEGIN: 'UPDATE_GOOGLE_KEY_BEGIN',
    UPDATE_GOOGLE_KEY_SUCCESS: 'UPDATE_GOOGLE_KEY_SUCCESS',
    UPDATE_GOOGLE_KEY_ERR: 'UPDATE_GOOGLE_KEY_ERR',

    DELETE_GOOGLE_KEY_BEGIN: 'DELETE_GOOGLE_KEY_BEGIN',
    DELETE_GOOGLE_KEY_SUCCESS: 'DELETE_GOOGLE_KEY_SUCCESS',
    DELETE_GOOGLE_KEY_ERR: 'DELETE_GOOGLE_KEY_ERR',


    deleteGoogleKeyBegin: (payload) => {
      return {
        type: actions.DELETE_GOOGLE_KEY_BEGIN,
        payload
      };
    },

    deleteGoogleKeySuccess: (data) => {
      return {
        type: actions.DELETE_GOOGLE_KEY_SUCCESS,
        data,
      };
    },

    deleteGoogleKeyErr: (err) => {
      return {
        type: actions.DELETE_GOOGLE_KEY_ERR,
        err,
      };
    },

    updateGoogleKeyBegin: (payload) => {
      return {
        type: actions.UPDATE_GOOGLE_KEY_BEGIN,
        payload
      };
    },

    updateGoogleKeySuccess: (data) => {
      return {
        type: actions.UPDATE_GOOGLE_KEY_SUCCESS,
        data,
      };
    },

    updateGoogleKeyErr: (err) => {
      return {
        type: actions.UPDATE_GOOGLE_KEY_ERR,
        err,
      };
    },
  
    detailGoogleKeyBegin: (payload) => {
      return {
        type: actions.DETAIL_GOOGLE_KEY_BEGIN,
        payload
      };
    },

    detailGoogleKeySuccess: (data) => {
      return {
        type: actions.DETAIL_GOOGLE_KEY_SUCCESS,
        data,
      };
    },

    detailGoogleKeyErr: (err) => {
      return {
        type: actions.DETAIL_GOOGLE_KEY_ERR,
        err,
      };
    },
  
    createGoogleKeyBegin: (payload) => {
      return {
        type: actions.CREATE_GOOGLE_KEY_BEGIN,
        payload
      };
    },

    createGoogleKeySuccess: (data) => {
      return {
        type: actions.CREATE_GOOGLE_KEY_SUCCESS,
        data,
      };
    },

    createGoogleKeyErr: (err) => {
      return {
        type: actions.CREATE_GOOGLE_KEY_ERR,
        err,
      };
    },

    fetchListAllGoogleKeyBegin: (payload) => {
        return {
            type: actions.FETCH_LIST_ALL_GOOGLE_KEY_BEGIN,
            payload
        };
    },

    fetchListAllGoogleKeySuccess: (data) => {
        return {
            type: actions.FETCH_LIST_ALL_GOOGLE_KEY_SUCCESS,
            data,
        };
    },

    fetchListAllGoogleKeyErr: (err) => {
        return {
            type: actions.FETCH_LIST_ALL_GOOGLE_KEY_ERR,
            err,
        };
    },


    updateListSettingsCommentBegin: (payload) => {
        return {
            type: actions.UPDATE_SETTING_COMMENT_BEGIN,
            payload
        };
    },

    updateListSettingsCommentSuccess: (data) => {
        return {
            type: actions.UPDATE_SETTING_COMMENT_SUCCESS,
            data,
        };
    },

    updateListSettingsCommentErr: (err) => {
        return {
            type: actions.UPDATE_SETTING_COMMENT_ERR,
            err,
        };
    },

    updateListSettingsLikeBegin: (payload) => {
        return {
            type: actions.UPDATE_SETTING_LIKE_BEGIN,
            payload
        };
    },

    updateListSettingsLikeSuccess: (data) => {
        return {
            type: actions.UPDATE_SETTING_LIKE_SUCCESS,
            data,
        };
    },

    updateListSettingsLikeErr: (err) => {
        return {
            type: actions.UPDATE_SETTING_LIKE_ERR,
            err,
        };
    },

    updateListSettingsViewBegin: (payload) => {
        return {
            type: actions.UPDATE_SETTING_VIEW_BEGIN,
            payload
        };
    },

    updateListSettingsViewSuccess: (data) => {
        return {
            type: actions.UPDATE_SETTING_VIEW_SUCCESS,
            data,
        };
    },

    updateListSettingsViewErr: (err) => {
        return {
            type: actions.UPDATE_SETTING_VIEW_ERR,
            err,
        };
    },


    updateListSettingsSubscribeBegin: (payload) => {
        return {
            type: actions.UPDATE_SETTING_SUBSCRIBE_BEGIN,
            payload
        };
    },

    updateListSettingsSubscribeSuccess: (data) => {
        return {
            type: actions.UPDATE_SETTING_SUBSCRIBE_SUCCESS,
            data,
        };
    },

    updateListSettingsSubscribeErr: (err) => {
        return {
            type: actions.UPDATE_SETTING_SUBSCRIBE_ERR,
            err,
        };
    },

    // COMMENT
    fetchListSettingsCommentBegin: (payload) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_COMMENT_BEGIN,
            payload
        };
    },

    fetchListSettingsCommentSuccess: (data) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_COMMENT_SUCCESS,
            data,
        };
    },

    fetchListSettingsCommentErr: (err) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_COMMENT_ERR,
            err,
        };
    },

    fetchListSettingsLikeBegin: (payload) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_LIKE_BEGIN,
            payload
        };
    },

    fetchListSettingsLikeSuccess: (data) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_LIKE_SUCCESS,
            data,
        };
    },

    fetchListSettingsLikeErr: (err) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_LIKE_ERR,
            err,
        };
    },
    
    fetchListSettingsViewBegin: (payload) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_VIEW_BEGIN,
            payload
        };
    },

    fetchListSettingsViewSuccess: (data) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_VIEW_SUCCESS,
            data,
        };
    },

    fetchListSettingsViewErr: (err) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_VIEW_ERR,
            err,
        };
    },
    
    fetchListSettingsSubscribeBegin: (payload) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_SUBSCRIBE_BEGIN,
            payload
        };
    },

    fetchListSettingsSubscribeSuccess: (data) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_SUBSCRIBE_SUCCESS,
            data,
        };
    },

    fetchListSettingsSubscribeErr: (err) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_SUBSCRIBE_ERR,
            err,
        };
    },





    changeTypeTabBegin: (payload) => {
        return {
            type: actions.CHANGE_TYPE_TAB_BEGIN,
            payload
        };
    },

    changeTypeTabSuccess: (data) => {
        return {
            type: actions.CHANGE_TYPE_TAB_SUCCESS,
            data,
        };
    },

    changeTypeTabErr: (err) => {
        return {
            type: actions.CHANGE_TYPE_TAB_ERR,
            err,
        };
    },
  
    modalDetailServiceBegin: (payload) => {
      return {
        type: actions.MODAL_DETAIL_SERVICE_BEGIN,
        payload
      };
    },
  
    modalDetailServiceSuccess: (data) => {
      return {
        type: actions.MODAL_DETAIL_SERVICE_SUCCESS,
        data,
      };
    },
  
    modalDetailServiceErr: (err) => {
      return {
        type: actions.MODAL_DETAIL_SERVICE_ERR,
        err,
      };
    },

    fetchListServiceBegin: (payload) => {
      return {
        type: actions.FETCH_LIST_SERVICES_BEGIN,
        payload
      };
    },
  
    fetchListServiceSuccess: (data) => {
      return {
        type: actions.FETCH_LIST_SERVICES_SUCCESS,
        data,
      };
    },
  
    fetchListServiceErr: (err) => {
      return {
        type: actions.FETCH_LIST_SERVICES_ERR,
        err,
      };
    },

    createServiceBegin: (payload) => {
      return {
        type: actions.CREATE_SERVICES_BEGIN,
        payload
      };
    },
  
    createServiceSuccess: (data) => {
      return {
        type: actions.CREATE_SERVICES_SUCCESS,
        data,
      };
    },
  
    createServiceErr: (err) => {
      return {
        type: actions.CREATE_SERVICES_ERR,
        err,
      };
    },

    updateServiceBegin: (payload) => {
      return {
        type: actions.UPDATE_SERVICES_BEGIN,
        payload
      };
    },
  
    updateServiceSuccess: (data) => {
      return {
        type: actions.UPDATE_SERVICES_SUCCESS,
        data,
      };
    },
  
    updateServiceErr: (err) => {
      return {
        type: actions.UPDATE_SERVICES_ERR,
        err,
      };
    },
  };
    
  export default actions;
    