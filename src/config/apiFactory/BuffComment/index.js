/* eslint-disable */
import {
    GENERAL_ORDER_COMMENT_ENDPOINT,
    COMMENT_IN_ORDER_COMMENT_ENDPOINT,
    CREATE_COMMENT_COMMENT_ENDPOINT,
    GENERAL_COMPUTER_COMMENT_ENDPOINT,
    UPDATE_MANY_ORDER_COMMENT_ENDPOINT,
    UPDATE_MANY_COMPUTER_COMMENT_ENDPOINT,

    ACTIVE_WARRANTY_ORDER_ENDPOINT,
    GET_WARRANTY_ORDER_ENDPOINT,
    REFUND_WARRANTY_ORDER_ENDPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const BuffCommentAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

BuffCommentAPI.createEntities([
    { name: GENERAL_ORDER_COMMENT_ENDPOINT },
    { name: COMMENT_IN_ORDER_COMMENT_ENDPOINT },
    { name: CREATE_COMMENT_COMMENT_ENDPOINT },
    { name: GENERAL_COMPUTER_COMMENT_ENDPOINT },
    { name: UPDATE_MANY_ORDER_COMMENT_ENDPOINT },
    { name: UPDATE_MANY_COMPUTER_COMMENT_ENDPOINT },

    { name: ACTIVE_WARRANTY_ORDER_ENDPOINT },
    { name: GET_WARRANTY_ORDER_ENDPOINT },
    { name: REFUND_WARRANTY_ORDER_ENDPOINT },
]);

const fetchListOrderCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_COMMENT_ENDPOINT }).get(query);

const getOneOrderCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_COMMENT_ENDPOINT }).getOne(query);
const updateOneOrderCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_COMMENT_ENDPOINT }).patch(query);
const updateManyOrderCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: UPDATE_MANY_ORDER_COMMENT_ENDPOINT }).patchMultiple(query);

const commentOrderCommentAPI = (id) => BuffCommentAPI.createBasicCRUDEndpoints({ name: COMMENT_IN_ORDER_COMMENT_ENDPOINT }).submitGet(id);
const createOrderCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: CREATE_COMMENT_COMMENT_ENDPOINT }).post(query);

const listComputerRunCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_COMMENT_ENDPOINT }).get(query);
const detailComputerRunCommentAPI = (id) => BuffCommentAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_COMMENT_ENDPOINT }).getOne(id);
const deleteComputerRunCommentAPI = (id) => BuffCommentAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_COMMENT_ENDPOINT }).delete(id);
const updateOneComputerRunCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_COMMENT_ENDPOINT }).patch(query);
const updateManyComputerCommentAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: UPDATE_MANY_COMPUTER_COMMENT_ENDPOINT }).patchMultiple(query);

const fetchListWarrantyOrderAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: GET_WARRANTY_ORDER_ENDPOINT }).get(query);
const activeWarrantyOrderAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: ACTIVE_WARRANTY_ORDER_ENDPOINT }).submitPost(query);
const refundWarrantyOrderAPI = (query) => BuffCommentAPI.createBasicCRUDEndpoints({ name: REFUND_WARRANTY_ORDER_ENDPOINT }).submitPost(query);

export {
    fetchListOrderCommentAPI,
    commentOrderCommentAPI,
    createOrderCommentAPI,
    getOneOrderCommentAPI,
    updateOneOrderCommentAPI,
    listComputerRunCommentAPI,
    updateManyOrderCommentAPI,
    updateManyComputerCommentAPI,
    updateOneComputerRunCommentAPI,
    detailComputerRunCommentAPI,
    deleteComputerRunCommentAPI,
    fetchListWarrantyOrderAPI,
    activeWarrantyOrderAPI,
    refundWarrantyOrderAPI
}
