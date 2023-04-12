import { combineReducers } from "redux";

import todoReducer from "./todo/reducer";
import newsReducer from "./news/reducers/news.reducer";
import errorsReducer from "./news/reducers/errors.reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  news: combineReducers({
    data: newsReducer,
    errors: errorsReducer,
  })
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;