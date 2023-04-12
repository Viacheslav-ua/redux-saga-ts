import newsSaga from './news/news.sagas'
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(newsSaga)]);
}