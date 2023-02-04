import React, { useEffect, useState } from 'react';
import { Modal, Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import CodeTreeList from 'features/admin/code/components/CodeTreeList';
import CodeForm from 'features/admin/code/components/CodeForm';
import { codeAction } from 'features/admin/code/codeReducer';
import { deleteCode, insertCode, updateCode } from 'features/admin/code/codeAPI';


const CommCode = () => {
  const dispatch = useDispatch();

  const { codeList, codeDetail } = useSelector((state: any) => ({
    codeList: state.codeReducer.codeList,
    codeDetail: state.codeReducer.codeDetail,
  }));

  /* eslint-disable */
  useEffect(() => {
    dispatch(codeAction.getCodeList({ target: 'codeList' }));
  }, []);

  const [selectedKeys, setSelectedKeys] = useState<Array<string> | undefined>();
  const codeSelectHandler = (keys: any) : void => {
    setSelectedKeys(keys);
    if (keys && keys.length > 0) {
      dispatch(codeAction.getCode({ target: 'codeDetail', codeKey: keys[0] }));
    }
  };

  const codeSubmitHandler = (formData: object) => {
    Modal.confirm({
      title: '코드 추가',
      content: '해당 코드를 추가하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      onOk: () => {
        try {
          insertCode(formData).then(() => {
            dispatch(codeAction.getCodeList({ target: 'codeList' }));
          });
        } catch (e) {
          console.error(e);
        }
      },
    });
  };

  const codeDeleteHandler = (codeKey: any, codeForm: any) => {
    Modal.confirm({
      title: '코드 삭제',
      content: '해당 코드를 삭제하시겠습니까? (하위 코드가 있으면 함께 삭제됩니다.)',
      okText: '확인',
      cancelText: '취소',
      onOk: () => {
        try {
          deleteCode(codeKey).then(() => {
            dispatch(codeAction.getCodeList({ target: 'codeList' }));
            codeForm.resetFields();
          });
        } catch (e) {
          console.error(e);
        }
      },
    });
  };

  const codeUpdateHandler = (formData: any) => {
    Modal.confirm({
      title: '코드 수정',
      content: '해당 코드를 수정하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      onOk: () => {
        try {
          updateCode(formData).then(() => {
            dispatch(codeAction.getCodeList({ target: 'codeList' }));
          });
        } catch (e) {
          console.error(e);
        }
      },
    });
  };

  // useEffect(() => {
  //   if (codeList.error) {
  //     Modal.error({
  //       title: '오류 발생',
  //       content: codeList.errorMessage,
  //       okText: '확인',
  //     });
  //   }
  // }, [codeList]);

  type dataSourceType = {children: Array<any>}

  return (
    <>

<Row gutter={16}>
      <Col className="gutter-row" span={6}>
          <CodeTreeList
        dataSource={codeList.data}
        selectedKeys={selectedKeys}
        codeSelectHandler={codeSelectHandler}
      />    
      </Col>
      <Col className="gutter-row" span={18}>
              <CodeForm
        initialValues={codeDetail.data}
        submitHandler={codeSubmitHandler}
        deleteHandler={codeDeleteHandler}
        updateHandler={codeUpdateHandler}
      />
      </Col>
    </Row>


    </>
  );
};

export default CommCode;
