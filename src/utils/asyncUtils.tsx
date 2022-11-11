import { call, put } from 'redux-saga/effects';
// import { HTTP_ERROR_MSG } from 'features/../../Constants';

const HTTP_ERROR_MSG : {[key: string | number]: string} = {
  401: '로그인이 필요한 작업입니다.',
  403: '권한이 존재하지 않습니다.',
  404: '해당 작업을 찾을 수 없습니다.',
  500: '서버 오류가 발생하였습니다.',
};

export const reducerUtils = {
  init: (initData: any) => ({
    data: initData,
    loading: false,
    error: false,
    errorMessage: null,
  }),

  loading: (prevData = null) => ({
    data: prevData,
    loading: true,
    error: false,
    errorMessage: null,
  }),

  success: (data: object) => ({
    data: data,
    loading: false,
    error: false,
    errorMessage: null,
  }),

  error: (error: any) => ({
    data: null,
    loading: false,
    error: true,
    errorMessage: error.msg,
  }),
};

export const handleAsyncAction = ( res: {[key: string]: any}, prevData = null) => {
  if (res && typeof res == "object") {
    if (res.payload.status == 200) {
      return reducerUtils.success(res.payload.data);
    } else {
      return reducerUtils.error(res.payload);
    }
  }
  return reducerUtils.loading(prevData); // 3.
};

export const createActionString = (type: string) => {
  return { success: `${type}Success`, error: `${type}Error` };
};

export const createRequestSaga = (type: string, request: any, codeList: string) => {
  const { success, error } = createActionString(type);

  return function* (action: any) {
    const target = action.payload && action.payload.target ? action.payload.target : null;
    try {
      const response : object = yield call(request, action.payload);

      const payload = target ? { ...response, target } : response; // 1.

      yield put({
        type: success,
        error: false,
        payload,
      });
    } catch (err: any) {
      const payload : object = target
          ? { msg: HTTP_ERROR_MSG[err.response.status], target }
          : { msg: HTTP_ERROR_MSG[err.response.status] }; // 2.

      yield put({
        type: error,
        error: true,
        payload,
      });
    }
  };
};

export const createActionState = (action: any, defaultState: any) => {
  let actionState = null;

  if (action && defaultState) {
    if (action.payload && action.payload.target) {
      actionState = action.payload.target;
    } else {
      for (const stateKey in defaultState) {
        if (action.type && action.type.includes(stateKey)) {
          if (action.type.endsWith('Success')) {
            if (action.type === stateKey + 'Success') {
              actionState = defaultState[stateKey];
            }
          } else if (action.type.endsWith('Error')) {
            if (action.type === stateKey + 'Error') {
              actionState = defaultState[stateKey];
            }
          } else {
            if (action.type === stateKey) {
              actionState = defaultState[stateKey];
            }
          }
        }
      }
      if (!actionState) {
        actionState = action.payload;
      }
    }
  }

  return actionState;
};
