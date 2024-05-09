/* eslint-disable */
import {
    FETCH_LIST_ORDER_COMMENT_ENDPOINT,
    COMMENT_ORDER_COMMENT_ENDPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const BuffCommentAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

BuffCommentAPI.createEntities([
    { name: FETCH_LIST_ORDER_COMMENT_ENDPOINT },
    { name: COMMENT_ORDER_COMMENT_ENDPOINT },
]);

const fetchListOrderCommentAPI = () => BuffCommentAPI.createBasicCRUDEndpoints({ name: FETCH_LIST_ORDER_COMMENT_ENDPOINT }).get();

const commentOrderCommentAPI = () => BuffCommentAPI.createBasicCRUDEndpoints({ name: COMMENT_ORDER_COMMENT_ENDPOINT }).submitGet();

export {
    fetchListOrderCommentAPI,
    commentOrderCommentAPI
}
