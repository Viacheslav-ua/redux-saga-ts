import {
  // all,
  // race,
  call,
  put,
  takeEvery,
  fork,
  // takeLatest,
  // spawn
} from "redux-saga/effects";

import {
  fetchNewsSuccess,
  fetchPopularNewsSuccess,
  fetchNewsFailure,
  fetchPopularNewsFailure
} from "./news.actions";
import { FETCH_ALL_NEWS_REQUEST } from "./news.constants";
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

export function* handleAllNews() {
  yield fork(handleLatestNews)
  yield fork(handlePopularNews)

  // yield all([
  //   call(fetchLatestNewsSaga),
  //   call(fetchPopularNewsSaga),
  // ])
}

function* newsSaga() {
  yield takeEvery(FETCH_ALL_NEWS_REQUEST, handleAllNews)
}

export default newsSaga