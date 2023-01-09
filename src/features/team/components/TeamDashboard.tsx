import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, DatePicker, Row, Select, Space, Typography } from 'antd';
import TeamMembers from './TeamMembers';
import TeamMemberAtdcStatus from './TeamMemberAtdcStatus';

const TeamDashboard = () => {
  // axios({})
  const { Title } = Typography;
  const { RangePicker } = DatePicker;
  return (
    <Space direction="horizontal" align="start">
      <TeamMembers />
      <Space direction="vertical">
        <Title level={2} style={{ margin: '0' }}>
          근태 조회
        </Title>
        <Space direction="horizontal">
          <Select
            defaultValue={''}
            style={{ width: '150px' }}
            onChange={(e) => {
              console.log(e);
            }}
            options={[
              {
                value: '',
                label: '연차 종류',
              },
              {
                value: 'day_off',
                label: '연차',
              },
              {
                value: 'am_off',
                label: '오전 반차',
              },
              {
                value: 'pm_off',
                label: '오후 반차',
              },
            ]}
          />
          <DatePicker />
          <DatePicker />
          <Button type="default" style={{ width: '150px' }}>
            조회
          </Button>
        </Space>
        <TeamMemberAtdcStatus />
      </Space>
    </Space>
  );
};

export default TeamDashboard;
