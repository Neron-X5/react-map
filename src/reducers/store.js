import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import rootReducer from './root-reducer';

const configureStore = (initialState = {}) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(ReduxPromise)));
};

const store = configureStore();

export default store;
