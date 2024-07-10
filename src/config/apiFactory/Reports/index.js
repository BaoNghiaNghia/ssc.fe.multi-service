/* eslint-disable */
import {
    DAILY_REPORT_SUBSCRIBE_ENPOINT,
    REPORT_COUNT_SUCCESS_ENDPOINT,
    COMPUTER_DATA_LIST_ENDPOINT,
    COUNT_ERROR_SUBSCRIBE_ENDPOINT,
    STATISTIC_SUBSCRIBE_REPORT_ENDPOINT,
    RATIO_SUBSCRIBE_AVG_ENDPOINT,
    
    // COMMENT
    COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT,
    COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT,
    COMMENT_STATISTIC_ACCOUNT_STATUS_ENDPOINT,
    COMMENT_STATISTIC_BY_STATUS_ORDER_ENDPOINT,
    COMMENT_STATISTIC_COMMENT_BY_DAY_ENDPOINT,
    COMMENT_STATISTIC_COMPUTER_THREAD_ENDPOINT,
    COMMENT_STATISTIC_RUNNING_COMPUTER_ENDPOINT,
    COMMENT_STATISTIC_TASK_OF_TOOL_ENDPOINT,
    COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT,
    COMMENT_STATISTIC_ORDER_AMOUNT_ENDPOINT,
    COMMENT_STATISTIC_PERFORMANCE_ENDPOINT,
    COMMENT_STATISTIC_RUNNING_USER_ORDER_ENDPOINT,
    COMMENT_STATISTIC_USER_POINT_ENDPOINT,
    COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT,

    // Validate youtube link 
    VALIDATE_YOUTUBE_VIDEO_COMMENT_ENDPOINT,
    VALIDATE_YOUTUBE_VIDEO_LIKE_ENDPOINT,
    VALIDATE_YOUTUBE_VIDEO_SUBSCRIBE_ENDPOINT,

    // LIKE
    LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT,
    LIKE_STATISTIC_LIKE_BY_DAY_ENDPOINT,
    LIKE_STATISTIC_COMPUTER_THREAD_ENDPOINT,
    LIKE_STATISTIC_RUNNING_COMPUTER_ENDPOINT,
    LIKE_STATISTIC_TASK_OF_TOOL_ENDPOINT,
    LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT,
    LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT,
    LIKE_STATISTIC_ACCOUNT_STATUS_ENDPOINT,
    LIKE_STATISTIC_BY_STATUS_ORDER_ENDPOINT,
    LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT,
    LIKE_STATISTIC_ORDER_AMOUNT_ENDPOINT,
    LIKE_STATISTIC_PERFORMANCE_ENDPOINT,
    LIKE_STATISTIC_RUNNING_USER_ORDER_ENDPOINT,
    LIKE_STATISTIC_USER_POINT_ENDPOINT,

} from './endpoints';
import ApiFactory from '../ApiFactory';

const GeneralReportAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

GeneralReportAPI.createEntities([
    { name: DAILY_REPORT_SUBSCRIBE_ENPOINT },
    { name: REPORT_COUNT_SUCCESS_ENDPOINT },
    { name: COMPUTER_DATA_LIST_ENDPOINT },
    { name: COUNT_ERROR_SUBSCRIBE_ENDPOINT },
    { name: STATISTIC_SUBSCRIBE_REPORT_ENDPOINT },
    { name: RATIO_SUBSCRIBE_AVG_ENDPOINT },

    { name: COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT },
    { name: COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT },
    { name: COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT },
    { name: COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT },
    { name: COMMENT_STATISTIC_ACCOUNT_STATUS_ENDPOINT },
    { name: COMMENT_STATISTIC_BY_STATUS_ORDER_ENDPOINT },
    { name: COMMENT_STATISTIC_COMMENT_BY_DAY_ENDPOINT },
    { name: COMMENT_STATISTIC_COMPUTER_THREAD_ENDPOINT },
    { name: COMMENT_STATISTIC_RUNNING_COMPUTER_ENDPOINT },
    { name: COMMENT_STATISTIC_TASK_OF_TOOL_ENDPOINT },
    { name: COMMENT_STATISTIC_ORDER_AMOUNT_ENDPOINT },
    { name: COMMENT_STATISTIC_PERFORMANCE_ENDPOINT },
    { name: COMMENT_STATISTIC_RUNNING_USER_ORDER_ENDPOINT },
    { name: COMMENT_STATISTIC_USER_POINT_ENDPOINT },

    { name: VALIDATE_YOUTUBE_VIDEO_COMMENT_ENDPOINT },
    { name: VALIDATE_YOUTUBE_VIDEO_LIKE_ENDPOINT },
    { name: VALIDATE_YOUTUBE_VIDEO_SUBSCRIBE_ENDPOINT },

    { name: LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT },
    { name: LIKE_STATISTIC_LIKE_BY_DAY_ENDPOINT },
    { name: LIKE_STATISTIC_COMPUTER_THREAD_ENDPOINT },
    { name: LIKE_STATISTIC_RUNNING_COMPUTER_ENDPOINT },
    { name: LIKE_STATISTIC_TASK_OF_TOOL_ENDPOINT },
    { name: LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT },
    { name: LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT },
    { name: LIKE_STATISTIC_ACCOUNT_STATUS_ENDPOINT },
    { name: LIKE_STATISTIC_BY_STATUS_ORDER_ENDPOINT },
    { name: LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT },
    { name: LIKE_STATISTIC_ORDER_AMOUNT_ENDPOINT },
    { name: LIKE_STATISTIC_PERFORMANCE_ENDPOINT },
    { name: LIKE_STATISTIC_RUNNING_USER_ORDER_ENDPOINT },
    { name: LIKE_STATISTIC_USER_POINT_ENDPOINT },

]);

// SUBSCRIBERS
const getDailyReportSubscribeAPI = (data) => GeneralReportAPI.createBasicCRUDEndpoints({ name: DAILY_REPORT_SUBSCRIBE_ENPOINT }).get(data);
const countSuccessSubscribeAPI = () => GeneralReportAPI.createBasicCRUDEndpoints({ name: REPORT_COUNT_SUCCESS_ENDPOINT }).get();

const fetchComputerDataListAPI = () => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMPUTER_DATA_LIST_ENDPOINT }).get();

const getStatisticSubscribeReportAPI = () => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_SUBSCRIBE_REPORT_ENDPOINT }).get();
const countErrorSubscribeAPI = () => GeneralReportAPI.createBasicCRUDEndpoints({ name: COUNT_ERROR_SUBSCRIBE_ENDPOINT }).get();
const ratioSubscribeAverageAPI = () => GeneralReportAPI.createBasicCRUDEndpoints({ name: RATIO_SUBSCRIBE_AVG_ENDPOINT }).get();

// COMMENTS
const commentStatisticCommentByOrderReportAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT }).get(query);
const commentStatisticTaskSuccessInMinutesAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT }).get(query);
const commentStatisticTaskDurationInMinutesAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT }).get(query);
const commentStatisticAccountOnComputerAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT }).get(query);
const commentStatisticAccountStatusAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_ACCOUNT_STATUS_ENDPOINT }).get(query);
const commentStatisticByStatusOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_ACCOUNT_STATUS_ENDPOINT }).get(query);
const commentStatisticCommentByDayAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_COMMENT_BY_DAY_ENDPOINT }).get(query);
const commentStatisticComputerThreadAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_COMPUTER_THREAD_ENDPOINT }).get(query);
const commentStatisticRunningComputerAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_RUNNING_COMPUTER_ENDPOINT }).get(query);
const commentStatisticTaskOfToolAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_TASK_OF_TOOL_ENDPOINT }).get(query);
const commentStatisticOrderAmountAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_ORDER_AMOUNT_ENDPOINT }).get(query);
const commentStatisticPerformanceAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_PERFORMANCE_ENDPOINT }).get(query);
const commentStatisticRunningUserOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_RUNNING_USER_ORDER_ENDPOINT }).get(query);
const commentStatisticUserPointAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_USER_POINT_ENDPOINT }).get(query);


const validateYoutubeLinkCommentVideoAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VALIDATE_YOUTUBE_VIDEO_COMMENT_ENDPOINT }).get(query);
const validateYoutubeLinkLikeVideoAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VALIDATE_YOUTUBE_VIDEO_LIKE_ENDPOINT }).get(query);
const validateYoutubeLinkSubscribeVideoAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VALIDATE_YOUTUBE_VIDEO_SUBSCRIBE_ENDPOINT }).get(query);

const likeStatisticCommentByOrderReportAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT }).get(query);
const likeStatisticTaskSuccessInMinutesAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT }).get(query);
const likeStatisticTaskDurationInMinutesAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT }).get(query);
const likeStatisticAccountOnComputerAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT }).get(query);
const likeStatisticAccountStatusAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_ACCOUNT_STATUS_ENDPOINT }).get(query);
const likeStatisticByStatusOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_ACCOUNT_STATUS_ENDPOINT }).get(query);
const likeStatisticCommentByDayAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_LIKE_BY_DAY_ENDPOINT }).get(query);
const likeStatisticComputerThreadAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_COMPUTER_THREAD_ENDPOINT }).get(query);
const likeStatisticRunningComputerAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_RUNNING_COMPUTER_ENDPOINT }).get(query);
const likeStatisticTaskOfToolAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_TASK_OF_TOOL_ENDPOINT }).get(query);
const likeStatisticOrderAmountAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_ORDER_AMOUNT_ENDPOINT }).get(query);
const likeStatisticPerformanceAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_PERFORMANCE_ENDPOINT }).get(query);
const likeStatisticRunningUserOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_RUNNING_USER_ORDER_ENDPOINT }).get(query);
const likeStatisticUserPointAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_USER_POINT_ENDPOINT }).get(query);

export {
    getDailyReportSubscribeAPI,
    countSuccessSubscribeAPI,
    fetchComputerDataListAPI,
    getStatisticSubscribeReportAPI,
    countErrorSubscribeAPI,
    ratioSubscribeAverageAPI,

    commentStatisticCommentByOrderReportAPI,
    commentStatisticTaskSuccessInMinutesAPI,
    commentStatisticAccountOnComputerAPI,
    commentStatisticAccountStatusAPI,
    commentStatisticByStatusOrderAPI,
    commentStatisticCommentByDayAPI,
    commentStatisticComputerThreadAPI,
    commentStatisticRunningComputerAPI,
    commentStatisticTaskOfToolAPI,
    commentStatisticOrderAmountAPI,
    commentStatisticPerformanceAPI,
    commentStatisticRunningUserOrderAPI,
    commentStatisticUserPointAPI,
    commentStatisticTaskDurationInMinutesAPI,

    validateYoutubeLinkCommentVideoAPI,
    validateYoutubeLinkLikeVideoAPI,
    validateYoutubeLinkSubscribeVideoAPI,

    likeStatisticCommentByOrderReportAPI,
    likeStatisticTaskSuccessInMinutesAPI,
    likeStatisticAccountOnComputerAPI,
    likeStatisticAccountStatusAPI,
    likeStatisticByStatusOrderAPI,
    likeStatisticCommentByDayAPI,
    likeStatisticComputerThreadAPI,
    likeStatisticRunningComputerAPI,
    likeStatisticTaskOfToolAPI,
    likeStatisticOrderAmountAPI,
    likeStatisticPerformanceAPI,
    likeStatisticRunningUserOrderAPI,
    likeStatisticUserPointAPI,
    likeStatisticTaskDurationInMinutesAPI,
}
