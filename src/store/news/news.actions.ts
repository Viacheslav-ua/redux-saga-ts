import { 
  // FETCH_NEWS_REQUEST,
  FETCH_ALL_NEWS_REQUEST,
  FETCH_POPULAR_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_POPULAR_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "./news.actionTypes"

import {
  FetchNewsFailurePayload,
  // FetchNewsRequest,
  FetchNewsSuccess,
  FetchNewsFailure,
  FetchPopularNewsSuccess,
  FetchAllNewsRequest,
} from './news.types'


// export const fetchNewsRequest = (): FetchNewsRequest => ({
//   type: FETCH_NEWS_REQUEST,
// });

export const fetchAllNewsRequest = (): FetchAllNewsRequest => ({
  type: FETCH_ALL_NEWS_REQUEST,
});

export const fetchNewsSuccess = (
  payload: any[]
): FetchNewsSuccess => ({
  type: FETCH_NEWS_SUCCESS,
  payload,
});

export const fetchPopularNewsSuccess = (
  payload: any[]
): FetchPopularNewsSuccess => ({
  type: FETCH_POPULAR_NEWS_SUCCESS,
  payload,
});