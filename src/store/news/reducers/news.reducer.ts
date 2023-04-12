import { 
  FETCH_NEWS_SUCCESS,
  FETCH_POPULAR_NEWS_SUCCESS,
} from "../news.constants";
import { NewsActions, NewsState } from "../news.types";

const initialState: NewsState = {
  news: [],
  popularNews: [],
}

const newsReducer = (state = initialState, action: NewsActions) => {
  
  
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
      };
    case FETCH_POPULAR_NEWS_SUCCESS:
      return {
        ...state,
        popularNews: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default newsReducer;