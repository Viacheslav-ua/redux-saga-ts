import {
  // all,
  // race,
  call,
  put,
  takeEvery,
  fork,
  all,
  // takeLatest,
  // spawn
} from "redux-saga/effects";

import {
  fetchNewsSuccess,
  fetchPopularNewsSuccess,
  fetchNewsFailure,
  fetchPopularNewsFailure
} from "./news.actions";
import { FETCH_NEWS_REQUEST, FETCH_POPULAR_NEWS_REQUEST } from "./news.constants";
import { getLatestNews, getPopularNews } from "./news.api";

export function* handleLatestNews() { 
  try {
    const { hits } = yield call(getLatestNews)
    yield put(fetchNewsSuccess(hits))
  } catch {
    yield put(fetchNewsFailure('Error fetching latest news'))
  }
}

export function* handlePopularNews() { 
  try {
    const { hits } = yield call(getPopularNews)
    yield put(fetchPopularNewsSuccess(hits))
  } catch {
    yield put(fetchPopularNewsFailure('Error fetching popular news'))
  }

}

// export function* handleAllNews() {
//   yield fork(handleLatestNews)
//   yield fork(handlePopularNews)

  // yield all([
  //   call(fetchLatestNewsSaga),
  //   call(fetchPopularNewsSaga),
  // ])
// }

export function* watchPopularNewsSaga() {
  yield takeEvery(FETCH_POPULAR_NEWS_REQUEST, handlePopularNews)
}

export function* watchLatestNewsSaga() {
  yield takeEvery(FETCH_NEWS_REQUEST, handleLatestNews)
}

function* newsSaga() {
  yield all([
    fork(watchLatestNewsSaga),
    fork(watchPopularNewsSaga),
  ])
}

export default newsSaga