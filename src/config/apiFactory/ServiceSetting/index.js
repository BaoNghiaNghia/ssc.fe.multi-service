/* eslint-disable */
import {
    GENERAL_SERVICES_ENDPOINT,
    GENERAL_SETTINGS_ENDPOINT,
    GOOGLE_KEY_MANAGEMENT_ENDPOINT
 } from './endpoints';
 import ApiFactory from '../ApiFactory';
 
 const ServiceSettingAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });
 
 ServiceSettingAPI.createEntities([
     { name: GENERAL_SERVICES_ENDPOINT },
     { name: GENERAL_SETTINGS_ENDPOINT },
     { name: GOOGLE_KEY_MANAGEMENT_ENDPOINT },
 ]);
 
 const fetchListServiceAPI = (query) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SERVICES_ENDPOINT }).get(query);
 const fetchListSettingAPI = (query) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SETTINGS_ENDPOINT }).get(query);

 const createServiceAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SERVICES_ENDPOINT }).post(params);
 const updateServiceAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SERVICES_ENDPOINT }).update(params);
 const updateSettingAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GENERAL_SETTINGS_ENDPOINT }).update(params);

 const fetchListAllGoogleKeyAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GOOGLE_KEY_MANAGEMENT_ENDPOINT }).get(params);
 const createGoogleKeyAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GOOGLE_KEY_MANAGEMENT_ENDPOINT }).post(params);
 const detailGoogleKeyAPI = (id) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GOOGLE_KEY_MANAGEMENT_ENDPOINT }).get(id);
 const updateGoogleKeyAPI = (params) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GOOGLE_KEY_MANAGEMENT_ENDPOINT }).put(params);
 const deleteGoogleKeyAPI = (id) => ServiceSettingAPI.createBasicCRUDEndpoints({ name: GOOGLE_KEY_MANAGEMENT_ENDPOINT }).delete(id);
 
 export {
    fetchListServiceAPI,
    createServiceAPI, 
    updateServiceAPI,
    fetchListSettingAPI,
    updateSettingAPI,

    fetchListAllGoogleKeyAPI,
    createGoogleKeyAPI,
    detailGoogleKeyAPI,
    updateGoogleKeyAPI,
    deleteGoogleKeyAPI
 }
 