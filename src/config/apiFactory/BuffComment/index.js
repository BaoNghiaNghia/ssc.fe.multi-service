/* eslint-disable */
import {
    GENERAL_ORDER_COMMENT_ENDPOINT,
    COMMENT_IN_ORDER_COMMENT_ENDPOINT,
    CREATE_COMMENT_COMMENT_ENDPOINT,
    LIST_COMPUTER_COMMENT_ENDPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const BuffCommentAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

BuffCommentAPI.createEntities([
    { name: GENERAL_ORDER_COMMENT_ENDPOINT },
    { name: COMMENT_IN_ORDER_COMMENT_ENDPOINT },
    { name: CREATE_COMMENT_COMMENT_ENDPOINT },
    { name: LIST_COMPUTER_COMMENT_ENDPOINT },
]);

const fetchListOrderCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_COMMENT_ENDPOINT }).get(query);

const getOneOrderCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_COMMENT_ENDPOINT }).getOne(query);
const updateOneOrderCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_COMMENT_ENDPOINT }).patch(query);

const commentOrderCommentAPI = (id) => BuffCommentAPI.createBasicCRUDEndpoints({ name: COMMENT_IN_ORDER_COMMENT_ENDPOINT }).submitGet(id);
const createOrderCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: CREATE_COMMENT_COMMENT_ENDPOINT }).post(query);

const listComputerRunCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: LIST_COMPUTER_COMMENT_ENDPOINT }).get(query);

export {
    fetchListOrderCommentAPI,
    commentOrderCommentAPI,
    createOrderCommentAPI,
    getOneOrderCommentAPI,
    updateOneOrderCommentAPI,
    listComputerRunCommentAPI
}
