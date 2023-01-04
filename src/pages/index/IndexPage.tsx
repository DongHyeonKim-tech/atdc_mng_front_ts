import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const IndexPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <span>테스트</span>
      <Button onClick={() => navigate('/account/login')} type="primary">
        로그인
      </Button>
    </div>
  );
};

export default IndexPage;
