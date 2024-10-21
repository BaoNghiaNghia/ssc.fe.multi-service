import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import actionReport from '../reports/actions';
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

    activeWarrantyCommentOrderAPI,
    fetchListWarrantyOrderAPI,
    refundWarrantyOrderAPI,
} from '../../config/api/BuffComment/index';
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

      if (response?.data?.data?.items === null) {
        toast.info('Không có thông tin đơn bảo hành');
      }
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

function* activeWarrantyOrderCommentFunc(params) {
  try {
    const response = yield call(activeWarrantyCommentOrderAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.activeWarrantyOrderCommentSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;

    yield put(
      actions.activeWarrantyOrderCommentErr({ error: errorMessage || 'Activate Warranty Order failed' })
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
          limit: DEFAULT_PERPAGE,
          status: params?.payload
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
      const response = yield call(createOrderCommentAPI, order);

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
      yield put(actionReport.commentStatisticCommentByOrderReportBegin());
      yield put(actionReport.commentStatisticTaskSuccessInMinuteBegin());
      yield put(actionReport.commentStatisticTaskDurationInMinuteBegin());
      yield put(actionReport.commentStatisticOrderAmountBegin(initialFilter));
      yield put(actionReport.commentStatisticAccountStatusCommentBegin(initialFilter));
      yield put(actionReport.commentStatisticPerformanceCommentBegin(initialFilter));
      yield put(actionReport.commentStatisticCommentByDayBegin(initialFilter));
      yield put(actionReport.commentStatisticComputerThreadBegin(initialFilter));

      yield put(actionReport.commentStatisticAccountOnComputerBegin(initialFilter));
      yield put(actionReport.commentStatisticByStatusOrderBegin(initialFilter));
      yield put(actionReport.commentStatisticRunningOrderBegin(initialFilter));
      yield put(actionReport.commentStatisticTaskOfToolBegin(initialFilter));
      yield put(actionReport.commentStatisticRunningUserOrderBegin(initialFilter));
      yield put(actionReport.commentStatisticUserPointBegin(initialFilter));
      yield put(actionReport.commentStatisticTotalOrderBegin(initialFilter));
      yield put(actionReport.commentStatisticOrderByDaysBegin(initialFilter));

      yield put(actions.listComputerRunCommentBegin(initServerPagination));
    } else if (currentRoute.includes('/admin/comment/danh-sach-don')) {
      yield put(actions.fetchListOrderCommentBegin({ page: 1, limit: DEFAULT_PERPAGE }));
    }
  }

  try {
    if (orderType === 'single') {
      const response = yield call(createOrderCommentAPI, orderSingle);

      if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
        yield put(actions.createOrderCommentAdminSuccess(response?.data?.data));
        yield put(actions.fetchListOrderCommentBegin({ page: 1, limit: DEFAULT_PERPAGE }));

        toast.success('Tạo order comment thành công');
        yield* handleRouteSpecificActions();
      }
    } else if (orderType === 'multiple') {
      const responses = yield all(ordersArray.map(orderItem => call(callWithCounting, orderItem)));

      toast.info(`Thành công ${successCount} đơn. Thất bại ${failureCount} đơn`);

      responses.forEach((response, index) => {
        if (response.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
          console.log(`Comment ${index + 1} succeeded:`, response?.data);
        } else {
          console.error(`Comment ${index + 1} failed:`, response.error || response.response);
        }
      });

      yield* handleRouteSpecificActions();
    }

    yield put(actionReport.setResponseMultipleOrderCreated({
      success: objectSuccess,
      failed: objectFailed
    }));
  } catch (error) {
    const errorMessage = error?.response?.data?.data?.error || error?.response?.data?.message || 'Create order comment failed';

    yield put(actions.createOrderCommentAdminErr({ error: errorMessage }));
    
    toast.error(`Tạo đơn hàng comment không thành công. Thành công ${successCount} đơn. Thất bại ${failureCount} đơn. ${errorMessage}`);
  }
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

function* setNumberStatusBarFunc(params) {
  try {
    yield put(
      actions.setStatusBarCommentSuccess(params?.payload)
    );
  } catch (err) {
    yield put(
      actions.actions.setStatusBarCommentErr({ error: err || 'Set range filter failed' })
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

export function* activeWarrantyOrderCommentWatcherSaga() {
  yield takeLatest(actions.ACTIVE_WARRANTY_ORDER_COMMENT_BEGIN, activeWarrantyOrderCommentFunc);
}

export function* refundhWarrantyOrderWatcherSaga() {
  yield takeLatest(actions.REFUND_WARRANTY_ORDER_BEGIN, refundWarrantyOrderFunc);
}

export function* setRangeDateWarrantyFilterWatcherSaga() {
  yield takeLatest(actions.SET_RANGE_DATE_WARRANTY_FILTER_BEGIN, setRangeDateWarrantyFilterFunc);
}

export function* setNumberStatusBarCommentWatcherSaga() {
  yield takeLatest(actions.SET_STATUS_BAR_NUMBER_COMMENT_BEGIN, setNumberStatusBarFunc);
}
