/* eslint-disable */
import {
    GENERAL_DOMAIN_ENPOINT,
    LIST_PROXY_BY_DOMAIN_ENDPOINT,
    PATCH_PROXY_ENDPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const GmailAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

GmailAPI.createEntities([
    { name: GENERAL_DOMAIN_ENPOINT },
    { name: LIST_PROXY_BY_DOMAIN_ENDPOINT },
    { name: PATCH_PROXY_ENDPOINT },
]);

const listGeneralDomainAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: GENERAL_DOMAIN_ENPOINT }).get(data);
const createDomainAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: GENERAL_DOMAIN_ENPOINT }).post(data);
const deleteDomainAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: GENERAL_DOMAIN_ENPOINT }).delete(id);
const getListProxyInDomainAPI = (query) => GmailAPI.createBasicCRUDEndpoints({ name: LIST_PROXY_BY_DOMAIN_ENDPOINT }).submitGet(query);

const patchProxyAPI = (query) => GmailAPI.createBasicCRUDEndpoints({ name: PATCH_PROXY_ENDPOINT }).patch(query);

export {
    listGeneralDomainAPI,
    createDomainAPI,
    deleteDomainAPI,
    getListProxyInDomainAPI,
    patchProxyAPI
}
