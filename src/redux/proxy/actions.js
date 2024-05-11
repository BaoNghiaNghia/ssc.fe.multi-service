const actions = {
    CREATE_DOMAIN_BEGIN: 'CREATE_DOMAIN_BEGIN',
    CREATE_DOMAIN_SUCCESS: 'CREATE_DOMAIN_SUCCESS',
    CREATE_DOMAIN_ERR: 'CREATE_DOMAIN_ERR',

    DELETE_DOMAIN_BEGIN: 'DELETE_DOMAIN_BEGIN',
    DELETE_DOMAIN_SUCCESS: 'DELETE_DOMAIN_SUCCESS',
    DELETE_DOMAIN_ERR: 'DELETE_DOMAIN_ERR',

    GET_LIST_PROXY_IN_DOMAIN_BEGIN: 'GET_LIST_PROXY_IN_DOMAIN_BEGIN',
    GET_LIST_PROXY_IN_DOMAIN_SUCCESS: 'GET_LIST_PROXY_IN_DOMAIN_SUCCESS',
    GET_LIST_PROXY_IN_DOMAIN_ERR: 'GET_LIST_PROXY_IN_DOMAIN_ERR',

    LIST_ALL_DOMAIN_BEGIN: 'LIST_ALL_DOMAIN_BEGIN',
    LIST_ALL_DOMAIN_SUCCESS: 'LIST_ALL_DOMAIN_SUCCESS',
    LIST_ALL_DOMAIN_ERR: 'LIST_ALL_DOMAIN_ERR',

    DETAIL_DOMAIN_BEGIN: 'DETAIL_DOMAIN_BEGIN',
    DETAIL_DOMAIN_SUCCESS: 'DETAIL_DOMAIN_SUCCESS',
    DETAIL_DOMAIN_ERR: 'DETAIL_DOMAIN_ERR',
    

    detailDomainBegin: (payload) => {
        return {
            type: actions.DETAIL_DOMAIN_BEGIN,
            payload
        };
    },

    detailDomainSuccess: (data) => {
        return {
            type: actions.DETAIL_DOMAIN_SUCCESS,
            data,
        };
    },

    detailDomainErr: (err) => {
        return {
            type: actions.DETAIL_DOMAIN_ERR,
            err,
        };
    },

    createDomainBegin: (payload) => {
        return {
            type: actions.CREATE_DOMAIN_BEGIN,
            payload
        };
    },

    createDomainSuccess: (data) => {
        return {
            type: actions.CREATE_DOMAIN_SUCCESS,
            data,
        };
    },

    createDomainErr: (err) => {
        return {
            type: actions.CREATE_DOMAIN_ERR,
            err,
        };
    },
    deleteDomainBegin: (payload) => {
        return {
            type: actions.DELETE_DOMAIN_BEGIN,
            payload
        };
    },

    deleteDomainSuccess: (data) => {
        return {
            type: actions.DELETE_DOMAIN_SUCCESS,
            data,
        };
    },

    deleteDomainErr: (err) => {
        return {
            type: actions.DELETE_DOMAIN_ERR,
            err,
        };
    },
    getListProxyInDomainBegin: (payload) => {
        return {
            type: actions.GET_LIST_PROXY_IN_DOMAIN_BEGIN,
            payload
        };
    },

    getListProxyInDomainSuccess: (data) => {
        return {
            type: actions.GET_LIST_PROXY_IN_DOMAIN_SUCCESS,
            data,
        };
    },

    getListProxyInDomainErr: (err) => {
        return {
            type: actions.GET_LIST_PROXY_IN_DOMAIN_ERR,
            err,
        };
    },
    listAllDomainBegin: (payload) => {
        return {
            type: actions.LIST_ALL_DOMAIN_BEGIN,
            payload
        };
    },

    listAllDomainSuccess: (data) => {
        return {
            type: actions.LIST_ALL_DOMAIN_SUCCESS,
            data,
        };
    },

    listAllDomainErr: (err) => {
        return {
            type: actions.LIST_ALL_DOMAIN_ERR,
            err,
        };
    },

};

export default actions;
