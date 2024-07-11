import { all } from 'redux-saga/effects';

import { 
    fetchUserProfileSaga,
    loginWatcherSaga,
    logoutWatcherSaga,
    registerReferralWatcherSaga
} from './authentication/sagas';

import {
    setRangeDateFilterWatcherSaga,
    changeServiceTypeWatcherSaga,
    commentStatisticsByOrderStatusReportWatcherSaga,
    toggleStateModalCreateOrderWatcherSaga,
    commentStatisticTaskSuccessInMinuteWatcherSaga,
    commentStatisticCommentByDayWatcherSaga,
    commentStatisticComputerThreadWatcherSaga,
    commentStatisticTaskDurationInMinuteWatcherSaga,
    commentStatisticOrderAmountWatcherSaga,
    commentStatisticPerformanceCommentWatcherSaga,
    commentStatisticAccountStatusCommentWatcherSaga,
    validateYoutubeVideoLinkWatcherSaga,
    commentStatisticAccountOnComputerWatcherSaga,
    commentStatisticByStatusOrderWatcherSaga,
    commentStatisticRunningComputerWatcherSaga,
    commentStatisticTaskOfToolWatcherSaga,
    commentStatisticRunningUserOrderWatcherSaga,
    commentStatisticUserPointWatcherSaga,
    likeStatisticCommentByDayWatcherSaga,
    likeStatisticComputerThreadWatcherSaga,
    likeStatisticTaskDurationInMinuteWatcherSaga,
    likeStatisticTaskSuccessInMinuteWatcherSaga,
    likeStatisticOrderAmountWatcherSaga,
    likeStatisticPerformanceCommentWatcherSaga,
    likeStatisticAccountStatusCommentWatcherSaga,
    likeStatisticsByOrderStatusReportWatcherSaga,
    likeStatisticAccountOnComputerWatcherSaga,
    likeStatisticByStatusOrderWatcherSaga,
    likeStatisticRunningComputerWatcherSaga,
    likeStatisticTaskOfToolWatcherSaga,
    likeStatisticRunningUserOrderWatcherSaga,
    likeStatisticUserPointWatcherSaga
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
    createGoogleKeyWatcherSaga,
    createServicesWatcherSaga,
    deleteGoogleKeyWatcherSaga,
    detailGoogleKeyWatcherSaga,
    fetchListAllGoogleKeyWatcherSaga,
    fetchListServicesWatcherSaga,
    fetchListSettingsWatcherSaga,
    modalDetailServiceWatcherSaga,
    updateGoogleKeyWatcherSaga,
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
    detailComputerCommentWatcherSaga,
    fetchWarrantyCommentOrderWatcherSaga,
    activeWarrantyOrderWatcherSaga,
    refundhWarrantyOrderWatcherSaga,
    setRangeDateWarrantyFilterWatcherSaga,
    deleteComputerCommentWatcherSaga
} from './buffComment/sagas';

import {
    fetchListOrderLikeWatcherSaga,
    detailOrderLikeWatcherSaga,
    createOrderLikeWatcherSaga,
    updateOrderLikeWatcherSaga,
    listComputerRunLikeWatcherSaga,
    updateManyOrderLikeWatcherSaga,
    updateManyComputerLikeWatcherSaga,
    updateOneComputerLikeWatcherSaga,
    detailComputerLikeWatcherSaga,
    fetchWarrantyLikeOrderWatcherSaga,
    activeWarrantyLikeOrderWatcherSaga,
    refundhWarrantyLikeOrderWatcherSaga,
    deleteComputerLikeWatcherSaga
} from './buffLike/sagas';

import {
    createDomainWatcherSaga,
    deleteDomainWatcherSaga,
    detailDomainWatcherSaga,
    getListProxyInDomainWatcherSaga,
    listGeneralDomainWatcherSaga,
    patchProxyWatcherSaga
} from './proxy/sagas'

export default function* rootSaga() {
    return yield all([
        loginWatcherSaga(),
        logoutWatcherSaga(),
        fetchUserProfileSaga(),
        setRangeDateFilterWatcherSaga(),
        fetchComputerDataListWatcherSaga(),
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
        commentStatisticsByOrderStatusReportWatcherSaga(),
        toggleStateModalCreateOrderWatcherSaga(),
        generateApiKeyMemberWatcherSaga(),
        registerReferralWatcherSaga(),
        commentStatisticTaskSuccessInMinuteWatcherSaga(),
        commentStatisticCommentByDayWatcherSaga(),
        commentStatisticComputerThreadWatcherSaga(),
        patchProxyWatcherSaga(),
        fetchWarrantyCommentOrderWatcherSaga(),
        activeWarrantyOrderWatcherSaga(),
        refundhWarrantyOrderWatcherSaga(),
        setRangeDateWarrantyFilterWatcherSaga(),
        commentStatisticTaskDurationInMinuteWatcherSaga(),
        commentStatisticOrderAmountWatcherSaga(),
        commentStatisticPerformanceCommentWatcherSaga(),
        commentStatisticAccountStatusCommentWatcherSaga(),
        commentStatisticAccountOnComputerWatcherSaga(),
        commentStatisticByStatusOrderWatcherSaga(),
        commentStatisticRunningComputerWatcherSaga(),
        commentStatisticTaskOfToolWatcherSaga(),
        commentStatisticRunningUserOrderWatcherSaga(),
        commentStatisticUserPointWatcherSaga(),

        validateYoutubeVideoLinkWatcherSaga(),

        deleteComputerCommentWatcherSaga(),
        deleteGoogleKeyWatcherSaga(),
        updateGoogleKeyWatcherSaga(),
        detailGoogleKeyWatcherSaga(),
        createGoogleKeyWatcherSaga(),
        fetchListAllGoogleKeyWatcherSaga(),


        fetchListOrderLikeWatcherSaga(),
        detailOrderLikeWatcherSaga(),
        createOrderLikeWatcherSaga(),
        updateOrderLikeWatcherSaga(),
        listComputerRunLikeWatcherSaga(),
        updateManyOrderLikeWatcherSaga(),
        updateManyComputerLikeWatcherSaga(),
        updateOneComputerLikeWatcherSaga(),
        detailComputerLikeWatcherSaga(),
        fetchWarrantyLikeOrderWatcherSaga(),
        activeWarrantyLikeOrderWatcherSaga(),
        refundhWarrantyLikeOrderWatcherSaga(),
        deleteComputerLikeWatcherSaga(),

        likeStatisticCommentByDayWatcherSaga(),
        likeStatisticComputerThreadWatcherSaga(),
        likeStatisticTaskDurationInMinuteWatcherSaga(),
        likeStatisticTaskSuccessInMinuteWatcherSaga(),
        likeStatisticOrderAmountWatcherSaga(),
        likeStatisticPerformanceCommentWatcherSaga(),
        likeStatisticAccountStatusCommentWatcherSaga(),
        likeStatisticsByOrderStatusReportWatcherSaga(),
        likeStatisticAccountOnComputerWatcherSaga(),
        likeStatisticByStatusOrderWatcherSaga(),
        likeStatisticRunningComputerWatcherSaga(),
        likeStatisticTaskOfToolWatcherSaga(),
        likeStatisticRunningUserOrderWatcherSaga(),
        likeStatisticUserPointWatcherSaga(),
    ]);
}