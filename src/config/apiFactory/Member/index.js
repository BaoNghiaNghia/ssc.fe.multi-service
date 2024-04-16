/* eslint-disable */
import {
    FETCH_USER_LIST_ENDPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const BuffSubscribeAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

BuffSubscribeAPI.createEntities([
    { name: FETCH_USER_LIST_ENDPOINT }
]);
const fetchUserListAPI = (query) => BuffSubscribeAPI.createBasicCRUDEndpoints({ name: FETCH_USER_LIST_ENDPOINT }).get(query);

export {
    fetchUserListAPI
}
