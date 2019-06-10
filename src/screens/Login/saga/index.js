import { takeLatest, call, fork, put } from 'redux-saga/effects';
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_UNSUCCESS, LOGIN_ERROR } from './../reducer';
// import { SET_USER_INFO } from './../../Main/reducer';
import { history } from '../../../history';
import axios from 'axios';

import { URL_API } from './../../../config';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function getApi(payload) {
  return axios.post(`${URL_API}login`, payload)
  .then( response => response )
  .catch( error => error )
  .finally( _ => console.log("terminado") );
}

function* requestLogin() {
  yield takeLatest(LOGIN_REQUESTING, function* (action) {
  const { payload } = action;
  const resp = yield call( getApi, payload )
  try{
    if(resp.data.token){
      localStorage.setItem('token', resp.data.token);
      localStorage.setItem('user', JSON.stringify(resp.data.user));
      yield delay(1000);
      yield put({ type: LOGIN_SUCCESS });
      // yield put({ type: SET_USER_INFO, payload: resp.data.user });
      history.push('/');
    }else{
      yield put({ type: LOGIN_UNSUCCESS, payload: {} });
    }

  } catch(e) {
    yield put({ type: LOGIN_ERROR, error: 'Ups problemas mayores! abortemos misión' })
  }
  })
}

export default function* saga() {
  yield fork(requestLogin)
}