const actions = {
    BLACK_LIST_CHANNEL_BEGIN: 'BLACK_LIST_CHANNEL_BEGIN',
    BLACK_LIST_CHANNEL_SUCCESS: 'BLACK_LIST_CHANNEL_SUCCESS',
    BLACK_LIST_CHANNEL_ERR: 'BLACK_LIST_CHANNEL_ERR',

    fetchBlackListChannelBegin: (payload) => {
      return {
        type: actions.BLACK_LIST_CHANNEL_BEGIN,
        payload
      };
    },
  
    fetchBlackListChannelSuccess: (data) => {
      return {
        type: actions.BLACK_LIST_CHANNEL_SUCCESS,
        data,
      };
    },
  
    fetchBlackListChannelErr: (err) => {
      return {
        type: actions.BLACK_LIST_CHANNEL_ERR,
        err,
      };
    }
  };
    
  export default actions;
    