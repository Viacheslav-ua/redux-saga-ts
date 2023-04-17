import { 
  FETCH_NEWS_REQUEST,
  FETCH_POPULAR_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_POPULAR_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_POPULAR_NEWS_FAILURE,
} from "./news.constants"

import {
  FetchNewsSuccess,
  FetchNewsFailure,
  FetchPopularNewsSuccess,
  FetchNewsRequest,
  FetchPopularNewsRequest,
  FetchPopularNewsFailure,
} from './news.types'

export const fetchNewsRequest = (): FetchNewsRequest => ({
  type: FETCH_NEWS_REQUEST,
});

export const fetchPopularNewsRequest = (): FetchPopularNewsRequest => ({
  type: FETCH_POPULAR_NEWS_REQUEST,
});

export const fetchNewsSuccess = (payload: any[]): FetchNewsSuccess => ({
  type: FETCH_NEWS_SUCCESS,
  payload,
});

export const fetchNewsFailure = (payload: string): FetchNewsFailure => ({
  type: FETCH_NEWS_FAILURE,
  payload,
});

export const fetchPopularNewsSuccess = (payload: any[]): FetchPopularNewsSuccess => ({
  type: FETCH_POPULAR_NEWS_SUCCESS,
  payload,
});

export const fetchPopularNewsFailure = (payload: string): FetchPopularNewsFailure => ({
  type: FETCH_POPULAR_NEWS_FAILURE,
  payload,
});