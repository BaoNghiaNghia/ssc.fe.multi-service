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

export function* fetchListServicesWatcherSaga() {
  yield takeLatest(actions.FETCH_LIST_SERVICES_BEGIN, fetchListServicesFunc);
}

export function* createServicesWatcherSaga() {
  yield takeLatest(actions.CREATE_SERVICES_BEGIN, createServicesFunc);
}

