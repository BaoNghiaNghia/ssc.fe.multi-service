/* eslint-disable */
import {
    DAILY_REPORT_SUBSCRIBE_ENPOINT,
    REPORT_COUNT_SUCCESS_ENDPOINT,
    COMPUTER_DATA_LIST_ENDPOINT,
    COUNT_ERROR_SUBSCRIBE_ENDPOINT,
    STATISTIC_SUBSCRIBE_REPORT_ENDPOINT,
    RATIO_SUBSCRIBE_AVG_ENDPOINT,
    
    STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT,
    STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT,
    STATISTIC_ACCOUNT_STATUS_ENDPOINT,
    STATISTIC_BY_STATUS_ORDER_ENDPOINT,
    STATISTIC_COMMENT_BY_DAY_ENDPOINT,
    STATISTIC_COMPUTER_THREAD_ENDPOINT,
    STATISTIC_RUNNING_COMPUTER_ENDPOINT,
    STATISTIC_TASK_OF_TOOL_ENDPOINT,
    STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT,
    STATISTIC_ORDER_AMOUNT_ENDPOINT,
    STATISTIC_PERFORMANCE_ENDPOINT,
    STATISTIC_RUNNING_USER_ORDER_ENDPOINT,
    STATISTIC_USER_POINT_ENDPOINT,
    STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT,
    VALIDATE_YOUTUBE_VIDEO_COMMENT_ENDPOINT,
    VALIDATE_YOUTUBE_VIDEO_LIKE_ENDPOINT
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

    { name: STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT },
    { name: STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT },
    { name: STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT },
    { name: STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT },
    { name: STATISTIC_ACCOUNT_STATUS_ENDPOINT },
    { name: STATISTIC_BY_STATUS_ORDER_ENDPOINT },
    { name: STATISTIC_COMMENT_BY_DAY_ENDPOINT },
    { name: STATISTIC_COMPUTER_THREAD_ENDPOINT },
    { name: STATISTIC_RUNNING_COMPUTER_ENDPOINT },
    { name: STATISTIC_TASK_OF_TOOL_ENDPOINT },
    { name: STATISTIC_ORDER_AMOUNT_ENDPOINT },
    { name: STATISTIC_PERFORMANCE_ENDPOINT },
    { name: STATISTIC_RUNNING_USER_ORDER_ENDPOINT },
    { name: STATISTIC_USER_POINT_ENDPOINT },
    { name: VALIDATE_YOUTUBE_VIDEO_COMMENT_ENDPOINT },
    { name: VALIDATE_YOUTUBE_VIDEO_LIKE_ENDPOINT },
]);

// SUBSCRIBERS
const getDailyReportSubscribe = (data) => GeneralReportAPI.createBasicCRUDEndpoints({ name: DAILY_REPORT_SUBSCRIBE_ENPOINT }).get(data);
const countSuccessSubscribe = () => GeneralReportAPI.createBasicCRUDEndpoints({ name: REPORT_COUNT_SUCCESS_ENDPOINT }).get();

const fetchComputerDataList = () => GeneralReportAPI.createBasicCRUDEndpoints({ name: COMPUTER_DATA_LIST_ENDPOINT }).get();

const getStatisticSubscribeReport = () => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_SUBSCRIBE_REPORT_ENDPOINT }).get();
const countErrorSubscribe = () => GeneralReportAPI.createBasicCRUDEndpoints({ name: COUNT_ERROR_SUBSCRIBE_ENDPOINT }).get();
const ratioSubscribeAverage = () => GeneralReportAPI.createBasicCRUDEndpoints({ name: RATIO_SUBSCRIBE_AVG_ENDPOINT }).get();

// COMMENTS
const statisticCommentByOrderReport = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_COMMENT_BY_ORDER_REPORT_ENDPOINT }).get(query);
const statisticTaskSuccessInMinutesAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_TASK_SUCCESS_IN_MINUTE_ENDPOINT }).get(query);
const statisticTaskDurationInMinutesAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_TASK_DURATION_IN_MINUTE_ENDPOINT }).get(query);
const statisticAccountOnComputerAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_ACCOUNT_ON_COMPUTER_ENDPOINT }).get(query);
const statisticAccountStatusAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_ACCOUNT_STATUS_ENDPOINT }).get(query);
const statisticByStatusOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_ACCOUNT_STATUS_ENDPOINT }).get(query);
const statisticCommentByDayAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_COMMENT_BY_DAY_ENDPOINT }).get(query);
const statisticComputerThreadAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_COMPUTER_THREAD_ENDPOINT }).get(query);
const statisticRunningComputerAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_RUNNING_COMPUTER_ENDPOINT }).get(query);
const statisticTaskOfToolAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_TASK_OF_TOOL_ENDPOINT }).get(query);
const statisticOrderAmountAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_ORDER_AMOUNT_ENDPOINT }).get(query);
const statisticPerformanceAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_PERFORMANCE_ENDPOINT }).get(query);
const statisticRunningUserOrderAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_RUNNING_USER_ORDER_ENDPOINT }).get(query);
const statisticUserPointAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: STATISTIC_USER_POINT_ENDPOINT }).get(query);


const validateYoutubeLinkCommentVideoAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VALIDATE_YOUTUBE_VIDEO_COMMENT_ENDPOINT }).get(query);
const validateYoutubeLinkLikeVideoAPI = (query) => GeneralReportAPI.createBasicCRUDEndpoints({ name: VALIDATE_YOUTUBE_VIDEO_LIKE_ENDPOINT }).get(query);

export {
    getDailyReportSubscribe,
    countSuccessSubscribe,
    fetchComputerDataList,
    getStatisticSubscribeReport,
    countErrorSubscribe,
    ratioSubscribeAverage,
    statisticCommentByOrderReport,
    statisticTaskSuccessInMinutesAPI,
    statisticAccountOnComputerAPI,
    statisticAccountStatusAPI,
    statisticByStatusOrderAPI,
    statisticCommentByDayAPI,
    statisticComputerThreadAPI,
    statisticRunningComputerAPI,
    statisticTaskOfToolAPI,
    statisticOrderAmountAPI,
    statisticPerformanceAPI,
    statisticRunningUserOrderAPI,
    statisticUserPointAPI,
    statisticTaskDurationInMinutesAPI,
    validateYoutubeLinkCommentVideoAPI,
    validateYoutubeLinkLikeVideoAPI
}
