import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
    createDomainAPI,
    deleteDomainAPI,
    getListProxyInDomainAPI,
    listGeneralDomainAPI
} from '../../config/apiFactory/Proxy/index';
import { MESSSAGE_STATUS_CODE } from '../../variables';


function* createDomainFunc(params) {
  try {
    const response = yield call(createDomainAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.createDomainSuccess(response?.data?.data)
      );
    }

    yield put(
      actions.listAllDomainBegin()
    );
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
