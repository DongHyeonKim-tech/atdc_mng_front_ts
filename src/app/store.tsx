import { combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { codeSaga, codeSlice } from 'features/admin/code/codeReducer';
import { memberSaga, memberSlice } from 'features/admin/member/memberReducer';
import { myDashSaga, myDashSlice } from "features/atdc/my/myDashReducer";
import { teamDashSaga, teamDashSlice } from "features/atdc/team/teamDashReducer";

export const history : any = createBrowserHistory();

const createRootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        codeReducer: codeSlice.reducer,
        memberReducer: memberSlice.reducer,
        myDashReducer: myDashSlice.reducer,
        teamDashReducer: teamDashSlice.reducer,
    });

export function* rootSaga() {
    yield all([codeSaga()]);
    yield all([memberSaga()]);
    yield all([myDashSaga()]);
    yield all([teamDashSaga()]);
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
