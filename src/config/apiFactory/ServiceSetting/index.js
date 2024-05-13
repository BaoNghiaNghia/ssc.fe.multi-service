/* eslint-disable */
import {
    GENERAL_SERVICES_ENDPOINT,
    GENERAL_SETTINGS_ENDPOINT
 } from './endpoints';
 import ApiFactory from '../ApiFactory';
 
 const ServiceAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });
 
 ServiceAPI.createEntities([
     { name: GENERAL_SERVICES_ENDPOINT },
     { name: GENERAL_SETTINGS_ENDPOINT },
 ]);
 
 const fetchListServiceAPI = (query) => ServiceAPI.createBasicCRUDEndpoints({ name: GENERAL_SERVICES_ENDPOINT }).get(query);
 const fetchListSettingAPI = (query) => ServiceAPI.createBasicCRUDEndpoints({ name: GENERAL_SETTINGS_ENDPOINT }).get(query);

 const createServiceAPI = (params) => ServiceAPI.createBasicCRUDEndpoints({ name: GENERAL_SERVICES_ENDPOINT }).post(params);
 const updateServiceAPI = (params) => ServiceAPI.createBasicCRUDEndpoints({ name: GENERAL_SERVICES_ENDPOINT }).update(params);
 
 export {
    fetchListServiceAPI,
    createServiceAPI, 
    updateServiceAPI,
    fetchListSettingAPI
 }
 