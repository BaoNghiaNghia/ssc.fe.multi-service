import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
  listAccountGmailCommentAPI,
  detailAccountGmailCommentAPI,
  createAccountGmailCommentAPI,
  deleteAccountGmailCommentAPI,
  patchAccountGmailCommentAPI,

  listAccountGmailLikeAPI,
  createAccountGmailLikeAPI,
  detailAccountGmailLikeAPI,
  deleteAccountGmailLikeAPI,
  patchAccountGmailLikeAPI,

  listAccountGmailViewAPI,
  createAccountGmailViewAPI,
  detailAccountGmailViewAPI,
  deleteAccountGmailViewAPI,
  patchAccountGmailViewAPI,

  listAccountGmailSubscribeAPI,
  createAccountGmailSubscribeAPI,
  detailAccountGmailSubscribeAPI,
  deleteAccountGmailSubscribeAPI,
  patchAccountGmailSubscribeAPI,
} from '../../config/api/Gmail/index';
import { DEFAULT_PERPAGE, MESSSAGE_STATUS_CODE, SERVICE_TYPE } from '../../variables';


function* changeServiceTypeInGmailFunc(params) {
  try {
    yield put(
      actions.changeServiceTypeInGmailSuccess(params?.payload?.value)
    );

    const isType = params?.payload?.value;

    switch (isType) {
      case SERVICE_TYPE.COMMENT.title:
        console.log('--- THAY ĐỔI COMMENT ---');
        yield put(
          actions.listAccountGmailCommentBegin({
            page: 1,
            limit: DEFAULT_PERPAGE
          })
        );
        break;

      case SERVICE_TYPE.LIKE.title:
        console.log('--- THAY ĐỔI LIKE ---');
        yield put(
          actions.listAccountGmailLikeBegin({
            page: 1,
            limit: DEFAULT_PERPAGE
          })
        );
        break;
        
      case SERVICE_TYPE.VIEW.title:
        console.log('--- THAY ĐỔI VIEW ---');
        yield put(
          actions.listAccountGmailViewBegin({
            page: 1,
            limit: DEFAULT_PERPAGE
          })
        );
        break;

      case SERVICE_TYPE.SUBSCRIBE.title:
        console.log('--- THAY ĐỔI SUBSCRIBE ---');
        yield put(
          actions.listAccountGmailSubscribeBegin({
            page: 1,
            limit: DEFAULT_PERPAGE
          })
        );
        break;
        
      default:
        console.log('Service type not recognized');
    }
  } catch (err) {
    yield put(
      actions.changeServiceTypeInGmailErr({ error: err || 'Count error subscribe failed' })
    );
  }
}

// COMMENT
function* listAccountGmailCommentFunc(params) {
  try {
    const response = yield call(listAccountGmailCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.listAccountGmailCommentSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.listAccountGmailCommentErr({ error: errorMessage || 'Comment - Fetch list account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Comment - Fetch list account gmail failed');
    }
  } finally { /* empty */ }
}

function* detailAccountGmailCommentFunc(params) {
  try {
    const response = yield call(detailAccountGmailCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailAccountGmailCommentSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailAccountGmailCommentErr({ error: errorMessage || 'Comment - Fetch detail account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Comment - Fetch detail account gmail failed');
    }
  } finally { /* empty */ }
}

function* createAccountGmailCommentFunc(params) {
  try {
    const response = yield call(createAccountGmailCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.createAccountGmailCommentSuccess(response?.data?.data)
      );

      yield put(
        actions.listAccountGmailCommentBegin()
      );

      toast.success('Tạo mới gmail comment thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.createAccountGmailCommentErr({ error: errorMessage || 'Comment - Create account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Comment - Create account gmail failed');
    }
  } finally { /* empty */ }
}

function* deleteAccountGmailCommentFunc(params) {
  try {
    const response = yield call(deleteAccountGmailCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      toast.success('Xóa tài khoản gmail thành công');
      yield put(
        actions.deleteAccountGmailCommentSuccess(response?.data?.data)
      );

      yield put(
        actions.listAccountGmailCommentBegin()
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.deleteAccountGmailCommentErr({ error: errorMessage || 'Comment - Delete account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Comment - Delete account gmail failed');
    }
  } finally { /* empty */ }
}

function* patchAccountGmailCommentFunc(params) {
  try {
    const response = yield call(patchAccountGmailCommentAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.patchAccountGmailCommentSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.patchAccountGmailCommentErr({ error: errorMessage || 'Comment - Patch account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Comment - Patch account gmail failed');
    }
  } finally { /* empty */ }
}


// LIKE
function* listAccountGmailLikeFunc(params) {
  try {
    const response = yield call(listAccountGmailLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.listAccountGmailLikeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.listAccountGmailLikeErr({ error: errorMessage || 'Like - Fetch list account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Like - Fetch list account gmail failed');
    }
  } finally { /* empty */ }
}

function* detailAccountGmailLikeFunc(params) {
  try {
    const response = yield call(detailAccountGmailLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailAccountGmailLikeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailAccountGmailLikeErr({ error: errorMessage || 'Like - Detail account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Like - Detail account gmail failed');
    }
  } finally { /* empty */ }
}

function* createAccountGmailLikeFunc(params) {
  try {
    const response = yield call(createAccountGmailLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.createAccountGmailLikeSuccess(response?.data?.data)
      );

      yield put(
        actions.listAccountGmailLikeBegin()
      );

      toast.success('Tạo mới gmail like thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.createAccountGmailLikeErr({ error: errorMessage || 'Like - Create account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Like - Create account gmail failed');
    }
  } finally { /* empty */ }
}

function* deleteAccountGmailLikeFunc(params) {
  try {
    const response = yield call(deleteAccountGmailLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      toast.success('Xóa tài khoản gmail thành công');

      yield put(
        actions.deleteAccountGmailLikeSuccess(response?.data?.data)
      );

      yield put(
        actions.listAccountGmailLikeBegin()
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.deleteAccountGmailLikeErr({ error: errorMessage || 'Like - Delete account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Like - Delete account gmail failed');
    }
  } finally { /* empty */ }
}

function* patchAccountGmailLikeFunc(params) {
  try {
    const response = yield call(patchAccountGmailLikeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.patchAccountGmailLikeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.patchAccountGmailLikeErr({ error: errorMessage || 'Like - Patch account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Like - Patch account gmail failed');
    }
  } finally { /* empty */ }
}




// VIEW
function* listAccountGmailViewFunc(params) {
  try {
    const response = yield call(listAccountGmailViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.listAccountGmailViewSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.listAccountGmailViewErr({ error: errorMessage || 'View - Fetch list account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('View - Fetch list account gmail failed');
    }
  } finally { /* empty */ }
}

function* detailAccountGmailViewFunc(params) {
  try {
    const response = yield call(detailAccountGmailViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailAccountGmailViewSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailAccountGmailViewErr({ error: errorMessage || 'View - Detail account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('View - Detail account gmail failed');
    }
  } finally { /* empty */ }
}

function* createAccountGmailViewFunc(params) {
  try {
    const response = yield call(createAccountGmailViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.createAccountGmailViewSuccess(response?.data?.data)
      );

      yield put(
        actions.listAccountGmailViewBegin()
      );

      toast.success('Tạo mới gmail view thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.createAccountGmailViewErr({ error: errorMessage || 'View - Create account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('View - Create account gmail failed');
    }
  } finally { /* empty */ }
}

function* deleteAccountGmailViewFunc(params) {
  try {
    const response = yield call(deleteAccountGmailViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      toast.success('Xóa tài khoản gmail thành công');

      yield put(
        actions.deleteAccountGmailViewSuccess(response?.data?.data)
      );

      yield put(
        actions.listAccountGmailViewBegin()
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.deleteAccountGmailViewErr({ error: errorMessage || 'View - Delete account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('View - Delete account gmail failed');
    }
  } finally { /* empty */ }
}

function* patchAccountGmailViewFunc(params) {
  try {
    const response = yield call(patchAccountGmailViewAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.patchAccountGmailViewSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.patchAccountGmailViewErr({ error: errorMessage || 'View - Patch account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('View - Patch account gmail failed');
    }
  } finally { /* empty */ }
}


// SUBSCRIBE
function* listAccountGmailSubscribeFunc(params) {
  yield put(
    actions.listAccountGmailSubscribeErr({ error: 'Subscribe - Fetch list account gmail failed' })
  );

  // try {
  //   const response = yield call(listAccountGmailSubscribeAPI, params?.payload);
    
  //   if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
  //     yield put(
  //       actions.listAccountGmailSubscribeSuccess(response?.data?.data)
  //     );
  //   }
  // } catch (error) {
  //   const errorMessage = error;
  //   yield put(
  //     actions.listAccountGmailSubscribeErr({ error: errorMessage || 'Subscribe - Fetch list account gmail failed' })
  //   );

  //   if (errorMessage?.response?.data?.data?.error) {
  //     toast.error(errorMessage?.response?.data?.data?.error);
  //   } else {
  //     toast.error('Subscribe - Fetch list account gmail failed');
  //   }
  // } finally { /* empty */ }
}

function* detailAccountGmailSubscribeFunc(params) {
  try {
    const response = yield call(detailAccountGmailSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailAccountGmailSubscribeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailAccountGmailSubscribeErr({ error: errorMessage || 'Subscribe - Detail account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Detail account gmail failed');
    }
  } finally { /* empty */ }
}

function* createAccountGmailSubscribeFunc(params) {
  try {
    const response = yield call(createAccountGmailSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.createAccountGmailSubscribeSuccess(response?.data?.data)
      );

      yield put(
        actions.listAccountGmailSubscribeBegin()
      );

      toast.success('Tạo mới gmail subscribe thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.createAccountGmailSubscribeErr({ error: errorMessage || 'Subscribe - Create account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Create account gmail failed');
    }
  } finally { /* empty */ }
}

function* deleteAccountGmailSubscribeFunc(params) {
  try {
    const response = yield call(deleteAccountGmailSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      toast.success('Xóa tài khoản gmail thành công');

      yield put(
        actions.deleteAccountGmailSubscribeSuccess(response?.data?.data)
      );

      yield put(
        actions.listAccountGmailSubscribeBegin()
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.deleteAccountGmailSubscribeErr({ error: errorMessage || 'Subscribe - Delete account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Delete account gmail failed');
    }
  } finally { /* empty */ }
}

function* patchAccountGmailSubscribeFunc(params) {
  try {
    const response = yield call(patchAccountGmailSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.patchAccountGmailSubscribeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.patchAccountGmailSubscribeErr({ error: errorMessage || 'Subscribe - Patch account gmail failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Patch account gmail failed');
    }
  } finally { /* empty */ }
}




// COMMENTS
export function* listAccountGmailCommentWatcherSaga() {
  yield takeLatest(actions.LIST_ACCOUNT_GMAIL_COMMENT_BEGIN, listAccountGmailCommentFunc);
}
export function* detailAccountGmailCommentWatcherSaga() {
  yield takeLatest(actions.DETAIL_ACCOUNT_GMAIL_COMMENT_BEGIN, detailAccountGmailCommentFunc);
}
export function* createAccountGmailCommentWatcherSaga() {
  yield takeLatest(actions.CREATE_ACCOUNT_GMAIL_COMMENT_BEGIN, createAccountGmailCommentFunc);
}
export function* deleteAccountGmailCommentWatcherSaga() {
  yield takeLatest(actions.DELETE_ACCOUNT_GMAIL_COMMENT_BEGIN, deleteAccountGmailCommentFunc);
}
export function* patchAccountGmailCommentWatcherSaga() {
  yield takeLatest(actions.PATCH_ACCOUNT_GMAIL_COMMENT_BEGIN, patchAccountGmailCommentFunc);
}


// LIKE
export function* listAccountGmailLikeWatcherSaga() {
  yield takeLatest(actions.LIST_ACCOUNT_GMAIL_LIKE_BEGIN, listAccountGmailLikeFunc);
}
export function* detailAccountGmailLikeWatcherSaga() {
  yield takeLatest(actions.DETAIL_ACCOUNT_GMAIL_LIKE_BEGIN, detailAccountGmailLikeFunc);
}
export function* createAccountGmailLikeWatcherSaga() {
  yield takeLatest(actions.CREATE_ACCOUNT_GMAIL_LIKE_BEGIN, createAccountGmailLikeFunc);
}
export function* deleteAccountGmailLikeWatcherSaga() {
  yield takeLatest(actions.DELETE_ACCOUNT_GMAIL_LIKE_BEGIN, deleteAccountGmailLikeFunc);
}
export function* patchAccountGmailLikeWatcherSaga() {
  yield takeLatest(actions.PATCH_ACCOUNT_GMAIL_LIKE_BEGIN, patchAccountGmailLikeFunc);
}


// VIEW
export function* listAccountGmailViewWatcherSaga() {
  yield takeLatest(actions.LIST_ACCOUNT_GMAIL_VIEW_BEGIN, listAccountGmailViewFunc);
}
export function* detailAccountGmailViewWatcherSaga() {
  yield takeLatest(actions.DETAIL_ACCOUNT_GMAIL_VIEW_BEGIN, detailAccountGmailViewFunc);
}
export function* createAccountGmailViewWatcherSaga() {
  yield takeLatest(actions.CREATE_ACCOUNT_GMAIL_VIEW_BEGIN, createAccountGmailViewFunc);
}
export function* deleteAccountGmailViewWatcherSaga() {
  yield takeLatest(actions.DELETE_ACCOUNT_GMAIL_VIEW_BEGIN, deleteAccountGmailViewFunc);
}
export function* patchAccountGmailViewWatcherSaga() {
  yield takeLatest(actions.PATCH_ACCOUNT_GMAIL_VIEW_BEGIN, patchAccountGmailViewFunc);
}


// SUBSCRIBE
export function* listAccountGmailSubscribeWatcherSaga() {
  yield takeLatest(actions.LIST_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN, listAccountGmailSubscribeFunc);
}

export function* detailAccountGmailSubscribeWatcherSaga() {
  yield takeLatest(actions.DETAIL_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN, detailAccountGmailSubscribeFunc);
}
export function* createAccountGmailSubscribeWatcherSaga() {
  yield takeLatest(actions.CREATE_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN, createAccountGmailSubscribeFunc);
}

export function* deleteAccountGmailSubscribeWatcherSaga() {
  yield takeLatest(actions.DELETE_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN, deleteAccountGmailSubscribeFunc);
}

export function* patchAccountGmailSubscribeWatcherSaga() {
  yield takeLatest(actions.PATCH_ACCOUNT_GMAIL_SUBSCRIBE_BEGIN, patchAccountGmailSubscribeFunc);
}


export function* changeServiceTypeInGmailWatcherSaga() {
  yield takeLatest(actions.CHANGE_SERVICE_TYPE_IN_GMAIL_BEGIN, changeServiceTypeInGmailFunc);
}
