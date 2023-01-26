import { createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import * as myDashAPI from 'features/atdc/my/myDashAPI';

import {
    createActionState,
    createRequestSaga,
    handleAsyncAction,
    reducerUtils,
} from 'utils/asyncUtils';

const prefix = 'myDash';

const GET_MYDASH_LIST = 'myDash/getMyDashList';
const GET_MYDASH = 'myDash/getMyDash';
const INSERT_MYDASH = 'myDash/insertMyDash';
const UPDATE_MYDASH = 'myDash/updateMyDash';

const initialState = {
    myDashList: reducerUtils.init({data: null, loading: false, error: false, errorMessage: null}),
    myDashDetail: reducerUtils.init({data: null, loading: false, error: false, errorMessage: null}),
};

const defaultState = {
    [GET_MYDASH_LIST]: 'myDashList',
    [GET_MYDASH]: 'myDashDetail',
};

export const getMyDashListSaga = createRequestSaga(GET_MYDASH_LIST, myDashAPI.getMyDashList, 'myDashList');
export const getMyDashSaga = createRequestSaga(GET_MYDASH, myDashAPI.getMyDash, "myDashList");

export const insertMyDashSaga = createRequestSaga(INSERT_MYDASH, myDashAPI.insertMyDash, "myDashList");

export const updateMyDashSaga = createRequestSaga(UPDATE_MYDASH, myDashAPI.updateMyDash, "myDashList");

export function* myDashSaga() {
    yield takeLatest(GET_MYDASH_LIST, getMyDashListSaga);
    yield takeLatest(GET_MYDASH, getMyDashSaga);
    yield takeLatest(INSERT_MYDASH, insertMyDashSaga);
    yield takeLatest(UPDATE_MYDASH, updateMyDashSaga);
}

export const myDashSlice = createSlice({
    // 액션 타입 문자열의 prefix
    name: prefix,

    // 초기값
    initialState,


    // 리듀서
    reducers: {
        getMyDashList: (state: any, action) => void{},
        getMyDash: (state: any, action) => void{},
        insertMyDash: (state: any, action) => void{},
        updateMyDash: (state: any, action) => void{},
    },

    extraReducers: (builder) => {
        builder.addMatcher(
            (action) => {
                return action.type.includes(prefix);
            },
            (state: any, action: any) => {
                state[createActionState(action, defaultState)] = handleAsyncAction(action);
            },
        );
    },
});

export const myDashAction = myDashSlice.actions;
