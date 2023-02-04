import React, {useState, useEffect} from 'react';
import {Col, Row} from "antd";

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const TeamDash = () => {

    return (
        <>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={style}>조회폼</div>
      </Col>
      <Col className="gutter-row" span={18}>
        <div style={style}>테이블</div>
      </Col>
    </Row>
        </>
    )
};

export default TeamDash;