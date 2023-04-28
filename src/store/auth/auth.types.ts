import { AuthConstants } from "./auth.enum";

export interface AuthData {
  accessToken: string
  login: string
  id: number
  iat: number
  exp: number
}

export interface AuthState {
  loading: boolean
  // loaded: boolean
  // loadAuthData: boolean
  serverError: string
  authData?: AuthData | null
}

export interface LoginRequest {
  type: typeof AuthConstants.AUTH_LOGIN
}

export type LoginSuccess = {
  type: typeof AuthConstants.AUTH_LOGIN_SUCCESS
  payload: AuthData;
}

export type LoginFailed = {
  type: typeof AuthConstants.AUTH_LOGIN_FAILED
  payload: string;
}


// export interface FetchPopularNewsRequest {
//   type: typeof FETCH_POPULAR_NEWS_REQUEST;
// }



// export type FetchPopularNewsSuccess = {
//   type: typeof FETCH_POPULAR_NEWS_SUCCESS;
//   payload: any[];
// };

// export type FetchNewsFailure = {
//   type: typeof FETCH_NEWS_FAILURE;
//   payload: string;
// };

// export type FetchPopularNewsFailure = {
//   type: typeof FETCH_POPULAR_NEWS_FAILURE;
//   payload: string;
// };


export type AuthActions =
  LoginRequest
  | LoginSuccess
  | LoginFailed
//   | FetchPopularNewsSuccess
//   | FetchNewsFailure
//   | FetchPopularNewsFailure