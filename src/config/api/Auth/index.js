/* eslint-disable */
import {
    LOGIN_ENDPOINT,
    REGISTER_ENDPOINT,
    PROFILE_DETAIL_ENDPOINT,
    ADMIN_LIST_USER_ENDPOINT,
    UPDATE_PASSWORD_ENDPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const AuthenticateApi = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

AuthenticateApi.createEntities([
    { name: LOGIN_ENDPOINT },
    { name: REGISTER_ENDPOINT },
    { name: PROFILE_DETAIL_ENDPOINT },
    { name: ADMIN_LIST_USER_ENDPOINT },
    { name: UPDATE_PASSWORD_ENDPOINT }
]);

const loginUserApi = (data) => AuthenticateApi.createBasicCRUDEndpoints({ name: LOGIN_ENDPOINT }).postWithNoToken(data);
const registerUserApi = (data) => AuthenticateApi.createBasicCRUDEndpoints({ name: REGISTER_ENDPOINT }).postWithNoToken(data);

const fetchProfileDetail = (data, config) => AuthenticateApi.createBasicCRUDEndpoints({ name: PROFILE_DETAIL_ENDPOINT }).get(data, config);
const updateProfileDetail = (data) => AuthenticateApi.createBasicCRUDEndpoints({ name: PROFILE_DETAIL_ENDPOINT }).update(data);

const fetchAdminListUser = (data) => AuthenticateApi.createBasicCRUDEndpoints({ name: ADMIN_LIST_USER_ENDPOINT }).get(data);
const updatePasswordUser = (data) => AuthenticateApi.createBasicCRUDEndpoints({ name: UPDATE_PASSWORD_ENDPOINT }).put(data);

export {
    loginUserApi,
    registerUserApi,
    fetchAdminListUser,
    fetchProfileDetail,
    updatePasswordUser,
    updateProfileDetail
}
