import { createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import * as memberAPI from "features/admin/member/memberAPI";

import {
  createActionState,
  createRequestSaga,
  handleAsyncAction,
  reducerUtils,
} from "utils/asyncUtils";

const prefix = "member";

const GET_MEMBER_LIST = "member/getMemberList";
const GET_MEMBER = "member/getMember";
const DELETE_MEMBER = "member/deleteMember";
const UPDATE_MEMBER = "member/updateMember";
const emptyData : InitialValue = {data: null, loading: false, error: false, errorMessage: null};
interface InitialValue {
  data?: object[] | null,
  loading: boolean,
  error: boolean,
  errorMessage: string | null,
}

const initialState = {
  memberList: reducerUtils.init(emptyData),
  memberDetail: reducerUtils.init(emptyData),
};

const defaultState = {
  [GET_MEMBER_LIST]: "memberList",
  [GET_MEMBER]: "memberDetail",
};

export const getMemberListSaga = createRequestSaga(
  GET_MEMBER_LIST,
  memberAPI.getMemberList,
  "memberList"
);

export const getMemberSaga = createRequestSaga(
  GET_MEMBER,
  memberAPI.getMember,
  "memberDetail"
);

export const deleteMemberSaga = createRequestSaga(
  DELETE_MEMBER,
  memberAPI.deleteMember,
  "deleteMember"
);

export const updateMemberSaga = createRequestSaga(
  UPDATE_MEMBER,
  memberAPI.updateMember,
  "updateMember"
);


export function* memberSaga() {
  yield takeLatest(GET_MEMBER_LIST, getMemberListSaga);
  yield takeLatest(GET_MEMBER, getMemberSaga);
  yield takeLatest(DELETE_MEMBER, deleteMemberSaga);
  yield takeLatest(UPDATE_MEMBER, updateMemberSaga);
}

export const memberSlice = createSlice({
  // 액션 타입 문자열의 prefix
  name: prefix,

  // 초기값
  initialState,

  // 리듀서
  reducers: {
    getMemberList: (state: any, action) => void{},
    getMember: (state: any, action) => void{},
    deleteMember: (state: any, action) => void{},
    updateMember: (state: any, action) => void{},
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {
        return action.type.includes(prefix);
      },
      (state: any, action: any) => {
        state[createActionState(action, defaultState)] =
        handleAsyncAction(action);
      }
    );
  },
});

export const memberAction = memberSlice.actions;
