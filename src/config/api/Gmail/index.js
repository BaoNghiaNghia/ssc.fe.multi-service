/* eslint-disable */
import {
    ACCOUNT_GMAIL_COMMENT_ENDPOINT,
    ACCOUNT_GMAIL_LIKE_ENDPOINT,
    ACCOUNT_GMAIL_VIEW_ENDPOINT,
    ACCOUNT_GMAIL_SUBSCRIBE_ENDPOINT,
} from './endpoints';
import ApiFactory from '../ApiFactory';

const GmailAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

GmailAPI.createEntities([
    { name: ACCOUNT_GMAIL_COMMENT_ENDPOINT },
    { name: ACCOUNT_GMAIL_LIKE_ENDPOINT },
    { name: ACCOUNT_GMAIL_VIEW_ENDPOINT },
    { name: ACCOUNT_GMAIL_SUBSCRIBE_ENDPOINT },
]);

const listAccountGmailCommentAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_COMMENT_ENDPOINT }).get(data);
const createAccountGmailCommentAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_COMMENT_ENDPOINT }).post(data);
const detailAccountGmailCommentAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_COMMENT_ENDPOINT }).getOne(id);
const deleteAccountGmailCommentAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_COMMENT_ENDPOINT }).delete(id);
const patchAccountGmailCommentAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_COMMENT_ENDPOINT }).patch(id);

const listAccountGmailLikeAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_LIKE_ENDPOINT }).get(data);
const createAccountGmailLikeAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_LIKE_ENDPOINT }).post(data);
const detailAccountGmailLikeAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_LIKE_ENDPOINT }).getOne(id);
const deleteAccountGmailLikeAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_LIKE_ENDPOINT }).delete(id);
const patchAccountGmailLikeAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_LIKE_ENDPOINT }).patch(id);

const listAccountGmailViewAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_VIEW_ENDPOINT }).get(data);
const createAccountGmailViewAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_VIEW_ENDPOINT }).post(data);
const detailAccountGmailViewAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_VIEW_ENDPOINT }).getOne(id);
const deleteAccountGmailViewAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_VIEW_ENDPOINT }).delete(id);
const patchAccountGmailViewAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_VIEW_ENDPOINT }).patch(id);

const listAccountGmailSubscribeAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_SUBSCRIBE_ENDPOINT }).get(data);
const createAccountGmailSubscribeAPI = (data) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_SUBSCRIBE_ENDPOINT }).post(data);
const detailAccountGmailSubscribeAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_SUBSCRIBE_ENDPOINT }).getOne(id);
const deleteAccountGmailSubscribeAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_SUBSCRIBE_ENDPOINT }).delete(id);
const patchAccountGmailSubscribeAPI = (id) => GmailAPI.createBasicCRUDEndpoints({ name: ACCOUNT_GMAIL_SUBSCRIBE_ENDPOINT }).patch(id);

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

    listAccountGmailViewAPI,
    createAccountGmailViewAPI,
    detailAccountGmailViewAPI,
    deleteAccountGmailViewAPI,
    patchAccountGmailViewAPI,

    listAccountGmailSubscribeAPI,
    createAccountGmailSubscribeAPI,
    detailAccountGmailSubscribeAPI,
    deleteAccountGmailSubscribeAPI,
    patchAccountGmailSubscribeAPI,
}
