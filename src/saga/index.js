import {all} from 'redux-saga/effects';
import userSaga from './sagas'


export default function* rootSaga() {
    yield all([
        userSaga(),
    ])
}