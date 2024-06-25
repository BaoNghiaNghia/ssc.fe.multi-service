import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";

import {
  createServiceAPI,
  updateServiceAPI,
  fetchListServiceAPI,
  fetchListSettingAPI,
  updateSettingAPI,

  createGoogleKeyAPI,
  deleteGoogleKeyAPI,
  detailGoogleKeyAPI,
  fetchListAllGoogleKeyAPI,
  updateGoogleKeyAPI
} from '../../config/apiFactory/ServiceSetting/index';

import { MESSSAGE_STATUS_CODE, SERVICE_SETTING_TYPE } from '../../variables';

function* deleteGoogleKeyFunc(params) {
  try {
    const response = yield call(deleteGoogleKeyAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.deleteGoogleKeySuccess(response?.data?.data)
      );

      yield put(
        actions.fetchListAllGoogleKeyBegin()
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.deleteGoogleKeyErr({ error: errorMessage || 'Delete google key failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Delete google key failed');
    }
  } finally { /* empty */ }
}

function* updateGoogleKeyFunc(params) {
  try {
    const response = yield call(updateGoogleKeyAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateGoogleKeySuccess(response?.data?.data)
      );

      yield put(
        actions.fetchListAllGoogleKeyBegin()
      );

      toast.success('Cập nhật Google Key thành công')
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.updateGoogleKeyErr({ error: errorMessage || 'Update google key failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Update google key failed');
    }
  } finally { /* empty */ }
}

function* createGoogleKeyFunc(params) {
  try {
    const response = yield call(createGoogleKeyAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.createGoogleKeySuccess(response?.data?.data)
      );

      yield put(
        actions.fetchListAllGoogleKeyBegin()
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.createGoogleKeyErr({ error: errorMessage || 'Create google key failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Create google key failed');
    }
  } finally { /* empty */ }
}

function* detailGoogleKeyFunc(params) {
  try {
    const response = yield call(detailGoogleKeyAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.detailGoogleKeySuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.detailGoogleKeyErr({ error: errorMessage || 'Detail google key failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Detail google key failed');
    }
  } finally { /* empty */ }
}

function* fetchListAllGoogleKeyFunc(params) {
  try {
    const response = yield call(fetchListAllGoogleKeyAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchListAllGoogleKeySuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.fetchListAllGoogleKeyErr({ error: errorMessage || 'Fetch google key list failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch list google key failed');
    }
  } finally { /* empty */ }
}

function* fetchListSettingsFunc(params) {
  try {
    const response = yield call(fetchListSettingAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.fetchListSettingsSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.fetchListSettingsErr({ error: errorMessage || 'Fetch services list failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch list settings failed');
    }
  } finally { /* empty */ }
}

function* fetchListServicesFunc(params) {
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
      actions.fetchListServiceErr({ error: errorMessage || 'Fetch services list failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch services list failed');
    }

  } finally { /* empty */ }
}

function* createServicesFunc(params) {
    try {
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

function* updateSettingFunc(params) {
  try {
    const response = yield call(updateSettingAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.updateListSettingsSuccess(response?.data?.data)
      );

      yield put(
        actions.fetchListSettingsBegin()
      );

      toast.success(response?.data?.message);
    }
  } catch (error) {
      const errorMessage = error;
      yield put(
        actions.updateListSettingsErr({ error: errorMessage || 'Update settings list failed' })
      );
  
      if (errorMessage?.response?.data?.data?.error) {
        toast.error(errorMessage?.response?.data?.data?.error);
      } else if (errorMessage?.response?.data?.message) {
        toast.error(errorMessage?.response?.data?.message);
      } else {
        toast.error('Update settings list failed');
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
    switch (params?.payload) {
      case SERVICE_SETTING_TYPE.SETTING.title:
        yield put(
          actions.fetchListSettingsBegin()
        );
        break;
      case SERVICE_SETTING_TYPE.SERVICE.title:
        yield put(
          actions.fetchListServiceBegin()
        );
        break;
      case SERVICE_SETTING_TYPE.GOOGLE_KEY.title:
        yield put(
          actions.fetchListAllGoogleKeyBegin()
        );
        break;
      default:
        break;
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
  yield takeLatest(actions.FETCH_LIST_SETTINGS_BEGIN, fetchListSettingsFunc);
}

export function* createServicesWatcherSaga() {
  yield takeLatest(actions.CREATE_SERVICES_BEGIN, createServicesFunc);
}

export function* updateSettingWatcherSaga() {
  yield takeLatest(actions.UPDATE_SETTING_BEGIN, updateSettingFunc);
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


export function* deleteGoogleKeyWatcherSaga() {
  yield takeLatest(actions.DELETE_GOOGLE_KEY_BEGIN, deleteGoogleKeyFunc);
}
export function* updateGoogleKeyWatcherSaga() {
  yield takeLatest(actions.UPDATE_GOOGLE_KEY_BEGIN, updateGoogleKeyFunc);
}
export function* detailGoogleKeyWatcherSaga() {
  yield takeLatest(actions.DETAIL_GOOGLE_KEY_BEGIN, detailGoogleKeyFunc);
}
export function* createGoogleKeyWatcherSaga() {
  yield takeLatest(actions.CREATE_GOOGLE_KEY_BEGIN, createGoogleKeyFunc);
}
export function* fetchListAllGoogleKeyWatcherSaga() {
  yield takeLatest(actions.FETCH_LIST_ALL_GOOGLE_KEY_BEGIN, fetchListAllGoogleKeyFunc);
}
