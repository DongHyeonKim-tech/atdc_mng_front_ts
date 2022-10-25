import client from 'api/client';
import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const openNotification = (type: NotificationType, msg: string, desc?: string) => {
  notification[type]({
    message: msg,
    description: desc,
    placement: 'bottomRight',
  });
};

export const getCodeList = () => {
  return client.get('manage/code/');
};

export const getCode = (param: any) => {
  return client.get(`manage/code/${param.codeKey}`);
};

export const insertCode = (formData: object) => {
  return client
    .post('manage/code/', formData)
    .then(function (response) {
      openNotification('success', '추가되었습니다.');
    })
    .catch(function (error) {
      openNotification('error', '검증에 실패햐었습니다.');
    });
};

export const updateCode = (formData: {[key: string]: string}) => {
  return client
    .put(`manage/code/${formData.commCd}`, formData)
    .then(function (response) {
      openNotification('success', '수정되었습니다.');
    })
    .catch(function (error) {
      openNotification('error', '검증에 실패햐였습니다.');
    });
};

export const deleteCode = (codeKey: string) => {
  return client
    .delete(`manage/code/${codeKey}`)
    .then(function (response) {
      openNotification('success', '삭제되었습니다.');
    })
    .catch(function (error) {
      openNotification('error', '검증에 실패하였습니다.');
    });
};
