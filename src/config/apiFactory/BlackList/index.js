/* eslint-disable */
import {
    BLACK_LIST_CHANNEL_ENDPOINT,
    DELETE_ITEM_BLACK_LIST_CHANNEL_ENDPOINT
 } from './endpoints';
 import ApiFactory from '../ApiFactory';
 
 const BlackListAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });
 
 BlackListAPI.createEntities([
     { name: BLACK_LIST_CHANNEL_ENDPOINT },
     { name: DELETE_ITEM_BLACK_LIST_CHANNEL_ENDPOINT },
 ]);
 
 const fetchBlackListChannelAPI = () => BlackListAPI.createBasicCRUDEndpoints({ name: BLACK_LIST_CHANNEL_ENDPOINT }).get();
 const deleteItemBlackListChannelAPI = (channel_id) => BlackListAPI.createBasicCRUDEndpoints({ name: BLACK_LIST_CHANNEL_ENDPOINT }).getOne(channel_id);
 
 export {
     fetchBlackListChannelAPI,
     deleteItemBlackListChannelAPI
 }
 