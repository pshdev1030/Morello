import { LOGIN_REQUEST } from 'reducer/user';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { userInfo } from 'Utils/types';

function* loginEventHandler(data: userInfo) {
  yield delay(1000);
}
