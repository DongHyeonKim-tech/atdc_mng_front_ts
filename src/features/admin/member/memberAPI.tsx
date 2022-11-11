import client from "api/client";
import { notification } from "antd";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const openNotification = (type: NotificationType, msg: string, desc?: string) => {
  notification[type]({
    message: msg,
    description: desc,
    placement: "bottomRight"
  })
}

export const getMemberList = (param: {filterType: string, keyword: string}) => {
    let url;
    !param.keyword ? url=`/manage/member/?filterType=${param.filterType}` : url=`/manage/member/?filterType=${param.filterType}&keyword=${param.keyword}`
    return client.get(url);
}

export const getMember = (param: {memberKey: string | number}) => {
    return client.get(`/manage/member/${param.memberKey}`);
};

export const deleteMember = (param: string | number) => {
    return client.delete(`/manage/member/${param}`)
    .then(function (response) {
      openNotification('success','삭제되었습니다.');
      })
    .catch(function (error) {
      openNotification('error', '검증에 실패하였습니다.');
    })
};

export const updateMember = (formData: {id: number | string}) => {
    return client.put(`/manage/member/${formData.id}`, formData)
    .then(function (response) {
      openNotification('success','수정되었습니다.');
    })
    .catch(function (error) {
      openNotification('error','검증에 실패하였습니다.');
    })
};