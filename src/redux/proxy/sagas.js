import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
    createDomainAPI,
    deleteDomainAPI,
    getListProxyInDomainAPI,
    listGeneralDomainAPI,
    patchProxyAPI,
    listDomainByServiceAPI
} from '../../config/api/Proxy/index';
import { MESSSAGE_STATUS_CODE } from '../../variables';


function* patchProxyFunc(params) {
  try {
    const response = yield call(patchProxyAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.patchProxySuccess(params?.payload)
      );
      yield put(
        actions.listAllDomainBegin()
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.patchProxyErr({ error: errorMessage || 'Patch proxy failed' })
    );
  } finally { /* empty */ }
}

function* detailDomainFunc(params) {
  try {
    yield put(
      actions.detailDomainSuccess(params?.payload)
    );
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailDomainErr({ error: errorMessage || 'Create proxy failed' })
    );
  } finally { /* empty */ }
}

function* createDomainFunc(params) {
  try {
    const response = yield call(createDomainAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.createDomainSuccess(response?.data?.data)
      );
      yield put(
        actions.listAllDomainBegin()
      );
  
      toast.success('Tạo mới domain thành công');
    }

  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.createDomainErr({ error: errorMessage || 'Create proxy failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Create proxy failed');
    }
  } finally { /* empty */ }
}

function* deleteDomainFunc(params) {
  try {
    const response = yield call(deleteDomainAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.deleteDomainSuccess(response?.data?.data)
      );
      yield put(
        actions.listAllDomainBegin()
      );
  
      toast.success('Xóa domain thành công');
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.deleteDomainErr({ error: errorMessage || 'Delete proxy failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Delete proxy failed');
    }
  } finally { /* empty */ }
}

function* getListProxyInDomainFunc(params) {
  try {
    const response = yield call(getListProxyInDomainAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.getListProxyInDomainSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.getListProxyInDomainErr({ error: errorMessage || 'Get list proxy failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Get list proxy failed');
    }
  } finally { /* empty */ }
}

function* listGeneralDomainFunc(params) {
  try {
    const response = yield call(listGeneralDomainAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.listAllDomainSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.listAllDomainErr({ error: errorMessage || 'List domain failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('List domain failed');
    }
  } finally { /* empty */ }
}

function* listDomainInServiceFunc(params) {
  try {
    const response = yield call(listDomainByServiceAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.listDomainByServiceSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.listDomainByServiceErr({ error: errorMessage || 'List service of domain failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('List service of domain failed');
    }
  } finally { /* empty */ }
}


export function* patchProxyWatcherSaga() {
  yield takeLatest(actions.PATCH_PROXY_BEGIN, patchProxyFunc);
}
export function* detailDomainWatcherSaga() {
  yield takeLatest(actions.DETAIL_DOMAIN_BEGIN, detailDomainFunc);
}
export function* createDomainWatcherSaga() {
  yield takeLatest(actions.CREATE_DOMAIN_BEGIN, createDomainFunc);
}
export function* deleteDomainWatcherSaga() {
  yield takeLatest(actions.DELETE_DOMAIN_BEGIN, deleteDomainFunc);
}
export function* getListProxyInDomainWatcherSaga() {
  yield takeLatest(actions.GET_LIST_PROXY_IN_DOMAIN_BEGIN, getListProxyInDomainFunc);
}
export function* listGeneralDomainWatcherSaga() {
  yield takeLatest(actions.LIST_ALL_DOMAIN_BEGIN, listGeneralDomainFunc);
}

export function* listDomainInServiceWatcherSaga() {
  yield takeLatest(actions.LIST_DOMAIN_BY_SERVICE_BEGIN, listDomainInServiceFunc);
}
