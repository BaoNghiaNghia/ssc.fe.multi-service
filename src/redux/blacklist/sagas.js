import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
  fetchBlackListChannelAPI
} from '../../config/apiFactory/BlackList/index';
import { MESSSAGE_STATUS_CODE } from '../../variables';

function* fetchBlackListChannelFunc() {
  try {
    const response = yield call(fetchBlackListChannelAPI, {});
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchBlackListChannelSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.fetchBlackListChannelErr({ error: errorMessage || 'Fetch admin setting failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Lấy thông tin cài đặt thất bại');
    }
  } finally { /* empty */ }
}

export function* fetchBlackListChannelWatcherSaga() {
  yield takeLatest(actions.BLACK_LIST_CHANNEL_BEGIN, fetchBlackListChannelFunc);
}
