import Cookies from 'js-cookie';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import { 
  loginUserApi,
  fetchProfileDetail,
  registerUserApi
} from '../../config/api/Auth/index';
import { MESSSAGE_STATUS_CODE } from '../../variables';

// Utility function for handling error messages
function* handleError(error, defaultMessage, action, toastMessage = 'An error occurred') {
  const errorMessage = error?.response?.data?.data?.error || error?.response?.data?.message || defaultMessage;
  yield put(action({ error: errorMessage }));
  toast.error(errorMessage || toastMessage);
}

function* registerReferralSagaFunc({ payload }) {
  try {
    const response = yield call(registerUserApi, payload);
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      toast.success('Đăng ký thành công');
      yield put(actions.registerReferralSuccess());
      yield delay(500);
      window.location.href = '/login'; // Redirect after successful registration
    }
  } catch (error) {
    yield handleError(error, 'Register failed', actions.registerReferralErr, 'Đăng ký thất bại');
  }
}

function* loginSagaFunc({ payload }) {
  try {
    const response = yield call(loginUserApi, payload?.request);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      toast.success('Đăng nhập thành công');

      const respLogged = response?.data?.data;

      if (respLogged) {
        const { token, user } = respLogged;
        localStorage.setItem('logedIn', token);
        localStorage.setItem('userInfo', JSON.stringify(user));

        yield put(actions.loginSuccess({ token, user }));
        window.location.href = '/admin/tong-quan'; // Redirect after successful login
      } else {
        throw new Error('Invalid login response');
      }
    }
  } catch (error) {
    yield handleError(error, 'Login failed', actions.loginErr, 'Đăng nhập thất bại');
  }
}

function* logoutSagaFunc() {
  try {
    localStorage.removeItem('logedIn');
    localStorage.removeItem('userInfo');
    yield put(actions.logoutSuccess(null));
  } catch (error) {
    console.error(error); // Optional logging
  } finally {
    yield put(actions.logoutErr());
  }
}

function* fetchUserProfileSagaFunc() {
  try {
    const response = yield call(fetchProfileDetail, {});
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      const userInfo = response?.data?.data;
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      yield put(actions.fetchUserProfileSuccess(userInfo));
    }
  } catch (error) {
    yield handleError(error, 'Fetch profile user failed', actions.fetchUserProfileErr);
  }
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

export function* fetchUserProfileWatcherSaga() {
  yield takeLatest(actions.FETCH_USER_PROFILE_BEGIN, fetchUserProfileSagaFunc);
}
