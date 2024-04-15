/* eslint-disable */
import {
   FETCH_ADMIN_SETTING_ENDPOINT,
   FETCH_LIST_ORDER_SUBSCRIBE_ENDPOINT,
   FETCH_SERVICE_PACKAGE_LIST_ENDPOINT,
   FETCH_USER_LIST_ENDPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const BuffSubscribeAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

BuffSubscribeAPI.createEntities([
    { name: FETCH_ADMIN_SETTING_ENDPOINT },
    { name: FETCH_LIST_ORDER_SUBSCRIBE_ENDPOINT },
    { name: FETCH_SERVICE_PACKAGE_LIST_ENDPOINT },
    { name: FETCH_USER_LIST_ENDPOINT }
]);

const fetchAdminSettingAPI = () => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: FETCH_ADMIN_SETTING_ENDPOINT }).get();
const fetchListOrderSubscribeAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: FETCH_LIST_ORDER_SUBSCRIBE_ENDPOINT }).get(query);
const fetchServicePackageListAPI = () => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: FETCH_SERVICE_PACKAGE_LIST_ENDPOINT }).get();
const fetchUserListAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: FETCH_USER_LIST_ENDPOINT }).get(query);

export {
    fetchAdminSettingAPI,
    fetchListOrderSubscribeAPI,
    fetchServicePackageListAPI,
    fetchUserListAPI
}
