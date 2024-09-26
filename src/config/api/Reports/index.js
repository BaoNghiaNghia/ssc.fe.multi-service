/* eslint-disable */
import {
    DAILY_REPORT_SUBSCRIBE_ENDPOINT,
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
    COMMENT_STATISTIC_TOTAL_ORDER_ENDPOINT,
    COMMENT_STATISTIC_ORDER_BY_DAYS_ENDPOINT,

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
    LIKE_STATISTIC_TOTAL_ORDER_ENDPOINT,
    LIKE_STATISTIC_ORDER_BY_DAYS_ENDPOINT,

    // SUBSCRIBE
    SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT,
    SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_ENDPOINT,
    SUBSCRIBE_STATISTIC_COMPUTER_THREAD_ENDPOINT,
    SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_ENDPOINT,
    SUBSCRIBE_STATISTIC_TASK_OF_TOOL_ENDPOINT,
    SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT,
    SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT,
    SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_ENDPOINT,
    SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_ENDPOINT,
    SUBSCRIBE_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT,
    SUBSCRIBE_STATISTIC_ORDER_AMOUNT_ENDPOINT,
    SUBSCRIBE_STATISTIC_PERFORMANCE_ENDPOINT,
    SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_ENDPOINT,
    SUBSCRIBE_STATISTIC_USER_POINT_ENDPOINT,
    SUBSCRIBE_STATISTIC_TOTAL_ORDER_ENDPOINT,
    SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_ENDPOINT,

    // VIEW
    VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT,
    VIEW_STATISTIC_VIEW_BY_DAY_ENDPOINT,
    VIEW_STATISTIC_COMPUTER_THREAD_ENDPOINT,
    VIEW_STATISTIC_RUNNING_COMPUTER_ENDPOINT,
    VIEW_STATISTIC_TASK_OF_TOOL_ENDPOINT,
    VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT,
    VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT,
    VIEW_STATISTIC_ACCOUNT_STATUS_ENDPOINT,
    VIEW_STATISTIC_BY_STATUS_ORDER_ENDPOINT,
    VIEW_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT,
    VIEW_STATISTIC_ORDER_AMOUNT_ENDPOINT,
    VIEW_STATISTIC_PERFORMANCE_ENDPOINT,
    VIEW_STATISTIC_RUNNING_USER_ORDER_ENDPOINT,
    VIEW_STATISTIC_USER_POINT_ENDPOINT,
    VIEW_STATISTIC_TOTAL_ORDER_ENDPOINT,
    VIEW_STATISTIC_ORDER_BY_DAYS_ENDPOINT,


    // Validate youtube link 
    VALIDATE_YOUTUBE_VIDEO_VIEW_ENDPOINT,
    VALIDATE_YOUTUBE_VIDEO_COMMENT_ENDPOINT,
    VALIDATE_YOUTUBE_VIDEO_LIKE_ENDPOINT,
    VALIDATE_YOUTUBE_VIDEO_SUBSCRIBE_ENDPOINT,

} from './endpoints';
import ApiFactory from '../ApiFactory';

const GeneralReportAPI = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

GeneralReportAPI.createEntities([
    { name: DAILY_REPORT_SUBSCRIBE_ENDPOINT },
    { name: REPORT_COUNT_SUCCESS_ENDPOINT },
    { name: COMPUTER_DATA_LIST_ENDPOINT },
    { name: COUNT_ERROR_SUBSCRIBE_ENDPOINT },
    { name: STATISTIC_SUBSCRIBE_REPORT_ENDPOINT },
    { name: RATIO_SUBSCRIBE_AVG_ENDPOINT },

    // Comment
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
    { name: COMMENT_STATISTIC_TOTAL_ORDER_ENDPOINT },
    { name: COMMENT_STATISTIC_ORDER_BY_DAYS_ENDPOINT },

    // Like
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
    { name: LIKE_STATISTIC_TOTAL_ORDER_ENDPOINT },
    { name: LIKE_STATISTIC_ORDER_BY_DAYS_ENDPOINT },

    // Subscribe
    { name: SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_COMPUTER_THREAD_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_TASK_OF_TOOL_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_ORDER_AMOUNT_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_PERFORMANCE_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_USER_POINT_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_TOTAL_ORDER_ENDPOINT },
    { name: SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_ENDPOINT },

    // View
    { name: VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT },
    { name: VIEW_STATISTIC_VIEW_BY_DAY_ENDPOINT },
    { name: VIEW_STATISTIC_COMPUTER_THREAD_ENDPOINT },
    { name: VIEW_STATISTIC_RUNNING_COMPUTER_ENDPOINT },
    { name: VIEW_STATISTIC_TASK_OF_TOOL_ENDPOINT },
    { name: VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT },
    { name: VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT },
    { name: VIEW_STATISTIC_ACCOUNT_STATUS_ENDPOINT },
    { name: VIEW_STATISTIC_BY_STATUS_ORDER_ENDPOINT },
    { name: VIEW_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT },
    { name: VIEW_STATISTIC_ORDER_AMOUNT_ENDPOINT },
    { name: VIEW_STATISTIC_PERFORMANCE_ENDPOINT },
    { name: VIEW_STATISTIC_RUNNING_USER_ORDER_ENDPOINT },
    { name: VIEW_STATISTIC_USER_POINT_ENDPOINT },
    { name: VIEW_STATISTIC_TOTAL_ORDER_ENDPOINT },
    { name: VIEW_STATISTIC_ORDER_BY_DAYS_ENDPOINT },
    

    // Validate youtube video link
    { name: VALIDATE_YOUTUBE_VIDEO_COMMENT_ENDPOINT },
    { name: VALIDATE_YOUTUBE_VIDEO_LIKE_ENDPOINT },
    { name: VALIDATE_YOUTUBE_VIDEO_SUBSCRIBE_ENDPOINT },
    { name: VALIDATE_YOUTUBE_VIDEO_VIEW_ENDPOINT },
]);

// SUBSCRIBERS
const getDailyReportSubscribeAPI = (data) => GeneralReportAPI.createBasicCRUDEndpoints({ name: DAILY_REPORT_SUBSCRIBE_ENDPOINT }).get(data);
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
const commentStatisticTotalOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_TOTAL_ORDER_ENDPOINT }).get(query);
const commentStatisticOrderByDaysAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMMENT_STATISTIC_ORDER_BY_DAYS_ENDPOINT }).get(query);


// Like
// const likeStatisticCommentByOrderReportAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT }).get(query);
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
const likeStatisticTotalOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_TOTAL_ORDER_ENDPOINT }).get(query);
const likeStatisticOrderByDaysAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: LIKE_STATISTIC_ORDER_BY_DAYS_ENDPOINT }).get(query);


// Subscribe
// const subscribeStatisticCommentByOrderReportAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT }).get(query);
const subscribeStatisticTaskSuccessInMinutesAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT }).get(query);
const subscribeStatisticTaskDurationInMinutesAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT }).get(query);
const subscribeStatisticAccountOnComputerAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT }).get(query);
const subscribeStatisticAccountStatusAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_ENDPOINT }).get(query);
const subscribeStatisticByStatusOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_ENDPOINT }).get(query);
const subscribeStatisticCommentByDayAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_ENDPOINT }).get(query);
const subscribeStatisticComputerThreadAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_COMPUTER_THREAD_ENDPOINT }).get(query);
const subscribeStatisticRunningComputerAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_ENDPOINT }).get(query);
const subscribeStatisticTaskOfToolAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_TASK_OF_TOOL_ENDPOINT }).get(query);
const subscribeStatisticOrderAmountAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_ORDER_AMOUNT_ENDPOINT }).get(query);
const subscribeStatisticPerformanceAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_PERFORMANCE_ENDPOINT }).get(query);
const subscribeStatisticRunningUserOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_ENDPOINT }).get(query);
const subscribeStatisticUserPointAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_USER_POINT_ENDPOINT }).get(query);
const subscribeStatisticTotalOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_TOTAL_ORDER_ENDPOINT }).get(query);
const subscribeStatisticOrderByDaysAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_ENDPOINT }).get(query);

// View
// const viewStatisticCommentByOrderReportAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT }).get(query);
const viewStatisticTaskSuccessInMinutesAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT }).get(query);
const viewStatisticTaskDurationInMinutesAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT }).get(query);
const viewStatisticAccountOnComputerAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT }).get(query);
const viewStatisticAccountStatusAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_ACCOUNT_STATUS_ENDPOINT }).get(query);
const viewStatisticByStatusOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_ACCOUNT_STATUS_ENDPOINT }).get(query);
const viewStatisticCommentByDayAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_VIEW_BY_DAY_ENDPOINT }).get(query);
const viewStatisticComputerThreadAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_COMPUTER_THREAD_ENDPOINT }).get(query);
const viewStatisticRunningComputerAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_RUNNING_COMPUTER_ENDPOINT }).get(query);
const viewStatisticTaskOfToolAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_TASK_OF_TOOL_ENDPOINT }).get(query);
const viewStatisticOrderAmountAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_ORDER_AMOUNT_ENDPOINT }).get(query);
const viewStatisticPerformanceAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_PERFORMANCE_ENDPOINT }).get(query);
const viewStatisticRunningUserOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_RUNNING_USER_ORDER_ENDPOINT }).get(query);
const viewStatisticUserPointAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_USER_POINT_ENDPOINT }).get(query);
const viewStatisticTotalOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_TOTAL_ORDER_ENDPOINT }).get(query);
const viewStatisticOrderByDaysAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VIEW_STATISTIC_ORDER_BY_DAYS_ENDPOINT }).get(query);


// Validate Youtube link
const validateYoutubeLinkCommentVideoAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VALIDATE_YOUTUBE_VIDEO_COMMENT_ENDPOINT }).get(query);
const validateYoutubeLinkLikeVideoAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VALIDATE_YOUTUBE_VIDEO_LIKE_ENDPOINT }).get(query);
const validateYoutubeLinkSubscribeVideoAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VALIDATE_YOUTUBE_VIDEO_SUBSCRIBE_ENDPOINT }).get(query);
const validateYoutubeLinkViewVideoAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VALIDATE_YOUTUBE_VIDEO_VIEW_ENDPOINT }).get(query);


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
    commentStatisticTotalOrderAPI,
    commentStatisticOrderByDaysAPI,

    validateYoutubeLinkCommentVideoAPI,
    validateYoutubeLinkLikeVideoAPI,
    validateYoutubeLinkSubscribeVideoAPI,

    // likeStatisticCommentByOrderReportAPI,
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
    likeStatisticTotalOrderAPI,
    likeStatisticOrderByDaysAPI,

    subscribeStatisticTaskSuccessInMinutesAPI,
    subscribeStatisticTaskDurationInMinutesAPI,
    subscribeStatisticAccountOnComputerAPI,
    subscribeStatisticAccountStatusAPI,
    subscribeStatisticByStatusOrderAPI,
    subscribeStatisticCommentByDayAPI,
    subscribeStatisticComputerThreadAPI,
    subscribeStatisticRunningComputerAPI,
    subscribeStatisticTaskOfToolAPI,
    subscribeStatisticOrderAmountAPI,
    subscribeStatisticPerformanceAPI,
    subscribeStatisticRunningUserOrderAPI,
    subscribeStatisticUserPointAPI,
    subscribeStatisticTotalOrderAPI,
    subscribeStatisticOrderByDaysAPI,

    viewStatisticTaskSuccessInMinutesAPI,
    viewStatisticTaskDurationInMinutesAPI,
    viewStatisticAccountOnComputerAPI,
    viewStatisticAccountStatusAPI,
    viewStatisticByStatusOrderAPI,
    viewStatisticCommentByDayAPI,
    viewStatisticComputerThreadAPI,
    viewStatisticRunningComputerAPI,
    viewStatisticTaskOfToolAPI,
    viewStatisticOrderAmountAPI,
    viewStatisticPerformanceAPI,
    viewStatisticRunningUserOrderAPI,
    viewStatisticUserPointAPI,
    viewStatisticTotalOrderAPI,
    viewStatisticOrderByDaysAPI,


    validateYoutubeLinkViewVideoAPI
}
