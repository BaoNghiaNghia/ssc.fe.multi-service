/* eslint-disable */
import {
    FETCH_USER_LIST_ENDPOINT,
    USER_ADMIN_GENERAL_ENDPOINT,
    TOPUP_ADMIN_CONFIRM_ENVPOINT,
    TOPUP_ADMIN_ENVPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const MemberAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

MemberAPI.createEntities([
    { name: FETCH_USER_LIST_ENDPOINT },
    { name: USER_ADMIN_GENERAL_ENDPOINT },
]);
const fetchUserListAPI = (query) => MemberAPI.createBasicCRUDEndpoints({ name: FETCH_USER_LIST_ENDPOINT }).get(query);

const detailUserAdminMemberAPI = (id) => MemberAPI.createBasicCRUDEndpoints({ name: USER_ADMIN_GENERAL_ENDPOINT }).getOne(id);

const updateUserAdminMemberAPI = (query) => MemberAPI.createBasicCRUDEndpoints({ name: USER_ADMIN_GENERAL_ENDPOINT }).update(query);

const listTopupAdminMemberAPI = (query) => MemberAPI.createBasicCRUDEndpoints({ name: TOPUP_ADMIN_ENVPOINT }).get(query);

const createTopupAdminMemberAPI = (query) => MemberAPI.createBasicCRUDEndpoints({ name: TOPUP_ADMIN_ENVPOINT }).post(query);

const topupAdminConfirmMemberAPI = (query) => MemberAPI.createBasicCRUDEndpoints({ name: TOPUP_ADMIN_CONFIRM_ENVPOINT }).submitPut(query);

export {
    fetchUserListAPI,
    detailUserAdminMemberAPI,
    updateUserAdminMemberAPI,
    topupAdminConfirmMemberAPI,
    listTopupAdminMemberAPI,
    createTopupAdminMemberAPI
}
