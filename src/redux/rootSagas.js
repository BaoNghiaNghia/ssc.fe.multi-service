import { all } from 'redux-saga/effects';
import { loginWatcherSaga, logoutWatcherSaga } from './authentication/sagas';
import { resportSubscribeWatcherSaga } from './reports/sagas';


export default function* rootSaga() {
    return yield all([
        loginWatcherSaga(),
        logoutWatcherSaga(),
        resportSubscribeWatcherSaga()
    ]);
}