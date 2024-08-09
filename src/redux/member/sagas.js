import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
  fetchUserListAPI,
  detailUserAdminMemberAPI,
  updateUserAdminMemberAPI,
  topupAdminConfirmMemberAPI,
  listTopupAdminMemberAPI,
  createTopupAdminMemberAPI,
  getListCreditHistoryMemberAPI,
  generateApiKeyMemberAPI
} from '../../config/apiFactory/Member/index';

import { MESSSAGE_STATUS_CODE, MEMBER_TABLE_TYPE } from '../../variables';

function* generateApiKeyMemberFunc(params) {
  try {
    const response = yield call(generateApiKeyMemberAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.generateApiKeyMemberSuccess(response?.data?.data)
      );
      yield put(
        actions.detailUserAdminBegin(params?.payload)
      );
    }

  } catch (err) {
    yield put(
      actions.generateApiKeyMemberErr({ error: err || 'Generate Api Key failed' })
    );
  }
}

function* getCreditHistoryMemberFunc(params) {
  try {
    const response = yield call(getListCreditHistoryMemberAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.getCreditHistoryMemberSuccess(response?.data?.data)
      );
    }

  } catch (err) {
    yield put(
      actions.getCreditHistoryMemberErr({ error: err || 'Fetch member failed' })
    );
  }
}

function* fetchUserListFunc(params) {
  try {
    const response = yield call(fetchUserListAPI, params?.payload);
    
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

function* detailTopupItemFunc(params) {
  try {
    yield put(
      actions.detailTopupSuccess(params?.payload)
    );
  } catch (err) {
    yield put(
      actions.detailTopupErr({ error: err || 'Detail topup item failed' })
    );
  }
}

function* createTopupItemFunc(params) {
  try {
    const response = yield call(createTopupAdminMemberAPI, params?.payload);
    console.log('----- response saga topup nè -----', response);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.createTopupItemSuccess(response?.data?.data)
      );

      toast.success('Tạo đơn topup thành công');
    }
  } catch (err) {
    yield put(
      actions.createTopupItemErr({ error: err || 'Fetch member failed' })
    );
  }
}

function* confirmTopupItemFunc(params) {
  try {
    const response = yield call(topupAdminConfirmMemberAPI, params?.payload);
    console.log('----- response saga confirm topup nè -----', response);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.confirmTopupSuccess(response?.data?.data)
      );

      yield put(
        actions.fetchTopupListBegin()
      );

      toast.success('Xác nhận nạp tiền thành công');
    }
  } catch (err) {
    yield put(
      actions.confirmTopupErr({ error: err || 'Confirm topup failed' })
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

      toast.success('Cập nhật thành viên thành công');

      yield put(
        actions.fetchUserListBegin()
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


export function* generateApiKeyMemberWatcherSaga() {
  yield takeLatest(actions.GENERATE_API_KEY_MEMBER_BEGIN, generateApiKeyMemberFunc);
}

export function* getCreditHistoryMemberWatcherSaga() {
  yield takeLatest(actions.GET_CREDIT_HISTORY_MEMBER_BEGIN, getCreditHistoryMemberFunc);
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

export function* confirmTopupItemWatcherSaga() {
  yield takeLatest(actions.CONFIRM_TOPUP_BEGIN, confirmTopupItemFunc);
}

export function* detailUserAdminMemberWatcherSaga() {
  yield takeLatest(actions.DETAIL_USER_ADMIN_BEGIN, detailUserAdminFunc);
}

export function* detailTopupItemWatcherSaga() {
  yield takeLatest(actions.DETAIL_TOPUP_ITEM_BEGIN, detailTopupItemFunc);
}

export function* updateUserAdminMemberWatcherSaga() {
  yield takeLatest(actions.UPDATE_USER_ADMIN_BEGIN, updateUserAdminFunc);
}

export function* changeTableTypeMemberWatcherSaga() {
  yield takeLatest(actions.CHANGE_TYPE_TABLE_BEGIN, changeTableTypeFunc);
}
