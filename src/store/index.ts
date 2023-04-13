import { legacy_createStore as createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store: Store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    sagaMiddleware,
    // logger,
  )
));

sagaMiddleware.run(rootSaga);

export default store;