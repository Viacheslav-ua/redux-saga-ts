import {
  FETCH_NEWS_REQUEST,
  FETCH_ALL_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_POPULAR_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_POPULAR_NEWS_FAILURE,
} from "./news.constants";

export interface INews {

}

export interface NewsState {
  news: any[];
  popularNews: any[];
}

export interface ErrorNewsState {
  newsError: string | null;
  popularNewsError: string | null;
}

export interface FetchNewsRequest {
  type: typeof FETCH_NEWS_REQUEST;
}

export interface FetchAllNewsRequest {
  type: typeof FETCH_ALL_NEWS_REQUEST;
}

export type FetchNewsSuccess = {
  type: typeof FETCH_NEWS_SUCCESS;
  payload: any[];
};

export type FetchPopularNewsSuccess = {
  type: typeof FETCH_POPULAR_NEWS_SUCCESS;
  payload: any[];
};

export type FetchNewsFailure = {
  type: typeof FETCH_NEWS_FAILURE;
  payload: string;
};

export type FetchPopularNewsFailure = {
  type: typeof FETCH_POPULAR_NEWS_FAILURE;
  payload: string;
};


export type NewsActions =
  | FetchNewsRequest
  | FetchNewsSuccess
  | FetchPopularNewsSuccess
  | FetchNewsFailure
  | FetchPopularNewsFailure
