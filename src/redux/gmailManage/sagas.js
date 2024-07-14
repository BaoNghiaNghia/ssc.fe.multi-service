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
} from '../../config/apiFactory/Gmail/index';
import { MESSSAGE_STATUS_CODE, SERVICE_TYPE } from '../../variables';


function* changeServiceTypeInGmailFunc(params) {
  try {
    yield put(
      actions.changeServiceTypeInGmailSuccess(params?.payload?.value)
    );

    const isType = params?.payload?.value;

    if (isType === SERVICE_TYPE.COMMENT.title) {
        console.log('--- THAY ĐỔI COMMENT ---')
    }

    if (isType === SERVICE_TYPE.LIKE.title) {
        console.log('--- THAY ĐỔI LIKE ---')
    }
    if (isType === SERVICE_TYPE.SUBSCRIBE.title) {
        console.log('--- THAY ĐỔI SUBSCRIBE ---')
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
        actions.detailAccountGmailCommentSuccess(response?.data?.data?.reverse())
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
        actions.createAccountGmailCommentSuccess(response?.data?.data?.reverse())
      );
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
      yield put(
        actions.deleteAccountGmailCommentSuccess(response?.data?.data?.reverse())
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
        actions.patchAccountGmailCommentSuccess(response?.data?.data?.reverse())
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
        actions.listAccountGmailLikeSuccess(response?.data?.data?.reverse())
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
        actions.detailAccountGmailLikeSuccess(response?.data?.data?.reverse())
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
        actions.createAccountGmailLikeSuccess(response?.data?.data?.reverse())
      );
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
      yield put(
        actions.deleteAccountGmailLikeSuccess(response?.data?.data?.reverse())
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
        actions.patchAccountGmailLikeSuccess(response?.data?.data?.reverse())
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


export function* changeServiceTypeInGmailWatcherSaga() {
  yield takeLatest(actions.CHANGE_SERVICE_TYPE_IN_GMAIL_BEGIN, changeServiceTypeInGmailFunc);
}
