import { takeEvery, takeLatest, takeLeading, select } from '@redux-saga/core/effects'

import newsSaga from './news/news.sagas'
import { all, fork } from 'redux-saga/effects';


// const delay = (time: number) => new Promise((resolve, reject) => {
//   setTimeout(resolve, time * 1000)
// })

// export function* workerSaga() {
  // const count: number = yield select(({ todo }) => todo.count)
  // yield delay(2)
  // console.log(`Request ${count}`)
  // yield
//   const data: any[] =  yield getLatestNews()
//   console.log(data);
  
// }

// export function* watchClickSaga() {
// yield takeEvery(GET_LATEST_NEWS, workerSaga)
  
// }

export default function* rootSaga() {
  yield all([fork(newsSaga)]);
}