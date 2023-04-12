import {
  FETCH_NEWS_REQUEST,
  FETCH_ALL_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_POPULAR_NEWS_SUCCESS,
  FETCH_POPULAR_NEWS_REQUEST,
  FETCH_NEWS_FAILURE,
} from "./news.actionTypes";

export interface INews {

}

export interface NewsState {
  pending: boolean;
  news: any[];
  popularNews: any[];
  error: string | null;
}

// export interface FetchNewsSuccessPayload {
//   news: any[];
// }

export interface FetchNewsFailurePayload {
  error: string;
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
  payload: FetchNewsFailurePayload;
};


export type NewsActions =
  | FetchNewsRequest
  | FetchNewsSuccess
  | FetchPopularNewsSuccess
  | FetchNewsFailure
