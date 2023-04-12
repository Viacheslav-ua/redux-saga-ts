import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { fetchNewsSuccess, fetchPopularNewsSuccess } from "./news.actions";
import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_ALL_NEWS_REQUEST } from "./news.actionTypes";
import { getLatestNews, getPopularNews } from "./news.api";

export function* fetchLatestNewsSaga() { 
  const { hits } = yield call(getLatestNews)
  yield put(fetchNewsSuccess(hits))
}

export function* fetchPopularNewsSaga() { 
  const { hits } = yield call(getPopularNews)
  yield put(fetchPopularNewsSuccess(hits))
}

export function* fetchAllNewsSaga() {
  yield call(fetchLatestNewsSaga)
  yield call(fetchPopularNewsSaga)
}

function* newsSaga() {
  yield takeEvery(FETCH_ALL_NEWS_REQUEST, fetchAllNewsSaga)
}

export default newsSaga