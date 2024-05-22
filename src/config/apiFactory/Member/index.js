/* eslint-disable */
import {
    FETCH_USER_LIST_ENDPOINT,
    USER_ADMIN_GENERAL_ENDPOINT,
    TOPUP_ADMIN_CONFIRM_ENDPOINT,
    TOPUP_ADMIN_ENDPOINT,
    CREDIT_HISTORY_ENDPOINT,
    GENERATE_API_KEY_ENDPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const MemberAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

MemberAPI.createEntities([
    { name: FETCH_USER_LIST_ENDPOINT },
    { name: USER_ADMIN_GENERAL_ENDPOINT },
    { name: TOPUP_ADMIN_CONFIRM_ENDPOINT },
    { name: TOPUP_ADMIN_ENDPOINT },
    { name: CREDIT_HISTORY_ENDPOINT },
    { name: GENERATE_API_KEY_ENDPOINT },
]);

const fetchUserListAPI = (query) => MemberAPI.createBasicCRUDEndpoints({ name: FETCH_USER_LIST_ENDPOINT }).get(query);

const detailUserAdminMemberAPI = (id) => MemberAPI.createBasicCRUDEndpoints({ name: USER_ADMIN_GENERAL_ENDPOINT }).getOne(id);

const updateUserAdminMemberAPI = (query) => MemberAPI.createBasicCRUDEndpoints({ name: USER_ADMIN_GENERAL_ENDPOINT }).update(query);

const listTopupAdminMemberAPI = (query) => MemberAPI.createBasicCRUDEndpoints({ name: TOPUP_ADMIN_ENDPOINT }).get(query);

const createTopupAdminMemberAPI = (query) => MemberAPI.createBasicCRUDEndpoints({ name: TOPUP_ADMIN_ENDPOINT }).post(query);

const topupAdminConfirmMemberAPI = (query) => MemberAPI.createBasicCRUDEndpoints({ name: TOPUP_ADMIN_CONFIRM_ENDPOINT }).submitPut(query);

const getListCreditHistoryMemberAPI = (query) => MemberAPI.createBasicCRUDEndpoints({ name: CREDIT_HISTORY_ENDPOINT }).get(query);

const generateApiKeyMemberAPI = (data) => MemberAPI.createBasicCRUDEndpoints({ name: GENERATE_API_KEY_ENDPOINT }).submitPost(data);

export {
    fetchUserListAPI,
    detailUserAdminMemberAPI,
    updateUserAdminMemberAPI,
    topupAdminConfirmMemberAPI,
    listTopupAdminMemberAPI,
    createTopupAdminMemberAPI,
    getListCreditHistoryMemberAPI,
    generateApiKeyMemberAPI
}
