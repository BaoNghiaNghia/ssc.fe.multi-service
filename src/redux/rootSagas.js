import { all } from 'redux-saga/effects';
import { loginWatcherSaga, logoutWatcherSaga } from './authentication/sagas';
import {
    countProfitDataTodayWatcherSaga,
    countSuccessSubscribeWatcherSaga,
    resportSubscribeWatcherSaga,
    setRangeDateFilterWatcherSaga,
    fetchSubscribeWithPointEverydayWatcherSaga,
    countErrorSubscribeWatcherSaga,
    getStatisticsSubscribeReporWatcherSage
} from './reports/sagas';

import {
    fetchComputerDataListWatcherSaga
} from './servers/sagas';


export default function* rootSaga() {
    return yield all([
        loginWatcherSaga(),
        logoutWatcherSaga(),
        resportSubscribeWatcherSaga(),
        setRangeDateFilterWatcherSaga(),
        countSuccessSubscribeWatcherSaga(),
        countProfitDataTodayWatcherSaga(),
        fetchSubscribeWithPointEverydayWatcherSaga(),
        fetchComputerDataListWatcherSaga(),
        countErrorSubscribeWatcherSaga(),
        getStatisticsSubscribeReporWatcherSage()
    ]);
}