import { combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { codeSaga, codeSlice } from 'features/admin/code/codeReducer';

export const history : any = createBrowserHistory();

const createRootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        codeReducer: codeSlice.reducer,
    });

export function* rootSaga() {
    yield all([codeSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const createLimeStore = function configureStore(preloadedState?: object) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
