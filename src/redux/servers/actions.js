const actions = {
    COMPUTER_DATA_LIST_BEGIN: 'COMPUTER_DATA_LIST_BEGIN',
    COMPUTER_DATA_LIST_SUCCESS: 'COMPUTER_DATA_LIST_SUCCESS',
    COMPUTER_DATA_LIST_ERR: 'COMPUTER_DATA_LIST_ERR',

    computerDataListBegin: (payload) => {
        return {
            type: actions.COMPUTER_DATA_LIST_BEGIN,
            payload
        };
    },

    computerDataListSuccess: (data) => {
        return {
            type: actions.COMPUTER_DATA_LIST_SUCCESS,
            data,
        };
    },

    computerDataListErr: (err) => {
        return {
            type: actions.COMPUTER_DATA_LIST_ERR,
            err,
        };
    },
};

export default actions;
