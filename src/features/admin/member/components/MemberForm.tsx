import React, { useEffect } from 'react';
import { Drawer, Form, Col, Row, Input, Radio } from 'antd';
import type { FormInstance } from 'antd/es/form';

const MemberForm = ({

  initialValues,
  visible=false,
  onClose,
  memberForm,
} : {
  initialValues?: object,
  visible: boolean,
  onClose: () => void,
  memberForm: FormInstance<any>,
}) => {
  /* eslint-disable */
  useEffect(() => {
    if (initialValues) {
      memberForm.setFieldsValue(initialValues);
    }
  },[initialValues]);

    return (
      <>
        <Drawer
          title="회원 정보 관리"
          width={720}
          onClose={onClose}
          open={visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Form 
            layout="vertical"
            hideRequiredMark
            form={memberForm}
            name="memberForm"
            >
            <Form.Item
              name="id"
              hidden
            >
              <Input placeholder="id" disabled />
            </Form.Item>
            <Form.Item
              name="password"
              hidden
            >
              <Input
                placeholder="pwd"
                disabled
              />
            </Form.Item>
            <Form.Item
              name="isSuperuser"
              hidden
            >
              <Input
                placeholder="superuser"
                disabled
              />
            </Form.Item>
            <Form.Item
              name="isAdmin"
              hidden
            >
              <Input
                placeholder="admin"
                disabled
              />
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="성명"
                  rules={[{ required: true, message: '이름을 입력해주세요.' }]}
                >
                  <Input
                    placeholder="이름"
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="이메일"
                  rules={[{ required: true, message: '이메일을 입력해주세요.' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    placeholder="이메일"
                    disabled
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="memberTelNo"
                  label="전화번호"
                >
                  <Input
                    placeholder="전화번호"
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="blngOrgnNm"
                  label="소속기관"
                  rules={[{ required: true, message: '소속기관을 입력해주세요.' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    placeholder="소속기관"
                    disabled
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="승인 여부" name="useSttCd">
                  <Radio.Group buttonStyle="solid" disabled>
                    <Radio value="CL003001000">인증 전</Radio>
                    <Radio value="CL003002000">정상</Radio>
                    <Radio value="CL003003000">정지</Radio>
                    <Radio value="CL003004000">휴면</Radio>
                    <Radio value="CL003005000">탈퇴</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="사용여부" name="useYn">
                  <Radio.Group disabled>
                    <Radio value="Y">사용</Radio>
                    <Radio value="N">미사용</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span={8}>                
                <Form.Item label="삭제여부" name="dltYn">
                  <Radio.Group disabled>
                    <Radio value="Y">Y</Radio>
                    <Radio value="N">N</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="정보공개활용동의" name="idvdInfoOpenYn">
                  <Radio.Group disabled>
                    <Radio value="Y">Y</Radio>
                    <Radio value="N">N</Radio>
                  </Radio.Group>
                </Form.Item>
                </Col>
              <Col span={8}>
                <Form.Item label="이용약관동의" name="useClusCsntYn">
                  <Radio.Group disabled>
                    <Radio value="Y">Y</Radio>
                    <Radio value="N">N</Radio>
                  </Radio.Group>
                </Form.Item>
                </Col>
              <Col span={8}>
                <Form.Item label="개인정보처리동의" name="idvdInfoHdlgCsntYn">
                  <Radio.Group disabled>
                    <Radio value="Y">Y</Radio>
                    <Radio value="N">N</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="최초등록일자" name="frstRegDt">
                  <Input
                    style={{ width: '100%' }}
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="최종접속일시" name="lastLogin">
                  <Input
                    style={{ width: '100%' }}
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="최종수정일시" name="lastModfDt">
                  <Input
                    style={{ width: '100%' }}
                    disabled
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );
}

export default MemberForm;