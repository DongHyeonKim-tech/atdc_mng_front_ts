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

export const getMyDashList = () => {
    return client.get('manage/myDash/');
};

export const getMyDash = (param: any) => {
    return client.get(`manage/myDash/${param.myDashKey}`);
};

export const insertMyDash = (formData: object) => {
    return client
        .post('manage/myDash/', formData)
        .then(function (response) {
            openNotification('success', '추가되었습니다.');
        })
        .catch(function (error) {
            openNotification('error', '검증에 실패햐었습니다.');
        });
};

export const updateMyDash = (formData: {[key: string]: string}) => {
    return client
        .put(`manage/myDash/${formData.commCd}`, formData)
        .then(function (response) {
            openNotification('success', '수정되었습니다.');
        })
        .catch(function (error) {
            openNotification('error', '검증에 실패햐였습니다.');
        });
};

export const deleteMyDash = (myDashKey: string) => {
    return client
        .delete(`manage/myDash/${myDashKey}`)
        .then(function (response) {
            openNotification('success', '삭제되었습니다.');
        })
        .catch(function (error) {
            openNotification('error', '검증에 실패하였습니다.');
        });
};
