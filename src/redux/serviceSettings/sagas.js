import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";

import {
  createServiceAPI,
  updateServiceAPI,
  fetchListServiceAPI
} from '../../config/apiFactory/ServiceSetting/index';

import { MESSSAGE_STATUS_CODE, SERVICE_SETTING_TYPE } from '../../variables';


function* fetchListSettingsFunc(params) {
  try {
    const response = yield call(fetchListServiceAPI, params);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchListServiceSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.fetchListServiceErr({ error: errorMessage || 'Fetch services list failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch report failed');
    }
  } finally { /* empty */ }
}

function* fetchListServicesFunc(params) {
  try {
    const response = yield call(fetchListServiceAPI, params);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchListServiceSuccess(response?.data?.data)
      );
    }

  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.fetchListServiceErr({ error: errorMessage || 'Fetch services list failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch report failed');
    }

  } finally { /* empty */ }
}

function* createServicesFunc(params) {
    try {
      console.log('--- create new services ---', params);
      const response = yield call(createServiceAPI, params?.payload);
      
      if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
        yield put(
          actions.createServiceSuccess(response?.data?.data)
        );

        yield put(
          actions.fetchListServiceBegin()
        );

        toast.success(response?.data?.message);
      }
    } catch (error) {
        const errorMessage = error;
        yield put(
          actions.createServiceErr({ error: errorMessage || 'Create services list failed' })
        );

        console.log('------ error ------', errorMessage)
    
        if (errorMessage?.response?.data?.data?.error) {
          toast.error(errorMessage?.response?.data?.data?.error);
        } else if (errorMessage?.response?.data?.message) {
          toast.error(errorMessage?.response?.data?.message);
        } else {
          toast.error('Create services list failed');
        }

    } finally { /* empty */ }
}

function* updateServicesFunc(params) {
  try {
    const response = yield call(updateServiceAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateServiceSuccess(response?.data?.data)
      );

      yield put(
        actions.fetchListServiceBegin()
      );

      toast.success(response?.data?.message);
    }
  } catch (error) {
      const errorMessage = error;
      yield put(
        actions.updateServiceErr({ error: errorMessage || 'Update services list failed' })
      );

      console.log('------ error ------', errorMessage)
  
      if (errorMessage?.response?.data?.data?.error) {
        toast.error(errorMessage?.response?.data?.data?.error);
      } else if (errorMessage?.response?.data?.message) {
        toast.error(errorMessage?.response?.data?.message);
      } else {
        toast.error('Update services list failed');
      }

  } finally { /* empty */ }
}

export function* modalDetailServiceFunc(params) {
  try {
    yield put(
      actions.modalDetailServiceSuccess(params?.payload)
    );
  } catch (error) {
      const errorMessage = error;

      yield put(
        actions.modalDetailServiceErr({ error: errorMessage || 'Update services list failed' })
      );
  } finally { /* empty */ }
}

function* changeTabTypeFunc(params) {
  try {
    if (params?.payload === SERVICE_SETTING_TYPE.SERVICE.title) {
      yield put(
        actions.fetchListServiceBegin()
      );
    } else {
      yield put(
        actions.fetchListSettingsBegin()
      );
    }

    yield put(
      actions.changeTypeTabSuccess(params?.payload)
    );
  } catch (err) {
    yield put(
      actions.changeTypeTabErr({ error: err || 'Update member failed' })
    );
  }
}


export function* fetchListServicesWatcherSaga() {
  yield takeLatest(actions.FETCH_LIST_SERVICES_BEGIN, fetchListServicesFunc);
}

export function* fetchListSettingsWatcherSaga() {
  yield takeLatest(actions.FETCH_LIST_SERVICES_BEGIN, fetchListSettingsFunc);
}

export function* createServicesWatcherSaga() {
  yield takeLatest(actions.CREATE_SERVICES_BEGIN, createServicesFunc);
}

export function* updateServicesWatcherSaga() {
  yield takeLatest(actions.UPDATE_SERVICES_BEGIN, updateServicesFunc);
}

export function* modalDetailServiceWatcherSaga() {
  yield takeLatest(actions.MODAL_DETAIL_SERVICE_BEGIN, modalDetailServiceFunc);
}

export function* changeTabTypeMemberWatcherSaga() {
  yield takeLatest(actions.CHANGE_TYPE_TAB_BEGIN, changeTabTypeFunc);
}
