import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import { getDailyReportSubscribe } from '../../config/apiFactory/Reports/index';
import { MESSSAGE_STATUS_CODE } from '../../variables';

function* reportDataSubscribe(params) {
  try {
    const response = yield call(getDailyReportSubscribe, params?.payload?.request);
    
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

export function* resportSubscribeWatcherSaga() {
  yield takeLatest(actions.FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN, reportDataSubscribe);
}
