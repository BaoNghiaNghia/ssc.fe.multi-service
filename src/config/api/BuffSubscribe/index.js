/* eslint-disable */
import {
   FETCH_ADMIN_SETTING_ENDPOINT,
   FETCH_LIST_ORDER_SUBSCRIBE_ENDPOINT,
   FETCH_SERVICE_PACKAGE_LIST_ENDPOINT,
   FETCH_USER_LIST_ENDPOINT,
   FETCH_LIST_ORDER_HISTORY_ENDPOINT,


   ACTIVE_WARRANTY_ORDER_SUBSCRIBE_ENDPOINT,
   CREATE_ORDER_SUBSCRIBE_ENDPOINT,
   GENERAL_COMPUTER_SUBSCRIBE_ENDPOINT,
   GENERAL_ORDER_SUBSCRIBE_ENDPOINT,
   GET_WARRANTY_ORDER_ENDPOINT,
   REFUND_WARRANTY_ORDER_ENDPOINT,
   UPDATE_MANY_COMPUTER_SUBSCRIBE_ENDPOINT,
   UPDATE_MANY_ORDER_SUBSCRIBE_ENDPOINT,
   VALIDATE_YOUTUBE_VIDEO_SUBSCRIBE_ENDPOINT,
   CHANNEL_SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_ENDPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const BuffSubscribeAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

BuffSubscribeAPI.createEntities([
    { name: FETCH_ADMIN_SETTING_ENDPOINT },
    { name: FETCH_LIST_ORDER_SUBSCRIBE_ENDPOINT },
    { name: FETCH_SERVICE_PACKAGE_LIST_ENDPOINT },
    { name: FETCH_USER_LIST_ENDPOINT },
    { name: FETCH_LIST_ORDER_HISTORY_ENDPOINT },

    { name: ACTIVE_WARRANTY_ORDER_SUBSCRIBE_ENDPOINT},
    { name: CREATE_ORDER_SUBSCRIBE_ENDPOINT},
    { name: GENERAL_COMPUTER_SUBSCRIBE_ENDPOINT},
    { name: GENERAL_ORDER_SUBSCRIBE_ENDPOINT},
    { name: GET_WARRANTY_ORDER_ENDPOINT},
    { name: REFUND_WARRANTY_ORDER_ENDPOINT},
    { name: UPDATE_MANY_COMPUTER_SUBSCRIBE_ENDPOINT},
    { name: UPDATE_MANY_ORDER_SUBSCRIBE_ENDPOINT},
    { name: VALIDATE_YOUTUBE_VIDEO_SUBSCRIBE_ENDPOINT},
    { name: CHANNEL_SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_ENDPOINT},
]);

const fetchAdminSettingAPI = () => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: FETCH_ADMIN_SETTING_ENDPOINT }).get();
const fetchServicePackageListAPI = () => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: FETCH_SERVICE_PACKAGE_LIST_ENDPOINT }).get();
const fetchOrderHistoryAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: FETCH_LIST_ORDER_HISTORY_ENDPOINT }).get(query);



const fetchListOrderSubscribeAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_SUBSCRIBE_ENDPOINT }).get(query);

const getOneOrderSubscribeAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_SUBSCRIBE_ENDPOINT }).getOne(query);
const updateOneOrderSubscribeAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: GENERAL_ORDER_SUBSCRIBE_ENDPOINT }).patch(query);
const updateManyOrderSubscribeAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: UPDATE_MANY_ORDER_SUBSCRIBE_ENDPOINT }).patchMultiple(query);

const createOrderSubscribeAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: CREATE_ORDER_SUBSCRIBE_ENDPOINT }).post(query);

const listComputerRunSubscribeAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_SUBSCRIBE_ENDPOINT }).get(query);
const detailComputerRunSubscribeAPI = (id) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_SUBSCRIBE_ENDPOINT }).getOne(id);
const deleteComputerRunSubscribeAPI = (id) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_SUBSCRIBE_ENDPOINT }).delete(id);
const updateOneComputerRunSubscribeAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: GENERAL_COMPUTER_SUBSCRIBE_ENDPOINT }).patch(query);
const updateManyComputerSubscribeAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: UPDATE_MANY_COMPUTER_SUBSCRIBE_ENDPOINT }).patchMultiple(query);

const fetchListWarrantyOrderAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: GET_WARRANTY_ORDER_ENDPOINT }).get(query);
const activeWarrantySubscribeOrderAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: ACTIVE_WARRANTY_ORDER_SUBSCRIBE_ENDPOINT }).submitPost(query);
const refundWarrantyOrderAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: REFUND_WARRANTY_ORDER_ENDPOINT }).submitPost(query);

const fetchListSubscribeInChannelByDayAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: CHANNEL_SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_ENDPOINT }).get(query);

export {
    fetchAdminSettingAPI,
    fetchListOrderSubscribeAPI,
    fetchServicePackageListAPI,
    fetchOrderHistoryAPI,
    

    getOneOrderSubscribeAPI,
    updateOneOrderSubscribeAPI,
    updateManyOrderSubscribeAPI,
    createOrderSubscribeAPI,
    listComputerRunSubscribeAPI,
    detailComputerRunSubscribeAPI,
    deleteComputerRunSubscribeAPI,
    updateOneComputerRunSubscribeAPI,
    updateManyComputerSubscribeAPI,
    fetchListWarrantyOrderAPI,
    activeWarrantySubscribeOrderAPI,
    refundWarrantyOrderAPI,

    fetchListSubscribeInChannelByDayAPI
}
