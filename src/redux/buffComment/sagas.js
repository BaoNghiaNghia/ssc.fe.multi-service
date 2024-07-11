import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
    commentOrderCommentAPI,
    fetchListOrderCommentAPI,
    createOrderCommentAPI,
    getOneOrderCommentAPI,
    updateOneOrderCommentAPI,
    listComputerRunCommentAPI,
    updateManyOrderCommentAPI,
    updateManyComputerCommentAPI,
    detailComputerRunCommentAPI,
    deleteComputerRunCommentAPI,
    updateOneComputerRunCommentAPI,

    activeWarrantyOrderAPI,
    fetchListWarrantyOrderAPI,
    refundWarrantyOrderAPI,
} from '../../config/apiFactory/BuffComment/index';
import { DEFAULT_PERPAGE, MESSSAGE_STATUS_CODE } from '../../variables';


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
      toast.error('Cập nhật đơn comment thất bại');
    }
  } finally { /* empty */ }
}

function* fetchWarrantyCommentOrderFunc(params) {
  try {
    const response = yield call(fetchListWarrantyOrderAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchWarrantyCommentOrderSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.fetchWarrantyCommentOrderErr({ error: errorMessage || 'Fetch Warranty Order failed' })
    );

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Lấy đơn bảo hành không thành công');
    }
  } finally { /* empty */ }
}

function* activeWarrantyOrderFunc(params) {
  try {
    const response = yield call(activeWarrantyOrderAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.activeWarrantyOrderSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.activeWarrantyOrderErr({ error: errorMessage || 'Activate Warranty Order failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Kích hoạt lệnh bảo hành không thành công');
    }
  } finally { /* empty */ }
}
function* refundWarrantyOrderFunc(params) {
  try {
    const response = yield call(refundWarrantyOrderAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.refundWarrantyOrderSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.refundWarrantyOrderErr({ error: errorMessage || 'Refund Warranty Order failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Hoàn tiền Bảo hành Lệnh không thành công');
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
        actions.fetchListOrderCommentBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Cập nhật order comment thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateOrderCommentAdminErr({ error: errorMessage || 'Update order comment failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Cập nhật nhận xét đơn hàng không thành công');
    }
  } finally { /* empty */ }
}

function* updateOneComputerCommentFunc(params) {
  try {
    const response = yield call(updateOneComputerRunCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateOneComputerCommentAdminSuccess(response?.data?.data)
      );

      yield put(
        actions.listComputerRunCommentBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Cập nhật server comment thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateOneComputerCommentAdminErr({ error: errorMessage || 'Update server comment failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Cập nhật máy chủ comment không thành công');
    }
  } finally { /* empty */ }
}

function* updateManyComputerCommentFunc(params) {
  try {
    const response = yield call(updateManyComputerCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateManyComputerCommentAdminSuccess(response?.data?.data)
      );

      yield put(
        actions.listComputerRunCommentBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );
      toast.success('Cập nhật nhiều computer comment thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateManyComputerCommentAdminErr({ error: errorMessage || 'Update many computer comment failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Cập nhật nhiều bình luận máy tính không thành công');
    }
  } finally { /* empty */ }
}

function* updateManyOrderCommentFunc(params) {
  try {
    const response = yield call(updateManyOrderCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateManyOrderCommentAdminSuccess(response?.data?.data)
      );
      yield put(
        actions.fetchListOrderCommentBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Cập nhật nhiều order comment thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateManyOrderCommentAdminErr({ error: errorMessage || 'Update many order comment failed' })
    );
    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Cập nhật đơn hàng comment không thành công');
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
        actions.fetchListOrderCommentBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Tạo order comment thành công');
    }
  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.createOrderCommentAdminErr({ error: errorMessage || 'Create order comment failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Tạo đơn hàng comment không thành công');
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
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Tìm danh sách đơn comment không thành công');
    }
  } finally { /* empty */ }
}

function* detailComputerCommentFunc(params) {
  try {
    const response = yield call(detailComputerRunCommentAPI, params?.payload?.id);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailComputerRunCommentSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailComputerRunCommentErr({ error: errorMessage || 'Detail server run comment failed' })
    );
  } finally { /* empty */ }
}

function* deleteComputerCommentFunc(params) {
  try {
    const response = yield call(deleteComputerRunCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.deleteComputerRunCommentSuccess(response?.data?.data)
      );

      toast.success("Xóa máy chạy comment thành công!");

      yield put(
        actions.listComputerRunCommentBegin(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.deleteComputerRunCommentErr({ error: errorMessage || 'Delete server run comment failed' })
    );
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


function* setRangeDateWarrantyFilterFunc(params) {
  try {
    yield put(
      actions.setRangeDateWarrantyFilterSuccess(params?.payload)
    );

    const requestData = {
      start_date: `${params?.payload?.from} 00:00:00`,
      end_date: `${params?.payload?.to} 23:59:59`,
      pageSize: params?.payload?.pageSize,
      limit: params?.payload?.limit
    }

    yield put(
      actions.fetchWarrantyCommentOrderBegin(requestData)
    );

  } catch (err) {
    yield put(
      actions.setRangeDateWarrantyFilterErr({ error: err || 'Set range filter failed' })
    );
  }
}


export function* updateManyComputerCommentWatcherSaga() {
  yield takeLatest(actions.UPDATE_MANY_COMPUTER_COMMENT_ADMIN_BEGIN, updateManyComputerCommentFunc);
}

export function* updateOneComputerCommentWatcherSaga() {
  yield takeLatest(actions.UPDATE_ONE_COMPUTER_COMMENT_ADMIN_BEGIN, updateOneComputerCommentFunc);
}

export function* updateManyOrderCommentWatcherSaga() {
  yield takeLatest(actions.UPDATE_MANY_ORDER_COMMENT_ADMIN_BEGIN, updateManyOrderCommentFunc);
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

export function* detailComputerCommentWatcherSaga() {
  yield takeLatest(actions.DETAIL_COMPUTER_RUN_COMMENT_BEGIN, detailComputerCommentFunc);
}

export function* deleteComputerCommentWatcherSaga() {
  yield takeLatest(actions.DELETE_COMPUTER_RUN_COMMENT_BEGIN, deleteComputerCommentFunc);
}

export function* commentInOrderCommentWatcherSaga() {
  yield takeLatest(actions.COMMENT_IN_ORDER_COMMENT_BEGIN, commentInOrderCommentFunc);
}

export function* fetchWarrantyCommentOrderWatcherSaga() {
  yield takeLatest(actions.FETCH_WARRANTY_COMMENT_ORDER_BEGIN, fetchWarrantyCommentOrderFunc);
}

export function* activeWarrantyOrderWatcherSaga() {
  yield takeLatest(actions.ACTIVE_WARRANTY_ORDER_BEGIN, activeWarrantyOrderFunc);
}

export function* refundhWarrantyOrderWatcherSaga() {
  yield takeLatest(actions.REFUND_WARRANTY_ORDER_BEGIN, refundWarrantyOrderFunc);
}

export function* setRangeDateWarrantyFilterWatcherSaga() {
  yield takeLatest(actions.SET_RANGE_DATE_WARRANTY_FILTER_BEGIN, setRangeDateWarrantyFilterFunc);
}
