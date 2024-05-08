import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
  fetchUserListAPI
} from '../../config/apiFactory/Member/index';
import { MESSSAGE_STATUS_CODE } from '../../variables';

function* fetchUserListFunc() {
  try {
    const response = yield call(fetchUserListAPI, {});
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchUserListSuccess(response?.data?.data?.users)
      );
    }

  } catch (err) {
    yield put(
      actions.fetchUserListErr({ error: err || 'Fetch service package failed' })
    );
  }
}

export function* fetchUserListMemberWatcherSaga() {
  yield takeLatest(actions.FETCH_USER_LIST_BEGIN, fetchUserListFunc);
}
