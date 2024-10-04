/* eslint-disable */
import {
    GENERAL_SERVICES_ENDPOINT,
    GENERAL_SETTINGS_COMMENT_ENDPOINT,
    GENERAL_SETTINGS_LIKE_ENDPOINT,
    GENERAL_SETTINGS_VIEW_ENDPOINT,
    GENERAL_SETTINGS_SUBSCRIBE_ENDPOINT,
    GOOGLE_KEY_MANAGEMENT_ENDPOINT,
    UPDATE_GOOGLE_KEY_MANAGEMENT_ENDPOINT
 } from './endpoints';
 import ApiFactory from '../ApiFactory';
 
 const ServiceSettingAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });
 
 ServiceSettingAPI.createEntities([
     { name: GENERAL_SERVICES_ENDPOINT },
     { name: UPDATE_GOOGLE_KEY_MANAGEMENT_ENDPOINT },
     { name: GOOGLE_KEY_MANAGEMENT_ENDPOINT },
     { name: GENERAL_SETTINGS_COMMENT_ENDPOINT },
     { name: GENERAL_SETTINGS_LIKE_ENDPOINT },
     { name: GENERAL_SETTINGS_VIEW_ENDPOINT },
     { name: GENERAL_SETTINGS_SUBSCRIBE_ENDPOINT },
 ]);
 
 const fetchListSettingLikeAPI = (query) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SETTINGS_LIKE_ENDPOINT }).get(query);
 const updateSettingLikeAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SETTINGS_LIKE_ENDPOINT }).update(params);

 const fetchListSettingCommentAPI = (query) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SETTINGS_COMMENT_ENDPOINT }).get(query);
 const updateSettingCommentAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SETTINGS_COMMENT_ENDPOINT }).update(params);
 
 const fetchListSettingViewAPI = (query) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SETTINGS_VIEW_ENDPOINT }).get(query);
 const updateSettingViewAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SETTINGS_VIEW_ENDPOINT }).update(params);
 
 const fetchListSettingSubscribeAPI = (query) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SETTINGS_SUBSCRIBE_ENDPOINT }).get(query);
 const updateSettingSubscribeAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SETTINGS_SUBSCRIBE_ENDPOINT }).update(params);
 
 const fetchListServiceAPI = (query) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SERVICES_ENDPOINT }).get(query);
 const createServiceAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SERVICES_ENDPOINT }).post(params);
 const updateServiceAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SERVICES_ENDPOINT }).update(params);

 const fetchListAllGoogleKeyAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GOOGLE_KEY_MANAGEMENT_ENDPOINT }).get(params);
 const createGoogleKeyAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GOOGLE_KEY_MANAGEMENT_ENDPOINT }).post(params);
 const detailGoogleKeyAPI = (id) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GOOGLE_KEY_MANAGEMENT_ENDPOINT }).getOne(id);
 const updateGoogleKeyAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: UPDATE_GOOGLE_KEY_MANAGEMENT_ENDPOINT }).submitPut(params);
 const deleteGoogleKeyAPI = (id) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GOOGLE_KEY_MANAGEMENT_ENDPOINT }).delete(id);
 
 export {
    fetchListServiceAPI,
    createServiceAPI, 
    updateServiceAPI,

    fetchListSettingCommentAPI,
    updateSettingCommentAPI,

    fetchListSettingLikeAPI,
    updateSettingLikeAPI,

    fetchListSettingViewAPI,
    updateSettingViewAPI,

    fetchListSettingSubscribeAPI,
    updateSettingSubscribeAPI,

    fetchListAllGoogleKeyAPI,
    createGoogleKeyAPI,
    detailGoogleKeyAPI,
    updateGoogleKeyAPI,
    deleteGoogleKeyAPI
 }
 