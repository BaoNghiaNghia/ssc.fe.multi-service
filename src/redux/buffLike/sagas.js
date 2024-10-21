import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import actionReport from '../reports/actions';

import {
    likeOrderLikeAPI,
    fetchListOrderLikeAPI,
    createOrderLikeAPI,
    getOneOrderLikeAPI,
    updateOneOrderLikeAPI,
    listComputerRunLikeAPI,
    updateManyOrderLikeAPI,
    updateManyComputerLikeAPI,
    detailComputerRunLikeAPI,
    deleteComputerRunLikeAPI,
    updateOneComputerRunLikeAPI,

    activeWarrantyOrderAPI,
    fetchListWarrantyOrderAPI,
    refundWarrantyOrderAPI,
} from '../../config/api/BuffLike/index';
import { DEFAULT_PERPAGE, MESSSAGE_STATUS_CODE } from '../../variables';


function* listComputerRunLikeFunc(params) {
  try {
    const response = yield call(listComputerRunLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.listComputerRunLikeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.listComputerRunLikeErr({ error: errorMessage || 'Fetch list computer run like failed' })
    );

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Fetch list computer run like failed');
    }
  } finally { /* empty */ }
}

function* fetchWarrantyOrderFunc(params) {
  try {
    const response = yield call(fetchListWarrantyOrderAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchWarrantyOrderSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.fetchWarrantyOrderErr({ error: errorMessage || 'Lấy đơn bảo hành không thành công' })
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
        actions.activeWarrantyOrderLikeSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.activeWarrantyOrderLikeErr({ error: errorMessage || 'Activate Warranty Order failed' })
    );

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Activate Warranty Order failed');
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

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Refund Warranty Order failed');
    }
  } finally { /* empty */ }
}

function* updateOrderLikeFunc(params) {
  try {
    const response = yield call(updateOneOrderLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateOrderLikeAdminSuccess(response?.data?.data)
      );
      yield put(
        actions.fetchListOrderLikeBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Cập nhật order like thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateOrderLikeAdminErr({ error: errorMessage || 'Cập nhật đơn like thất bại' })
    );

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Cập nhật đơn like thất bại');
    }
  } finally { /* empty */ }
}

function* updateOneComputerLikeFunc(params) {
  try {
    const response = yield call(updateOneComputerRunLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateOneComputerLikeAdminSuccess(response?.data?.data)
      );

      yield put(
        actions.listComputerRunLikeBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Cập nhật server like thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateOneComputerLikeAdminErr({ error: errorMessage || 'Update server like failed' })
    );

    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Update server like failed');
    }
  } finally { /* empty */ }
}

function* updateManyComputerLikeFunc(params) {
  try {
    const response = yield call(updateManyComputerLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateManyComputerLikeAdminSuccess(response?.data?.data)
      );

      yield put(
        actions.listComputerRunLikeBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );
      toast.success('Cập nhật nhiều computer like thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateManyComputerLikeAdminErr({ error: errorMessage || 'Update many computer like failed' })
    );
    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Update many computer like failed');
    }
  } finally { /* empty */ }
}

function* updateManyOrderLikeFunc(params) {
  try {
    const response = yield call(updateManyOrderLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateManyOrderLikeAdminSuccess(response?.data?.data)
      );
      yield put(
        actions.fetchListOrderLikeBegin({
          page: 1,
          limit: DEFAULT_PERPAGE
        })
      );

      toast.success('Cập nhật nhiều order like thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateManyOrderLikeAdminErr({ error: errorMessage || 'Update many order like failed' })
    );
    if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Update many order like failed');
    }
  } finally { /* empty */ }
}

function* createOrderLikeFunc(params) {
  const { orderType, ordersArray, orderSingle, from, to } = params?.payload || {};

  let successCount = 0;
  let failureCount = 0;
  const objectSuccess = [];
  const objectFailed = [];

  const initialFilter = {
    start_date: `${from  } 00:00:00`,
    end_date: `${to  } 23:59:59`,
    status: 1
  };

  const initServerPagination = {
    page: 1,
    limit: DEFAULT_PERPAGE
  };

  function* callWithCounting(order) {
    try {
      const response = yield call(createOrderLikeAPI, order);

      if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
        successCount += 1;
        objectSuccess.push({
          order,
          result: response?.data?.data
        });
        return response;
      }
      
      failureCount += 1;
      objectFailed.push({
        order,
        result: response?.data?.data || null
      });

      return { status: 'error', response };
    } catch (error) {
      failureCount += 1;
      objectFailed.push({
        order,
        result: error?.response?.data || null
      });

      return { status: 'error', error };
    }
  }

  function* handleRouteSpecificActions() {
    const currentRoute = window.location.pathname;
    if (currentRoute.includes('/admin/tong-quan')) {
      yield put(actionReport.likeStatisticLikeByOrderReportBegin());
      yield put(actionReport.likeStatisticTaskSuccessInMinuteBegin());
      yield put(actionReport.likeStatisticTaskDurationInMinuteBegin());
      yield put(actionReport.likeStatisticOrderAmountBegin(initialFilter));
      yield put(actionReport.likeStatisticAccountStatusLikeBegin(initialFilter));
      yield put(actionReport.likeStatisticPerformanceLikeBegin(initialFilter));
      yield put(actionReport.likeStatisticLikeByDayBegin(initialFilter));
      yield put(actionReport.likeStatisticComputerThreadBegin(initialFilter));

      yield put(actionReport.likeStatisticAccountOnComputerBegin(initialFilter));
      yield put(actionReport.likeStatisticByStatusOrderBegin(initialFilter));
      yield put(actionReport.likeStatisticRunningOrderBegin(initialFilter));
      yield put(actionReport.likeStatisticTaskOfToolBegin(initialFilter));
      yield put(actionReport.likeStatisticRunningUserOrderBegin(initialFilter));
      yield put(actionReport.likeStatisticUserPointBegin(initialFilter));
      yield put(actionReport.likeStatisticTotalOrderBegin(initialFilter));
      yield put(actionReport.likeStatisticOrderByDaysBegin(initialFilter));

      yield put(actions.listComputerRunLikeBegin(initServerPagination));
    } else if (currentRoute.includes('/admin/like/danh-sach-don')) {
      yield put(actions.fetchListOrderLikeBegin({ page: 1, limit: DEFAULT_PERPAGE }));
    }
  }

  try {
    if (orderType === 'single') {
      const response = yield call(createOrderLikeAPI, orderSingle);

      if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
        yield put(actions.createOrderLikeAdminSuccess(response?.data?.data));
        yield put(actions.fetchListOrderLikeBegin({ page: 1, limit: DEFAULT_PERPAGE }));
        toast.success('Tạo order like thành công');

        yield* handleRouteSpecificActions();
      }
    } else if (orderType === 'multiple') {
      const responses = yield all(ordersArray.map(order => call(callWithCounting, order)));

      toast.info(`Thành công ${successCount} đơn. Thất bại ${failureCount} đơn`);

      responses.forEach((response, index) => {
        if (response.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
          console.log(`Order ${index + 1} succeeded:`, response?.data);
        } else {
          console.error(`Order ${index + 1} failed:`, response.error || response.response);
        }
      });

      yield* handleRouteSpecificActions();
    }

    yield put(actionReport.setResponseMultipleOrderCreated({
      success: objectSuccess,
      failed: objectFailed
    }));
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Create order like failed';
    yield put(actions.createOrderLikeAdminErr({ error: errorMessage }));

    toast.error(`Tạo đơn hàng like không thành công. Thành công ${successCount} đơn. Thất bại ${failureCount} đơn. ${errorMessage}`);
  }
}


function* fetchListOrderLikeFunc(params) {
  try {
    const response = yield call(fetchListOrderLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchListOrderLikeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.fetchListOrderLikeErr({ error: errorMessage || 'Fetch list order like failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch list order like failed');
    }
  } finally { /* empty */ }
}

function* detailComputerLikeFunc(params) {
  try {
    const response = yield call(detailComputerRunLikeAPI, params?.payload?.id);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailComputerRunLikeSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailComputerRunLikeErr({ error: errorMessage || 'Detail server run like failed' })
    );
  } finally { /* empty */ }
}

function* deleteComputerLikeFunc(params) {
  try {
    const response = yield call(deleteComputerRunLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.deleteComputerRunLikeSuccess(response?.data?.data)
      );

      toast.success("Xóa máy chạy like thành công!");

      yield put(
        actions.listComputerRunLikeBegin(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.deleteComputerRunLikeErr({ error: errorMessage || 'Delete server run like failed' })
    );
  } finally { /* empty */ }
}

function* detailOrderLikeFunc(params) {
  try {
    const response = yield call(getOneOrderLikeAPI, params?.payload?.id);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailOrderLikeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailOrderLikeErr({ error: errorMessage || 'Detail order like failed' })
    );
  } finally { /* empty */ }
}

function* likeInOrderLikeFunc(params) {
  try {
    const response = yield call(likeOrderLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeOrderLikeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.likeOrderLikeErr({ error: errorMessage || 'Detail order like failed' })
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
      actions.fetchWarrantyOrderBegin(requestData)
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
      actions.setStatusBarLikeSuccess(params?.payload)
    );
  } catch (err) {
    yield put(
      actions.actions.setStatusBarLikeErr({ error: err || 'Set range filter failed' })
    );
  }
}


export function* updateManyComputerLikeWatcherSaga() {
  yield takeLatest(actions.UPDATE_MANY_COMPUTER_LIKE_ADMIN_BEGIN, updateManyComputerLikeFunc);
}

export function* updateOneComputerLikeWatcherSaga() {
  yield takeLatest(actions.UPDATE_ONE_COMPUTER_LIKE_ADMIN_BEGIN, updateOneComputerLikeFunc);
}

export function* updateManyOrderLikeWatcherSaga() {
  yield takeLatest(actions.UPDATE_MANY_ORDER_LIKE_ADMIN_BEGIN, updateManyOrderLikeFunc);
}

export function* updateOrderLikeWatcherSaga() {
  yield takeLatest(actions.UPDATE_ORDER_LIKE_ADMIN_BEGIN, updateOrderLikeFunc);
}
export function* listComputerRunLikeWatcherSaga() {
  yield takeLatest(actions.LIST_COMPUTER_RUN_LIKE_BEGIN, listComputerRunLikeFunc);
}

export function* createOrderLikeWatcherSaga() {
  yield takeLatest(actions.CREATE_ORDER_LIKE_ADMIN_BEGIN, createOrderLikeFunc);
}

export function* fetchListOrderLikeWatcherSaga() {
  yield takeLatest(actions.FETCH_LIST_ORDER_LIKE_BEGIN, fetchListOrderLikeFunc);
}

export function* detailOrderLikeWatcherSaga() {
  yield takeLatest(actions.DETAIL_ORDER_LIKE_BEGIN, detailOrderLikeFunc);
}

export function* detailComputerLikeWatcherSaga() {
  yield takeLatest(actions.DETAIL_COMPUTER_RUN_LIKE_BEGIN, detailComputerLikeFunc);
}

export function* deleteComputerLikeWatcherSaga() {
  yield takeLatest(actions.DELETE_COMPUTER_RUN_LIKE_BEGIN, deleteComputerLikeFunc);
}

export function* likeInOrderLikeWatcherSaga() {
  yield takeLatest(actions.LIKE_IN_ORDER_LIKE_BEGIN, likeInOrderLikeFunc);
}

export function* fetchWarrantyLikeOrderWatcherSaga() {
  yield takeLatest(actions.FETCH_WARRANTY_ORDER_BEGIN, fetchWarrantyOrderFunc);
}

export function* activeWarrantyLikeOrderWatcherSaga() {
  yield takeLatest(actions.ACTIVE_WARRANTY_ORDER_LIKE_BEGIN, activeWarrantyOrderFunc);
}

export function* refundhWarrantyLikeOrderWatcherSaga() {
  yield takeLatest(actions.REFUND_WARRANTY_ORDER_BEGIN, refundWarrantyOrderFunc);
}

export function* setRangeDateWarrantyFilterWatcherSaga() {
  yield takeLatest(actions.SET_RANGE_DATE_WARRANTY_FILTER_BEGIN, setRangeDateWarrantyFilterFunc);
}

export function* setNumberStatusBarLikeWatcherSaga() {
  yield takeLatest(actions.SET_STATUS_BAR_NUMBER_LIKE_BEGIN, setNumberStatusBarFunc);
}
