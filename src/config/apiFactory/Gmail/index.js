/* eslint-disable */
import {
    ACCOUNT_GMAIL_COMMENT_ENPOINT,
    ACCOUNT_GMAIL_LIKE_ENPOINT,
} from './endpoints';
import ApiFactory from '../ApiFactory';

const GmailAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

GmailAPI.createEntities([
    { name: ACCOUNT_GMAIL_COMMENT_ENPOINT },
    { name: ACCOUNT_GMAIL_LIKE_ENPOINT },
]);

const listAccountGmailCommentAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_COMMENT_ENPOINT }).get(data);
const createAccountGmailCommentAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_COMMENT_ENPOINT }).post(data);
const detailAccountGmailCommentAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_COMMENT_ENPOINT }).getOne(id);
const deleteAccountGmailCommentAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_COMMENT_ENPOINT }).delete(id);
const patchAccountGmailCommentAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_COMMENT_ENPOINT }).patch(id);

const listAccountGmailLikeAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_LIKE_ENPOINT }).get(data);
const createAccountGmailLikeAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_LIKE_ENPOINT }).post(data);
const detailAccountGmailLikeAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_LIKE_ENPOINT }).getOne(id);
const deleteAccountGmailLikeAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_LIKE_ENPOINT }).delete(id);
const patchAccountGmailLikeAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_LIKE_ENPOINT }).patch(id);

export {
    listAccountGmailCommentAPI,
    detailAccountGmailCommentAPI,
    createAccountGmailCommentAPI,
    deleteAccountGmailCommentAPI,
    patchAccountGmailCommentAPI,

    listAccountGmailLikeAPI,
    createAccountGmailLikeAPI,
    detailAccountGmailLikeAPI,
    deleteAccountGmailLikeAPI,
    patchAccountGmailLikeAPI,
}
