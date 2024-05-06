import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";

import {
  createServiceAPI,
  fetchListServiceAPI
} from '../../config/apiFactory/ServiceSetting/index';

import { MESSSAGE_STATUS_CODE } from '../../variables';


function* fetchListServicesFunc(params) {
  try {
    console.log('--- check list services ----');
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
        const response = yield call(fetchListServiceAPI, params?.payload);
        
        if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
          yield put(
            actions.fetchListServiceSuccess(response?.data?.data)
          );
        }

    } catch (error) {
        const errorMessage = error;
        yield put(
          actions.fetchListServiceErr({ error: errorMessage || 'Create services list failed' })
        );
    
        if (errorMessage?.response?.data?.data?.error) {
          toast.error(errorMessage?.response?.data?.data?.error);
        } else {
          toast.error('Fetch report failed');
        }

    } finally { /* empty */ }
}

export function* fetchListServicesWatcherSaga() {
  yield takeLatest(actions.FETCH_LIST_SERVICES_BEGIN, fetchListServicesFunc);
}

export function* createServicesWatcherSaga() {
  yield takeLatest(actions.CREATE_SERVICES_BEGIN, createServicesFunc);
}
