import React, { useEffect, useState } from 'react';
import { Form, Input, Radio } from 'antd';
import PropTypes, {func} from "prop-types";

const CodeForm = (initialValues: any, submitHandler: (fieldsValue: any) => void, deleteHandler: (fieldsValue: any, form: object) => void, updateHandler: (fieldsValue: any) => void) => {
  const [codeForm] = Form.useForm();
  const [viewMode, setViewMode] = useState<boolean>(true);
  const [createMode, setCreateMode] = useState<boolean>(true);
  const [buttonViewMode, setButtonViewMode] = useState<boolean>(true);

  /* eslint-disable */
  useEffect(() => {
    if (initialValues) {
      codeForm.setFieldsValue(initialValues);
      setViewMode(false);
    }
    if (codeForm.getFieldValue('commCd') !== undefined) {
      setButtonViewMode(false);
      setCreateMode(true);
    }
  }, [initialValues]);

  const addCodeGroupHandler = () => {
    codeForm.resetFields();
    codeForm.setFieldsValue({
      hirkCommCd: 'CL000000000',
      useYn: 'Y',
      dltYn: 'N',
    });

    setViewMode(false);
    setButtonViewMode(true);
    setCreateMode(false);
  };

  const addCodeHandler = () => {
    codeForm.resetFields();
    codeForm.setFieldsValue({
      hirkCommCd: initialValues.commCd,
      useYn: 'Y',
      dltYn: 'N',
    });

    setViewMode(false);
    setButtonViewMode(true);
    setCreateMode(false);
  };

  return (
    <>
      <div className={'mb10 text_R'}>
        <button title={'코드그룹추가'} className={'primary'} onClick={addCodeGroupHandler} />
        <button title={'하위코드추가'} className={'secondary'} onClick={addCodeHandler} />
      </div>

      <Form
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 21 }}
        form={codeForm}
        name="codeForm"
        onFinish={submitHandler}>
        <Form.Item label="상위공통코드" name="hirkCommCd">
          <Input placeholder="" readOnly={true} disabled />
        </Form.Item>
        <Form.Item label="공통코드" name="commCd">
          <Input placeholder="" readOnly={true} disabled />
        </Form.Item>

        <Form.Item
          label="코드명"
          name="commCdNm"
          rules={[{ required: true, message: '코드명은 필수 항목 입니다.' }]}>
          <Input placeholder="" readOnly={viewMode} disabled={viewMode} />
        </Form.Item>
        <Form.Item label="정렬순서" name="commCdSortSn">
          <Input placeholder="" readOnly={viewMode} disabled={viewMode} />
        </Form.Item>
        <Form.Item label="기타1" name="etcRWmkCn1">
          <Input placeholder="" readOnly={viewMode} disabled={viewMode} />
        </Form.Item>
        <Form.Item label="기타2" name="etcRmkCn2">
          <Input placeholder="" readOnly={viewMode} disabled={viewMode} />
        </Form.Item>
        <Form.Item label="기타3" name="etcRmkCn3">
          <Input placeholder="" readOnly={viewMode} disabled={viewMode} />
        </Form.Item>
        <Form.Item label="사용여부" name="useYn">
          <Radio.Group disabled={viewMode}>
            <Radio value="Y">사용</Radio>
            <Radio value="N">미사용</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="삭제여부" name="dltYn">
          <Radio.Group disabled={viewMode}>
            <Radio value="Y">Y</Radio>
            <Radio value="N">N</Radio>
          </Radio.Group>
        </Form.Item>
        <div style={{ textAlign: 'right' }}>
          <button title={'추가'} className={'primary'} type={'submit'} />
          <button
            title={'수정'}
            className={'secondary'}
            type={'button'}
            onClick={() => updateHandler(codeForm.getFieldsValue())}
          />
          <button
            title={'삭제'}
            className={'tertiary'}
            type={'button'}
            onClick={() => deleteHandler(codeForm.getFieldValue('commCd'), codeForm)}
          />
        </div>
      </Form>
    </>
  );
};

// CodeForm.propTypes = {
//   initialValues: PropTypes.object.isRequired,
//   submitHandler: PropTypes.func,
//   updateHandler: PropTypes.func,
//   deleteHandler: PropTypes.func,
// }

export default CodeForm;
