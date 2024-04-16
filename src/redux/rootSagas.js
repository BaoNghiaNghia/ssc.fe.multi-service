import { all } from 'redux-saga/effects';

import { 
    loginWatcherSaga, logoutWatcherSaga
} from './authentication/sagas';

import {
    countProfitDataTodayWatcherSaga,
    countSuccessSubscribeWatcherSaga,
    resportSubscribeWatcherSaga,
    setRangeDateFilterWatcherSaga,
    fetchSubscribeWithPointEverydayWatcherSaga,
    countErrorSubscribeWatcherSaga,
    getStatisticsSubscribeReporWatcherSaga,
    changeServiceTypeWatcherSaga
} from './reports/sagas';

import {
    fetchComputerDataListWatcherSaga
} from './servers/sagas';

import {
    fetchAdminSettingWatcherSaga,
    fetchListOrderSubscribeWatcherSaga,
    fetchServicePackageListWatcherSaga,
    fetchUserListWatcherSaga
} from './buffSubscribe/sagas';

import {
    fetchBlackListChannelWatcherSaga
} from './blacklist/sagas';

import {
    fetchUserListMemberWatcherSaga
} from './member/sagas';

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
        getStatisticsSubscribeReporWatcherSaga(),
        fetchAdminSettingWatcherSaga(),
        fetchListOrderSubscribeWatcherSaga(),
        fetchServicePackageListWatcherSaga(),
        fetchUserListWatcherSaga(),
        fetchBlackListChannelWatcherSaga(),
        fetchUserListMemberWatcherSaga(),
        changeServiceTypeWatcherSaga()
    ]);
}