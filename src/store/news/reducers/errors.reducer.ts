import { FETCH_NEWS_FAILURE, FETCH_POPULAR_NEWS_FAILURE } from "../news.constants";
import { NewsActions, ErrorNewsState } from "../news.types";

const initialState: ErrorNewsState = {
  newsError: null,
  popularNewsError: null,
}

const errorsReducer = (state = initialState, action: NewsActions) => {
  
  
  switch (action.type) {
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        newsError: action.payload,
      };
    case FETCH_POPULAR_NEWS_FAILURE:
      return {
        ...state,
        popularNewsError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default errorsReducer;