import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
    commentOrderCommentAPI,
    fetchListOrderCommentAPI,
    createOrderCommentAPI
} from '../../config/apiFactory/BuffComment/index';
import { MESSSAGE_STATUS_CODE } from '../../variables';


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
    yield put(
        actions.detailOrderCommentSuccess(params?.payload)
    );
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
