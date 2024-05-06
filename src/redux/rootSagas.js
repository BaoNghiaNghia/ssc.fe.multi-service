import { all } from 'redux-saga/effects';

import { 
    fetchUserProfileSaga,
    loginWatcherSaga,
    logoutWatcherSaga
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
    changeOrderHistoryTypeWatcherSaga,
    fetchAdminSettingWatcherSaga,
    fetchListOrderSubscribeWatcherSaga,
    fetchOrderHistoryWatcherSaga,
    fetchServicePackageListWatcherSaga,
    fetchUserListWatcherSaga,
    setRangeDateOrderHistoryWatcherSaga
} from './buffSubscribe/sagas';

import {
    fetchBlackListChannelWatcherSaga
} from './blacklist/sagas';

import {
    fetchUserListMemberWatcherSaga
} from './member/sagas';

import { 
    createServicesWatcherSaga,
    fetchListServicesWatcherSaga
} from './serviceSettings/sagas';

export default function* rootSaga() {
    return yield all([
        loginWatcherSaga(),
        logoutWatcherSaga(),
        fetchUserProfileSaga(),
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
        changeServiceTypeWatcherSaga(),
        fetchOrderHistoryWatcherSaga(),
        setRangeDateOrderHistoryWatcherSaga(),
        changeOrderHistoryTypeWatcherSaga(),
        fetchListServicesWatcherSaga(),
        createServicesWatcherSaga()
    ]);
}