import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
  fetchAdminSettingAPI,
  fetchListOrderSubscribeAPI,
  fetchServicePackageListAPI,
  fetchUserListAPI
} from '../../config/apiFactory/BuffSubscribe/index';
import { MESSSAGE_STATUS_CODE } from '../../variables';

function* fetchAdminSettingFunc(params) {
  try {
    const response = yield call(fetchAdminSettingAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchAdminSettingSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.fetchAdminSettingErr({ error: errorMessage || 'Fetch admin setting failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch admin setting failed');
    }
  } finally { /* empty */ }
}

function* fetchListOrderSubscribeFunc(params) {
  try {
    const response = yield call(fetchListOrderSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchListOrderSubscribeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.fetchListOrderSubscribeErr({ error: errorMessage || 'Fetch list order subscribe failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch list order subscribe failed');
    }
  } finally { /* empty */ }
}

function* fetchServicePackageListFunc() {
  try {
    const response = yield call(fetchServicePackageListAPI, {});
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchServicePackageListSuccess(response?.data?.data)
      );
    }

  } catch (err) {
    yield put(
      actions.fetchServicePackageListErr({ error: err || 'Fetch service package failed' })
    );
  }
}

function* fetchUserListFunc() {
  try {
    const response = yield call(fetchUserListAPI, {});
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchUserListSuccess(response?.data?.data)
      );
    }

  } catch (err) {
    yield put(
      actions.fetchUserListErr({ error: err || 'Fetch service package failed' })
    );
  }
}

export function* fetchAdminSettingWatcherSaga() {
  yield takeLatest(actions.FETCH_ADMIN_SETTING_BEGIN, fetchAdminSettingFunc);
}

export function* fetchListOrderSubscribeWatcherSaga() {
  yield takeLatest(actions.FETCH_LIST_ORDER_SUBSCRIBE_BEGIN, fetchListOrderSubscribeFunc);
}

export function* fetchServicePackageListWatcherSaga() {
  yield takeLatest(actions.FETCH_SERVICE_PACKAGE_LIST_BEGIN, fetchServicePackageListFunc);
}

export function* fetchUserListWatcherSaga() {
  yield takeLatest(actions.FETCH_USER_LIST_BEGIN, fetchUserListFunc);
}