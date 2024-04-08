/* eslint-disable */
import {
    DAILY_REPORT_SUBSCRIBE_ENPOINT
} from './endpoints';
import ApiFactory from '../ApiFactory';

const AuthenticateApi = new ApiFactory({ url: process.env.REACT_APP_API_ENDPOINT });

AuthenticateApi.createEntities([
    { name: DAILY_REPORT_SUBSCRIBE_ENPOINT },
]);

const getDailyReportSubscribe = (data) => AuthenticateApi.createBasicCRUDEndpoints({ name: DAILY_REPORT_SUBSCRIBE_ENPOINT }).get(data);

export {
    getDailyReportSubscribe,
}
