import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
  fetchAdminSettingAPI,
  fetchListOrderSubscribeAPI,
  fetchServicePackageListAPI,

  getOneOrderSubscribeAPI,
  updateOneOrderSubscribeAPI,
  updateManyOrderSubscribeAPI,
  createOrderSubscribeAPI,
  listComputerRunSubscribeAPI,
  detailComputerRunSubscribeAPI,
  deleteComputerRunSubscribeAPI,
  updateOneComputerRunSubscribeAPI,
  updateManyComputerSubscribeAPI,
  fetchListWarrantyOrderAPI,
  activeWarrantySubscribeOrderAPI,
  refundWarrantyOrderAPI,
} from '../../config/api/BuffSubscribe/index';
import { MESSSAGE_STATUS_CODE, DEFAULT_PERPAGE } from '../../variables';



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

function* fetchListOrderHistoryFunc(params) { 
  try {
    const response = yield call(fetchListOrderSubscribeAPI,  params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchOrderHistorySuccess(response?.data?.data)
      );
    }

  } catch (err) {
    yield put(
      actions.fetchOrderHistoryErr({ error: err || 'Fetch list order history failed' })
    );
  }
}

function* changeOrderHistoryTypeFunc(params) {
  try {
    yield put(
      actions.changeOrderHistoryTypeSuccess(params?.payload)
    );
  } catch (err) {
    yield put(
      actions.changeOrderHistoryTypeErr({ error: err || 'Count error subscribe failed' })
    )
  }
}

function* setRangeDateOrderHistoryFunc(params) {
  try {
    yield put(
      actions.setRangeDateFilterSuccess(params?.payload)
    );

  } catch (err) {
    yield put(
      actions.setRangeDateFilterErr({ error: err || 'Set range filter failed' })
    );
  }
}

function* setNumberStatusBarFunc(params) {
  try {
    yield put(
      actions.setStatusBarSubscribeSuccess(params?.payload)
    );
  } catch (err) {
    yield put(
      actions.actions.setStatusBarSubscribeErr({ error: err || 'Set range filter failed' })
    );
  }
}


function* listComputerRunSubscribeFunc(params) {
  try {
    const response = yield call(listComputerRunSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.listComputerRunSubscribeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.listComputerRunSubscribeErr({ error: errorMessage || 'Update order subscribe failed' })
    );

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Cập nhật đơn subscribe thất bại');
    }
  } finally { /* empty */ }
}

function* fetchWarrantySubscribeOrderFunc(params) {
  try {
    const response = yield call(fetchListWarrantyOrderAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchWarrantySubscribeOrderSuccess(response?.data?.data)
      );

      if (response?.data?.data?.items === null) {
        toast.info('Không có thông tin đơn bảo hành');
      }
    }

  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.fetchWarrantySubscribeOrderErr({ error: errorMessage || 'Fetch Warranty Order failed' })
    );

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Lấy đơn bảo hành không thành công');
    }
  } finally { /* empty */ }
}

function* activeWarrantyOrderSubscribeFunc(params) {
  try {
    const response = yield call(activeWarrantySubscribeOrderAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.activeWarrantyOrderSubscribeSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.activeWarrantyOrderSubscribeErr({ error: errorMessage || 'Activate Warranty Order failed' })
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

function* updateOrderSubscribeFunc(params) {
  try {
    const response = yield call(updateOneOrderSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateOrderSubscribeAdminSuccess(response?.data?.data)
      );
      yield put(
        actions.fetchListOrderSubscribeBegin({
          page: 1,
          limit: DEFAULT_PERPAGE,
          status: params?.payload
        })
      );

      toast.success('Cập nhật order subscribe thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateOrderSubscribeAdminErr({ error: errorMessage || 'Update order subscribe failed' })
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

function* updateOneComputerSubscribeFunc(params) {
  try {
    const response = yield call(updateOneComputerRunSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateOneComputerSubscribeAdminSuccess(response?.data?.data)
      );

      yield put(
        actions.listComputerRunSubscribeBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Cập nhật server subscribe thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateOneComputerSubscribeAdminErr({ error: errorMessage || 'Update server subscribe failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Cập nhật máy chủ subscribe không thành công');
    }
  } finally { /* empty */ }
}

function* updateManyComputerSubscribeFunc(params) {
  try {
    const response = yield call(updateManyComputerSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateManyComputerSubscribeAdminSuccess(response?.data?.data)
      );

      yield put(
        actions.listComputerRunSubscribeBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );
      toast.success('Cập nhật nhiều computer subscribe thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateManyComputerSubscribeAdminErr({ error: errorMessage || 'Update many computer subscribe failed' })
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

function* updateManyOrderSubscribeFunc(params) {
  try {
    const response = yield call(updateManyOrderSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateManyOrderSubscribeAdminSuccess(response?.data?.data)
      );
      yield put(
        actions.fetchListOrderSubscribeBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Cập nhật nhiều order subscribe thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateManyOrderSubscribeAdminErr({ error: errorMessage || 'Update many order subscribe failed' })
    );
    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Cập nhật đơn hàng subscribe không thành công');
    }
  } finally { /* empty */ }
}

function* createOrderSubscribeFunc(params) {
  try {
    const response = yield call(createOrderSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.createOrderSubscribeAdminSuccess(response?.data?.data)
      );
      yield put(
        actions.fetchListOrderSubscribeBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Tạo order subscribe thành công');
    }
  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.createOrderSubscribeAdminErr({ error: errorMessage || 'Create order subscribe failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Tạo đơn hàng subscribe không thành công');
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
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Fetch list order subscribe failed');
    }
  } finally { /* empty */ }
}

function* detailComputerSubscribeFunc(params) {
  try {
    const response = yield call(detailComputerRunSubscribeAPI, params?.payload?.id);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailComputerRunSubscribeSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailComputerRunSubscribeErr({ error: errorMessage || 'Detail server run subscribe failed' })
    );
  } finally { /* empty */ }
}

function* deleteComputerSubscribeFunc(params) {
  try {
    const response = yield call(deleteComputerRunSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.deleteComputerRunSubscribeSuccess(response?.data?.data)
      );

      toast.success("Xóa máy chạy subscribe thành công!");

      yield put(
        actions.listComputerRunSubscribeBegin(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.deleteComputerRunSubscribeErr({ error: errorMessage || 'Delete server run subscribe failed' })
    );
  } finally { /* empty */ }
}

function* detailOrderSubscribeFunc(params) {
  try {
    const response = yield call(getOneOrderSubscribeAPI, params?.payload?.id);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailOrderSubscribeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailOrderSubscribeErr({ error: errorMessage || 'Detail order subscribe failed' })
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
      actions.fetchWarrantySubscribeOrderBegin(requestData)
    );

  } catch (err) {
    yield put(
      actions.setRangeDateWarrantyFilterErr({ error: err || 'Set range filter failed' })
    );
  }
}

export function* fetchAdminSettingWatcherSaga() {
  yield takeLatest(actions.FETCH_ADMIN_SETTING_BEGIN, fetchAdminSettingFunc);
}

export function* fetchServicePackageListWatcherSaga() {
  yield takeLatest(actions.FETCH_SERVICE_PACKAGE_LIST_BEGIN, fetchServicePackageListFunc);
}

export function* fetchOrderHistoryWatcherSaga() {
  yield takeLatest(actions.FETCH_LIST_ORDER_HISTORY_BEGIN, fetchListOrderHistoryFunc);
}

export function* setRangeDateOrderHistoryWatcherSaga() {
  yield takeLatest(actions.SET_RANGE_DATE_ORDER_HISTORY_BEGIN, setRangeDateOrderHistoryFunc);
}

export function* changeOrderHistoryTypeWatcherSaga() {
  yield takeLatest(actions.CHANGE_ORDER_HISTORY_TYPE_BEGIN, changeOrderHistoryTypeFunc);
}

export function* setNumberStatusBarSubscribeWatcherSaga() {
  yield takeLatest(actions.SET_STATUS_BAR_NUMBER_SUBSCRIBE_BEGIN, setNumberStatusBarFunc);
}


export function* updateManyComputerSubscribeWatcherSaga() {
  yield takeLatest(actions.UPDATE_MANY_COMPUTER_SUBSCRIBE_ADMIN_BEGIN, updateManyComputerSubscribeFunc);
}

export function* updateOneComputerSubscribeWatcherSaga() { 
  yield takeLatest(actions.UPDATE_ONE_COMPUTER_SUBSCRIBE_ADMIN_BEGIN, updateOneComputerSubscribeFunc);
}

export function* updateManyOrderSubscribeWatcherSaga() {
  yield takeLatest(actions.UPDATE_MANY_ORDER_SUBSCRIBE_ADMIN_BEGIN, updateManyOrderSubscribeFunc);
}

export function* updateOrderSubscribeWatcherSaga() {
  yield takeLatest(actions.UPDATE_ORDER_SUBSCRIBE_ADMIN_BEGIN, updateOrderSubscribeFunc);
}
export function* listComputerRunSubscribeWatcherSaga() {
  yield takeLatest(actions.LIST_COMPUTER_RUN_SUBSCRIBE_BEGIN, listComputerRunSubscribeFunc);
}

export function* createOrderSubscribeWatcherSaga() {
  yield takeLatest(actions.CREATE_ORDER_SUBSCRIBE_ADMIN_BEGIN, createOrderSubscribeFunc);
}

export function* fetchListOrderSubscribeWatcherSaga() {
  yield takeLatest(actions.FETCH_LIST_ORDER_SUBSCRIBE_BEGIN, fetchListOrderSubscribeFunc);
}

export function* detailOrderSubscribeWatcherSaga() {
  yield takeLatest(actions.DETAIL_ORDER_SUBSCRIBE_ADMIN_BEGIN, detailOrderSubscribeFunc);
}


export function* deleteComputerSubscribeWatcherSaga() {
  yield takeLatest(actions.DELETE_COMPUTER_RUN_SUBSCRIBE_BEGIN, deleteComputerSubscribeFunc);
}

export function* fetchWarrantySubscribeOrderWatcherSaga() {
  yield takeLatest(actions.FETCH_WARRANTY_SUBSCRIBE_ORDER_BEGIN, fetchWarrantySubscribeOrderFunc);
}

export function* activeWarrantyOrderSubscribeWatcherSaga() {
  yield takeLatest(actions.ACTIVE_WARRANTY_ORDER_SUBSCRIBE_BEGIN, activeWarrantyOrderSubscribeFunc);
}

export function* refundhWarrantyOrderWatcherSaga() {
  yield takeLatest(actions.REFUND_WARRANTY_ORDER_BEGIN, refundWarrantyOrderFunc);
}

export function* setRangeDateWarrantyFilterWatcherSaga() {
  yield takeLatest(actions.SET_RANGE_DATE_WARRANTY_FILTER_BEGIN, setRangeDateWarrantyFilterFunc);
}

export function* detailComputerSubscribeWatcherSaga() {
  yield takeLatest(actions.DETAIL_COMPUTER_RUN_SUBSCRIBE_BEGIN, detailComputerSubscribeFunc);
}