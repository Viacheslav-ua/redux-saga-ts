import { AuthConstants } from "./auth.enum";
import { AuthActions, AuthState } from "./auth.types";


const initialState: AuthState = {
  loading: false,
  // loaded: true,
  // loadAuthData: false,
  serverError: '',
}

const newsReducer = (state = initialState, action: AuthActions) => {
  
  
  switch (action.type) {
    case AuthConstants.AUTH_LOGIN:
      return {
        ...state,
        loading: true,
      }
    
    case AuthConstants.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        authData: action.payload,
        // loaded: true,
        // loadAuthData: true,
        loading: false,
        serverError: '',
      }
    case AuthConstants.AUTH_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        serverError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default newsReducer;