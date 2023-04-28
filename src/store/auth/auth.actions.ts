import { AuthConstants } from './auth.enum'

import {
  AuthData,
  LoginRequest,
  LoginSuccess,
  LoginFailed,
} from './auth.types'

export const loginRequest = (): LoginRequest => ({
  type: AuthConstants.AUTH_LOGIN,
})

export const loginSuccess = (payload: AuthData): LoginSuccess => ({
  type: AuthConstants.AUTH_LOGIN_SUCCESS,
  payload,
})

export const loginFailed = (payload: string): LoginFailed => ({
  type: AuthConstants.AUTH_LOGIN_FAILED,
  payload,
})

// export const fetchPopularNewsRequest = (): FetchPopularNewsRequest => ({
//   type: FETCH_POPULAR_NEWS_REQUEST,
// });

// export const fetchNewsSuccess = (payload: any[]): FetchNewsSuccess => ({
//   type: FETCH_NEWS_SUCCESS,
//   payload,
// });

// export const fetchNewsFailure = (payload: string): FetchNewsFailure => ({
//   type: FETCH_NEWS_FAILURE,
//   payload,
// });

// export const fetchPopularNewsSuccess = (payload: any[]): FetchPopularNewsSuccess => ({
//   type: FETCH_POPULAR_NEWS_SUCCESS,
//   payload,
// });

// export const fetchPopularNewsFailure = (payload: string): FetchPopularNewsFailure => ({
//   type: FETCH_POPULAR_NEWS_FAILURE,
//   payload,
// });