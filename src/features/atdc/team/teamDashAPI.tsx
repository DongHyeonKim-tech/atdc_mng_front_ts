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

export const getTeamDashList = () => {
    return client.get('manage/teamDash/');
};

export const getTeamDash = (param: any) => {
    return client.get(`manage/teamDash/${param.teamDashKey}`);
};

export const insertTeamDash = (formData: object) => {
    return client
        .post('manage/teamDash/', formData)
        .then(function (response) {
            openNotification('success', '추가되었습니다.');
        })
        .catch(function (error) {
            openNotification('error', '검증에 실패햐었습니다.');
        });
};

export const updateTeamDash = (formData: {[key: string]: string}) => {
    return client
        .put(`manage/teamDash/${formData.commCd}`, formData)
        .then(function (response) {
            openNotification('success', '수정되었습니다.');
        })
        .catch(function (error) {
            openNotification('error', '검증에 실패햐였습니다.');
        });
};

export const deleteTeamDash = (teamDashKey: string) => {
    return client
        .delete(`manage/teamDash/${teamDashKey}`)
        .then(function (response) {
            openNotification('success', '삭제되었습니다.');
        })
        .catch(function (error) {
            openNotification('error', '검증에 실패하였습니다.');
        });
};
