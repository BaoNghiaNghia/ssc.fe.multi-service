const actions = {
    FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN: 'FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN',
    FETCH_DAILY_SUBSCRIBE_RESPORT_SUCCESS: 'FETCH_DAILY_SUBSCRIBE_RESPORT_SUCCESS',
    FETCH_DAILY_SUBSCRIBE_RESPORT_ERR: 'FETCH_DAILY_SUBSCRIBE_RESPORT_ERR',
  
    reportSubscribeBegin: (payload) => {
      return {
        type: actions.FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN,
        payload
      };
    },
  
    reportSubscribeSuccess: (data) => {
      return {
        type: actions.FETCH_DAILY_SUBSCRIBE_RESPORT_SUCCESS,
        data,
      };
    },
  
    reportSubscribeErr: (err) => {
      return {
        type: actions.FETCH_DAILY_SUBSCRIBE_RESPORT_ERR,
        err,
      };
    },
  };
  
  export default actions;
  