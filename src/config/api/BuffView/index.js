/* eslint-disable */
import {
    GENERAL_ORDER_VIEW_ENDPOINT,
    VIEW_IN_ORDER_VIEW_ENDPOINT,
    CREATE_ORDER_VIEW_ENDPOINT,
    GENERAL_COMPUTER_VIEW_ENDPOINT,
    UPDATE_MANY_ORDER_VIEW_ENDPOINT,
    UPDATE_MANY_COMPUTER_VIEW_ENDPOINT,

    ACTIVE_WARRANTY_ORDER_VIEW_ENDPOINT,
    GET_WARRANTY_ORDER_ENDPOINT,
    REFUND_WARRANTY_ORDER_ENDPOINT,
    DEVICES_RUN_VIEW_ENDPOINT
} from './endpoints';

import ApiFactory from '../ApiFactory';

const BuffViewAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

BuffViewAPI.createEntities([
    { name: GENERAL_ORDER_VIEW_ENDPOINT },
    { name: VIEW_IN_ORDER_VIEW_ENDPOINT },
    { name: CREATE_ORDER_VIEW_ENDPOINT },
    { name: GENERAL_COMPUTER_VIEW_ENDPOINT },
    { name: UPDATE_MANY_ORDER_VIEW_ENDPOINT },
    { name: UPDATE_MANY_COMPUTER_VIEW_ENDPOINT },

    { name: ACTIVE_WARRANTY_ORDER_VIEW_ENDPOINT },
    { name: GET_WARRANTY_ORDER_ENDPOINT },
    { name: REFUND_WARRANTY_ORDER_ENDPOINT },
    { name: DEVICES_RUN_VIEW_ENDPOINT },
]);

// History
const fetchListOrderViewAPI = (query) => BuffViewAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_VIEW_ENDPOINT }).get(query);

// Order
const getOneOrderViewAPI = (query) => BuffViewAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_VIEW_ENDPOINT }).getOne(query);
const updateOneOrderViewAPI = (query) => BuffViewAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_VIEW_ENDPOINT }).patch(query);
const updateManyOrderViewAPI = (query) => BuffViewAPI.createBasicCRUDEndpoints({ name: UPDATE_MANY_ORDER_VIEW_ENDPOINT }).patchMultiple(query);
const viewOrderViewAPI = (id) => BuffViewAPI.createBasicCRUDEndpoints({ name: VIEW_IN_ORDER_VIEW_ENDPOINT }).submitGet(id);
const createOrderViewAPI = (query) => BuffViewAPI.createBasicCRUDEndpoints({ name: CREATE_ORDER_VIEW_ENDPOINT }).post(query);

// Computer
const listComputerRunViewAPI = (query) => BuffViewAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_VIEW_ENDPOINT }).get(query);
const detailComputerRunViewAPI = (id) => BuffViewAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_VIEW_ENDPOINT }).getOne(id);
const deleteComputerRunViewAPI = (id) => BuffViewAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_VIEW_ENDPOINT }).delete(id);
const updateOneComputerRunViewAPI = (query) => BuffViewAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_VIEW_ENDPOINT }).patch(query);
const updateManyComputerViewAPI = (query) => BuffViewAPI.createBasicCRUDEndpoints({ name: UPDATE_MANY_COMPUTER_VIEW_ENDPOINT }).patchMultiple(query);

// Warranty
const fetchListWarrantyOrderAPI = (query) => BuffViewAPI.createBasicCRUDEndpoints({ name: GET_WARRANTY_ORDER_ENDPOINT }).get(query);
const activeWarrantyViewOrderAPI = (query) => BuffViewAPI.createBasicCRUDEndpoints({ name: ACTIVE_WARRANTY_ORDER_VIEW_ENDPOINT }).submitPost(query);
const refundWarrantyOrderAPI = (query) => BuffViewAPI.createBasicCRUDEndpoints({ name: REFUND_WARRANTY_ORDER_ENDPOINT }).submitPost(query);

// Devices
const fetchListDevicesRunViewAPI = () => BuffViewAPI.createBasicCRUDEndpoints({ name: DEVICES_RUN_VIEW_ENDPOINT }).get();

export {
    fetchListOrderViewAPI,
    viewOrderViewAPI,
    createOrderViewAPI,
    getOneOrderViewAPI,
    updateOneOrderViewAPI,
    listComputerRunViewAPI,
    updateManyOrderViewAPI,
    updateManyComputerViewAPI,
    updateOneComputerRunViewAPI,
    detailComputerRunViewAPI,
    deleteComputerRunViewAPI,
    fetchListWarrantyOrderAPI,
    activeWarrantyViewOrderAPI,
    refundWarrantyOrderAPI,
    fetchListDevicesRunViewAPI
}
