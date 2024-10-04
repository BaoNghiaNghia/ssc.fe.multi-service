/* eslint-disable */
import {
    GENERAL_DOMAIN_ENDPOINT,
    LIST_PROXY_BY_DOMAIN_ENDPOINT,
    PATCH_PROXY_ENDPOINT,
    ADMIN_DOMAIN_SERVICE_ENDPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const ProxyAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

ProxyAPI.createEntities([
    { name: GENERAL_DOMAIN_ENDPOINT },
    { name: LIST_PROXY_BY_DOMAIN_ENDPOINT },
    { name: PATCH_PROXY_ENDPOINT },
    { name: ADMIN_DOMAIN_SERVICE_ENDPOINT },
]);

const listGeneralDomainAPI = (data) => ProxyAPI.createBasicCRUDEndpoints({ name: GENERAL_DOMAIN_ENDPOINT }).get(data);
const createDomainAPI = (data) => ProxyAPI.createBasicCRUDEndpoints({ name: GENERAL_DOMAIN_ENDPOINT }).post(data);
const deleteDomainAPI = (id) => ProxyAPI.createBasicCRUDEndpoints({ name: GENERAL_DOMAIN_ENDPOINT }).delete(id);
const getListProxyInDomainAPI = (query) => ProxyAPI.createBasicCRUDEndpoints({ name: LIST_PROXY_BY_DOMAIN_ENDPOINT }).submitGet(query);

const patchProxyAPI = (query) => ProxyAPI.createBasicCRUDEndpoints({ name: PATCH_PROXY_ENDPOINT }).patch(query);
const listDomainByServiceAPI = (query) => ProxyAPI.createBasicCRUDEndpoints({ name: ADMIN_DOMAIN_SERVICE_ENDPOINT }).get(query);

export {
    listGeneralDomainAPI,
    createDomainAPI,
    deleteDomainAPI,
    getListProxyInDomainAPI,
    patchProxyAPI,
    listDomainByServiceAPI
}
