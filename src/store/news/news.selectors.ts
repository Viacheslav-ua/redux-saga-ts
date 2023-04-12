import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const news = (state: AppState) => state?.news?.data?.news || {};
const popularNews = (state: AppState) => state?.news?.data?.popularNews || {};
const errors = (state: AppState) => state?.news?.errors || {};

export const getNewsSelector = createSelector(news, (news) => news);
export const getPopularNewsSelector = createSelector(popularNews, (popularNews) => popularNews);
export const getErrors = createSelector(errors, (errors) => errors);