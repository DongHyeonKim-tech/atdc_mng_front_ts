import { createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import * as teamDashAPI from 'features/atdc/team/teamDashAPI';

import {
    createActionState,
    createRequestSaga,
    handleAsyncAction,
    reducerUtils,
} from 'utils/asyncUtils';

const prefix = 'teamDash';

const GET_TEAMDASH_LIST = 'teamDash/getTeamDashList';
const GET_TEAMDASH = 'teamDash/getTeamDash';
const INSERT_TEAMDASH = 'teamDash/insertTeamDash';
const UPDATE_TEAMDASH = 'teamDash/updateTeamDash';

const initialState = {
    teamDashList: reducerUtils.init({data: null, loading: false, error: false, errorMessage: null}),
    teamDashDetail: reducerUtils.init({data: null, loading: false, error: false, errorMessage: null}),
};

const defaultState = {
    [GET_TEAMDASH_LIST]: 'teamDashList',
    [GET_TEAMDASH]: 'teamDashDetail',
};

export const getTeamDashListSaga = createRequestSaga(GET_TEAMDASH_LIST, teamDashAPI.getTeamDashList, 'teamDashList');
export const getTeamDashSaga = createRequestSaga(GET_TEAMDASH, teamDashAPI.getTeamDash, "teamDashList");

export const insertTeamDashSaga = createRequestSaga(INSERT_TEAMDASH, teamDashAPI.insertTeamDash, "teamDashList");

export const updateTeamDashSaga = createRequestSaga(UPDATE_TEAMDASH, teamDashAPI.updateTeamDash, "teamDashList");

export function* teamDashSaga() {
    yield takeLatest(GET_TEAMDASH_LIST, getTeamDashListSaga);
    yield takeLatest(GET_TEAMDASH, getTeamDashSaga);
    yield takeLatest(INSERT_TEAMDASH, insertTeamDashSaga);
    yield takeLatest(UPDATE_TEAMDASH, updateTeamDashSaga);
}

export const teamDashSlice = createSlice({
    // 액션 타입 문자열의 prefix
    name: prefix,

    // 초기값
    initialState,


    // 리듀서
    reducers: {
        getTeamDashList: (state: any, action) => void{},
        getTeamDash: (state: any, action) => void{},
        insertTeamDash: (state: any, action) => void{},
        updateTeamDash: (state: any, action) => void{},
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

export const teamDashAction = teamDashSlice.actions;
