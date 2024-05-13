const actions = {
    FETCH_LIST_SERVICES_BEGIN: 'FETCH_LIST_SERVICES_BEGIN',
    FETCH_LIST_SERVICES_SUCCESS: 'FETCH_LIST_SERVICES_SUCCESS',
    FETCH_LIST_SERVICES_ERR: 'FETCH_LIST_SERVICES_ERR',

    FETCH_LIST_SETTINGS_BEGIN: 'FETCH_LIST_SETTINGS_BEGIN',
    FETCH_LIST_SETTINGS_SUCCESS: 'FETCH_LIST_SETTINGS_SUCCESS',
    FETCH_LIST_SETTINGS_ERR: 'FETCH_LIST_SETTINGS_ERR',

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


    fetchListSettingsBegin: (payload) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_BEGIN,
            payload
        };
    },

    fetchListSettingsSuccess: (data) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_SUCCESS,
            data,
        };
    },

    fetchListSettingsErr: (err) => {
        return {
            type: actions.FETCH_LIST_SETTINGS_ERR,
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
    