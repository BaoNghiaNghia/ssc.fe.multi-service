/* eslint-disable */
import {
    DAILY_REPORT_SUBSCRIBE_ENPOINT,
    REPORT_COUNT_SUCCESS_ENDPOINT,
    COUNT_PROFIT_TODAY_ENDPOINT,
    SUBSCRIBE_POINT_EVERYDAY_ENDPOINT,
    COMPUTER_DATA_LIST_ENDPOINT,
    COUNT_ERROR_SUBSCRIBE_ENDPOINT,
    STATISTIC_SUBSCRIBE_REPORT_ENDPOINT,
    RATIO_SUBSCRIBE_AVG_ENDPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const AuthenticateApi = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

AuthenticateApi.createEntities([
    { name: DAILY_REPORT_SUBSCRIBE_ENPOINT },
    { name: REPORT_COUNT_SUCCESS_ENDPOINT },
    { name: COUNT_PROFIT_TODAY_ENDPOINT },
    { name: SUBSCRIBE_POINT_EVERYDAY_ENDPOINT },
    { name: COMPUTER_DATA_LIST_ENDPOINT },
    { name: COUNT_ERROR_SUBSCRIBE_ENDPOINT },
    { name: STATISTIC_SUBSCRIBE_REPORT_ENDPOINT },
    { name: RATIO_SUBSCRIBE_AVG_ENDPOINT },
]);

const getDailyReportSubscribe = (data) => AuthenticateApi.createBasicCRUDEndpoints({ name: DAILY_REPORT_SUBSCRIBE_ENPOINT }).get(data);
const countSuccessSubscribe = () => AuthenticateApi.createBasicCRUDEndpoints({ name: REPORT_COUNT_SUCCESS_ENDPOINT }).get();
const countProfitDataToday = () => AuthenticateApi.createBasicCRUDEndpoints({ name: COUNT_PROFIT_TODAY_ENDPOINT}).get();
const getSubscribeWithPointEveryday = (query) => AuthenticateApi.createBasicCRUDEndpoints({ name: SUBSCRIBE_POINT_EVERYDAY_ENDPOINT }).get(query);

const fetchComputerDataList = () => AuthenticateApi.createBasicCRUDEndpoints({ name: COMPUTER_DATA_LIST_ENDPOINT }).get();

const getStatisticSubscribeReport = () => AuthenticateApi.createBasicCRUDEndpoints({ name: STATISTIC_SUBSCRIBE_REPORT_ENDPOINT }).get();
const countErrorSubscribe = () => AuthenticateApi.createBasicCRUDEndpoints({ name: COUNT_ERROR_SUBSCRIBE_ENDPOINT }).get();
const ratioSubscribeAverage = () => AuthenticateApi.createBasicCRUDEndpoints({ name: RATIO_SUBSCRIBE_AVG_ENDPOINT }).get();

export {
    getDailyReportSubscribe,
    countSuccessSubscribe,
    countProfitDataToday,
    getSubscribeWithPointEveryday,
    fetchComputerDataList,
    getStatisticSubscribeReport,
    countErrorSubscribe,
    ratioSubscribeAverage,
}
