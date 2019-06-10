import { all } from 'redux-saga/effects';
import login from  './../screens/Login/saga';

export default function* rootSaga() {
	yield all([
		login()
	]);
}