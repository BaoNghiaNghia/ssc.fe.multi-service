import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
  countErrorSubscribe,
  countSuccessSubscribe,
  fetchComputerDataList,
  getDailyReportSubscribe,
  ratioSubscribeAverage,
  getStatisticSubscribeReport,
  statisticCommentByOrderReport,
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
  statisticTaskSuccessInMinutesAPI,
  statisticTaskDurationInMinutesAPI,
  statisticUserPointAPI
} from '../../config/apiFactory/Reports/index';
import { MESSSAGE_STATUS_CODE, SERVICE_TYPE } from '../../variables';

function* statisticComputerThreadFunc(params) {
  try {
    const response = yield call(statisticComputerThreadAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.statisticComputerThreadSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.statisticComputerThreadErr({ error: errorMessage || 'Fetch computer thread failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch computer thread failed');
    }
  } finally { /* empty */ }
}

function* statisticCommentByDayFunc(params) {
  try {
    const response = yield call(statisticCommentByDayAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.statisticCommentByDaySuccess(response?.data?.data?.reverse())
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.statisticCommentByDayErr({ error: errorMessage || 'Fetch comment by day failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch comment by day failed');
    }
  } finally { /* empty */ }
}

function* statisticPerformanceCommentFunc(params) {
  try {
    const response = yield call(statisticPerformanceAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      const reverseTempData = response?.data?.data?.reverse()
      yield put(
        actions.statisticPerformanceCommentSuccess(reverseTempData)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.statisticPerformanceCommentErr({ error: errorMessage || 'Fetch performance comment in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch performance comment in minute failed');
    }
  } finally { /* empty */ }
}

function* statisticAccountStatusCommentFunc(params) {
  try {
    const response = yield call(statisticAccountStatusAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.statisticAccountStatusCommentSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.statisticAccountStatusCommentErr({ error: errorMessage || 'Fetch account status in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch account status in minute failed');
    }
  } finally { /* empty */ }
}

function* statisticOrderAmountFunc(params) {
  try {
    const response = yield call(statisticOrderAmountAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      const reverseTempData = response?.data?.data?.reverse();
      yield put(
        actions.statisticOrderAmountSuccess(reverseTempData)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.statisticOrderAmountErr({ error: errorMessage || 'Fetch order amount in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch order amount in minute failed');
    }
  } finally { /* empty */ }
}

function* statisticTaskSuccessInMinuteFunc(params) {
  try {
    const response = yield call(statisticTaskSuccessInMinutesAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.statisticTaskSuccessInMinuteSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.statisticTaskSuccessInMinuteErr({ error: errorMessage || 'Fetch task success in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch task success in minute failed');
    }
  } finally { /* empty */ }
}

function* statisticTaskDurationInMinuteFunc(params) {
  try {
    const response = yield call(statisticTaskDurationInMinutesAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.statisticTaskDurationInMinuteSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.statisticTaskDurationInMinuteErr({ error: errorMessage || 'Fetch task duration in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch task duration in minute failed');
    }
  } finally { /* empty */ }
}

function* reportDataSubscribeFunc(params) {
  try {
    const response = yield call(getDailyReportSubscribe, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.reportSubscribeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.reportSubscribeErr({ error: errorMessage || 'Fetch daily subscribe failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch daily subscribe failed');
    }
  } finally { /* empty */ }
}

function* countSuccessSubscribeFunc() {
  try {
    const response = yield call(countSuccessSubscribe, {});
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.countSuccessSubscribeSuccess(response?.data?.data)
      );
    }

  } catch (err) {
    yield put(
      actions.countSuccessSubscribeErr({ error: err || 'Count subscribe failed' })
    );
  }
}

function* fetchComputerDataListFunc(params) {
  try {
    const response = yield call(fetchComputerDataList, {});
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.computerDataListSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.computerDataListErr({ error: err || 'Fetch Computer Data List failed' })
    );
  }
}

function* countErrorSubscribeFunc() {
  try {
    const response = yield call(countErrorSubscribe, {});
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.countErrorSubscribeSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.countErrorSubscribeErr({ error: err || 'Count error subscribe failed' })
    );
  }
}

function* statisticCommentByOrderReportFunc(params) {
  try {
    const response = yield call(statisticCommentByOrderReport, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.statisticCommentByOrderReportSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.statisticCommentByOrderReportErr({ error: err || 'Count error subscribe failed' })
    )
  }
}

function* getStatisticsSubscribeFunc() {
  try {
    const response = yield call(ratioSubscribeAverage, {});

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.getStatisticsSubscribeReportSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.getStatisticsSubscribeReportErr({ error: err || 'Count error subscribe failed' })
    )
  }
}
 
function* changeServiceTypeFunc(params) {
  try {
    yield put(
      actions.changeServiceTypeSuccess(params?.payload)
    );

    if (params?.payload === SERVICE_TYPE.COMMENT.title) {
      yield put(actions.statisticCommentByOrderReportBegin());
      yield put(actions.statisticTaskSuccessInMinuteBegin());
      yield put(actions.statisticTaskDurationInMinuteBegin());
    }
    if (params?.payload === SERVICE_TYPE.LIKE.title) {
      console.log('--- THAY ĐỔI STATISTIC LIKE ---')
    }
    if (params?.payload === SERVICE_TYPE.SUBSCRIBE.title) {
      console.log('--- THAY ĐỔI STATISTIC SUBSCRIBE ---')
    }
  } catch (err) {
    yield put(
      actions.changeServiceTypeErr({ error: err || 'Count error subscribe failed' })
    );
  }
}

function* toggleStateModalCreateOrderFunc(params) {
  try {
    yield put(
      actions.toggleModalCreateOrderSuccess(!params?.payload)
    );
  } catch (err) {
    yield put(
      actions.toggleModalCreateOrderErr({ error: err || 'Toggle modal create order failed' })
    );
  }
} 

function* setRangeDateFilterFunc(params) {
  try {
    yield put(
      actions.setRangeDateFilterSuccess(params?.payload)
    );

    const initialFilter = {
      start_date: `${params?.payload?.from  } 00:00:00`,
      end_date: `${params?.payload?.to  } 23:59:59`,
      status: 1
    };

    if (params?.payload?.typeService === SERVICE_TYPE.SUBSCRIBE.title) {
      yield put(actions.reportSubscribeBegin(params?.payload));
      yield put(actions.fetchSubscribeWithPointEverydayBegin(params?.payload));
    }
    
    if (params?.payload?.typeService === SERVICE_TYPE.COMMENT.title) {
  
      yield put(actions.statisticCommentByOrderReportBegin());
      yield put(actions.statisticTaskSuccessInMinuteBegin());
      yield put(actions.statisticTaskDurationInMinuteBegin());
      yield put(actions.statisticOrderAmountBegin(initialFilter));
      yield put(actions.statisticAccountStatusCommentBegin(initialFilter));
      yield put(actions.statisticPerformanceCommentBegin(initialFilter));
      yield put(actions.statisticCommentByDayBegin(initialFilter));
      yield put(actions.statisticComputerThreadBegin(initialFilter));
    }
  } catch (err) {
    yield put(
      actions.setRangeDateFilterErr({ error: err || 'Set range filter failed' })
    );
  }
}

export function* statisticCommentByDayWatcherSaga() {
  yield takeLatest(actions.STATISTIC_COMMENT_BY_DAY_BEGIN, statisticCommentByDayFunc);
}

export function* statisticComputerThreadWatcherSaga() {
  yield takeLatest(actions.STATISTIC_COMPUTER_THREAD_BEGIN, statisticComputerThreadFunc);
}

export function* statisticTaskDurationInMinuteWatcherSaga() {
  yield takeLatest(actions.STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN, statisticTaskDurationInMinuteFunc);
}

export function* statisticTaskSuccessInMinuteWatcherSaga() {
  yield takeLatest(actions.STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN, statisticTaskSuccessInMinuteFunc);
}

export function* resportSubscribeWatcherSaga() {
  yield takeLatest(actions.FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN, reportDataSubscribeFunc);
}

export function* setRangeDateFilterWatcherSaga() {
  yield takeLatest(actions.SET_RANGE_DATE_FILTER_BEGIN, setRangeDateFilterFunc);
}

export function* changeServiceTypeWatcherSaga() {
  yield takeLatest(actions.CHANGE_SERVICE_TYPE_BEGIN, changeServiceTypeFunc);
}

export function* countSuccessSubscribeWatcherSaga() {
  yield takeLatest(actions.COUNT_SUCCESS_SUBSCRIBE_BEGIN, countSuccessSubscribeFunc);
}

export function* fetchComputerDataListWatcherSaga() {
  yield takeLatest(actions.COMPUTER_DATA_LIST_BEGIN, fetchComputerDataListFunc);
}

export function* countErrorSubscribeWatcherSaga() {
  yield takeLatest(actions.COUNT_ERROR_SUBSCRIBE_BEGIN, countErrorSubscribeFunc);
}

export function* statisticOrderAmountWatcherSaga() {
  yield takeLatest(actions.STATISTIC_ORDER_AMOUNT_BEGIN, statisticOrderAmountFunc);
}

export function* statisticPerformanceCommentWatcherSaga() {
  yield takeLatest(actions.STATISTIC_PERFORMANCE_COMMENT_BEGIN, statisticPerformanceCommentFunc);
}

export function* statisticAccountStatusCommentWatcherSaga() {
  yield takeLatest(actions.STATISTIC_ACCOUNT_STATUS_COMMENT_BEGIN, statisticAccountStatusCommentFunc);
}

export function* getStatisticsSubscribeReporWatcherSaga() {
  yield takeLatest(actions.GET_STATISTICS_SUBSCRIBE_REPORT_BEGIN, getStatisticsSubscribeFunc);
}

export function* getStatisticsByOrderStatusReportWatcherSaga() {
  yield takeLatest(actions.STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN, statisticCommentByOrderReportFunc);
}

export function* toggleStateModalCreateOrderWatcherSaga() {
  yield takeLatest(actions.OPEN_MODAL_CREATE_NEW_ORDER_BEGIN, toggleStateModalCreateOrderFunc);
}