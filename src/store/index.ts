import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;