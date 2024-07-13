import Cookies from 'js-cookie';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import { 
  loginUserApi,
  fetchProfileDetail,
  registerUserApi
} from '../../config/apiFactory/Auth/index';
import { MESSSAGE_STATUS_CODE } from '../../variables';

function* registerReferralSagaFunc(params) {
  try {
    const response = yield call(registerUserApi, params?.payload);
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      toast.success('Đăng ký thành công');

      yield put(
        actions.registerReferralSuccess()
      );

      // Delay for 500ms
      yield delay(500);

      // Using window.location for redirection
      window.location.href = '/login';
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.registerReferralErr({ error: errorMessage || 'Register failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Đăng ký thất bại');
    }
  } finally { /* empty */ }
}


function* loginSagaFunc(params) {
  try {
    const response = yield call(loginUserApi, params?.payload?.request);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      toast.success('Đăng nhập thành công');

      const respLoggged = response?.data?.data;

      localStorage.setItem('logedIn', respLoggged?.token);
      localStorage.setItem('userInfo', JSON.stringify(respLoggged?.user));

      yield put(
        actions.loginSuccess(respLoggged)
      );

      window.location.href = '/admin/tong-quan'; // Directly set window location for redirections
    }

  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.loginErr({ error: errorMessage || 'Login failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else if (errorMessage?.response?.data?.message) {
      toast.error(errorMessage?.response?.data?.message);
    } else {
      toast.error('Đăng nhập thất bại');
    }
  } finally { /* empty */ }
}

function* logoutSagaFunc() {
  try {
    localStorage.removeItem('logedIn');
    localStorage.removeItem('userInfo');

    yield put(
      actions.logoutSuccess(null)
    )
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.logoutErr());
  }
}

function* fetchUserProfilSagaFunc() {
  try {
    const response = yield call(fetchProfileDetail, {});
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      const userInfo = response?.data?.data;

      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      yield put(
        actions.fetchUserProfileSuccess(null)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.fetchUserProfileErr({ error: errorMessage || 'Fetch profile user failed' })
    );
  } finally { /* empty */ }
}

export function* logoutWatcherSaga() {
  yield takeLatest(actions.LOGOUT_BEGIN, logoutSagaFunc);
}

export function* loginWatcherSaga() {
  yield takeLatest(actions.LOGIN_BEGIN, loginSagaFunc);
}

export function* registerReferralWatcherSaga() {
  yield takeLatest(actions.REGISTER_REFERRAL_BEGIN, registerReferralSagaFunc);
}

export function* fetchUserProfileSaga() {
  yield takeLatest(actions.FETCH_USER_PROFILE_BEGIN, fetchUserProfilSagaFunc);
}