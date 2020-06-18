import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from '../reducers';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../rootSaga";

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore( rootReducer, compose(applyMiddleware(sagaMiddleware), composeEnhancers))
sagaMiddleware.run(rootSaga)