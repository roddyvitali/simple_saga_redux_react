import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { history } from './history';
import { Router } from 'react-router-dom';
import rootReducer from './reducers';
import rootSaga from './sagas';
import './index.scss';

const sagaMiddleware = createSagaMiddleware();
/*eslint-disable */
const composeSetup =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;
/*eslint-enable */

export const store = createStore(
    rootReducer,
    composeSetup(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
