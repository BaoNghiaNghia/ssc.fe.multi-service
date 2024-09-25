import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
    viewOrderViewAPI,
    fetchListOrderViewAPI,
    createOrderViewAPI,
    getOneOrderViewAPI,
    updateOneOrderViewAPI,
    listComputerRunViewAPI,
    updateManyOrderViewAPI,
    updateManyComputerViewAPI,
    detailComputerRunViewAPI,
    deleteComputerRunViewAPI,
    updateOneComputerRunViewAPI,

    activeWarrantyViewOrderAPI,
    fetchListWarrantyOrderAPI,
    refundWarrantyOrderAPI,
    fetchListDevicesRunViewAPI,
    detailDeviceRunViewAPI
} from '../../config/api/BuffView/index';
import { DEFAULT_PERPAGE, MESSSAGE_STATUS_CODE } from '../../variables';


function* detailDeviceRunViewFunc(params) {
  try {
    console.log('------ response detail devices -------', params?.payload);
    const response = yield call(detailDeviceRunViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(actions.detailDeviceRunViewSuccess(response?.data?.data));
    }
  } catch (error) {
    const errorMessage = error;

    yield put(actions.detailDeviceRunViewErr({ error: errorMessage || 'Fetch detail devices view failed' }));

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Fetch detail devices view failed');
    }
  }
}

function* listDevicesRunViewFunc(params) {
  try {
    const response = yield call(fetchListDevicesRunViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(actions.fetchListDevicesRunViewSuccess(response?.data?.data));
    }
  } catch (error) {
    const errorMessage = error;

    yield put(actions.fetchListDevicesRunViewErr({ error: errorMessage || 'Fetch list devices view failed' }));

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Fetch list devices view failed');
    }
  } finally { /* empty */ }
}

function* fetchWarrantyViewOrderFunc(params) {
  try {
    const response = yield call(fetchListWarrantyOrderAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchWarrantyViewOrderSuccess(response?.data?.data)
      );

      if (response?.data?.data?.items === null) {
        toast.info('Không có thông tin đơn bảo hành');
      }
    }

  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.fetchWarrantyViewOrderErr({ error: errorMessage || 'Fetch Warranty Order failed' })
    );

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Lấy đơn bảo hành không thành công');
    }
  } finally { /* empty */ }
}

function* activeWarrantyOrderViewFunc(params) {
  try {
    const response = yield call(activeWarrantyViewOrderAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.activeWarrantyOrderViewSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.activeWarrantyOrderViewErr({ error: errorMessage || 'Activate Warranty Order failed' })
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

function* updateOrderViewFunc(params) {
  try {
    const response = yield call(updateOneOrderViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateOrderViewAdminSuccess(response?.data?.data)
      );
      yield put(
        actions.fetchListOrderViewBegin({
          page: 1,
          limit: DEFAULT_PERPAGE,
          status: params?.payload?.status
        })
      );

      toast.success('Cập nhật order view thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateOrderViewAdminErr({ error: errorMessage || 'Update order view failed' })
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

function* updateOneComputerViewFunc(params) {
  try {
    const response = yield call(updateOneComputerRunViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateOneComputerViewAdminSuccess(response?.data?.data)
      );

      yield put(
        actions.listComputerRunViewBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Cập nhật server view thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateOneComputerViewAdminErr({ error: errorMessage || 'Update server view failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Cập nhật máy chủ view không thành công');
    }
  } finally { /* empty */ }
}

function* updateManyComputerViewFunc(params) {
  try {
    const response = yield call(updateManyComputerViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateManyComputerViewAdminSuccess(response?.data?.data)
      );

      yield put(
        actions.listComputerRunViewBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );
      toast.success('Cập nhật nhiều computer view thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateManyComputerViewAdminErr({ error: errorMessage || 'Update many computer view failed' })
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

function* updateManyOrderViewFunc(params) {
  try {
    const response = yield call(updateManyOrderViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateManyOrderViewAdminSuccess(response?.data?.data)
      );
      yield put(
        actions.fetchListOrderViewBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Cập nhật nhiều order view thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateManyOrderViewAdminErr({ error: errorMessage || 'Update many order view failed' })
    );
    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Cập nhật đơn hàng view không thành công');
    }
  } finally { /* empty */ }
}

function* createOrderViewFunc(params) {
  try {
    const response = yield call(createOrderViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.createOrderViewAdminSuccess(response?.data?.data)
      );
      yield put(
        actions.fetchListOrderViewBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Tạo order view thành công');
    }
  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.createOrderViewAdminErr({ error: errorMessage || 'Create order view failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Tạo đơn hàng view không thành công');
    }
  } finally { /* empty */ }
}

function* fetchListOrderViewFunc(params) {
  try {
    const response = yield call(fetchListOrderViewAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchListOrderViewSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.fetchListOrderViewErr({ error: errorMessage || 'Fetch list order view failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Lấy danh sách đơn view không thành công');
    }
  } finally { /* empty */ }
}

function* detailComputerViewFunc(params) {
  try {
    const response = yield call(detailComputerRunViewAPI, params?.payload?.id);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailComputerRunViewSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailComputerRunViewErr({ error: errorMessage || 'Detail server run view failed' })
    );
  } finally { /* empty */ }
}

function* deleteComputerViewFunc(params) {
  try {
    const response = yield call(deleteComputerRunViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.deleteComputerRunViewSuccess(response?.data?.data)
      );

      toast.success("Xóa máy chạy view thành công!");

      yield put(
        actions.listComputerRunViewBegin(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.deleteComputerRunViewErr({ error: errorMessage || 'Delete server run view failed' })
    );
  } finally { /* empty */ }
}

function* detailOrderViewFunc(params) {
  try {
    const response = yield call(getOneOrderViewAPI, params?.payload?.id);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailOrderViewSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailOrderViewErr({ error: errorMessage || 'Detail order view failed' })
    );
  } finally { /* empty */ }
}

function* viewInOrderViewFunc(params) {
  try {
    const response = yield call(viewOrderViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewOrderViewSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.viewOrderViewErr({ error: errorMessage || 'Detail order view failed' })
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
      actions.fetchWarrantyViewOrderBegin(requestData)
    );

  } catch (err) {
    yield put(
      actions.setRangeDateWarrantyFilterErr({ error: err || 'Set range filter failed' })
    );
  }
}

function* setNumberStatusBarFunc(params) {
  try {
    yield put(
      actions.setStatusBarViewSuccess(params?.payload)
    );
  } catch (err) {
    yield put(
      actions.actions.setStatusBarViewErr({ error: err || 'Set range filter failed' })
    );
  }
}


export function* updateManyComputerViewWatcherSaga() {
  yield takeLatest(actions.UPDATE_MANY_COMPUTER_VIEW_ADMIN_BEGIN, updateManyComputerViewFunc);
}

export function* updateOneComputerViewWatcherSaga() {
  yield takeLatest(actions.UPDATE_ONE_COMPUTER_VIEW_ADMIN_BEGIN, updateOneComputerViewFunc);
}

export function* updateManyOrderViewWatcherSaga() {
  yield takeLatest(actions.UPDATE_MANY_ORDER_VIEW_ADMIN_BEGIN, updateManyOrderViewFunc);
}

export function* updateOrderViewWatcherSaga() {
  yield takeLatest(actions.UPDATE_ORDER_VIEW_ADMIN_BEGIN, updateOrderViewFunc);
}

export function* listDevicesRunViewWatcherSaga() {
  yield takeLatest(actions.FETCH_LIST_DEVICES_RUN_VIEW_BEGIN, listDevicesRunViewFunc);
}

export function* detailDeviceRunViewWatcherSaga() {
  yield takeLatest(actions.DETAIL_DEVICE_RUN_VIEW_BEGIN, detailDeviceRunViewFunc);
}

export function* createOrderViewWatcherSaga() {
  yield takeLatest(actions.CREATE_ORDER_VIEW_ADMIN_BEGIN, createOrderViewFunc);
}

export function* fetchListOrderViewWatcherSaga() {
  yield takeLatest(actions.FETCH_LIST_ORDER_VIEW_BEGIN, fetchListOrderViewFunc);
}

export function* detailOrderViewWatcherSaga() {
  yield takeLatest(actions.DETAIL_ORDER_VIEW_BEGIN, detailOrderViewFunc);
}

export function* detailComputerViewWatcherSaga() {
  yield takeLatest(actions.DETAIL_COMPUTER_RUN_VIEW_BEGIN, detailComputerViewFunc);
}

export function* deleteComputerViewWatcherSaga() {
  yield takeLatest(actions.DELETE_COMPUTER_RUN_VIEW_BEGIN, deleteComputerViewFunc);
}

export function* viewInOrderViewWatcherSaga() {
  yield takeLatest(actions.VIEW_IN_ORDER_VIEW_BEGIN, viewInOrderViewFunc);
}

export function* fetchWarrantyViewOrderWatcherSaga() {
  yield takeLatest(actions.FETCH_WARRANTY_VIEW_ORDER_BEGIN, fetchWarrantyViewOrderFunc);
}

export function* activeWarrantyOrderViewWatcherSaga() {
  yield takeLatest(actions.ACTIVE_WARRANTY_ORDER_VIEW_BEGIN, activeWarrantyOrderViewFunc);
}

export function* refundhWarrantyOrderWatcherSaga() {
  yield takeLatest(actions.REFUND_WARRANTY_ORDER_BEGIN, refundWarrantyOrderFunc);
}

export function* setRangeDateWarrantyFilterWatcherSaga() {
  yield takeLatest(actions.SET_RANGE_DATE_WARRANTY_FILTER_BEGIN, setRangeDateWarrantyFilterFunc);
}

export function* setNumberStatusBarViewWatcherSaga() {
  yield takeLatest(actions.SET_STATUS_BAR_NUMBER_VIEW_BEGIN, setNumberStatusBarFunc);
}
