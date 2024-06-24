/* eslint-disable */
import {
    GENERAL_ORDER_LIKE_ENDPOINT,
    LIKE_IN_ORDER_LIKE_ENDPOINT,
    CREATE_LIKE_LIKE_ENDPOINT,
    GENERAL_COMPUTER_LIKE_ENDPOINT,
    UPDATE_MANY_ORDER_LIKE_ENDPOINT,
    UPDATE_MANY_COMPUTER_LIKE_ENDPOINT,

    ACTIVE_WARRANTY_ORDER_ENDPOINT,
    GET_WARRANTY_ORDER_ENDPOINT,
    REFUND_WARRANTY_ORDER_ENDPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const BuffLikeAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

BuffLikeAPI.createEntities([
    { name: GENERAL_ORDER_LIKE_ENDPOINT },
    { name: LIKE_IN_ORDER_LIKE_ENDPOINT },
    { name: CREATE_LIKE_LIKE_ENDPOINT },
    { name: GENERAL_COMPUTER_LIKE_ENDPOINT },
    { name: UPDATE_MANY_ORDER_LIKE_ENDPOINT },
    { name: UPDATE_MANY_COMPUTER_LIKE_ENDPOINT },

    { name: ACTIVE_WARRANTY_ORDER_ENDPOINT },
    { name: GET_WARRANTY_ORDER_ENDPOINT },
    { name: REFUND_WARRANTY_ORDER_ENDPOINT },
]);

const fetchListOrderLikeAPI = (query) => BuffLikeAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_LIKE_ENDPOINT }).get(query);

const getOneOrderLikeAPI = (query) => BuffLikeAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_LIKE_ENDPOINT }).getOne(query);
const updateOneOrderLikeAPI = (query) => BuffLikeAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_LIKE_ENDPOINT }).patch(query);
const updateManyOrderLikeAPI = (query) => BuffLikeAPI.createBasicCRUDEndpoints({ name: UPDATE_MANY_ORDER_LIKE_ENDPOINT }).patchMultiple(query);

const likeOrderLikeAPI = (id) => BuffLikeAPI.createBasicCRUDEndpoints({ name: LIKE_IN_ORDER_LIKE_ENDPOINT }).submitGet(id);
const createOrderLikeAPI = (query) => BuffLikeAPI.createBasicCRUDEndpoints({ name: CREATE_LIKE_LIKE_ENDPOINT }).post(query);

const listComputerRunLikeAPI = (query) => BuffLikeAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_LIKE_ENDPOINT }).get(query);
const detailComputerRunLikeAPI = (id) => BuffLikeAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_LIKE_ENDPOINT }).getOne(id);
const deleteComputerRunLikeAPI = (id) => BuffLikeAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_LIKE_ENDPOINT }).delete(id);
const updateOneComputerRunLikeAPI = (query) => BuffLikeAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_LIKE_ENDPOINT }).patch(query);
const updateManyComputerLikeAPI = (query) => BuffLikeAPI.createBasicCRUDEndpoints({ name: UPDATE_MANY_COMPUTER_LIKE_ENDPOINT }).patchMultiple(query);

const fetchListWarrantyOrderAPI = (query) => BuffLikeAPI.createBasicCRUDEndpoints({ name: GET_WARRANTY_ORDER_ENDPOINT }).get(query);
const activeWarrantyOrderAPI = (query) => BuffLikeAPI.createBasicCRUDEndpoints({ name: ACTIVE_WARRANTY_ORDER_ENDPOINT }).submitPost(query);
const refundWarrantyOrderAPI = (query) => BuffLikeAPI.createBasicCRUDEndpoints({ name: REFUND_WARRANTY_ORDER_ENDPOINT }).submitPost(query);

export {
    fetchListOrderLikeAPI,
    likeOrderLikeAPI,
    createOrderLikeAPI,
    getOneOrderLikeAPI,
    updateOneOrderLikeAPI,
    listComputerRunLikeAPI,
    updateManyOrderLikeAPI,
    updateManyComputerLikeAPI,
    updateOneComputerRunLikeAPI,
    detailComputerRunLikeAPI,
    deleteComputerRunLikeAPI,
    fetchListWarrantyOrderAPI,
    activeWarrantyOrderAPI,
    refundWarrantyOrderAPI,
}
