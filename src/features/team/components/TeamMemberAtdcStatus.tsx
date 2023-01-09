import { ColumnsType } from 'antd/es/table';
import { Button, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';

const TeamMemberAtdcStatus = () => {
  interface MemType {
    num: number;
    atdc_date: string;
    att_time: string;
    cl_time: string;
    atdc_status: string;
  }

  const [teamMembers, setTeamMembers] = useState<MemType[]>([]);

  useEffect(() => {
    // 나중에 api 받아서 axios 사용해서 데이터 뽑아올 부분
    for (let i = 0; i < 10; i++) {
      const today = new Date();
      const atdc_date = `${today.getFullYear()}. ${
        today.getMonth() + 1
      }. ${today.getDate()}`;
      const att_time = `${today.getHours()}시 ${today.getMinutes()}분`;
      const cl_time = `${today.getHours() + 9}시 ${today.getMinutes()}분`;
      const newMember: MemType = {
        num: i + 1,
        atdc_date: atdc_date,
        att_time: att_time,
        cl_time: cl_time,
        atdc_status: '정상',
      };
      console.log(newMember);
      setTeamMembers((prevState) => [...prevState, newMember]);
    }
  }, []);

  const columns: ColumnsType<MemType> = [
    {
      title: 'No.',
      dataIndex: 'num',
      key: 'num',
    },
    {
      title: '근무일자',
      dataIndex: 'atdc_date',
      key: 'atdc_date',
    },
    {
      title: '출근시간',
      dataIndex: 'att_time',
      key: 'att_time',
    },
    {
      title: '퇴근시간',
      dataIndex: 'cl_time',
      key: 'cl_time',
    },
    {
      title: '연차여부',
      dataIndex: 'off_status',
      key: 'off_status',
    },
    {
      title: '근태구분',
      dataIndex: 'atdc_status',
      key: 'atdc_status',
    },
    {
      title: '승인 여부',
      key: 'action',
      render: (_, record) => (
        <Space align="center" size="middle">
          <Button type="primary" size="small">
            승인
          </Button>
          <Button type="primary" danger size="small">
            비승인
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={teamMembers}
      pagination={{ defaultCurrent: 1, position: ['bottomCenter'] }}
      style={{ width: '100%' }}
    />
  );
};

export default TeamMemberAtdcStatus;
