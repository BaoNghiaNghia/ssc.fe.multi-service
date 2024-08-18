import { call, put, takeLatest } from 'redux-saga/effects';
import actions from "./actions";
import {
  fetchComputerDataListAPI,
} from '../../config/api/Reports/index';
import { MESSSAGE_STATUS_CODE } from '../../variables';

function* fetchComputerDataListFunc() {
  try {
    const response = yield call(fetchComputerDataListAPI, {});
    
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

export function* fetchComputerDataListWatcherSaga() {
  yield takeLatest(actions.COMPUTER_DATA_LIST_BEGIN, fetchComputerDataListFunc);
}
