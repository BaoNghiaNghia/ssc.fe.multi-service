import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
  fetchUserListAPI,
  detailUserAdminMemberAPI,
  updateUserAdminMemberAPI,
  topupAdminConfirmMemberAPI,
  listTopupAdminMemberAPI,
  createTopupAdminMemberAPI
} from '../../config/apiFactory/Member/index';
import { MESSSAGE_STATUS_CODE, MEMBER_TABLE_TYPE } from '../../variables';

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
      actions.fetchUserListErr({ error: err || 'Fetch member failed' })
    );
  }
}

function* detailUserAdminFunc(params) {
  try {
    const response = yield call(detailUserAdminMemberAPI, params?.payload?.id);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailUserAdminSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.detailUserAdminErr({ error: err || 'Fetch member failed' })
    );
  }
}

function* createTopupItemFunc(params) {
  try {
    const response = yield call(createTopupAdminMemberAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.createTopupItemSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.createTopupItemErr({ error: err || 'Fetch member failed' })
    );
  }
}

function* updateUserAdminFunc(params) {
  try {
    const response = yield call(updateUserAdminMemberAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateUserAdminSuccess(response?.data?.data?.users)
      );
    }
  } catch (err) {
    yield put(
      actions.updateUserAdminErr({ error: err || 'Update member failed' })
    );
  }
}

function* fetchTopupListFunc(params) {
  try {
    const response = yield call(listTopupAdminMemberAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchTopupListSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.fetchTopupListErr({ error: err || 'Update member failed' })
    );
  }
}

function* changeTableTypeFunc(params) {
  try {
    console.log( '------- params table type --------', params?.payload);

    if (params?.payload === MEMBER_TABLE_TYPE.MEMBER.title) {
      yield put(
        actions.fetchUserListBegin()
      );
    } else {
      yield put(
        actions.fetchTopupListBegin()
      );
    }

    yield put(
      actions.changeTypeTableSuccess(params?.payload)
    );
  } catch (err) {
    yield put(
      actions.changeTypeTableErr({ error: err || 'Update member failed' })
    );
  }
}


export function* fetchUserListMemberWatcherSaga() {
  yield takeLatest(actions.FETCH_USER_LIST_BEGIN, fetchUserListFunc);
}

export function* fetchTopupListMemberWatcherSaga() {
  yield takeLatest(actions.FETCH_TOPUP_LIST_BEGIN, fetchTopupListFunc);
}

export function* createTopupItemWatcherSaga() {
  yield takeLatest(actions.CREATE_TOPUP_ITEM_BEGIN, createTopupItemFunc);
}

export function* detailUserAdminMemberWatcherSaga() {
  yield takeLatest(actions.DETAIL_USER_ADMIN_BEGIN, detailUserAdminFunc);
}

export function* updateUserAdminMemberWatcherSaga() {
  yield takeLatest(actions.UPDATE_USER_ADMIN_BEGIN, updateUserAdminFunc);
}

export function* changeTableTypeMemberWatcherSaga() {
  yield takeLatest(actions.CHANGE_TYPE_TABLE_BEGIN, changeTableTypeFunc);
}

