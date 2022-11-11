import React from "react";
import { Table, Space, Button } from "antd";
import { UserOutlined } from '@ant-design/icons';
import type { ColumnsType, ColumnType } from 'antd/es/table';

const { Column } = Table;

interface DataType {
    key: string,
    username: string,
    name: string,
    useSttCd: string,
    platform: string
}

type DataIndex = keyof DataType;

const MemberTable = (
  {
    memberData,
    memberSelectHandler,
  } : {
      memberData?: DataType[],
      memberSelectHandler: (keys: string | number) => void,
  }) => {

  return (
    <>
      <Table 
        dataSource={memberData} 
        pagination={{ defaultPageSize: 20,
                      showSizeChanger: true,
                      pageSizeOptions: ['10', '20', '50'],
                      position: ['bottomCenter']
                    }} 
        loading={!memberData}
        rowKey={"id"}
        >
        <Column title={"이메일"} dataIndex={"username"} align="center" />
        <Column title={"성명"} dataIndex={"name"} align="center" />
        <Column title={"상태"} dataIndex={"useSttCd"} align="center" />
        <Column title={"플랫폼"} dataIndex={"platform"} align={"center"}/>
        <Column
          title={"권한"}
          dataIndex={"isAdmin"}
          align="center"
          render={(text) => text ? '관리자' : '유저'}
        />
        <Column
          title="상세보기"
          key="id"
          align="center"
          render={(key) => (
            <Space size="middle" >
              <Button icon={<UserOutlined/>} onClick={() => memberSelectHandler(key['id'])} />
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default MemberTable;
