import React from 'react';
import { Button, Card, Image, Input, Space } from 'antd';
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from '@ant-design/icons';

const Login = () => {
  return (
    <Space
      direction="horizontal"
      style={{
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        verticalAlign: 'center',
      }}
    >
      <Card
        style={{
          width: '100%',
          boxShadow: '5px 10px 24px 5px rgba(200, 200, 200, 0.6)',
        }}
      >
        <Space style={{ width: '100%', justifyContent: 'center' }}>
          <Space direction="vertical">
            <Space
              direction="horizontal"
              style={{
                width: '100%',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <Image
                src="https://www.euclidsoft.co.kr/images/euclid-logo.svg"
                alt=""
                preview={false}
                style={{ width: '250px' }}
              />
            </Space>
            <Input
              placeholder="아이디"
              prefix={<UserOutlined className="site-form-item-icon" />}
              size="middle"
              style={{ width: '350px' }}
            />
            <Input.Password
              placeholder="비밀번호"
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="middle"
              style={{ width: '350px' }}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            <Space
              direction="horizontal"
              style={{
                width: '100%',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <Button style={{ width: '200px' }} type="primary">
                로그인
              </Button>
            </Space>
          </Space>
        </Space>
      </Card>
    </Space>
  );
};

export default Login;
