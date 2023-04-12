import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const news = (state: AppState) => state.news.news;
const popularNews = (state: AppState) => state.news.popularNews;

export const getNewsSelector = createSelector(news, (news) => news);
export const getPopularNewsSelector = createSelector(popularNews, (popularNews) => popularNews);