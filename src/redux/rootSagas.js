import { all } from 'redux-saga/effects';

import { 
    fetchUserProfileSaga,
    loginWatcherSaga,
    logoutWatcherSaga,
    registerReferralWatcherSaga
} from './authentication/sagas';

import {
    countProfitDataTodayWatcherSaga,
    countSuccessSubscribeWatcherSaga,
    resportSubscribeWatcherSaga,
    setRangeDateFilterWatcherSaga,
    fetchSubscribeWithPointEverydayWatcherSaga,
    countErrorSubscribeWatcherSaga,
    getStatisticsSubscribeReporWatcherSaga,
    changeServiceTypeWatcherSaga,
    getStatisticsByOrderStatusReportWatcherSaga,
    toggleStateModalCreateOrderWatcherSaga,
    statisticTaskSuccessInMinuteWatcherSaga,
    statisticCommentByDayWatcherSaga,
    statisticComputerThreadWatcherSaga
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
    setRangeDateOrderHistoryWatcherSaga
} from './buffSubscribe/sagas';

import {
    fetchBlackListChannelWatcherSaga
} from './blacklist/sagas';

import {
    fetchUserListMemberWatcherSaga,
    detailUserAdminMemberWatcherSaga,
    updateUserAdminMemberWatcherSaga,
    changeTableTypeMemberWatcherSaga,
    createTopupItemWatcherSaga,
    fetchTopupListMemberWatcherSaga,
    detailTopupItemWatcherSaga,
    confirmTopupItemWatcherSaga,
    getCreditHistoryMemberWatcherSaga,
    generateApiKeyMemberWatcherSaga
} from './member/sagas';

import { 
    changeTabTypeMemberWatcherSaga,
    createServicesWatcherSaga,
    fetchListServicesWatcherSaga,
    fetchListSettingsWatcherSaga,
    modalDetailServiceWatcherSaga,
    updateServicesWatcherSaga,
    updateSettingWatcherSaga
} from './serviceSettings/sagas';

import {
    fetchListOrderCommentWatcherSaga,
    detailOrderCommentWatcherSaga,
    commentInOrderCommentWatcherSaga,
    createOrderCommentWatcherSaga,
    updateOrderCommentWatcherSaga,
    listComputerRunCommentWatcherSaga,
    updateManyOrderCommentWatcherSaga,
    updateManyComputerCommentWatcherSaga,
    updateOneComputerCommentWatcherSaga,
    detailComputerCommentWatcherSaga
} from './buffComment/sagas';

import {
    createDomainWatcherSaga,
    deleteDomainWatcherSaga,
    detailDomainWatcherSaga,
    getListProxyInDomainWatcherSaga,
    listGeneralDomainWatcherSaga
} from './proxy/sagas'

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
        fetchBlackListChannelWatcherSaga(),
        fetchUserListMemberWatcherSaga(),
        changeServiceTypeWatcherSaga(),
        fetchOrderHistoryWatcherSaga(),
        setRangeDateOrderHistoryWatcherSaga(),
        changeOrderHistoryTypeWatcherSaga(),
        fetchListServicesWatcherSaga(),
        createServicesWatcherSaga(),
        updateServicesWatcherSaga(),
        modalDetailServiceWatcherSaga(),
        detailUserAdminMemberWatcherSaga(),
        updateUserAdminMemberWatcherSaga(),
        changeTableTypeMemberWatcherSaga(),
        createTopupItemWatcherSaga(),
        fetchTopupListMemberWatcherSaga(),
        detailTopupItemWatcherSaga(),
        confirmTopupItemWatcherSaga(),
        fetchListOrderCommentWatcherSaga(),
        detailOrderCommentWatcherSaga(),
        commentInOrderCommentWatcherSaga(),
        createDomainWatcherSaga(),
        deleteDomainWatcherSaga(),
        getListProxyInDomainWatcherSaga(),
        listGeneralDomainWatcherSaga(),
        detailDomainWatcherSaga(),
        createOrderCommentWatcherSaga(),
        updateOrderCommentWatcherSaga(),
        listComputerRunCommentWatcherSaga(),
        changeTabTypeMemberWatcherSaga(),
        fetchListSettingsWatcherSaga(),
        updateSettingWatcherSaga(),
        getCreditHistoryMemberWatcherSaga(),
        updateManyOrderCommentWatcherSaga(),
        updateManyComputerCommentWatcherSaga(),
        updateOneComputerCommentWatcherSaga(),
        detailComputerCommentWatcherSaga(),
        getStatisticsByOrderStatusReportWatcherSaga(),
        toggleStateModalCreateOrderWatcherSaga(),
        generateApiKeyMemberWatcherSaga(),
        registerReferralWatcherSaga(),
        statisticTaskSuccessInMinuteWatcherSaga(),
        statisticCommentByDayWatcherSaga(),
        statisticComputerThreadWatcherSaga()
    ]);
}