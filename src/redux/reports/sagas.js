import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
  countErrorSubscribe,
  countProfitDataToday,
  countSuccessSubscribe,
  fetchComputerDataList,
  getDailyReportSubscribe,
  getSubscribeWithPointEveryday,
  ratioSubscribeAverage,
  getStatisticSubscribeReport,
  statisticCommentByOrderReport
} from '../../config/apiFactory/Reports/index';
import { MESSSAGE_STATUS_CODE, SERVICE_TYPE } from '../../variables';

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
      actions.reportSubscribeErr({ error: errorMessage || 'Fetch report failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch report failed');
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

function* countProfitDataTodayFunc() {
  try {
    const response = yield call(countProfitDataToday, {});
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.countProfitDataTodaySuccess(response?.data?.data)
      );
    }

  } catch (err) {
    yield put(
      actions.countProfitDataTodayErr({ error: err || 'Count profit failed' })
    );
  }
}

function* fetchSubscribeWithPointEverydayFunc(params) {
  try {
    const response = yield call(getSubscribeWithPointEveryday, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchSubscribeWithPointEverydaySuccess(response?.data?.data)
      );
    }

  } catch (err) {
    yield put(
      actions.fetchSubscribeWithPointEverydayErr({ error: err || 'Fetch Subscribe and Point failed' })
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
      yield put(
        actions.statisticCommentByOrderReportBegin()
      );
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

    yield put(
      actions.reportSubscribeBegin(params?.payload)
    );

    yield put(
      actions.fetchSubscribeWithPointEverydayBegin(params?.payload)
    );

  } catch (err) {
    yield put(
      actions.setRangeDateFilterErr({ error: err || 'Set range filter failed' })
    );
  }
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

export function* countProfitDataTodayWatcherSaga() {
  yield takeLatest(actions.COUNT_PROFIT_DATA_TODAY_BEGIN, countProfitDataTodayFunc);
}

export function* fetchSubscribeWithPointEverydayWatcherSaga() {
  yield takeLatest(actions.FETCH_SUBSCRIBE_POINT_EVERYDAY_BEGIN, fetchSubscribeWithPointEverydayFunc);
}

export function* fetchComputerDataListWatcherSaga() {
  yield takeLatest(actions.COMPUTER_DATA_LIST_BEGIN, fetchComputerDataListFunc);
}

export function* countErrorSubscribeWatcherSaga() {
  yield takeLatest(actions.COUNT_ERROR_SUBSCRIBE_BEGIN, countErrorSubscribeFunc);
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