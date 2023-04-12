import { combineReducers } from "redux";

import todoReducer from "./todo/reducer";
import newsReducer from "./news/news.reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  news: newsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;