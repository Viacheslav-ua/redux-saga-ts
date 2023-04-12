import { 
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_POPULAR_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
 } from "./news.actionTypes";
import { NewsActions, NewsState } from "./news.types";

const initialState: NewsState = {
  pending: false,
  news: [],
  popularNews: [],
  error: null,
}

const newsReducer = (state = initialState, action: NewsActions) => {
  
  
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
    return {
      ...state,
      pending: false,
      news: action.payload,
      error: null,
    };
    case FETCH_POPULAR_NEWS_SUCCESS:
    return {
      ...state,
      pending: false,
      popularNews: action.payload,
      error: null,
    };
    default:
      return {
        ...state,
      };
  }
}

export default newsReducer;