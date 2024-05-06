const actions = {
    FETCH_LIST_SERVICES_BEGIN: 'FETCH_LIST_SERVICES_BEGIN',
    FETCH_LIST_SERVICES_SUCCESS: 'FETCH_LIST_SERVICES_SUCCESS',
    FETCH_LIST_SERVICES_ERR: 'FETCH_LIST_SERVICES_ERR',

    CREATE_SERVICES_BEGIN: 'CREATE_SERVICES_BEGIN',
    CREATE_SERVICES_SUCCESS: 'CREATE_SERVICES_SUCCESS',
    CREATE_SERVICES_ERR: 'CREATE_SERVICES_ERR',
  
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
        type: actions.FETCH_LIST_SERVICES_BEGIN,
        payload
      };
    },
  
    createServiceSuccess: (data) => {
      return {
        type: actions.FETCH_LIST_SERVICES_SUCCESS,
        data,
      };
    },
  
    createServiceErr: (err) => {
      return {
        type: actions.FETCH_LIST_SERVICES_ERR,
        err,
      };
    },
  };
    
  export default actions;
    