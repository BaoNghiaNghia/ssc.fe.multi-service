import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
    commentOrderCommentAPI,
    fetchListOrderCommentAPI,
    createOrderCommentAPI,
    getOneOrderCommentAPI,
    updateOneOrderCommentAPI,
    listComputerRunCommentAPI
} from '../../config/apiFactory/BuffComment/index';
import { MESSSAGE_STATUS_CODE } from '../../variables';


function* listComputerRunCommentFunc(params) {
  try {
    const response = yield call(listComputerRunCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.listComputerRunCommentSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.listComputerRunCommentErr({ error: errorMessage || 'Update order comment failed' })
    );

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Update order comment failed');
    }
  } finally { /* empty */ }
}

function* updateOrderCommentFunc(params) {
  try {
    const response = yield call(updateOneOrderCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateOrderCommentAdminSuccess(response?.data?.data)
      );
      yield put(
        actions.fetchListOrderCommentBegin()
      );

      toast.success('Cập nhật order comment thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateOrderCommentAdminErr({ error: errorMessage || 'Update order comment failed' })
    );

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Update order comment failed');
    }
  } finally { /* empty */ }
}

function* createOrderCommentFunc(params) {
  try {
    const response = yield call(createOrderCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.createOrderCommentAdminSuccess(response?.data?.data)
      );
      yield put(
        actions.fetchListOrderCommentBegin()
      );

      toast.success('Tạo order comment thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.createOrderCommentAdminErr({ error: errorMessage || 'Create order comment failed' })
    );

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Create order comment failed');
    }
  } finally { /* empty */ }
}

function* fetchListOrderCommentFunc(params) {
  try {
    const response = yield call(fetchListOrderCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchListOrderCommentSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.fetchListOrderCommentErr({ error: errorMessage || 'Fetch list order comment failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch list order comment failed');
    }
  } finally { /* empty */ }
}

function* detailOrderCommentFunc(params) {
  try {
    const response = yield call(getOneOrderCommentAPI, params?.payload?.id);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailOrderCommentSuccess(response?.data?.data)
      );
    }
    // yield put(
    //     actions.detailOrderCommentSuccess(params?.payload)
    // );
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailOrderCommentErr({ error: errorMessage || 'Detail order comment failed' })
    );
  } finally { /* empty */ }
}

function* commentInOrderCommentFunc(params) {
  try {
    const response = yield call(commentOrderCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentOrderCommentSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.commentOrderCommentErr({ error: errorMessage || 'Detail order comment failed' })
    );
  } finally { /* empty */ }
}


export function* updateOrderCommentWatcherSaga() {
  yield takeLatest(actions.UPDATE_ORDER_COMMENT_ADMIN_BEGIN, updateOrderCommentFunc);
}
export function* listComputerRunCommentWatcherSaga() {
  yield takeLatest(actions.LIST_COMPUTER_RUN_COMMENT_BEGIN, listComputerRunCommentFunc);
}

export function* createOrderCommentWatcherSaga() {
  yield takeLatest(actions.CREATE_ORDER_COMMENT_ADMIN_BEGIN, createOrderCommentFunc);
}

export function* fetchListOrderCommentWatcherSaga() {
  yield takeLatest(actions.FETCH_LIST_ORDER_COMMENT_BEGIN, fetchListOrderCommentFunc);
}

export function* detailOrderCommentWatcherSaga() {
  yield takeLatest(actions.DETAIL_ORDER_COMMENT_BEGIN, detailOrderCommentFunc);
}

export function* commentInOrderCommentWatcherSaga() {
  yield takeLatest(actions.COMMENT_IN_ORDER_COMMENT_BEGIN, commentInOrderCommentFunc);
}
