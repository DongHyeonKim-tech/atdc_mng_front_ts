import { ColumnsType } from 'antd/es/table';
import { Button, Layout, Row, Space, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Content, Header } from 'antd/es/layout/layout';

const TeamMembers = () => {
  const { Title } = Typography;

  interface MemType {
    num: number;
    name: string;
    atdc_status: string;
  }

  const [teamMembers, setTeamMembers] = useState<MemType[]>([]);

  useEffect(() => {
    // 나중에 api 받아서 axios 사용해서 데이터 뽑아올 부분
    for (let i = 0; i < 10; i++) {
      const newMember: MemType = {
        num: i + 1,
        name: `${i + 1}번째 멤버`,
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
      title: '이름',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <Button type="ghost" size="small">
          {text}
        </Button>
      ),
    },
    {
      title: '근태 상태',
      dataIndex: 'atdc_status',
      key: 'atdc_status',
    },
    {
      title: '삭제',
      key: 'delete',
      render: (_, record) => (
        <Button size="small" type="link">
          삭제
        </Button>
      ),
    },
  ];
  return (
    <Space direction="vertical">
      <Space
        direction="horizontal"
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignSelf: 'start',
        }}
        align="start"
      >
        <Title level={2} style={{ margin: '0' }}>
          팀원 현황
        </Title>
        <Button>전체 조회</Button>
      </Space>
      <Table
        columns={columns}
        dataSource={teamMembers}
        pagination={{ defaultCurrent: 1, position: ['bottomCenter'] }}
      />
    </Space>
  );
};

export default TeamMembers;
